let div = document.querySelector(".menu");
// icon[0] is menu icon, icon[1] is cross icon
let icon = div.getElementsByClassName("icon");
let ul = document.querySelector("ul");

window.addEventListener("resize", () => {
  if (window.innerWidth > 426) {
    icon[0].style.display = "none";
    icon[1].style.display = "none";
    ul.style.zIndex = 0;
    ul.style.opacity = 1;
    ul.style.height = "";
  } else {
    icon[0].style.display = "block";
    icon[1].style.display = "none";
    ul.style.zIndex = -1;
    ul.style.opacity = 0;
    ul.style.height = 0;
  }
});

icon[0].addEventListener("click", () => {
  // convert icon from menu to close
  icon[1].style.display = "block";
  icon[0].style.display = "none";

  // set style
  ul.style.zIndex = 10;
  ul.style.opacity = 1;
  ul.style.height = "calc(100vh - 100%)";
});

icon[1].addEventListener("click", () => {
  // convert icon from menu to close
  icon[0].style.display = "block";
  icon[1].style.display = "none";

  // set style
  ul.style.zIndex = -1;
  ul.style.opacity = 0;
  ul.style.height = "0";
});
