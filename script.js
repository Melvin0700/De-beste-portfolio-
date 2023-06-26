window.addEventListener("scroll", function() {
  var button = document.getElementById("button");
  var threshold = 675; // Adjust this value to set the scroll threshold

  if (window.pageYOffset > threshold) {
    button.classList.add("floating");
    button.classList.remove("back");
  } else {
      button.classList.remove("floating");
      button.classList.add("back");
  }
});