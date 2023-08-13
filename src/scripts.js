//HOMEPAGE PROJECTS
let Projects = document.querySelectorAll(".home-project");
Projects.forEach((project) => {
  project.addEventListener("mouseover", () => {
    Projects.forEach((el) => el.classList.remove("active"));
    project.classList.add("active");
  });
});
Projects[0].classList.remove("active");

Projects[Projects.length - 1].classList.add("active");

setTimeout(() => {
  Projects[3].classList.remove("active");
}, 100);

//HOMEPAGE FOUND ME
function goToInstagram() {
  let url = "https://instagram.com/carla.byte?igshid=OGQ5ZDc2ODk2ZA==";
  window.open(url);
}
let instagram = document.querySelector("#instagram");
instagram.addEventListener("click", goToInstagram);

function goTolinkedin() {
  let url = "https://www.linkedin.com/in/carla-jimenez-109852212/";
  window.open(url);
}
let linkedin = document.querySelector("#linkedin");
linkedin.addEventListener("click", goTolinkedin);

function goTogithub() {
  let url = "https://github.com/Carlaji";
  window.open(url);
}
let github = document.querySelector("#github");
github.addEventListener("click", goTogithub);

//HOMEPAGE found me animation
function clickBox() {
  let box = document.querySelector("#box");
  let found = document.querySelector("#found-title");
  box.style.transform = "rotate(10deg)";

  setTimeout(() => {
    box.style.transform = "rotate(-10deg)";
  }, 1000);
  setTimeout(() => {
    instagram.hidden = false;
    linkedin.hidden = false;
    github.hidden = false;
    box.style.transform = "rotate(0deg)";
    found.innerHTML = "Found Me";
  }, 3000);
}

instagram.hidden = true;
linkedin.hidden = true;
github.hidden = true;
let box = document.querySelector("#box");
box.addEventListener("click", clickBox);
