<?php
    error_reporting(0);
	require_once '../dbconfig/mysql_Config.php';
    session_start();
    clearstatcache();
    
    $application_id = $_SESSION['application_id']; //fetch from session,should be unique
    
    $application_folder = "DOC_UPLOADS/".$application_id;
    if (!file_exists($application_folder)) {
    mkdir($application_folder, 0777, true);
    }
    
    //print_r($_FILES); //Check all $_FILES variables
    $response = array();   
    
    $allowed_file_extension = array(
        "pdf"
    );
    
    // Get image file extension
    $file_extension = pathinfo($_FILES["aisscms_input"]["name"], PATHINFO_EXTENSION); 
    //echo $file_extension;
    
    if (! in_array($file_extension, $allowed_file_extension)) 
    {
        $response = array(
            "type" => "error",
            "message" => "Only PDF files are allowed."
        );        
    }    
    else if ($_FILES["aisscms_input"]["size"] > 500000)   // Validate image file size <500KB
    {   
        $response = array(
            "type" => "error",
            "message" => "PDF size exceeds 500KB."
        );
        echo $_FILES["aisscms_input"]["size"];
    }
    else if ($_FILES["aisscms_input"]["size"] ===0)   // Validate image file size zero means huge file
    {   
        $response = array(
            "type" => "error",
            "message" => "Check PDF for size issues."
        );
        echo $_FILES["aisscms_input"]["size"];
    }  
    else {
		$target = $application_folder."/" . $application_id . "_AISSCMS." .$file_extension;
		//echo $target;
        //$target = "image/" . basename($_FILES["aisscms_input"]["name"]);
        if (move_uploaded_file($_FILES["aisscms_input"]["tmp_name"], $target)) {//Uploaded successfully so insert photo upload status into docs upload status table
			$con = mysqli_connect(ORA_CON_DBHOSTNAME, ORA_CON_USER, ORA_CON_PASSWORD, ORA_CON_DATABASE);
			$sql="update t_docs_upload_status SET aisscms_upload_status = 'SUCCESSFUL' WHERE s_detid = '".$application_id."'";
			if (mysqli_query($con, $sql)) 
			{
			  $response = array(
                "type" => "success",
                "message" => "File uploaded successfully and Document Upload Status updated successfully!"
             );			  	  
			} 
			else 
			{
			  $response = array(
                "type" => "success",
                "message" => "File uploaded successfully But Document Upload Status Could Not be updated!"
             );
			 //echo "<br>Error: " . $sql . "<br>" . mysqli_error($con);
			}
			mysqli_close($con);
        } else {
            $response = array(
                "type" => "error",
                "message" => "Problem in uploading file."
            );
        }
    }
	$str = implode(",", $response);
	echo $str;

?>