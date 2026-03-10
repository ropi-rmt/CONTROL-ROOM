const login = localStorage.getItem("login");

if (!login) {
    window.location.href = "index.html";
}