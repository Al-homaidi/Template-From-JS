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

let buttonsrandombackground = document.querySelectorAll(
  ".option-box .buttons span"
);
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

let localStoragedata_displaynav =
  window.localStorage.getItem("data_displaynav");
if (localStoragedata_displaynav !== null) {
  if (localStoragedata_displaynav === "true") {
    document.querySelector(".nav-bullets").style.display = "block";
  } else {
    document.querySelector(".nav-bullets").style.display = "none";
  }
  document.querySelectorAll(".testing-option .buttons span").forEach((ele) => {
    ele.classList.remove("active");
  });
  if (localStoragedata_displaynav === "true") {
    document
      .querySelector(".testing-option .buttons .yes")
      .classList.add("active");
  } else
    document
      .querySelector(".testing-option .buttons .No")
      .classList.add("active");
}

let buttonsnavbullets = document.querySelectorAll(
  ".testing-option .buttons span"
);
buttonsnavbullets.forEach((span) => {
  span.addEventListener("click", function (e) {
    buttonsnavbullets.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.dataset.displaynav === "yes") {
      window.localStorage.setItem("data_displaynav", true);
      document.querySelector(".nav-bullets").style.display = "block";
    } else {
      window.localStorage.setItem("data_displaynav", false);
      document.querySelector(".nav-bullets").style.display = "none";
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
    }, 10000);
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

let ourskils = document.querySelector(".Our-Skills");

window.onscroll = function () {
  let ourskilsscroltop = ourskils.offsetTop;
  let ourskilsouterheight = ourskils.offsetHeight;
  let windowheight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;
  if (windowScrollTop > ourskilsscroltop + ourskilsouterheight - windowheight) {
    let allrskils = document.querySelectorAll(
      ".Our-Skills .skill-progress span"
    );
    allrskils.forEach((skil) => {
      skil.style.width = skil.dataset.progress;
    });
  }
};
let imagesbox = document.querySelectorAll(".images-box img");
imagesbox.forEach((img) => {
  img.addEventListener("click", function () {
    let overlay = document.createElement("div");
    overlay.classList.add("popup-overlay");
    document.body.appendChild(overlay);

    let popup = document.createElement("popup");
    popup.classList.add("popup");
    document.body.appendChild(popup);

    if (img.alt) {
      let altimg = document.createElement("h3");
      altimg.innerHTML = img.alt;
      popup.appendChild(altimg);
    }

    let imgpopup = document.createElement("img");
    imgpopup.src = img.src;
    imgpopup.classList.add("imgpopup");
    popup.appendChild(imgpopup);

    let buttoncancel = document.createElement("span");
    buttoncancel.classList.add("buttoncancel");
    buttoncancel.innerHTML = "X";
    popup.appendChild(buttoncancel);

    buttoncancel.addEventListener("click", function () {
      overlay.style.display = "none";
      popup.style.display = "none";
    });
  });
});

let navbullets = document.querySelectorAll(".nav-bullets .bullet");
navbullets.forEach((ele) => {
  ele.addEventListener("click", function () {
    document.querySelector(ele.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});
