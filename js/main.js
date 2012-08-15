function showWidth(ele, w) {
  $("#window-width-text").text(ele + " " + w + "px");
}
$(window).resize(function(){ 
  showWidth("Width:", $(window).width()); 
});
