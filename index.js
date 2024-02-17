const faqs = document.querySelectorAll(".faq_box");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
});