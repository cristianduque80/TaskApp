<?php
    include('connectionOn.php');
    if(strlen($_POST['id'])>0){
        $id = $_POST['id'];

        $query = "DELETE FROM $table WHERE id = $id";
        $result = mysqli_query($connection,$query);

        if(!$result){
            die('Query failed');
        }
        echo "Task Deleted Successfully";   
    }
    
    
