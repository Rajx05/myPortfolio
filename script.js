const body = document.querySelector("body");
const btn = document.querySelector(".btn");

// default mode
let mode = "dark";

btn.addEventListener("click", () => {
  if(mode == "dark"){
    // set light mode
    document.documentElement.style.setProperty("--text-color","black");
    document.documentElement.style.setProperty("--nav-color","#FE5F55");
    document.documentElement.style.setProperty("--body-color","#EEF5DB");
    mode = "light";
  }else{
    // set dark mode
    document.documentElement.style.setProperty("--text-color","#E4E6C3");
    document.documentElement.style.setProperty("--nav-color","#222725");
    document.documentElement.style.setProperty("--body-color","#121113");
    mode = "dark";
  }
});
