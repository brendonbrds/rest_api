<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// INCLUDING DATABASE AND MAKING OBJECT
require 'database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// GET DATA FORM REQUEST
// $data = json_decode(file_get_contents("php://input"));
$data = [
    "id" => $_GET['id']
];
var_dump($data);
exit();


//CHECKING, IF ID AVAILABLE ON $data
if (isset($data['id'])) {
    $msg['message'] = '';

    $post_id = $data['id'];

    //DELETE POST BY ID FROM DATABASE
    $delete_post = "DELETE FROM `posts` WHERE id=:post_id";
    $delete_post_stmt = $conn->prepare($delete_post);
    $delete_post_stmt->bindValue(':post_id', $post_id, PDO::PARAM_INT);

    if ($delete_post_stmt->execute()) {
        $msg['message'] = 'Deletado com sucesso!';
    } else {
        $msg['message'] = 'Falha! Não Deletado';
    }

    // ECHO MESSAGE IN JSON FORMAT
    echo  json_encode($msg);
}
