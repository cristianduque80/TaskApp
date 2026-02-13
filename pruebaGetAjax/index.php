<?php
    include('dbOn.php');

    $tittle = $_POST['tittle'];
    $description = $_POST['description'];
    $username = $_POST['username'];
 
    //echo $tittle.' '.$description.' '.$username;

     $query = "SELECT id FROM user WHERE name LIKE '$username' ";
     $result = mysqli_query($connection,$query);
     $user_id='';
    while($row = mysqli_fetch_array($result)){
        $user_id=$row['id'];
    };
    session_start();
    ob_start();
    $_SESSION['user_id'] = $user_id;
    //echo $_SESSION['user_id'];

    $query = "INSERT INTO $table (tittle,description,user_id) VALUES ('$tittle','$description','$user_id')";
    $result = mysqli_query($connection,$query);
    if($result){
        echo "Enviado";
    }else{
        echo "Error";
    }

    include('dbOff.php');