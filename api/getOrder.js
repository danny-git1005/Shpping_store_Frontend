function get_user_order(){

    $('#accound_id')[0].textContent = $.cookie('userid');

    $.ajax({
        type: "POST",
        url: "./databaseapi/getUserOrder.php",
        dataType:'json',
        data:{'submit':'user_order', 'user':$.cookie('userid')},
        success: function(response){  
            // console.log(response);
            let table = document.getElementById('orderTable');
            response.map(data => {
                const {product_name, order_id, price, delivery_id,delivery_company,schedule} = data;
                let row = table.insertRow(-1);
                let cell_1 = row.insertCell(0);
                let cell_2 = row.insertCell(1);
                let cell_3 = row.insertCell(2);
                let cell_4 = row.insertCell(3);
                let cell_5 = row.insertCell(4);
                let cell_6 = row.insertCell(5);
                cell_1.innerText = product_name;
                cell_2.innerText = order_id;
                cell_3.innerText = price;
                cell_4.innerText = delivery_id;
                cell_5.innerText = delivery_company;
                cell_6.innerText = schedule === 'uncomplete' ? 'X':'O' ;
            });
        },
        error: function( XMLHttpRequest,response){
            alert("fail");
            console.log(response);
            console.log(XMLHttpRequest);
        }
    });
}