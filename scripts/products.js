// products.js — La Cabane
// Pour ajouter/modifier/supprimer un produit, éditer simplement le tableau PRODUCTS.

const PRODUCTS = [
  {
    id: "sencha-japonais",
    category: "vert",
    bgColor: "#d4edda",
    emoji: "🍃",
    origin: "Japon — Shizuoka",
    name: "Sencha Japonais",
    description: "Thé vert emblématique aux notes végétales fraîches et légèrement iodées. Récolte de printemps, première cueillette.",
    details: ["🌡 70–75 °C", "⏱ 2 min", "💚 Doux"],
    price: 8.90,
    weight: 50,
    snipcartDescription: "Thé vert japonais aux notes végétales fraîches."
  },
  {
    id: "darjeeling-first-flush",
    category: "noir",
    bgColor: "#f5e6d3",
    emoji: "🍂",
    origin: "Inde — Darjeeling",
    name: "Darjeeling First Flush",
    description: "Le \"Champagne des thés\". Notes muscatées et florales caractéristiques de la première récolte de printemps.",
    details: ["🌡 90 °C", "⏱ 3 min", "🍊 Floral"],
    price: 11.50,
    weight: 50,
    snipcartDescription: "Thé noir Darjeeling première récolte, notes muscatées."
  },
  {
    id: "bai-hao-yin-zhen",
    category: "blanc",
    bgColor: "#fef9ec",
    emoji: "🌸",
    origin: "Chine — Fujian",
    name: "Bai Hao Yin Zhen",
    description: "Aiguilles d'argent issues exclusivement des bourgeons. Délicat, sucré, avec une légère note de miel et de fleurs blanches.",
    details: ["🌡 75 °C", "⏱ 4 min", "🍯 Sucré"],
    price: 16.00,
    weight: 30,
    snipcartDescription: "Thé blanc en aiguilles d'argent, délicat et sucré."
  },
  {
    id: "dong-ding-oolong",
    category: "oolong",
    bgColor: "#fff3e0",
    emoji: "🏔️",
    origin: "Taïwan — Nantou",
    name: "Dong Ding Oolong",
    description: "Semi-oxydé aux arômes complexes de fleurs, de fruits mûrs et de notes grillées. Un classique taiwanais incontournable.",
    details: ["🌡 85–90 °C", "⏱ 3 min", "🍑 Fruité"],
    price: 13.50,
    weight: 50,
    snipcartDescription: "Oolong taiwanais aux arômes floraux et fruités."
  },
  {
    id: "matcha-ceremonie",
    category: "matcha",
    bgColor: "#c8f0d8",
    emoji: "🍵",
    origin: "Japon — Uji",
    name: "Matcha Cérémonie",
    description: "Matcha de grade cérémonie, finement moulu sur pierre. Couleur vert vif, saveur umami prononcée avec une douce amertume.",
    details: ["🌡 70 °C", "⏱ Fouetter", "💪 Umami"],
    price: 19.90,
    weight: 30,
    snipcartDescription: "Matcha de grade cérémonie d'Uji, Japon."
  },
  {
    id: "yunnan-dian-hong",
    category: "noir",
    bgColor: "#e8d5c4",
    emoji: "🏛️",
    origin: "Chine — Yunnan",
    name: "Yunnan Dian Hong",
    description: "Thé noir du Yunnan aux bourgeons dorés. Notes de malt, de cacao et une légère douceur naturelle sans astringence.",
    details: ["🌡 95 °C", "⏱ 3–4 min", "🍫 Malté"],
    price: 10.50,
    weight: 50,
    snipcartDescription: "Thé noir du Yunnan aux notes de malt et cacao."
  },
  {
    id: "dragon-well-longjing",
    category: "vert",
    bgColor: "#e8f5e9",
    emoji: "🎋",
    origin: "Chine — Hangzhou",
    name: "Dragon Well (Longjing)",
    description: "Thé vert plat et poli à la poêle. Saveur douce et noisettée, légèrement sucrée. L'un des thés verts les plus célèbres de Chine.",
    details: ["🌡 80 °C", "⏱ 2 min", "🌰 Noisette"],
    price: 12.00,
    weight: 50,
    snipcartDescription: "Thé vert Longjing aux notes douces de noisette."
  },
  {
    id: "rose-hibiscus",
    category: "infusion",
    bgColor: "#fde8f0",
    emoji: "🌹",
    origin: "France — Provence",
    name: "Rose & Hibiscus",
    description: "Mélange généreux de pétales de rose et d'hibiscus. Couleur rubis éclatante, saveur florale et légèrement acidulée. Sans théine.",
    details: ["🌡 95 °C", "⏱ 5 min", "🌿 Sans théine"],
    price: 7.50,
    weight: 40,
    snipcartDescription: "Infusion florale rose et hibiscus sans théine."
  },
  {
    id: "tie-guan-yin",
    category: "oolong",
    bgColor: "#e6f3ff",
    emoji: "🌀",
    origin: "Chine — Fujian",
    name: "Tie Guan Yin",
    description: "Oolong légèrement oxydé aux arômes d'orchidée et de beurre. Texture crémeuse et longue finale florale très appréciée.",
    details: ["🌡 85 °C", "⏱ 2–3 min", "🌺 Crémeux"],
    price: 14.00,
    weight: 50,
    snipcartDescription: "Oolong Tie Guan Yin aux arômes d'orchidée."
  },
  {
    id: "ceylon-high-grown",
    category: "noir",
    bgColor: "#ede0d4",
    emoji: "🌴",
    origin: "Sri Lanka — Nuwara Eliya",
    name: "Ceylon High Grown",
    description: "Thé noir ceylanais d'altitude, vif et brillant en tasse. Notes d'agrumes et de cannelle, idéal en nature ou avec un nuage de lait.",
    details: ["🌡 95 °C", "⏱ 3 min", "🍋 Vif"],
    price: 9.00,
    weight: 50,
    snipcartDescription: "Thé noir ceylanais d'altitude, vif aux agrumes."
  },
  {
    id: "gyokuro-prestige",
    category: "vert",
    bgColor: "#f0f8e8",
    emoji: "🌿",
    origin: "Japon — Kyushu",
    name: "Gyokuro Prestige",
    description: "Thé vert ombré pendant 3 semaines avant récolte. Très riche en L-théanine, notes d'algues marines et umami intense. Expérience unique.",
    details: ["🌡 55–60 °C", "⏱ 90 sec", "🌊 Umami"],
    price: 22.00,
    weight: 30,
    snipcartDescription: "Thé vert ombré japonais Gyokuro, umami intense."
  },
  {
    id: "camomille-menthe",
    category: "infusion",
    bgColor: "#fff8e1",
    emoji: "🌼",
    origin: "Egypte & Maroc",
    name: "Camomille & Menthe",
    description: "Duo apaisant de camomille d'Égypte et menthe poivrée du Maroc. Parfait le soir pour se détendre. Douceur et fraîcheur en tasse.",
    details: ["🌡 95 °C", "⏱ 5 min", "🌿 Sans théine"],
    price: 6.90,
    weight: 40,
    snipcartDescription: "Infusion camomille et menthe poivrée sans théine."
  },
  {
    id: "pai-mu-tan",
    category: "blanc",
    bgColor: "#fdf6ee",
    emoji: "🌾",
    origin: "Chine — Fujian",
    name: "Pai Mu Tan",
    description: "Thé blanc aux feuilles et bourgeons entiers. Plus corsé que le Yin Zhen, notes de paille dorée, miel et légère douceur fruitée.",
    details: ["🌡 75–80 °C", "⏱ 4 min", "🍯 Miel"],
    price: 11.00,
    weight: 40,
    snipcartDescription: "Thé blanc Pai Mu Tan aux notes de miel."
  },
  {
    id: "puerh-vieilli",
    category: "noir",
    bgColor: "#e8e0d8",
    emoji: "🐉",
    origin: "Chine — Yunnan",
    name: "Pu-erh Vieilli 5 ans",
    description: "Thé post-fermenté aux arômes terreux et boisés. Notes de sous-bois, de champignon et une finale douce et persistante. Un thé de caractère.",
    details: ["🌡 95 °C", "⏱ 3 min", "🌲 Terreux"],
    price: 18.00,
    weight: 50,
    snipcartDescription: "Pu-erh vieilli 5 ans, arômes terreux et boisés."
  },
  {
    id: "hojicha-torrefie",
    category: "vert",
    bgColor: "#e0f4e0",
    emoji: "🫖",
    origin: "Japon — Kagoshima",
    name: "Hojicha Torréfié",
    description: "Thé vert torréfié à haute température. Couleur ambrée, arômes de caramel et de noisette grillée. Très faible en théine, parfait le soir.",
    details: ["🌡 90 °C", "⏱ 1 min", "🍬 Caramel"],
    price: 8.50,
    weight: 50,
    snipcartDescription: "Hojicha japonais torréfié, notes de caramel et noisette."
  },
  {
    id: "fruits-rouges-epices",
    category: "infusion",
    bgColor: "#fce4ec",
    emoji: "🫐",
    origin: "France & Allemagne",
    name: "Fruits Rouges & Épices",
    description: "Mélange gourmand de fruits rouges, cannelle et clou de girofle. Chaud en hiver, délicieux en glacé l'été. Sans théine.",
    details: ["🌡 95 °C", "⏱ 6 min", "🌿 Sans théine"],
    price: 7.20,
    weight: 50,
    snipcartDescription: "Infusion fruits rouges et épices sans théine."
  },
  {
    id: "oriental-beauty",
    category: "oolong",
    bgColor: "#f9f0e6",
    emoji: "🦋",
    origin: "Taïwan — Hsinchu",
    name: "Oriental Beauty",
    description: "Oolong fortement oxydé, mordu par des cicadelles. Notes naturelles de miel, de pêche et de muscat. L'un des oolongs les plus réputés au monde.",
    details: ["🌡 90 °C", "⏱ 3 min", "🍯 Miel"],
    price: 24.00,
    weight: 30,
    snipcartDescription: "Oolong Oriental Beauty aux notes de miel et pêche."
  },
  {
    id: "matcha-culinaire",
    category: "matcha",
    bgColor: "#dff2e6",
    emoji: "🎑",
    origin: "Japon — Nishio",
    name: "Matcha Culinaire",
    description: "Matcha de grade culinaire idéal pour pâtisseries, lattes et smoothies. Saveur robuste et légèrement amère, excellente tenue à la chaleur.",
    details: ["🍰 Pâtisserie", "🥤 Latte", "💚 Polyvalent"],
    price: 10.00,
    weight: 50,
    snipcartDescription: "Matcha culinaire japonais pour pâtisseries et lattes."
  },
  {
    id: "assam-bop-breakfast",
    category: "noir",
    bgColor: "#ede7dc",
    emoji: "☕",
    origin: "Inde — Assam",
    name: "Assam BOP Breakfast",
    description: "Thé noir corsé et malté du bassin du Brahmaputra. Infusion rouge sombre, parfait avec du lait. La base idéale d'un English Breakfast.",
    details: ["🌡 95 °C", "⏱ 4 min", "☕ Corsé"],
    price: 8.00,
    weight: 50,
    snipcartDescription: "Thé noir Assam corsé et malté, parfait avec du lait."
  },
  {
    id: "rooibos-vanille",
    category: "infusion",
    bgColor: "#e8f4fd",
    emoji: "🌅",
    origin: "Afrique du Sud",
    name: "Rooibos Vanille",
    description: "Rooibos rouge naturellement sans théine, aromatisé à la vanille de Madagascar. Légèrement sucré, doux et réconfortant à toute heure.",
    details: ["🌡 95 °C", "⏱ 5 min", "🌿 Sans théine"],
    price: 7.90,
    weight: 50,
    snipcartDescription: "Rooibos vanille de Madagascar sans théine."
  }
];

const CATEGORY_LABELS = {
  vert:     "Thé vert",
  noir:     "Thé noir",
  blanc:    "Thé blanc",
  oolong:   "Oolong",
  infusion: "Infusion",
  matcha:   "Matcha"
};

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}

function renderProductCard(p) {
  const badge = CATEGORY_LABELS[p.category] || p.category;
  const detailsHTML = p.details
    .map(d => `<span class="detail-chip">${escapeHTML(d)}</span>`)
    .join("");

  return `
    <div class="product-card" data-category="${escapeHTML(p.category)}">
      <div class="product-image" style="background:${escapeHTML(p.bgColor)};">${escapeHTML(p.emoji)}
        <span class="product-badge">${escapeHTML(badge)}</span>
      </div>
      <div class="product-body">
        <p class="product-origin">${escapeHTML(p.origin)}</p>
        <h2 class="product-name">${escapeHTML(p.name)}</h2>
        <p class="product-description">${escapeHTML(p.description)}</p>
        <div class="product-details">${detailsHTML}</div>
      </div>
      <div class="product-footer">
        <div>
          <div class="product-price">${formatPrice(p.price)}</div>
          <div class="product-weight">${p.weight} g</div>
        </div>
        <button class="btn-add-cart snipcart-add-item"
          data-item-id="${escapeHTML(p.id)}"
          data-item-name="${escapeHTML(p.name)}"
          data-item-price="${p.price.toFixed(2)}"
          data-item-url="/boutique.html"
          data-item-description="${escapeHTML(p.snipcartDescription)}"
          data-item-weight="${p.weight}">
          <iconify-icon icon="mynaui:shopping-bag" width="16" height="16"></iconify-icon> Ajouter
        </button>
      </div>
    </div>
  `;
}

// BUG FIX: filter listeners are now inside DOMContentLoaded so they run
// after the product cards have been injected into the DOM.
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".product-grid");
  if (!grid) return;

  // Inject product cards
  grid.innerHTML = PRODUCTS.map(renderProductCard).join("");

  // Attach filter listeners (cards now exist in the DOM)
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      document.querySelectorAll(".product-card").forEach(card => {
        card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
      });
    });
  });
});
