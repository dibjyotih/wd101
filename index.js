    const form = document.getElementById('registrationForm');
    const table = document.getElementById('entriesTable').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const dob = document.getElementById('dob').value;
      const terms = document.getElementById('terms').checked ? "Yes" : "No";

      const newRow = table.insertRow();

      newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>${dob}</td>
        <td>${terms}</td>
      `;

      form.reset();
    });
