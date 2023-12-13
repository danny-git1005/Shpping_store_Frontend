
function get_profile(user){

    $.ajax({
        type: "POST",
        url: "./databaseapi/getProfile.php",
        dataType:'json',
        data:{'submit':'profile','user':user },
        
        success: function(response){  

            const name = response['name'].split(" ");
            let fisrt_name = name[0];
            let last_name = name[1];
            let address = response['address'];

            $('#fname')[0].value   = fisrt_name;
            $('#lname')[0].value   = last_name;
            $('#address')[0].value = address;
            $('#accound_id')[0].textContent = user;
            

        },
        error: function( XMLHttpRequest,response){
            alert("fail");
            console.log(response);
            console.log(XMLHttpRequest);
        }
    });

    }
