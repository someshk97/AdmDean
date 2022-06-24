$(document).ready(function(){
		$('#otp_msg').hide();
		
		//Force alphabets and spaces only in Name
		$(".alphabetsOnly").keypress(function (e) {
		if (!String.fromCharCode(e.keyCode).match(/^[a-zA-Z ]+$/)) return false;
		});
		
		//Force numbers only in MOBILE number,PIN Numbers,Payment Amount Field
		$(".numericOnly").keypress(function (e) {
		if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) return false;
		});
		
		//function to validate emailid in javascript
		const validateEmail = (email) => {
		  return email.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		  );
		};

		//function to enable disable send otp button
		function disableElementForSpecifiedTime(className, disabledTime_milliseconds)
		{
			var element = document.getElementById('btn_sendotp');
			element.disabled = true;
			$('#otp_msg').show();

			setTimeout(function(){  
				element.disabled = false;
				$('#otp_msg').hide();
			}, disabledTime_milliseconds);
		}		

		$('#btn_sendotp').click(function()		
		{	
			let email=$('#in_eml').val();
			if (!validateEmail(email))
			{
			  alert('Please enter a valid Email Id!');  
			  $('#in_eml').focus();
			  return false;
			}
			else
			{
				//valid emailid entered - send otp on this emailid
				disableElementForSpecifiedTime("btn_sendotp", 30000)
				$.ajax(		
				 {			
				 type: "GET",			
				 cache: false,			
				 url: "sendotp11.php",
				 data:"email="+email,
				 dataType: "html",			
				 contentType: "text/html",			
				 //error:	errorAlert,
				 success: function(data)		
				 {
					alert(data);
				 }
				 }); //end of $.ajax
			}
		}); //end of click handler
		
		$('#btn_sub').click(function()		
		{	
			//alert("Clicked");
			let in_name=$('#in_name').val();
			let in_eml=$('#in_eml').val();
			let otpvalue=$('#otpvalue').val().trim();
			let main_password=$('#main_password').val().trim();
			let cfm_password=$('#cfm_password').val().trim();						
			
			if (in_name.length==0)
			  {
			  alert('Please enter Name first!');  
			  $('#in_name').focus();
			  return false;
			  }
			  
			let pattern = /^[a-zA-Z ]+$/;
			if(!pattern.test(in_name) && in_name !=''){
				alert('Only alphabets and spaces are allowed in Name!');  
				return false;
			}					  
			
			if (in_eml.length==0)
			  {
			  alert('Please enter Email Id first!');
			  $('#in_eml').focus();	
			  return false;  
			  }
			  
			if (!validateEmail(in_eml))
			{
			  alert('Please enter a valid Email Id!');  
			  $('#in_eml').focus();
			  return false;
			}
				
			if (otpvalue.length==0)
			  {
			  alert('Please enter OTP first!');
			  $('#otpvalue').focus();
			  return false;  
			  }
			if (otpvalue.length!=8)
			  {
			  alert('OTP shall be exactly of 8 digits');
			  $('#otpvalue').focus();
			  return false;  
			  }
			  
			if (main_password.length==0)
			  {
			  alert('Please enter password first!');
			  $('#main_password').focus();
			  return false;  
			  }
			  
			if (cfm_password.length==0)
			  {
			  alert('Please enter confirm password first!');
			  $('#cfm_password').focus();
			  return false;  
			  }			
			
			if(main_password!==cfm_password)
			{	
				alert("Passwords do not match.Please check again.");
				$('#main_password').focus();
				return false;
			}
			if(main_password.length < 8)
			{	
				alert("Passwords must be minimum of 8 characters length.Please check again.");
				$('#main_password').focus();
				return false;
			}
			
			var patterns = /^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/;
			if(patterns.test(main_password) && main_password !=''){
				alert('Password must contain at least one number,one uppercase and one special character!');  
				return false;
			}			
			
			if(confirm('Are you sure to continue with these details? \nName and Email Id once entered cannot be modified.'))
				return true;
			else return false;
			
		}); //end of click handler
		
});  //end of $.ready function		