$(document).ready(function (e) {
	
	$('#instructions_btn').click(function(){
        if(!($('#instructions_chkbox').is(':checked')))
		{
            alert("Please agree by selecting the checkbox first!");
        } 
		else 
		{
			window.location.href = 'index.php';
        }
	});	
});