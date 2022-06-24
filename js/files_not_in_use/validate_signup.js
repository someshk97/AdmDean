 function validate()
        {
            $('#signup input[type="text"]').each(function() {
                if(this.required)
                {
                    if(this.value=="")
                        $(this).addClass("inpterr");
                    else
                        $(this).addClass("inpterrc");
                }
              
                if($(this).attr("VT")=="NM")
                {
                    if((!isAlpha(this.value)) && this.value!="")
                    {
                       alert("Only Aplhabets Are Allowed . . .");
                       $(this).focus();
                    }
                }

				if($(this).attr("VT")=="PH")
				{
						
						if((!isPhone(this.value)) && this.value!="")
						{
								alert("Invalid Mobile Number ");
								//$(this).focus();
								return false;
						}
						else if ($.trim(this.value).length == 0) {
						alert("Mobile number must NOT be zero digit");
						return false;
						}
						
						$(".numericOnly").keypress(function (e) {
						if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) return false;
						});
											/* function phoneText(input_str) {
						var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

						return re.test(input_str);
					}

					function validateForm(event) {
						var phoneText = document.getElementById('myform_phone').value;
						if (!validatePhoneNumber(phone)) {
							document.getElementById('mobno').classList.remove('hidden');
						} else {
							document.getElementById('mobno').classList.add('hidden');
							alert("validation success")
						}
						event.preventDefault();
					}

					document.getElementById('myform').addEventListener('submit', validateForm); */
					function validate(){
					var mobile= jQuery("#in_mob").val();
					var pattern = /^\d{10}$/;

					if (pattern.test(mobile)) {
					jQuery(".error").html('');
					return true;
					} else{
					jQuery(".error").html('');
					jQuery(".container-fun").append("<span class='error'>Please put 10 digit valid mobile number</span>");
					jQuery(".error").css('color','red');
					return false;
					}
					}
											
											
					var phoneText = isPhone(this.value).val();
					if ($.trim(this.value).length == 0) {
					alert("Please enter Phone Number**");
					return false;
					}
					if (validatePhone(phoneText)) {
					alert('Valid Phone Number');
					return true;
					}
					else {
					alert('Invalid Phone Number');
					return false;
					}					
						
				}

				if($(this).attr("VT")=="EML")
				{
						if(!IsEmail($(this).val()) && this.value!="")
						{
								alert("Invalid Email . . . .");
								$(this).focus();
						}
				}	

				if($(this).attr("VT")=="PIN")
				{
						if((!IsPin(this.value)) && this.value!="")
						{
								alert("Invalid Pin Code . . . .");
								$(this).focus();
						}
				}

            });
        }
        
        function isAlpha(x)
        {
        var re = new RegExp(/^[a-zA-Z\s]+$/);
        return re.test(x);
        }
        
		function isPhone(x)
		{
			
			var ph = new RegExp (/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);  
			if(ph.length<10)
				alert("******mobile number should be of 10 digit not lesser than 10 digits*********");
			return false;
			//return ph.test(x);
		}
		
		function IsEmail(x) 
		{
  			var em = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
  			return em.test(x);
		}
		
		function IsPin(x) 
		{
  			var pin = new RegExp (/^\d{6}$/);
			
  			return pin.test(x);
		}
function validatePhone(phoneText) {
var filter = /^[0-9-+]+$/;
if (filter.test(phoneText)) {
return true;
}
else {
return false;
}
}
		
//<script type="text/javascript">
//$(document).ready(function () {
//$("#btnValidate").click(function () {
//var phoneText = $("#txtPhone").val();
//if ($.trim(phoneText).length == 0) {
//alert("Please enter Phone Number");
//return false;
//}
//if (validatePhone(phoneText)) {
//alert('Valid Phone Number');
//return true;
//}
//else {
//alert('Invalid Phone Number');
//return false;
//}
//});
//});
//function validatePhone(phoneText) {
//var filter = /^[0-9-+]+$/;
//if (filter.test(phoneText)) {
//return true;
//}
//else {
//return false;
//}
//}
//</script>