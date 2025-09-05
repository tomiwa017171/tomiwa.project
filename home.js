//window.alert("Welcome to TLBCrypto World!");

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    if (hamburger && menu) {
        hamburger.addEventListener("click", function() {
            hamburger.classList.toggle("active");
            menu.classList.toggle("active");
        });

        document.querySelectorAll("#menu a").forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    hamburger.classList.remove("active");
                    menu.classList.remove("active");
                }
            });
        });
    }
});