<?php
    include('connectionOn.php');
    $query="SELECT * FROM $table";
    $result = mysqli_query($connection,$query);
    if(!$result){
        die('Query failed'.mysqli_error($connection));
    }

    $json = [];
    while($row=mysqli_fetch_array($result)){
        $json[] = [
            'name' => $row['name'],
            'description' => $row['description'],
            'id' => $row['id']
        ];
    }

    $jsonString = json_encode($json);
    echo $jsonString;