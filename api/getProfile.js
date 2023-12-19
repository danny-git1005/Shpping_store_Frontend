
function get_profile(user, page){

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
            if (page == 'account')
            {
                $('#accound_id')[0].textContent = user;
            }
            // console.log($('#accound_id')[0].value);

        },
        error: function( XMLHttpRequest,response){
            alert("fail");
            console.log(response);
            console.log(XMLHttpRequest);
        }
    });

    }
