let home = document.querySelector(".home");
//HOMEPAGE PROJECTS
if (home) {
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
}
//HOMEPAGE FOUND ME

let instagram = document.querySelector("#instagram");
let linkedin = document.querySelector("#linkedin");
let github = document.querySelector("#github");

let instagramurl = "https://instagram.com/carla.byte?igshid=OGQ5ZDc2ODk2ZA==";
let linkedinurl = "https://www.linkedin.com/in/carla-jimenez-109852212/";
let githuburl = "https://github.com/Carlaji";

if (home) {
  instagram.addEventListener("click", () => {
    window.open(instagramurl, "_blank");
  });

  linkedin.addEventListener("click", () => {
    window.open(linkedinurl, "_blank");
  });

  github.addEventListener("click", () => {
    window.open(githuburl, "_blank");
  });
}

//HOMEPAGE found me animation
if (home) {
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
}

//ABOUT ME FOUND ME
let about = document.querySelector(".about");
if (about) {
  let aboutinstagram = document.getElementById("aboutme-insta");
  aboutinstagram.addEventListener("click", () => {
    window.open(instagramurl, "_blank");
  });
  let aboutlinkedin = document.getElementById("aboutme-linkedin");
  aboutlinkedin.addEventListener("click", () => {
    window.open(linkedinurl, "_blank");
  });
  let aboutgithub = document.getElementById("aboutme-github");
  aboutgithub.addEventListener("click", () => {
    window.open(githuburl, "_blank");
  });
}
