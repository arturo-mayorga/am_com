<?php
include 'parsedown.php';


function read_dir($dirName)
{
    $parsedown = new Parsedown();
    $contentMd = $parsedown->text(file_get_contents($dirName . "/content.md"));
    $excerptMd = $parsedown->text(file_get_contents($dirName . "/excerpt.md"));
    $title = json_decode(file_get_contents($dirName . "/title.json"));
    $categoriesJson = json_decode(file_get_contents($dirName . "/categories.json"));

    $categories = array();
    foreach ( $categoriesJson as $categoryId )
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

function write_file_output($fileName, $object)
{
    $handle = fopen( '../' . $fileName, 'w');
    $data = json_encode($object);
    fwrite($handle, $data);
    fclose($handle);
    echo 'writing: ' . $fileName . PHP_EOL;
}

function create_page_object()
{
    $ret = new StdClass();
    $ret->status = 'ok';
    $ret->posts = array();
    return $ret;
}


function get_categories( $posts )
{
    // TODO
    $ret = array();
    foreach ( $posts as $post )
    {
        foreach ( $post->categories as $category )
        {
            $id = $category->id;
            $search = array_search($id, $ret);
            if ( $search === false || $search === NULL )
            {
                $ret[] = $id;
            }
        }
    }

    return $ret;
}


function is_post_in_category( $post, $categoryId )
{
    // TODO
    foreach ( $post->categories as $category )
    {
        $id = $category->id;
        if ( $id === $categoryId )
        {
            return true;
        }
    }

    return false;
}

function generate_category_pages( $posts, $category )
{
    $maxPostsPerPage = 4;
    $postCount = 0;
    $pageNumber = 1;
    $currentPageObject = create_page_object();

    foreach ( $posts as $post )
    {
        if ( is_post_in_category($post, $category) )
        {
            $currentPageObject->posts[] = $post;
            $postCount = $postCount + 1;
        }

        if ( $postCount == $maxPostsPerPage )
        {
            $fileName = "page_" . $category . "_" . $pageNumber . ".json";
            write_file_output( $fileName, $currentPageObject );

            $pageNumber = 1 + $pageNumber;
            $postCount = 0;
            $currentPageObject = create_page_object();
        }
    }

    if ( count($currentPageObject->posts) > 0 )
    {
        $fileName = "page_" . $category . "_" . $pageNumber . ".json";
        write_file_output( $fileName, $currentPageObject );
    }
}

$filelist = glob("*", GLOB_ONLYDIR);
$filelistInt = array();
foreach ( $filelist as $file )
{
    $filelistInt[] = (int)$file;
}
sort($filelistInt);
$filelist = $filelistInt;

echo json_encode($filelist), PHP_EOL;

$posts = array();

foreach ( $filelist as $file )
{
    $post = read_dir($file);
    $posts[] = $post;

    $fileName = "post_" . $post->id . ".json";
    $postFileContent = new StdClass();
    $postFileContent->status = "ok";
    $postFileContent->post = $post;
    write_file_output( $fileName, $postFileContent );
}

$posts = array_reverse( $posts );

$categories = get_categories( $posts );

foreach ( $categories as $category )
{
    generate_category_pages( $posts, $category );
}








