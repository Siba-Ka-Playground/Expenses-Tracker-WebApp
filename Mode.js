// Specifies Dark Mode and Light Mode

let mode = document.querySelector("#mode_btn"); //Specifies mode button
let body = document.querySelector("body"); //Specifies body
let currmode = "Light";

// On clicking Mode Btn this function works (Dark Mode/Light Mode)
const onMode = () => {
  if (currmode === "light") {
    currmode = "dark";
    body.classList.add("dark_mode");
    body.classList.remove("light_mode");
  } else {
    currmode = "light";
    body.classList.add("light_mode");
    body.classList.remove("dark_mode");
  }
};
mode.addEventListener("click", onMode);
