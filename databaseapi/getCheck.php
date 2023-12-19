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
// $data = json_decode($_POST['submit']);

if(!isset($_POST['submit']))
{
    exit("wrong");
    }

if ($_POST['submit'] == 'order_confirm')
{

    $pName      = $_POST['product'];
    $customer   = $_POST['customer'];
    $delivery   = $_POST['delivery'];


    $sql1 = "SELECT product_id FROM product WHERE product_name='$pName';" ;
    $sql2 = "SELECT delivery_id FROM delivery WHERE delivery_company='$delivery';" ;

    
    $result1    = mysqli_query($conn,$sql1);
    $row1       = mysqli_fetch_array($result1);
    $result2    = mysqli_query($conn,$sql2);
    $row2       = mysqli_fetch_array($result2);

    $product_id     = $row1['product_id'];
    $delivery_id    = $row2['delivery_id'];
    $order_id       = date('YmdHis') . 'a';

    $sql3       = "INSERT INTO `orders`(`order_id`, `product_id`, `delivery_id`, `customer_id`, `schedule`) VALUES 
                    ('$order_id ','$product_id','$delivery_id','$customer','uncomplete')";
    $result3    = mysqli_query($conn,$sql3);

    if ($result3 != NULL){
        header($_SERVER['SERVER_PROTOCOL'].'200');
        $Result['result'] = "Order Successfully";
    }

}
else{
    header($_SERVER['SERVER_PROTOCOL'].'200');
    $Result['result'] = " Wrong Request! ";
    
}



mysqli_close($conn);
echo json_encode($Result);


?>
