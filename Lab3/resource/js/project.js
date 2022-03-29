$(document).ready(function() {
	var option = 1;
	if (option == 1) {
		$.ajax({
		type: "GET",
		url: "data/menu.json",
		dataType: "json",
		success: function(responseData, status){
			var output_menu = "";
			var output_bar = "";
			var count = 0;
			var result = "";
			$.each(responseData.items, function(i, item) {
				if (count == 3) {
					count = 0;
					output_menu += "</div>";
					output_bar += "</div>";
					output_menu += output_bar;
					result += output_menu;
					output_menu = "";
					output_bar = "";
				}
				if (count == 0) {
					output_menu += "<div>";
					output_bar += "<div class=\"folder_text\">";
				}
				output_menu += "<span class='folder_inline'>";
					output_menu += "<a href=\"" + item.link + "\">";
						output_menu += "<img src=\"" + item.image_out + "\" ";
						output_menu += "class=\"lab_folder folder_first\" ";
						output_menu += "onmouseover=\"this.src=\'" + item.image_over + "\'\" ";
						output_menu += "onmouseout=\"this.src=\'" + item.image_out + "\'\" ";
						output_menu += "title=\"" + item.alt + "\"";
						output_menu += ">";
					output_menu += "</a>";
				output_menu += "</span>";

				output_bar += "<a href=\"" + item.link + "\"" + ">";
				output_bar += "<h3 class='lab' title=\"" + item.alt + "\" ";
				output_bar += "id=\"" + item.title + "\">";
				output_bar += item.title;
				output_bar += "</h3></a>"
				count++;
			});
		output_menu += "</div>";
		output_bar += "</div>";
		output_menu += output_bar;
		result += output_menu;
		$("#folder").html(result);	
		},
		error: function(msg) {
			alert("There was a problem: " + msg.status + " " + msg.statusText);
		}
	});
	}
});