// scripts/main.js

document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('table tbody tr');

    rows.forEach(row => {
        row.addEventListener('mouseover', function() {
            row.style.backgroundColor = '#b5b5b5';
        });

        row.addEventListener('mouseout', function() {
            row.style.backgroundColor = 'white';
        });
    });
});
