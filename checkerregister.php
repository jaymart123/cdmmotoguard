<?php
// register.php
include 'checkerconnect.php';

if (isset($_POST['sign-up-btn'])){ 
    $username=$_POST['username'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $password=md5($password);

    $checkUsername="SELECT * From checker where email='$email'";
    $result=$conn->($checkUsername);
    if($result->num_rows>0){
        echo "Username Already Exists!";
    }
    else{
        $insertQuery="INSERT INTO checker(username,email,password)
              VALUES ('$username', '$email', '$password)";
        if($conn->query($insertQuery)==TRUE){
            header("location: index.html");
        }
        else{
            echo"Error:".$conn->error;
        }
}
if(isset($_POST['sign-in-btn'])){
    $username=$_POST['email'];
    $password=$_POST['password'];
    $password=md5($password);

    $sql="SELECT * FROM checker WHERE username='$username' and password='$password'";
    $result=$conn->query($sql);
    if($result->num_rows>0){
        session_start();
        $row=$result->fetch_assoc();
        $_SESSION['username']=$row['username'];
        header("Location: studentdashboard.html");
        exit();
     }
     else{
        echo "Not Found, Incorrect Username and Password"; 
     }
}
?>
