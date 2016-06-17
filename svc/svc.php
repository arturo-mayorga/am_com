<?php 

    // echo $_GET["paged"] . '<p>'; 
    // echo $_GET["cat"] . '<p>';


    $file_handle = fopen("index.json", "r");
    while (!feof($file_handle)) 
    {
        $line = fgets($file_handle);
        echo $line;
    }
    fclose($file_handle);

    $jsonTxt = file_get_contents('index.json');
    // echo $jsonTxt;

    $json = json_decode($jsonTxt, true);

    // var_dump($json['posts']);

    $posts = $json['posts'];

    arsort($posts);

    // var_dump($posts);

?>

