// Master-detail team view interactivity

document.addEventListener("DOMContentLoaded", () => {
  const teamData = {
    "1": {
      name: "Said Raximov",
      title: "Bosh direktor",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBSs48sXvRPglHu-cmtfUj71Vm8yCBzUqlvXfNfD8HMrd5ft7v1LgzpJzCDtzCnbyoakCHitZteGg3WMvAb-yD4F3JnLhXtMcACOavf-1drCajP9RPtSCkVdk3CrWE2olsvlpKjPqCAOBn_KjqsZYfYzGguOyMBzQ7at_OwGt0Nh1qsL2xwiMf8CECLegilaYH5A1QwArtA-H95Av172n5eEQIA4wp8DYWKqiV6CjPwnD3uPYGVqAiuGpFKsbr7Gs3tKy5LBvDFwl8",
      bio: [
        "Said Rakhimov 15 yildan ortiq tajribaga ega bo'lib, korporativ huquq, M&A va yuqori darajadagi shartnoma muzokaralarida kompaniyalarni himoya qiladi.",
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
      name: "Abduxalil Tursunov",
      title: "Hamkor, korporativ huquq va huquqiy siyosat",
      image:
        "Tursunov_A.png",
      bio: [
        "Abduxalil Tursunov korporativ huquq, huquqiy siyosat va xalqaro huquqiy hamkorlik bo'yicha 10+ yillik tajribaga ega amaliyotchi advokat.",
        "U korporativ tuzilma, startap va investitsiya bitimlari uchun shartnomalar, aktsionerlar kelishuvlari, konvertatsiya qilinadigan qarz va xodimlar opsion dasturlarini ishlab chiqadi hamda sud va ma'muriy jarayonlarda tashkilotlarni himoya qiladi.",
        "TSULda lektor sifatida korporativ boshqaruv va xalqaro huquq mavzularida dars beradi; Nagoya Universitetida (Yaponiya) LL.M. darajasini olgan.",
        "O'zbek, ingliz va rus tillarida erkin, yapon tilida ishchi darajada so'zlashadi."
      ],
      details: [
        { label: "Mutaxassislik", value: "Korporativ huquq, huquqiy siyosat, xalqaro huquqiy hamkorlik" },
        { label: "Tajriba", value: "10+ yil" },
        { label: "Ta'lim", value: "LL.M., Nagoya University (Yaponiya); Lektor, Tashkent State University of Law" },
        { label: "Tillar", value: "O'zbek, Ingliz, Rus; Yapon tili (ishchi daraja)" },
        { label: "Joylashuv", value: "Toshkent" }
      ],
      socials: [
        { label: "LinkedIn", text: "in", url: "https://www.linkedin.com" },
        { label: "Telegram", text: "tg", url: "https://t.me/Advokat_1987" },
        { label: "Email", text: "@", url: "mailto:intlaw100@gmail.com" },
        { label: "Telefon: +998 95 187 05 11", text: "☎", url: "tel:+998951870511" }
      ]
    },
    "3": {
      name: "Sherzod Zakirov",
      title: "Legal & Compliance Assistant Manager, xalqaro biznes",
      image: "Zakirov_Sh.png",
      bio: [
        "Sherzod Zakirov korporativ huquq, komplaens va ishlab chiqarish boshqaruvi bo'yicha xalqaro tajribaga ega yuridik va biznes mutaxassisi.",
        "Fast Retailing kompaniyasida 6+ yil davomida global ishlab chiqarish va ta'minot zanjiri jarayonlarida ishlagan, hozirda Nagoya Railroad (Yaponiya) da Legal & Compliance bo'limida Assistant Manager.",
        "TSUL va Nagoya Universitetidagi yuridik ta'limini amaliy korporativ boshqaruv, shartnomalar va komplaens tizimlari bilan uyg'unlashtiradi.",
        "O'zbek oziq-ovqat mahsulotlari va konsalting biznesining asoschisi sifatida xalqaro shartnomalar, eksport va kross-madaniy muzokaralarda tajribaga ega.",
        "Besh tilni biladi, kross-madaniy biznes aloqalari va xalqaro loyiha koordinatsiyasida kuchli."
      ],
      details: [
        { label: "Mutaxassislik", value: "Korporativ huquq, komplaens, xalqaro shartnomalar, ishlab chiqarish boshqaruvi" },
        { label: "Tajriba", value: "6+ yil korporativ (Fast Retailing) + joriy rol Nagoya Railroad" },
        { label: "Ta'lim", value: "LL.M., Nagoya University; LL.B., Tashkent State University of Law" },
        { label: "Tillar", value: "O'zbek, Ingliz, Rus, Yapon, Koreys" },
        { label: "Joylashuv", value: "Nagoya, Aichi, Yaponiya" }
      ],
      socials: [
        { label: "Telefon: +81 90-3580-5391", text: "☎", url: "tel:+819035805391" },
        { label: "Email: sherzod.hikmat@gmail.com", text: "@", url: "mailto:sherzod.hikmat@gmail.com" },
        { label: "LinkedIn", text: "in", url: "#" }
      ]
    },
    "4": {
      name: "Muhammadjon Rasulov",
      title: "In-House Lawyer, Litigation & Compliance Specialist",
      image: "Rasulov_M.png",
      bio: [
        "Muhammadjon Rasulov korporativ shartnomalar, komplaens boshqaruvi va xalqaro biznesni yuridik qo'llab-quvvatlash bo'yicha tajribali in-house yurist.",
        "Toyota Industries Corporation va Toyota Material Handling India da yirik komplaens va shartnoma loyihalarini boshqargan; hozirda Nagoya Railroad (Yaponiya)da Legal & Compliance bo'limida Assistant Manager.",
        "M&A jarayonlari, xalqaro shartnomalar, subsidiya va filiallar uchun komplaens rejalashtirish hamda joriy etish ustida ishlagan.",
        "Mahsulot javobgarligi bo'yicha sud ishlarini, davlat organlari bilan muloqot va da'volarni yuritish tajribasiga ega.",
        "Nagoya Universitetida huquq fanlari doktori (PhD) darajasiga ega, ilmiy tayyorgarligini amaliy korporativ boshqaruv bilan uyg'unlashtiradi."
      ],
      details: [
        { label: "Mutaxassislik", value: "Korporativ shartnomalar, komplaens boshqaruvi, M&A yuridik qo'llab-quvvatlash, xalqaro biznes, litigatsiya" },
        { label: "Tajriba", value: "Toyota Industries Corporation; Toyota Material Handling India; hozirda Nagoya Railroad (Legal & Compliance Assistant Manager)" },
        { label: "Ta'lim", value: "Doctor of Law (PhD), Nagoya University" },
        { label: "Tillar", value: "Ingliz, Yapon, O'zbek" },
        { label: "Joylashuv", value: "Kariya, Aichi, Yaponiya" }
      ],
      socials: [
        { label: "Telefon: +81 90 9174 7007", text: "☎", url: "tel:+819091747007" },
        { label: "Email: muhammad.rasulov@gmail.com", text: "@", url: "mailto:muhammad.rasulov@gmail.com" },
        { label: "LinkedIn", text: "in", url: "#" }
      ]
    },
    "5": {
      name: "Anvar Omonboyev",
      title: "Attorney / Legal Advisor / University Lecturer",
      image: "Omonboyev_A.png",
      bio: [
        "Anvar Omonboyev korporativ huquq, huquqiy siyosat va xalqaro huquqiy hamkorlik bo'yicha tajribali yuridik mutaxassis.",
        "Hozir advokatlik qiladi va Tashkent State University of Lawda lektor sifatida faoliyat yuritadi.",
        "Mijozlarga maslahat berish, shartnomalar tayyorlash va tashkilotlarni sud hamda ma'muriy jarayonlarda himoya qilishda katta tajribaga ega.",
        "Faoliyati davomida davlat ilmiy-tadqiqot institutlari, xususiy yuridik firmalar va akademik muassasalarda ishlagan.",
        "Nagoya Universitetida (Yaponiya) huquq magistri (LL.M.) darajasiga ega va xalqaro huquqiy bilimlari mustahkam.",
        "O'zbek, ingliz va rus tillarida erkin, yapon tilida ishchi darajada so'zlashadi."
      ],
      details: [
        { label: "Mutaxassislik", value: "Korporativ huquq, huquqiy siyosat, xalqaro huquqiy hamkorlik" },
        { label: "Tajriba", value: "10+ yil advokatlik va akademik faoliyat" },
        { label: "Ta'lim", value: "LL.M., Nagoya University (Yaponiya)" },
        { label: "Tillar", value: "O'zbek, Ingliz, Rus; Yapon tili (ishchi daraja)" },
        { label: "Joylashuv", value: "Toshkent" }
      ],
      socials: [
        { label: "Telefon: +998 95 187 05 11", text: "☎", url: "tel:+998951870511" },
        { label: "Email: intlaw100@gmail.com", text: "@", url: "mailto:intlaw100@gmail.com" },
        { label: "Telegram: @Advokat_1987", text: "tg", url: "https://t.me/Advokat_1987" },
        { label: "LinkedIn: Anvar Omonboyev", text: "in", url: "#" }
      ]
    },
    "6": {
      name: "Adhambek Bakhodirov",
      title: "Lawyer / Legal Consultant / Due Diligence & Corporate Law Specialist",
      image: "Baxodirov_A.png",
      bio: [
        "Adhambek Bakhodirov korporativ huquq, shartnomalar va kompaniyalar uchun yuridik due diligence bo'yicha ixtisoslashgan.",
        "Yuridik firmalar va energetika sektorida kompaniya ro'yxatga olish, shartnoma boshqaruvi va regulyativ muvofiqlikni ta'minlashda ishlagan.",
        "Hozir xalqaro yuridik firmada yurist sifatida bir nechta kompaniyalarni doimiy yuridik xizmatlar bilan qo'llab-quvvatlaydi.",
        "Qayta tiklanuvchi energetika loyihalarida loyiha boshqaruvi, shartnoma o'zgartirishlari va ishchi kuchini muvofiqlashtirish tajribasiga ega.",
        "TSULda yuridik ta'limni yakunlamoqda, amaliyotini akademik tayyorgarlik bilan uyg'unlashtirmoqda.",
        "O'zbek va rus tillarida erkin, ingliz tilini upper-intermediate darajada biladi."
      ],
      details: [
        { label: "Mutaxassislik", value: "Korporativ huquq, shartnomalar, due diligence, komplaens" },
        { label: "Tajriba", value: "Energetika va yuridik firmalar; hozir xalqaro yuridik firmada yurist" },
        { label: "Ta'lim", value: "Tashkent State University of Law (yakunlash jarayonida)" },
        { label: "Tillar", value: "O'zbek, Rus; Ingliz (Upper-Intermediate)" },
        { label: "Joylashuv", value: "Toshkent" }
      ],
      socials: [
        { label: "Telefon: +998 88 138 69 09", text: "☎", url: "tel:+998881386909" },
        { label: "Email: lawyerbahodirov@gmail.com", text: "@", url: "mailto:lawyerbahodirov@gmail.com" },
        { label: "Telegram: @adhambahodirov", text: "tg", url: "https://t.me/adhambahodirov" },
        { label: "LinkedIn", text: "in", url: "#" }
      ]
    },
    "7": {
      name: "Malika Matnazarova",
      title: "Lawyer / Attorney Assistant / Court Legal Specialist",
      image: "Matnazarova.png",
      bio: [
        "Malika Matnazarova sudlar va huquqni himoya qilish tashkilotlarida ishlash tajribasiga ega yuridik mutaxassis.",
        "Sudyaning yordamchisi sifatida va keyinchalik advokatlik byurosida assistent hamda stajyor yurist sifatida ishlagan.",
        "Hozir yuridik firmada yurist bo'lib, mijozlarni vakillash va hujjatlar tayyorlashda qo'llab-quvvatlaydi.",
        "Qoraqalpoq Davlat Universitetida huquq bo'yicha bakalavr darajasiga ega.",
        "Sud jarayonlari, yuridik hujjatlashtirish va klientlarga yuridik ko'mak ko'rsatishda amaliy tajribaga ega.",
        "O'zbek va rus tillarida erkin, ingliz tilini o'rta professional darajada biladi."
      ],
      details: [
        { label: "Mutaxassislik", value: "Sud jarayonlari, yuridik hujjatlashtirish, advokatlik yordami, klientlarni vakillash" },
        { label: "Tajriba", value: "Sud yordamchisi, advokatlik byurosi assistenti va stajyor yurist; hozir yuridik firmada yurist" },
        { label: "Ta'lim", value: "LL.B., Qoraqalpoq Davlat Universiteti" },
        { label: "Tillar", value: "O'zbek, Rus; Ingliz (o'rta professional daraja)" },
        { label: "Joylashuv", value: "O'zbekiston" }
      ],
      socials: [
        { label: "Telefon: +998 90 704 21 11", text: "☎", url: "tel:+998907042111" },
        { label: "LinkedIn", text: "in", url: "#" }
      ]
    },
    "8": {
      name: "Umarjon Jumaniyazov",
      title: "Attorney / Professional Mediator / Civil & Labor Law Specialist / Law Lecturer",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBSs48sXvRPglHu-cmtfUj71Vm8yCBzUqlvXfNfD8HMrd5ft7v1LgzpJzCDtzCnbyoakCHitZteGg3WMvAb-yD4F3JnLhXtMcACOavf-1drCajP9RPtSCkVdk3CrWE2olsvlpKjPqCAOBn_KjqsZYfYzGguOyMBzQ7at_OwGt0Nh1qsL2xwiMf8CECLegilaYH5A1QwArtA-H95Av172n5eEQIA4wp8DYWKqiV6CjPwnD3uPYGVqAiuGpFKsbr7Gs3tKy5LBvDFwl8",
      bio: [
        "Umarjon Jumaniyazov fuqarolik va mehnat huquqi bo'yicha ixtisoslashgan advokat va professional mediator.",
        "TSUL va Litvadagi Mykolas Romeris Universitetida tahsil olgan, Private Law bo'yicha magistr darajasiga ega.",
        "O'qish davomida e-commerce huquqi va xalqaro xususiy huquq bo'yicha chuqur bilim olgan.",
        "2024 yilda Xorazm viloyati Adliya boshqarmasida yuridik maslahatchi sifatida faoliyat boshlagan.",
        "Hozir advokat va mediator sifatida sudgacha va sud jarayonlarida nizolarni hal qilishga ko'maklashadi hamda huquq bo'yicha lektorlik qiladi.",
        "100+ mijozning huquq va manfaatlarini himoya qilishda amaliy tajribaga ega."
      ],
      details: [
        { label: "Mutaxassislik", value: "Fuqarolik huquqi, mehnat huquqi, mediatsiya, e-commerce huquqi, xalqaro xususiy huquq" },
        { label: "Tajriba", value: "Advokat va professional mediator; Xorazm Adliya boshqarmasida yuridik maslahatchi (2024)" },
        { label: "Ta'lim", value: "LL.B., TSUL; LL.M. Private Law, Mykolas Romeris University (Litva)" },
        { label: "Tillar", value: "O'zbek, Ingliz; Rus (ishchi daraja)" },
        { label: "Joylashuv", value: "O'zbekiston" }
      ],
      socials: [
        { label: "LinkedIn", text: "in", url: "#" }
      ]
    }
  };

  const list = document.querySelector(".team-list");
  const items = Array.from(document.querySelectorAll(".team-list-item"));
  const detailImg = document.getElementById("detail-img");
  const detailName = document.getElementById("detail-name");
  const detailTitle = document.getElementById("detail-title");
  const detailBio = document.getElementById("detail-bio");
  const detailExpertise = document.getElementById("detail-expertise");
  const detailSocial = document.getElementById("detail-social");

  if (!list || !items.length || !detailImg || !detailName || !detailTitle) return;

  const getLanguageItems = (details) => {
    const langs = details?.find((d) => d.label.toLowerCase().includes("tillar"));
    if (!langs) return [];
    return langs.value
      .split(/[;,]/)
      .map((item) => item.trim())
      .filter(Boolean);
  };

  const updateDetails = (memberId) => {
    const data = teamData[memberId];
    if (!data) return;

    detailImg.src = data.image;
    detailImg.alt = data.name;
    detailName.textContent = data.name;
    detailTitle.textContent = data.title;

    detailBio.innerHTML = "";
    data.bio.forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      detailBio.appendChild(p);
    });

    detailExpertise.innerHTML = "";
    getLanguageItems(data.details).forEach((lang) => {
      const li = document.createElement("li");
      li.textContent = lang;
      detailExpertise.appendChild(li);
    });

    detailSocial.innerHTML = "";
    data.socials.forEach(({ label, url, text, title }) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = url;
      a.textContent = text;
      a.setAttribute("aria-label", label);
      a.title = title || label;
      a.target = "_blank";
      a.rel = "noreferrer";
      li.appendChild(a);
      detailSocial.appendChild(li);
    });

    items.forEach((item) => item.classList.remove("active"));
    const activeItem = items.find((item) => item.getAttribute("data-member-id") === memberId);
    if (activeItem) activeItem.classList.add("active");
  };

  list.addEventListener("click", (event) => {
    const item = event.target.closest(".team-list-item");
    if (!item || !list.contains(item)) return;
    const memberId = item.getAttribute("data-member-id");
    updateDetails(memberId);
  });

  // Initial render
  const firstId = items[0]?.getAttribute("data-member-id") || Object.keys(teamData)[0];
  if (firstId) updateDetails(firstId);
});
