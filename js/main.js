try {
  var mode = sessionStorage.getItem("bg");
  if (mode=="") {
     var mode = "light";
     sessionStorage.setItem("bg", mode);
  }
  mode_swap();
  }
catch {
  var mode = "light";
  sessionStorage.setItem("bg", mode);
}

function mode_swap() {
  if (mode == "light"){
    document.body.style.backgroundColor = "white";
    mode = "dark";
    sessionStorage.setItem("bg", mode);
  }
  else if (mode == "dark") {
    document.body.style.backgroundColor = "#0f0f0f";
    mode = "like";
    sessionStorage.setItem("bg", mode);
  }
}
