window.onload = function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("hide-preloader");
  }
};

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || !id.startsWith("#")) return;

    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const feedbackModal = document.getElementById("feedbackModal");
const openFeedbackBtn = document.getElementById("openFeedbackBtn");
const closeFeedbackBtn = document.getElementById("closeFeedbackBtn");

if (feedbackModal && openFeedbackBtn && closeFeedbackBtn) {
  openFeedbackBtn.addEventListener("click", function () {
    feedbackModal.classList.remove("hidden");
  });

  closeFeedbackBtn.addEventListener("click", function () {
    feedbackModal.classList.add("hidden");
  });

  feedbackModal.addEventListener("click", function (event) {
    if (event.target === feedbackModal) {
      feedbackModal.classList.add("hidden");
    }
  });
}
