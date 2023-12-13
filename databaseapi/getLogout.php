<?php
// 連接到MySQL數據庫
$servername = "localhost";
$dbUsername = "root"; 
$dbPassword = "";
$dbname = "shopping_store";

session_start();

// 創建連接
$conn = new mysqli($servername, $dbUsername, $dbPassword, $dbname);

// 檢查連接
if ($conn->connect_error) {
    die(json_encode(['status' => 'error', 'message' => 'Connection failed: ' . $conn->connect_error]));
}

// 從POST請求獲取用戶名和密碼

if(!isset($_POST['submit']))
{
    exit("wrong");
}

if ($_POST['submit'] == 'logout')
{

    if(isset($_SESSION)){

        session_unset();
        header($_SERVER['SERVER_PROTOCOL'].'200');
        $Result['result'] = 'Logout';

        mysqli_close($conn);
        echo json_encode($Result);
    }

}


?>
