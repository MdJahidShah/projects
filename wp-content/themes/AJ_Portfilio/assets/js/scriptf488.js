    // Your custom JavaScript here

document.getElementById('searchIcon').addEventListener('click', function(e) {
    e.preventDefault();
    var searchForm = document.getElementById('searchForm');
    if (searchForm.style.display === 'none' || searchForm.style.display === '') {
        searchForm.style.display = 'block';
    } else {
        searchForm.style.display = 'none';
    }
});

document.getElementById('searchIcon').addEventListener('click', function(e) {
        e.preventDefault();
        var searchForm = document.getElementById('searchForm');
        if (searchForm.classList.contains('show')) {
            searchForm.classList.remove('show');
        } else {
            searchForm.classList.add('show');
        }
    });

    document.querySelector('.navbar-toggler').addEventListener('click', function() {
        var navbar = document.getElementById('navbarSupportedContent');
        navbar.classList.toggle('show'); // Toggle class to show/hide navbar
    });
    
    document.getElementById('searchIcon').addEventListener('click', function(e) {
        e.preventDefault();
        var searchForm = document.getElementById('searchForm');
        searchForm.classList.toggle('show'); // Toggle search form visibility
    });
    

    // Scroll to Top Button
    document.addEventListener("DOMContentLoaded", function() {
        // Scroll to Top Button
        const myBtn = document.getElementById("myBtn");
        const header = document.querySelector("header");

        function scrollFunction() {
            if (document.documentElement.scrollTop > 20) {
                myBtn.style.display = "block";
            } else {
                myBtn.style.display = "none";
            }
        }

        myBtn?.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        let lastScrollTop = 0;
        window.addEventListener("scroll", function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                header?.classList.add("header-hidden"); // Hide header on scroll down
            } else {
                header?.classList.remove("header-hidden"); // Show header on scroll up
            }
            lastScrollTop = scrollTop;
            scrollFunction(); // Call scroll function
        });

        // Search Icon Toggle
        const searchIcon = document.getElementById("searchIcon");
        const searchForm = document.getElementById("searchForm");

        searchIcon?.addEventListener("click", function(e) {
            e.preventDefault();
            searchForm?.classList.toggle("show");
        });

    });
        // WhatsApp Button
        const wtBtn = document.getElementById("wtBtn");
        wtBtn?.addEventListener("click", () => {
            window.open("https://api.whatsapp.com/send/?phone=%2B8801684618959&text&type=phone_number&app_absent=0", "_blank");
        });
