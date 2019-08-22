<?php
    $degTitile="deg1";
    $passingYear="2015";
    $eduLevel= "matric";
    $result="3.6";
    if(isset($_POST['PassingYear'],$_POST['degTitle'],$_POST['eduLevel']))
    {
        print_r($_POST);
    }
    $conn= new mysqli('localhost','root','password','Users');
    if($conn -> connect_error)
    {
        die('Error in connecting to Database:'.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into user_Details(edgTitle,passingYear,eduLevel,result) values (?,?,?,?)");
        $stmt -> bind_param("ssss",$degTitile,$passingYear,$eduLevel,$result);
        $stmt->execute();
        echo "Registration is done";
        $stmt -> close();
        $conn -> close();
    }
?>