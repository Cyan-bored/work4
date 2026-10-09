const projectsGrid = document.querySelector(".projects-grid");

projectsGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (!card) return;

    const url = card.getAttribute("data-url");
    if (url) {
        window.open(url, "_blank");
    }
});
