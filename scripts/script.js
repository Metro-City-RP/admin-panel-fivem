const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;


    if (username === "admin@metrocityrp.eu" && password === "4HthLBF5wl(@czJ6+}!qpav8") {
        window.location.assign("../loading-screen/loading.html")
    } else {
        loginErrorMsg.style.opacity = 1;
        setTimeout(function () {
            window.location.reload();
        }, 2000);

    }
})
