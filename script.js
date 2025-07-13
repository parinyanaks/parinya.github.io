document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Remove active class from all tabs
    document.querySelectorAll('.tab-link').forEach(tab => tab.classList.remove('active'));

    // Add active to current
    this.classList.add('active');

    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(section => section.classList.add('hidden'));

    // Show selected tab
    const target = this.getAttribute('data-tab');
    document.getElementById(target).classList.remove('hidden');
  });
});
