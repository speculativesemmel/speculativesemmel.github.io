function openPage(pageName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
}

var mobileMenuButton = document.querySelector("#mobile-menu-button");
var mobileMenu = document.querySelector(".mobile-menu");

mobileMenuButton.addEventListener("click", () => {
        if (mobileMenu.style.display === "none") {
            mobileMenu.style.display = "flex";
            mobileMenuButton.innerHTML = "Close";
        }
        else {
            mobileMenu.style.display = "none";
            mobileMenuButton.innerHTML = "Menu";
        }
    }
);

var bob_state = false;
document.getElementById("project-content").addEventListener("click", darthFader);
function darthFader() {
    var bob_content = document.getElementById("waldeinsamkeit")
    if (bob_state === true) {
        bob_content.className= "close-bob";
        bob_state = false;
    }
    else if (bob_state === false) {
        bob_content.className= "open-bob";
        bob_state = true;
    }
}

/*
var fade_state = false;
//on btn click
function fade() {
    //get the button and div
    let div = document.getElementById("waldeinsamkeit");
    //if faded in or out
    if (fade_state === true) {
        //triggers animation
        div.style.animation = "fade-out 2s forwards";
        //sets fade_state
        fade_state = false;
        div.className="hide";
    } else if (fade_state === false) {
        //trigers animation
        div.style.display = "block";
        div.style.animation = "fade-in 2s forwards";
        //sets fade_state
        fade_state = true;
    }
}
*/

// To-Do: Navbar collapse after click for mobile mode
// Does this even work
// <a>'s needed?