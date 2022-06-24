$(document).ready(function (e) {
	
	$('#photo_btn').on('click', function() {
		alert("Photo Upload Clicked");
		var photo_input = $('#photo_input').prop('files')[0];
		var form_data = new FormData();                  
		form_data.append('photo_input', photo_input);
		$.ajax({
			url: 'uploadaction/upload_photo.php', // <-- point to server-side PHP script 
			dataType: 'text',  // <-- what to expect back from the PHP script, if anything
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,                         
			type: 'post',
			success: function(php_script_response){
				alert(php_script_response); // <-- display response from the PHP script, if any
			}
		 });
	});
	
	$('#icard_btn').on('click', function() {
		alert("Identity Proof Upload Clicked");
		var icard_input = $('#icard_input').prop('files')[0];
		var form_data = new FormData();                  
		form_data.append('icard_input', icard_input);
		$.ajax({
			url: 'uploadaction/upload_icard.php', // <-- point to server-side PHP script 
			dataType: 'text',  // <-- what to expect back from the PHP script, if anything
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,                         
			type: 'post',
			success: function(php_script_response){
				alert(php_script_response); // <-- display response from the PHP script, if any
			}
		 });
	});
	
	$('#sign_btn').on('click', function() {
		alert("Signature Upload Clicked");
		var sign_input = $('#sign_input').prop('files')[0];
		var form_data = new FormData();                  
		form_data.append('sign_input', sign_input);
		$.ajax({
			url: 'uploadaction/upload_sign.php', // <-- point to server-side PHP script 
			dataType: 'text',  // <-- what to expect back from the PHP script, if anything
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,                         
			type: 'post',
			success: function(php_script_response){
				alert(php_script_response); // <-- display response from the PHP script, if any
			}
		 });
	});
	
	$('#sscms_btn').on('click', function() {
		alert("10th MarkSheet Upload Clicked");
		var sscms_input = $('#sscms_input').prop('files')[0];
		var form_data = new FormData();                  
		form_data.append('sscms_input', sscms_input);
		$.ajax({
			url: 'uploadaction/upload_sscms.php', // <-- point to server-side PHP script 
			dataType: 'text',  // <-- what to expect back from the PHP script, if anything
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,                         
			type: 'post',
			success: function(php_script_response){
				alert(php_script_response); // <-- display response from the PHP script, if any
			}
		 });
	});
	
	$('#aisscms_btn').on('click', function() {
		alert("12th MarkSheet Upload Clicked");
		var aisscms_input = $('#aisscms_input').prop('files')[0];
		var form_data = new FormData();                  
		form_data.append('aisscms_input', aisscms_input);
		$.ajax({
			url: 'uploadaction/upload_aisscms.php', // <-- point to server-side PHP script 
			dataType: 'text',  // <-- what to expect back from the PHP script, if anything
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,                         
			type: 'post',
			success: function(php_script_response){
				alert(php_script_response); // <-- display response from the PHP script, if any
			}
		 });
	});
	
	$('#gradms_btn').on('click', function() {
		alert("Graduation MarkSheet Upload Clicked");
		var gradms_input = $('#gradms_input').prop('files')[0];
		var form_data = new FormData();                  
		form_data.append('gradms_input', gradms_input);
		$.ajax({
			url: 'uploadaction/upload_gradms.php', // <-- point to server-side PHP script 
			dataType: 'text',  // <-- what to expect back from the PHP script, if anything
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,                         
			type: 'post',
			success: function(php_script_response){
				alert(php_script_response); // <-- display response from the PHP script, if any
			}
		 });
	});
	
	$('#gradcert_btn').on('click', function() {
		alert("Graduation Certificate Upload Clicked");
		var gradcert_input = $('#gradcert_input').prop('files')[0];
		var form_data = new FormData();                  
		form_data.append('gradcert_input', gradcert_input);
		$.ajax({
			url: 'uploadaction/upload_gradcert.php', // <-- point to server-side PHP script 
			dataType: 'text',  // <-- what to expect back from the PHP script, if anything
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,                         
			type: 'post',
			success: function(php_script_response){
				alert(php_script_response); // <-- display response from the PHP script, if any
			}
		 });
	});
	
	$('#catcert_btn').on('click', function() {
		alert("Category Certificate Upload Clicked");
		var catcert_input = $('#catcert_input').prop('files')[0];
		var form_data = new FormData();                  
		form_data.append('catcert_input', catcert_input);
		$.ajax({
			url: 'uploadaction/upload_catcert.php', // <-- point to server-side PHP script 
			dataType: 'text',  // <-- what to expect back from the PHP script, if anything
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,                         
			type: 'post',
			success: function(php_script_response){
				alert(php_script_response); // <-- display response from the PHP script, if any
			}
		 });
	});
	
	$('#gaterank_btn').on('click', function() {
		alert("GATE Rank Card Upload Clicked");
		var gaterank_input = $('#gaterank_input').prop('files')[0];
		var form_data = new FormData();                  
		form_data.append('gaterank_input', gaterank_input);
		$.ajax({
			url: 'uploadaction/upload_gaterank.php', // <-- point to server-side PHP script 
			dataType: 'text',  // <-- what to expect back from the PHP script, if anything
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,                         
			type: 'post',
			success: function(php_script_response){
				alert(php_script_response); // <-- display response from the PHP script, if any
			}
		 });
	});
	
	$('#exp_btn').on('click', function() {
		alert("Experience Certificate Upload Clicked");
		var exp_input = $('#exp_input').prop('files')[0];
		var form_data = new FormData();                  
		form_data.append('exp_input', exp_input);
		$.ajax({
			url: 'uploadaction/upload_exp.php', // <-- point to server-side PHP script 
			dataType: 'text',  // <-- what to expect back from the PHP script, if anything
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,                         
			type: 'post',
			success: function(php_script_response){
				alert(php_script_response); // <-- display response from the PHP script, if any
			}
		 });
	});
	
	$('#noc_btn').on('click', function() {
		alert("NOC Certificate Upload Clicked");
		var noc_input = $('#noc_input').prop('files')[0];
		var form_data = new FormData();                  
		form_data.append('noc_input', noc_input);
		$.ajax({
			url: 'uploadaction/upload_noc.php', // <-- point to server-side PHP script 
			dataType: 'text',  // <-- what to nocect back from the PHP script, if anything
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,                         
			type: 'post',
			success: function(php_script_response){
				alert(php_script_response); // <-- display response from the PHP script, if any
			}
		 });
	});
	
});