divCounter=0;
  flag=0;
  function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#blash')
                    .attr('src', e.target.result)
                    .width(250)
                    .height(200);
            };
            reader.readAsDataURL(input.files[0]);
        }
  } 
  function checkAndRemoveById(d) {
    console.log('div is',d);
    console.log('div name is',d.attr("name"));
    if(d.attr("name")!=null) {
          var ele = document.getElementById(d.attr("name"));
          console.log('element is ', ele);
          ele?ele.remove():false;
    } else {
      console.log('in the function');
      return;
    }
  }

  $("#addMore").click(function(){    
    $("#formDiv").append(document.getElementById('degDetails').outerHTML)
  });

  


  function getDetails(data) {
    var activeId=null;
    console.log('new field is ',data);
    console.log(data.value);
    var d=$(data).closest("div");
    console.log('d attribute before change',d.attr("name"));
    divCounter=divCounter+1;
    var value = data.value;
    if((value==="MATRIC" || value==="FSC") ){
        checkAndRemoveById(d); 
        var newMarksDiv = $(document.createElement('input'))
         .attr("id", "marksDiv");
         newMarksDiv.attr("name","res")
         newMarksDiv.attr("placeholder","Enter your marks")
         newMarksDiv.appendTo(d);
         activeId="marksDiv";
         d.attr("name",activeId);
    }
    else if((value==="OLevel" || value==="ALevel")){
        checkAndRemoveById(d)
        var myOptions = {
            val1 : 'A',
            val2 : 'A+',
            val3 : 'B',
            val4 : 'B+',
            val5 : 'B-',
        };
        var _select = $(document.createElement('select'))
         .attr("id", 'selectGrade');
         _select.attr("name","res")
        $.each(myOptions, function(val, text) {
            _select.append($('<option></option>').val(text).html(text));
        });
        _select.addClass('browser-default custom-select custom-select-sm mb-3 col-lg-3');
        _select.appendTo(d);
         activeId="selectGrade"
         d.attr("name",activeId);
         console.log('div name is set in o level',d.attr("name"));
    }
    else if(value==="Bachelor"){
      console.log('div in bachelor is',d);
      console.log('name pass to ',d.attr("name"));
      checkAndRemoveById(d)
        var myOptions = {
            val1 : '3.0',
            val2 : '3.1',
            val3 : '3.2',
            val4 : '3.3',
            val5 : '3.4'
        };
        var _select = $(document.createElement('select'))
         .attr("id", "selectCGPA");
         _select.attr("name","res")
        $.each(myOptions, function(val, text) {
            _select.append($('<option></option>').val(text).html(text));
        });
        _select.appendTo(d);
         activeId="selectCGPA"
         d.attr("name",activeId);
    }
  }