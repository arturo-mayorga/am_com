<?php
include 'parsedown.php';


function read_dir($dirName)
{
    $parsedown = new Parsedown();
    $contentMd = $parsedown->text(file_get_contents($dirName . "/content.md"));
    $excerptMd = $parsedown->text(file_get_contents($dirName . "/excerpt.md"));
    $title = file_get_contents($dirName . "/title.txt");
    $categoriesJson = json_decode(file_get_contents($dirName . "/categories.json"));

    $categories = array();
    foreach( $categoriesJson as $categoryId )
    {
        $catRec = new StdClass();
        $catRec->id = $categoryId;
        $categories[] = $catRec;
    }

    $ret = new StdClass();
    $ret->content = $contentMd;
    $ret->excerpt = $excerptMd;
    $ret->title = $title;
    $ret->id = $dirName;
    $ret->url = "?p=" . $dirName;
    $ret->categories = $categories;
    return $ret;
}

$filelist = glob("*", GLOB_ONLYDIR);
$posts = array();

foreach( $filelist as $file )
{
    $posts[] = read_dir($file);
}

echo json_encode($posts);


