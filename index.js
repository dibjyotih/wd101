const form = document.getElementById("registrationForm");
const tableBody = document.querySelector("#entriesTable tbody");

function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function loadEntries() {
  const entries = JSON.parse(localStorage.getItem("entries")) || [];
  entries.forEach(entry => addEntryToTable(entry));
}

function addEntryToTable(entry) {
  const row = tableBody.insertRow();
  row.innerHTML = `
    <td>${entry.name}</td>
    <td>${entry.email}</td>
    <td>${entry.password}</td>
    <td>${entry.dob}</td>
    <td>${entry.terms}</td>
  `;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const terms = document.getElementById("terms").checked ? "Yes" : "No";

  const age = calculateAge(dob);
  if (age < 18 || age > 55) {
    alert("Only users aged between 18 and 55 are allowed.");
    return;
  }

  const entry = { name, email, password, dob, terms };

  // Save to local storage
  const entries = JSON.parse(localStorage.getItem("entries")) || [];
  entries.push(entry);
  localStorage.setItem("entries", JSON.stringify(entries));

  addEntryToTable(entry);
  form.reset();
});

// Load existing entries on page load
window.addEventListener("load", loadEntries);
