function openPopup() {
  document.getElementById("consultation-popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("consultation-popup").style.display = "none";
}

document.getElementById("consultation-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your consultation request has been submitted!");
  closePopup();
});
