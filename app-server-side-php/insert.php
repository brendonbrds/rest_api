<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// INCLUDING DATABASE AND MAKING OBJECT
require 'database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// GET DATA FORM REQUEST
// $data = json_decode(file_get_contents("php://input"));

$data = [
    "title" => $_POST['title'],
    "body" => $_POST['body'],
    "author" => $_POST['author']
];

// var_dump($data);
// array_key_exists('title', $data);
// exit();

//CREATE MESSAGE ARRAY AND SET EMPTY
$msg = "";

// CHECK IF RECEIVED DATA FROM THE REQUEST
if (isset($data['title']) && isset($data['body']) && isset($data['author'])) {
    // CHECK DATA VALUE IS EMPTY OR NOT
    if (!empty($data['title']) || !empty($data['body']) || !empty($data['title'])) {

        $insert_query = "INSERT INTO `posts`(title,body,author) VALUES(:title,:body,:author)";

        $insert_stmt = $conn->prepare($insert_query);
        // DATA BINDING
        $insert_stmt->bindValue(':title', htmlspecialchars(strip_tags($data['title'])), PDO::PARAM_STR);
        $insert_stmt->bindValue(':body', htmlspecialchars(strip_tags($data['body'])), PDO::PARAM_STR);
        $insert_stmt->bindValue(':author', htmlspecialchars(strip_tags($data['author'])), PDO::PARAM_STR);

        if ($insert_stmt->execute()) {
            $msg = "Dados cadastrados!";
        } else {
            $msg = "Não foi possivel terminar o cadastro, tente novamente ou contate o responsável pela aplicação.";
        }
    } else {
        $msg  = "Oops! Campos Vazios Detectados, Por Favor preencha todos os campos.";
    }
} else {
    $msg = "Por Favor preencha todos os campos | title, body, author";
}
//ECHO DATA IN JSON FORMAT
echo  json_encode($msg);
