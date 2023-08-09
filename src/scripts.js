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
