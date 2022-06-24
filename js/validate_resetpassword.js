$(document).ready(function(){
		
		$('#reset_btn').click(function()		
		{	
			//alert("Validating Email");
			let emailid=$('#emailid').val();
			if (!validateEmail(emailid))
			{
			  alert('Please enter a valid Email Id!');  
			  $('#emailid').focus();
			  return false;
			}
		}); //end of click handler
		
		const validateEmail = (email) => {
		  return email.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		  );
		};
		
});  //end of $.ready function		