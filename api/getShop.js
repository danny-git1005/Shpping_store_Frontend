$(document).ready(function(){

    function getShop(category){
        console.log(category);
        $.ajax({
            type: "POST",
            url: "./databaseapi/getShop.php",
            dataType:'json',
            data:{'submit':'shop','category':category},
            
            success: function(response){  
                console.log(response);
                let all_product = $(".product");
                for (var i=0; i <= all_product.length; i++){
                    let cate = response[i]['category'];
                    if (cate == "desktop" ){
                        all_product[i].children[0].children[0].src = "./img/desktop_picture/000001_1689664331.jpg";
                    }
                    else if ( cate == 'laptop' ){
                        all_product[i].children[0].children[0].src = "./img/laptop_picture/l000002_1702017530.jpg";
                    }
                    else{
                        all_product[i].children[0].children[0].src = "./img/monitor_picture/l000001_1702226140.jpg";
                    }
                    all_product[i].children[1].children[0].textContent = response[i]['category'];
                    all_product[i].children[1].children[1].textContent = response[i]['product name'];
                    all_product[i].children[1].children[2].textContent = response[i]['price'] + " NTD";
                }
                
            },
            error: function( XMLHttpRequest,response){
                alert("fail");
                console.log(response);
                console.log(XMLHttpRequest);
            }
        });

    }
    getShop('all');

    $('.product').on('click', function() {
        let name = $(this).children('.product-detail').children()[1].innerText;
        console.log(name);
        url = "./product.html?productName="+name;
        window.location.href = url;
    })


    $('#cat_desktop').on('click', function() { 
        getShop('desktop'); 
    });

    $('#cat_laptop').on('click', function() { 
        console.log("in");
        getShop('laptop'); 
    });

    $('#cat_monitor').on('click', function() { 
        getShop('monitor'); 
    });
    

});