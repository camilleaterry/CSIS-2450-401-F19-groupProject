<?php
include("DBconnection.php");
$myjson = file_get_contents('php://input');


function searchItem($conn, $ItemName)
{
    $search = "SELECT * FROM csis2450.ItemTable WHERE `ItemName`=" .$ItemName .";";
    $results = $conn -> query($search);
    //$rows = mysqli_num_rows($results);
    //echo "<br> rows is: " .$rows ."<br>";
    if (!$results || mysqli_num_rows($results) == 0)
    {
        createItem($conn, $ItemName, $ItemQuantitiy);
        //$failmess = "Whole query: " . $search . "<br>";
        //echo $failmess;
        
        //print ('Invalid query: ' . mysqli_error($conn) . "<br>");
    } 
    else
    {
        echo "Something Bad Happened :(";
    }
    //echo $success;
}


function createItem($conn, $ItemName, $ItemQuantitiy)
{
    $insert = "INSERT INTO csis2450.ItemTable (`ItemName`, `ItemQuantitiy`) "
        ."VALUES('" .$ItemName ."', '" .$ItemQuantitiy ."');";
    //echo $insert ."<br>";
    $success = $conn -> query($insert);
    
    if ($success ==FALSE)
    {
        //$failmess = "Whole query: " . $insert . "<br>";
        //echo $failmess;
        
        print ('Invalid query: ' . mysqli_error($conn) . "<br>");
    } 
    else
    {
        echo "accepted.<br>";
    }
}


//function fixdate($mydate){
//$d = explode('/', $mydate);
//$da = mktime(0,0,0, $d[0], $d[1], $d[2]);
//$da = date("Y-m-d", $da);
   // return $da;
function isJSON($j)
{
   return is_string($j) && is_array(json_decode($j, true)) && (json_last_error() == JSON_ERROR_NONE) ? true : false;
}
echo "<br>";
if(isJSON($myjson)){
$data = json_decode($myjson);
    
foreach ($data as $obj){
    for($i = 0; $i<count($obj); $i++){
        $eventtitle = $obj[$i]->EventName;
        $day = $obj[$i]->EventDay;
        $month = $obj[$i]->Month;
        $year = $obj[$i]->Year;  
        searchEvent($conn, $eventtitle, $day, $month, $year);
    }
}  
 
}else{
    echo "Error please pick a date.";
}
?>