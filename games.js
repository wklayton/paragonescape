const moreElement=document.querySelector(".more"),lessElement=document.querySelector(".more_btn");function toggleOverviewOn(){moreElement.classList.add("active"),lessElement.classList.add("inactive")}function toggleOverviewOff(){moreElement.classList.remove("active"),lessElement.classList.remove("inactive")}let slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){let l,s=document.getElementsByClassName("gallery_slide"),t=document.getElementsByClassName("preview_img");for(e>s.length&&(slideIndex=1),e<1&&(slideIndex=s.length),l=0;l<s.length;l++)s[l].style.display="none";for(l=0;l<t.length;l++)t[l].className=t[l].className.replace(" active","");s[slideIndex-1].style.display="block",t[slideIndex-1].className+=" active"}showSlides(slideIndex);

(function() {
    let co=document.createElement("script");
    co.type="text/javascript";
    co.async=true;
    co.src="https://xola.com/checkout.js";
    let s=document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(co, s);
})();