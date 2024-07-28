let links = document.querySelectorAll("ul li a");
links.forEach((ele) => {
  ele.onclick = function () {
    links.forEach((e) => {
      e.classList.remove("active");
    });
    this.classList.add("active");
  };
});
const imges = [
  "../imgs/01.jpg",
  "../imgs/02.jpg",
  "../imgs/03.jpg",
  "../imgs/04.jpg",
  "../imgs/05.jpg",
];
let img = document.querySelector(".landing-page");
let landingpagefunction = function () {
  let roundmnumber = Math.floor(Math.random() * imges.length);
  img.style.backgroundImage = `url(${imges[roundmnumber]})`;
};

setInterval(landingpagefunction, 10000);

let Settingsbox = document.querySelector(".Settings-box");
let gearIcon = document.querySelector(".fa-gear");
let togglesettings = document.querySelector(".toggle-settings");

togglesettings.onclick = function () {
  if (Settingsbox.style.left === "-200px" || Settingsbox.style.left === "") {
    Settingsbox.style.left = "0px";
  } else {
    Settingsbox.style.left = "-200px";
  }
  gearIcon.classList.toggle("fa-spin");
};
