
// backk to the top button
const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//HEADER STUFF

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

