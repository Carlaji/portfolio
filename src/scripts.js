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
