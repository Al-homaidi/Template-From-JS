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
    let roundmnumber = Math.floor(Math.random() * imges.length)
    console.log(roundmnumber);
    img.style.backgroundImage = `url(${imges[roundmnumber]})`;
};

setInterval(landingpagefunction, 10000);