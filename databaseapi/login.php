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

// $userUsername = $_POST['username'];
// $userPassword = $_POST['password'];
// $sql = "SELECT * FROM account WHERE ID = '$userUsername' AND pwd = '$userPassword'";
// $result = $conn->query($sql);
// $rows = mysqli_fetch_array($result);
// echo json_encode($rows);

if ($_POST['submit'])
    {
       
        $name       = $_POST['username'];
        $password   = $_POST['password'];

        if($name && $password)
        {
            $sql = "SELECT * FROM account WHERE ID = '$name' AND pwd = '$password'";
            $result0 = mysqli_query($conn,$sql);
            $rows = mysqli_fetch_array($result0);

            if($rows)
            {
                $pos = strpos($rows['ID'], '@');
                if ($pos)
                {
                    header($_SERVER['SERVER_PROTOCOL'].'200');
                    $Result['result'] = "Login success with ".$_POST['username'];
                    $Result['auth'] = 'user';
                    $Result['ID'] = $rows['ID'];
                }
                else 
                {
                    header($_SERVER['SERVER_PROTOCOL'].'200');
                    $Result['result'] = "Login success with ".$_POST['username'];
                    $Result['auth'] = 'admin';
                    $Result['ID'] = $rows['ID'];
                }

            }
            else
            {
                header($_SERVER['SERVER_PROTOCOL'].'200');
                $Result['result'] = " Account or Password error ";
            }
        }
        else
        {
            header($_SERVER['SERVER_PROTOCOL'].'200');
            $Result['result'] = " Please fill the entire data ";
        }

        mysqli_close($conn);
        echo json_encode($Result);
    }

?>
