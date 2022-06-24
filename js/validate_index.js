$(document).ready(function () {
	/* $('#myModal').on('shown.bs.modal', function () {
		$('#myInput').trigger('focus')
	}) */
  //$("#myModal").modal('show');
  //$("div.instructions").show();
	
  $("#u_sub").click(function () {
    //alert("Clicked");
    let u_id = $("#u_id").val().trim();
    let u_ps = $("#u_ps").val().trim();

    if (u_id.length == 0) {
      alert("Please enter userid.");
      $("#u_id").focus();
      return false;
    }

    if (u_ps.length == 0) {
      alert("Please enter password.");
      $("#u_ps").focus();
      return false;
    }    
  }); //end of click handler
}); //end of $.ready function
