function get_user_order(){

    $.ajax({
        type: "POST",
        url: "",
        dataType:'json',
        data:{'submit':'user_order','username':$.cookie('username') , 'userid':$.cookie('userid')},
        success: function(response){  

            //console.log(response);

            let parent = $('.page_content');

            
        },
        error: function( XMLHttpRequest,response){
            alert("fail");
            console.log(response);
            console.log(XMLHttpRequest);
        }
    });
}