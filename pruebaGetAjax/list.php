<?php
    include('dbOn.php');
    session_start();
    ob_start();
    $user_id = $_SESSION['user_id'];
    $query = "SELECT * FROM $table WHERE user_id = '$user_id' ";
    $result = mysqli_query($connection,$query);
    $json=[];
    while($row=mysqli_fetch_array($result)){
        $json[]=[
            'tittle' => $row['tittle'],
            'description' => $row['description'],
            'user_id' => $row['user_id']
        ];
    };

    $jsonstring = json_encode($json);//array asociativo -> string
    echo $jsonstring;
