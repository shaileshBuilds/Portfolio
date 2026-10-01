var L = {50:97,100:93,200:86,300:76,400:66,500:56,600:46,700:38,800:30,900:22,950:12};
function hsl(h, s, l) { var a = s * Math.min(l, 1 - l); var f = function (n) { var x = (n + h / 30) % 12; return Math.round(255 * (l - a * Math.max(-1, Math.min(x - 3, 9 - x, 1)))); }; return f(0) + ' ' + f(8) + ' ' + f(4); }
function setAccent(h) {
  var r = document.documentElement.style;
  Object.keys(L).forEach(function (k) { r.setProperty('--c' + k, hsl(h, .85, L[k] / 100)); });
  r.setProperty('--g2', hsl((h + 50) % 360, .85, .58));   /* second gradient color */
  r.setProperty('--g3', hsl((h + 310) % 360, .85, .55));  /* third gradient color */
  try { localStorage.setItem('accent', h); } catch (e) {}
}
var _h = 190; try { _h = +localStorage.getItem('accent') || 190; } catch (e) {}
setAccent(_h);
var _sc = {}; Object.keys(L).forEach(function (k) { _sc[k] = 'rgb(var(--c' + k + ') / <alpha-value>)'; });
tailwind.config = { darkMode: 'class', theme: { extend: { fontFamily: { sans: ['Inter','system-ui','sans-serif'] }, colors: { indigo: _sc,
 slate: {50:'#fafafa',100:'#f5f5f5',200:'#e5e5e5',300:'#d4d4d4',400:'#a3a3a3',500:'#737373',600:'#525252',700:'#404040',800:'#262626',900:'#141414',950:'#0a0a0a'} } } } };
// Always open in dark mode (the toggle button only changes the current visit)
document.documentElement.classList.add('dark');
