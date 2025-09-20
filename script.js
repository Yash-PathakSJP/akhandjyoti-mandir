const slides = document.querySelectorAll('.slide');
const slideTrack = document.getElementById('slideTrack');
const dotsContainer = document.getElementById('dotsContainer');
let currentSlide = 0;

function showSlide(index) {
  slideTrack.style.transform = `translateX( -${index * 100}% )`;
  dotsContainer.querySelectorAll('span').forEach(dot => dot.classList.remove('active'));
  dotsContainer.children[index].classList.add('active');
  currentSlide = index;
}
function toggleAbout() {
  const about = document.getElementById("about");
  if (about.style.display === "none" || about.style.display === "") {
    about.style.display = "block";
    about.scrollIntoView({ behavior: "smooth" });
  } else {
    about.style.display = "none";
  }
}

function autoSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
document.addEventListener('DOMContentLoaded', () => {
  createDots();
  showSlide(0);
  setInterval(autoSlide, 5000);
});
document.getElementById("wishForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const wish = document.getElementById("wish").value;

  // Show popup
  const popup = document.getElementById("wishSuccessPopup");
  popup.style.display = "block";

  // Hide the wish form section after 2.5 seconds
  setTimeout(() => {
    popup.style.display = "none";
    document.getElementById("wish-section").style.display = "none";
  }, 2500);
});
// Show Contact Popup
document.getElementById("contactBtn").addEventListener("click", function () {
  document.getElementById("contactSection").style.display = "block";
});

// Close Popup
document.getElementById("closeContact").addEventListener("click", function () {
  document.getElementById("contactSection").style.display = "none";
});
let currentLang = "en";


document.getElementById("langBtn").addEventListener("click", function () {
  if (currentLang === "en") {
    switchToHindi();
    currentLang = "hi";
    this.textContent = "ENGLISH";
  } else {
    switchToEnglish();
    currentLang = "en";
    this.textContent = "हिंदी";
  }
});

function switchToHindi() {
  document.getElementById("navHome").textContent = "मुख्य पृष्ठ";
  document.getElementById("navAbout").textContent = "परिचय";
  document.getElementById("navWish").textContent = "इच्छा भेजें";
  document.getElementById("navContact").textContent = "संपर्क करें";
  document.getElementById("aboutTitle").textContent = "मंदिर का इतिहास";
  document.getElementById("wishBtn").textContent = "अपनी इच्छा लिखें";
}

function switchToEnglish() {
  document.getElementById("navHome").textContent = "Home";
  document.getElementById("navAbout").textContent = "About";
  document.getElementById("navWish").textContent = "Submit Wish";
  document.getElementById("navContact").textContent = "Contact";
  document.getElementById("aboutTitle").textContent = "Mandir History";
  document.getElementById("wishBtn").textContent = "Write Your Wish";
}
function showComingSoon(){
  alert("यह सुविधा अभी उपलब्ध नही है । जल्द ही जोड़ी जाएगी 🙏🏻")
}
