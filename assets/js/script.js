document.addEventListener('DOMContentLoaded', function() {
    // Get all navbar links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Get the navbar collapse element
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Add click event to each link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Check if navbar is expanded (mobile view)
            if(navbarCollapse.classList.contains('show')) {
                // Create a Bootstrap collapse instance and hide it
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
});