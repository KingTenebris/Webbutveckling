//! Colors
// JavaScript behöver RBG code i ""
let white = "rgb(255, 255, 255)";
let black = "rgb(0, 0, 0)";
let orange = "rgb(255, 165, 0)";

//! Buttons
let modeButton = document.getElementsByTagName("button");

//! Elements
let h1 =        document.querySelector("h1");
let body =      document.querySelector("body");
let lampImg =   document.querySelector("img");
let allDiv =    document.querySelectorAll("div");
let svgColor =  document.getElementsByClassName("svgColor");
let textMode =  document.getElementsByClassName("textMode");
let lightDiv =  document.getElementsByClassName("lightDiv");
let remove =    document.getElementsByClassName("remove");
let removeDiv = document.getElementsByClassName("removeDiv");

//! Mode
let themeMode = false;
let lampMode = false;
let removeCondition = false;

//! Click events
modeButton[4].addEventListener("click", toggleMode);
modeButton[5].addEventListener("click", toggleLight);
modeButton[6].addEventListener("click", hideShowAllDiv);

//* hover on text to change it
h1.style.color = black;
h1.addEventListener("mouseover", function(){
    h1.style.color = orange;
});

h1.addEventListener("mouseleave", function(){
    if(themeMode == false){
        h1.style.color = black;
    }
    else{
        h1.style.color = white;
    }
});


//* Dark and Light mode
function toggleMode(){
    // console.log(themeMode);
    if (themeMode){ //if themeMode is 'true
        body.style.backgroundColor = white;
        lightDiv[0].style.backgroundColor = body.style.backgroundColor;
        svgColor[0].style.color = black;
        h1.innerHTML = 'Welcome to my Webbsite with some JS';
        h1.style.color = black;
        textMode[0].innerHTML = 'Dark Mode';
        themeMode = false;

        if (lampMode){
            lampImg.src = 'emoji_objects_FILL0_wght400_GRAD0_opsz24.svg';
            lightDiv[0].style.backgroundColor = orange;
        } 
        else{
            lampImg.src = 'emoji_objects_FILL1_wght400_GRAD0_opsz24.svg';
            lightDiv[0].style.backgroundColor = body.style.backgroundColor;
        }
    } 
    else{
        body.style.backgroundColor = black;
        lightDiv[0].style.backgroundColor = body.style.backgroundColor;
        svgColor[0].style.color = white;
        h1.innerHTML = 'And now the fun begins';
        h1.style.color = white;
        textMode[0].innerHTML = 'Light Mode';
        themeMode = true;

        if (lampMode){
            lampImg.src = 'emoji_objects_FILL0_wght400_GRAD0_opsz24.svg';
            lightDiv[0].style.backgroundColor = orange;
        } 
        else{
            lampImg.src = 'emoji_objects_FILL1_wght400_GRAD0_opsz24.svg';
            lightDiv[0].style.backgroundColor = body.style.backgroundColor;
        }
    }
  }

//* Toggle light (on/off)
function toggleLight(){
    // console.log(lampMode)
    if (lampMode){
        lampImg.src = 'emoji_objects_FILL1_wght400_GRAD0_opsz24.svg';
        lightDiv[0].style.backgroundColor = body.style.backgroundColor;
        modeButton[5].innerHTML = 'Light on';
        lampMode = false;
    } 
    else{
        lampImg.src = 'emoji_objects_FILL0_wght400_GRAD0_opsz24.svg';
        lightDiv[0].style.backgroundColor = orange;
        modeButton[5].innerHTML = 'Light off';
        lampMode = true;

    }
}

//* Delete
console.log(allDiv);
function hideShowAllDiv(){
    if(removeCondition){
        for (let i = 0; i < allDiv.length; i++){
            allDiv[i].style.display = "flex";
            remove[0].innerHTML = "DELETE system.32";
            
            removeCondition = false;
        }
    }
    else{
        for (let i = 0; i < allDiv.length; i++){
            allDiv[i].style.display = "none";
            removeDiv[0].style.display = "flex";
            remove[0].innerHTML = "Return back";

            removeCondition = true;
        }
        
    }  
}


//* Vissa alla uppgifter 
modeButton[0].addEventListener("click", function(){
    for (let i = 0; i < allDiv.length; i++){
        allDiv[i].style.display = "none";
        allDiv[0].style.display = "flex";
    }

});
modeButton[1].addEventListener("click", function(){
    for (let i = 0; i < allDiv.length; i++){
        allDiv[i].style.display = "none";
        allDiv[1].style.display = "flex";
    }

});
modeButton[2].addEventListener("click", function(){
    for (let i = 0; i < allDiv.length; i++){
        console.log(allDiv);
        allDiv[i].style.display = "none";
        allDiv[2].style.display = "flex";
        allDiv[3].style.display = "flex";
    }

});
modeButton[3].addEventListener("click", function(){
    for (let i = 0; i < allDiv.length; i++){
        allDiv[i].style.display = "none";
        allDiv[4].style.display = "flex";
    }

});


