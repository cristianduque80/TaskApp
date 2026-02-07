<?php
    $host='localhost';
    $user='root';
    $pass='12345';
    $db='taskApp';

    $table='task';

    $connection = mysqli_connect($host,$user,$pass,$db);

    // if($connection){
    //     echo 'Successful connection';
    // }