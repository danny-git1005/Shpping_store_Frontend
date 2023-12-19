$(document).ready(function(){


    $(window).on('load', function() {

        let productInfo = new URLSearchParams(window.location.search);
        // console.log(productname.get('productName'));
        let productName = productInfo.get('productName');
        let num         = productInfo.get('number');
        let price       = productInfo.get('price');

        get_check_info(productName, num, price.split(' ')[0]);
        
    });

    $('#orderconfirm').on('click', function(){
        let productInfo     = new URLSearchParams(window.location.search);
        let productName     = productInfo.get('productName');
        let num             = productInfo.get('number');
        let price           = productInfo.get('price');
        let option_value    = $('#Delivery')[0].value;
        let delivery        = $('#Delivery')[0].options[option_value].text;;
        
        console.log(productName, delivery);
        $.ajax({
            type: "POST",
            url: "./databaseapi/getCheck.php",
            dataType:'json',
            data:{  'submit':'order_confirm',
                    'customer':$.cookie('userid'),
                    'product':productName, 
                    'delivery': delivery},
            
            success: function(response){  
                
                if (response.result == "Order Successfully" ){
                    location.href = "./account.html";
                }
            },
            error: function( XMLHttpRequest,response){
                alert("fail");
                console.log(response);
                console.log(XMLHttpRequest);
            }
        });
    });

    function get_check_info(productName, number, price){

        let orderSummary = $('.checkout-total');
        
        console.log(number * price);
        orderSummary[0].children[1].children[0].children[0].textContent = number * price + " NTD";
        orderSummary[0].children[1].children[1].children[0].textContent = Math.ceil( number * price * -0.1) + " NTD";
        orderSummary[0].children[1].children[3].children[0].textContent = Math.ceil(number * price * 0.9) + " NTD";

    }

});
