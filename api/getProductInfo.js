$(document).ready(function(){


    $(window).on('load', function() {

        let productname = new URLSearchParams(window.location.search);
        // console.log(productname.get('productName'));
        get_product_info(productname.get('productName'));
    });


    $('#handleAddToCard').on('click', function(){

        let num = $('#orderNum').val();
        let productname = new URLSearchParams(window.location.search);
        let price = $('.product-price')[0].children[0].textContent.split(' ')[0];
        let img = $('.larg-img')[0].children[0].src
        let url = "./cart.html?productName="+productname.get('productName')+"&number="+num + "&price="+price + "&img="+img;
        
        window.location.href = url;
    });


    
    function get_product_info(name){

        $.ajax({
            type:"POST",
            url: "./databaseapi/getProductInfo.php",
            dataType: "json",
            data:{ 'submit':'productinfo' , 'name':name},
            success: function(response){
                let cate = response['category'];
                if (cate == "desktop" ){
                     $('.larg-img')[0].children[0].src = "./img/desktop_picture/000001_1689664331.jpg";
                }
                else if ( cate == 'laptop' ){
                     $('.larg-img')[0].children[0].src = "./img/laptop_picture/l000002_1702017530.jpg";
                }
                else{
                     $('.larg-img')[0].children[0].src = "./img/monitor_picture/l000001_1702226140.jpg";
                }
                // console.log($('.product-meta')[0].children[0].textContent);
                $('.product-name')[0].children[0].textContent = response['product_name'];
                $('.product-price')[0].children[0].textContent = response['price'] + " NTD";
                $('.product-meta')[0].children[0].textContent = "Category: " + response['category'];
                $('.product-long-description')[0].children[1].textContent = response['item_describe'];

            },
            error: function(XMLHttpRequest){
                console.log("fail");
                console.log(XMLHttpRequest);
            } 
        })
    }

});
