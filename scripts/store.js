"use strict";

const store = (function() {
  const mobileNav = {
    isVis: false
  };

  const techLogos = [
    {
      tech: "HTML5",
      img: "https://i.imgur.com/q6aPUj2.png"
    },
    {
      tech: "CSS3",
      img: "https://i.imgur.com/aDp0DjW.png"
    },
    {
      tech: "Javascript",
      img: "https://i.imgur.com/pmMy5VB.png"
    },
    {
      tech: "JQuery",
      img: "https://i.imgur.com/ZjlMpw0.png"
    },
    {
      tech: "NODE.JS/NPM",
      img: "https://i.imgur.com/nIjJEbs.png"
    },
    {
      tech: "PHP/MySQL",
      img: "https://i.imgur.com/JNA2sMU.png"
    },
    {
      tech: "Git/Github",
      img: "https://i.imgur.com/V7r4gdp.png"
    }
  ];
  return {
    mobileNav,
    techLogos
  };
})();
