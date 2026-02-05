// Team modal interactivity

document.addEventListener("DOMContentLoaded", () => {
  const teamData = {
    "1": {
      name: "Aziz Rakhimov",
      title: "Bosh hamkor",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBSs48sXvRPglHu-cmtfUj71Vm8yCBzUqlvXfNfD8HMrd5ft7v1LgzpJzCDtzCnbyoakCHitZteGg3WMvAb-yD4F3JnLhXtMcACOavf-1drCajP9RPtSCkVdk3CrWE2olsvlpKjPqCAOBn_KjqsZYfYzGguOyMBzQ7at_OwGt0Nh1qsL2xwiMf8CECLegilaYH5A1QwArtA-H95Av172n5eEQIA4wp8DYWKqiV6CjPwnD3uPYGVqAiuGpFKsbr7Gs3tKy5LBvDFwl8",
      bio: [
        "Aziz Rakhimov 15 yildan ortiq tajribaga ega bo'lib, korporativ huquq, M&A va yuqori darajadagi shartnoma muzokaralarida kompaniyalarni himoya qiladi.",
        "U xalqaro hamkorlikda yirik bitimlarni yopish, regulyativ muvofiqlikni ta'minlash va biznes xavfini kamaytirishga ixtisoslashgan.",
        "U ingliz, rus va o'zbek tillarida erkin so'zlashadi va transchegaraviy loyihalarda ko'p tarmoqli jamoalarni boshqaradi."
      ],
      details: [
        { label: "Mutaxassislik", value: "Korporativ huquq, M&A, shartnomalar" },
        { label: "Tajriba", value: "15+ yil" },
        { label: "Ta'lim", value: "LL.M., University of London; JD, Tashkent State University of Law" },
        { label: "Tillar", value: "O'zbek, Rus, Ingliz" },
        { label: "Joylashuv", value: "Toshkent, O'zbekiston" }
      ],
      socials: [
        { label: "LinkedIn", text: "in", url: "#" },
        { label: "Twitter", text: "X", url: "#" },
        { label: "GitHub", text: "GH", url: "#" }
      ]
    },
    "2": {
      name: "Malika Karimova",
      title: "Hamkor, korporativ huquq",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB4pBKDREF2rYDxywnnQI8Vb-scScnuJYEge-9Ohbj7ZcPyLVXrt_NdnivGcKDwp5IQo0W7t6xiAYw6L1Nx9lzKbjrrsIktu4fEhw-NRh7bK4TzkfPKg9dnbRy7_syKJdU4f83KW4hPk1dE6Nz16AgklWyti0Tve_KaZtvGSLUrqZqpBgvIm_b4dt5Tx6jApW93nrXjtGnZueo1J5glgfX7aT3vXUNqMcJLNNQcjY0AaXKZLioFXosFYBhW3w7Ec_XEL8YyrTYdm_w",
      bio: [
        "Malika Karimova korporativ tuzilmalarni optimallashtirish va startaplar uchun investitsiya shartnomalarini ishlab chiqishda 10 yillik tajribaga ega.",
        "U aktsionerlar kelishuvi, konvertatsiya qilinadigan qarz va xodimlar opsion dasturlari bo'yicha klientlarga amaliy yechimlar beradi.",
        "Malika ayol tadbirkorlar uchun mentorlik dasturlarida faol qatnashadi."],
      details: [
        { label: "Mutaxassislik", value: "Korporativ tuzilma, investitsiya bitimlari" },
        { label: "Tajriba", value: "10 yil" },
        { label: "Ta'lim", value: "MBA, INHA University; LL.B., UWED" },
        { label: "Tillar", value: "O'zbek, Ingliz" },
        { label: "Joylashuv", value: "Toshkent" }
      ],
      socials: [
        { label: "LinkedIn", text: "in", url: "#" },
        { label: "Twitter", text: "X", url: "#" }
      ]
    },
    "3": {
      name: "Rustam Tursunov",
      title: "Hamkor, sud ishlari",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBPQeL2kReLgpXudUGq-MGHUZeiTl3ukaj254ZcWMtjRzYKReRzUaTdBZhn8VUqmxRElZhlQDQ53fe4ezjHORrG1lG22mtXRIpQHau288_j_S6VSRZ-DLS0r1O2PSQFMv8UdrwUxwpvANNiTSpeVFaC2srA32V5zm5buDcrys2kjwnDQwz7TaQZM-i63Sc8szB_a7yPfCgEssnzR-3iwb9oK5Ylw229SobLnKYNdkDotJ_xPh1K-O1ra7i77zBy2Vogj7nA4xPUdzU",
      bio: [
        "Rustam Tursunov 18 yildan beri tijorat nizolari va arbitraj ishlarini yuritadi, murakkab sud jarayonlarida kompaniyalarni himoya qiladi.",
        "U texnologiya, qurilish va energetika sektorlaridagi mijozlar uchun strategik sud strategiyalarini ishlab chiqadi.",
        "Rustam hakamlik qarorlarini ijro etish va mediatsiya orqali kelishuvga erishishda katta tajribaga ega."],
      details: [
        { label: "Mutaxassislik", value: "Tijorat nizolari, arbitraj" },
        { label: "Tajriba", value: "18 yil" },
        { label: "Ta'lim", value: "JD, UWED" },
        { label: "Tillar", value: "O'zbek, Rus" },
        { label: "Joylashuv", value: "Toshkent" }
      ],
      socials: [
        { label: "LinkedIn", text: "in", url: "#" }
      ]
    },
    "4": {
      name: "Elena Sidorova",
      title: "Soliq amaliyoti rahbari",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAFAvi9C2l1Z0qBpYuS7EHoH7MOxU3pqBOGPJuDBcNrSfhwl34C1owLO2PZg8ks4tie20r7dthmKA8WWzs_8AAhR6Rn9qSxctUBXvupmt44G38OR6f_8P0ohbLtZBPqZwu33VC6jg_SUXrt75v-Ewks5zpkZHibvIvCVHEebl3wFYpOuakMEVWD1jK1oa6vUJ6XDGhF7cxfN84zSO9bmNrjFE6AEOP-szEa2d2aSi-er-dALlH60Zi18Rl5B9Zz3HXRDe9W2PMEm6o",
      bio: [
        "Elena Sidorova xalqaro soliqqa tortish, transfer narxlari va tekshiruvlarga tayyorgarlik bo'yicha yetakchi ekspert.",
        "U ko'p millatli kompaniyalar uchun soliq riskini baholash va tuzilmani optimallashtirish bo'yicha keng tajribaga ega.",
        "Elena IFRS va mahalliy soliq qonunchiligini uyg'unlashtirishda mijozlarga amaliy ko'rsatmalar beradi."],
      details: [
        { label: "Mutaxassislik", value: "Xalqaro soliq, transfer narxlari" },
        { label: "Tajriba", value: "12 yil" },
        { label: "Ta'lim", value: "ACCA, MSc Taxation" },
        { label: "Tillar", value: "Rus, Ingliz" },
        { label: "Joylashuv", value: "Toshkent" }
      ],
      socials: [
        { label: "LinkedIn", text: "in", url: "#" },
        { label: "Twitter", text: "X", url: "#" }
      ]
    }
  };

  const modal = document.getElementById("profile-modal");
  const modalImg = document.getElementById("modal-img");
  const modalName = document.getElementById("modal-name");
  const modalTitle = document.getElementById("modal-title");
  const modalBio = document.getElementById("modal-bio");
  const modalDetails = document.getElementById("modal-details");
  const modalSocial = document.getElementById("modal-social");
  const closeBtn = document.querySelector(".close-button");
  const grid = document.querySelector(".team-grid");

  if (!modal || !grid) return;

  const renderList = (container, items, renderer) => {
    container.innerHTML = "";
    items.forEach((item) => container.appendChild(renderer(item)));
  };

  const showModal = (id) => {
    const data = teamData[id];
    if (!data) return;

    modalImg.src = data.image;
    modalImg.alt = data.name;
    modalName.textContent = data.name;
    modalTitle.textContent = data.title;

    modalBio.innerHTML = "";
    data.bio.forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      modalBio.appendChild(p);
    });

    renderList(modalDetails, data.details, ({ label, value }) => {
      const li = document.createElement("li");
      const strong = document.createElement("strong");
      strong.textContent = `${label}:`;
      li.appendChild(strong);
      li.appendChild(document.createTextNode(` ${value}`));
      return li;
    });

    renderList(modalSocial, data.socials, ({ label, url, text }) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = url;
      a.textContent = text;
      a.setAttribute("aria-label", label);
      li.appendChild(a);
      return li;
    });

    modal.classList.add("visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const hideModal = () => {
    modal.classList.remove("visible");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  grid.addEventListener("click", (event) => {
    const card = event.target.closest(".team-card");
    if (!card || !grid.contains(card)) return;
    event.preventDefault();
    const id = card.getAttribute("data-member-id");
    showModal(id);
  });

  closeBtn?.addEventListener("click", hideModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) hideModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("visible")) {
      hideModal();
    }
  });
});
