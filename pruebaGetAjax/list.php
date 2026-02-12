<?php
    include('dbOn.php');
    $query = "SELECT * FROM $table LIMIT 5";
    $result = mysqli_query($connection,$query);
    $json=[];
    while($row=mysqli_fetch_array($result)){
        $json[]=[
            'name' => $row['name'],
            'text' => $row['text']
        ];
    };

    $jsonstring = json_encode($json);//array asociativo -> string
    echo $jsonstring;
