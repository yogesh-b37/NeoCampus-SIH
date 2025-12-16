function showSection(sectionName, element) {
  // 1. Hide all sections
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // 2. Show the specific section requested
  const targetId = "section-" + sectionName;
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.style.display = "block";
  }

  // 3. Update Sidebar Active State
  // Remove 'active' from all menu items
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Add 'active' to the clicked item
  if (element) {
    element.classList.add("active");
  }
}
