try {
  var mode = localStorage.getItem("bg");
  alert(mode);
}
catch {
  var mode = "light";
  localStorage.setItem("bg", mode);
  alert(mode);
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
