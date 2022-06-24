$(document).ready(function () {
	
	function errorAlert(e, jqxhr)		
		 {		
			alert("Your request was not successful: " + jqxhr);		
		 }
		 
	//Form Validation JS
	
	//to limit number of characters to 10 in phone number field	
		$('#mobno').keyup( function() 
		 {
			var $this = $(this);
			if($this.val().length > 10)
				$this.val($this.val().substr(0, 10));			
		 });
	
	

	//Force numbers only in MOBILE number,PIN Numbers
	$(".numericOnly").keypress(function (e) {
    if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) return false;
	});
	
	//to limit number of characters to 6 in PIN number field	
	$('#capin').keyup( function() 
	 {
		var $this = $(this);
		if($this.val().length > 6)
			$this.val($this.val().substr(0, 6));			
	 });	
	
	//to limit number of characters to 6 in PIN number field
	$('#papin').keyup( function() 
	 {
		var $this = $(this);
		if($this.val().length > 6)
			$this.val($this.val().substr(0, 6));			
	 });
	
	//START OF DURATION CALCULATION for Work Experience
	$("#from1,#to1").change(function () {		
		var from_date1 = new Date($("#from1").val());
		var to_date1 = new Date($("#to1").val());		
		var Difference_In_Months1 = (to_date1.getFullYear()*12 + to_date1.getMonth()) - (from_date1.getFullYear()*12 + from_date1.getMonth());
		$("#dur1").val(Difference_In_Months1+" months");
	})
	$("#from2,#to2").change(function () {		
		var from_date2 = new Date($("#from2").val());
		var to_date2 = new Date($("#to2").val());		
		var Difference_In_Months2 = (to_date2.getFullYear()*12 + to_date2.getMonth()) - (from_date2.getFullYear()*12 + from_date2.getMonth());
		$("#dur2").val(Difference_In_Months2+" months");
	})
	$("#from3,#to3").change(function () {		
		var from_date3 = new Date($("#from3").val());
		var to_date3 = new Date($("#to3").val());		
		var Difference_In_Months3 = (to_date3.getFullYear()*12 + to_date3.getMonth()) - (from_date3.getFullYear()*12 + from_date3.getMonth());
		$("#dur3").val(Difference_In_Months3+" months");
	})
	$("#from4,#to4").change(function () {		
		var from_date4 = new Date($("#from4").val());
		var to_date4 = new Date($("#to4").val());		
		var Difference_In_Months4 = (to_date4.getFullYear()*12 + to_date4.getMonth()) - (from_date4.getFullYear()*12 + from_date4.getMonth());
		$("#dur4").val(Difference_In_Months4+" months");
	})	
	//END OF DURATION CALCULATION
	
	/* //START OF PERCENTAGE CALCULATION
	$("#mo1,#tm1").change(function () {		
		var mo1 = parseFloat($("#mo1").val());
		var tm1 = parseFloat($("#tm1").val());
		var div1 = (mo1/tm1) * 100;
		$("#pom1").val(roundToTwo(div1));
	})
	$("#mo2,#tm2").change(function () {		
		var mo2 = parseFloat($("#mo2").val());
		var tm2 = parseFloat($("#tm2").val());
		var div2 = (mo2/tm2) * 100;
		$("#pom2").val(roundToTwo(div2));
	})
	$("#mo3,#tm3").change(function () {		
		var mo3 = parseFloat($("#mo3").val());
		var tm3 = parseFloat($("#tm3").val());
		var div3 = (mo3/tm3) * 100;
		$("#pom3").val(roundToTwo(div3));
	})
	$("#mo4,#tm4").change(function () {		
		var mo4 = parseFloat($("#mo4").val());
		var tm4 = parseFloat($("#tm4").val());
		var div4 = (mo4/tm4) * 100;
		$("#pom4").val(roundToTwo(div4));
	})
	
	function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
	}	
	//END OF PERCENTAGE CALCULATION */

  $("#validate_btn").click(function () {
    // Validate Email
    let emailid = $("#emailid").val();
    alert(emailid);
  });
});
