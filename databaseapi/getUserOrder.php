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

if ($_POST['submit'] == 'user_order')
{
    $user = $_POST['user'];

    $sql = "SELECT 
    orders.order_id, 
    costomer.costomer_id,
    costomer.name,
    costomer.address,
    product.product_id,
    product.product_name,
    product.price,
    orders.delivery_id,
    orders.schedule,
    delivery.delivery_company
    FROM
    orders,
    costomer,
    product,
    delivery
    WHERE
    orders.customer_id = costomer.costomer_id AND orders.customer_id = '$user' AND orders.product_id = product.product_id AND orders.delivery_id = delivery.delivery_id " ;
    
    $result0 = mysqli_query($conn,$sql);

    $j = 0;
    while( $row = mysqli_fetch_array($result0) )
    {
        $Result[$j] = $row;
        $j++;
    }


    // if($rows)
    // {
    //     $id = $rows['costomer_id'];
    //     $name = $rows['name'];
    //     $address = $rows['address'];

    //     header($_SERVER['SERVER_PROTOCOL'].'200');
    //     $Result['result'] = " user found : ".$_POST['user'];

    //     $Result['name'] = $name;
    //     $Result['ID'] = $id;
    //     $Result['address'] = $address;
        
    // }
    // else
    // {
    //     header($_SERVER['SERVER_PROTOCOL'].'200');
    //     $Result['result'] = " User unexit.";
    // }

}
else{
    header($_SERVER['SERVER_PROTOCOL'].'200');
    $Result['result'] = " Wrong Request! ";
    
}



mysqli_close($conn);
echo json_encode($Result);


?>
