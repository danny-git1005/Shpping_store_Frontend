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

if ($_POST['submit'] == 'profile')
{
    $user = $_POST['user'];

    $sql = "SELECT * FROM costomer WHERE costomer_id = '$user'";
    $result0 = mysqli_query($conn,$sql);
    $rows = mysqli_fetch_array($result0);

    if($rows)
    {
        $id = $rows['costomer_id'];
        $name = $rows['name'];
        $address = $rows['address'];

        header($_SERVER['SERVER_PROTOCOL'].'200');
        $Result['result'] = " user found : ".$_POST['user'];

        $Result['name'] = $name;
        $Result['ID'] = $id;
        $Result['address'] = $address;
        
    }
    else
    {
        header($_SERVER['SERVER_PROTOCOL'].'200');
        $Result['result'] = " User unexit.";
    }

}
else{
    header($_SERVER['SERVER_PROTOCOL'].'200');
    $Result['result'] = " Wrong Request! ";
    
}



mysqli_close($conn);
echo json_encode($Result);


?>
