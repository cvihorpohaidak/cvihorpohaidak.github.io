let refButton = document.getElementsByTagName("button")[0];
let refDiv = document.getElementsByTagName("div")[0];
let refAside = document.getElementsByTagName("aside")[0];
let refEducation = document.getElementsByClassName("education")[0];
let refExperience = document.getElementsByClassName("experience")[0];
let refMain = document.getElementsByClassName("helper")[0];
let refHeader = document.getElementsByTagName("header")[0];

refButton.addEventListener("click", function () {
    if (refButton.textContent == "change background") {
        refDiv.style.backgroundColor = "yellow";
        refAside.style.backgroundColor = "orange";
        refEducation.style.backgroundColor = "orange";
        refExperience.style.backgroundColor = "orange";
        refMain.style.backgroundColor = "green";
        refHeader.style.backgroundColor = "black";
        refButton.textContent = "go back";
    } else if (refButton.textContent == "go back") {
        refDiv.style.backgroundColor = "cornsilk";
        refAside.style.backgroundColor = "rgb(238, 229, 230)";
        refEducation.style.backgroundColor = "rgb(238, 229, 230)";
        refExperience.style.backgroundColor = "rgb(238, 229, 230)";
        refMain.style.backgroundColor = "cornsilk";
        refHeader.style.backgroundColor = "rgb(68, 68, 68)";
        refButton.textContent = "change background";  
    }
});
