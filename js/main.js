try {
  var mode = window.sessionStorage.getItem("bg");
  mode_swap();
  }
catch {
  var mode = 1;
  window.sessionStorage.setItem("bg", mode);
}

function mode_swap() {
  if (mode == 0){
    document.body.style.backgroundColor = "white";
    mode = 1;
    window.sessionStorage.setItem("bg", mode);
  }
  else if (mode == 1) {
    document.body.style.backgroundColor = "#0f0f0f";
    mode = 0
    window.sessionStorage.setItem("bg", mode);
  }
}
