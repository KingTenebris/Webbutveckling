let white = "rgb(255, 255, 255)";
let black = "rgb(0, 0, 0)";
let orange = "rgb(255, 165, 0)";

let svgColor = document.getElementsByClassName("svgColor");


let newH1 = document.getElementsByTagName("h1");
//* knapp för dark and light mode
let mode = false;
//! javaScript behöver RBG code i ""
newH1[0].style.color = black;

newH1[0].addEventListener("mouseover", function(){
    newH1[0].style.color = orange;

    //* if-sats in JavaScript 
    // if(newH1[0].style.color == "rgb(0, 0, 0)"){
    //     newH1[0].style.color = "rgb(255, 140, 0)"; 
    // }
    // else{
    //     newH1[0].style.color = "rgb(0, 0, 0)";
    // }
});

newH1[0].addEventListener("mouseleave", function(){
    if(mode == false){
        newH1[0].style.color = black;
    }
    else{
        newH1[0].style.color = white;
    }
});

//* Dark and Light mode
let modeButton = document.getElementsByTagName("button");
let body = document.querySelector("body");
let textMode = document.getElementsByClassName("textMode");
modeButton[0].addEventListener("click", function(){
    if(mode == false){
        body.style.backgroundColor = black;
        lightDiv[0].style.backgroundColor = body.style.backgroundColor;
        svgColor[0].style.color = white;
        newH1[0].innerHTML = "And now the fun begins";
        newH1[0].style.color = white;
        textMode[0].innerHTML = "Light Mode!"
        mode = true;
    }
    else{
        body.style.backgroundColor = white;
        lightDiv[0].style.backgroundColor = body.style.backgroundColor;
        svgColor[0].style.color = black;
        newH1[0].innerHTML = "Welcome to my Webbsite with some JS";
        newH1[0].style.color = black;
        textMode[0].innerHTML = "Dark Mode!";
        mode = false;
    }
});

//* Light's on or off
let light = document.getElementsByTagName("img");
let lightDiv = document.getElementsByClassName("lightDiv");
// button for light is second in list so [1] - modeButton[1]
let lightMode = false;
modeButton[1].addEventListener("click", function(){
    if(lightMode == false){
        light[0].src = "emoji_objects_FILL0_wght400_GRAD0_opsz24.svg";
        lightDiv[0].style.backgroundColor = orange;
        modeButton[1].innerHTML = "Light off";
        lightMode = true;
    }
    else{
        light[0].src = "emoji_objects_FILL1_wght400_GRAD0_opsz24.svg";
        lightDiv[0].style.backgroundColor = body.style.backgroundColor;
        modeButton[1].innerHTML = "Light on";
        lightMode = false;
    }


});
