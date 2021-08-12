var mode = 0;
mode = mode + 1;
function mode_swap() {
  if mode == 0 {
    document.body.style.backgroundColor = "white";
  }
  if mode == 1 {
    document.body.style.backgroundColor = "#0f0f0f";
  }
  if mode == 2 {
     document.body.style.backgroundColor = "white";
     mode = 0
  }
}
