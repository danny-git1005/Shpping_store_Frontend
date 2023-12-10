$(document).ready(function(){

    $('#login_button').click(function() { 
        login(); 
    });
    
    function login(){
        let user = $('#account')[0].value;
        let pwd = $('#pwd')[0].value;
        
        $.ajax({
            type: "POST",
            url: "",
            dataType:'json',
            data:{'submit':'login','username':user , 'password':pwd},
            success: function(response){  
    
                //console.log(response.result);
                if ( response.userid )
                {
                    alert(response.result);
                    $.cookie('username',user);
                    $.cookie('userid',response.userid);
                    location.href = "./index_in.html";
                }
                else
                {
                    alert(response.result);
                    location.reload();
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