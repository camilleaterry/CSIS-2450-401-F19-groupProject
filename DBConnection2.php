<?php

$host = "csis2450db.cyr1yhmzijo4.us-west-2.rds.amazonaws.com";
$user = "root";
$password = "!Password1234";
$dbname = "csis2450";
$conn = new mysqli($host, $user, $password, $dbname)
        or die('Could not connect to the database server. ' . mysqli_connect_error($conn));

//echo "<h2>we connected<h2>";

function mysql_fix_string($conn, $string) {
    if (get_magic_quotes_gpc()) {
        $string = stripslashes($string);
    }
    $string = htmlentities($string);
    return $conn->real_escape_string($string);
}
?>