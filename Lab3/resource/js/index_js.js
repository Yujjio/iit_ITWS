
$(document).ready(function(){
	var check = true;
	$("#menu").click(function(){
		if (check) {
			check = false;
			$("#resource_list").animate({"left": '+=550px'}, "slow");
		}
		else {
			check = true;
			$("#resource_list").animate({"left": '-=550px'}, "slow");
		}
	});
	$("#resource").click(function(){
		$("#resource_part").slideToggle("slow");
	});
	$("#resource_css").click(function(){
		$("#css").slideToggle("slow");
	});
	$("#resource_js").click(function(){
		$("#js").slideToggle("slow");
	});
	$("#resource_lab").click(function(){
		$("#lab").slideToggle("slow");
	});
	$("#resource_lab2").click(function(){
		$("#lab2").slideToggle("slow");
	});
	$("#resource_lab4").click(function(){
		$("#lab4").slideToggle("slow");
	});
	$("#resource_lab5").click(function(){
		$("#lab5").slideToggle("slow");
	});
	$("#resource_lab6").click(function(){
		$("#lab6").slideToggle("slow");
	});
	$("#lab6_resources_click").click(function(){
		$("#lab6_resources").slideToggle("slow");
	});
	$("#resource_pic").click(function(){
		$("#pic").slideToggle("slow");
	});
});