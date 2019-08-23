<?php
    $host="localhost";
    $dbusername="root";
    $dbpassword ="password";
    $dbname="Users";
    $counter=$_POST["counter"];
    $recordsAdded=0;
    // echo('hello');
    $conn= new mysqli($host , $dbusername, $dbpassword,$dbname);
     if(mysqli_connect_error()){
         die('Connect Error('.mysqli_connect_errorno().')'.mysqli_connect_error());
     }
     else{
         for($i=0;$i<$counter;$i=$i+1)
         {
            $degTitle=$_POST["degTitle"][$i];
            $passingYear=$_POST["PassingYear"][$i];
            $eduLevel= $_POST["eduLevel"][$i];
            $result= $_POST["res"][$i];
            $sql="INSERT INTO user_Details(degTitle,passingYear,eduLevel,result) values ('$degTitle','$passingYear','$eduLevel','$result')";
            if ($conn->query($sql)){
                echo "New record is inserted successfully";
            }
            else{
                echo "Error:".$sql."<br>".$conn->error;
            }
         };
         
        $conn->close();
    }
    echo 'hello form is send throught serializable()';
?>