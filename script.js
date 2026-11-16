// Mobile menu open and close
var menuButton = document.getElementById("menuButton");
var menu = document.getElementById("menu");

menuButton.onclick = function () {
    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        menuButton.innerHTML = "✕";
    } else {
        menuButton.innerHTML = "☰";
    }
};

// Close menu after clicking a link
var links = document.querySelectorAll(".menu a");

for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        menu.classList.remove("show");
        menuButton.innerHTML = "☰";
    };
}

// Dark and light theme button
var themeButton = document.getElementById("themeButton");

themeButton.onclick = function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.innerHTML = "☾";
    } else {
        themeButton.innerHTML = "☼";
    }
};

// Contact form checking
var contactForm = document.getElementById("contactForm");

contactForm.onsubmit = function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var result = document.getElementById("formMessage");

    if (name == "" || email == "" || message == "") {
        result.innerHTML = "Please fill in all the fields.";
    } else if (!email.includes("@") || !email.includes(".")) {
        result.innerHTML = "Please enter a valid email address.";
    } else {
        result.innerHTML = "Thank you, " + name + "! Your form is valid.";
        contactForm.reset();
    }
};

// Show current year
document.getElementById("year").innerHTML = new Date().getFullYear();
