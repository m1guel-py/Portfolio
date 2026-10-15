//
// Variables
//

// HTML DOM
const info_about_h2 = document.getElementById("info_about_h2")
const button_after = document.getElementById("button_after")
const button_before = document.getElementById("button_before")

// Variables for use in Code
const roles = [
    "Freelancer",
    "Builder",
    "Front-End Developer",
    "Enthusiast",
    "Problem Solver"
];

let i = 0;

//
// Call Functions
//

change_work()

button_after.addEventListener("click", () => {
    change_project(true)
})

button_after.addEventListener("click", () => {
    change_project(false)
})

//
// Functions
//

function change_work() {
    info_about_h2.classList.remove("home_infos_animate");
    void info_about_h2.offsetWidth;

    info_about_h2.textContent = roles[i];

    info_about_h2.classList.add("home_infos_animate");

    i = (i + 1) % roles.length;

    setTimeout(change_work, 5000);
}

function change_project(isAfter) {
    if (isAfter) {

    }
    else {

    }
}