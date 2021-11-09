let refButton = document.getElementsByTagName("button")[0];
refButton.addEventListener("click", function () {
    if (refButton.textContent == "change background") {
        let refDiv = document.getElementsByTagName("div")[0];
        refDiv.style.backgroundColor = "yellow";
        let refAside = document.getElementsByTagName("aside")[0];
        refAside.style.backgroundColor = "orange";
        let refEducation = document.getElementsByClassName("education")[0];
        refEducation.style.backgroundColor = "orange";
        let refExperience = document.getElementsByClassName("experience")[0];
        refExperience.style.backgroundColor = "orange";
        let refMain = document.getElementsByClassName("helper")[0];
        refMain.style.backgroundColor = "green";
        let refHeader = document.getElementsByTagName("header")[0];
        refHeader.style.backgroundColor = "black";
        refButton.textContent = "go back";
    } else if (refButton.textContent == "go back") {
        let refDiv = document.getElementsByTagName("div")[0];
        refDiv.style.backgroundColor = "cornsilk";
        let refAside = document.getElementsByTagName("aside")[0];
        refAside.style.backgroundColor = "rgb(238, 229, 230)";
        let refEducation = document.getElementsByClassName("education")[0];
        refEducation.style.backgroundColor = "rgb(238, 229, 230)";
        let refExperience = document.getElementsByClassName("experience")[0];
        refExperience.style.backgroundColor = "rgb(238, 229, 230)";
        let refMain = document.getElementsByClassName("helper")[0];
        refMain.style.backgroundColor = "cornsilk";
        let refHeader = document.getElementsByTagName("header")[0];
        refHeader.style.backgroundColor = "rgb(68, 68, 68)";
        refButton.textContent = "change background";  
    }
});