<?php
    $degTitile=$_POST["degTitle"];
    $passingYear=$_POST["PassingYear"];
    $eduLevel= $_POST["eduLevel"];
    $result= $_POST["res"];
    $host="localhost";
    $dbusername="root";
    $dbpassword ="password";
    $dbname="Users";
    echo('hello');
    $conn= new mysqli($host , $dbusername, $dbpassword,$dbname);
    if(mysqli_connect_error()){
        die('Connect Error('.mysqli_connect_errorno().')'.mysqli_connect_error());
    }
    else{
        $sql="INSERT INTO user_Details(degTitle,passingYear,eduLevel,result) values ('$degTitile','$passingYear','$eduLevel','$result')";
        if ($conn->query($sql)){
            echo "New record is inserted successfully";
        }
        else{
            echo "Error:".$sql."<br>".$conn->error;
        }
        $conn->close();
    }
?>