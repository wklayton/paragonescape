// faq .active toggle
const faqContainer = document.querySelectorAll(".faq_box");
const faqQuestion = document.querySelectorAll(".question");
let faqExpValue = "false";

faqContainer.forEach(faqBox => {
  faqBox.addEventListener("click", () => {
    faqBox.classList.toggle("active");

    faqQuestion.forEach(question => {
    if (question.parentNode.classList.contains("active")) {
        faqExpValue = "true"
        } else {
        faqExpValue = "false"
        }
        question.setAttribute("aria-expanded", faqExpValue);
    }) 
  })
});

// Opens apple maps if on apple
// Need a better solution
    // function mapsSelector() {
    //   if
    //     ((navigator.platform.indexOf("iPhone") != -1) || 
    //     (navigator.platform.indexOf("iPad") != -1) || 
    //     (navigator.platform.indexOf("iPod") != -1)) {
    //     window.open("geo:33.2838943,-111.6435594");
    //     } else {
    //     window.open("https://www.google.com/maps/place/Paragon+Escape+Games/@33.2838943,-111.6435594,17z/data=!3m1!4b1!4m6!3m5!1s0x872bb3c2f1cff71f:0xae04c6f42fa38ff!8m2!3d33.2838898!4d-111.6409845!16s%2Fg%2F11grbwfvbw?entry=ttu");
    //     }
    // }