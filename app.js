document.addEventListener("DOMContentLoaded", () => {
  const sectionNavbar = document.querySelector(".section-navbar");
  const getStarted = document.querySelector("#get-started");
  const sideTagsCol = document.querySelector(".side-tags-col");
  const distanceTop = sideTagsCol.offsetTop - 80;

  document.addEventListener("scroll", () => {
    if (window.scrollY >= distanceTop) {
      sideTagsCol.classList.add("fixed-section");
    } else {
      sideTagsCol.classList.remove("fixed-section");
    }

    if (window.scrollY >= 0.5 * window.innerHeight) {
      sectionNavbar.style.backgroundColor = "#ffff";
      getStarted.style.backgroundColor = "rgb(21, 145, 21)";
    } else {
      sectionNavbar.style.backgroundColor = "#ffc017";
      getStarted.style.backgroundColor = "rgb(28, 28, 28)";
    }
  });
});
