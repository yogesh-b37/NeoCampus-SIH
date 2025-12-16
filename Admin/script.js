// Function to Switch Between Dashboard and Profile
function showSection(sectionId, element) {
    // 1. Hide ALL sections with the class 'content-section'
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // 2. Show ONLY the section that matches the sectionId passed
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    // 3. Update the Sidebar Menu Highlights
    // Remove 'active' class from all menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function(item) {
        item.classList.remove('active');
    });

    // Add 'active' class to the clicked button (element)
    if (element) {
        element.classList.add('active');
    }
}

// Function to Toggle Notice Board "Add New" Form
function toggleNoticeForm() {
    var form = document.getElementById("add-notice-form");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

// Function to Toggle Calendar "Add Event" Form
function toggleEventForm() {
    var form = document.getElementById("add-event-form");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
}
}