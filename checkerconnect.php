<?php

$host="localhost";
$username="root";
$password="";
$dbname="cdm motoparkdb";
$conn=new mysqli($host,$user,$pass,$db);
if($conn->connect_error){
    echo "Failed to connect DB".$con->connect_error;
}
?>