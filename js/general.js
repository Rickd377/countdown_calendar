const yearDropdown = document.querySelector('.year-dropdown');
const yearDropdownContent = document.querySelector('.year-dropdown-content');

yearDropdown.addEventListener('click', () => {
  yearDropdownContent.classList.toggle('show');
});