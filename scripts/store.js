"use strict";

const store = (function() {
  const mobileNav = {
    isVis: false
  };

  const credentials = {
    cert: {
      visible: true,
      src: "https://i.imgur.com/FSkOxMk.png",
      fsrc:
        "https://drive.google.com/file/d/1vjPOjlBTBzT9sUU8j3IHda4Til1Sq0nA/view?usp=sharing"
    },
    resume: {
      visible: false,
      src: "https://i.imgur.com/tbra6BY.png",
      fsrc:
        "https://drive.google.com/file/d/13j0A_DL8_6meJhqMyrsNQKTn_RmhAaEs/view?usp=sharing"
    }
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

  const projects = [
    {
      title: "QUIZ",
      name: "Quiz App",
      url: "https://thinkful-ei-bee.github.io/mehul-quonn-quiz-app/",
      repo_url: "https://github.com/thinkful-ei-bee/mehul-quonn-quiz-app",
      img_url: "https://i.imgur.com/VjB2H1c.png",
      desc:
        "The quiz app presents user with “start quiz” button, then presents the user with 5 questions one after the other. After each question the user is giving feedback based on whether or not they answered the question correctly.At the end of the quiz they are provided with a break down of how many the answered correctly",
      icons:
        "<i class='fab fa-html5'></i> <i class='fab fa-css3'></i> <i class='fab fa-js'></i></i>",
      techStr: "HTML5, CSS3, JavaScript, JQuery"
    },
    {
      title: "BOOKMARKS",
      name: "Bookmarks App",
      url: "https://thinkful-ei-bee.github.io/quonn-donald-bookmarks-app/",
      repo_url: "https://github.com/thinkful-ei-bee/quonn-donald-bookmarks-app",
      img_url: "https://i.imgur.com/rfCGSNL.png",
      desc:
        "Allows users to add a bookmark to a list of persistant data, by inputting a url, a title, as well as an optional rating and description. If you refresh the page all previous bookmarks will be present untless deleted via the the delete button on each bookmark.",
      icons:
        "<i class='fab fa-html5'></i> <i class='fab fa-css3'></i> <i class='fab fa-js'></i></i>",
      techStr: "HTML5, CSS3, JavaScript, JQuery, AJAX"
    },
    {
      title: "www.redcarpetdoll.com",
      name: "www.redcarpetdoll.com",
      url: "https://www.redcarpetdoll.com",
      repo_url: "null",
      img_url: "https://i.imgur.com/qLMOi75.png",
      desc:
        "A blog that I built, which features content inspired by the thoughts, musings, and perspectives of, Entertainment Blogger Marie Marlene ",
      icons:
        "<i class='fab fa-html5'></i>  <i class='fab fa-css3'></i>  <i class='fab fa-php'></i>  <i class='fab fa-wordpress'></i>  <i class='fab fa-js-square'></i>",
      techStr: "HTML5, CSS3, PHP, WordPress, JavaScript"
    }
  ];

  const formInfo = {
    fullname: "",
    role: "",
    message: ""
  };

  const repoCount = {
    count: 0
  };
  const daysTil = {
    num: 0
  };

  const getRepos = function() {
    fetch("https://api.github.com/users/quonn-bernard/repos")
      .then(resp => resp.json())
      .then(data => {
        data.forEach((data, index) => {
          repoCount.count = index + 1;
          layout.renderStats();
        });
      });
  };

  const getDaysTil = function() {
    const today = new Date();
    const lastDay = new Date("July 15, 2019");
    const msPerDay = 24 * 60 * 60 * 1000;
    const timeLeft = lastDay.getTime() - today.getTime();
    console.log(Math.floor(timeLeft / msPerDay));
    $("#days").html(Math.floor(timeLeft / msPerDay));
  };

  const submitForm = function() {
    const data = {
      name: store.formInfo.fullname,
      email: "qber83@gmail.com",
      role: store.formInfo.role,
      message: store.formInfo.message
    };
    console.log(data);
    $.ajax({
      type: "POST",
      url: "mailer.php",
      data: $("#contactForm").serialize(),
      success: function() {
        console.log("email sent!");
      }
    });
  };

  return {
    mobileNav,
    techLogos,
    credentials,
    projects,
    formInfo,
    submitForm,
    getRepos,
    repoCount,
    getDaysTil,
    daysTil
  };
})();
