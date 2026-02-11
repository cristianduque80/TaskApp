<?php
    include('dbOn.php');

    $name = $_POST['name'];
    $coment = $_POST['coment'];

    $query = "INSERT INTO $table (name,text) VALUES ('$name','$coment')";
    $result = mysqli_query($connection,$query);
    if($result){
        echo "Enviado";
    }else{
        echo "Error";
    }

    include('dbOff.php');