$(document).ready(function () {
	$.ajax({
		type: "get",
		url: "https://script.google.com/macros/s/AKfycbxyXp6GmjbLbGhW1f1peUNIzD9qQ3E5hnxK6lQrzhaX0ZNjdU4/exec",
		success: function(response) {
			showPassImage(response);
		},
	  });
});

function showPassImage(date){
    
    $("#passImage").css("display","inline");
	$("#title").html("國立中正大學校園嚴重特殊傳染性肺炎（武漢肺炎）健康關懷問卷");
	$("#passImageDate").html(date);
	
	var dateSpilt = date.split("-");
    var dt = new Date(parseInt(dateSpilt[0]), parseInt(dateSpilt[1]), parseInt(dateSpilt[2]));
    var color = ["#00FFFF", "#FF00FF", "#FF0000", "#FF7D00", "#FFFF00", "#00FF00", "#0000FF",  ]
	$("body").css("background-color",color[dt.getDay()]); 
}