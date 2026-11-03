/* Morgan's Builders — shared chrome, cart, product, checkout */
(function () {
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const P = window.PRODUCTS, money = window.money;
  const byId = id => P.find(p => p.id === id);
  const KEY = "mb_cart_v1";

  /* ---------- imagery ---------- */
  const photo = id => (window.PHOTOS || {})[id];
  const artFor = (p, opt) => photo(p.id)
    ? `<img src="${photo(p.id)}" alt="${p.name}" loading="lazy" decoding="async">`
    : ART[p.art];

  /* ---------- cart state ---------- */
  function read() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function write(c) { localStorage.setItem(KEY, JSON.stringify(c)); paint(); }
  let CART = read();
  const count = () => CART.reduce((n, l) => n + l.qty, 0);
  const subtotal = () => CART.reduce((n, l) => n + byId(l.id).price * l.qty, 0);
  const shipping = () => (subtotal() === 0 || subtotal() >= 750 ? 0 : 95);
  const vat = () => (subtotal() + shipping()) * 0.15;
  const total = () => subtotal() + shipping() + vat();

  function add(id, qty) {
    const line = CART.find(l => l.id === id);
    if (line) line.qty += qty || 1; else CART.push({ id, qty: qty || 1 });
    write(CART);
    const p = byId(id);
    toast(p.name + " added to cart");
    openDrawer();
  }
  function setQty(id, q) {
    const line = CART.find(l => l.id === id);
    if (!line) return;
    line.qty = Math.max(0, q);
    if (line.qty === 0) CART = CART.filter(l => l.id !== id);
    write(CART);
  }
  function clearCart() { CART = []; write(CART); }

  /* ---------- chrome ---------- */
  function starStr(n) {
    let s = "";
    for (let i = 1; i <= 5; i++) s += i <= Math.round(n) ? "★" : "☆";
    return s;
  }
  function headerHTML() {
    return `
    <div class="strip" id="strip"><b>Free delivery on orders over R750</b> across Johannesburg South · Order before 14:00 for same-day · <b>Load-shedding ready</b><button aria-label="Dismiss" onclick="document.getElementById('strip').style.display='none'">✕</button></div>
    <header>
      <div class="hdr">
        <nav class="nav">
          <a href="shop.html">Shop</a>
          <a href="shop.html?cat=Building">Building</a>
          <a href="shop.html?cat=Paint">Paint</a>
          <a href="shop.html?cat=Power%20tools">Tools</a>
          <a href="shop.html?cat=Plumbing">Plumbing</a>
        </nav>
        <button class="menu-toggle" aria-label="Menu" onclick="document.querySelector('.nav').style.display='flex';this.style.display='none'">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#131317" stroke-width="1.6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
        <a class="brand" href="index.html">
          <span class="word">Morgan's Builders</span>
          <span class="sub">Hardware · Johannesburg South · Est. 1998</span>
        </a>
        <div class="utils">
          <form class="search" role="search" onsubmit="event.preventDefault();location.href='shop.html?q='+encodeURIComponent(this.q.value)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/></svg>
            <input name="q" placeholder="Search cement, paint, tools…" aria-label="Search products">
          </form>
          <a class="icon" href="tel:+27118541200" aria-label="Call the store">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#131317" stroke-width="1.6"><path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2.2 2A17 17 0 014.5 5.7 2 2 0 016.5 3.5z"/></svg>
          </a>
          <a class="icon" href="shop.html" aria-label="Store">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#131317" stroke-width="1.6"><path d="M4 9h16v11H4z"/><path d="M3 9l2-5h14l2 5"/><path d="M9 20v-6h6v6"/></svg>
          </a>
          <button class="icon" id="cartBtn" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#131317" stroke-width="1.6"><path d="M5 7h14l-1.5 12h-11L5 7z"/><path d="M9 7V5.5a3 3 0 016 0V7"/></svg>
            <span class="badge" id="cartCount">0</span>
          </button>
        </div>
      </div>
    </header>`;
  }
  function footerHTML() {
    return `<footer>
      <div class="wrap">
        <div class="fgrid">
          <div class="fbrand">
            <div class="word">Morgan's Builders</div>
            <p>Building materials, hardware and the essentials — supplied to Johannesburg South since 1998. Stock, trade pricing and delivery, without the queue.</p>
            <p style="margin-top:18px">Mackenzie Place, Lenasia South<br>Johannesburg, 1827<br><a href="tel:+27118541200" style="display:inline;color:#131317;text-decoration:underline">+27 11 854 1200</a></p>
          </div>
          <div><h5>Shop</h5><a href="shop.html?cat=Building">Building & cement</a><a href="shop.html?cat=Paint">Paint & finishes</a><a href="shop.html?cat=Power%20tools">Power tools</a><a href="shop.html?cat=Plumbing">Plumbing</a><a href="shop.html?cat=Security">Security</a></div>
          <div><h5>Trade</h5><a href="#">Trade account</a><a href="#">Bulk quotes</a><a href="#">Delivery & fleet</a><a href="#">Credit application</a><a href="#">Site delivery zones</a></div>
          <div><h5>Store</h5><a href="#">Opening hours</a><a href="#">Returns policy</a><a href="#">Installations</a><a href="#">Contact</a><a href="#">Directions</a></div>
        </div>
        <div class="fbot">
          <span>© 2026 Morgan's Builders (Pty) Ltd · Reg 1998/014277/07 · VAT 4020152883</span>
          <span>Demo storefront — payments are simulated. Design study, no live orders.</span>
        </div>
      </div>
    </footer>`;
  }
  function drawerHTML() {
    return `<div class="scrim" id="scrim"></div>
      <aside class="drawer" id="drawer" aria-label="Cart">
        <div class="dh"><b>Your cart <span id="drawerCount" style="font-family:Arial;font-weight:400;font-size:13px;letter-spacing:0;color:#40464b"></span></b>
          <button onclick="window.MBCart.close()" aria-label="Close cart" style="font-size:20px">✕</button></div>
        <div class="items" id="cartItems"></div>
        <div class="df" id="cartFoot"></div>
      </aside>
      <div class="proc" id="proc"><div class="box"><div class="spin" id="procSpin"></div><h3 id="procTitle">Securing payment</h3><p id="procMsg">Connecting to PayFast…</p>
        <div id="procDone" style="display:none">
          <div style="font-size:44px;line-height:1;margin-bottom:12px">✓</div>
          <h3>Order placed</h3>
          <p id="procOrder" style="margin-bottom:24px"></p>
          <a class="btn btn-dark btn-block" href="index.html">Back to the store</a>
        </div>
      </div></div>
      <div class="toast" id="toast"></div>`;
  }

  function renderChrome() {
    const h = $("#chrome");
    if (h) { h.innerHTML = headerHTML(); }
    document.body.insertAdjacentHTML("beforeend", drawerHTML());
    $("#cartBtn").onclick = openDrawer;
    $("#scrim").onclick = closeDrawer;
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });
    paint();
  }
  function openDrawer() { $("#drawer").classList.add("on"); $("#scrim").classList.add("on"); document.body.style.overflow = "hidden"; }
  function closeDrawer() { const d = $("#drawer"); if (!d) return; d.classList.remove("on"); $("#scrim").classList.remove("on"); document.body.style.overflow = ""; }

  function paint() {
    const badge = $("#cartCount"); if (!badge) return;
    badge.textContent = count();
    badge.style.display = count() ? "grid" : "none";
    const dc = $("#drawerCount"); if (dc) dc.textContent = count() ? "· " + count() + (count() === 1 ? " item" : " items") : "";
    const box = $("#cartItems");
    if (box) {
      box.innerHTML = CART.length ? CART.map(l => {
        const p = byId(l.id);
        return `<div class="ditem"><div class="art">${artFor(p)}</div>
          <div style="flex:1">
            <b>${p.name}</b>
            <div class="sm">${p.brand} · ${money(p.price)}</div>
            <div class="qty"><button onclick="window.MBCart.setQty('${p.id}',${l.qty - 1})">−</button><span>${l.qty}</span><button onclick="window.MBCart.setQty('${p.id}',${l.qty + 1})">+</button></div>
            <div><button class="rm" onclick="window.MBCart.setQty('${p.id}',0)">Remove</button></div>
          </div>
          <div style="font-family:Dosis,Arial;font-weight:900;font-size:16px;white-space:nowrap">${money(p.price * l.qty)}</div>
        </div>`;
      }).join("") : `<div class="empty">Your cart is empty.<br><br><a class="btn" href="shop.html">Start shopping</a></div>`;
    }
    const foot = $("#cartFoot");
    if (foot) {
      foot.innerHTML = CART.length ? `
        <div class="sumrow"><span>Subtotal</span><span>${money(subtotal())}</span></div>
        <div class="sumrow"><span>Delivery</span><span>${shipping() ? money(shipping()) : "Free"}</span></div>
        <div class="sumrow"><span>VAT 15%</span><span>${money(vat())}</span></div>
        <div class="sumrow tot"><span>Total</span><span>${money(total())}</span></div>
        <a class="btn btn-dark btn-block" style="margin-top:18px" href="checkout.html">Checkout</a>
        <div class="lock">🔒 Checkout secured · PayFast · Yoco · Ozow</div>`
        : `<div class="lock" style="margin:0">Free delivery over R750 · PayFast · Yoco · Ozow · SnapScan</div>`;
    }
  }

  let tt;
  function toast(msg) {
    const t = $("#toast"); if (!t) return;
    t.textContent = msg; t.classList.add("on");
    clearTimeout(tt); tt = setTimeout(() => t.classList.remove("on"), 2200);
  }

  /* ---------- components ---------- */
  function card(p) {
    return `<article class="card">
      <a class="art" href="product.html?id=${p.id}">${artFor(p)}</a>
      <div class="meta">
        <div class="top"><span class="brandline">${p.brand}</span>${p.tag ? `<span class="tag">${p.tag}</span>` : ""}</div>
        <a href="product.html?id=${p.id}"><h3>${p.name}</h3></a>
        <div class="stars">${starStr(p.rating)}<span>${p.rating} (${p.reviews})</span></div>
        <div class="price">${money(p.price)}${p.was ? ` <span style="font-size:12px;font-weight:400;color:#949494;text-decoration:line-through;font-family:Arial">${money(p.was)}</span>` : ""}<small>${p.unit} · incl. VAT</small></div>
        <button class="btn btn-block" onclick="event.preventDefault();window.MBCart.add('${p.id}',1)">Add to cart</button>
      </div>
    </article>`;
  }

  /* ---------- page: home ---------- */
  function home() {
    $("#cats").innerHTML = CATEGORIES.map(c => `
      <a class="cat" href="shop.html?cat=${encodeURIComponent(c.q)}">
        <div class="art">${(window.PHOTOS||{})[c.img]?`<img src="${window.PHOTOS[c.img]}" alt="${c.name}" loading="lazy">`:ART[c.art]}</div>
        <div class="lbl"><b>${c.name}</b><span>${c.count}</span></div>
      </a>`).join("");
    $("#rail").innerHTML = P.slice(0, 8).map(card).join("");
    $("#ess").innerHTML = ESSENTIALS.map(e => `
      <a class="ess" href="shop.html?q=${encodeURIComponent(e.n.split(" ")[0])}">${ART[e.art]}<div><b>${e.n}</b><span>${e.s}</span></div><div class="p">${e.p}</div></a>`).join("");
    $("#reviews").innerHTML = HOME_REVIEWS.slice(0, 3).map(r => `
      <div class="rev"><div class="stars">${starStr(r.s)}</div>
        <blockquote>“${r.q}”</blockquote>
        <div class="who"><b>${r.n}</b>${r.w} · ${r.d}<span class="vd"></span></div>
      </div>`).join("");
  }

  /* ---------- page: shop ---------- */
  function shop() {
    const qs = new URLSearchParams(location.search);
    const q = (qs.get("q") || "").toLowerCase();
    const cat = qs.get("cat") || "All";
    const cats = ["All", ...new Set(P.map(p => p.cat))];
    $("#filters").innerHTML = cats.map(c => `<a class="chip ${c === cat ? "on" : ""}" href="shop.html${c === "All" ? "" : "?cat=" + encodeURIComponent(c)}">${c}</a>`).join("");
    let list = P.filter(p => cat === "All" || p.cat === cat);
    if (q) list = P.filter(p => (p.name + p.brand + p.cat + p.desc).toLowerCase().includes(q));
    $("#grid").innerHTML = list.length ? list.map(card).join("") : `<div style="grid-column:1/-1;background:#f8f8f8;padding:64px;text-align:center"><h3 style="font-size:28px">Nothing matched “${q}”</h3><p style="color:#40464b;margin:12px 0 20px;font-size:14px">Try cement, paint, drill, geyser or padlock.</p><a class="btn" href="shop.html">Clear search</a></div>`;
    $("#count").textContent = list.length + (list.length === 1 ? " product" : " products");
    if (q) $("#title").textContent = "Search: " + q;
    else if (cat !== "All") $("#title").textContent = cat;
  }

  /* ---------- page: product ---------- */
  function product() {
    const id = new URLSearchParams(location.search).get("id") || P[0].id;
    const p = byId(id) || P[0];
    document.title = p.name + " · Morgan's Builders";
    const opts = p.finishes || [];
    let chosen = opts.find(o => p.name.includes(o) || (p.unit || "").includes(o)) || opts[0];
    let qty = 1, tab = "specs";
    const revs = (window.PRODUCT_REVIEWS[p.id] || [
      { n: "Verified buyer", s: 5, t: "Does the job", b: "Bought this at the counter and it has held up. Staff knew what they were talking about.", d: "recently", v: true }
    ]);

    $("#pdp").innerHTML = `
      <div class="gallery">${artFor(p)}</div>
      <div class="detail">
        <div class="crumb"><a href="index.html">Home</a><span>/</span><a href="shop.html?cat=${encodeURIComponent(p.cat)}">${p.cat}</a><span>/</span><span>${p.brand}</span></div>
        <span class="brandline" style="font-size:11px;letter-spacing:1.6px;text-transform:uppercase;color:#40464b">${p.brand}</span>
        <h1>${p.name}</h1>
        <div class="stars" style="font-size:14px">${starStr(p.rating)}<span>${p.rating} · ${p.reviews} reviews</span></div>
        <div class="pr">${money(p.price)}${p.was ? ` <span style="font-family:Arial;font-size:16px;font-weight:400;color:#949494;text-decoration:line-through">${money(p.was)}</span>` : ""}<small>${p.unit} · incl. 15% VAT · ${p.tag || "Trade pricing available"}</small></div>
        <p class="desc">${p.desc}</p>
        <div class="stock"><span class="dot"></span>${p.stock}</div>
        <div class="opt">
          <div class="lab">Size / finish — <b id="optLabel">${chosen}</b></div>
          <div class="chips" id="chips">${opts.map(o => `<button class="chip ${o === chosen ? "on" : ""}" data-o="${o}">${o}</button>`).join("")}</div>
        </div>
        <div class="row">
          <div class="qty"><button id="minus">−</button><span id="qty">1</span><button id="plus">+</button></div>
          <button class="btn btn-dark" id="addBtn">Add to cart — ${money(p.price)}</button>
        </div>
        <a class="btn btn-block" href="checkout.html" style="margin-top:0" onclick="window.MBCart.add('${p.id}',1)">Buy it now</a>
        <div class="svc">
          <div><span>Collection</span><span>Ready in 30 min · Mackenzie Pl, Lenasia South</span></div>
          <div><span>Delivery</span><span>R95 within 25km · free over R750</span></div>
          <div><span>Returns</span><span>30 days, unused and sealed</span></div>
          <div><span>Trade account</span><span>30-day terms on approved accounts</span></div>
        </div>
      </div>
      <div class="pdp-tabs">
        <div class="wrap">
          <div class="tabs"><button class="tab on" data-t="specs">Specifications</button><button class="tab" data-t="reviews">Reviews (${revs.length})</button><button class="tab" data-t="delivery">Delivery & returns</button></div>
          <div id="tabBody"></div>
        </div>
      </div>`;

    function paintTab() {
      const stars = revs.map(r => r.s).reduce((a, b) => a + b, 0) / revs.length;
      const bodies = {
        specs: `<div class="svc" style="margin-top:0;border-top:0;padding-top:0;max-width:640px">
            <div><span>Brand</span><span>${p.brand}</span></div>
            <div><span>Category</span><span>${p.cat}</span></div>
            <div><span>Pack / size</span><span>${p.unit}</span></div>
            <div><span>Options in stock</span><span>${opts.join(" · ")}</span></div>
            <div><span>Barcode</span><span>MB-${p.id.toUpperCase()}-${(p.name.length * 37).toString().slice(0, 6)}</span></div>
            <div><span>Warranty</span><span>Manufacturer warranty · claim in store</span></div>
          </div>`,
        reviews: `<div style="display:flex;gap:40px;align-items:center;flex-wrap:wrap;margin-bottom:8px">
            <div><div class="big" style="font-family:Dosis,Arial;font-size:60px;font-weight:900;line-height:.8">${stars.toFixed(1)}</div><div class="stars" style="margin-top:8px">${starStr(stars)}<span>${revs.length} verified reviews</span></div></div>
            <div style="font-size:13px;color:#40464b;max-width:40ch">Every review below is from a customer who bought this item at the counter or on this store.</div>
          </div>
          <div class="rv">${revs.map(r => `<div class="item"><div class="hd"><div><b>${r.t}</b>${r.v ? '<span class="vd">✓ verified purchase</span>' : ""}</div><span style="color:#40464b">${r.d}</span></div><div class="stars">${starStr(r.s)}</div><p style="margin-top:8px">${r.b}</p><div style="font-size:12px;color:#40464b;margin-top:10px">${r.n}</div></div>`).join("")}</div>
          <a class="btn" style="margin-top:24px" href="#" onclick="event.preventDefault();window.MBtoast('Reviews are demo data')">Write a review</a>`,
        delivery: `<div class="svc" style="margin-top:0;border-top:0;padding-top:0;max-width:640px">
            <div><span>Collect in store</span><span>Free · ready in 30 minutes during trading hours</span></div>
            <div><span>Local delivery</span><span>R95 within 25km of Lenasia South · free over R750</span></div>
            <div><span>Delivery window</span><span>Same day if ordered before 14:00, else next working day</span></div>
            <div><span>Returns</span><span>30 days on unused, sealed stock with proof of purchase</span></div>
            <div><span>Payment</span><span>PayFast · Yoco · Ozow · SnapScan · EFT · cash on collection</span></div>
          </div>`
      };
      $("#tabBody").innerHTML = bodies[tab];
      $$(".tab").forEach(t => t.classList.toggle("on", t.dataset.t === tab));
    }
    paintTab();
    $$(".tab").forEach(t => t.onclick = () => { tab = t.dataset.t; paintTab(); });
    $$("#chips .chip").forEach(c => c.onclick = () => {
      chosen = c.dataset.o;
      $$("#chips .chip").forEach(x => x.classList.toggle("on", x === c));
      $("#optLabel").textContent = chosen;
    });
    const setQ = n => { qty = Math.max(1, n); $("#qty").textContent = qty; $("#addBtn").textContent = "Add to cart — " + money(p.price * qty); };
    $("#plus").onclick = () => setQ(qty + 1);
    $("#minus").onclick = () => setQ(qty - 1);
    $("#addBtn").onclick = () => window.MBCart.add(p.id, qty);
  }

  /* ---------- page: checkout ---------- */
  function checkout() {
    CART = read(); paint();
    if (!CART.length) {
      $("#coRoot").innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:120px 24px">
        <h1 style="font-size:44px">Your cart is empty</h1>
        <p style="color:#40464b;margin:16px 0 28px;font-size:15px">Add cement, paint or tools and come back — checkout takes under a minute.</p>
        <a class="btn btn-dark" href="shop.html">Browse the store</a></div>`;
      return;
    }
    let gw = "payfast", del = "delivery";
    const sumHTML = () => `
      <h3>Order summary</h3>
      ${CART.map(l => { const p = byId(l.id); return `<div class="li"><div class="art">${artFor(p)}</div><div><b>${p.name}</b><div class="q">Qty ${l.qty} · ${p.brand}</div></div><div class="p">${money(p.price * l.qty)}</div></div>`; }).join("")}
      <div style="margin-top:18px">
        <div class="sumrow"><span>Subtotal</span><span>${money(subtotal())}</span></div>
        <div class="sumrow"><span>${del === "collection" ? "Collection" : "Delivery"}</span><span>${del === "collection" ? "Free" : shipping() ? money(shipping()) : "Free"}</span></div>
        <div class="sumrow"><span>VAT 15%</span><span>${money(del === "collection" ? subtotal() * 0.15 : vat())}</span></div>
        <div class="sumrow tot"><span>Total</span><span>${money(del === "collection" ? subtotal() * 1.15 : total())}</span></div>
      </div>
      <div class="lock">🔒 PCI-DSS compliant · your card details never touch our server</div>`;

    $("#coRoot").innerHTML = `
      <div>
        <div class="steps"><span><b>1. Details</b></span><span>2. Payment</span><span>3. Done</span></div>
        <h3 class="blk">Contact</h3>
        <div class="two">
          <div class="field"><label>First name</label><input id="fn" placeholder="Thabo" required></div>
          <div class="field"><label>Surname</label><input id="ln" placeholder="Mokoena" required></div>
        </div>
        <div class="two">
          <div class="field"><label>Mobile</label><input id="ph" placeholder="082 000 0000"></div>
          <div class="field"><label>Email</label><input id="em" type="email" placeholder="you@example.co.za"></div>
        </div>

        <h3 class="blk">How would you like it?</h3>
        <div class="pick on" data-del="delivery"><span class="rad"></span><div><b>Deliver to me</b><span>R95 within 25km · free over R750 · same day before 14:00</span></div><span class="pf">${shipping() ? money(shipping()) : "Free"}</span></div>
        <div class="pick" data-del="collection"><span class="rad"></span><div><b>Collect in store</b><span>Mackenzie Pl, Lenasia South Ext 1 · ready in 30 min</span></div><span class="pf">Free</span></div>

        <div id="addrBlock">
          <h3 class="blk">Delivery address</h3>
          <div class="field"><label>Street address</label><input placeholder="1123 Motsoaledi Street"></div>
          <div class="two">
            <div class="field"><label>Suburb</label><input placeholder="Protea Glen"></div>
            <div class="field"><label>City</label><input value="Johannesburg"></div>
          </div>
          <div class="three">
            <div class="field"><label>Province</label><select><option>Gauteng</option><option>North West</option><option>Free State</option><option>Mpumalanga</option><option>Limpopo</option><option>KwaZulu-Natal</option><option>Eastern Cape</option><option>Western Cape</option><option>Northern Cape</option></select></div>
            <div class="field"><label>Postal code</label><input placeholder="1818"></div>
            <div class="field"><label>Gate / unit</label><input placeholder="Optional"></div>
          </div>
          <div class="field"><label>Delivery notes</label><textarea rows="2" placeholder="Bakkie can't get past the boom — call on arrival"></textarea></div>
        </div>

        <h3 class="blk">Payment</h3>
        <div class="gw" id="gw">${window.GATEWAYS.map((g, i) => `
          <div class="pick ${i === 0 ? "on" : ""}" data-gw="${g.id}"><span class="rad"></span><div><b>${g.n}${g.badge ? ` <span class="tag" style="font-size:9px;padding:2px 8px;margin-left:4px">${g.badge}</span>` : ""}</b><span>${g.s}</span></div></div>`).join("")}
        </div>
        <div style="font-size:12px;color:#40464b;margin:14px 0 0;display:flex;gap:8px;align-items:center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#131317" stroke-width="1.6"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>
          This is a demo storefront. No card is charged and no order is dispatched.
        </div>
        <button class="btn btn-dark btn-block" id="pay" style="margin-top:24px;padding:18px">Place order</button>
      </div>
      <aside class="summary" id="summary">${sumHTML()}</aside>`;

    function repaint() { $("#summary").innerHTML = sumHTML(); }
    $$("#gw .pick").forEach(el => el.onclick = () => { gw = el.dataset.gw; $$("#gw .pick").forEach(x => x.classList.toggle("on", x === el)); });
    $$("[data-del]").forEach(el => el.onclick = () => {
      del = el.dataset.del;
      $$("[data-del]").forEach(x => x.classList.toggle("on", x === el));
      $("#addrBlock").style.display = del === "collection" ? "none" : "block";
      repaint();
    });

    $("#pay").onclick = () => {
      const fn = $("#fn").value.trim();
      if (!fn) { $("#fn").style.borderColor = "#c0392b"; $("#fn").focus(); window.MBtoast("Please add your name to place the order"); return; }
      const g = window.GATEWAYS.find(x => x.id === gw);
      const overlay = $("#proc");
      overlay.classList.add("on");
      $("#procSpin").style.display = "block";
      $("#procTitle").textContent = "Securing payment";
      $("#procMsg").textContent = "Redirecting to " + g.n + " · " + g.s + "…";
      $("#procDone").style.display = "none";
      const amt = del === "collection" ? subtotal() * 1.15 : total();
      const order = "MB-" + new Date().getFullYear() + "-" + String(Math.floor(1000 + Math.random() * 8999));
      setTimeout(() => {
        $("#procSpin").style.display = "none";
        $("#procTitle").style.display = "none";
        $("#procMsg").style.display = "none";
        $("#procDone").querySelector("h3").textContent = (g.id === "cash" || g.id === "eft") ? "Order confirmed" : "Payment approved";
        $("#procDone").insertAdjacentHTML("afterbegin", `<p style="font-size:13px;color:#40464b;margin:0 0 18px">${money(amt)} · ${del === "collection" ? "collect in 30 min" : "delivery booked"}</p>`);
        $("#procOrder").innerHTML = `Reference <b>${order}</b><br>Paid with ${g.n} · ${del === "collection" ? "Collection at Lenasia South" : "Delivery to " + (fn || "you") + " in Johannesburg South"}<br><span style="font-size:12px;color:#40464b">A confirmation SMS would go to ${$("#ph").value || "your mobile"}.</span>`;
        $("#procDone").style.display = "block";
        clearCart();
      }, 1900);
    };
  }

  /* ---------- boot ---------- */
  window.MBCart = { add, setQty, open: openDrawer, close: closeDrawer };
  window.MBtoast = toast;
  window.MBmoney = money;
  document.addEventListener("DOMContentLoaded", () => {
    renderChrome();
    const page = document.body.dataset.page;
    if (page === "home") home();
    if (page === "shop") shop();
    if (page === "product") product();
    if (page === "checkout") checkout();
  });
})();
