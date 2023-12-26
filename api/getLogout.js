$(document).ready(function(){

    $('#logOut_button_admin').click(function() { 
        logOut("../databaseapi/getLogout.php", '../index.html'); 
    });

    $('#logOut_button').click(function() { 
        logOut("databaseapi/getLogout.php", './index.html'); 
    });
    
    function logOut(post_url, url){

        $.ajax({
            type: "POST",
            url: post_url,
            dataType:'json',
            data:{'submit':'logout'},
            success: function(response){  
    
                if ( response.result )
                {
                    alert(response.result+" success");
                    $.cookie('userid',"",{ expires: -1 });
                    location.href = url;
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