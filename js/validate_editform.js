$(document).ready(function () {
	
	$("div.desc").hide();	//hide progrm type on gate load
	$("tr.gateinfo").hide(); //hide gate form on page load
	$("tr.workexp").hide(); //hide work exp form on page load
	setDBFetchedValue();
	
	function setDBFetchedValue(){
		let progtype_db = $('#progtype_db').val();	
		if(progtype_db==='gate')
		{	
			$(".scholarship_radio").prop("checked", true);
			$("div.prog_type_line").show();
			$("div.gate_or_cfti").show();
			$('.gate_radio').prop('checked', true);
			$("tr.gateinfo").show();
		}
		else if(progtype_db==='cfti')
		{	
			$(".scholarship_radio").prop("checked", true);
			$("div.prog_type_line").show();
			$("div.gate_or_cfti").show();
			$('.cfti_radio').prop('checked', true);
			$("tr.gateinfo").show();
		}
		else if(progtype_db==='self')
		{	
			$(".without_scholarship_radio").prop("checked", true);
			$("div.prog_type_line").show();
			$("div.sponsored_or_self").show();
			$('.self_radio').prop('checked', true);
			//$("tr.gateinfo").hide();
		}
		else if(progtype_db==='sponsored')
		{	
			$(".without_scholarship_radio").prop("checked", true);
			$("div.prog_type_line").show();
			$("div.sponsored_or_self").show();
			$('.sponsored_radio').prop('checked', true);
			//$("tr.gateinfo").hide();
			$("tr.workexp").show();
		}
	}
		
	
	
	
	//function to reset gate form values
	function resetGateInfoForm(){ 
		$('#gateregno').val("");
		$('#gatediscipline').val("");
		$('#gateyoe').val("");
		$('#gatescore').val("");
		$('#gatemarks').val("");
		$('#gatevalidity').val("");
		$('#gateair').val("");		
	}

	//function to reset work exp form values
	function resetWorkExpForm(){ 
		$('#org1').val("");
		$('#orgtype1').val("---SELECT---");
		$('#des1').val("");
		$('#from1').val("");
		$('#to1').val("");
		$('#dur1').val("");
		$('#now1').val("");
		$('#currjob1').val("YES");		
		$('#org2').val("");
		$('#orgtype2').val("---SELECT---");
		$('#des2').val("");
		$('#from2').val("");
		$('#to2').val("");
		$('#dur2').val("");
	    $('#now2').val("");
		$('#currjob2').val("NO");
		$('#org3').val("");
		$('#orgtype3').val("---SELECT---");
		$('#des3').val("");
		$('#from3').val("");
		$('#to3').val("");
		$('#dur3').val("");
	    $('#now3').val("");
		$('#currjob3').val("NO");
		$('#org4').val("");
		$('#orgtype4').val("---SELECT---");
		$('#des4').val("");
		$('#from4').val("");
		$('#to4').val("");
		$('#dur4').val("");
	    $('#now4').val("");
		$('#currjob4').val("NO");
		
		
	}		
	
	//Show or Hide Gate Form as per click of gate radio button
	$("input[name$='progtype']").click(function() {
		let radio_button_value = $(this).val(); //take value of radio button		
		if((radio_button_value === "gate")||(radio_button_value === "cfti"))
		{
			$('tr.gateinfo').show();
			if(radio_button_value === "cfti") 
			{	
				resetGateInfoForm();
				alert("Filling Of GATE Exam Information is OPTIONAL For CFTI Individuals with CGPA 8.0+.")
			};
			if(radio_button_value === "gate") alert("Filling Of GATE Exam Information is MANDATORY For GATE Qualified Individuals.");
		}
		else 
		{
			$('tr.gateinfo').hide();
			resetGateInfoForm();
		}	
        
    });	
	
	
	//Show or Hide Work Exp Form as per click of work exp radio button
	$("input[name$='progtype']").click(function() {
		let radio_button_value = $(this).val(); //take value of radio button		
		if(radio_button_value === "sponsored")
		{
			$('tr.workexp').show();
		}
		else 
		{
			$('tr.workexp').hide();
			resetWorkExpForm();
		}	
        
    });
	
	//Scholarship vs Without Scholarship Radio button event handling
	$("input[name$='scholarship_flag']").click(function() {
		$('#prog_type').show();
		let radio_button_value = $(this).val(); //take value of radio button
		
		if(radio_button_value === "with_scholarship")
		{
			//alert("With scholarship");
			$('#with_scholarship').show();
			$('#without_scholarship').hide();
			$('tr.gateinfo').hide(); //hide gate info form
			resetGateInfoForm();	//reset gate info form
			$('tr.workexp').hide(); //hide work exp form
			resetWorkExpForm();
			$("input:radio[name=progtype]:checked")[0].checked = false;
		}
		else if (radio_button_value === "without_scholarship")
		{
			//alert("Without scholarship");
			$('#without_scholarship').show();
			$('#with_scholarship').hide();
			$('tr.gateinfo').hide(); //hide gate info form
			resetGateInfoForm();	//reset gate info form
			$('tr.workexp').hide(); //hide work exp form
			resetWorkExpForm(); //reset work exp form
			$("input:radio[name=progtype]:checked")[0].checked = false;
		}	
        
    });
	
	//permanent address same as current address checkbox action
	$('#check-address').click(function(){
        if($('#check-address').is(':checked')){
            $('#padr').val($('#cadr').val());
            $('#past').val($('#cast').val());
            $('#papin').val($('#capin').val());
        } else { 
            //Clear on uncheck
            $('#padr').val("");
            $('#past').val("-------------SELECT---------------");
            $('#papin').val("");
        };
	});
	
	//Prompt for disability certificate during pressing YES
	$('#disabled').on('change', function() {
		var $this = $(this);
		if($this.val() === 'YES')			
			alert("You are selecting 'Specially Abled' status as yes.You need to upload disability certificate in documents upload page!");
    });
	
	//to limit number of characters to 10 in phone number field	
	$('#mobno').keyup( function() 
	 {
		var $this = $(this);
		if($this.val().length > 10)
			$this.val($this.val().substr(0, 10));			
	 });
	
	//Force numbers only in MOBILE number,PIN Numbers,Payment Amount Field
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
		let from_date1 = new Date($("#from1").val());
		let to_date1 = new Date($("#to1").val());
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
	
/* 	//START OF PERCENTAGE CALCULATION
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

	//Allow only Numbers and Decimals in Academic Info Fields
	$(".numeric_decimal").on("input", function(evt) {
	   var self = $(this);
	   self.val(self.val().replace(/[^0-9\.]/g, ''));
	   if ((evt.which != 46 || self.val().indexOf('.') != -1) && (evt.which < 48 || evt.which > 57)) 
	   {
		 evt.preventDefault();
	   }
	 });
	 
		 
	//Form Validation JS on Clicking Submit button	
	$('#frmnext').click(function(){
        //alert("Validation Starts Now");		
		
		//START OF PERSONAL INFO FORM VALIDATION
		let title=$('#title').val();
		if (title === "-------------SELECT---------------")
		{
		  alert('Please select Title!');  
		  $('#title').focus();
		  return false;
		}
		
		//check number of characters is equal to 10 in mobile number field	
		let mobno = $('#mobno').val();
		if(mobno.length < 10)
		{
    	  alert('Mobile number should be exactly 10 digits');  
		  $('#mobno').focus();
		  return false;
		}
		
		let cast=$('#cast').val();
		if (cast === "-------------SELECT---------------")
		{
		  alert('Please select State in Present Address!');  
		  $('#cast').focus();
		  return false;
		}
		
		let capin = $('#capin').val();
		if(capin.length < 6)
		{
    	  alert('PIN should be a minimum of 6 digits');  
		  $('#capin').focus();
		  return false;
		}
		
		let past=$('#past').val();
		if (past === "-------------SELECT---------------")
		{
		  alert('Please select State in Permanent Address!');  
		  $('#past').focus();
		  return false;
		}
		
		let papin = $('#papin').val();
		if(papin.length < 6)
		{
    	  alert('PIN should be a minimum of 6 digits');  
		  $('#papin').focus();
		  return false;
		}
		
		let gender=$('#gender').val();
		if (gender === "-------------SELECT---------------")
		{
		  alert('Please select Gender!');  
		  $('#gender').focus();
		  return false;
		}
		
		/* let marriage=$('#marriage').val();
		if (marriage === "-------------SELECT---------------")
		{
		  alert('Please select Marital Status!');  
		  $('#marriage').focus();
		  return false;
		} */
		
		let disabled=$('#disabled').val();
		if (disabled === "-------------SELECT---------------")
		{
		  alert('Please select Disability Status!');  
		  $('#disabled').focus();
		  return false;
		}
		
		let cat=$('#cat').val();
		if (cat === "-------------SELECT---------------")
		{
		  alert('Please select Category!');  
		  $('#cat').focus();
		  return false;
		}
		//END OF PERSONAL INFO FORM VALIDATION

		//START OF ACADEMIC INFO FORM VALIDATION
		let yop1=$('#yop1').val();
		if (yop1 === "-------------SELECT---------------")
		{
		  alert('Please select Graduation Year!');  
		  $('#yop1').focus();
		  return false;
		}
		
		let stype1=$('#stype1').val();
		if (stype1 === "-------------SELECT---------------")
		{
		  alert('Please select Percentage or CGPA!');  
		  $('#stype1').focus();
		  return false;
		}
		
		let divs1=$('#divs1').val();
		if (divs1 === "-------------SELECT---------------")
		{
		  alert('Please select Division!');  
		  $('#divs1').focus();
		  return false;
		}

		let yop2=$('#yop2').val();
		if (yop2 === "-------------SELECT---------------")
		{
		  alert('Please select Graduation Year!');  
		  $('#yop2').focus();
		  return false;
		}
		
		let stype2=$('#stype2').val();
		if (stype2 === "-------------SELECT---------------")
		{
		  alert('Please select Percentage or CGPA!');  
		  $('#stype2').focus();
		  return false;
		}
		
		let divs2=$('#divs2').val();
		if (divs2 === "-------------SELECT---------------")
		{
		  alert('Please select Division!');  
		  $('#divs2').focus();
		  return false;
		}	
		
		let yop3=$('#yop3').val();
		if (yop3 === "-------------SELECT---------------")
		{
		  alert('Please select Graduation Year!');  
		  $('#yop3').focus();
		  return false;
		}
		
		let stype3=$('#stype3').val();
		if (stype3 === "-------------SELECT---------------")
		{
		  alert('Please select Percentage or CGPA!');  
		  $('#stype3').focus();
		  return false;
		}
		
		let divs3=$('#divs3').val();
		if (divs3 === "-------------SELECT---------------")
		{
		  alert('Please select Division!');  
		  $('#divs3').focus();
		  return false;
		}
		
		//Check IF Year of passing of 10th,12th and Graduation is in sequence or not
		let yopa1=parseInt($('#yop1').val());
		let yopa2=parseInt($('#yop2').val());
		let yopa3=parseInt($('#yop3').val());
		if(yopa1>yopa2)
		{	
			alert("10th graduating year cannot be more than 12th graduating year");
			$('#yop1').focus();
			return false;			
		}
		if(yopa2>yopa3)
		{	
			alert("12th graduating year cannot be more than degree graduating year");
			$('#yop2').focus();
			return false;			
		}
		
		
		let scoretype1=$('#stype1').val();
		let marksObtained1 = parseFloat($('#mo1').val());
		let marksTotal1 = parseFloat($('#tm1').val());
		let scoretype2=$('#stype2').val();
		let marksObtained2 = parseFloat($('#mo2').val());
		let marksTotal2 = parseFloat($('#tm2').val());
		let scoretype3=$('#stype3').val();
		let marksObtained3 = parseFloat($('#mo3').val());
		let marksTotal3 = parseFloat($('#tm3').val());
		let scoretype4=$('#stype4').val();
		let marksObtained4 = parseFloat($('#mo4').val());
		let marksTotal4 = parseFloat($('#tm4').val());
		
		//Check if Score Type is CGPA - > marks obtained and total marks cannot be more than 10	
		if(scoretype1 === 'CGPA')
		{
			if(marksObtained1>10 || marksTotal1>10)
			{
			  alert('Marks Obtained Or Total Marks cannot be greater than 10 for Score Type CGPA');  
			  $('#mo1').focus();
			  return false;
			}
		}	
		if(scoretype2 === 'CGPA')
		{
			if(marksObtained2>10 || marksTotal2>10)
			{
			  alert('Marks Obtained Or Total Marks cannot be greater than 10 for Score Type CGPA');  
			  $('#mo2').focus();
			  return false;
			}
		}	
		if(scoretype3 === 'CGPA')
		{
			if(marksObtained3>10 || marksTotal3>10)
			{
			  alert('Marks Obtained Or Total Marks cannot be greater than 10 for Score Type CGPA');  
			  $('#mo3').focus();
			  return false;
			}
		}	
		if(scoretype4 === 'CGPA')
		{
			if(marksObtained4>10 || marksTotal4>10)
			{
			  alert('Marks Obtained Or Total Marks cannot be greater than 10 for Score Type CGPA');  
			  $('#mo4').focus();
			  return false;
			}
		}
		
		//Check Marks Obtained cannot be greater than total marks
		if(marksObtained1>marksTotal1)
		{
		  alert('Marks Obtained Cannot Be More Than Total Marks!');  
		  $('#mo1').focus();
		  return false;
		}
		
		if(marksObtained2>marksTotal2)
		{
		  alert('Marks Obtained Cannot Be More Than Total Marks!');  
		  $('#mo2').focus();
		  return false;
		}
		if(marksObtained3>marksTotal3)
		{
		  alert('Marks Obtained Cannot Be More Than Total Marks!');  
		  $('#mo3').focus();
		  return false;
		}
		if(marksObtained4>marksTotal4)
		{
		  alert('Marks Obtained Cannot Be More Than Total Marks!');  
		  $('#mo4').focus();
		  return false;
		}
		
		//Check percentage cannot be more than 100
		let pom1=parseFloat($('#pom1').val());
		if(pom1>100)
		{	alert("Percentage cannot be greater than 100!");
			$('#pom1').focus();
			return false;
		}
		let pom2=parseFloat($('#pom2').val());
		if(pom2>100)
		{	alert("Percentage cannot be greater than 100!");
			$('#pom2').focus();
			return false;
		}
		let pom3=parseFloat($('#pom3').val());
		if(pom3>100)
		{	alert("Percentage cannot be greater than 100!");
			$('#pom3').focus();
			return false;
		}
		let pom4=parseFloat($('#pom4').val());
		if(pom4>100)
		{	alert("Percentage cannot be greater than 100!");
			$('#pom4').focus();
			return false;
		}
		
		//END OF ACADEMIC INFO FORM VALIDATION
		
		//START OF GATE FORM & WORK EXP FORM VALIDATION BASED ON RADIO BUTTON SELECTED
		let radio_checked_value = $("input[name='progtype']:checked").val();
		if(radio_checked_value == null) //Check if any of the four radio buttons(self,cfti,gate,sponsored) is selected
		{	alert("Select Program Type!");
			return false;
		}	
		else if(radio_checked_value ==="gate")//Checks if GATE Qualified radio button is checked 
		{	//If GATE Qualified radio button is checked -> Perform Gate Form Validation
			
			if (!$('#gateregno').val()) 
			{
				alert('Enter GATE Exam registration Number!');
				$('#gateregno').focus();
			    return false;
			}
			if (!$('#gatediscipline').val()) 
			{
				alert('Enter GATE Exam Paper Name!');
				$('#gatediscipline').focus();
			    return false;
			}
			let gateyoe=$('#gateyoe').val();
			if (gateyoe == null)
			{
			  alert('Select GATE Year of Exam!');  
			  $('#gateyoe').focus();
			  return false;
			}
			if (!$('#gatescore').val()) 
			{
				alert('Enter GATE Score!');
				$('#gatescore').focus();
			    return false;
			}
			if (!$('#gatemarks').val()) 
			{
				alert('Enter GATE Marks!');
				$('#gatemarks').focus();
			    return false;
			}
			if (!$('#gatevalidity').val()) 
			{
				alert('Enter GATE Validity Date!');
				$('#gatevalidity').focus();
			    return false;
			}
			if (!$('#gateair').val()) 
			{
				alert('Enter GATE AIR!');
				$('#gateair').focus();
			    return false;
			}
			//Check Gatemarks cannot be greater than 100
			let gatemarks=parseFloat($('#gatemarks').val());
			if(gatemarks>100)
			{	alert("GATE Marks cannot be greater than 100!");
				$('#gatemarks').focus();
				return false;
			}
		}
		
		else if(radio_checked_value ==="sponsored") //Checks if Work Exp radio button is checked
		{	//If Work Exp radio button is checked -> Perform Work Exp Form Validation
			//Currently validating only first work experience
			if (!$('#org1').val()) 
			{
				alert('Enter Organization Name!');
				$('#org1').focus();
			    return false;
			}
			
			let orgtype1=$('#orgtype1').val();
			if ((orgtype1 == null)||(orgtype1 === "---SELECT---"))
			{
			  alert('Select Organization Type!');  
			  $('#orgtype1').focus();
			  return false;
			}
			
			if (!$('#des1').val()) 
			{
				alert('Enter Designation in Organization!');
				$('#des1').focus();
			    return false;
			}			
			if (!$('#from1').val()) 
			{
				alert('Enter From Date!');
				$('#from1').focus();
			    return false;
			}
			if (!$('#to1').val()) 
			{
				alert('Enter To Date!');
				$('#to1').focus();
			    return false;
			}
			if (!$('#now1').val()) 
			{
				alert('Enter Nature of Work!');
				$('#now1').focus();
			    return false;
			}
			
			//Check From Date & To Date in Work Exp Values (From<To)
			/* function compareDates(fromdate,todate){
			if(fromdate<todate) return true;		
			} 
			Below arrow function equivalent of this above function*/ 
			compareDates = (fromdate,todate) =>	fromdate<todate;
			
			let from_date1 = new Date($("#from1").val());
			let to_date1 = new Date($("#to1").val());
			if(!compareDates(from_date1,to_date1))
			{	
				alert("From Date cannot be greater than To Date Or Either of them can not be empty!");
				$('#from1').focus();
				return false;			
			}
			
			/* let from_date2 = new Date($("#from2").val());
			let to_date2 = new Date($("#to2").val());
			if(!compareDates(from_date2,to_date2))
			{	
				alert("From Date cannot be greater than To Date Or Either of them can not be empty!");
				$('#from2').focus();
				return false;			
			}
			
			let from_date3 = new Date($("#from3").val());
			let to_date3 = new Date($("#to3").val());
			if(!compareDates(from_date3,to_date3))
			{	
				alert("From Date cannot be greater than To Date Or Either of them can not be empty!");
				$('#from3').focus();
				return false;			
			}
			
			let from_date4 = new Date($("#from4").val());
			let to_date4 = new Date($("#to4").val());
			if(!compareDates(from_date4,to_date4))
			{	
				alert("From Date cannot be greater than To Date Or Either of them can not be empty!");
				$('#from4').focus();
				return false;			
			} */
		}
		
		//END OF GATE FORM & WORK EXP FORM VALIDATION BASED ON RADIO BUTTON SELECTED
		
		/* if(confirm('Are You Sure You Want To Continue with these details?')) //Final popup
			return true;
		else return false; */
	});
	
	
	//Form Validation JS on Updating  button	
	$('#frmupdate').click(function(){
        //alert("Validation Starts Now");		
		
		//START OF PERSONAL INFO FORM VALIDATION
		let title=$('#title').val();
		if (title === "-------------SELECT---------------")
		{
		  alert('Please select Title!');  
		  $('#title').focus();
		  return false;
		}
		
		//check number of characters is equal to 10 in mobile number field	
		let mobno = $('#mobno').val();
		if(mobno.length < 10)
		{
    	  alert('Mobile number should be exactly 10 digits');  
		  $('#mobno').focus();
		  return false;
		}
		
		let cast=$('#cast').val();
		if (cast === "-------------SELECT---------------")
		{
		  alert('Please select State in Present Address!');  
		  $('#cast').focus();
		  return false;
		}
		
		let capin = $('#capin').val();
		if(capin.length < 6)
		{
    	  alert('PIN should be a minimum of 6 digits');  
		  $('#capin').focus();
		  return false;
		}
		
		let past=$('#past').val();
		if (past === "-------------SELECT---------------")
		{
		  alert('Please select State in Permanent Address!');  
		  $('#past').focus();
		  return false;
		}
		
		let papin = $('#papin').val();
		if(papin.length < 6)
		{
    	  alert('PIN should be a minimum of 6 digits');  
		  $('#papin').focus();
		  return false;
		}
		
		let gender=$('#gender').val();
		if (gender === "-------------SELECT---------------")
		{
		  alert('Please select Gender!');  
		  $('#gender').focus();
		  return false;
		}
		
		/* let marriage=$('#marriage').val();
		if (marriage === "-------------SELECT---------------")
		{
		  alert('Please select Marital Status!');  
		  $('#marriage').focus();
		  return false;
		} */
		
		let disabled=$('#disabled').val();
		if (disabled === "-------------SELECT---------------")
		{
		  alert('Please select Disability Status!');  
		  $('#disabled').focus();
		  return false;
		}
		
		let cat=$('#cat').val();
		if (cat === "-------------SELECT---------------")
		{
		  alert('Please select Category!');  
		  $('#cat').focus();
		  return false;
		}
		//END OF PERSONAL INFO FORM VALIDATION

		//START OF ACADEMIC INFO FORM VALIDATION
		let yop1=$('#yop1').val();
		if (yop1 === "-------------SELECT---------------")
		{
		  alert('Please select Graduation Year!');  
		  $('#yop1').focus();
		  return false;
		}
		
		let stype1=$('#stype1').val();
		if (stype1 === "-------------SELECT---------------")
		{
		  alert('Please select Percentage or CGPA!');  
		  $('#stype1').focus();
		  return false;
		}
		
		let divs1=$('#divs1').val();
		if (divs1 === "-------------SELECT---------------")
		{
		  alert('Please select Division!');  
		  $('#divs1').focus();
		  return false;
		}

		let yop2=$('#yop2').val();
		if (yop2 === "-------------SELECT---------------")
		{
		  alert('Please select Graduation Year!');  
		  $('#yop2').focus();
		  return false;
		}
		
		let stype2=$('#stype2').val();
		if (stype2 === "-------------SELECT---------------")
		{
		  alert('Please select Percentage or CGPA!');  
		  $('#stype2').focus();
		  return false;
		}
		
		let divs2=$('#divs2').val();
		if (divs2 === "-------------SELECT---------------")
		{
		  alert('Please select Division!');  
		  $('#divs2').focus();
		  return false;
		}	
		
		let yop3=$('#yop3').val();
		if (yop3 === "-------------SELECT---------------")
		{
		  alert('Please select Graduation Year!');  
		  $('#yop3').focus();
		  return false;
		}
		
		let stype3=$('#stype3').val();
		if (stype3 === "-------------SELECT---------------")
		{
		  alert('Please select Percentage or CGPA!');  
		  $('#stype3').focus();
		  return false;
		}
		
		let divs3=$('#divs3').val();
		if (divs3 === "-------------SELECT---------------")
		{
		  alert('Please select Division!');  
		  $('#divs3').focus();
		  return false;
		}
		
		//Check IF Year of passing of 10th,12th and Graduation is in sequence or not
		let yopa1=parseInt($('#yop1').val());
		let yopa2=parseInt($('#yop2').val());
		let yopa3=parseInt($('#yop3').val());
		if(yopa1>yopa2)
		{	
			alert("10th graduating year cannot be more than 12th graduating year");
			$('#yop1').focus();
			return false;			
		}
		if(yopa2>yopa3)
		{	
			alert("12th graduating year cannot be more than degree graduating year");
			$('#yop2').focus();
			return false;			
		}
		
		
		let scoretype1=$('#stype1').val();
		let marksObtained1 = parseFloat($('#mo1').val());
		let marksTotal1 = parseFloat($('#tm1').val());
		let scoretype2=$('#stype2').val();
		let marksObtained2 = parseFloat($('#mo2').val());
		let marksTotal2 = parseFloat($('#tm2').val());
		let scoretype3=$('#stype3').val();
		let marksObtained3 = parseFloat($('#mo3').val());
		let marksTotal3 = parseFloat($('#tm3').val());
		let scoretype4=$('#stype4').val();
		let marksObtained4 = parseFloat($('#mo4').val());
		let marksTotal4 = parseFloat($('#tm4').val());
		
		//Check if Score Type is CGPA - > marks obtained and total marks cannot be more than 10	
		if(scoretype1 === 'CGPA')
		{
			if(marksObtained1>10 || marksTotal1>10)
			{
			  alert('Marks Obtained Or Total Marks cannot be greater than 10 for Score Type CGPA');  
			  $('#mo1').focus();
			  return false;
			}
		}	
		if(scoretype2 === 'CGPA')
		{
			if(marksObtained2>10 || marksTotal2>10)
			{
			  alert('Marks Obtained Or Total Marks cannot be greater than 10 for Score Type CGPA');  
			  $('#mo2').focus();
			  return false;
			}
		}	
		if(scoretype3 === 'CGPA')
		{
			if(marksObtained3>10 || marksTotal3>10)
			{
			  alert('Marks Obtained Or Total Marks cannot be greater than 10 for Score Type CGPA');  
			  $('#mo3').focus();
			  return false;
			}
		}	
		if(scoretype4 === 'CGPA')
		{
			if(marksObtained4>10 || marksTotal4>10)
			{
			  alert('Marks Obtained Or Total Marks cannot be greater than 10 for Score Type CGPA');  
			  $('#mo4').focus();
			  return false;
			}
		}
		
		//Check Marks Obtained cannot be greater than total marks
		if(marksObtained1>marksTotal1)
		{
		  alert('Marks Obtained Cannot Be More Than Total Marks!');  
		  $('#mo1').focus();
		  return false;
		}
		
		if(marksObtained2>marksTotal2)
		{
		  alert('Marks Obtained Cannot Be More Than Total Marks!');  
		  $('#mo2').focus();
		  return false;
		}
		if(marksObtained3>marksTotal3)
		{
		  alert('Marks Obtained Cannot Be More Than Total Marks!');  
		  $('#mo3').focus();
		  return false;
		}
		if(marksObtained4>marksTotal4)
		{
		  alert('Marks Obtained Cannot Be More Than Total Marks!');  
		  $('#mo4').focus();
		  return false;
		}
		
		//Check percentage cannot be more than 100
		let pom1=parseFloat($('#pom1').val());
		if(pom1>100)
		{	alert("Percentage cannot be greater than 100!");
			$('#pom1').focus();
			return false;
		}
		let pom2=parseFloat($('#pom2').val());
		if(pom2>100)
		{	alert("Percentage cannot be greater than 100!");
			$('#pom2').focus();
			return false;
		}
		let pom3=parseFloat($('#pom3').val());
		if(pom3>100)
		{	alert("Percentage cannot be greater than 100!");
			$('#pom3').focus();
			return false;
		}
		let pom4=parseFloat($('#pom4').val());
		if(pom4>100)
		{	alert("Percentage cannot be greater than 100!");
			$('#pom4').focus();
			return false;
		}
		
		//END OF ACADEMIC INFO FORM VALIDATION
		
		//START OF GATE FORM & WORK EXP FORM VALIDATION BASED ON RADIO BUTTON SELECTED
		let radio_checked_value = $("input[name='progtype']:checked").val();
		if(radio_checked_value == null) //Check if any of the four radio buttons(self,cfti,gate,sponsored) is selected
		{	alert("Select Program Type!");
			return false;
		}	
		else if(radio_checked_value ==="gate")//Checks if GATE Qualified radio button is checked 
		{	//If GATE Qualified radio button is checked -> Perform Gate Form Validation
			
			if (!$('#gateregno').val()) 
			{
				alert('Enter GATE Exam registration Number!');
				$('#gateregno').focus();
			    return false;
			}
			if (!$('#gatediscipline').val()) 
			{
				alert('Enter GATE Exam Paper Name!');
				$('#gatediscipline').focus();
			    return false;
			}
			let gateyoe=$('#gateyoe').val();
			/* if (gateyoe == null)
			{
			  alert('Select GATE Year of Exam!');  
			  $('#gateyoe').focus();
			  return false;
			} */
			if (!$('#gatescore').val()) 
			{
				alert('Enter GATE Score!');
				$('#gatescore').focus();
			    return false;
			}
			if (!$('#gatemarks').val()) 
			{
				alert('Enter GATE Marks!');
				$('#gatemarks').focus();
			    return false;
			}
			if (!$('#gatevalidity').val()) 
			{
				alert('Enter GATE Validity Date!');
				$('#gatevalidity').focus();
			    return false;
			}
			if (!$('#gateair').val()) 
			{
				alert('Enter GATE AIR!');
				$('#gateair').focus();
			    return false;
			}
			//Check Gatemarks cannot be greater than 100
			let gatemarks=parseFloat($('#gatemarks').val());
			if(gatemarks>100)
			{	alert("GATE Marks cannot be greater than 100!");
				$('#gatemarks').focus();
				return false;
			}
		}
		
		else if(radio_checked_value ==="sponsored") //Checks if Work Exp radio button is checked
		{	//If Work Exp radio button is checked -> Perform Work Exp Form Validation
			//Currently validating only first work experience
			if (!$('#org1').val()) 
			{
				alert('Enter Organization Name!');
				$('#org1').focus();
			    return false;
			}
			
			let orgtype1=$('#orgtype1').val();
			if ((orgtype1 == null)||(orgtype1 === "---SELECT---"))
			{
			  alert('Select Organization Type!');  
			  $('#orgtype1').focus();
			  return false;
			}
			
			if (!$('#des1').val()) 
			{
				alert('Enter Designation in Organization!');
				$('#des1').focus();
			    return false;
			}			
			if (!$('#from1').val()) 
			{
				alert('Enter From Date!');
				$('#from1').focus();
			    return false;
			}
			if (!$('#to1').val()) 
			{
				alert('Enter To Date!');
				$('#to1').focus();
			    return false;
			}
			if (!$('#now1').val()) 
			{
				alert('Enter Nature of Work!');
				$('#now1').focus();
			    return false;
			}
			
			//Check From Date & To Date in Work Exp Values (From<To)
			/* function compareDates(fromdate,todate){
			if(fromdate<todate) return true;		
			} 
			Below arrow function equivalent of this above function*/ 
			compareDates = (fromdate,todate) =>	fromdate<todate;
			
			let from_date1 = new Date($("#from1").val());
			let to_date1 = new Date($("#to1").val());
			if(!compareDates(from_date1,to_date1))
			{	
				alert("From Date cannot be greater than To Date Or Either of them can not be empty!");
				$('#from1').focus();
				return false;			
			}
			
			/* let from_date2 = new Date($("#from2").val());
			let to_date2 = new Date($("#to2").val());
			if(!compareDates(from_date2,to_date2))
			{	
				alert("From Date cannot be greater than To Date Or Either of them can not be empty!");
				$('#from2').focus();
				return false;			
			}
			
			let from_date3 = new Date($("#from3").val());
			let to_date3 = new Date($("#to3").val());
			if(!compareDates(from_date3,to_date3))
			{	
				alert("From Date cannot be greater than To Date Or Either of them can not be empty!");
				$('#from3').focus();
				return false;			
			}
			
			let from_date4 = new Date($("#from4").val());
			let to_date4 = new Date($("#to4").val());
			if(!compareDates(from_date4,to_date4))
			{	
				alert("From Date cannot be greater than To Date Or Either of them can not be empty!");
				$('#from4').focus();
				return false;			
			} */
		}
		
		//END OF GATE FORM & WORK EXP FORM VALIDATION BASED ON RADIO BUTTON SELECTED
		
		/* if(confirm('Are You Sure You Want To Continue with these details?')) //Final popup
			return true;
		else return false; */
	});





});																																	// end of document.ready function
