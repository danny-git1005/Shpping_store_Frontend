$(document).ready(function(){

    $('#logOut_button').click(function() { 
        logOut(); 
    });
    
    function logOut(){

        $.ajax({
            type: "POST",
            url: "databaseapi/getLogout.php",
            dataType:'json',
            data:{'submit':'logout'},
            success: function(response){  
    
                if ( response.result )
                {
                    alert(response.result+" success");
                    $.cookie('userid',"",{ expires: -1 });
                    location.href = "./index.html";
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