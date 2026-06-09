/* ===================================================================
   WHITE — Coffee House & Restaurant · interactions
   =================================================================== */
(function () {
  "use strict";

  /* ---- CONFIG ---------------------------------------------------- */
  // ⚠️ Replace with WHITE's real WhatsApp number (international, digits only)
  const WHATSAPP_NUMBER = "21600000000";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ================================================================
     LANGUAGE SWITCHER  (EN / FR / AR)
     ================================================================ */
  const LANGS = {
    en: {
      "nav-experience":"Experience","nav-menu":"Menu","nav-reviews":"Guest Voices",
      "nav-events":"Events","nav-discover":"Discover","nav-host":"Host an Event",
      "hero-eyebrow":"Av. 14 Janvier, Sidi Bou Said",
      "hero-t1":"Coffee, brunch &","hero-em":"blue","hero-t2":" Mediterranean days.",
      "hero-lede":"Sunlit mornings, all-day brunch and a blue-and-white terrace in Sidi Bou Said — where good coffee meets a generous Mediterranean table. This is WHITE.",
      "hero-demo-note":"* Note: This website is a demo of visuals and structure. Images and menu items are placeholders to be finalized in another step.",
      "btn-menu-hero":"See the Menu","btn-discover-hero":"Discover the House",
      "hero-scroll":"Scroll",
      "manifesto-kicker":"The House",
      "manifesto-title":`<span class="reveal-word">A</span> <span class="reveal-word">coffee.</span> <span class="reveal-word">A</span> <span class="reveal-word">table.</span> <span class="reveal-word manifesto__accent">A</span> <span class="reveal-word manifesto__accent">bright</span> <span class="reveal-word manifesto__accent">blue</span> <span class="reveal-word manifesto__accent">day.</span>`,
      "manifesto-body":"WHITE is a bright Mediterranean coffee house and restaurant — a place for slow mornings, long brunches and unhurried evenings. Clean blue-and-white rooms, generous plates, and the sea air of Sidi Bou Said in every corner.",
      "map-title":"Find us in Sidi Bou Said","map-sub":"WHITE · Av. 14 Janvier, Sidi Bou Said","map-btn":"Open in Maps",
      "exp-kicker":"The Experience","exp-title":"Four ways to live<br/>a day at WHITE",
      "exp1-t":"The Morning Café","exp1-p":"Freshly pulled coffee, warm bread and a sunlit start to the day.",
      "exp2-t":"All-Day Brunch","exp2-p":"Eggs benedict, waffles, bowls and fresh juices — served all day long.",
      "exp3-t":"The Table","exp3-p":"Burgers, fresh pasta, salads and grilled plates from a Mediterranean kitchen.",
      "exp4-t":"Sunset Sessions","exp4-p":"Fresh mojitos, signature coolers and the terrace at golden hour.",
      "menu-kicker":"The Kitchen","menu-title":"The WHITE<br/>menu",
      "menu-intro":"Bowls, salads, fresh pasta and Mediterranean plates — made fresh, served generously. Prices in Tunisian Dinar.",
      "menu-feature-t":"Fresh every day",
      "menu-feature-p":"A Mediterranean kitchen with a Tunisian heart — bowls, salads, pasta and grills, plus all-day brunch and homemade desserts.",
      "menu-feature-btn":"Book a table",
      "menu-note":"Menu & prices may vary seasonally · Ask our team about daily specials.",
      "reviews-title":"What our guests<br/>are saying",
      "feed-kicker":"The Feed","feed-follow":"Follow @white.tn",
      "events-kicker":"Events at WHITE","events-title":"Pick your<br/>experience",
      "events-intro":"From weekend brunches to golden-hour sessions — every gathering at WHITE is a table worth booking.",
      "events-upcoming":"Upcoming","events-recent":"Recent events","events-regular":"Every week at WHITE",
      "events-empty":"No upcoming events right now — new dates are being planned. Stay tuned ☀️",
      "ev1-when":"Every Friday","ev1-t":"Sunset Sessions","ev1-p":"Fresh coolers, a resident selector and the terrace at golden hour.",
      "ev2-when":"Weekends","ev2-t":"The Grand Brunch","ev2-p":"A generous Mediterranean spread — eggs, waffles, bowls, pastries and fresh juice.",
      "ev3-when":"Thursdays","ev3-t":"Pasta & Wine Night","ev3-p":"Fresh pasta, a glass of something nice, and easy evening sound.",
      "host-kicker":"Host an Event at WHITE","host-title":"Book a table<br/>or your event",
      "host-p":"Birthdays, baby showers, team lunches, workshops or a private terrace evening — tell us your idea and we'll make it happen.",
      "form-name":"Your name","form-phone":"Phone / WhatsApp","form-type":"Occasion","form-details":"Tell us more","form-submit":"Send on WhatsApp ↗",
      "discover-kicker":"Around the Bay","discover-title":"Your guide to<br/>Sidi Bou Said & beyond",
      "discover-intro":"More than a table — a little map of the most beautiful corners of the Tunis coast, from the WHITE team.",
      "tab-spots":"Photo Spots","tab-gems":"Hidden Gems","tab-nearby":"Nearby",
      "atmos-kicker":"Sidi Bou Said","atmos-title":"Blue & white,<br/>sunlit rooms,<br/>coastal air.",
      "atmos-body":"Everything at WHITE answers to the Mediterranean — the clean blue and white, the bright open rooms, the jasmine and salt in the evening air. A place made to slow down in, from the first coffee to the last plate.",
      "atmos-li1":"All-day brunch, served generously",
      "atmos-li2":"Mediterranean kitchen, Tunisian soul",
      "atmos-li3":"A terrace built around golden hour",
      "closing-kicker":"Av. 14 Janvier, Sidi Bou Said","closing-title":"Your table is <em>waiting</em>.",
      "closing-kicker":"Av. 14 Janvier, Sidi Bou Said","closing-title":"Your table is <em>waiting</em>.",
      "footer-visit":"Visit","footer-explore":"Explore","footer-connect":"Connect",
      "footer-hours":"8 AM – 1 AM everyday",
      "menu-cat-drinks":"Café & Boissons",
      "menu-cat-drinks-p":"Espresso · Cappuccino · Latte · Fresh juices · Smoothies · Milkshakes — full drinks menu coming soon.",
      "menu-cat-brunch":"Brunch",
      "menu-cat-brunch-p":"Eggs benedict · French toast · Pancakes · Açaí bowls · Avocado toast — full brunch menu coming soon.",
      "menu-cat-bowls":"Bowls & Salades",
      "menu-cat-sides":"Sides & Apéro",
      "menu-cat-pasta":"Pâtes",
      "menu-cat-plats":"Plats",
      "menu-cat-desserts":"Desserts",
      "menu-cat-desserts-p":"Tiramisu · Fondant chocolat · Cheesecake · Crème brûlée · Seasonal fruits — full dessert menu coming soon.",
      "mq-coffee": "Coffee",
      "mq-brunch": "Brunch",
      "mq-bowls": "Bowls",
      "mq-pasta": "Fresh Pasta",
      "mq-sunset": "Sunset Terrace",
      "story-kicker": "Our Story",
      "story-title": "The Story of WHITE",
      "story-p": "WHITE was born from a simple dream: to capture the unhurried magic of a Mediterranean morning and serve it on a plate. After years experiencing café cultures around the world, our founder returned to the shores of Sidi Bou Said to build a sanctuary. We obsess over every detail — from the precise temperature of our espresso to our sun-ripened local ingredients — so you can simply enjoy the moment. Pull up a chair and be a part of our story.",
      "story-map": "Find Us in Sidi Bou Said",
      "rev1-date": "2 months ago",
      "rev1-p": "“The bowls are excellent and generous, the truffle pasta a delight. Beautiful blue and white setting, perfect for lunch with friends.”",
      "rev2-date": "Local Guide · 4 months ago",
      "rev3-date": "3 months ago",
      "rev4-date": "Local Guide · 1 year ago",
      "rev4-p": "“Very good value for money, generous portions and well-presented dishes. The sea bream fillet with guacamole was perfect.”",
      "rev5-date": "6 months ago",
      "rev6-date": "Local Guide · 8 months ago",
      "rev6-p": "“A beautiful discovery in Sidi Bou Said. Fresh, bright decor, and a varied menu. Perfect for a family brunch on the weekend.”",
      "rev-cuisine": "Food",
      "rev-service": "Service",
      "rev-ambiance": "Atmosphere",
      "m1-t": "Vegetarian Bowl",
      "m1-p": "Bulgur base, avocado, spinach, cucumber, kefta.",
      "m2-t": "Mexican Bowl",
      "m2-p": "Rice, guacamole, peppers, carrot, corn, red beans, grilled chicken, cheese sauce.",
      "m3-t": "Thai Bowl",
      "m3-p": "Rice, carrot, peppers, sirloin, red cabbage, broccoli, peanut sauce.",
      "m4-t": "Salade César",
      "m4-p": "Mixed leaves, tomato, grilled chicken, croutons, grana, Caesar sauce, grilled beef bacon.",
      "m5-t": "Salade Poulet Avocat",
      "m5-p": "Chicken, avocado, baby mozzarella, raspberry vinaigrette.",
      "m6-t": "Salade Chèvre Chaud Panée",
      "m6-p": "Rocket, breaded warm goat cheese, raspberry vinaigrette, pita chips.",
      "m7-t": "Salade Burrata Pêche",
      "m7-p": "Rocket, grilled peach, cherry tomato, burrata, pesto, walnuts.",
      "m8-t": "Spaghetti Bolognese",
      "m8-p": "Classic authentic Spaghetti Bolognese with rich, deep red, meaty ragu sauce and parmesan.",
      "m9-t": "Penne Poulet Panné",
      "m9-p": "Breaded chicken, spinach, pesto, blue cheese.",
      "m10-t": "Penne Saumon Sauce Rosé",
      "m10-p": "Fresh salmon, creamy rosé sauce.",
      "m11-t": "Spaghetti Faux Filet, Truffes",
      "m11-p": "Sirloin, rich truffle sauce, grana padano.",
      "m12-t": "Spaghetti Fruits de Mer",
      "m12-p": "Fresh seafood mix, garlic, olive oil, parsley.",
      "m13-t": "Émincé de Poulet",
      "m13-p": "Baby potatoes, rocket, cherry tomato, rice, creamy chicken &amp; mushrooms.",
      "m14-t": "Émincé de Bœuf",
      "m14-p": "Baby potatoes, rocket, cherry tomato, rice, creamy sirloin &amp; mushrooms.",
      "m15-t": "Suprême de Poulet Grillé",
      "m15-p": "Baby potatoes, rocket, cherry tomato, rice, grilled chicken, melted mozzarella.",
      "m16-t": "Plat Poulet Pané",
      "m16-p": "Baby potatoes, rocket, cherry tomato, rice, panko chicken, melted mozzarella.",
      "m17-t": "Brochette de Bœuf",
      "m17-p": "Baby potatoes, rocket, cherry tomato, rice, beef skewer, chimichurri.",
      "m18-t": "Brochette de Poulet",
      "m18-p": "Baby potatoes, rocket, cherry tomato, rice, peanut chicken skewer, peanut-butter yoghurt sauce.",
      "m19-t": "Filet de Daurade",
      "m19-p": "Sea bream fillet, guacamole, pita chips.",
      "m20-t": "Filet de Bœuf",
      "m20-p": "Beef fillet — choose grilled, truffle or pepper sauce."
    },
    fr: {
      "nav-experience":"Expérience","nav-menu":"Menu","nav-reviews":"Avis Clients",
      "nav-events":"Événements","nav-discover":"Découvrir","nav-host":"Réserver",
      "hero-eyebrow":"Av. 14 Janvier, Sidi Bou Said",
      "hero-t1":"Café, brunch &","hero-em":"jours","hero-t2":" bleus de Méditerranée.",
      "hero-lede":"Matins ensoleillés, brunch toute la journée et une terrasse bleu et blanc à Sidi Bou Said — où le bon café rencontre une table méditerranéenne généreuse. Voici WHITE.",
      "hero-demo-note":"* Note : Ce site web est une démo de structure et d'identité visuelle. Les images et le menu sont donnés à titre d'exemple et seront finalisés lors d'une prochaine étape.",
      "btn-menu-hero":"Voir le Menu","btn-discover-hero":"Découvrir la Maison",
      "hero-scroll":"Défiler",
      "manifesto-kicker":"La Maison",
      "manifesto-title":`<span class="reveal-word">Un</span> <span class="reveal-word">café.</span> <span class="reveal-word">Une</span> <span class="reveal-word">table.</span> <span class="reveal-word manifesto__accent">Une</span> <span class="reveal-word manifesto__accent">belle</span> <span class="reveal-word manifesto__accent">journée</span> <span class="reveal-word manifesto__accent">bleue.</span>`,
      "manifesto-body":"WHITE est un café-restaurant méditerranéen lumineux — un lieu pour les matins doux, les longs brunchs et les soirées sans hâte. Des salles bleu et blanc, des assiettes généreuses, et l'air marin de Sidi Bou Said partout.",
      "map-title":"Retrouvez-nous à Sidi Bou Said","map-sub":"WHITE · Av. 14 Janvier, Sidi Bou Said","map-btn":"Ouvrir dans Maps",
      "exp-kicker":"L'Expérience","exp-title":"Quatre façons de vivre<br/>une journée à WHITE",
      "exp1-t":"Le Café du Matin","exp1-p":"Café fraîchement préparé, pain chaud et un réveil ensoleillé.",
      "exp2-t":"Brunch Toute la Journée","exp2-p":"Œufs bénédicte, gaufres, bowls et jus frais — servis toute la journée.",
      "exp3-t":"La Table","exp3-p":"Burgers, pâtes fraîches, salades et grillades d'une cuisine méditerranéenne.",
      "exp4-t":"Sessions Coucher de Soleil","exp4-p":"Mojitos frais, coolers signature et la terrasse à l'heure dorée.",
      "menu-kicker":"La Cuisine","menu-title":"Le menu<br/>WHITE",
      "menu-intro":"Bowls, salades, pâtes fraîches et plats méditerranéens — faits maison, servis généreusement. Prix en Dinar Tunisien.",
      "menu-feature-t":"Frais chaque jour",
      "menu-feature-p":"Une cuisine méditerranéenne au cœur tunisien — bowls, salades, pâtes et grillades, plus le brunch toute la journée et des desserts maison.",
      "menu-feature-btn":"Réserver une table",
      "menu-note":"Menu & prix susceptibles de varier selon la saison · Demandez nos suggestions du jour.",
      "reviews-title":"Ce que disent<br/>nos clients",
      "feed-kicker":"Le Feed","feed-follow":"Suivre @white.tn",
      "events-kicker":"Événements à WHITE","events-title":"Choisissez votre<br/>expérience",
      "events-intro":"Des brunchs du week-end aux sessions crépusculaires — chaque rendez-vous à WHITE est une table à réserver.",
      "events-upcoming":"À venir","events-recent":"Événements récents","events-regular":"Chaque semaine à WHITE",
      "events-empty":"Aucun événement à venir pour l'instant — de nouvelles dates se préparent. Restez à l'écoute ☀️",
      "ev1-when":"Chaque vendredi","ev1-t":"Sessions Coucher de Soleil","ev1-p":"Coolers frais, un selector résident et la terrasse à l'heure dorée.",
      "ev2-when":"Week-ends","ev2-t":"Le Grand Brunch","ev2-p":"Un généreux buffet méditerranéen — œufs, gaufres, bowls, viennoiseries et jus frais.",
      "ev3-when":"Jeudis","ev3-t":"Soirée Pâtes & Vin","ev3-p":"Pâtes fraîches, un bon verre et une ambiance douce en soirée.",
      "host-kicker":"Organisez votre événement à WHITE","host-title":"Réservez une table<br/>ou votre événement",
      "host-p":"Anniversaires, baby showers, déjeuners d'équipe, ateliers ou une soirée privée en terrasse — dites-nous votre idée et on s'occupe du reste.",
      "form-name":"Votre nom","form-phone":"Téléphone / WhatsApp","form-type":"Occasion","form-details":"Dites-nous-en plus","form-submit":"Envoyer sur WhatsApp ↗",
      "discover-kicker":"Autour de la baie","discover-title":"Votre guide de<br/>Sidi Bou Said & au-delà",
      "discover-intro":"Plus qu'une table — une petite carte des plus beaux coins de la côte de Tunis, par l'équipe WHITE.",
      "tab-spots":"Spots Photo","tab-gems":"Trésors Cachés","tab-nearby":"À Proximité",
      "atmos-kicker":"Sidi Bou Said","atmos-title":"Bleu & blanc,<br/>salles lumineuses,<br/>air côtier.",
      "atmos-body":"Tout à WHITE répond à la Méditerranée — le bleu et blanc épuré, les salles ouvertes et lumineuses, le jasmin et le sel dans l'air du soir. Un lieu fait pour ralentir, du premier café à la dernière assiette.",
      "atmos-li1":"Brunch toute la journée, servi généreusement",
      "atmos-li2":"Cuisine méditerranéenne, âme tunisienne",
      "atmos-li3":"Une terrasse pensée pour l'heure dorée",
      "closing-kicker":"Av. 14 Janvier, Sidi Bou Said","closing-title":"Votre table vous <em>attend</em>.",
      "closing-kicker":"Av. 14 Janvier, Sidi Bou Said","closing-title":"Votre table vous <em>attend</em>.",
      "footer-visit":"Visiter","footer-explore":"Explorer","footer-connect":"Contact",
      "footer-hours":"Tous les jours · 8h00 – 1h00",
      "menu-cat-drinks":"Café & Boissons",
      "menu-cat-drinks-p":"Espresso · Cappuccino · Latte · Jus frais · Smoothies · Milkshakes — menu complet de boissons à venir.",
      "menu-cat-brunch":"Brunch",
      "menu-cat-brunch-p":"Œufs bénédicte · Pain perdu · Pancakes · Açaí bowls · Avocado toast — menu complet brunch à venir.",
      "menu-cat-bowls":"Bowls & Salades",
      "menu-cat-sides":"Sides & Apéro",
      "menu-cat-pasta":"Pâtes",
      "menu-cat-plats":"Plats",
      "menu-cat-desserts":"Desserts",
      "menu-cat-desserts-p":"Tiramisu · Fondant au chocolat · Cheesecake · Crème brûlée · Fruits de saison — menu complet desserts à venir.",
      "mq-coffee": "Café",
      "mq-brunch": "Brunch",
      "mq-bowls": "Bowls",
      "mq-pasta": "Pâtes Fraîches",
      "mq-sunset": "Terrasse au Couchant",
      "story-kicker": "Notre Histoire",
      "story-title": "L'Histoire de WHITE",
      "story-p": "WHITE est né d'un rêve simple : capturer la magie paisible d'une matinée méditerranéenne et la servir dans une assiette. Après des années à découvrir la culture des cafés à travers le monde, notre fondateur est revenu sur les côtes de Sidi Bou Said pour bâtir un sanctuaire. Nous veillons à chaque détail — de la température précise de notre espresso à nos ingrédients locaux gorgés de soleil — pour que vous puissiez simplement profiter de l'instant. Prenez place et faites partie de notre histoire.",
      "story-map": "Retrouvez-nous à Sidi Bou Said",
      "rev1-date": "il y a 2 mois",
      "rev1-p": "« Les bowls sont excellents et copieux, les pâtes aux truffes un délice. Cadre bleu et blanc magnifique, parfait pour déjeuner entre amis. »",
      "rev2-date": "Local Guide · il y a 4 mois",
      "rev3-date": "il y a 3 mois",
      "rev4-date": "Local Guide · il y a 1 an",
      "rev4-p": "« Très bon rapport qualité-prix, portions généreuses et plats bien présentés. Le filet de daurade au guacamole était parfait. »",
      "rev5-date": "il y a 6 mois",
      "rev6-date": "Local Guide · il y a 8 mois",
      "rev6-p": "« Une belle découverte à Sidi Bou Said. Décor frais, lumineux, et une carte variée. Parfait pour un brunch en famille le week-end. »",
      "rev-cuisine": "Cuisine",
      "rev-service": "Service",
      "rev-ambiance": "Ambiance",
      "m1-t": "Vegetarian Bowl",
      "m2-t": "Mexican Bowl",
      "m3-t": "Thai Bowl",
      "m4-t": "Salade César",
      "m5-t": "Salade Poulet Avocat",
      "m6-t": "Salade Chèvre Chaud Panée",
      "m7-t": "Salade Burrata Pêche",
      "m8-t": "Spaghetti Bolognese",
      "m9-t": "Penne Poulet Panné",
      "m10-t": "Penne Saumon Sauce Rosé",
      "m11-t": "Spaghetti Faux Filet, Truffes",
      "m12-t": "Spaghetti Fruits de Mer",
      "m13-t": "Émincé de Poulet",
      "m14-t": "Émincé de Bœuf",
      "m15-t": "Suprême de Poulet Grillé",
      "m16-t": "Plat Poulet Pané",
      "m17-t": "Brochette de Bœuf",
      "m18-t": "Brochette de Poulet",
      "m19-t": "Filet de Daurade",
      "m20-t": "Filet de Bœuf",
      "m1-p": "Base de boulgour, avocat, épinards, concombre, kefta.",
      "m2-p": "Riz, guacamole, poivrons, carotte, maïs, haricots rouges, poulet grillé, sauce fromagère.",
      "m3-p": "Riz, carotte, poivrons, faux-filet, chou rouge, brocoli, sauce cacahuète.",
      "m4-p": "Mélange de salades, tomate, poulet grillé, croûtons, grana, sauce César, bacon de bœuf grillé.",
      "m5-p": "Poulet, avocat, billes de mozzarella, vinaigrette à la framboise.",
      "m6-p": "Mélange de salades, tomates cerises, burrata, basilic, fruits rouges, crème balsamique.",
      "m7-p": "Mélange de salades, tomates cerises, toast de chèvre chaud, noix, figues, vinaigrette au miel.",
      "m8-p": "Poulet, cheddar, guacamole, chips, crème fraîche.",
      "m9-p": "Bœuf, cheddar, guacamole, chips, crème fraîche.",
      "m10-p": "Servis avec sauce marinara.",
      "m11-p": "Servi avec sauce chili douce.",
      "m12-p": "Crevettes croustillantes, sauce dynamite épicée.",
      "m13-p": "Frites, sauce cheddar, viande hachée.",
      "m14-p": "Penne, sauce pesto, poulet, parmesan, tomates cerises.",
      "m15-p": "Spaghetti, crevettes, calamars, moules, bisque, tomates cerises.",
      "m16-p": "Saumon frais, sauce rosée onctueuse.",
      "m17-p": "Ail, huile d'olive, flocons de piment, persil.",
      "m18-p": "Sauce crémeuse aux champignons, poulet, parmesan.",
      "m19-p": "Viande hachée mijotée, sauce tomate, parmesan.",
      "m20-p": "Sauce tomate épicée, ail, persil.",
      "m21-p": "Pommes grenailles, roquette, tomates cerises, riz, poulet et champignons à la crème.",
      "m22-p": "Pommes grenailles, roquette, tomates cerises, riz, faux-filet et champignons à la crème.",
      "m23-p": "Escalope de poulet croustillante, frites, petite salade.",
      "m24-p": "Blanc de poulet grillé, riz, légumes rôtis.",
      "m25-p": "Filet de daurade, guacamole, chips de pita."
    }
  };

  const applyLang = (lang) => {
    const dict = LANGS[lang];
    if (!dict) return;
    $$("[data-i18n]").forEach(el => {
      if (dict[el.dataset.i18n] !== undefined) el.textContent = dict[el.dataset.i18n];
    });
    $$("[data-i18n-html]").forEach(el => {
      const key = el.dataset.i18nHtml;
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
        if (el.classList.contains("manifesto__text")) {
          const rect = el.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < innerHeight) {
            $$(".reveal-word", el).forEach((w, i) =>
              setTimeout(() => w.classList.add("is-in"), i * 70));
          }
        }
      }
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    $$(".nav__lang-btn").forEach(b => b.classList.toggle("is-active", b.dataset.lang === lang));
    sessionStorage.setItem("white_lang", lang);
  };

  $$(".nav__lang-btn").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));
  const _savedLang = sessionStorage.getItem("white_lang");
  if (_savedLang && _savedLang !== "en") applyLang(_savedLang);

  /* ================================================================
     PRELOADER
     ================================================================ */
  window.addEventListener("load", () => {
    setTimeout(() => {
      $("#preloader").classList.add("is-done");
      document.body.classList.add("is-loaded");
    }, 1400);
  });

  /* ================================================================
     YEAR
     ================================================================ */
  $("#year").textContent = new Date().getFullYear();

  /* ================================================================
     NAV — scroll state
     ================================================================ */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ================================================================
     MOBILE MENU
     ================================================================ */
  const burger = $("#burger");
  const mobilemenu = $("#mobilemenu");
  const syncBurger = () => burger.classList.toggle("is-active", mobilemenu.classList.contains("is-open"));
  burger.addEventListener("click", () => { mobilemenu.classList.toggle("is-open"); syncBurger(); });
  $$(".mobilemenu__links a").forEach(a =>
    a.addEventListener("click", () => { mobilemenu.classList.remove("is-open"); syncBurger(); })
  );

  /* ================================================================
     CUSTOM CURSOR
     ================================================================ */
  const dot = $(".cursor-dot"), ring = $(".cursor-ring");
  if (matchMedia("(hover:hover)").matches) {
    let rx = 0, ry = 0, dx = 0, dy = 0;
    window.addEventListener("mousemove", e => {
      dx = e.clientX; dy = e.clientY;
      dot.style.transform = `translate(${dx}px,${dy}px) translate(-50%,-50%)`;
    });
    const loop = () => {
      rx += (dx - rx) * 0.18; ry += (dy - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.addEventListener("mouseover", e => {
      if (e.target.closest("[data-cursor='hover'],a,button,input,textarea,label"))
        ring.classList.add("is-hover");
    });
    document.addEventListener("mouseout", e => {
      if (e.target.closest("[data-cursor='hover'],a,button,input,textarea,label"))
        ring.classList.remove("is-hover");
    });
  }

  /* ================================================================
     SCROLL REVEAL
     ================================================================ */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });
  $$(".reveal").forEach(el => io.observe(el));
  $$(".reveal-zoom").forEach(el => io.observe(el));

  /* ── Menu accordion toggle ── */
  $$(".menu__group-title").forEach(title => {
    title.addEventListener("click", () => {
      const group = title.closest(".menu__group");
      group.classList.toggle("is-open");
    });
  });

  /* word-by-word manifesto */
  const wio = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        $$(".reveal-word", en.target).forEach((w, i) => {
          setTimeout(() => w.classList.add("is-in"), i * 70);
        });
        wio.unobserve(en.target);
      }
    });
  }, { threshold: 0.4 });
  $$(".manifesto__text").forEach(el => wio.observe(el));

  /* ================================================================
     PARALLAX
     ================================================================ */
  let ticking = false;
  const parallax = () => {
    $$("[data-parallax]").forEach(box => {
      const r = box.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const speed = parseFloat(box.dataset.speed) || -0.5;
      const img = box.querySelector("img") || box;
      const shift = (r.top - innerHeight / 2) * speed;
      img.style.transform = `translateY(${shift}px) scale(1.12)`;
    });
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(parallax); ticking = true; }
  }, { passive: true });
  parallax();

  /* ================================================================
     DISCOVER TABS
     ================================================================ */
  $$(".discover__tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const t = tab.dataset.tab;
      $$(".discover__tab").forEach(x => x.classList.toggle("is-active", x === tab));
      $$(".discover__panel").forEach(p =>
        p.classList.toggle("is-active", p.dataset.panel === t));
    });
  });

  /* ================================================================
     EVENTS — auto upcoming / recent by date + registration
     ----------------------------------------------------------------
     Add events to WHITE_EVENTS below. Each one shows under "Upcoming"
     with a registration button until its date passes — then it moves
     itself to "Recent events" automatically.
     ================================================================ */
  const WHITE_EVENTS = [
    // {
    //   date: "2026-07-12",
    //   tag: "Brunch Live",
    //   title: "Brunch &<br/>live acoustic",
    //   desc: "Le grand brunch WHITE avec musique acoustique en live sur la terrasse.",
    //   img: "img/brunch-eggs.jpg",
    //   price: "45 DT",
    //   details: ["🕐 09:00 – 13:00", "👥 Sur réservation", "🎶 Live acoustic"]
    // }
  ];

  const upcomingGrid = $("#upcomingGrid");
  if (upcomingGrid) {
    const MONTHS_FR = ["Jan","Fév","Mars","Avr","Mai","Juin","Juil","Août","Sept","Oct","Nov","Déc"];
    const recentGrid    = $("#recentGrid");
    const recentWrap    = $("#recentWrap");
    const upcomingEmpty = $("#upcomingEmpty");

    const today = new Date(); today.setHours(0, 0, 0, 0);
    const parseDate = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };

    const upcoming = [], past = [];
    WHITE_EVENTS.forEach(ev => {
      const d = parseDate(ev.date);
      (d < today ? past : upcoming).push(Object.assign({ _d: d }, ev));
    });
    upcoming.sort((a, b) => a._d - b._d);
    past.sort((a, b) => b._d - a._d);

    const dateBlock = (d) =>
      `<div class="upcoming-event__date"><span class="ue-day">${String(d.getDate()).padStart(2, "0")}</span><span class="ue-month">${MONTHS_FR[d.getMonth()]}</span></div>`;

    const registerLink = (ev) =>
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Bonjour WHITE ☀️ Je souhaite m'inscrire à l'événement « ${ev.tag} » du ${String(ev._d.getDate()).padStart(2, "0")} ${MONTHS_FR[ev._d.getMonth()]} ${ev._d.getFullYear()}.`
      )}`;

    const detailsHtml = (ev) =>
      (ev.details && ev.details.length)
        ? `<div class="upcoming-event__details">${ev.details.map(x => `<span>${x}</span>`).join("")}</div>`
        : "";

    const upcomingCard = (ev) =>
`<article class="upcoming-event" data-cursor="hover">
  <div class="upcoming-event__poster">
    <img src="${ev.img}" alt="${ev.tag} — WHITE" loading="lazy" decoding="async" />
    ${ev.price ? `<div class="upcoming-event__badge">${ev.price}</div>` : ""}
  </div>
  <div class="upcoming-event__body">
    ${dateBlock(ev._d)}
    <div class="upcoming-event__info">
      <span class="upcoming-event__tag">${ev.tag}</span>
      <h3>${ev.title}</h3>
      <p>${ev.desc}</p>
      ${detailsHtml(ev)}
      <a class="btn btn--solid btn--sm upcoming-event__register" href="${registerLink(ev)}" target="_blank" rel="noopener" data-cursor="hover">S'inscrire ↗</a>
    </div>
  </div>
</article>`;

    const pastCard = (ev) =>
`<article class="upcoming-event upcoming-event--past" data-cursor="hover">
  <div class="upcoming-event__poster">
    <img src="${ev.img}" alt="${ev.tag} — WHITE" loading="lazy" decoding="async" />
    <div class="upcoming-event__badge upcoming-event__badge--done">Terminé</div>
  </div>
  <div class="upcoming-event__body">
    ${dateBlock(ev._d)}
    <div class="upcoming-event__info">
      <span class="upcoming-event__tag">${ev.tag}</span>
      <h3>${ev.title}</h3>
      <p>${ev.desc}</p>
    </div>
  </div>
</article>`;

    if (upcoming.length) {
      upcomingGrid.innerHTML = upcoming.map(upcomingCard).join("");
      if (upcomingEmpty) upcomingEmpty.hidden = true;
    } else if (upcomingEmpty) {
      upcomingEmpty.hidden = false;
    }

    if (past.length && recentGrid && recentWrap) {
      recentGrid.innerHTML = past.map(pastCard).join("");
      recentWrap.hidden = false;
    }

    $$(".upcoming-event").forEach(el => { el.classList.add("reveal"); io.observe(el); });
  }

  /* ================================================================
     GUEST VOICES — seamless moving marquee
     ================================================================ */
  const reviewsTrack = $("#reviewsTrack");
  if (reviewsTrack && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    $$(".review-card", reviewsTrack).forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      reviewsTrack.appendChild(clone);
    });
  }

  /* ================================================================
     EXPERIENCE GALLERY — repeat the photos into extra rows (desktop)
     and a seamless sliding strip (mobile). Keep exactly 3 identical
     copies so the mobile marquee loops at -33.333%.
     ================================================================ */
  const galleryTrack = $(".gallery-track");
  if (galleryTrack) {
    const originals = $$(".gallery-item", galleryTrack);
    for (let pass = 0; pass < 2; pass++) {
      originals.forEach(item => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        galleryTrack.appendChild(clone);
      });
    }
  }

  /* ================================================================
     WHATSAPP INLINE FORM
     ================================================================ */
  const waForm = (form, buildMsg) => {
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const f = new FormData(form);
      const status = form.querySelector(".leadform__status");
      const btn = form.querySelector("button[type='submit']");
      
      if (btn) btn.classList.add("is-loading");
      
      setTimeout(() => {
        if (btn) {
          btn.classList.remove("is-loading");
          btn.classList.add("is-success");
        }
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMsg(f))}`, "_blank");
        status.textContent = "Sent! Our team will get back to you shortly ✨";
        form.reset();
        
        setTimeout(() => {
          if (btn) btn.classList.remove("is-success");
        }, 2500);
      }, 800);
    });
  };

  waForm($("#eventProposeForm"), (f) =>
`Booking / event request — WHITE ☀️

Name: ${f.get("name")}
Phone: ${f.get("phone")}
Occasion: ${f.get("type")}
Details: ${f.get("details") || "—"}`);

  /* ================================================================
     AI WHATSAPP CONCIERGE
     ================================================================ */
  const fab        = $("#conciergeFab");
  const concierge  = $("#concierge");
  const body       = $("#conciergeBody");
  const cForm      = $("#conciergeForm");
  const cText      = $("#conciergeText");
  const handoff    = $("#conciergeHandoff");

  const baseWa = (text) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text || "Hello WHITE ☀️")}`;
  handoff.href = baseWa();

  const toggleConcierge = (open) => {
    concierge.classList.toggle("is-open", open);
    fab.classList.toggle("is-hidden", open);
    if (open) setTimeout(() => cText.focus(), 300);
  };
  fab.addEventListener("click", () => toggleConcierge(true));
  $("#conciergeClose").addEventListener("click", () => toggleConcierge(false));
  $$("[data-open-concierge]").forEach(b =>
    b.addEventListener("click", e => { e.preventDefault(); toggleConcierge(true); }));

  const addBubble = (text, who = "bot") => {
    const b = document.createElement("div");
    b.className = `bubble bubble--${who}`;
    b.innerHTML = text;
    body.appendChild(b);
    body.scrollTop = body.scrollHeight;
    return b;
  };
  const typing = () => {
    const t = document.createElement("div");
    t.className = "concierge__typing";
    t.innerHTML = "<span></span><span></span><span></span>";
    body.appendChild(t);
    body.scrollTop = body.scrollHeight;
    return t;
  };

  // Lightweight intent engine (front-end demo of the AI concierge).
  const KB = [
    { k: ["hello","hi","hey","salut","bonjour","ahla","marhba"],
      a: "Welcome to WHITE ☀️ I can help with the menu, brunch, opening hours, booking a table, or getting here — just ask!" },

    { k: ["hour","open","close","ouvert","horaire","quand","when","schedule"],
      a: "We're open <b>every day from 08:00 until late</b> ☀️ Morning café, all-day brunch, lunch, dinner and sunset sessions — all in one place." },

    { k: ["brunch","breakfast","morning","petit-déj","déjeuner"],
      a: "Brunch is the heart of WHITE 🍳 Served <b>all day</b>, with eggs benedict on waffles, bowls, fresh juices and homemade pastries. The Grand Brunch runs every weekend from 09:00." },

    { k: ["menu","food","eat","dish","plat","carte","manger","bowl","pasta","pâtes","salad","salade","burger"],
      a: "Our kitchen is Mediterranean with a Tunisian soul 🍽️ Bowls (22–28 DT), salads (18–32 DT), fresh pasta (20–39 DT), grills and plats (22–48 DT), plus all-day brunch & desserts. Scroll to the <b>Menu</b> section for the full list." },

    { k: ["vegetarian","vegan","végé","veggie"],
      a: "Yes 🌱 The Vegetarian Bowl (bulgur, avocado, spinach), several salads and veggie pasta are all on the menu — just ask our team for the day's options." },

    { k: ["book","reservation","reserve","réserver","table","booking"],
      a: "Happy to help you book a table 🪑 Tap below to message us on WhatsApp with your date, time and number of guests.",
      cta: { label: "Book on WhatsApp", act: () => window.open(baseWa("Hello WHITE ☀️ I'd like to book a table"), "_blank") } },

    { k: ["sunset","golden","coucher","terrasse","terrace"],
      a: "Golden hour on the terrace is a favourite 🌇 Fresh mojitos and coolers, easy sound, and the best light of the day. Sunset Sessions every Friday from 18:00." },

    { k: ["event","private","birthday","anniversaire","baby shower","celebration","party","atelier","workshop"],
      a: "We host birthdays, baby showers, team lunches, workshops and private terrace evenings 🎉 Tell us your idea and we'll make it happen.",
      cta: { label: "Plan an event", act: () => window.open(baseWa("Hello WHITE ☀️ I'd like to enquire about hosting an event 🎉"), "_blank") } },

    { k: ["coffee","cafe","café","latte","cappuccino"],
      a: "Freshly pulled coffee from 08:00 ☕ Espresso, cappuccino, lattes and homemade milkshakes — the perfect start to a day in Sidi Bou Said." },

    { k: ["dessert","sweet","milkshake","cake","gâteau","french toast"],
      a: "Sweet tooth? 🍫 Homemade milkshakes, French toast with berries, and a rotating selection of desserts. Ask our team about today's." },

    { k: ["where","location","address","get there","direction","find","adresse","comment","map"],
      a: "We're in <b>Sidi Bou Said</b>, on the Tunis coast — moments from the sea 📍",
      cta: { label: "Open in Maps", act: () => window.open("https://www.google.com/maps/search/?api=1&query=La+Marsa+Tunis","_blank") } },

    { k: ["parking","car","voiture"],
      a: "Street parking is available nearby 🚗 Evenings and weekends get busy, so arriving a little early helps." },

    { k: ["wifi","password","internet","travailler","work"],
      a: "Yes, we have WiFi 📶 WHITE is a lovely spot to work or catch up — just ask our team for the password." },

    { k: ["price","cost","how much","expensive","combien","tarif","prix"],
      a: "Bowls 22–28 DT, salads 18–32 DT, pasta 20–39 DT, plats 22–48 DT, sides from 4.5 DT 💙 Prices in Tunisian Dinar." },

    { k: ["instagram","insta","follow","social"],
      a: "Follow us on Instagram <b>@white.tn</b> for the latest plates, events and sunsets 📸" }
  ];

  const respond = (text) => {
    const q = text.toLowerCase();
    const hit = KB.find(item => item.k.some(k => q.includes(k)));
    const t = typing();
    setTimeout(() => {
      t.remove();
      if (hit) {
        addBubble(hit.a);
        if (hit.cta) {
          const wrap = document.createElement("div");
          wrap.className = "concierge__quick";
          const btn = document.createElement("button");
          btn.textContent = hit.cta.label;
          btn.addEventListener("click", hit.cta.act);
          wrap.appendChild(btn);
          body.appendChild(wrap);
        }
      } else {
        addBubble("Great question — let me connect you to our team on WhatsApp so we can help you properly. 💬");
        const wrap = document.createElement("div");
        wrap.className = "concierge__quick";
        const btn = document.createElement("button");
        btn.textContent = "Chat on WhatsApp";
        btn.addEventListener("click", () => window.open(baseWa("Hello WHITE ☀️ I have a question: " + text), "_blank"));
        wrap.appendChild(btn);
        body.appendChild(wrap);
      }
      handoff.href = baseWa("Hello WHITE ☀️ " + text);
      body.scrollTop = body.scrollHeight;
    }, 700 + Math.random() * 500);
  };

  cForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = cText.value.trim();
    if (!v) return;
    addBubble(v, "user");
    cText.value = "";
    respond(v);
  });

  const quickMap = {
    hours: "What are your opening hours?",
    brunch: "Tell me about brunch",
    book: "I'd like to book a table",
    menu: "What's on the menu?",
    getthere: "How do I get there?"
  };
  $("#conciergeQuick").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-q]");
    if (!b) return;
    const text = quickMap[b.dataset.q];
    addBubble(text, "user");
    respond(text);
  });

  /* gentle auto-invite after 12s (once per session) */
  if (!sessionStorage.getItem("white_greeted")) {
    setTimeout(() => {
      if (!concierge.classList.contains("is-open")) {
        fab.style.animation = "pulse 1s 3";
      }
      sessionStorage.setItem("white_greeted", "1");
    }, 12000);
  }

})();

