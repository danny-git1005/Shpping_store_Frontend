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

if(!isset($_POST['submit']))
{
    exit("wrong");
}
if ( $_POST['submit'] == 'productinfo' )
{
    $pName = $_POST['name'];
    
    $sql = "SELECT * FROM product where product_name='$pName'";
    $result0 = mysqli_query($conn,$sql);
    $rows = mysqli_fetch_array($result0);

    // $Result = array();
    $Result['product_name']     = $rows['product_name'];
    $Result['weight']           = $rows['weight'];
    $Result['category']         = $rows['category'];
    $Result['price']            = $rows['price'];
    $Result['item_describe']    = $rows['item_describe'];
    
    header($_SERVER['SERVER_PROTOCOL'].'200');

    mysqli_close($conn);
    echo json_encode($Result);
    
}

?>