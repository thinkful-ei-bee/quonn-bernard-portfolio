"use strict";

function startingPoint() {
  layout.bindEventHandlers();
  layout.checkWidth();
  layout.renderMblNav();
  layout.renderCreds();
  layout.renderProjects();
  store.getRepos();
  layout.renderStats();
  store.getDaysTil();
}

$(startingPoint);
