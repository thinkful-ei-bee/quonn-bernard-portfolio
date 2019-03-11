"use strict";

const layout = (function() {
  const checkWidth = function() {
    $(window).resize(function() {
      if ($(window).width() >= 600) {
        store.mobileNav.isVis = false;
        renderMblNav();
      } else if ($(window).width() <= 559) {
        renderMblNav();
      }
    });
  };

  const renderMblNav = function() {
    const isOpen = store.mobileNav.isVis;
    if (isOpen) {
      //   $(".mbl-nav").css("display", "block");
      $(".mbl-nav").css("left", "0");
    } else if (!isOpen) {
      $(".mbl-nav").css("left", "-250px");
      //   $(".mbl-nav").css("display", "none");
    }
  };

  const renderLogos = function() {
    store.techLogos.map(function(logo, index) {
      let start = 0;
      let max = store.techLogos.length - 1;
      if (index >= start && index <= max) {
        $(".tech-logos").append(`<img src="${logo.img}" alt="${logo.tech}" >`);
      }
    });
  };

  const handleHamburgerClick = function() {
    $("nav").on("click", ".fa-bars", function() {
      store.mobileNav.isVis = !store.mobileNav.isVis;
      renderMblNav();
    });
  };

  const bindEventHandlers = function() {
    handleHamburgerClick();
  };

  return { bindEventHandlers, renderMblNav, checkWidth, renderLogos };
})();
