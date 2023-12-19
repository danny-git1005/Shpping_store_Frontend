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

if ($_POST['submit'] == 'adminSearch')
{   
    $cate = $_POST['category'];
    $status = $_POST['status'];
    
    $sql = "SELECT 
    orders.order_id, 
    costomer.costomer_id,
    costomer.name,
    costomer.address,
    product.product_id,
    product.product_name,
    product.category,
    product.price,
    orders.delivery_id,
    delivery.delivery_company,
    orders.schedule
    FROM
    orders,
    costomer,
    product,
    delivery
    WHERE
    orders.customer_id = costomer.costomer_id  AND orders.product_id = product.product_id AND orders.delivery_id = delivery.delivery_id and orders.schedule = '$status' AND product.category = '$cate'" ;
    
    $result0 = mysqli_query($conn,$sql);

    $j = 0;
    while( $row = mysqli_fetch_array($result0) )
    {
        $Result[$j] = $row;
        $j++;
    }

}
else{
    header($_SERVER['SERVER_PROTOCOL'].'200');
    $Result['result'] = " Wrong Request! ";
    
}



mysqli_close($conn);
echo json_encode($Result);


?>
