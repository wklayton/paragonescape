// Video/Cookie Universal Variables
let cookies = document.cookie;
const notices = document.querySelectorAll('.video__notice');

// Checks to see if user already has allowed YT
if (cookies.indexOf('ytPreference=allow') !== -1){
  activateVideos();
}

// Closes out all third party embedded content
function deactivateCookies() {
  document.cookie = 'ytPreference=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  deactivateVideos();
}

// Creates a cookie when clicking allow YT to save the user's preference for YT videos

notices.forEach((notice) => {
  notice.addEventListener('submit', (event) => {
    activateVideos();
    event.preventDefault();
    document.cookie = "ytPreference=allow";
  });
});

// Allows the YT videos to grab their source
function activateVideos() {
  const ytFrame = document.querySelectorAll('.video__iframe[data-src*="youtube-nocookie.com"]');

  ytFrame.forEach((iframe) => {
    iframe.src = iframe.dataset.src;
    iframe.classList.remove("yt_hidden");
  });
  
  notices.forEach((notice) => {
    notice.classList.add('notice_hidden');
  });
}

// Removes the src attribute from YT videos
function deactivateVideos() {
  const ytFrame = document.querySelectorAll('.video__iframe[src*="youtube-nocookie.com"]');

  ytFrame.forEach((iframe) => {
    iframe.removeAttribute('src');
    iframe.classList.add("yt_hidden");
  });

  notices.forEach((notice) => {
    notice.classList.remove('notice_hidden')
  });
}




// Hamburger/Navigation Universal Variables
//
const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".main_nav");

const navLink = document.querySelectorAll(".nav_link");
const navLink2 = document.querySelectorAll(".paragon_logo");

const gamesMenu = document.getElementById("nav_item3")
const dropdownMenu = document.getElementById("games_hover");

// hamburger/main_nav .active toggle
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    mainNav.classList.toggle("active");
    ariaExpUpdater();
}

function closeMenu() {
  hamburger.classList.remove("active");
  mainNav.classList.remove("active");
  gamesMenu.classList.remove("active");
  ariaExpUpdater();
}

// Close the menu when a link is pressed
navLink.forEach(n => n.addEventListener("click", closeMenu));
navLink2.forEach(n => n.addEventListener("click", closeMenu));

// Close the menu when something outside the menu is pressed
window.addEventListener('click', function(e) {
  if (e.target.className.includes("nav_element") != true) {
    closeMenu();
  }
});

// Close menu with the escape key and focus on hamburger menu
window.addEventListener('keydown', function(e) {
  if ((e.key === "Escape") && (hamburger.classList.contains("active"))) {
      this.document.getElementById("menu-icon").focus();
      closeMenu();
    }
});

// Update the Aria-Expanded attribute for the hamburger menu
let hamExpValue = "false";

function ariaExpUpdater() {
  if (hamburger.classList.contains("active") != true) {
  hamExpValue = "false"
  } else {
  hamExpValue = "true"
  }
  document.getElementById("menu-icon").setAttribute("aria-expanded", hamExpValue);
}

// Update the Aria-Label attribute for the hamburger menu
function ariaLabelUpdater() {
  let hamActionValue = document.getElementById("menu-icon").getAttribute("aria-label");

  if (hamburger.classList.contains("active")) {
    hamActionValue = "open-menu"
  } else {
    hamActionValue = "close-menu"
  }
  document.getElementById("menu-icon").setAttribute("aria-label", hamActionValue);
}



// // Update the Aria-Expanded attribute for the Games button on focus to indicate a submenu
// gamesMenu.addEventListener("focusin", (event) => {
//   dropdownMenu.setAttribute("aria-expanded", "true");
// });

// gamesMenu.addEventListener("focusout", (event) => {
//   dropdownMenu.setAttribute("aria-expanded", "false"), 1;
// });

const gamesSubMenu = document.querySelector(".games_hover");


function gamesToggleActive(){
  gamesSubMenu.classList.toggle("active")
  gamesMenu.classList.toggle("active")
  if (gamesSubMenu.classList.contains("active")) {
    gamesSubMenu.setAttribute("aria-expanded", "true")
    gamesSubMenu.setAttribute("aria-label", "Close Games Submenu")
  } else {
    gamesSubMenu.setAttribute("aria-expanded", "false")
    gamesSubMenu.setAttribute("aria-label", "Open Games Submenu")
  }
}

// Close the menu when something outside the menu is pressed
window.addEventListener('click', function(e) {
  if (!e.target.className.includes("games_menu")) {
    gamesSubMenu.classList.remove("active")
    gamesMenu.classList.remove("active")
    gamesSubMenu.setAttribute("aria-expanded", "false")
    gamesSubMenu.setAttribute("aria-label", "Open Games Submenu")
  }
});