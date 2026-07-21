(function () {
  "use strict";

  /* ============ translations ============ */
  var translations = {
    en: {
      "nav.work": "Work",
      "nav.about": "About",
      "nav.trace": "Traçe",
      "nav.contact": "Contact",
      "nav.available": "Available for work",

      "hero.eyebrow": "Portfolio — 2026",
      "hero.selected": "Selected",
      "hero.line1": "DESIGN",
      "hero.line2": "WITH",
      "hero.line3": "INTENTION.",
      "hero.desc": "UI/UX, brand &amp; social media design — turning ideas into interfaces and identities people notice.",
      "hero.cta": "View Work",
      "hero.scroll": "Scroll",

      "about.eyebrow": "01 — About",
      "about.title": "Who I am",
      "about.p1": "I'm a visual and product designer at the very start of my career, focused on turning ideas into clean, purposeful interfaces and brands.",
      "about.p2": "I don't have professional experience yet — what I do have is a growing body of independent work across branding, social media and UI design, and a genuine obsession with getting the small details right. Right now I'm designing and building my first app end-to-end: Traçe.",
      "about.skill1": "UI / UX Design",
      "about.skill2": "Brand Identity",
      "about.skill3": "Social Media Design",
      "about.skill4": "Art Direction",
      "about.skill5": "Product Thinking",

      "work.eyebrow": "02 — Selected Work",
      "work.title": "Projects",
      "work.hint": "Hover over a project name to preview it on the side.",

      "projects.branding.name": "Branding",
      "projects.branding.category": "Brand Identity — Traçe",
      "projects.carousel.name": "Instagram Carousel",
      "projects.carousel.category": "Social Media Design",
      "projects.landing.name": "Landing Page",
      "projects.landing.category": "Web Design — TaskFlow",
      "projects.post.name": "Instagram Post",
      "projects.post.category": "Social Media — RAWBRAND",
      "projects.poster.name": "Poster",
      "projects.poster.category": "Poster Design — RAWBRAND",
      "projects.card.name": "Product Card",
      "projects.card.category": "UI Design — E-commerce",
      "projects.thumb.name": "Thumbnail",
      "projects.thumb.category": "Cover Design",

      "trace.eyebrow": "03 — In Progress",
      "trace.title": "Traçe",
      "trace.tag": "Your Trace. Your Style.",
      "trace.caption": "Work in progress — early product screens",
      "trace.p1": "Traçe is a fashion marketplace concept where independent brands and stores list their products for people to discover and buy — built around two core innovations.",
      "trace.f1title": "AI Style Scan",
      "trace.f1desc": "For people who feel they lack a defined personal style, Traçe reads a full-body scan alongside a short lifestyle questionnaire. Combining physical proportions with personal preferences, the AI generates tailored style recommendations — each linked directly to the piece for purchase.",
      "trace.f2title": "Virtual Fit Preview",
      "trace.f2desc": "Users can save a full-body photo with their exact measurements to preview any garment on the platform on their own body before buying — removing the guesswork from online fashion shopping.",
      "trace.f3title": "Community",
      "trace.f3desc": "Beyond shopping, users share their outfits for feedback and follow a feed of style inspiration and fashion education from other members — every look posted carries tappable tags linking straight to the pieces worn.",

      "contact.eyebrow": "04 — Contact",
      "contact.title": "Let's work<br>together.",
      "contact.desc": "Open to internships, junior roles and freelance projects. Reach out — I'd love to hear about it.",

      "footer.top": "Back to top ↑"
    },
    pt: {
      "nav.work": "Projetos",
      "nav.about": "Sobre",
      "nav.trace": "Traçe",
      "nav.contact": "Contato",
      "nav.available": "Disponível para trabalhar",

      "hero.eyebrow": "Portfólio — 2026",
      "hero.selected": "Selecionados",
      "hero.line1": "DESIGN",
      "hero.line2": "COM",
      "hero.line3": "INTENÇÃO.",
      "hero.desc": "UI/UX, branding e design para social media — transformando ideias em interfaces e marcas que chamam atenção.",
      "hero.cta": "Ver Projetos",
      "hero.scroll": "Rolar",

      "about.eyebrow": "01 — Sobre",
      "about.title": "Quem eu sou",
      "about.p1": "Sou designer visual e de produto no início de carreira, focado em transformar ideias em interfaces e marcas limpas e com propósito.",
      "about.p2": "Ainda não tenho experiência profissional — o que tenho é um repertório crescente de trabalhos independentes em branding, social media e UI design, e uma obsessão genuína por acertar os pequenos detalhes. No momento, estou desenhando e construindo meu primeiro aplicativo do zero: o Traçe.",
      "about.skill1": "UI / UX Design",
      "about.skill2": "Identidade de Marca",
      "about.skill3": "Design para Social Media",
      "about.skill4": "Direção de Arte",
      "about.skill5": "Pensamento de Produto",

      "work.eyebrow": "02 — Projetos Selecionados",
      "work.title": "Projetos",
      "work.hint": "Passe o mouse sobre o nome de um projeto para visualizá-lo ao lado.",

      "projects.branding.name": "Branding",
      "projects.branding.category": "Identidade de Marca — Traçe",
      "projects.carousel.name": "Carrossel Instagram",
      "projects.carousel.category": "Design para Social Media",
      "projects.landing.name": "Landing Page",
      "projects.landing.category": "Web Design — TaskFlow",
      "projects.post.name": "Post Instagram",
      "projects.post.category": "Social Media — RAWBRAND",
      "projects.poster.name": "Poster",
      "projects.poster.category": "Design de Poster — RAWBRAND",
      "projects.card.name": "Product Card",
      "projects.card.category": "UI Design — E-commerce",
      "projects.thumb.name": "Thumbnail",
      "projects.thumb.category": "Design de Capa",

      "trace.eyebrow": "03 — Em Desenvolvimento",
      "trace.title": "Traçe",
      "trace.tag": "Your Trace. Your Style.",
      "trace.caption": "Em desenvolvimento — primeiras telas do produto",
      "trace.p1": "Traçe é um conceito de marketplace de moda onde marcas e lojas independentes cadastram seus produtos para as pessoas descobrirem e comprarem — construído em torno de dois grandes diferenciais.",
      "trace.f1title": "Scan de Estilo com IA",
      "trace.f1desc": "Para quem sente que ainda não tem um estilo próprio definido, o Traçe faz a leitura de um scan corporal completo junto de um breve questionário sobre preferências. Cruzando as proporções físicas com as respostas, a IA gera recomendações de estilo personalizadas — cada uma já linkada à peça para compra.",
      "trace.f2title": "Prévia Virtual de Look",
      "trace.f2desc": "O usuário pode salvar uma foto de corpo inteiro com suas medidas exatas para visualizar qualquer peça da plataforma no próprio corpo antes de comprar — eliminando a incerteza da compra de roupas online.",
      "trace.f3title": "Comunidade",
      "trace.f3desc": "Além da experiência de compra, os usuários postam seus looks para receber feedback e acompanham um feed de inspiração e conteúdo educativo sobre moda de outros membros — cada look postado traz marcações que linkam direto para as peças usadas.",

      "contact.eyebrow": "04 — Contato",
      "contact.title": "Vamos trabalhar<br>juntos.",
      "contact.desc": "Aberto a estágios, vagas júnior e projetos freelance. Entre em contato — vou adorar saber mais.",

      "footer.top": "Voltar ao topo ↑"
    }
  };

  var STORAGE_KEY = "davipina-lang";

  function applyLang(lang) {
    var dict = translations[lang] || translations.en;
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
    var nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        node.innerHTML = dict[key];
      }
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var initial = saved || "en";
    applyLang(initial);

    var toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-lang");
        applyLang(current === "en" ? "pt" : "en");
      });
    }
  }

  /* ============ preloader ============ */
  function initPreloader() {
    var pre = document.getElementById("preloader");
    if (!pre) return;
    window.addEventListener("load", function () {
      setTimeout(function () {
        pre.classList.add("hidden");
      }, 500);
    });
    // safety fallback
    setTimeout(function () { pre.classList.add("hidden"); }, 2200);
  }

  /* ============ custom cursor ============ */
  function initCursor() {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    var dot = document.querySelector(".cursor-dot");
    if (!dot) return;
    window.addEventListener("mousemove", function (e) {
      dot.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)";
    });
    var hoverables = document.querySelectorAll("a, button, .work-item");
    hoverables.forEach(function (el) {
      el.addEventListener("mouseenter", function () { dot.classList.add("hovering"); });
      el.addEventListener("mouseleave", function () { dot.classList.remove("hovering"); });
    });
  }

  /* ============ mobile menu ============ */
  function initMobileMenu() {
    var btn = document.getElementById("menuToggle");
    var nav = document.getElementById("mobileNav");
    if (!btn || !nav) return;
    btn.addEventListener("click", function () {
      btn.classList.toggle("open");
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        btn.classList.remove("open");
        nav.classList.remove("open");
      });
    });
  }

  /* ============ scroll reveal ============ */
  function initReveal() {
    var items = document.querySelectorAll(".reveal-up");
    if (!("IntersectionObserver" in window) || !items.length) {
      items.forEach(function (el) { el.classList.add("in-view"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    items.forEach(function (el) { observer.observe(el); });
  }

  /* ============ work preview ============ */
  function initWorkPreview() {
    var list = document.getElementById("workList");
    var preview = document.getElementById("workPreview");
    var previewImg = document.getElementById("workPreviewImg");
    if (!list || !preview || !previewImg) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    var carouselTimer = null;

    function stopCarousel() {
      if (carouselTimer) { clearInterval(carouselTimer); carouselTimer = null; }
    }

    list.querySelectorAll(".work-item").forEach(function (item) {
      item.addEventListener("mouseenter", function () {
        var img = item.getAttribute("data-img");
        previewImg.src = img;
        preview.classList.add("active");

        var carouselAttr = item.getAttribute("data-carousel");
        if (carouselAttr) {
          var frames = carouselAttr.split(",").map(function (n) {
            return "assets/img/project-carousel-" + n.trim() + ".webp";
          });
          var idx = 0;
          stopCarousel();
          carouselTimer = setInterval(function () {
            idx = (idx + 1) % frames.length;
            previewImg.src = frames[idx];
          }, 900);
        }
      });
      item.addEventListener("mouseleave", function () {
        stopCarousel();
      });
    });

    list.addEventListener("mouseleave", function () {
      preview.classList.remove("active");
      stopCarousel();
    });

    document.addEventListener("mousemove", function (e) {
      if (!preview.classList.contains("active")) return;
      var vh = window.innerHeight;
      var ratio = e.clientY / vh;
      var offset = (ratio - 0.5) * 40;
      preview.style.setProperty("--follow", offset + "px");
      preview.style.top = "calc(50% + " + offset + "px)";
    });

    // A fixed-position preview can get stranded on screen if the user
    // scrolls (wheel/keyboard) without moving the mouse off the list.
    window.addEventListener("scroll", function () {
      preview.classList.remove("active");
      stopCarousel();
    }, { passive: true });
  }

  /* ============ init ============ */
  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    initPreloader();
    initCursor();
    initMobileMenu();
    initReveal();
    initWorkPreview();
  });
})();
