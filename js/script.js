
var activeSlide = document.querySelector(".slider-content.current");
activeSlide.classList.remove("current");
activeSlide.classList.add("active");

var activeButton = document.querySelector(".control-btn.active");

var sliderButtons = document.querySelectorAll(".control-btn");
for (var i = 0; i < sliderButtons.length; i++) {
  sliderButtons[i].addEventListener("click", function(event) {

    event.preventDefault();
    if (this==activeButton) return false;

    activeSlide.classList.remove("active");
    activeSlide = document.querySelector(".slider-content[data-number='" + this.dataset.number + "']");
    activeSlide.classList.add("active");

    activeButton.classList.remove("active");
    this.classList.add("active");
    activeButton = this;

  });
}

// карта
var google;

function initMap() {
	var mapOption = {
  	zoom: 17,
    scrollwheel: false,
    center: new google.maps.LatLng(59.939150,30.32000000)
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOption);
  var image = "img/pin.png";
  var myLatLng = new google.maps.LatLng(59.938605,30.32299000);
  var beachMarker = new google.maps.Marker({
  	position: myLatLng,
    map: map,
    icon: image
  });
}

if (google) {
  google.maps.event.addDomListener(window, "load", initMap);
}
