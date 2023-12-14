function get_user_order(){

    $('#accound_id')[0].textContent = $.cookie('userid');

    $.ajax({
        type: "POST",
        url: "./databaseapi/getUserOrder.php",
        dataType:'json',
        data:{'submit':'user_order', 'user':$.cookie('userid')},
        success: function(response){  

            // console.log(response);

            let tbody = $('#orderTable')[0].children[1];
            for (var i=0; i <= response.length; i++){
                let tr = tbody.children[i];

                tr.children[0].textContent = response[i]['product_name'];
                tr.children[1].textContent = response[i]['order_id'];
                tr.children[2].textContent = response[i]['price'];
                tr.children[3].textContent = response[i]['delivery_id'];
                tr.children[4].textContent = response[i]['delivery_company'];
                if (response[i]['schedule'] == 'uncomplete'){
                    tr.children[5].textContent = "X";
                }
                else{
                    tr.children[5].textContent = "O";
                }

            }
            
        },
        error: function( XMLHttpRequest,response){
            alert("fail");
            console.log(response);
            console.log(XMLHttpRequest);
        }
    });
}