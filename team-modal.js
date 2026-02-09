// Multilingual master-detail team view for the team page

const initTeamPage = () => {
  const teamData = {
    "1": {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBSs48sXvRPglHu-cmtfUj71Vm8yCBzUqlvXfNfD8HMrd5ft7v1LgzpJzCDtzCnbyoakCHitZteGg3WMvAb-yD4F3JnLhXtMcACOavf-1drCajP9RPtSCkVdk3CrWE2olsvlpKjPqCAOBn_KjqsZYfYzGguOyMBzQ7at_OwGt0Nh1qsL2xwiMf8CECLegilaYH5A1QwArtA-H95Av172n5eEQIA4wp8DYWKqiV6CjPwnD3uPYGVqAiuGpFKsbr7Gs3tKy5LBvDFwl8",
      socials: [
        { label: "LinkedIn", text: "in", url: "#" },
        { label: "Twitter", text: "X", url: "#" },
        { label: "GitHub", text: "GH", url: "#" }
      ],
      translations: {
        en: {
          name: "Saidjon Raximov",
          title: "Managing Director",
          bio: [
            "15+ years in corporate law, M&A, and high-stakes contract negotiations for Uzbek and international companies.",
            "Closes cross-border deals, builds compliance programs, and leads multidisciplinary teams.",
            "Fluent in Uzbek, Russian, and English; guides investors on risk reduction."
          ],
          languages: ["Uzbek", "Russian", "English"]
        },
        ru: {
          name: "Саиджон Рахимов",
          title: "Управляющий директор",
          bio: [
            "Более 15 лет в корпоративном праве, M&A и сложных договорных переговорах для узбекских и международных компаний.",
            "Закрывает трансграничные сделки, выстраивает комплаенс-программы и руководит мультидисциплинарными командами.",
            "Свободно говорит на узбекском, русском и английском; консультирует инвесторов по снижению рисков."
          ],
          languages: ["Узбекский", "Русский", "Английский"]
        },
        uz: {
          name: "Saidjon Raximov",
          title: "Bosh direktor",
          bio: [
            "15+ yil korporativ huquq, M&A va murakkab shartnoma muzokaralarida tajriba.",
            "Transchegaraviy bitimlarni yopadi, komplaens dasturlarini quradi va ko'p tarmoqli jamoalarni boshqaradi.",
            "O'zbek, rus va ingliz tillarida erkin so'zlashadi; investorlar uchun xavfni kamaytirishga yo'naltiradi."
          ],
          languages: ["O'zbek", "Rus", "Ingliz"]
        },
        ja: {
          name: "サイドジョン・ラヒモフ",
          title: "マネージングディレクター",
          bio: [
            "企業法務・M&A・大型契約交渉で15年以上の経験。国内外の企業を担当。",
            "クロスボーダー取引のクロージングとコンプライアンス体制の構築をリード。",
            "ウズベク語・ロシア語・英語が堪能で、投資家のリスク低減を支援。"
          ],
          languages: ["ウズベク語", "ロシア語", "英語"]
        }
      }
    },
    "2": {
      image: "Tursunov_A.png",
      socials: [
        { label: "LinkedIn", text: "in", url: "https://www.linkedin.com" },
        { label: "Telegram", text: "tg", url: "https://t.me/Advokat_1987" },
        { label: "Email", text: "@", url: "mailto:intlaw100@gmail.com" },
        { label: "Telefon: +998 95 187 05 11", text: "☎", url: "tel:+998951870511" }
      ],
      translations: {
        en: {
          name: "Abduxalil Tursunov",
          title: "Partner, Corporate Law & Policy",
          bio: [
            "Corporate lawyer with 10+ years across governance, shareholders' agreements, convertible notes, and option plans.",
            "Advises startups and investors; represents clients in courts and administrative proceedings.",
            "Lecturer at TSUL, LL.M. Nagoya University; speaks Uzbek, English, Russian, working Japanese."
          ],
          languages: ["Uzbek", "English", "Russian", "Japanese (working)"]
        },
        ru: {
          name: "Абдухалил Турсунов",
          title: "Партнер, корпоративное право и политика",
          bio: [
            "Корпоративный юрист с 10+ годами опыта: корпоративное управление, акционерные соглашения, конвертируемые займы, опционные программы.",
            "Консультирует стартапы и инвесторов, представляет клиентов в судах и административных органах.",
            "Преподаватель ТГЮУ, LL.M. Nagoya University; свободно узбекский/английский/русский, рабочий японский."
          ],
          languages: ["Узбекский", "Английский", "Русский", "Японский (рабочий)"]
        },
        uz: {
          name: "Abduxalil Tursunov",
          title: "Hamkor, korporativ huquq va huquqiy siyosat",
          bio: [
            "10+ yillik tajribaga ega korporativ yurist: boshqaruv, aktsionerlar kelishuvi, konvertatsiya qarzlari va opsion dasturlari.",
            "Startaplar va investorlar uchun maslahat beradi, sud va ma'muriy jarayonlarda vakillik qiladi.",
            "TSUL lektori, LL.M. Nagoya University; o'zbek, ingliz, rus va yapon (ishchi) tillarida so'zlashadi."
          ],
          languages: ["O'zbek", "Ingliz", "Rus", "Yapon (ishchi)"]
        },
        ja: {
          name: "アブドゥハリル・トゥルスノフ",
          title: "パートナー（企業法務・リーガルポリシー）",
          bio: [
            "企業法務で10年以上。コーポレート・ガバナンス、株主間契約、転換社債、ストックオプションを担当。",
            "スタートアップと投資家を助言し、裁判・行政手続で代理。",
            "TSUL講師、名古屋大学LL.M。ウズベク語・英語・ロシア語、日常会話レベルの日本語。"
          ],
          languages: ["ウズベク語", "英語", "ロシア語", "日本語（業務レベル）"]
        }
      }
    },
    "3": {
      image: "Zakirov_Sh.png",
      socials: [
        { label: "Telefon: +81 90-3580-5391", text: "☎", url: "tel:+819035805391" },
        { label: "Email: sherzod.hikmat@gmail.com", text: "@", url: "mailto:sherzod.hikmat@gmail.com" },
        { label: "LinkedIn", text: "in", url: "#" }
      ],
      translations: {
        en: {
          name: "Sherzod Zakirov",
          title: "Legal & Compliance Assistant Manager, International Business",
          bio: [
            "International legal and compliance specialist with manufacturing and supply-chain experience at Fast Retailing; now at Nagoya Railroad.",
            "Blends TSUL and Nagoya legal training with on-the-ground contract and compliance systems.",
            "Entrepreneur exporting Uzbek products; speaks Uzbek, English, Russian, Japanese, Korean."
          ],
          languages: ["Uzbek", "English", "Russian", "Japanese", "Korean"]
        },
        ru: {
          name: "Шерзод Закиров",
          title: "Менеджер по правовым вопросам и комплаенсу (ассистент), международный бизнес",
          bio: [
            "Международный специалист по праву и комплаенсу с опытом в производстве и цепях поставок (Fast Retailing), сейчас Nagoya Railroad.",
            "Сочетает обучение в ТГЮУ и Nagoya University с практикой договоров и комплаенс-систем.",
            "Предприниматель, выводящий узбекские товары за рубеж; говорит на узбекском, английском, русском, японском, корейском."
          ],
          languages: ["Узбекский", "Английский", "Русский", "Японский", "Корейский"]
        },
        uz: {
          name: "Sherzod Zakirov",
          title: "Legal & Compliance Assistant Manager, xalqaro biznes",
          bio: [
            "Fast Retailing’da ishlab chiqarish va ta'minot zanjiri bo'yicha tajriba, hozir Nagoya Railroad’da Legal & Compliance assistent menejeri.",
            "TSUL va Nagoya universitetidagi ta'limni shartnomalar va komplaens tizimlari amaliyoti bilan uyg'unlashtiradi.",
            "O'zbek mahsulotlarini eksport qiluvchi tadbirkor; o'zbek, ingliz, rus, yapon va koreys tillarini biladi."
          ],
          languages: ["O'zbek", "Ingliz", "Rus", "Yapon", "Koreys"]
        },
        ja: {
          name: "シェルゾド・ザキロフ",
          title: "リーガル＆コンプライアンス アシスタントマネージャー（国際ビジネス）",
          bio: [
            "製造・サプライチェーンでの法務/コンプライアンス経験（ファーストリテイリング）。現在は名古屋鉄道で従事。",
            "TSULと名古屋大学の法学教育を、契約とコンプライアンス運用の実務に結びつける。",
            "ウズベキスタン産品を海外へ展開する起業家。ウズベク語・英語・ロシア語・日本語・韓国語に対応。"
          ],
          languages: ["ウズベク語", "英語", "ロシア語", "日本語", "韓国語"]
        }
      }
    },
    "4": {
      image: "Rasulov_M.png",
      socials: [
        { label: "Telefon: +81 90 9174 7007", text: "☎", url: "tel:+819091747007" },
        { label: "Email: muhammad.rasulov@gmail.com", text: "@", url: "mailto:muhammad.rasulov@gmail.com" },
        { label: "LinkedIn", text: "in", url: "#" }
      ],
      translations: {
        en: {
          name: "Muhammadjon Rasulov",
          title: "In-House Lawyer, Litigation & Compliance",
          bio: [
            "In-house lawyer supporting Toyota group projects in Japan and India on contracts and compliance.",
            "Handles M&A support, compliance planning for subsidiaries, product liability matters, and liaison with authorities.",
            "PhD in Law (Nagoya University); works in English, Japanese, and Uzbek."
          ],
          languages: ["English", "Japanese", "Uzbek"]
        },
        ru: {
          name: "Мухаммаджон Расулов",
          title: "Корпоративный юрист, судебные споры и комплаенс",
          bio: [
            "Корпоративный юрист Toyota в Японии и Индии: договоры и комплаенс.",
            "Сопровождает M&A, планирование комплаенса для дочерних обществ, споры по ответственности за продукцию, взаимодействие с госорганами.",
            "Кандидат юридических наук (Nagoya University); работает на английском, японском и узбекском."
          ],
          languages: ["Английский", "Японский", "Узбекский"]
        },
        uz: {
          name: "Muhammadjon Rasulov",
          title: "In-house yurist, litigatsiya va komplaens",
          bio: [
            "Toyota loyihalarida (Yaponiya va Hindiston) shartnomalar va komplaens bo'yicha in-house yurist.",
            "M&A qo'llab-quvvatlash, filiallar uchun komplaens rejalari, mahsulot javobgarligi nizolari va davlat organlari bilan muloqotni yuritadi.",
            "Nagoya universiteti huquq fanlari doktori (PhD); ingliz, yapon va o'zbek tillarida ishlaydi."
          ],
          languages: ["Ingliz", "Yapon", "O'zbek"]
        },
        ja: {
          name: "ムハンマドジョン・ラスロフ",
          title: "インハウス弁護士（訴訟・コンプライアンス）",
          bio: [
            "トヨタグループの日印プロジェクトで契約・コンプライアンスを担当するインハウス弁護士。",
            "M&A支援、子会社のコンプライアンス計画、製造物責任対応、当局との調整を実施。",
            "名古屋大学 法学博士。英語・日本語・ウズベク語で業務対応。"
          ],
          languages: ["英語", "日本語", "ウズベク語"]
        }
      }
    },
    "5": {
      image: "Omonboyev_A.png",
      socials: [
        { label: "Telefon: +998 95 187 05 11", text: "☎", url: "tel:+998951870511" },
        { label: "Email: intlaw100@gmail.com", text: "@", url: "mailto:intlaw100@gmail.com" },
        { label: "Telegram: @Advokat_1987", text: "tg", url: "https://t.me/Advokat_1987" },
        { label: "LinkedIn: Anvar Omonboyev", text: "in", url: "#" }
      ],
      translations: {
        en: {
          name: "Anvar Omonboyev",
          title: "Attorney / Legal Advisor / Lecturer",
          bio: [
            "Advises on corporate law, policy, and international cooperation with 10+ years in practice and academia.",
            "Drafts contracts, shareholder agreements, investment instruments; represents clients in disputes.",
            "LL.M. Nagoya University; lecturer at TSUL; fluent Uzbek, English, Russian; working Japanese."
          ],
          languages: ["Uzbek", "English", "Russian", "Japanese (working)"]
        },
        ru: {
          name: "Анвар Омонбоев",
          title: "Адвокат / юридический советник / лектор",
          bio: [
            "Более 10 лет консультирует по корпоративному праву, политике и международному сотрудничеству, сочетая практику и преподавание.",
            "Готовит договоры, акционерные соглашения, инвестиционные инструменты; представляет клиентов в спорах.",
            "LL.M. Nagoya University; лектор ТГЮУ; узбекский, английский, русский; рабочий японский."
          ],
          languages: ["Узбекский", "Английский", "Русский", "Японский (рабочий)"]
        },
        uz: {
          name: "Anvar Omonboyev",
          title: "Advokat / yuridik maslahatchi / lektor",
          bio: [
            "10+ yildan beri korporativ huquq, huquqiy siyosat va xalqaro hamkorlik bo'yicha maslahat beradi.",
            "Shartnomalar, aktsionerlar kelishuvi, investitsiya vositalarini tuzadi va mijozlarni nizolarda himoya qiladi.",
            "LL.M. Nagoya University; TSUL lektori; o'zbek, ingliz, rus va yapon (ishchi) tillarini biladi."
          ],
          languages: ["O'zbek", "Ingliz", "Rus", "Yapon (ishchi)"]
        },
        ja: {
          name: "アンヴァル・オモンボエフ",
          title: "弁護士・法律顧問・講師",
          bio: [
            "企業法務・政策・国際協力を10年以上助言し、実務と教育を両立。",
            "契約書、株主間契約、投資スキームを作成し、紛争でも代理。",
            "名古屋大学LL.M、TSUL講師。ウズベク語・英語・ロシア語、業務レベルの日本語。"
          ],
          languages: ["ウズベク語", "英語", "ロシア語", "日本語（業務レベル）"]
        }
      }
    },
    "6": {
      image: "Baxodirov_A.png",
      socials: [
        { label: "Telefon: +998 88 138 69 09", text: "☎", url: "tel:+998881386909" },
        { label: "Email: lawyerbahodirov@gmail.com", text: "@", url: "mailto:lawyerbahodirov@gmail.com" },
        { label: "Telegram: @adhambahodirov", text: "tg", url: "https://t.me/adhambahodirov" },
        { label: "LinkedIn", text: "in", url: "#" }
      ],
      translations: {
        en: {
          name: "Adhambek Bakhodirov",
          title: "Lawyer / Legal Consultant / Due Diligence",
          bio: [
            "Specializes in corporate law, contracts, and legal due diligence for companies.",
            "Experience in energy sector and law firms: company registration, contract management, regulatory compliance.",
            "Supports clients at an international law firm; speaks Uzbek, Russian; English upper-intermediate."
          ],
          languages: ["Uzbek", "Russian", "English (upper-intermediate)"]
        },
        ru: {
          name: "Адхамбек Баходиров",
          title: "Юрист / консультант / due diligence",
          bio: [
            "Специализируется на корпоративном праве, договорах и юридическом due diligence.",
            "Опыт в энергетике и юрфирмах: регистрация компаний, управление договорами, регуляторное соответствие.",
            "Работает в международной юрфирме; узбекский, русский, английский (upper-intermediate)."
          ],
          languages: ["Узбекский", "Русский", "Английский (upper-intermediate)"]
        },
        uz: {
          name: "Adhambek Bakhodirov",
          title: "Yurist / yuridik konsalting / due diligence",
          bio: [
            "Korporativ huquq, shartnomalar va yuridik due diligence bo'yicha ixtisoslashgan.",
            "Energetika va yuridik firmalarda kompaniya ro'yxatga olish, shartnoma boshqaruvi va regulyativ muvofiqlik tajribasi.",
            "Xalqaro yuridik firmada mijozlarga xizmat ko'rsatadi; o'zbek va rus tillarida, ingliz tili upper-intermediate."
          ],
          languages: ["O'zbek", "Rus", "Ingliz (upper-intermediate)"]
        },
        ja: {
          name: "アドハムベク・バホディロフ",
          title: "弁護士・リーガルコンサルタント・デューデリジェンス",
          bio: [
            "企業法務・契約・法務デューデリジェンスを専門。",
            "エネルギー業界と法律事務所で、会社設立、契約管理、規制対応を経験。",
            "国際法律事務所でクライアントを支援。ウズベク語・ロシア語、英語は中上級。"
          ],
          languages: ["ウズベク語", "ロシア語", "英語（中上級）"]
        }
      }
    },
    "7": {
      image: "Matnazarova.png",
      socials: [
        { label: "Telefon: +998 90 704 21 11", text: "☎", url: "tel:+998907042111" },
        { label: "LinkedIn", text: "in", url: "#" }
      ],
      translations: {
        en: {
          name: "Malika Matnazarova",
          title: "Lawyer / Court Legal Specialist",
          bio: [
            "Court-focused lawyer with experience as judge's assistant and law firm trainee.",
            "Prepares procedural documents, represents clients, and supports litigation teams.",
            "LL.B. Karakalpak State University; Uzbek, Russian; English intermediate."
          ],
          languages: ["Uzbek", "Russian", "English (intermediate)"]
        },
        ru: {
          name: "Малика Матназарова",
          title: "Юрист / судебный специалист",
          bio: [
            "Юрист, ориентированный на суды; работала помощником судьи и стажером в юрбюро.",
            "Готовит процессуальные документы, представляет клиентов и поддерживает судебные команды.",
            "LL.B. Каракалпакский госуниверситет; узбекский, русский, английский (средний)."
          ],
          languages: ["Узбекский", "Русский", "Английский (средний)"]
        },
        uz: {
          name: "Malika Matnazarova",
          title: "Yurist / sud huquqshunosi",
          bio: [
            "Sudlarga ixtisoslashgan yurist; sudya yordamchisi va advokatlik byurosi stajyori bo'lib ishlagan.",
            "Protsessual hujjatlar tayyorlaydi, mijozlarni vakillaydi va sud jamoalarini qo'llab-quvvatlaydi.",
            "LL.B. Qoraqalpoq Davlat Universiteti; o'zbek, rus; ingliz tili o'rta daraja."
          ],
          languages: ["O'zbek", "Rus", "Ingliz (o'rta daraja)"]
        },
        ja: {
          name: "マリカ・マトナザロワ",
          title: "弁護士・訴訟スペシャリスト",
          bio: [
            "裁判実務に強い弁護士。裁判官助手や法律事務所での研修経験あり。",
            "訴訟書面を作成し、クライアント代理や訴訟チームをサポート。",
            "カラカルパク国立大学LL.B。ウズベク語・ロシア語、英語は中級。"
          ],
          languages: ["ウズベク語", "ロシア語", "英語（中級）"]
        }
      }
    },
    "8": {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBSs48sXvRPglHu-cmtfUj71Vm8yCBzUqlvXfNfD8HMrd5ft7v1LgzpJzCDtzCnbyoakCHitZteGg3WMvAb-yD4F3JnLhXtMcACOavf-1drCajP9RPtSCkVdk3CrWE2olsvlpKjPqCAOBn_KjqsZYfYzGguOyMBzQ7at_OwGt0Nh1qsL2xwiMf8CECLegilaYH5A1QwArtA-H95Av172n5eEQIA4wp8DYWKqiV6CjPwnD3uPYGVqAiuGpFKsbr7Gs3tKy5LBvDFwl8",
      socials: [{ label: "LinkedIn", text: "in", url: "#" }],
      translations: {
        en: {
          name: "Umarjon Jumaniyazov",
          title: "Attorney / Mediator / Civil & Labor Law Lecturer",
          bio: [
            "Mediator and attorney specializing in civil and labor law; advises on pre-trial and trial strategies.",
            "LL.M. in Private Law (Mykolas Romeris University) and LL.B. TSUL; studied e-commerce and private international law.",
            "Over 100 clients supported; works in Uzbek, English, and Russian (working)."
          ],
          languages: ["Uzbek", "English", "Russian (working)"]
        },
        ru: {
          name: "Умаржон Жуманиязов",
          title: "Адвокат / медиатор / лектор по гражданскому и трудовому праву",
          bio: [
            "Адвокат и медиатор по гражданскому и трудовому праву; консультирует по досудебным и судебным стратегиям.",
            "LL.M. Private Law (Mykolas Romeris University) и LL.B. ТГЮУ; изучал e-commerce и международное частное право.",
            "Поддержал более 100 клиентов; работает на узбекском, английском, русском (рабочий)."
          ],
          languages: ["Узбекский", "Английский", "Русский (рабочий)"]
        },
        uz: {
          name: "Umarjon Jumaniyazov",
          title: "Advokat / mediator / fuqarolik va mehnat huquqi bo'yicha lektor",
          bio: [
            "Fuqarolik va mehnat huquqi bo'yicha advokat va mediator; sudgacha va sud jarayonlarida strategiya ishlab chiqadi.",
            "Mykolas Romeris Universitetida Private Law LL.M., TSULda LL.B.; e-commerce va xalqaro xususiy huquqni o'rgangan.",
            "100+ mijozni qo'llab-quvvatlagan; o'zbek, ingliz va rus (ishchi) tillarida ishlaydi."
          ],
          languages: ["O'zbek", "Ingliz", "Rus (ishchi)"]
        },
        ja: {
          name: "ウマルジョン・ジュマニヤゾフ",
          title: "弁護士・調停人・民事／労働法講師",
          bio: [
            "民事・労働法を専門とする弁護士兼メディエーター。訴訟前後の戦略を助言。",
            "ミコラス・ロメリス大学で私法LL.M、TSULでLL.B取得。eコマースと国際私法も学習。",
            "100件超のクライアントを支援。ウズベク語・英語・ロシア語（業務レベル）対応。"
          ],
          languages: ["ウズベク語", "英語", "ロシア語（業務レベル）"]
        }
      }
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

  if (!list || !items.length || !detailImg || !detailName || !detailTitle) {
    return;
  }

  const getLang = () => (document.documentElement.lang || "en").toLowerCase();

  const resolveMember = (memberId, lang) => {
    const member = teamData[memberId];
    if (!member) return null;
    const translations = member.translations || {};
    const content = translations[lang] || translations.en || Object.values(translations)[0];
    return { member, content };
  };

  const renderList = (lang) => {
    items.forEach((item) => {
      const memberId = item.getAttribute("data-member-id");
      const data = resolveMember(memberId, lang);
      if (!data) return;
      const titleEl = item.querySelector("h3");
      const subtitleEl = item.querySelector("p");
      if (titleEl) titleEl.textContent = data.content.name;
      if (subtitleEl) subtitleEl.textContent = data.content.title;
    });
  };

  const renderDetails = (memberId, lang) => {
    const data = resolveMember(memberId, lang);
    if (!data) return;
    const { member, content } = data;

    detailImg.src = member.image;
    detailImg.alt = content.name;
    detailName.textContent = content.name;
    detailTitle.textContent = content.title;

    detailBio.innerHTML = "";
    content.bio.forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      detailBio.appendChild(p);
    });

    detailExpertise.innerHTML = "";
    content.languages.forEach((lng) => {
      const li = document.createElement("li");
      li.textContent = lng;
      detailExpertise.appendChild(li);
    });

    detailSocial.innerHTML = "";
    (member.socials || []).forEach(({ label, url, text, title }) => {
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

  let activeId = items[0]?.getAttribute("data-member-id") || Object.keys(teamData)[0];
  const initialLang = getLang();
  renderList(initialLang);
  if (activeId) renderDetails(activeId, initialLang);

  list.addEventListener("click", (event) => {
    const item = event.target.closest(".team-list-item");
    if (!item || !list.contains(item)) return;
    const memberId = item.getAttribute("data-member-id");
    if (!memberId) return;
    activeId = memberId;
    renderDetails(memberId, getLang());
  });

  window.addEventListener("allegal:langchange", ({ detail }) => {
    const lang = (detail && detail.lang) || getLang();
    renderList(lang);
    renderDetails(activeId, lang);
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTeamPage, { once: true });
} else {
  initTeamPage();
}
