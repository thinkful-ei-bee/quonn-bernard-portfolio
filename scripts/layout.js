"use strict";

const layout = (function() {
  const checkWidth = function() {
    if ($(window).width() >= 600) {
      store.mobileNav.isVis = false;
      renderMblNav();
    } else if ($(window).width() <= 559) {
      renderMblNav();
    }
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
    const mblMenu = $(".mbl-nav");
    if (isOpen) {
      mblMenu.removeClass("closed");
      mblMenu.addClass("open");
    } else if (!isOpen) {
      mblMenu.removeClass("open");
      mblMenu.addClass("closed");
    }
  };

  const renderCreds = function() {
    const creds = store.credentials;
    for (const key in creds) {
      if (creds[key].visible) {
        $(".cred-content").append(`
        <img src="${creds[key].src}"/>
        <a class="" href="${
          creds[key].fsrc
        }" style="font-family: "Raleway", sans-serif;" > DOWNLOAD PDF</a>
        `);
      }
    }
  };

  const renderProjects = function() {
    render1ColProjects();
  };

  const render1ColProjects = function() {
    store.projects.forEach((project, index) => {
      $("#proj-box-" + `${index}`).append(
        `<article class='box-shadow project' style='background: url("${
          store.projects[index].img_url
        }"); background-size: cover; margin-bottom: 20px; background-position:bottom;')>
      <div class='project-overlay'>
      
      <div>
          <h1 class='big-text text-shadow box-shadow'>${
            store.projects[index].title
          }</h1>
          <div>
          <a href='${store.projects[index].url}' class="">LIVE DEMO</a>
          </div>
          <div>
            <a href='${store.projects[index].repo_url}' class="">CODE REPO</a>
          </div>
          <div><i class="fas fa-plus" style="color: gold;"></i> <a id="${index}" class="detailBtn">SEE MORE</a></div>
      </div>
      <div>
      </div>
      </article>
      <div class="detailClose details">
      <div class="techStrs hidden">
      <p class="proj-desc small-text" style="padding: 20px 15px 0;">${
        store.projects[index].desc
      }</p>
      <div style="height: 2px; background: gold; margin: 75px 0 10px"></div>
      <h5 style="text-align: right; padding: 0 15px;">Tech Used:</h5>
      <p class="small-text gold-text" style="text-align:right; padding: 0 15px;">${
        store.projects[index].techStr
      }</p>
      </div>
      <div style="text-align: right; border-radius: 7px; padding: 0 10px; color: gold; text-shadow: none;"><span class="white-text"></span> <span>${
        store.projects[index].icons
      }</span></div>
      </div>
    
      `
      );
    });
  };

  const renderLogos = function() {
    store.techLogos.map(function(logo, index) {
      let start = 0;
      let max = store.techLogos.length - 1;
      if (index >= start && index <= max) {
        $(".tech-logos").append(`<img src="${logo.img}" alt="${logo.tech}" />`);
      }
    });
  };

  const renderStats = function() {
    $("#proyectos").html(store.projects.length);
    if (store.repoCount.count > 0) {
      $("#repos").html(store.repoCount.count);
    }
  };

  const handleHamburgerClick = function() {
    $("nav").on("click", ".fa-bars", function() {
      store.mobileNav.isVis = !store.mobileNav.isVis;
      renderMblNav();
    });
  };

  const handleOptClick = function() {
    $(".opt").click(function() {
      const btnId = $(this).attr("id");
      $(this)
        .siblings("header")
        .removeClass("selected");
      $(this)
        .closest("header")
        .addClass("selected");
      if (btnId === "cert" || btnId === "resume") {
        store.credentials.resume.visible = !store.credentials.resume.visible;
        store.credentials.cert.visible = !store.credentials.cert.visible;
        $(".cred-content").html(" ");
        $(".cred-content").append(`<img src="${btnId}</p>`);
        renderCreds();
      }
    });
  };

  const handleFormInput = function() {
    $("select.capacity").change(function() {
      store.formInfo.role = $(this)
        .children("option:selected")
        .val();
      console.log(store.formInfo.role);
    });
    $("form").submit(function(event) {
      event.preventDefault();
      store.formInfo.fullname = $("#fullname").val();
      store.formInfo.message = $("#message").val();
      store.submitForm();
    });
  };

  const handlePlusClick = function() {
    $("figure").on("click", ".detailBtn", function(e) {
      e.preventDefault();

      $(this)
        .closest("article")
        .siblings("div.details")
        .toggleClass("detailOpen")
        .toggleClass("detailClose"),
        console.log(
          $(this)
            .closest("article")
            .siblings("div.details")
            .find(".techStrs")
            .toggleClass("hidden")
        );
    });
  };

  const bindEventHandlers = function() {
    handleHamburgerClick();
    handleOptClick();
    handleFormInput();
    handlePlusClick();
  };

  return {
    bindEventHandlers,
    renderMblNav,
    checkWidth,
    renderLogos,
    renderCreds,
    renderProjects,
    renderStats
  };
})();
