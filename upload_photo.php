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
	
	//print_r($_FILES);	//Check all $_FILES variables
	$response = array();
    // Get Image Dimension
    $fileinfo = @getimagesize($_FILES["photo_input"]["tmp_name"]);
    $width = $fileinfo[0];
    $height = $fileinfo[1];
    
    $allowed_image_extension = array(
    //    "png",
        "jpg",
    //    "jpeg"
    );
    
    // Get image file extension
    $file_extension = pathinfo($_FILES["photo_input"]["name"], PATHINFO_EXTENSION);
    
    // Validate file input to check if is not empty
    if (! file_exists($_FILES["photo_input"]["tmp_name"])) {
        $response = array(
            "type" => "error",
            "message" => "Choose image file to upload."
        );
    }    // Validate file input to check if is with valid extension
    else if (! in_array($file_extension, $allowed_image_extension)) {
        $response = array(
            "type" => "error",
            "message" => "Upload valid images. Only PNG and JPEG are allowed."
        );
        //echo $result;
    }    // Validate image file size
    else if (($_FILES["photo_input"]["size"] > 200000)) {
        $response = array(
            "type" => "error",
            "message" => "Image size exceeds 200KB"
        );
    }    // Validate image file dimension
    else if ($width > "200" || $height > "300") {
        $response = array(
            "type" => "error",
            "message" => "Image dimension should be within 300X200"
        );
    } else {
		$target = $application_folder."/" . $application_id . "_PHOTO." .$file_extension;
		//echo $target;
        //$target = "image/" . basename($_FILES["photo_input"]["name"]);
        if (move_uploaded_file($_FILES["photo_input"]["tmp_name"], $target)) {
			//Uploaded successfully so insert photo upload status into docs upload status table
			$con = mysqli_connect(ORA_CON_DBHOSTNAME, ORA_CON_USER, ORA_CON_PASSWORD, ORA_CON_DATABASE);
			$sql="update t_docs_upload_status SET photo_upload_status = 'SUCCESSFUL' WHERE s_detid = '".$application_id."'";
			if (mysqli_query($con, $sql)) 
			{
			  $response = array(
                "type" => "success",
                "message" => "Image uploaded successfully and Document Upload Status updated successfully!"
             );			  	  
			} 
			else 
			{
			  $response = array(
                "type" => "success",
                "message" => "Image uploaded successfully But Document Upload Status Could Not be updated!"
             );
			 //echo "<br>Error: " . $sql . "<br>" . mysqli_error($con);
			}
			mysqli_close($con);
        } 
		else {
            $response = array(
                "type" => "error",
                "message" => "Problem in uploading image files."
            );
        }
    }
	$str = implode(",", $response);
	echo $str;

?>