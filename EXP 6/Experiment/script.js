window.onload = function () {
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
    }

    let savedData = localStorage.getItem("formData");
    if (savedData) {
        document.getElementById("storedData").innerText = savedData;
    }
};

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    let valid = true;

    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Invalid email";
        valid = false;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        document.getElementById("phoneError").innerText = "Phone must be 10 digits";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        valid = false;
    }

    if (valid) {
        let data = "Email: " + email + " | Phone: " + phone;
        localStorage.setItem("formData", data);
        document.getElementById("storedData").innerText = data;
        this.reset();
    }
});

document.getElementById("toggleTheme").addEventListener("click", function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
