try {
  var mode = parseInt(sessionStorage.getItem("bg"));
  mode_swap();
  alert("test");
  }
catch {
  alert("test2");
  var mode = 1;
  sessionStorage.setItem("bg", mode);
}

function mode_swap() {
  if (mode == 0){
    document.body.style.backgroundColor = "white";
    mode = 1;
    sessionStorage.setItem("bg", mode);
  }
  else if (mode == 1) {
    document.body.style.backgroundColor = "#0f0f0f";
    mode = 0
    sessionStorage.setItem("bg", mode);
  }
}
