$(document).ready(function(){

    getShop('all');

    $('.product').on('click', function() {
        let name = $(this).children('.product-detail').children()[1].innerText;
        console.log(name);
        url = "./product.html?productName="+name;
        window.location.href = url;
    })


    $('#cat desktop').click(function() { 
        getShop('desktop'); 
    });
    
    function getShop(category){
        console.log(category);
        $.ajax({
            type: "POST",
            url: "./databaseapi/getShop.php",
            dataType:'json',
            data:{'submit':'shop','category':category},
            
            success: function(response){  
                
                let all_product = $(".product");
                for (var i=0; i <= all_product.length; i++){
                    
                    if (response[i]['category'] == 'desktop' ){
                        all_product[i].children[0].children[0].src = "./img/desktop_picture/000001_1689664331.jpg";
                    }
                    else if ( response[i]['category'] == 'laptop' ){
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

});