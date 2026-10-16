//
// Variables
//

// HTML DOM //
const info_about_h2 = document.getElementById("info_about_h2")
const button_after = document.getElementById("button_after")
const button_before = document.getElementById("button_before")
const title_project = document.getElementById("title_project")
const card_image = document.getElementById("card_image")
const text_project = document.getElementById("text_project")
const box_github = document.getElementById("box_github")
const box_gmail = document.getElementById("box_gmail")

// Variables for use in Code
const roles = [
    "Freelancer",
    "Builder",
    "Front-End Developer",
    "Enthusiast",
    "Problem Solver"
];

let i = 0;
let index = 0;
let conteud;

//
// Call Functions
//

change_work()

button_after.addEventListener("click", () => {change_project(true)})
button_before.addEventListener("click", () => {change_project(false)})

box_github.addEventListener("click", () => {window.location.href = "https://github.com/m1guel-py"})

fetch('assets/scripts/project_info.json')
        .then(response => response.json()) // Parse JSON
        .then(data => {
            conteud = data;
            console.log(conteud)
        }) // Work with JSON data
        .catch(error => console.error('Error fetching JSON:', error));
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
    let conteud_project;
    if (isAfter) {
        index+=1
        if (index > conteud.length - 1) index = 0

        conteud_project = conteud[index];
        title_project.textContent = conteud_project.name;
        card_image.src = conteud_project.image_path;
        text_project.textContent = conteud_project.description;
    }
    else {
        index-=1
        if (index < 0) index = 0;

        conteud_project = conteud[index];
        title_project.textContent = conteud_project.name;
        card_image.src = conteud_project.image_path;
        text_project.textContent = conteud_project.description;
    }
}