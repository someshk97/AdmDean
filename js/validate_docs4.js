$(document).ready(function (e) {
	
	$('#preview_btn').click(function(){
        if(!($('#declaration_chkbox').is(':checked'))){
            alert("Please Accept the Declaration First!");
        } else {            
			$.ajax(		
			 {			
			 type: "POST",			
			 cache: false,			
			 url: "uploadaction4/validate_documents_upload.php",
			 dataType: "html",			
			 contentType: "text/html",			
			 //error:	errorAlert,
			 success: function(data)		
			 {
				let validation_result_obj = JSON.parse(data);
				alert(validation_result_obj.message);
				if(validation_result_obj.iserror)
				{
					return false;
				}
				else
				{
					window.location.href = 'admsnreport11.php';
				}					
				
			 }
			 }); //end of $.ajax
			
        };
	});	
});