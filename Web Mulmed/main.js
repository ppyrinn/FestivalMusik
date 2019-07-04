/*========================================================
						LANDING PAGE JS
==========================================================*/
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

/*========================================================
						LINE-UP PAGE JS
==========================================================*/

//------------------'PERFORMERS' Banner--------------------
var container = document.getElementById('pageTitle');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 3300 - windowHeight;
var square = document.getElementById('perform');

// update position of square when scroll event fires.
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;
  
  if(scrollPercent*window.innerWidth < 500){
  	square.style.left = scrollPercent*window.innerWidth + 'px';
  }
});

//---------------Pop-up Show More---------------------
// Get the modal
var modal1 = document.getElementsByClassName("popup-modal")[0];
var modal2 = document.getElementsByClassName("popup-modal")[1];
var modal3 = document.getElementsByClassName("popup-modal")[2];

// Get the button that opens the modal
var btn1 = document.getElementsByClassName("popup")[0];
var btn2 = document.getElementsByClassName("popup")[1];
var btn3 = document.getElementsByClassName("popup")[2];

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  else if (event.target == modal2) {
    modal2.style.display = "none";
  }
  else if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
