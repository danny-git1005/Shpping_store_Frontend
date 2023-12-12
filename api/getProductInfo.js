function get_product_info(name,web){

    console.log("work");
    $.ajax({
        type:"POST",
        url: "",
        datatype: "json",
        data:{ 'submit':'productinfo' , 'name':name},
        success: function(response){
            console.log("success");
            //console.log(response);
 
            
            if ( web === "detail")
            {
                release[3].innerText = response['story'];
            }
        },
        error: function(XMLHttpRequest){
            console.log("fail");
            console.log(XMLHttpRequest);
        } 
    })
}