window.onload = function() {
    let savedUser = localStorage.getItem("username");
    if (savedUser) {
        document.getElementById("message").innerHTML = "Welcome " + savedUser;
    }

    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
    }
}

function validateForm() {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;

    if (!email.includes("@")) {
        alert("Invalid Email");
        return false;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone number must be 10 digits");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    localStorage.setItem("username", username);
    return true;
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
