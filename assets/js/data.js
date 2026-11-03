/* Morgan's Builders — catalogue data (demo) */

const ART = {
  bag: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><path d="M46 54h108l14 106H32L46 54z" fill="#fff"/><path d="M46 54l10-16h88l10 16"/><path d="M56 96h88M56 116h72M56 136h60" stroke-width="2"/><path d="M74 38c8 10 44 10 52 0" stroke-width="2"/></svg>`,
  tin: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><path d="M48 44h104v118H48z" fill="#fff"/><path d="M48 60h104"/><path d="M74 30h52v14H74z"/><circle cx="100" cy="108" r="30" stroke-width="2"/><path d="M88 108c6-16 20-16 24 0" stroke-width="2"/></svg>`,
  drill: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><path d="M42 66h74v40H42z" fill="#fff"/><path d="M116 78h34v16h-34z"/><path d="M150 86h26"/><path d="M54 106h22l-8 42H62l-8-42z" fill="#fff"/><path d="M42 82H26v14h16"/><circle cx="79" cy="86" r="9" stroke-width="2"/></svg>`,
  grinder: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><path d="M40 74h70v34H40z" fill="#fff"/><path d="M40 88H26v12h14"/><circle cx="132" cy="91" r="40" stroke-width="2"/><circle cx="132" cy="91" r="9" stroke-width="2"/><path d="M96 91h30"/></svg>`,
  ladder: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><path d="M66 24L46 176M134 24l20 152" stroke-width="4"/><path d="M60 56h80M55 92h90M50 128h100M46 164h108" stroke-width="3"/></svg>`,
  barrow: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><path d="M38 66h96l-18 58H56L38 66z" fill="#fff"/><path d="M134 76h30M52 124L34 168M120 124l22 44"/><circle cx="66" cy="158" r="18"/><circle cx="66" cy="158" r="4"/><path d="M152 128l14 40"/></svg>`,
  geyser: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><rect x="62" y="30" width="76" height="140" rx="38" fill="#fff"/><path d="M100 30v140" stroke-width="1.5"/><path d="M62 74h76M62 126h76" stroke-width="2"/><path d="M62 60H38v22M138 118h24v-22"/></svg>`,
  pipe: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><path d="M28 46h60v96h84" stroke-width="26" stroke-linecap="square" stroke="#fff"/><path d="M28 46h60v96h84" stroke-width="3"/><path d="M28 33v26M172 129v26M88 129h-8" stroke-width="3"/></svg>`,
  tap: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><path d="M60 160h80" stroke-width="4"/><path d="M100 160V96c0-22 16-34 34-34h14v20h-14" fill="#fff"/><path d="M54 78h30v22H54z" fill="#fff"/><path d="M66 78V62"/><circle cx="100" cy="96" r="10" stroke-width="2"/></svg>`,
  motor: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><rect x="54" y="58" width="92" height="88" fill="#fff"/><path d="M74 58V34h52v24"/><path d="M54 84H28M146 84h26"/><circle cx="100" cy="102" r="24" stroke-width="2"/><path d="M100 78v48M76 102h48" stroke-width="1.5"/></svg>`,
  gas: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><path d="M62 66h76v100a10 10 0 01-10 10H72a10 10 0 01-10-10V66z" fill="#fff"/><path d="M62 66c0-10 17-18 38-18s38 8 38 18"/><path d="M88 46V30h24v16"/><path d="M100 30v-8"/><path d="M76 106h48" stroke-width="2"/></svg>`,
  sheet: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><path d="M26 56h148v88H26z" fill="#fff"/><path d="M46 56v88M66 56v88M86 56v88M106 56v88M126 56v88M146 56v88M166 56v88" stroke-width="2"/><path d="M26 100h148" stroke-width="2"/></svg>`,
  hammer: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><path d="M56 44h44v26H56z" fill="#fff"/><path d="M100 46h16c10 0 16 6 16 14s-6 14-16 14h-16"/><path d="M82 70l-18 110h16L96 70"/><path d="M56 57H40" stroke-width="2"/></svg>`,
  jerry: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><path d="M56 62h88v108H56z" fill="#fff"/><path d="M70 62V48h24v14"/><path d="M144 80h14v24h-14"/><path d="M82 96h36v44H82z" stroke-width="2"/><path d="M100 96v44M82 118h36" stroke-width="1.5"/></svg>`,
  bucket: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><path d="M48 64h104l-12 106H60L48 64z" fill="#fff"/><path d="M48 64c0-8 23-14 52-14s52 6 52 14"/><path d="M66 38c0 16 14 26 34 26s34-10 34-26" stroke-width="2" opacity=".5"/><path d="M76 104h48" stroke-width="2"/></svg>`,
  plug: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><rect x="52" y="52" width="96" height="96" rx="10" fill="#fff"/><rect x="80" y="80" width="40" height="40" rx="6" stroke-width="2"/><path d="M92 80V64M108 80V64M92 136v16M108 136v16M80 92H64M80 108H64M136 92h16M136 108h16" stroke-width="2"/></svg>`,
  breaker: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><rect x="52" y="44" width="96" height="112" rx="4" fill="#fff"/><path d="M72 44v-14M128 44v-14M72 156v14M128 156v14" stroke-width="2"/><path d="M88 74h24v46H88z" stroke-width="2"/><path d="M88 96h24" stroke-width="2"/></svg>`,
  lock: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><rect x="52" y="92" width="96" height="76" rx="6" fill="#fff"/><path d="M70 92V70a30 30 0 0160 0v22"/><circle cx="100" cy="126" r="8" stroke-width="2"/><path d="M100 134v14" stroke-width="2"/></svg>`,
  tool: `<svg viewBox="0 0 200 200" fill="none" stroke="#131317" stroke-width="3" stroke-linejoin="round"><circle cx="100" cy="100" r="46" fill="#fff"/><path d="M76 100h48M100 76v48"/></svg>`
};

const PRODUCTS = [
  {id:"ppc-50", name:"PPC Surebuild Cement 50kg", brand:"PPC", cat:"Building", price:109.99, was:null, art:"bag", tag:"Best seller", rating:4.7, reviews:412, unit:"per 50kg bag", stock:"In stock · 240+ bags", finishes:["50kg","25kg","Bulk 1 tonne"], desc:"The 42,5N general-purpose cement every South African site runs on. Mortar, plaster, concrete — one bag does the lot. Blended and bagged in Gauteng."},
  {id:"plascon-20", name:"Plascon Double Velvet 20L", brand:"Plascon", cat:"Paint", price:2899, was:3299, art:"tin", tag:"Save R400", rating:4.8, reviews:286, unit:"20L · covers ~180m²", stock:"In stock · 18 tins", finishes:["Brilliant White","Wall Street","Stoep Grey"], desc:"Washable premium interior emulsion with a soft velvet finish. Two coats covers most plaster without a primer on sound surfaces. Tinted in-store while you wait."},
  {id:"bosch-550", name:"Bosch EasyImpact 550 Hammer Drill", brand:"Bosch", cat:"Power tools", price:1199, art:"drill", tag:"New", rating:4.6, reviews:174, unit:"550W · 13mm chuck", stock:"In stock · 9 units", finishes:["550W","650W Kit"], desc:"The drill that handles brick, concrete and timber without changing machine. 550W motor, 13mm keyless chuck, variable speed trigger and a spare set of carbon brushes in the box."},
  {id:"makita-ga", name:"Makita GA4530 Angle Grinder", brand:"Makita", cat:"Power tools", price:1450, art:"grinder", tag:null, rating:4.9, reviews:98, unit:"720W · 115mm", stock:"Low stock · 3 units", finishes:["115mm","230mm"], desc:"Compact 720W grinder with a 115mm disc, tool-less guard and side handle either side. Cuts rebar, tiles and IBR sheeting all day on a 5m cord."},
  {id:"ladder-32", name:"Aluminium Extension Ladder 3.2m", brand:"Tough Tools", cat:"Access", price:2199, art:"ladder", tag:null, rating:4.5, reviews:63, unit:"3.2m · 150kg rated", stock:"In stock · 6 units", finishes:["3.2m","4.8m","6.4m"], desc:"SABS-tested domestic extension ladder with slip-resistant feet, locking rungs and a 150kg working load. Folds to 1.9m for the bakkie."},
  {id:"barrow", name:"Steel Tray Wheelbarrow", brand:"Tough Tools", cat:"Garden", price:799, art:"barrow", tag:null, rating:4.4, reviews:141, unit:"65L · pneumatic wheel", stock:"In stock · 22 units", finishes:["65L steel","90L steel"], desc:"Powder-coated 65L tray on a 1.2mm frame with a pneumatic wheel that survives paving. The one thing every garden and building job needs."},
  {id:"kwikot-150", name:"Kwikot 150L Electric Geyser", brand:"Kwikot", cat:"Plumbing", price:4850, art:"geyser", tag:"Fitment avail.", rating:4.7, reviews:57, unit:"150L · 3kW element", stock:"In stock · 4 units", finishes:["100L","150L","200L"], desc:"SABS-approved horizontal geyser with a 5-year tank warranty and 3kW element. We can book a PIRB-registered installer for the same week."},
  {id:"wavin-110", name:"Wavin 110mm PVC Sewer Pipe 3m", brand:"Wavin", cat:"Plumbing", price:189, art:"pipe", tag:null, rating:4.3, reviews:76, unit:"per 3m length", stock:"In stock · 120 lengths", finishes:["50mm","110mm","160mm"], desc:"Heavy-duty uPVC soil and waste pipe, 3m lengths, socketed one end. Sold with or without the rubber ring — ask at the counter."},
  {id:"cobra-mix", name:"Cobra Basin Mixer", brand:"Cobra", cat:"Plumbing", price:749, art:"tap", tag:null, rating:4.6, reviews:88, unit:"Chrome · 15mm", stock:"In stock · 14 units", finishes:["Chrome","Brushed nickel","Matte black"], desc:"Solid brass body, ceramic cartridge and a 15-year cartridge warranty. Fits a standard 35mm basin hole with the flexible tails included."},
  {id:"centurion-d5", name:"Centurion D5 Evo Gate Motor Kit", brand:"Centurion", cat:"Security", price:7499, was:7999, art:"motor", tag:"Save R500", rating:4.9, reviews:203, unit:"Kit · 2 remotes + battery", stock:"In stock · 5 kits", finishes:["Sliding gate","Double swing"], desc:"South Africa's most-fitted sliding gate motor. 24V battery backup, anti-crush sensitivity, two remotes and the steel rack included. Installation can be quoted on site."},
  {id:"cadac-9", name:"Cadac 9kg Gas Cylinder", brand:"Cadac", cat:"Braai & gas", price:899, art:"gas", tag:"Exchange", rating:4.8, reviews:311, unit:"9kg · empty", stock:"In stock · 30+", finishes:["3kg","9kg","19kg"], desc:"Sealed, stamped and pressure-tested. Bring your old bottle and we swop it on the spot — no booking, no queue longer than a braai fire takes to light."},
  {id:"ibr-058", name:"IBR Roof Sheeting 0.58mm", brand:"Mazista", cat:"Roofing", price:219, art:"sheet", tag:null, rating:4.6, reviews:64, unit:"per running metre", stock:"In stock · cut to length", finishes:["IBR","Corrugated","Chromadek"], desc:"Chromadek pre-painted IBR in charcoal, 0.58mm. Cut to your length while you wait, with colour-matched screws and closures off the shelf."},
  {id:"stanley-ham", name:"Stanley FatMax Hammer 20oz", brand:"Stanley", cat:"Hand tools", price:459, art:"hammer", tag:null, rating:4.8, reviews:132, unit:"20oz · steel shaft", stock:"In stock · 26 units", finishes:["16oz","20oz"], desc:"One-piece forged steel shaft with an anti-vibration grip — the hammer that outlasts the handle on every other brand. Lifetime head warranty."},
  {id:"paraffin-20", name:"Paraffin 20L", brand:"Illuminating", cat:"Essentials", price:399, art:"jerry", tag:"Essential", rating:4.2, reviews:519, unit:"20L · sealed", stock:"In stock · daily refill", finishes:["5L","20L","200L drum"], desc:"Clean-burning illuminating paraffin in a sealed 20L container. Poured at the counter, never pre-opened stock."},
  {id:"sika-25", name:"SikaCeram Tile Adhesive 25kg", brand:"Sika", cat:"Building", price:169, art:"bucket", tag:null, rating:4.5, reviews:97, unit:"25kg bag", stock:"In stock · 80 bags", finishes:["Standard","Flexible"], desc:"Cement-based adhesive for ceramic and porcelain tiles on floors and walls. Mixes to a non-slump butter that holds a 600x600 tile without slipping."},
  {id:"ellies-4", name:"Ellies 12-Way Surge Protector", brand:"Ellies", cat:"Electrical", price:229, art:"plug", tag:null, rating:4.4, reviews:186, unit:"4 sockets · 1.5m", stock:"In stock · 40 units", finishes:["12-way","8-way"], desc:"Protects the fridge, TV and geyser pump from load-shedding spikes and surge back-feed. Rewireable plug top included."},
  {id:"cbi-20", name:"CBI 20A Circuit Breaker", brand:"CBI", cat:"Electrical", price:139, art:"breaker", tag:null, rating:4.7, reviews:154, unit:"20A · single pole", stock:"In stock · 60 units", finishes:["10A","20A","32A"], desc:"DIN-rail miniature breaker with a 6kA breaking capacity. The standard replacement for a tripping board in an older Johannesburg house."},
  {id:"padlock-50", name:"Brass Padlock 50mm", brand:"Yale", cat:"Security", price:129, art:"lock", tag:null, rating:4.3, reviews:71, unit:"50mm · 3 keys", stock:"In stock · 55 units", finishes:["40mm","50mm","70mm"], desc:"Solid brass body with a hardened steel shackle and three keys. Weatherproof for gates, sheds and site containers."}
];

const CATEGORIES = [
  {name:"Building & cement", count:"128 lines", art:"bag", img:"ppc-50", q:"Building"},
  {name:"Paint & finishes", count:"96 lines", art:"tin", img:"plascon-20", q:"Paint"},
  {name:"Power & hand tools", count:"214 lines", art:"drill", img:"makita-ga", q:"Power tools"},
  {name:"Plumbing", count:"167 lines", art:"tap", img:"cobra-mix", q:"Plumbing"}
];

const ESSENTIALS = [
  {n:"Cement & mortar", s:"PPC · AfriSam · Sika", p:"from R109", art:"bag"},
  {n:"Paint & thinners", s:"Plascon · Duram · Hammerite", p:"from R189", art:"tin"},
  {n:"Electrical", s:"CBI · Ellies · cable", p:"from R49", art:"breaker"},
  {n:"Plumbing & pipes", s:"Wavin · Cobra · Kwikot", p:"from R79", art:"pipe"},
  {n:"Gas & paraffin", s:"Cadac · refills daily", p:"from R129", art:"gas"},
  {n:"Fasteners & fittings", s:"Nails · screws · rawl", p:"from R25", art:"tool"}
];

const HOME_REVIEWS = [
  {n:"Thabo M.", w:"Contractor · Protea Glen", s:5, q:"I phone Morgan at 6:40 in the morning and the cement is on my bakkie by 7:15. That is the whole reason I stopped driving to the big-box stores.", d:"2 weeks ago"},
  {n:"Lindiwe K.", w:"Homeowner · Lenasia", s:5, q:"They matched my wall paint from a chip I chipped off myself and mixed it in ten minutes. Cheaper than the warehouse and I did not wait in a queue.", d:"1 month ago"},
  {n:"Riaan v.d. Merwe", w:"Builder · Ennerdale", s:4, q:"Stock is real — if the app says 3 grinders left, there are 3 grinders. Only gripe is parking on a Saturday morning.", d:"1 month ago"},
  {n:"Nomsa D.", w:"Homeowner · Soweto", s:5, q:"Bought a geyser and they booked the installer for the same week. No deposit games, no runaround. Paid on delivery.", d:"2 months ago"},
  {n:"Ashwin P.", w:"Plumber · Eldorado Park", s:5, q:"Their pipe and fitting range covers 90% of what I need on a callout. The other 10% they order and it lands the next morning.", d:"2 months ago"},
  {n:"Johan S.", w:"Site foreman · Johannesburg South", s:4, q:"Bulk pricing on cement and IBR sheeting is competitive. Quote came back same day on WhatsApp.", d:"3 months ago"}
];

const PRODUCT_REVIEWS = {
  "ppc-50": [
    {n:"Sipho N.", s:5, t:"Consistent mix, no lumps", b:"Bought 40 bags for a slab. Every bag mixed the same, no hard lumps in the batch. Delivered on the bakkie same morning.", d:"3 weeks ago", v:true},
    {n:"Thabo M.", s:5, t:"Site standard for a reason", b:"This is what the whole site uses. PPC 42,5N, nothing to argue about.", d:"1 month ago", v:true},
    {n:"Zanele M.", s:4, t:"Heavy but worth it", b:"Needed help loading, the staff carried it out for me. Cement works fine for plaster.", d:"2 months ago", v:false}
  ],
  "plascon-20": [
    {n:"Lindiwe K.", s:5, t:"Matched my chip perfectly", b:"Took a paint chip in and they tinted a 20L to match. Covered 160m² with two coats and about 2L spare.", d:"2 weeks ago", v:true},
    {n:"Ashwin P.", s:5, t:"Best interior finish", b:"Washable, no roller marks, dries even. Worth the extra over the budget tins.", d:"1 month ago", v:true}
  ],
  "centurion-d5": [
    {n:"Johan S.", s:5, t:"Fitted in one afternoon", b:"Kit was complete — rack, remotes, battery, everything. Sensitivity set up properly, no false stops.", d:"3 weeks ago", v:true},
    {n:"Riaan v.d. Merwe", s:4, t:"Solid motor, buy the rack", b:"Motor is faultless. Get the longer rack if your gate is over 4m.", d:"1 month ago", v:true}
  ]
};

const GATEWAYS = [
  {id:"payfast", n:"PayFast", s:"Card, Instant EFT & SnapScan", f:"R0.00", badge:"Most popular"},
  {id:"yoco", n:"Yoco", s:"Debit & credit card online", f:"R0.00"},
  {id:"ozow", n:"Ozow", s:"Instant EFT from your bank app", f:"R0.00"},
  {id:"snapscan", n:"SnapScan", s:"Scan the QR with your phone", f:"R0.00"},
  {id:"eft", n:"Bank transfer (EFT)", s:"Order ships once funds reflect", f:"R0.00"},
  {id:"cash", n:"Pay on collection", s:"Cash or card at the counter", f:"R0.00"}
];

const money = n => "R" + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
window.ART = ART; window.PRODUCTS = PRODUCTS; window.CATEGORIES = CATEGORIES;
window.ESSENTIALS = ESSENTIALS; window.HOME_REVIEWS = HOME_REVIEWS;
window.PRODUCT_REVIEWS = PRODUCT_REVIEWS; window.GATEWAYS = GATEWAYS; window.money = money;
