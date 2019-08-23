$("#f").on('submit',function(){
    var form=$(this);
    data={};
    // form.find('[name]').each(function(index,value){
    //     console.log(value);
    //      var field=$(this);
    //      var name=field.attr("name");
    //     var value=field.val()
    //      data[name]=value;
    // })
    console.log('data object is',data);
    $.ajax({
        type: "POST",  
        url: "formSubmission.php", 
        data: form.serialize(),
        success: function(response) {
            console.log(response);
            debugger;
        }
    });
    
    return false;
});