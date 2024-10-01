const myH1 = document.getElementById("myH1");
const heroContainer = document.getElementById("heroContainer");
const skills = document.getElementById("skills");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const frontendDiv = document.getElementById("frontendDiv");
const backendDiv = document.getElementById("backendDiv");
const section3Div = document.getElementById("section3Div");
const section4Div = document.getElementById("section4Div");
const contactUsText = document.getElementById("contactUsText");
const form = document.getElementById("form");
const copyrightDate = document.getElementById("copyrightDate");
const copyrightText = document.getElementById("copyrightText");

document.addEventListener("DOMContentLoaded", () => {
    myH1.style.opacity = "100%";
    myH1.style.top = "0px";
    heroContainer.style.opacity = "100%";
    heroContainer.style.top = "0px";
    setTimeout( () => {
        skills.style.opacity = "100%";
        skills.style.top = "0px";
    }, 1000 * 1);
})

document.addEventListener("scroll", () => {
    if(window.innerWidth <= 480){

        const section2Rect = section2.getBoundingClientRect();

        if(section2Rect.top <= (0.8 * innerHeight)){
            frontendDiv.style.left = "25px";
            frontendDiv.style.opacity = "100%";
        }
        else{
            frontendDiv.style.left = "-50px"
            frontendDiv.style.opacity = "0%";
        }
    
        if(section2Rect.top <= (innerHeight / 2)){
            backendDiv.style.left = "25px";
            backendDiv.style.opacity = "100%";
        }
        else{
            backendDiv.style.left = "-50px";
            backendDiv.style.opacity = "0%";
        }
    
        const section3Rect = section3.getBoundingClientRect();
        if(section3Rect.top <= (0.8 * innerHeight)){
            section3Div.style.top = "0px";
            section3Div.style.opacity = "100%";
        }
        else{
            section3Div.style.top = "200px"
            section3Div.style.opacity = "0%";
        }
    
        const section4Rect = section4.getBoundingClientRect();
        if(section4Rect.top <= (0.8 * innerHeight)){
            section4Div.style.top = "0px";
            section4Div.style.opacity = "100%";
        }
        else{
            section4Div.style.top = "200px"
            section4Div.style.opacity = "0%";
        }
        if(section4Rect.top <= (0.7 * innerHeight)){
            contactUsText.style.top = "0px";
            contactUsText.style.opacity = "100%";
        }
        else{
            contactUsText.style.top = "200px"
            contactUsText.style.opacity = "0%";
        }
        if(section4Rect.top <= (0.6 * innerHeight)){
            form.style.top = "0px";
            form.style.opacity = "100%";
        }
        else{
            form.style.top = "200px"
            form.style.opacity = "0%";
        }
        if(section4Rect.top <= (0.3 * innerHeight)){
            copyrightText.style.top = "0px";
            copyrightText.style.opacity = "100%";
        }
        else{
            copyrightText.style.top = "200px"
            copyrightText.style.opacity = "0%";
        }
    
    
    }

    else if(window.innerWidth > 480){ 
    const section2Rect = section2.getBoundingClientRect();

    if(section2Rect.top <= (0.8 * innerHeight)){
        frontendDiv.style.left = "25px";
        frontendDiv.style.opacity = "100%";
    }
    else{
        frontendDiv.style.left = "-50px"
        frontendDiv.style.opacity = "0%";
    }

    if(section2Rect.top <= (innerHeight * 0.4)){
        backendDiv.style.left = "25px";
        backendDiv.style.opacity = "100%";
    }
    else{
        backendDiv.style.left = "-50px";
        backendDiv.style.opacity = "0%";
    }

    const section3Rect = section3.getBoundingClientRect();
    if(section3Rect.top <= (0.8 * innerHeight)){
        section3Div.style.top = "0px";
        section3Div.style.opacity = "100%";
    }
    else{
        section3Div.style.top = "200px"
        section3Div.style.opacity = "0%";
    }

    const section4Rect = section4.getBoundingClientRect();
    if(section4Rect.top <= (0.8 * innerHeight)){
        section4Div.style.top = "0px";
        section4Div.style.opacity = "100%";
    }
    else{
        section4Div.style.top = "200px"
        section4Div.style.opacity = "0%";
    }
    if(section4Rect.top <= (0.7 * innerHeight)){
        contactUsText.style.top = "0px";
        contactUsText.style.opacity = "100%";
    }
    else{
        contactUsText.style.top = "200px"
        contactUsText.style.opacity = "0%";
    }
    if(section4Rect.top <= (0.6 * innerHeight)){
        form.style.top = "0px";
        form.style.opacity = "100%";
    }
    else{
        form.style.top = "200px"
        form.style.opacity = "0%";
    }
    if(section4Rect.top <= (0.3 * innerHeight)){
        copyrightText.style.top = "0px";
        copyrightText.style.opacity = "100%";
    }
    else{
        copyrightText.style.top = "200px"
        copyrightText.style.opacity = "0%";
    }
    }
    // console.log(window.innerWidth);

   
})

copyrightDate.innerText = new Date().getFullYear();
// setTimeout(slideIn, 1000)

// function slideIn(event){
//     console.log(event.target)
// }

