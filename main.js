$("#f").on('submit',function(){
    var form=$(this);
    // var url=form.attr('action')
    // var type=form.attr('method')
    // console.log('url is ',url)

    data={};
    form.find('[name]').each(function(index,value){
        console.log(value);
         var field=$(this);
         var name=field.attr("name");
         if(name==='res'){
            var fieldId=field.attr("id");
            if(fieldId==='marksDiv'){
                name='marks';
                var value= field.val(); 
            }
            else if(fieldId==='selectGrade'){
                name="grade";
                console.log(name);
                var value= field.val();
                //debugger;
            }
            else if(fieldId==='selectCGPA'){
                name="CGPA";
                var value= field.val()
            }
         }
         else
         {
            var value=field.val();
         }
         
         data[name]=value;
    })
    console.log('data object is',data);
    $.ajax({
        // url: url,
        // type: type,
        // data: data,
        // success: function(response){
        //     debugger;
        //     console.log(response);
        // }
          
            type: "POST",  
            url: "formSubmission.php", 
            data: data,
            success: function(response) {
                console.log(response);
                debugger;
            }
        
    });
    debugger;
    return false;
    
});