(function () {
  const initHomePage = () => {
    if (!document.body || document.body.dataset.page !== "home") {
      return;
    }

    const practicePanel = document.querySelector(".practice-extra");
    const practiceToggles = document.querySelectorAll('[data-action="practice-toggle"]');
    if (!practicePanel || !practiceToggles.length) {
      return;
    }

    const setPracticeExpanded = (expanded) => {
      practicePanel.classList.toggle("is-open", expanded);
      practicePanel.setAttribute("data-state", expanded ? "expanded" : "collapsed");
      practiceToggles.forEach((button) => {
        button.setAttribute("aria-expanded", expanded ? "true" : "false");
      });
    };

    setPracticeExpanded(false);

    practiceToggles.forEach((button) => {
      button.addEventListener("click", () => {
        const expanded = practicePanel.classList.contains("is-open");
        setPracticeExpanded(!expanded);
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHomePage, { once: true });
  } else {
    initHomePage();
  }
})();
