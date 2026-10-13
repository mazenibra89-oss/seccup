// ===================================================================
// SECOND CUP COFFEE x BURGERUP - AUTHENTIC MENU & INTERACTIVE LOGIC
// Data directly extracted from the official cafe menu book (34 pages)
// ===================================================================

const AUTHENTIC_MENU_DATA = [
  // --- COFFEE & MANUAL BREW ---
  {
    id: 'c1',
    name: "Ice Caramel Butterscotch Bliss",
    category: "coffee",
    price: "Rp 32.000",
    badge: "Recommended",
    img: "/menu_crops/coffee_butterscotch.jpg",
    desc: "Perpaduan kopi espresso kental dengan butterscotch manis gurih, cold milk, dan foam susu lembut."
  },
  {
    id: 'c2',
    name: "Nutella Cream Coffee",
    category: "coffee",
    price: "Rp 35.000",
    badge: "Best Seller",
    img: "/menu_crops/coffee_nutella.jpg",
    desc: "Rich Nutella chocolate hazelnut swirl berpadu dengan espresso shot pekat dan susu segar dingin."
  },
  {
    id: 'c3',
    name: "Ice Baileys Coffee Latte",
    category: "coffee",
    price: "Rp 32.000",
    badge: "Recommended",
    img: "/menu_crops/cat_coffee.jpg",
    desc: "Aroma khas Irish cream Baileys (non-alkohol) dengan layered espresso dan creamy milk."
  },
  {
    id: 'c4',
    name: "Es Kopi Susu",
    category: "coffee",
    price: "Rp 32.000",
    badge: "Best Seller",
    img: "/menu_crops/cat_ice_coffee_clean.jpg",
    desc: "Kopi susu signature Second Cup dengan perpaduan espresso mantap dan rasa manis legit yang pas."
  },
  {
    id: 'c5',
    name: "Avocado Cream Coffee",
    category: "coffee",
    price: "Rp 32.000",
    badge: "Favorit",
    img: "/menu_crops/coffee_avocado.jpg",
    desc: "Jus alpukat lembut berpadu sempurna dengan siraman espresso bold dan topping whipped cream."
  },
  {
    id: 'c6',
    name: "Coffee Latte Art (Hot)",
    category: "coffee",
    price: "Rp 27.000",
    badge: "Signature",
    img: "/menu_crops/coffee_latte_art.jpg",
    desc: "Steamed milk velvet micro-foam berpadu espresso double shot dengan latte art indah barista."
  },
  {
    id: 'c7',
    name: "Cappuccino (Hot)",
    category: "coffee",
    price: "Rp 27.000",
    badge: "Klasik",
    img: "/menu_crops/coffee_cappuccino.jpg",
    desc: "Espresso seimbang dengan steamed milk dan busa susu tebal lembut bertabur cokelat bubuk."
  },
  {
    id: 'c8',
    name: "Mochaccino (Hot)",
    category: "coffee",
    price: "Rp 27.000",
    badge: "Recommended",
    img: "/menu_crops/coffee_mochaccino.jpg",
    desc: "Harmoni rasa espresso pahit berpadu cokelat hitam manis legit dan latte art swan cantik."
  },
  {
    id: 'c9',
    name: "Kopi Butter",
    category: "coffee",
    price: "Rp 20.000",
    badge: "Tradisional",
    img: "/menu_crops/coffee_butter.jpg",
    desc: "Kopi hitam kental gaya kopitiam disajikan dengan potongan butter gurih harum yang meleleh nikmat."
  },
  {
    id: 'c10',
    name: "Vietnam Drip Coffee",
    category: "coffee",
    price: "Rp 29.000",
    badge: "Manual Brew",
    img: "/menu_crops/coffee_vietnam_drip.jpg",
    desc: "Seduhan kopi tetes Vietnam dripper tradisional berpadu kental manis di dasar cangkir."
  },
  {
    id: 'c11',
    name: "Affogatto Coffee",
    category: "coffee",
    price: "Rp 34.000",
    badge: "Dessert Kopi",
    img: "/menu_crops/coffee_affogato.jpg",
    desc: "Satu scoop es krim vanila lembut premium disiram espresso shot panas yang pekat dan harum."
  },

  // --- RICE & RICE BOWL ---
  {
    id: 'r1',
    name: "Chicken Nanban Rice Bowl",
    category: "rice",
    price: "Rp 39.000",
    badge: "Best Seller",
    img: "/menu_crops/cat_ricebowl_clean.jpg",
    desc: "Ayam goreng tepung renyah khas Miyazaki disiram saus nanban asam manis dan saus tartar lembut gurih melimpah."
  },
  {
    id: 'r2',
    name: "Salt & Garlic Chicken / Dory Bowl",
    category: "rice",
    price: "Rp 32.000",
    badge: "Favorit",
    img: "/menu_crops/rice_salt_garlic_dory.jpg",
    desc: "Pilihan fillet ayam atau dory krispi ditumis bumbu bawang putih gurih dan cabai cincang pedas segar."
  },
  {
    id: 'r3',
    name: "Salted Egg Chicken Rice Bowl",
    category: "rice",
    price: "Rp 35.000",
    badge: "Recommended",
    img: "/menu_crops/rice_salted_egg.jpg",
    desc: "Potongan ayam krispi berbalut lelehan saus telur asin asli yang creamy dengan daun kari aromatik."
  },
  {
    id: 'r4',
    name: "Chicken BBQ Rice Bowl",
    category: "rice",
    price: "Rp 32.000",
    badge: "Favorit",
    img: "/menu_crops/rice_bbq_chicken.jpg",
    desc: "Ayam fillet krispi berbalut saus BBQ manis gurih asap dengan taburan biji wijen di atas nasi hangat."
  },
  {
    id: 'r5',
    name: "Nasi Goreng Ikan Asin",
    category: "rice",
    price: "Rp 45.000",
    badge: "Recommended",
    img: "/menu_crops/rice_goreng_ikan_asin.jpg",
    desc: "Nasi goreng wangi smoky dengan potongan ikan asin gurih renyah, telur mata sapi, acar, dan kerupuk."
  },
  {
    id: 'r6',
    name: "Nasi Ayam Cabe Garam",
    category: "rice",
    price: "Rp 36.000",
    badge: "Favorit",
    img: "/menu_crops/rice_ayam_cabe_garam.jpg",
    desc: "Nasi hangat dengan ayam goreng renyah berbumbu cabe garam renyah pedas gurih nagih."
  },
  {
    id: 'r7',
    name: "Nasi Ayam Bumbu Hitam",
    category: "rice",
    price: "Rp 48.000",
    badge: "Khas Madura",
    img: "/menu_crops/rice_ayam_hitam.jpg",
    desc: "Ayam goreng rempah bumbu hitam pekat gurih kaya cita rasa disajikan dengan nasi pulen dan sambal pedas."
  },
  {
    id: 'r8',
    name: "Nasi Bebek Sereh",
    category: "rice",
    price: "Rp 53.000",
    badge: "Recommended",
    img: "/menu_crops/rice_bebek_sereh.jpg",
    desc: "Bebek goreng empuk berbumbu rempah sereh khas Nusantara dengan serundeng gurih dan sambal istimewa."
  },
  {
    id: 'r9',
    name: "1Pc Fried Chicken + Nasi",
    category: "rice",
    price: "Rp 27.000",
    badge: "Hemat",
    img: "/menu_crops/rice_fried_chicken.jpg",
    desc: "Ayam goreng krispi renyah bumbu khas BurgerUP disajikan dengan nasi pulen hangat dan aneka sambal."
  },
  {
    id: 'r10',
    name: "Nasi Ayam Geprek",
    category: "rice",
    price: "Rp 31.000",
    badge: "Pedas Nagih",
    img: "/menu_crops/rice_ayam_geprek.jpg",
    desc: "Ayam krispi digeprek sambal bawang pedas nampol disajikan dengan nasi hangat dan lalapan kol goreng."
  },

  // --- BURGER & HOT PLATE ---
  {
    id: 'b1',
    name: "Classic Beef Burger (With Fries)",
    category: "burger",
    price: "Rp 38.000",
    badge: "Best Seller",
    img: "/menu_crops/burger_classic_beef.jpg",
    desc: "Juicy beef patty 100% daging sapi asli, melted cheese, selada, bawang bombay, saus spesial, dan seasoned fries."
  },
  {
    id: 'b2',
    name: "Classic Cheese Burger (With Fries)",
    category: "burger",
    price: "Rp 43.000",
    badge: "Favorit",
    img: "/menu_crops/burger_classic_cheese.jpg",
    desc: "Burger bun lembut bertabur wijen dengan double cheese meleleh dan saus rahasia BurgerUP Indonesia."
  },
  {
    id: 'b3',
    name: "Crispy Chicken Burger (With Fries)",
    category: "burger",
    price: "Rp 37.000",
    badge: "Recommended",
    img: "/menu_crops/burger_crispy_chicken.jpg",
    desc: "Fillet ayam goreng super krispi dengan saus spicy mayo segar dan kentang goreng berbumbu gurih."
  },
  {
    id: 'b4',
    name: "Double Cheese Burger (With Fries)",
    category: "burger",
    price: "Rp 59.000",
    badge: "Premium",
    img: "/menu_crops/cat_burger_clean.jpg",
    desc: "Dua lapis beef patty tebal dan juicy dengan double cheese slice meleleh untuk porsi kepuasan maksimal."
  },
  {
    id: 'b5',
    name: "Signature BBQ Beef Burger",
    category: "burger",
    price: "Rp 48.000",
    badge: "Chef's Pick",
    img: "/menu_crops/burger_bbq_beef.jpg",
    desc: "Beef burger dengan olesan saus BBQ asap kental, onion ring renyah, dan melted cheddar cheese."
  },
  {
    id: 'b6',
    name: "Grilled Chicken Steak Hot Plate",
    category: "burger",
    price: "Rp 45.000",
    badge: "Recommended",
    img: "/menu_crops/hotplate_chicken_steak.jpg",
    desc: "Steak paha ayam fillet panggang empuk di atas piring panas mengepul dengan mushroom sauce dan french fries."
  },
  {
    id: 'b7',
    name: "Crispy Chicken Fillet Hot Plate",
    category: "burger",
    price: "Rp 42.000",
    badge: "Favorit",
    img: "/menu_crops/hotplate_crispy_fillet.jpg",
    desc: "Ayam krispi fillet berukuran besar disiram saus BBQ / Brown sauce dengan sayuran manis dan kentang."
  },
  {
    id: 'b8',
    name: "Fish & Chips with Potato Chips",
    category: "burger",
    price: "Rp 48.000",
    badge: "Western",
    img: "/menu_crops/hotplate_fish_chips.jpg",
    desc: "Fillet ikan dory goreng tepung renyah keemasan dengan keripik kentang gurih dan saus tartar segar."
  },

  // --- SNACKS & PLATTERS ---
  {
    id: 's1',
    name: "Western Sampler Platter",
    category: "snack",
    price: "Rp 68.000",
    badge: "Sharing Platter",
    img: "/menu_crops/snack_western_sampler.jpg",
    desc: "Platter komplit berisi Fish Fingers, Onion Ring, Chicken Popcorn, Calamari Ring, dan French Fries dengan saus tartar."
  },
  {
    id: 's2',
    name: "Local Sampler Platter",
    category: "snack",
    price: "Rp 66.000",
    badge: "Nusantara",
    img: "/menu_crops/snack_local_sampler.jpg",
    desc: "Camilan lokal favorit: Dadar Jagung, Ote-Ote Sayur, Cireng renyah, Tahu Walik, dan Tempe Mendoan dengan sambal kecap pedas."
  },
  {
    id: 's3',
    name: "Salted Egg Chicken Wings",
    category: "snack",
    price: "Rp 42.000",
    badge: "Recommended",
    img: "/menu_crops/snack_chicken_wings.jpg",
    desc: "Sayap ayam goreng renyah dibalut saus telur asin gurih nikmat taburan cabai merah segar."
  },
  {
    id: 's4',
    name: "Siomay Kukus Dimsum",
    category: "snack",
    price: "Rp 25.000",
    badge: "Camilan",
    img: "/menu_crops/snack_siomay.jpg",
    desc: "Siomay ayam udang kenyal dan gurih disajikan panas dalam klakat bambu kukusan tradisional."
  },
  {
    id: 's5',
    name: "Crispy Potato Chips",
    category: "snack",
    price: "Rp 25.000",
    badge: "Camilan",
    img: "/menu_crops/snack_potato_chips.jpg",
    desc: "Keripik kentang tipis renyah goreng kering dengan bumbu original / signature khas kafe."
  },
  {
    id: 's6',
    name: "Tahu Cabe Garam",
    category: "snack",
    price: "Rp 25.000",
    badge: "Favorit",
    img: "/menu_crops/snack_tahu_cabe_garam.jpg",
    desc: "Tahu sutra potong dadu goreng tepung renyah dengan tumisan cabai merah, bawang daun, dan garam gurih."
  },
  {
    id: 's7',
    name: "Loaded Cheese Fries",
    category: "snack",
    price: "Rp 32.000",
    badge: "Camilan",
    img: "/menu_crops/snack_cheese_fries.jpg",
    desc: "Kentang goreng renyah disiram lelehan saus keju cheddar creamy gurih melimpah."
  },
  {
    id: 's8',
    name: "Crispy Calamari & Onion Ring",
    category: "snack",
    price: "Rp 32.000",
    badge: "Camilan",
    img: "/menu_crops/snack_calamari.jpg",
    desc: "Cumi ring goreng tepung renyah berpadu onion ring manis gurih dicocol saus tartar segar."
  },

  // --- CROISSANT & TOAST & SWEET DESSERTS ---
  {
    id: 'p1',
    name: "French Butter Croissant",
    category: "croissant",
    price: "Rp 29.000",
    badge: "Pastry Klasik",
    img: "/menu_crops/cat_pastry_clean.jpg",
    desc: "Croissant asli renyah berlapis-lapis mentega premium Perancis dengan aroma harum yang lumer di mulut."
  },
  {
    id: 'p2',
    name: "Almond Croissant",
    category: "croissant",
    price: "Rp 38.000",
    badge: "Best Seller",
    img: "/menu_crops/pastry_almond_croissant.jpg",
    desc: "Croissant panggang renyah berbalut almond frangipane cream manis dan taburan kacang almond renyah melimpah."
  },
  {
    id: 'p3',
    name: "Pain Au Chocolate",
    category: "croissant",
    price: "Rp 29.000",
    badge: "Favorit",
    img: "/menu_crops/pastry_pain_chocolat.jpg",
    desc: "Pastry gulung klasik Perancis dengan isian cokelat batang hitam leleh di setiap gigitan."
  },
  {
    id: 'p4',
    name: "Chocolate Lava Cake with Ice Cream",
    category: "croissant",
    price: "Rp 48.000",
    badge: "Dessert Spesial",
    img: "/menu_crops/dessert_lava_cake.jpg",
    desc: "Kue cokelat hangat dengan lelehan cokelat cair di dalamnya, disajikan bersama satu scoop es krim vanila dingin."
  },
  {
    id: 'p5',
    name: "French Toast with Strawberries",
    category: "croissant",
    price: "Rp 35.000",
    badge: "Sweet Breakfast",
    img: "/menu_crops/toast_french_toast.jpg",
    desc: "Roti brioche lembut berbalut telur kayu manis harum disajikan dengan buah stroberi segar dan maple syrup."
  },
  {
    id: 'p6',
    name: "Kaya Butter Toast",
    category: "croissant",
    price: "Rp 22.000",
    badge: "Kopitiam",
    img: "/menu_crops/toast_kaya_butter.jpg",
    desc: "Roti panggang garing isi selai srikaya harum pandan dan potongan mentega dingin lumer."
  },
  {
    id: 'p7',
    name: "Caramelized Banana",
    category: "croissant",
    price: "Rp 26.000",
    badge: "Dessert",
    img: "/menu_crops/dessert_caramel_banana.jpg",
    desc: "Pisang manis panggang dengan karamel gula aren mengkilap dan taburan cokelat parut."
  },
  {
    id: 'p8',
    name: "Pisang Goreng Kremes",
    category: "croissant",
    price: "Rp 32.000",
    badge: "Favorit",
    img: "/menu_crops/dessert_pisang_goreng.jpg",
    desc: "Pisang kepok manis digoreng selimut tepung kremes sarang tawon ekstra renyah gurih."
  },

  // --- NON-COFFEE, FRAPPE, MATCHA & TEAS ---
  {
    id: 'nc1',
    name: "Matcha Strawberry Series",
    category: "noncoffee",
    price: "Rp 39.000",
    badge: "Best Seller",
    img: "/menu_crops/matcha_strawberry.jpg",
    desc: "Layered drink cantik perpaduan selai stroberi segar asli, susu segar dingin, dan premium Japanese Uji Matcha."
  },
  {
    id: 'nc2',
    name: "Pure Uji Matcha Latte",
    category: "noncoffee",
    price: "Rp 30.000",
    badge: "Authentic",
    img: "/menu_crops/matcha_latte.jpg",
    desc: "Teh hijau matcha murni asal Jepang diseduh tradisional dengan steamed fresh milk lembut."
  },
  {
    id: 'nc3',
    name: "Dirty Matcha",
    category: "noncoffee",
    price: "Rp 33.000",
    badge: "Favorit",
    img: "/menu_crops/matcha_dirty.jpg",
    desc: "Kombinasi eksotis matcha autentik Jepang yang earthy bertemu dengan shot espresso kopi pekat."
  },
  {
    id: 'nc4',
    name: "Affogato Matcha",
    category: "noncoffee",
    price: "Rp 33.000",
    badge: "Dessert",
    img: "/menu_crops/matcha_affogato.jpg",
    desc: "Satu scoop es krim vanila disiram matcha murni pekat kental hangat dalam coupe glass."
  },
  {
    id: 'nc5',
    name: "Lotus Biscoff Blend Frappe",
    category: "noncoffee",
    price: "Rp 36.000",
    badge: "Recommended",
    img: "/menu_crops/frappe_lotus_biscoff.jpg",
    desc: "Ice blended kental biskuit karamel Lotus Biscoff dengan saus speculoos dan remahan biskuit renyah."
  },
  {
    id: 'nc6',
    name: "Cookies n Cream Blend",
    category: "noncoffee",
    price: "Rp 34.000",
    badge: "Favorit",
    img: "/menu_crops/frappe_cookies_cream.jpg",
    desc: "Minuman es blender susu creamy dan biskuit cokelat Oreo utuh dengan taburan cookies crumble."
  },
  {
    id: 'nc7',
    name: "Yakult Series Rainbow Sparkler",
    category: "noncoffee",
    price: "Rp 29.000",
    badge: "Segar",
    img: "/menu_crops/yakult_series_rainbow.jpg",
    desc: "Minuman soda Yakult bergradasi warna cantik dengan sari nanas segar, markisa, atau stroberi dingin."
  },
  {
    id: 'nc8',
    name: "Mango Lychee Iced Tea",
    category: "noncoffee",
    price: "Rp 28.000",
    badge: "Favorit",
    img: "/menu_crops/tea_mango_lychee.jpg",
    desc: "Teh buah dingin wangi rasa mangga tropis disajikan dengan buah leci utuh segar manis dan daun mint."
  },
  {
    id: 'nc9',
    name: "Strawberry Fruit Tea",
    category: "noncoffee",
    price: "Rp 24.000",
    badge: "Segar",
    img: "/menu_crops/tea_strawberry.jpg",
    desc: "Seduhan teh segar dingin dengan sirup stroberi alami, irisan lemon segar, dan buah beri manis."
  }
];

// TOP FEATURED ITEMS TO DISPLAY DIRECTLY ON THE LANDING PAGE
const FEATURED_SHOWCASE_ITEMS = [
  {
    id: 'c1',
    name: "Ice Caramel Butterscotch Bliss",
    category: "coffee",
    price: "Rp 32.000",
    badge: "Best Seller",
    img: "/menu_crops/coffee_butterscotch.jpg",
    desc: "Espresso shot bold berpadu sirup butterscotch gurih legit, cold fresh milk, dan foam susu lembut."
  },
  {
    id: 'r1',
    name: "Chicken Nanban Rice Bowl",
    category: "rice",
    price: "Rp 39.000",
    badge: "Chef's Pick",
    img: "/menu_crops/cat_ricebowl_clean.jpg",
    desc: "Ayam goreng tepung khas Miyazaki disiram saus nanban asam manis dan tartar gurih melimpah."
  },
  {
    id: 'b4',
    name: "Double Cheese Burger",
    category: "burger",
    price: "Rp 59.000",
    badge: "Signature Burger",
    img: "/menu_crops/cat_burger_clean.jpg",
    desc: "Dua beef patty tebal juicy 100% daging sapi asli, melted cheese slice, dan kentang berbumbu."
  },
  {
    id: 'p2',
    name: "Almond Croissant",
    category: "pastry",
    price: "Rp 38.000",
    badge: "Fresh Baked",
    img: "/menu_crops/pastry_almond_croissant.jpg",
    desc: "French croissant renyah berbalut almond frangipane cream dan taburan roasted almond slices."
  },
  {
    id: 's1',
    name: "Western Sampler Platter",
    category: "snack",
    price: "Rp 68.000",
    badge: "Sharing Platter",
    img: "/menu_crops/snack_western_sampler.jpg",
    desc: "Fish fingers, onion ring, chicken popcorn, calamari ring, dan french fries dengan saus tartar."
  },
  {
    id: 'p4',
    name: "Chocolate Lava Cake",
    category: "pastry",
    price: "Rp 48.000",
    badge: "Special Dessert",
    img: "/menu_crops/dessert_lava_cake.jpg",
    desc: "Kue cokelat hangat lelehan lava cokelat cair dengan satu scoop es krim vanila dingin dan daun mint."
  },
  {
    id: 'nc1',
    name: "Matcha Strawberry Series",
    category: "noncoffee",
    price: "Rp 39.000",
    badge: "Trending",
    img: "/menu_crops/matcha_strawberry.jpg",
    desc: "Gradasi cantik 3 layer: puree stroberi manis asli, susu dingin creamy, dan Japanese Uji Matcha."
  },
  {
    id: 'c2',
    name: "Nutella Cream Coffee",
    category: "coffee",
    price: "Rp 35.000",
    badge: "Favorit Barista",
    img: "/menu_crops/coffee_nutella.jpg",
    desc: "Nutella hazelnut swirl mewah berpadu espresso double shot pekat dan cold milk segar."
  },
  {
    id: 'b6',
    name: "Grilled Chicken Steak Hot Plate",
    category: "burger",
    price: "Rp 45.000",
    badge: "Hot Sizzling",
    img: "/menu_crops/hotplate_chicken_steak.jpg",
    desc: "Paha ayam panggang empuk di atas piring panas mengepul dengan mushroom sauce dan sayuran."
  },
  {
    id: 'r5',
    name: "Nasi Goreng Ikan Asin",
    category: "rice",
    price: "Rp 45.000",
    badge: "Nusantara",
    img: "/menu_crops/rice_goreng_ikan_asin.jpg",
    desc: "Nasi goreng smoky potongan ikan asin gurih renyah, telur mata sapi, acar, dan kerupuk."
  },
  {
    id: 'nc5',
    name: "Lotus Biscoff Blend Frappe",
    category: "noncoffee",
    price: "Rp 36.000",
    badge: "Sweet Indulgence",
    img: "/menu_crops/frappe_lotus_biscoff.jpg",
    desc: "Es blender kental biskuit karamel Lotus Biscoff dengan saus speculoos dan biskuit renyah."
  },
  {
    id: 'nc8',
    name: "Mango Lychee Iced Tea",
    category: "noncoffee",
    price: "Rp 28.000",
    badge: "Refreshing",
    img: "/menu_crops/tea_mango_lychee.jpg",
    desc: "Teh buah dingin wangi rasa mangga tropis disajikan dengan buah leci utuh segar dan mint."
  }
];

// PDF MENU PAGES DATA (34 Pages from BurgerUP x Second Cup Menu Book)
const TOTAL_PDF_PAGES = 34;
let currentPdfPageIndex = 1;

// DOM References
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Modal Elements
const menuModal = document.getElementById('menuModal');
const promoModal = document.getElementById('promoModal');
const visitModal = document.getElementById('visitModal');
const lightboxModal = document.getElementById('lightboxModal');
const pdfMenuModal = document.getElementById('pdfMenuModal');

// Action Buttons
const navVisitBtn = document.getElementById('navVisitBtn');
const aboutVisitBtn = document.getElementById('aboutVisitBtn');
const viewFullMenuBtn = document.getElementById('viewFullMenuBtn');
const openFullCatalogBtn = document.getElementById('openFullCatalogBtn');
const promoDetailBtn = document.getElementById('promoDetailBtn');
const promoBogoCard = document.getElementById('promoBogoCard');
const promoMbgCard = document.getElementById('promoMbgCard');

// PDF Book Viewer Buttons
const openPdfMenuBtn = document.getElementById('openPdfMenuBtn');
const openPdfMenuBtnHero = document.getElementById('openPdfMenuBtnHero');
const openPdfMenuBtnBanner = document.getElementById('openPdfMenuBtnBanner');
const closePdfMenuModalBtn = document.getElementById('closePdfMenuModalBtn');
const pdfPrevPageBtn = document.getElementById('pdfPrevPageBtn');
const pdfNextPageBtn = document.getElementById('pdfNextPageBtn');
const pdfCurrentPageDisplay = document.getElementById('pdfCurrentPageDisplay');
const pdfViewerImg = document.getElementById('pdfViewerImg');
const pdfThumbnailTrack = document.getElementById('pdfThumbnailTrack');

// Modal Close Buttons
const closeMenuModalBtn = document.getElementById('closeMenuModalBtn');
const closePromoModalBtn = document.getElementById('closePromoModalBtn');
const closeVisitModalBtn = document.getElementById('closeVisitModalBtn');
const closeLightboxBtn = document.getElementById('closeLightboxBtn');

// Lightbox Elements
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const galleryItems = document.querySelectorAll('.collage-item');

// Menu Modal Tabs & Containers
const tabButtons = document.querySelectorAll('.tab-btn');
const modalItemsList = document.getElementById('modalItemsList');
const categoryCards = document.querySelectorAll('.category-item-card');

// Featured On-Page Grid & Filters
const featuredCardsGrid = document.getElementById('featuredCardsGrid');
const featuredFilterBtns = document.querySelectorAll('.ftab-btn');

// ===================================================================
// STICKY NAVBAR & SMOOTH ACTIVE LINK
// ===================================================================
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  const sections = document.querySelectorAll('section[id], footer[id]');
  const scrollPosition = window.scrollY + 130;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPosition >= top && scrollPosition < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      mobileToggle.classList.remove('active');
    }
  });
});

// ===================================================================
// MODAL MANAGEMENT
// ===================================================================
function openModal(modal) {
  if (!modal) return;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

[menuModal, promoModal, visitModal, lightboxModal, pdfMenuModal].forEach(modal => {
  if (!modal) return;
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
});

closeMenuModalBtn?.addEventListener('click', () => closeModal(menuModal));
closePromoModalBtn?.addEventListener('click', () => closeModal(promoModal));
closeVisitModalBtn?.addEventListener('click', () => closeModal(visitModal));
closeLightboxBtn?.addEventListener('click', () => closeModal(lightboxModal));
closePdfMenuModalBtn?.addEventListener('click', () => closeModal(pdfMenuModal));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal(menuModal);
    closeModal(promoModal);
    closeModal(visitModal);
    closeModal(lightboxModal);
    closeModal(pdfMenuModal);
  }
});

// ===================================================================
// RENDER ON-PAGE FEATURED AUTHENTIC MENU
// ===================================================================
function renderFeaturedItems(filter = 'all') {
  if (!featuredCardsGrid) return;

  const filtered = filter === 'all'
    ? FEATURED_SHOWCASE_ITEMS
    : FEATURED_SHOWCASE_ITEMS.filter(item => {
        if (filter === 'rice') return item.category === 'rice';
        if (filter === 'burger') return item.category === 'burger';
        if (filter === 'pastry') return item.category === 'pastry' || item.category === 'croissant';
        if (filter === 'noncoffee') return item.category === 'noncoffee';
        return item.category === filter;
      });

  featuredCardsGrid.innerHTML = filtered.map(item => `
    <article class="featured-card">
      <div class="featured-card-thumb-wrap">
        <img src="${item.img}" alt="${item.name}" class="featured-card-thumb" loading="lazy">
        <span class="featured-card-badge">${item.badge}</span>
      </div>
      <div class="featured-card-body">
        <h4 class="featured-card-title">${item.name}</h4>
        <p class="featured-card-desc">${item.desc}</p>
        <div class="featured-card-footer">
          <div class="featured-card-price">${item.price}</div>
          <a href="https://wa.me/6281234567890?text=Halo%20Second%20Cup,%20saya%20ingin%20memesan%20${encodeURIComponent(item.name)}%20(${item.price})" target="_blank" rel="noopener noreferrer" class="btn-card-order" aria-label="Pesan ${item.name} via WhatsApp">
            <span>Pesan</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="14" height="14"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

// Featured Filter Buttons
featuredFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    featuredFilterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter') || 'all';
    renderFeaturedItems(filter);
  });
});

// ===================================================================
// RENDER FULL CATALOG MODAL MENU ITEMS
// ===================================================================
function renderMenuItems(category = 'all') {
  if (!modalItemsList) return;

  const filtered = category === 'all' 
    ? AUTHENTIC_MENU_DATA 
    : AUTHENTIC_MENU_DATA.filter(item => {
        if (category === 'ricebowl' || category === 'rice') return item.category === 'rice';
        if (category === 'pastry' || category === 'croissant') return item.category === 'croissant';
        return item.category === category;
      });

  modalItemsList.innerHTML = filtered.map(item => `
    <div class="menu-item-row" data-id="${item.id}">
      <div class="item-thumb-wrapper">
        <img src="${item.img}" alt="${item.name}" class="item-thumb-img" loading="lazy">
      </div>
      <div class="item-left">
        <div class="item-title-badge-row">
          <h4 class="item-name">${item.name}</h4>
          ${item.badge ? `<span class="item-badge-pill">${item.badge}</span>` : ''}
        </div>
        <p class="item-desc">${item.desc}</p>
      </div>
      <div class="item-right-action">
        <div class="item-price">${item.price}</div>
        <a href="https://wa.me/6281234567890?text=Halo%20Second%20Cup,%20saya%20ingin%20memesan%20${encodeURIComponent(item.name)}%20(${item.price})" target="_blank" rel="noopener noreferrer" class="btn-item-order" aria-label="Order ${item.name} via WhatsApp">
          Pesan
        </a>
      </div>
    </div>
  `).join('');
}

// Category Tabs inside Modal
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tabCategory = btn.getAttribute('data-tab');
    renderMenuItems(tabCategory);
  });
});

function openMenuModalWithCategory(cat = 'all') {
  tabButtons.forEach(btn => {
    const tabVal = btn.getAttribute('data-tab');
    if (tabVal === cat || (cat === 'rice' && tabVal === 'rice') || (cat === 'pastry' && tabVal === 'croissant')) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderMenuItems(cat);
  openModal(menuModal);
}

viewFullMenuBtn?.addEventListener('click', () => openMenuModalWithCategory('all'));
openFullCatalogBtn?.addEventListener('click', () => openMenuModalWithCategory('all'));

// Category Circle Cards Click & Keyboard
categoryCards.forEach(card => {
  card.addEventListener('click', () => {
    const cat = card.getAttribute('data-category');
    openMenuModalWithCategory(cat || 'all');
  });

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const cat = card.getAttribute('data-category');
      openMenuModalWithCategory(cat || 'all');
    }
  });
});

// ===================================================================
// 34-PAGE PDF BOOK VIEWER LOGIC
// ===================================================================
function updatePdfPageView(pageIndex) {
  if (pageIndex < 1) pageIndex = 1;
  if (pageIndex > TOTAL_PDF_PAGES) pageIndex = TOTAL_PDF_PAGES;
  currentPdfPageIndex = pageIndex;

  const paddedNum = String(pageIndex).padStart(2, '0');
  const pageSrc = `/pdf_pages/page_${paddedNum}.jpg`;

  if (pdfViewerImg) {
    pdfViewerImg.src = pageSrc;
    pdfViewerImg.alt = `Buku Menu Second Cup - Halaman ${pageIndex} dari ${TOTAL_PDF_PAGES}`;
  }

  if (pdfCurrentPageDisplay) {
    pdfCurrentPageDisplay.textContent = `Halaman ${pageIndex} dari ${TOTAL_PDF_PAGES}`;
  }

  // Update active thumbnail
  const thumbs = document.querySelectorAll('.pdf-thumb-item');
  thumbs.forEach((th, idx) => {
    if (idx + 1 === pageIndex) {
      th.classList.add('active');
      th.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      th.classList.remove('active');
    }
  });
}

function initPdfThumbnails() {
  if (!pdfThumbnailTrack) return;
  let html = '';
  for (let i = 1; i <= TOTAL_PDF_PAGES; i++) {
    const num = String(i).padStart(2, '0');
    html += `
      <button type="button" class="pdf-thumb-item ${i === 1 ? 'active' : ''}" data-page="${i}" aria-label="Lihat Halaman ${i}">
        <img src="/pdf_pages/page_${num}.jpg" alt="Thumbnail Hal ${i}" loading="lazy">
        <span>Hal ${i}</span>
      </button>
    `;
  }
  pdfThumbnailTrack.innerHTML = html;

  pdfThumbnailTrack.querySelectorAll('.pdf-thumb-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = parseInt(btn.getAttribute('data-page'), 10);
      updatePdfPageView(p);
    });
  });
}

pdfPrevPageBtn?.addEventListener('click', () => updatePdfPageView(currentPdfPageIndex - 1));
pdfNextPageBtn?.addEventListener('click', () => updatePdfPageView(currentPdfPageIndex + 1));

openPdfMenuBtn?.addEventListener('click', () => {
  closeModal(menuModal);
  openModal(pdfMenuModal);
  updatePdfPageView(currentPdfPageIndex);
});

openPdfMenuBtnHero?.addEventListener('click', () => {
  openModal(pdfMenuModal);
  updatePdfPageView(currentPdfPageIndex);
});

openPdfMenuBtnBanner?.addEventListener('click', () => {
  openModal(pdfMenuModal);
  updatePdfPageView(currentPdfPageIndex);
});

// Promo Modals
promoDetailBtn?.addEventListener('click', () => openModal(promoModal));
promoBogoCard?.addEventListener('click', () => openModal(promoModal));
promoMbgCard?.addEventListener('click', () => openModal(promoModal));

// Location Modals
navVisitBtn?.addEventListener('click', () => openModal(visitModal));
aboutVisitBtn?.addEventListener('click', () => openModal(visitModal));

// Lightbox for Ambience Photos
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const src = item.getAttribute('data-lightbox');
    const caption = item.getAttribute('data-caption') || '';
    if (src && lightboxImg) {
      lightboxImg.src = src;
      if (lightboxCaption) lightboxCaption.textContent = caption;
      openModal(lightboxModal);
    }
  });
});

// Initialize on page load
renderFeaturedItems('all');
renderMenuItems('all');
initPdfThumbnails();

console.log('Second Cup Coffee x BurgerUP - Real Cafe Menu Loaded (34 Pages)! ☕🍔');
