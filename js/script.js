const $ = s => document.querySelector(s);
const nav = ['Home','About','Journey','Skills','Projects','Services','Experience','Contact'];
nav.forEach(n => {
  const a = `<a href="#${n.toLowerCase()}" class="block py-2 hover:text-indigo-600 dark:hover:text-indigo-400">${n}</a>`;
  $('#links').insertAdjacentHTML('beforeend', `<li>${a}</li>`);
  $('#mobile').insertAdjacentHTML('beforeend', `<li>${a}</li>`);
});
$('#burger').onclick = () => { const m = $('#mobile'); const open = m.classList.toggle('hidden') === false; $('#burger').setAttribute('aria-expanded', open); $('#burger').textContent = open ? '✕' : '☰'; };
$('#mobile').onclick = e => { if (e.target.tagName === 'A') { $('#mobile').classList.add('hidden'); $('#burger').textContent = '☰'; } };
$('#theme').onclick = () => { document.documentElement.classList.toggle('dark'); };
$('#yr').textContent = new Date().getFullYear();

const chip = 'px-3.5 py-2 rounded-lg text-sm font-medium border ';
['HTML5','CSS3','JavaScript','Tailwind CSS','Bootstrap','Responsive Web Design','WordPress','Git & GitHub'].forEach(s =>
  $('#core').insertAdjacentHTML('beforeend', `<span class="${chip}bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 hover:-translate-y-0.5 transition">${s}</span>`));
['Basic PHP','Basic Node.js','Basic MongoDB','MS Office / Excel','AI Tools & Prompt Writing'].forEach(s =>
  $('#basic').insertAdjacentHTML('beforeend', `<span class="${chip}bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:-translate-y-0.5 transition">${s}</span>`));

  const projects = [
    [
      'Real Estate Website',
      'Modern real estate platform featuring property listings, advanced search, location-based filtering, property details, and a responsive design for seamless browsing across all devices.',
      ['HTML','CSS','JavaScript','Tailwind CSS'],
      '<img src="images/projects/realstate.png" alt="Real Estate Website" class="w-full h-full object-cover">',
      'from-indigo-500 to-indigo-400',
      'https://shaileshbuilds.github.io/vastora-realty/',
      'https://github.com/shaileshBuilds/vastora-realty'
      
    ],
  
    [
      'Personal Portfolio Website',
      'Responsive portfolio with mobile menu toggle, smooth navigation and a contact section.',
      ['HTML','CSS','JavaScript','Tailwind CSS'],
      '<img src="images/projects/portpholio.png" alt="Portfolio Website" class="w-full h-full object-cover">',
      'from-indigo-700 to-indigo-500',
      'https://shaileshbuilds.github.io/Portfolio/',
      'https://github.com/shaileshBuilds/Portfolio'
    ],
  
    [
      'FRESHMART – Grocery E-Commerce Website',
      'Premium grocery e-commerce website with responsive design, product search, filtering, cart, wishlist, offers, and interactive shopping functionality.',
      ['HTML','CSS3','JavaScript','Tailwind CSS','local storage','lucid icons'],
      '<img src="/images/projects/freshmart_grosary.png" alt="e-commerce website" class="w-full h-full object-cover">',
      'from-indigo-400 to-indigo-700',
      'https://shaileshbuilds.github.io/FRESHMART/',
      'https://github.com/shaileshBuilds/FRESHMART'
    ],
  
    // [
    //   'WordPress Business Website',
    //   'Custom-layout business site with service pages, contact form, responsive design and SEO-friendly structure.',
    //   ['WordPress','Responsive Design','SEO Basics'],
    //   '🌐',
    //   'from-indigo-400 to-indigo-600',
    //   '#',
    //   '#'
    // ]
  ];
  
  projects.forEach((p,i) => $('#proj').insertAdjacentHTML('beforeend', `
  <article class="card3d tilt relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
    
    <div class="shine"></div>
  
    <div class="relative h-44 overflow-hidden bg-gradient-to-br ${p[4]} flex items-center justify-center text-6xl"
         role="img"
         aria-label="${p[0]} preview">
         
      ${p[3]}
    </div>
  
    <div class="p-5">
      <h3 class="font-semibold text-lg text-slate-900 dark:text-white">
        ${p[0]}
      </h3>
  
      <p class="mt-2 text-sm leading-relaxed">
        ${p[1]}
      </p>
  
      <div class="mt-3 flex flex-wrap gap-1.5">
        ${p[2].map(t => `
          <span class="text-xs px-2 py-1 rounded bg-slate-200 dark:bg-slate-800">
            ${t}
          </span>
        `).join('')}
      </div>
  
      <div class="mt-5 flex gap-3">
  
        <a href="${p[5]}"
           target="_blank"
           rel="noopener noreferrer"
           data-demo
           class="px-4 py-2 text-sm rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium">
           Live Demo
        </a>
  
        <a href="${p[6]}"
           target="_blank"
           rel="noopener noreferrer"
           data-gh
           class="px-4 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-800">
           GitHub
        </a>
  
      </div>
    </div>
  
  </article>
  `));

// const projects = [
//   ['Real Estate Website','Modern real estate platform featuring property listings, advanced search, location-based filtering, property details, and a responsive design for seamless browsing across all devices.',['HTML','CSS','JavaScript','Tailwind CSS'],'<img src="/images/projects/realstate.png/>','from-indigo-500 to-indigo-400'],
//   ['Personal Portfolio Website','Responsive portfolio with mobile menu toggle, smooth navigation and a contact section.',['HTML','CSS','JavaScript','Tailwind CSS'],'<img src="/images/projects/portpholio.png">','from-indigo-700 to-indigo-500'],
//   ['AquaCare Tank Cleaning Website','Responsive service-business site with service sections, booking/contact CTA, and WhatsApp and Call buttons.',['HTML','CSS','JavaScript','Tailwind CSS'],'💧','from-indigo-400 to-indigo-700'],
//   ['WordPress Business Website','Custom-layout business site with service pages, contact form, responsive design and SEO-friendly structure.',['WordPress','Responsive Design','SEO Basics'],'🌐','from-indigo-400 to-indigo-600']
// ];
// projects.forEach((p,i) => $('#proj').insertAdjacentHTML('beforeend', `
// <article class="card3d tilt relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"><div class="shine"></div>
//   <div class="relative h-44 overflow-hidden bg-gradient-to-br ${p[4]} flex items-center justify-center text-6xl" role="img" aria-label="${p[0]} preview">${p[3]}<img src="images/project-${i+1}.jpg" alt="${p[0]} screenshot" class="absolute inset-0 w-full h-full object-cover" onerror="this.remove()"></div>
//   <div class="p-5">
//     <h3 class="font-semibold text-lg text-slate-900 dark:text-white">${p[0]}</h3>
//     <p class="mt-2 text-sm leading-relaxed">${p[1]}</p>
//     <div class="mt-3 flex flex-wrap gap-1.5">${p[2].map(t => `<span class="text-xs px-2 py-1 rounded bg-slate-200 dark:bg-slate-800">${t}</span>`).join('')}</div>
//     <div class="mt-5 flex gap-3">
//       <a href="https://shaileshbuilds.github.io/Portfolio/" data-demo class="px-4 py-2 text-sm rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium">Live Demo</a>
//       <a href="https://github.com/shaileshBuilds/Portfolio" data-gh class="px-4 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-800">GitHub</a>
//     </div>
//   </div>
// </article>`));

[['Responsive Website Development','Sites that work smoothly on mobile, tablet and desktop.'],['Frontend Development','Clean, maintainable HTML, CSS and JavaScript.'],['Landing Page Development','Focused pages designed to convert visitors.'],['WordPress Website Development','Business sites on WordPress with custom layouts.'],['Website UI Development','Tidy, consistent interfaces with good spacing and hierarchy.'],['Website Maintenance','Updates, fixes and small improvements for existing sites.']]
.forEach(s => $('#svc').insertAdjacentHTML('beforeend', `<div class="card3d tilt relative p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"><div class="shine"></div><h3 class="font-semibold text-slate-900 dark:text-white">${s[0]}</h3><p class="mt-2 text-sm">${s[1]}</p></div>`));

$('#send').onclick = () => {
  const n = $('#fn').value.trim(), e = $('#fe').value.trim(), s = $('#fs').value.trim(), m = $('#fm').value.trim();
  if (!n || !e || !s || !m) { $('#msg').classList.remove('hidden'); return; }
  $('#msg').classList.add('hidden');
  location.href = `mailto:shailesh77030@gmail.com?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(m + '\n\n— ' + n + ' (' + e + ')')}`;
};

const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) x.target.classList.add('show'); }), { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));


/* ---------- Extras: typing, counters, bars, gallery, 3D tilt, glow ---------- */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// typing effect
const roles = ['responsive websites','clean UI with Tailwind','interactive JavaScript apps','WordPress business sites'];
let ri = 0, ci = 0, del = false;
(function type(){
  const w = roles[ri], t = $('#typed');
  if (reduce) { t.textContent = w; return; }
  t.textContent = w.slice(0, ci += del ? -1 : 1);
  let d = del ? 35 : 75;
  if (!del && ci === w.length) { del = true; d = 1400; }
  else if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; d = 350; }
  setTimeout(type, d);
})();

// marquee of skills
const mqItems = ['HTML5','CSS3','JavaScript','Tailwind CSS','Bootstrap','WordPress','Git & GitHub','Node.js','MongoDB','Responsive Design'];
$('#mq').innerHTML = [...mqItems, ...mqItems].map(x => `<span class="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 whitespace-nowrap">${x}</span>`).join('');

// skill bars
[['HTML5 / CSS3',90],['JavaScript',75],['Tailwind CSS',85],['Responsive Design',90]].forEach(s =>
  $('#bars').insertAdjacentHTML('beforeend', `<div><div class="flex justify-between text-sm font-medium mb-1.5"><span>${s[0]}</span><span>${s[1]}%</span></div><div class="bar"><span data-w="${s[1]}"></span></div></div>`));

// gallery (images/gallery-1.jpg ... gallery-6.jpg)
// const gg = ['from-indigo-500 to-indigo-400','from-indigo-700 to-indigo-500','from-indigo-400 to-indigo-700','from-indigo-400 to-indigo-600','from-indigo-400 to-indigo-700','from-indigo-700 to-indigo-600'];
// gg.forEach((c, i) => $('#gal').insertAdjacentHTML('beforeend', `<div class="gal tilt card3d bg-gradient-to-br ${c}"><span>Image ${i+1}</span><img src="images/gallery-${i+1}.jpg" alt="Gallery image ${i+1}" loading="lazy" onerror="this.remove()"><div class="shine"></div></div>`));

// profile photo preview (local only)
$('#pick').onchange = e => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { const im = $('#profileImg'); im.src = r.result; im.style.display = 'block'; }; r.readAsDataURL(f); };

// reveal: counters + bars
const io2 = new IntersectionObserver(es => es.forEach(x => { if (!x.isIntersecting) return; io2.unobserve(x.target);
  if (x.target.dataset.count) { const end = +x.target.dataset.count, t0 = performance.now(); (function f(t){ const p = Math.min((t - t0) / 1200, 1); x.target.textContent = Math.round(end * p) + (p === 1 ? x.target.dataset.suffix : ''); if (p < 1) requestAnimationFrame(f); })(t0); }
  else x.target.style.width = x.target.dataset.w + '%';
}), { threshold: .5 });
document.querySelectorAll('[data-count],[data-w]').forEach(el => io2.observe(el));

// 3D tilt + light shine
if (!reduce && matchMedia('(hover:hover)').matches) {
  document.querySelectorAll('.tilt').forEach(el => {
    const max = el.id === 'photo' ? 14 : 8;
    el.addEventListener('mousemove', e => { const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.transform = `perspective(900px) rotateX(${(.5 - y) * max}deg) rotateY(${(x - .5) * max}deg) translateY(-4px)`;
      el.style.setProperty('--mx', x * 100 + '%'); el.style.setProperty('--my', y * 100 + '%'); });
    el.addEventListener('mouseleave', () => el.style.transform = '');
  });
  const g = $('#glow'); addEventListener('mousemove', e => { g.style.left = e.clientX + 'px'; g.style.top = e.clientY + 'px'; });
}

// scroll progress
addEventListener('scroll', () => { const h = document.documentElement; $('#progress').style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%'; }, { passive: true });


/* ---------- Journey timeline ---------- */
const journey = [
  // ['2017 – 2019','Art & Design','R.S.M Intermediate College','Where my eye for layout, colour and spacing began. 75%.','🎨'],
  // ['2019 – 2021','Intermediate','Krishak Intermediate College','Built the academic base and found my interest in technology. 76%.','📘'],
  ['2021 – 2025','B.Tech, Information Technology','Abdul Kalam Technical University','Learned programming, then HTML, CSS, JavaScript and Tailwind. 7.2 CGPA.','🎓'],
  ['2025','Projects & Practice','E-Commerce site, Service Booking app','Built real projects: cart logic, filtering, forms, plus Node.js and MongoDB basics.','🛠️'],
  ['Dec 2025 – Jul 2026','Web Developer','Alphaxite Technologies','Shipped responsive sites, fixed cross-browser bugs and helped with deployment.','💼'],
  ['Now','Open to new roles','Lucknow, Uttar Pradesh','Looking for a frontend role where I can keep growing and ship great UI.','🚀']
];
journey.forEach((x, i) => {
  const right = i % 2;
  $('#jr').insertAdjacentHTML('beforeend', `<div class="jin ${right ? 'r' : ''} relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-16 mb-10 last:mb-0"><span class="jdot"></span>
  <div class="card3d tilt relative p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 ${right ? 'md:col-start-2' : 'md:col-start-1'}"><div class="shine"></div>
    <div class="flex items-center justify-between gap-3"><span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">${x[0]}</span><span class="text-2xl">${x[4]}</span></div>
    <h3 class="mt-3 font-semibold text-lg text-slate-900 dark:text-white">${x[1]}</h3>
    <p class="text-sm text-indigo-600 dark:text-indigo-400 font-medium">${x[2]}</p>
    <p class="mt-2 text-sm leading-relaxed">${x[3]}</p></div></div>`);
});
const io3 = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io3.unobserve(e.target); } }), { threshold: .2 });
document.querySelectorAll('.jin').forEach(el => io3.observe(el));
const jItems = [...document.querySelectorAll('.jin')], jOrb = $('#jorb');
function jProgress(){
  const r = $('#jr').getBoundingClientRect(), vh = innerHeight, y = Math.max(0, Math.min(r.height, vh * .6 - r.top));
  $('#jfill').style.height = y + 'px'; jOrb.style.top = y + 'px';
  let best = null, bd = 1e9;
  jItems.forEach(it => { const dy = it.offsetTop + it.querySelector('.jdot').offsetTop + 9, d = Math.abs(y - dy);   // magnet pull grows as the orb nears a point
    it.style.setProperty('--m', Math.max(0, 1 - d / 220).toFixed(3)); if (d < bd) { bd = d; best = it; } });
  jItems.forEach(it => it.classList.toggle('mag', it === best && bd < 70 && y > 0));
}
addEventListener('scroll', jProgress, { passive: true }); jProgress();
if (!reduce && matchMedia('(hover:hover)').matches) document.querySelectorAll('#jr .tilt').forEach(el => {
  el.addEventListener('mousemove', e => { const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${(.5 - y) * 8}deg) rotateY(${(x - .5) * 8}deg) translateY(-4px)`; el.style.setProperty('--mx', x * 100 + '%'); el.style.setProperty('--my', y * 100 + '%'); });
  el.addEventListener('mouseleave', () => el.style.transform = '');
});


/* ---------- Accent color switcher ---------- */
[[25,'Orange'],[45,'Gold'],[150,'Green'],[190,'Cyan'],[220,'Blue'],[265,'Violet'],[330,'Pink']].forEach(([h, n]) => {
  const b = document.createElement('button'); b.title = n; b.setAttribute('aria-label', n + ' accent');
  b.style.background = `hsl(${h} 85% 56%)`; b.dataset.h = h;
  b.onclick = () => { setAccent(h); mark(); };
  $('#accents').appendChild(b);
});
function mark(){ let cur = 190; try { cur = +localStorage.getItem('accent') || 190; } catch (e) {} document.querySelectorAll('#accents button').forEach(b => b.classList.toggle('on', +b.dataset.h === cur)); }
mark();


/* ---------- Background elements (gradient shapes, orbs, parallax) ---------- */
(function () {
  const bg = $('#bg'), svg = {
    ring: '<circle cx="40" cy="40" r="34" fill="none" stroke="url(#gg)" stroke-width="3"/>',
    tri:  '<path d="M40 8 74 68H6Z" fill="none" stroke="url(#gg)" stroke-width="3" stroke-linejoin="round"/>',
    plus: '<path d="M40 10v60M10 40h60" stroke="url(#gg)" stroke-width="4" stroke-linecap="round"/>',
    hex:  '<path d="M40 6 70 23v34L40 74 10 57V23Z" fill="url(#gg)" fill-opacity=".18" stroke="url(#gg)" stroke-width="2.5"/>',
    dots: [0,1,2].map(i => [0,1,2].map(k => `<circle cx="${14+i*26}" cy="${14+k*26}" r="4" fill="url(#gg)"/>`).join('')).join(''),
    cube: '<path d="M40 8 70 24v32L40 72 10 56V24Z M10 24l30 16 30-16M40 40v32" fill="none" stroke="url(#gg)" stroke-width="2.5" stroke-linejoin="round"/>'
  };
  const kinds = Object.keys(svg), shapes = [];
  [8, 22, 38, 52, 66, 80, 92].forEach((top, i) => { // spread down the page, left/right edges
    for (let k = 0; k < 2; k++) {
      const kind = kinds[(i * 2 + k) % kinds.length], size = 36 + Math.random() * 56, left = k ? 80 + Math.random() * 16 : 2 + Math.random() * 14;
      const d = document.createElement('div'); d.className = 'sh' + (kind === 'ring' || kind === 'plus' ? ' sp' : '');
      d.style.cssText = `top:${top + Math.random() * 6}%;left:${left}%;width:${size}px;--d:${8 + Math.random() * 12}s`;
      d.innerHTML = `<svg viewBox="0 0 80 80" width="${size}" height="${size}">${svg[kind]}</svg>`;
      d.dataset.s = (Math.random() * .12 - .06).toFixed(3); bg.appendChild(d); shapes.push(d);
    }
  });
  [[-6, -8, 420], [38, 70, 480], [70, -10, 440], [92, 60, 400]].forEach(([t, l, s]) => {
    const o = document.createElement('div'); o.className = 'orb'; o.style.cssText = `top:${t}%;left:${l}%;width:${s}px;height:${s}px;animation-delay:-${Math.random() * 8}s`; bg.appendChild(o);
  });
  window.__shapes = shapes; window.__svg = svg;
})();


/* ---------- Moving parallax: mouse + scroll layers, rising particles, scrolling big text ---------- */
(function () {
  const bg = $('#bg'), hero = $('#home'), svg = window.__svg, kinds = Object.keys(svg);
  // 1) hero depth shapes (react to mouse)
  const fx = document.createElement('div'); fx.className = 'absolute inset-0 pointer-events-none'; hero.prepend(fx);
  const layers = [];
  for (let i = 0; i < 10; i++) {
    const kind = kinds[i % kinds.length], size = 28 + Math.random() * 54, e = document.createElement('div');
    e.className = 'sh'; e.style.cssText = `top:${5 + Math.random() * 85}%;left:${Math.random() * 94}%;width:${size}px;opacity:${.35 + Math.random() * .35};--d:${7 + Math.random() * 9}s`;
    e.innerHTML = `<svg viewBox="0 0 80 80" width="${size}" height="${size}">${svg[kind]}</svg>`; e.dataset.d = (14 + Math.random() * 46) * (Math.random() < .5 ? -1 : 1);
    fx.appendChild(e); layers.push(e);
  }
  // 2) big outlined words that slide sideways while you scroll
  const mk = (top, left) => { const t = document.createElement('div'); t.className = 'bigtxt'; t.style.cssText = `top:${top}%;left:${left}`; t.textContent = 'FRONTEND • DEVELOPER • DESIGN • CODE • '.repeat(8); bg.appendChild(t); return t; };
  const r1 = mk(30, '0'), r2 = mk(66, '-60%');
  // 3) rising gradient particles
  const pts = document.createElement('div'); pts.id = 'pts'; document.body.prepend(pts);
  for (let i = 0; i < 22; i++) { const p = document.createElement('i'), s = 3 + Math.random() * 6;
    p.style.cssText = `left:${Math.random() * 100}%;width:${s}px;height:${s}px;--dx:${(Math.random() * 120 - 60)}px;animation-duration:${10 + Math.random() * 16}s;animation-delay:-${Math.random() * 20}s`; pts.appendChild(p); }
  if (reduce) return;
  // 4) one smooth loop for everything
  let mx = 0, my = 0, cx = 0, cy = 0;
  addEventListener('mousemove', e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; }, { passive: true });
  (function tick() {
    cx += (mx - cx) * .06; cy += (my - cy) * .06; const y = scrollY;
    (window.__shapes || []).forEach(s => s.style.transform = `translate3d(${cx * -40}px,${y * s.dataset.s * 2.4 + cy * -30}px,0)`);
    layers.forEach(l => { const d = +l.dataset.d; l.style.transform = `translate3d(${cx * d * 2}px,${cy * d * 2 + y * d * .004}px,0)`; });
    r1.style.transform = `translateX(${-y * .35}px)`; r2.style.transform = `translateX(${y * .35}px)`;
    requestAnimationFrame(tick);
  })();
})();


/* ---------- Journey: magnetic hover + moving background ---------- */
(function () {
  const jsec = $('#journey'), jbg = document.createElement('div'); jbg.id = 'jbg'; jsec.prepend(jbg);
  const svg = window.__svg, kinds = Object.keys(svg), sh = [];
  [[640, 40], [980, -35]].forEach(([s, d]) => { const f = document.createElement('div'); f.className = 'jfield'; f.style.cssText = `width:${s}px;height:${s}px;animation-duration:${Math.abs(d) + 30}s;animation-direction:${d < 0 ? 'reverse' : 'normal'}`; jbg.appendChild(f); });
  for (let i = 0; i < 3; i++) { const s = document.createElement('i'); s.className = 'streak'; s.style.cssText = `top:${15 + i * 32 + Math.random() * 8}%;animation-duration:${7 + i * 3}s;animation-delay:-${i * 4}s`; jbg.appendChild(s); }
  for (let i = 0; i < 10; i++) {
    const size = 26 + Math.random() * 44, e = document.createElement('div'); e.className = 'sh';
    e.style.cssText = `top:${4 + Math.random() * 88}%;left:${i % 2 ? 60 + Math.random() * 36 : 2 + Math.random() * 34}%;width:${size}px;opacity:.5;--d:${6 + Math.random() * 8}s`;
    e.innerHTML = `<svg viewBox="0 0 80 80" width="${size}" height="${size}">${svg[kinds[i % kinds.length]]}</svg>`; jbg.appendChild(e); sh.push({ el: e, x: 0, y: 0 });
  }
  if (reduce || !matchMedia('(hover:hover)').matches) return;
  // hover: card + dot are pulled toward the cursor
  jItems.forEach(it => { const card = it.querySelector('.card3d'), dot = it.querySelector('.jdot'), cl = v => Math.max(-22, Math.min(22, v));
    it.addEventListener('mousemove', e => { const c = card.getBoundingClientRect(), d = dot.getBoundingClientRect();
      card.style.setProperty('--hx', ((e.clientX - c.left - c.width / 2) / c.width * 18) + 'px'); card.style.setProperty('--hy', ((e.clientY - c.top - c.height / 2) / c.height * 12) + 'px');
      dot.style.setProperty('--dx', cl((e.clientX - d.left - 9) * .15) + 'px'); dot.style.setProperty('--dy', cl((e.clientY - d.top - 9) * .15) + 'px'); });
    it.addEventListener('mouseleave', () => { card.style.setProperty('--hx', '0px'); card.style.setProperty('--hy', '0px'); dot.style.setProperty('--dx', '0px'); dot.style.setProperty('--dy', '0px'); });
  });
  // background shapes are attracted to the cursor and to the scroll magnet
  let cur = null, inView = false;
  jsec.addEventListener('mousemove', e => { const b = jbg.getBoundingClientRect(); cur = { x: e.clientX - b.left, y: e.clientY - b.top, R: 300, F: 55 }; });
  jsec.addEventListener('mouseleave', () => cur = null);
  new IntersectionObserver(es => inView = es[0].isIntersecting).observe(jsec);
  (function tick() {
    if (inView) { const b = jbg.getBoundingClientRect(), o = jOrb.getBoundingClientRect(), A = [{ x: o.left + 10 - b.left, y: o.top + 10 - b.top, R: 420, F: 70 }]; if (cur) A.push(cur);
      sh.forEach(s => { const cx = s.el.offsetLeft + s.el.offsetWidth / 2, cy = s.el.offsetTop + s.el.offsetHeight / 2; let tx = 0, ty = 0;
        A.forEach(a => { const dx = a.x - cx, dy = a.y - cy, d = Math.hypot(dx, dy) || 1; if (d < a.R) { const f = (1 - d / a.R) * a.F; tx += dx / d * f; ty += dy / d * f; } });
        s.x += (tx - s.x) * .08; s.y += (ty - s.y) * .08; s.el.style.transform = `translate3d(${s.x}px,${s.y}px,0)`; }); }
    requestAnimationFrame(tick);
  })();
})();
