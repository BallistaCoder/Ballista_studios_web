var mode = localStorage.getItem("bg");
alert("test");
if (mode == null) {
  var mode = "dark";
  localStorage.setItem("bg", mode);
  mode_swap();
  alert("test1");
}
else {
  mode_swap();
  alert("test2");
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
