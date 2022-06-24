$(document).ready(function (e) {
	
	$('#btn_submit').on('click', function() {
		let isSure = confirm("Are you sure you want to submit your application? \n Once submitted no further modifications can be done");
		if(isSure) 
		{
		    $.ajax({
			url: 'appsubmit3.php', // <-- point to server-side PHP script 
			dataType: 'text',  // <-- what to expect back from the PHP script, if anything
			cache: false,
			contentType: false,
			processData: false,
			type: 'post',
			success: function(php_script_response){
				alert(php_script_response); // <-- display response from the PHP script, if any
				window.location.href = 'applicationstatus11.php';
			}
		 });
		}
	});
	
	$('#btn_print').on('click', function() {
		$(".buttonline").hide();
        window.print();
        $(".buttonline").show();
	});
	
	$('#btn_edit').on('click', function() {
		let isSure = confirm("Do you really want to go back and edit your application? \n If yes, you will have to re-enter the GATE Exam details and/or Work Experience details again.");
		if(isSure)		
			window.location.href = 'editform11.php';		
	});
	
});