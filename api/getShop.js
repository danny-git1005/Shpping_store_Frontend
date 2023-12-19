$(document).ready(function(){

    getShop('all');

    function getShop(category){
        console.log(category);
        $.ajax({
            type: "POST",
            url: "./databaseapi/getShop.php",
            dataType:'json',
            data:{'submit':'shop','category':category},
            
            success: function(response){  
                $(".product").remove();
                
                let parent = $(".product-content");
                response.map((cate) => {
                    const {category, product_name, price} = cate;
                    parent.append(`
                    <div class="product">
						<a >
							<img src="${(function () {
                                switch(category) {
                                    case 'desktop':
                                        return './img/desktop_picture/000001_1689664331.jpg'
                                    case 'laptop':
                                        return './img/laptop_picture/l000002_1702017530.jpg'
                                    default:
                                        return './img/monitor_picture/l000001_1702226140.jpg'
                                }
                            })()}">
						</a>
						<div class="product-detail">
							<h3>${category}</h3>
							<h2>${product_name}</h2>
							<p>${price} NTD</p>
						</div>
					</div>`
                    )
                })

                $('.product').on('click', function() {
                    let name = $(this).children('.product-detail').children()[1].innerText;
                    console.log(name);
                    url = "./product.html?productName="+name;
                    window.location.href = url;
                });
                
            },
            error: function( XMLHttpRequest,response){
                alert("fail");
                console.log(response);
                console.log(XMLHttpRequest);
            }
        });

    }


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