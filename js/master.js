let backgroundOption = true;
let backgroundInterval;
let localStoragebackground = window.localStorage.getItem("data_background");
if (localStoragebackground !== null) {
  if (localStoragebackground === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  document.querySelectorAll(".buttons span").forEach((ele) => {
    ele.classList.remove("active");
  });
  if (localStoragebackground === "true") {
    document.querySelector(".buttons .yes").classList.add("active");
  } else document.querySelector(".buttons .No").classList.add("active");
}
let buttonsrandombackground = document.querySelectorAll(".buttons span");
buttonsrandombackground.forEach((span) => {
  span.addEventListener("click", function (e) {
    buttonsrandombackground.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.dataset.background === "yes") {
      window.localStorage.setItem("data_background", true);
      backgroundOption = true;
      randomizImge();
    } else {
      window.localStorage.setItem("data_background", false);
      clearInterval(backgroundInterval);
      backgroundOption = false;
    }
  });
});

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
function randomizImge() {
  if (backgroundOption === true) {
    let img = document.querySelector(".landing-page");

    backgroundInterval = setInterval(() => {
      let roundmnumber = Math.floor(Math.random() * imges.length);
      img.style.backgroundImage = `url(${imges[roundmnumber]})`;
    }, 1000);
  }
}
randomizImge();

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

const colorli = document.querySelectorAll(".colors-list li");
let localStoragecolor = localStorage.getItem("main-color");
if (localStoragecolor !== null) {
  document.documentElement.style.setProperty("--main-color", localStoragecolor);
  colorli.forEach((ele) => {
    ele.classList.remove("active");
    if (ele.dataset.color === localStoragecolor) {
      ele.classList.add("active");
    }
  });
}

colorli.forEach((li) => {
  li.addEventListener("click", function (e) {
    window.localStorage.setItem("main-color", e.target.dataset.color);
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    colorli.forEach((ele) => {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  });
});
