const faqContainer=document.querySelectorAll(".faq_box"),faqQuestion=document.querySelectorAll(".question");let faqExpValue="false";faqContainer.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active"),faqQuestion.forEach(e=>{faqExpValue=e.parentNode.classList.contains("active")?"true":"false",e.setAttribute("aria-expanded",faqExpValue)})})});

(function() {
    let co=document.createElement("script");
    co.type="text/javascript";
    co.async=true;
    co.src="https://xola.com/checkout.js";
    let s=document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(co, s);
})();