<?php
	error_reporting(0);
	require_once '../dbconfig/mysql_Config.php';
	session_start();
	clearstatcache();
if (isset($_SESSION['user'])) 
{
	$application_id = $_SESSION['application_id']; //fetch from session,should be unique
	
	$upload_response = "You forgot to upload the following document(s). Please upload them first.\n";
	$upload_error = false;
	
	$photo_upload_status = "NOT UPLOADED";
	$sign_upload_status = "NOT UPLOADED";
	$icard_upload_status = "NOT UPLOADED"; 
	$sscms_upload_status = "NOT UPLOADED";
	$aisscms_upload_status = "NOT UPLOADED";
	$gradms_upload_status = "NOT UPLOADED";
	$gradcert_upload_status = "NOT UPLOADED";
	$catcert_upload_status = "NOT UPLOADED";
	$gaterank_upload_status = "NOT UPLOADED";
	$exp_upload_status = "NOT UPLOADED";
	$noc_upload_status = "NOT UPLOADED";
	$disability_upload_status = "NOT UPLOADED";
	$otherdoc_upload_status = "NOT UPLOADED";
	
	$con = mysqli_connect(ORA_CON_DBHOSTNAME, ORA_CON_USER, ORA_CON_PASSWORD, ORA_CON_DATABASE);
	
	
	//Check if compulsory documents uploaded or not
	$sql = "select * from t_docs_upload_status where s_detid='".$application_id."'";
	$resdata=mysqli_query($con,$sql);
	while($rowdata = mysqli_fetch_array($resdata))
    {
		$photo_upload_status = $rowdata[1];
		$sign_upload_status = $rowdata[2];
		$icard_upload_status = $rowdata[3]; 
		$sscms_upload_status = $rowdata[4];
		$aisscms_upload_status = $rowdata[5];
		$gradms_upload_status = $rowdata[6];
		$gradcert_upload_status = $rowdata[7];
		$catcert_upload_status = $rowdata[8];
		$gaterank_upload_status = $rowdata[9];
		$exp_upload_status = $rowdata[10];
		$noc_upload_status = $rowdata[11];
		$disability_upload_status = $rowdata[12];
		$otherdoc_upload_status = $rowdata[13];	
	}
	//Checks for mandatory documents
	if($photo_upload_status === 'NOT UPLOADED')
	{ 	
		$upload_error = true;	
		$upload_response = $upload_response." Photograph \n";
	}
	if($sign_upload_status === 'NOT UPLOADED')
	{ 	
		$upload_error = true;	
		$upload_response = $upload_response." Signature \n";
	}
	if($icard_upload_status === 'NOT UPLOADED')
	{ 	
		$upload_error = true;	
		$upload_response = $upload_response." Identity Proof \n";
	}
	if($sscms_upload_status === 'NOT UPLOADED')
	{ 	
		$upload_error = true;	
		$upload_response = $upload_response." 10th/Equivalent Marksheet \n";
	}
	if($aisscms_upload_status === 'NOT UPLOADED')
	{ 	
		$upload_error = true;	
		$upload_response = $upload_response." 12th/Equivalent Marksheet \n";
	}
	/* if($gradms_upload_status === 'NOT UPLOADED')
	{ 	
		$upload_error = true;	
		$upload_response = $upload_response." UG Marksheet \n";
	}
	if($gradcert_upload_status === 'NOT UPLOADED')
	{ 	
		$upload_error = true;	
		$upload_response = $upload_response." UG Certificate \n";
	} */
	
	//Check for mandatory but conditional documents
	$sql2="SELECT t_progtype,t_disability,s_catg FROM t_user where s_detid='".$application_id."'";
	//echo $sql2."\n";
	
	$res = mysqli_query($con, $sql2, MYSQLI_USE_RESULT);
    $response = mysqli_fetch_row($res);
	//print_r($response);
	if($response[0] === "gate")
	{	// check all gate related documents uploaded or not
		//echo "\nPerforming GATE DOCS Validations\n";
		if($gaterank_upload_status === 'NOT UPLOADED')
		{ 	
			$upload_error = true;	
			$upload_response = $upload_response." GATE Rank card \n";
		}
	}
	else if($response[0] === "sponsored")
	{	// check all work exp related documents uploaded or not
		//echo "\nPerforming WORK EXP DOCS Validations\n";
		if($exp_upload_status === 'NOT UPLOADED')
		{ 	
			$upload_error = true;	
			$upload_response = $upload_response." Experience Certificate \n";
		}
		if($noc_upload_status === 'NOT UPLOADED')
		{ 	
			$upload_error = true;	
			$upload_response = $upload_response." NOC Certificate \n";
		}
	}		
	if($response[1] === "YES")
	{	// check disability certificate uploaded or not
		if($disability_upload_status === 'NOT UPLOADED')
		{ 	
			$upload_error = true;	
			$upload_response = $upload_response." Disability Certificate \n";
		}
	}		
	if(!($response[2] === "GEN"))
	{	// check category certificate uploaded or not
		if($catcert_upload_status === 'NOT UPLOADED')
		{ 	
			$upload_error = true;	
			$upload_response = $upload_response." Category Certificate \n";
		}
	} 
	
	$resdata -> free_result();
	$res -> free_result();
	mysqli_close($con);
	
	$validation_result->iserror = "BLANK";
	$validation_result->message = "BLANK";	

	if($upload_error)
	{
		$validation_result->iserror = true;
		$validation_result->message = $upload_response;		
	}
	else 
	{
		$validation_result->iserror = false;
		$validation_result->message = "All Documents Succcessfully Uploaded. Proceeding to Preview.";		
	}
	
	$validation_result_JSON = json_encode($validation_result);
	echo $validation_result_JSON; 
	
} 
else 
{
    echo 'Please login first';
}

?>