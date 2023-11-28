(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


const researchArticle = () => {
    location.href = "./researchPage.html"
}
const bookAndPublication = () => {
    location.href = "./bookAndPublication.html"
}
const articlesAndNewspaper = () => {
    location.href = "./articlesAndNewspaper.html"
}
const Achievements = () => {
    location.href = "./Achievements.html"
}