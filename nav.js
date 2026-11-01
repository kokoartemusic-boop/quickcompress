(function () {
    var nav = document.querySelector('nav');
    var list = nav ? nav.querySelector('.nav-links') : null;
    if (!nav || !list) return;
    var btn = document.createElement('button');
    btn.className = 'menu-toggle';
    btn.type = 'button';
    btn.textContent = 'Menu';
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function () {
        var open = list.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.textContent = open ? 'Close' : 'Menu';
    });
    nav.insertBefore(btn, list);
})();
