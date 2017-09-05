 
			$(document).ready(function() {
				$("#close_file").click(function(){
					$(" #resizediv_of_file").hide();
					$("#close_file").hide();
				});
				$("#resizediv_of_file").resizable();
				$("#resizediv_of_file").draggable();	
			});
 
		 
 
			 $(document).ready(
			    function() {
			        $("#file").click(function() {
			            $("#resizediv_of_file").toggle();
			            $("#close_file").show();
			        });
			    });
	 

		 
			$(document).ready(function() {
				$("#close_finder").click(function(){
					$(" #div_of_finder").hide();
					$("#close_finder").hide();
					return false; 
				});
				
				$("#div_of_finder").draggable();	
			});
	 