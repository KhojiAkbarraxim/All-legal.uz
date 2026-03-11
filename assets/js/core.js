(function () {
  const supportedLangs = ["en", "ru", "uz", "ja"];
  const langData = {
    uz: { flag: "🇺🇿", label: "O'zbekcha" },
    ru: { flag: "🇷🇺", label: "Русский" },
    en: { flag: "🇬🇧", label: "English" },
    ja: { flag: "🇯🇵", label: "日本語" },
  };

  const page = (document.body && document.body.dataset.page) || "home";
  const requiredChunks = ["common", page];
  const loadedChunks = new Set();
  const loadingChunks = new Map();

  let langDropdown;
  let langToggle;
  let langMenu;
  let langLabel;

  const normalizeLang = (lang) => (supportedLangs.includes(lang) ? lang : "en");

  const loadChunk = (lang, chunk) => {
    const key = `${chunk}.${lang}`;
    if (loadedChunks.has(key)) {
      return Promise.resolve();
    }
    if (loadingChunks.has(key)) {
      return loadingChunks.get(key);
    }

    const promise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `assets/js/i18n/${chunk}.${lang}.js`;
      script.async = true;
      script.onload = () => {
        loadedChunks.add(key);
        resolve();
      };
      script.onerror = () => {
        reject(new Error(`Failed to load i18n chunk: ${key}`));
      };
      document.head.appendChild(script);
    }).finally(() => {
      loadingChunks.delete(key);
    });

    loadingChunks.set(key, promise);
    return promise;
  };

  const ensureLanguageLoaded = async (lang) => {
    for (const chunk of requiredChunks) {
      await loadChunk(lang, chunk);
    }
  };

  const getCurrentLang = () => document.documentElement.lang || "en";
  const getDict = (lang) => {
    const store = window.ALLEGAL_I18N || {};
    return store[lang] || store.en || {};
  };

  const setLangMenuOpen = (open) => {
    if (!langDropdown || !langToggle || !langMenu) {
      return;
    }
    langDropdown.classList.toggle("is-open", open);
    langMenu.classList.toggle("is-open", open);
    langMenu.hidden = !open;
    langToggle.setAttribute("aria-expanded", open ? "true" : "false");
    const chevron = langToggle.querySelector(".lang-chevron");
    if (chevron) {
      chevron.textContent = open ? "expand_less" : "expand_more";
    }
  };

  const setActiveLangUI = (lang) => {
    const data = langData[lang] || langData.en;
    if (langLabel) {
      langLabel.textContent = data.label;
    }

    if (!langMenu) {
      return;
    }

    langMenu.querySelectorAll("[data-lang-option]").forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle("is-active", active);
      button.hidden = active;
      button.setAttribute("aria-selected", active ? "true" : "false");
    });
  };

  const applyTranslations = async (lang) => {
    const targetLang = normalizeLang(lang);
    let effectiveLang = targetLang;

    try {
      await ensureLanguageLoaded(targetLang);
    } catch (_err) {
      if (targetLang !== "en") {
        await ensureLanguageLoaded("en");
        effectiveLang = "en";
      }
    }

    if (!Object.keys(getDict(effectiveLang)).length && effectiveLang !== "en") {
      await ensureLanguageLoaded("en");
      effectiveLang = "en";
    }

    const dict = getDict(effectiveLang);

    document.documentElement.lang = effectiveLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key || !dict[key]) {
        return;
      }

      const attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, dict[key]);
      } else {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key && dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    setActiveLangUI(effectiveLang);
    localStorage.setItem("lang", effectiveLang);
    window.dispatchEvent(
      new CustomEvent("allegal:langchange", { detail: { lang: effectiveLang, dict } })
    );
  };

  const normalizePagePath = (pathname) => {
    const value = (pathname || "").split("?")[0].split("#")[0];
    const last = value.split("/").pop();
    return last || "index.html";
  };

  const syncNavHeight = () => {
    const siteNav = document.querySelector("body > nav");
    if (!siteNav) {
      return;
    }

    document.documentElement.style.setProperty("--nav-height", `${siteNav.offsetHeight}px`);
  };

  const getLinkTarget = (href, currentPage) => {
    const [pathPart, hashPart] = href.split("#");
    return {
      path: pathPart || currentPage,
      hash: hashPart ? `#${hashPart}` : "",
    };
  };

  const markActiveNavLinks = () => {
    const currentPage = normalizePagePath(window.location.pathname);
    const currentHash = window.location.hash || "";

    document.querySelectorAll("[data-nav-link]").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const target = getLinkTarget(href, currentPage);
      const pageMatch = target.path === currentPage || (target.path === "index.html" && currentPage === "index.html");
      const hashMatch = target.hash ? target.hash === currentHash : true;
      const active = pageMatch && hashMatch;

      link.classList.toggle("is-active", active);
      if (active) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const initLanguageControls = () => {
    langDropdown = document.querySelector("[data-lang-dropdown]");
    langToggle = langDropdown && langDropdown.querySelector("[data-lang-toggle]");
    langMenu = langDropdown && langDropdown.querySelector("[data-lang-menu]");
    langLabel = langDropdown && langDropdown.querySelector("[data-lang-label]");

    if (!langDropdown || !langToggle || !langMenu) {
      return;
    }

    setLangMenuOpen(false);

    langToggle.addEventListener("click", () => {
      setLangMenuOpen(!langDropdown.classList.contains("is-open"));
    });

    langMenu.querySelectorAll("[data-lang-option]").forEach((button) => {
      button.addEventListener("click", async () => {
        const lang = normalizeLang(button.dataset.lang || "en");
        await applyTranslations(lang);
        setLangMenuOpen(false);
      });
    });

    document.addEventListener("click", (event) => {
      if (!langDropdown.contains(event.target)) {
        setLangMenuOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setLangMenuOpen(false);
      }
    });
  };

  const initMobileMenu = () => {
    const menuToggle = document.querySelector('[data-action="menu-toggle"]');
    const mobileMenu = document.querySelector('[data-menu="mobile"]');
    if (!menuToggle || !mobileMenu) {
      return;
    }

    const setMenuOpen = (open) => {
      mobileMenu.classList.toggle("is-open", open);
      mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
      menuToggle.classList.toggle("is-active", open);
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.documentElement.classList.toggle("mobile-menu-open", open);
      document.body.classList.toggle("mobile-menu-open", open);
      const icon = menuToggle.querySelector(".material-symbols-outlined");
      if (icon) {
        icon.textContent = open ? "close" : "menu";
      }
    };

    setMenuOpen(false);

    menuToggle.addEventListener("click", () => {
      const open = mobileMenu.classList.contains("is-open");
      setMenuOpen(!open);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!mobileMenu.contains(target) && !menuToggle.contains(target)) {
        setMenuOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    });

    window.addEventListener("resize", () => {
      syncNavHeight();
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    });
  };

  const initHomeLogoLink = () => {
    document.querySelectorAll("[data-home-link]").forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");
        if (!href) {
          return;
        }

        let targetPath = "";
        try {
          const url = new URL(href, window.location.href);
          targetPath = normalizePagePath(url.pathname);
        } catch (_err) {
          return;
        }

        const currentPath = normalizePagePath(window.location.pathname);
        if (targetPath !== currentPath) {
          return;
        }

        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  };

  const initPageLoader = () => {
    const loader = document.getElementById("site-loader");
    if (!loader) {
      return;
    }

    let isHidden = false;
    const hideLoader = () => {
      if (isHidden) {
        return;
      }
      isHidden = true;
      loader.classList.add("is-hiding");

      const finalize = () => {
        loader.classList.add("is-hidden");
        loader.setAttribute("aria-hidden", "true");
      };

      loader.addEventListener("transitionend", finalize, { once: true });
      window.setTimeout(finalize, 420);
    };

    window.addEventListener("load", hideLoader, { once: true });
    window.setTimeout(hideLoader, 1500);
  };

  const boot = async () => {
    window.allegalI18n = {
      getDict: () => getDict(normalizeLang(getCurrentLang())),
      applyTranslations,
      ensureLanguageLoaded,
    };

    syncNavHeight();
    initLanguageControls();
    initMobileMenu();
    initHomeLogoLink();

    const savedLang = localStorage.getItem("lang");
    const documentLang = normalizeLang(getCurrentLang());
    const initialLang = normalizeLang(savedLang || documentLang || "en");
    await applyTranslations(initialLang);

    markActiveNavLinks();
    window.addEventListener("hashchange", markActiveNavLinks);
  };

  initPageLoader();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      boot().catch(() => {
        applyTranslations("en").catch(() => {});
      });
    }, { once: true });
  } else {
    boot().catch(() => {
      applyTranslations("en").catch(() => {});
    });
  }
})();
