<?php
    include('dbOn.php');
    $query = "SELECT * FROM $table";
    $result = mysqli_query($connection,$query);
    $json=[];
    while($row=mysqli_fetch_array($result)){
        $json[]=[
            'name' => $row['name'],
            'text' => $row['text']
        ]
    }
