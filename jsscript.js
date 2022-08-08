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

// To-Do: Navbar collapse after click for mobile mode
// Does this even work
// <a>'s needed?