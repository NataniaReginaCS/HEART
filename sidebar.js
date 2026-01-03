const toggleButtons = document.querySelectorAll('.toggleSidebar');
const sidebar = document.getElementById('sidebar');

toggleButtons.forEach((button) => {
	button.addEventListener('click', () => {
		if (sidebar.classList.contains('-translate-x-full')) {
			sidebar.classList.remove('-translate-x-full');
		} else {
			sidebar.classList.add('-translate-x-full');
		}
	});
});
