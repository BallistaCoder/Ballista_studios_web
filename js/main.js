try {
  let mode = localstorage.key("bg");
  mode_swap();
  }
catch {
  let mode = 1;
  window.localStorage.setItem("bg", mode);
}

function mode_swap() {
  if (mode == 0){
    document.body.style.backgroundColor = "white";
    mode = 1;
  }
  else if (mode == 1) {
    document.body.style.backgroundColor = "#0f0f0f";
    mode = 0
  }
}
