<?php
    include('connectionOn.php');

    $id=$_POST['id'];
    $query="SELECT * FROM $table WHERE id = $id";
    $result=mysqli_query($connection,$query);
    if(!$result){
        die('Query Failed');
    }

    $json = [];
    while($row = mysqli_fetch_array($result)){
        $json[] = [
            'name' => $row['name'],
            'description' => $row['description'],
            'id' => $row['id']
        ];
    }

    $jsonString = json_encode($json);
    echo $jsonString;