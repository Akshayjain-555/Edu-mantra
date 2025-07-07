// Toggle dropdown on ☰ click
function toggleMenu() {
    const menu = document.getElementById("dropdown-menu");
    menu.classList.toggle("show");
}

// Close dropdown when clicked outside
window.addEventListener("click", function (e) {
    const menu = document.getElementById("dropdown-menu");
    const icon = document.querySelector(".menu-icon");

    // Agar click icon pr ya menu pr nahi hai, toh band karo
    if (!icon.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("show");
    }
});
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        const menu = document.getElementById("dropdown-menu");
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
        }
    }
});
// 🔍 Search Filter Suggestions
const programs = [
    "BA", "BCom", "BSc", "MA", "MCom", "MSc",
    "MBA", "BCA", "MCA", "PGDCA", "DECE", "DNHE"
];

function filterPrograms() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const suggestionBox = document.getElementById("suggestionsList");

    suggestionBox.innerHTML = '';
    if (filter === '') {
        suggestionBox.style.display = "none";
        return;
    }

    const matched = programs.filter(p => p.toUpperCase().includes(filter));
    matched.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p;
        li.onclick = () => {
            input.value = p;
            suggestionBox.style.display = "none";
            // 🔁 Optional redirect logic:
            // window.location.href = `programs/${p.toLowerCase()}.html`;
        };
        suggestionBox.appendChild(li);
    });

    suggestionBox.style.display = matched.length ? "block" : "none";
}
// Open & Close Sidebar
function openSidebar() {
    document.getElementById("sidebar").classList.add("show");
}
function closeSidebar() {
    document.getElementById("sidebar").classList.remove("show");
}

function submitReview(e) {
  e.preventDefault();

  const name = document.getElementById('reviewerName').value.trim();
  const rating = document.getElementById('reviewRating').value;
  const text = document.getElementById('reviewText').value.trim();

  if (!name || !rating || !text) return;

  const stars = '⭐'.repeat(rating);

  const card = document.createElement('div');
  card.className = 'testimonial-card';
  card.innerHTML = `
    <h4>${name}</h4>
    <div class="stars">${stars}</div>
    <p>${text}</p>
  `;

  document.getElementById('testimonialList').prepend(card);

  // Reset form
  document.querySelector('.review-form').reset();
}
// 🚀 Smart Contact - WhatsApp & Email Together
document.getElementById("smartContactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  const whatsappMsg = `Hi, I'm ${name}. Here's my IGNOU query:\n${message}\n(Email: ${email})`;

  // Delay WhatsApp open after form submit
  setTimeout(() => {
    window.open(`https://wa.me/917370872383?text=${encodeURIComponent(whatsappMsg)}`, "_blank");
  }, 1000);
});

