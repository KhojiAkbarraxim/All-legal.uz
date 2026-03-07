(function () {
  const documents = [
    {
      title: "Share Purchase Agreement",
      summary: "Sets terms for transferring company shares between parties.",
      category: "corporate",
      jurisdiction: "uk",
      format: "pdf",
      pages: 12,
      updated: "2025-11-02",
      downloads: 182,
    },
    {
      title: "Director's Service Agreement",
      summary: "Defines duties, compensation, and termination for company directors.",
      category: "corporate",
      jurisdiction: "uk",
      format: "docx",
      pages: 9,
      updated: "2025-08-14",
      downloads: 141,
    },
    {
      title: "Memorandum of Association",
      summary: "Foundational corporate document outlining company purpose and structure.",
      category: "corporate",
      jurisdiction: "uz",
      format: "pdf",
      pages: 7,
      updated: "2025-12-10",
      downloads: 220,
    },
    {
      title: "Company Resolution",
      summary: "Formal decisions adopted by the board or shareholders.",
      category: "corporate",
      jurisdiction: "uz",
      format: "pdf",
      pages: 3,
      updated: "2025-09-28",
      downloads: 95,
    },
    {
      title: "Non-Disclosure Agreement (NDA)",
      summary: "Protects confidential information shared between parties.",
      category: "contracts",
      jurisdiction: "eu",
      format: "pdf",
      pages: 4,
      updated: "2025-10-05",
      downloads: 320,
    },
    {
      title: "Lease Agreement",
      summary: "Sets terms for leasing commercial property.",
      category: "contracts",
      jurisdiction: "uk",
      format: "docx",
      pages: 15,
      updated: "2025-05-20",
      downloads: 140,
    },
    {
      title: "Service Level Agreement (SLA)",
      summary: "Defines service standards, uptime, and remedies.",
      category: "contracts",
      jurisdiction: "eu",
      format: "pdf",
      pages: 8,
      updated: "2025-07-02",
      downloads: 175,
    },
    {
      title: "Employment Contract",
      summary: "Outlines employment terms, benefits, and termination.",
      category: "contracts",
      jurisdiction: "uz",
      format: "docx",
      pages: 6,
      updated: "2025-06-11",
      downloads: 260,
    },
    {
      title: "Cease and Desist Letter",
      summary: "Demands cessation of infringing or harmful activities.",
      category: "litigation",
      jurisdiction: "uk",
      format: "pdf",
      pages: 2,
      updated: "2025-12-20",
      downloads: 210,
    },
    {
      title: "Statement of Claim",
      summary: "Initiates legal proceedings outlining plaintiff's case.",
      category: "litigation",
      jurisdiction: "uz",
      format: "pdf",
      pages: 10,
      updated: "2025-04-15",
      downloads: 130,
    },
    {
      title: "Affidavit of Documents",
      summary: "Lists documents relevant to litigation disclosure.",
      category: "litigation",
      jurisdiction: "uk",
      format: "docx",
      pages: 5,
      updated: "2025-01-22",
      downloads: 80,
    },
    {
      title: "Settlement Agreement",
      summary: "Resolves disputes with agreed terms and releases.",
      category: "litigation",
      jurisdiction: "eu",
      format: "pdf",
      pages: 6,
      updated: "2025-03-08",
      downloads: 160,
    },
    {
      title: "Power of Attorney",
      summary: "Authorizes an agent to act on behalf of the principal.",
      category: "notarial",
      jurisdiction: "jp",
      format: "pdf",
      pages: 4,
      updated: "2025-09-01",
      downloads: 145,
    },
    {
      title: "Statutory Declaration",
      summary: "A formal statement affirming truth of facts.",
      category: "notarial",
      jurisdiction: "uk",
      format: "pdf",
      pages: 3,
      updated: "2025-08-18",
      downloads: 110,
    },
    {
      title: "Will and Testament",
      summary: "Distributes estate and appoints executors.",
      category: "notarial",
      jurisdiction: "uz",
      format: "docx",
      pages: 14,
      updated: "2025-02-10",
      downloads: 190,
    },
    {
      title: "Certified True Copy Request",
      summary: "Requests notarized copies of original documents.",
      category: "notarial",
      jurisdiction: "uk",
      format: "pdf",
      pages: 2,
      updated: "2025-11-30",
      downloads: 90,
    },
  ];

  const labelCategory = (dict, key) => {
    const map = {
      corporate: dict["sample.filter.corporate"] || "Corporate Law",
      contracts: dict["sample.filter.contracts"] || "Contracts",
      litigation: dict["sample.filter.litigation"] || "Litigation",
      notarial: dict["sample.filter.notarial"] || "Notarial",
    };
    return map[key] || "General";
  };

  const labelJurisdiction = (dict, key) => {
    const map = {
      uz: dict["sample.filter.uz"] || "Uzbekistan",
      uk: dict["sample.filter.uk"] || "United Kingdom",
      eu: dict["sample.filter.eu"] || "European Union",
      jp: dict["sample.filter.jp"] || "Japan",
    };
    return map[key] || "Global";
  };

  const formatDate = (iso, lang) => {
    const date = new Date(iso);
    const locale = lang === "uz" ? "uz-UZ" : lang === "ru" ? "ru-RU" : lang === "ja" ? "ja-JP" : "en-US";
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const initSamplePage = () => {
    if (!document.body || document.body.dataset.page !== "sample") {
      return;
    }

    const resultsEl = document.getElementById("results");
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");
    const densityToggle = document.getElementById("densityToggle");
    const resultCount = document.getElementById("resultCount");

    if (!resultsEl || !searchInput || !sortSelect || !densityToggle || !resultCount) {
      return;
    }

    let dense = false;
    const filters = {
      category: "all",
      jurisdictions: new Set(),
      formats: new Set(),
      updated: "any",
    };

    const getDict = () => {
      if (window.allegalI18n && typeof window.allegalI18n.getDict === "function") {
        return window.allegalI18n.getDict();
      }
      return {};
    };

    const renderBadges = (container, dict, doc) => {
      const first = document.createElement("span");
      first.className = "badge";
      first.textContent = labelCategory(dict, doc.category);

      const second = document.createElement("span");
      second.className = "badge";
      second.textContent = labelJurisdiction(dict, doc.jurisdiction);

      const third = document.createElement("span");
      third.className = "badge";
      third.textContent = doc.format.toUpperCase();

      container.append(first, second, third);
    };

    const renderMeta = (container, lang, doc) => {
      const pages = document.createElement("span");
      pages.textContent = `${doc.pages} pp`;

      const updated = document.createElement("span");
      updated.textContent = `Updated ${formatDate(doc.updated, lang)}`;

      const downloads = document.createElement("span");
      downloads.textContent = `${doc.downloads} downloads`;

      container.append(pages, updated, downloads);
    };

    const renderResults = (items) => {
      const dict = getDict();
      const lang = document.documentElement.lang || "en";
      const resultsLabel = dict["sample.results"] || "results";

      resultCount.textContent = `${items.length} ${resultsLabel}`;
      resultsEl.innerHTML = "";
      resultsEl.style.gridTemplateColumns = dense
        ? "repeat(auto-fill, minmax(260px, 1fr))"
        : "repeat(auto-fill, minmax(300px, 1fr))";

      if (!items.length) {
        const empty = document.createElement("div");
        empty.textContent = "No documents found. Try clearing filters or adjusting your search.";
        empty.style.color = "var(--muted)";
        resultsEl.appendChild(empty);
        return;
      }

      items.forEach((doc) => {
        const card = document.createElement("article");
        card.className = "card";
        card.setAttribute("tabindex", "0");

        const title = document.createElement("h3");
        title.className = "card-title";
        title.textContent = doc.title;

        const desc = document.createElement("p");
        desc.className = "card-desc";
        desc.textContent = doc.summary;

        const badges = document.createElement("div");
        badges.className = "badge-row";
        renderBadges(badges, dict, doc);

        const meta = document.createElement("div");
        meta.className = "meta-row";
        renderMeta(meta, lang, doc);

        const actions = document.createElement("div");
        actions.className = "actions";

        const preview = document.createElement("button");
        preview.className = "btn-primary";
        preview.type = "button";
        preview.textContent = "Preview";

        const download = document.createElement("button");
        download.className = "btn-secondary";
        download.type = "button";
        download.textContent = "Download";

        actions.append(preview, download);
        card.append(title, desc, badges, meta, actions);
        resultsEl.appendChild(card);
      });
    };

    const applyFilters = () => {
      const query = searchInput.value.trim().toLowerCase();
      const now = new Date();

      const filtered = documents.filter((doc) => {
        if (filters.category !== "all" && doc.category !== filters.category) {
          return false;
        }
        if (filters.jurisdictions.size && !filters.jurisdictions.has(doc.jurisdiction)) {
          return false;
        }
        if (filters.formats.size && !filters.formats.has(doc.format)) {
          return false;
        }
        if (filters.updated !== "any") {
          const months = parseInt(filters.updated, 10);
          const diff = (now - new Date(doc.updated)) / (1000 * 60 * 60 * 24 * 30);
          if (diff > months) {
            return false;
          }
        }
        if (query) {
          const haystack = `${doc.title} ${doc.summary}`.toLowerCase();
          if (!haystack.includes(query)) {
            return false;
          }
        }
        return true;
      });

      const sorted = filtered.sort((a, b) => {
        switch (sortSelect.value) {
          case "recent":
            return new Date(b.updated) - new Date(a.updated);
          case "popular":
            return b.downloads - a.downloads;
          case "shortest":
            return a.pages - b.pages;
          default:
            return 0;
        }
      });

      renderResults(sorted);
    };

    document.querySelectorAll('input[name="category"]').forEach((radio) => {
      radio.addEventListener("change", () => {
        filters.category = radio.value;
        applyFilters();
      });
    });

    document.querySelectorAll('input[data-filter="jurisdiction"]').forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          filters.jurisdictions.add(checkbox.value);
        } else {
          filters.jurisdictions.delete(checkbox.value);
        }
        applyFilters();
      });
    });

    document.querySelectorAll('input[data-filter="format"]').forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          filters.formats.add(checkbox.value);
        } else {
          filters.formats.delete(checkbox.value);
        }
        applyFilters();
      });
    });

    document.querySelectorAll('input[name="updated"]').forEach((radio) => {
      radio.addEventListener("change", () => {
        filters.updated = radio.value;
        applyFilters();
      });
    });

    densityToggle.addEventListener("click", () => {
      dense = !dense;
      densityToggle.setAttribute("aria-pressed", String(dense));
      const dict = getDict();
      densityToggle.textContent = dense
        ? dict["sample.density.compact"] || "Density: Compact"
        : dict["sample.density.comfortable"] || "Density: Comfortable";
      applyFilters();
    });

    searchInput.addEventListener("input", applyFilters);
    sortSelect.addEventListener("change", applyFilters);

    window.addEventListener("allegal:langchange", applyFilters);
    applyFilters();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSamplePage, { once: true });
  } else {
    initSamplePage();
  }
})();
