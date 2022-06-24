$(document).ready(function () {
	
	//Form Validation JS
	
	//to limit number of characters to 10 in phone number field	
		$('#in_mob').keyup( function() 
		 {
			var $this = $(this);
			if($this.val().length > 10)
				$this.val($this.val().substr(0, 10));			
		 });
		 
	

	//Force numbers only in MOBILE number
	$(".numericOnly").keypress(function (e) {
    if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) return false;
	});	
	
	
	$('form').submit(function () {

    // Get the Login Name value and trim it
    let mobno = $.trim($('#in_mob').val());

    // Check if empty of not
    if (mobno  === '') {
        alert('Mobile Number is empty.');
        return false;
    }
	});
	
	
	
});
