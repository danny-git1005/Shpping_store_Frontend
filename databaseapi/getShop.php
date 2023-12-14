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
if ( $_POST['submit'] == 'shop' )
{

    switch ($_POST['category'])
    {
        case "all":
            
            $sql = "SELECT * FROM product ORDER BY RAND() LIMIT 8";
            $result0 = mysqli_query($conn,$sql);
            
            
            $j = 0;
            while( $row = mysqli_fetch_array($result0) )
            {
                $Result[$j] = array();
                $Result[$j]['product name'] = $row['product_name'];
                $Result[$j]['category'] = $row['category'];
                $Result[$j]['price'] = $row['price'];
                $Result[$j]['picture'] = $row['picture'];
                
                // $Result[$j] = $row;

                $j++;
            }

            header($_SERVER['SERVER_PROTOCOL'].'200');

            mysqli_close($conn);
            echo json_encode($Result);

            break;

        // case "desktop":

        //     $sql = "SELECT * FROM product ORDER BY RAND() LIMIT 8;";
        //     $result0 = mysqli_query($conn,$sql);
            
        //     if($result0)
        //     {
        //         $rows = mysqli_fetch_array($result0);

        //         $j = 0;
        //         while( $row = mysqli_fetch_array($result0) )
        //         {
        //             $Result[$j]['product name'] = $row['product_name'];
        //             $Result[$j]['category'] = $row['category'];
        //             $Result[$j]['price'] = $row['price'];
        //             $Result[$j]['picture'] = $row['picture'];

        //             $j++;
        //         }

        //         header($_SERVER['SERVER_PROTOCOL'].'200');
        //         $_SESSION["userid"] = $rows['userid'];
        //     }
        //     else
        //     {
        //         header($_SERVER['SERVER_PROTOCOL'].'200');
        //         $Result['result'] = " DataBase Error ! ";
        //     }

        //     mysqli_close($conn);
        //     echo json_encode($Result);

        //     break;

        // case "desktop":

        //     $sql = "SELECT * FROM product ORDER BY RAND() LIMIT 8;";
        //     $result0 = mysqli_query($conn,$sql);
            
        //     if($result0)
        //     {
        //         $j = 0;
        //         while( $row = mysqli_fetch_array($result0) )
        //         {
            //             $Result[$j]['product name'] = $row['product_name'];
            //             $Result[$j]['category'] = $row['category'];
        //             $Result[$j]['price'] = $row['price'];
        //             $Result[$j]['picture'] = $row['picture'];

        //             $j++;
        //         }

        //         header($_SERVER['SERVER_PROTOCOL'].'200');
        //         $_SESSION["userid"] = $rows['userid'];
        //     }
        //     else
        //     {
        //         header($_SERVER['SERVER_PROTOCOL'].'200');
        //         $Result['result'] = " DataBase Error ! ";
        //     }

        //     mysqli_close($conn);
        //     echo json_encode($Result);
        
        //     break;
        
        // case "desktop":

        //     $sql = "SELECT * FROM product ORDER BY RAND() LIMIT 8;";
        //     $result0 = mysqli_query($conn,$sql);
            
        //     if($result0)
        //     {
        //         $rows = mysqli_fetch_array($result0);

        //         $j = 0;
        //         while( $row = mysqli_fetch_array($result0) )
        //         {
        //             $Result[$j]['product name'] = $row['product_name'];
        //             $Result[$j]['category'] = $row['category'];
        //             $Result[$j]['price'] = $row['price'];
        //             $Result[$j]['picture'] = $row['picture'];

        //             $j++;
        //         }
        
        //         header($_SERVER['SERVER_PROTOCOL'].'200');
        //         $_SESSION["userid"] = $rows['userid'];
        //     }
        //     else
        //     {
        //         header($_SERVER['SERVER_PROTOCOL'].'200');
        //         $Result['result'] = " DataBase Error ! ";
        //     }
        
        //     mysqli_close($conn);
        //     echo json_encode($Result);

        //     break;
    }
}

?>
