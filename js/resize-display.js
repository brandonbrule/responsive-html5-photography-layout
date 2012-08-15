function showWidth(ele, w) {
  $("#window-width-text").text(ele + " " + w + "px");
}

function showHeight(ele, h) {
	$("#window-height-text").text(ele + " " + h + "px");
}

function startTip() {
	$("#starting").text(ele + " " + "");
}

$(window).resize(function(){ 
	$("#starting").remove();
  showWidth("Width:", $(window).width());
  showHeight("Height:", $(window).height());  
});
