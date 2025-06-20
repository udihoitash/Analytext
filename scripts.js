// This script runs after the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize all Lucide icons on the page.
    lucide.createIcons();

    // --- Mobile Menu Toggle Functionality ---
    
    // Get the button that opens the mobile menu.
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    
    // Get the mobile menu itself.
    const mobileMenu = document.getElementById('mobile-menu');

    // Check if the button and menu exist on the page before adding an event listener.
    if(mobileMenuButton && mobileMenu) {
        // Add a click event listener to the button.
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the 'hidden' class on the menu to show or hide it.
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Note: The main application state and page switching logic are handled
    // by Alpine.js, which is initialized directly in the HTML (index.html).
    // This file is for additional JavaScript functionality that is not
    // directly tied to the Alpine components.

});
