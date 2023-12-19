$(document).ready(function(){

    $('#search-order').on('click', function() { 

        let product     = $('#category-select')[0].value;
        let schedule    = $('#status-select')[0].value;

        getOrder2Admin(product, schedule); 
    });
    
    function getOrder2Admin(product, schedule){

        console.log(product, schedule);

        $.ajax({
            type: "POST",
            url: "../databaseapi/getAdminSearch.php",
            dataType:'json',
            data:{'submit':'adminSearch','category':product , 'status':schedule},
            
            success: function(response){  
    
                console.log(response.result);
                $('#order-table tbody').find("tr").remove();
                // let table = document.getElementById('order-table');
                let table = $('#order-table tbody')[0];
                response.map(data => {
                    const {costomer_id, product_name, order_id, price, delivery_id,delivery_company,schedule} = data;
                    let row = table.insertRow(-1);
                    let cell_1 = row.insertCell(0);
                    let cell_2 = row.insertCell(1);
                    let cell_3 = row.insertCell(2);
                    let cell_4 = row.insertCell(3);
                    let cell_5 = row.insertCell(4);
                    let cell_6 = row.insertCell(5);
                    let cell_7 = row.insertCell(6);
                    
                    cell_1.innerText = costomer_id;
                    cell_2.innerText = product_name;
                    cell_3.innerText = order_id;
                    cell_4.innerText = price;
                    cell_5.innerText = delivery_id;
                    cell_6.innerText = delivery_company;
                    cell_7.innerText = schedule === 'uncomplete' ? 'X':'O' ;
                });
                
            },
            error: function( XMLHttpRequest,response){
                alert("fail");
                console.log(response);
                console.log(XMLHttpRequest);
            }
        });

     }

});