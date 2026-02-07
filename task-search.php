<?php
    include('connectionOn.php');

    $search = $_POST['search'];

    if(!empty($search)){
        $query = "SELECT * FROM $table WHERE name LIKE '$search%' ";
        $result = mysqli_query($connection, $query);
        if(!$result){
            include('connectionOff.php');
            die('Query Error'.mysqli_error($connection));
        }

        $json = [];
        while($row = mysqli_fetch_array($result)){
            $json[] = [
                'name' => $row['name'],
                'description' => $row['description'],
                'id' => $row['id'] 
            ];
        }
        $jsonString = json_encode($json);//Transforma el array que almacena el objeto en un string

        echo $jsonString;
    } 