var mode = localStorage.getItem("bg");
if (mode == null) {
  var mode = "dark";
  localStorage.setItem("bg", mode);
  mode_swap();
}
else {
  mode_swap();
}

function mode_swap() {
  mode = localStorage.getItem("bg");
  if (mode == "light"){
    document.body.style.backgroundColor = "white";
    mode = "dark";
    localStorage.setItem("bg", mode);
  }
  else if (mode == "dark") {
    document.body.style.backgroundColor = "#0f0f0f";
    mode = "light";
    localStorage.setItem("bg", mode);
  }
}
