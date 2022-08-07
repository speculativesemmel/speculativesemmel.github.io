var mobileMenuBtn = document.querySelector("#mobile-menu-btn");
var mobileMenu = document.querySelector(".mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
        if (mobileMenu.style.display === "none") {
            mobileMenu.style.display = "flex";
            mobileMenuBtn.innerHTML = "Close";
        }
        else {
            mobileMenu.style.display = "none";
            mobileMenuBtn.innerHTML = "Menu";
        }
    }
);


function openPage(pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
}