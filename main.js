$(document).ready(function(){
    
	$("#scan").click(function(){
		$("#scancontent").show();
		$("#logobottom").hide();
		$("#splash").hide();
	});    

	$("#selectFile").click(function(){
		$("#photosubmit").show();
	});  
    
	$("#photosubmit").click(function(){
		$("#scancontent").hide();
		$("#photosubmit").hide();
		$("#demoflier").show();
	}); 
    
	$("#categ").click(function(){
		$("#scancontent").hide();
		$("#photosubmit").hide();
		$("#splash").hide();
		$("#categ")".show();
		
	});
	
});    
