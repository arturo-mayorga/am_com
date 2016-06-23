<?php 

function arg_value($argName)
{
    $ret = $_GET[$argName];
    if ( NULL === $ret )
    {
        $ret = 0;
    }

    return $ret;
}

$paged = arg_value("paged"); 
$cat = arg_value("cat");
$p = arg_value("p");

    
function return_file($filename)
{
    $file_handle = fopen($filename, "r");
    if ( $file_handle !== NULL && $file_handle !== false )
    {
        while (!feof($file_handle)) 
        {
            $line = fgets($file_handle);
            echo $line;
        }
        fclose($file_handle);
    }
    else
    {   
        echo '{"status":"fnf"}';
    }
}

$fileName = "";

if ( $p > 0 )
{
    $fileName = "post_" . $p . ".json";
}
else
{
    $fileName = "page_" . $cat . "_" . $paged . ".json";
}

return_file($fileName);

?>

