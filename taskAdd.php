<?php
    include('connectionOn.php');

        $name = $_POST['name'];
        $description = $_POST['description'];
        $query = "INSERT INTO $table (name,description) VALUE ('$name','$description')";
        $result = mysqli_query($connection,$query);
        if(!$result){
            die('Query failed');
        }
        echo "Task Add successful";
    