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
    $("#passImageDate").html(date);
    $("#passImage").css("display","inline");
    var dateSpilt = date.split("-");
    $("#passImageDate").html(date);
	$("#title").html(date);
    var dt = new Date(parseInt(dateSpilt[0]), parseInt(dateSpilt[1]), parseInt(dateSpilt[2]));
    var color = ["#00FFFF", "#FF00FF", "#FF0000", "#FF7D00", "#FFFF00", "#00FF00", "#0000FF",  ]
    $("#passImageDate").css("color","#ffffff"); 
	$("body").css("background-color",color[dt.getDay()]); 
}