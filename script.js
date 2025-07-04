// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const notesBtn = document.querySelector(".btn");

    if (notesBtn) {
        notesBtn.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Redirecting to Notes Page... (Feature coming soon)");
            console.log("Notes button clicked!");
            // In future: window.location.href = "notes.html";
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you! Your message has been submitted.");
            form.reset();
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been submitted.");
      form.reset();
    });
  }

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keyup", () => {
      const filter = searchInput.value.toLowerCase();
      const table = document.querySelector("table");
      const rows = table.querySelectorAll("tbody tr");

      rows.forEach((row) => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(filter) ? "" : "none";
      });
    });
  }
});
function loadDataFromJSON(url, tableId) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const tableBody = document.getElementById(tableId);
      tableBody.innerHTML = "";

      data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.subject}</td>
          <td>${item.code}</td>
          <td>${item.semester}</td>
          <td>
            ${
              item.link
                ? `<a href="${item.link}" target="_blank" class="btn">Download</a>`
                : `<span class="btn">Coming Soon</span>`
            }
          </td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error("Error loading JSON:", error));
}
