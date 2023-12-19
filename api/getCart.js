$(document).ready(function(){

    $(window).on('load', function() {

        let productInfo = new URLSearchParams(window.location.search);
        // console.log(productname.get('productName'));
        let productName = productInfo.get('productName');
        let num         = productInfo.get('number');
        let price       = productInfo.get('price');
        let img       = productInfo.get('img');

        get_cart_info(productName, num, price, img);
        
    });

    $('#gotoCheck').on('click', function(){
        console.log('in');
        let table = $('#cartTable');
        cartItemLoc =  table.children()[1].children[0];
        let productName = cartItemLoc.children[1].children[0].textContent ;
        let price = cartItemLoc.children[1].children[1].textContent ;
        let num = cartItemLoc.children[2].children[2].value;


        let url = "./checkout.html?productName="+productName+"&number="+num+"&price="+price;
        console.log(url);
        window.location.href = url;
    });

    function get_cart_info(productName, number, price, img){

        let table = $('#cartTable');
       
        table.children()[1].children[0].children[0].children[0].src = img;

        cartItemLoc =  table.children()[1].children[0];
        cartItemLoc.children[1].children[0].textContent = productName;
        cartItemLoc.children[1].children[1].textContent = price + " NTD";

        cartItemLoc.children[2].children[2].value = number;
        cartItemLoc.children[2].children[5].textContent = number * price + " NTD";

        let checkout = $('.checkout-total');

        checkout[0].children[1].children[1].textContent = "Number of items x" + number
        checkout[0].children[1].children[3].children[0].textContent = number * price + " NTD";

    }

});
