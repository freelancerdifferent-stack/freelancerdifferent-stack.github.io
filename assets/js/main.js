/* Different Freelancer Studio — site scripts
   1) Placeholder gambar  2) Menu mobile  3) Nav aktif  4) Newsletter  5) Tahun */
(function () {
  'use strict';

  /* 1) Kalau file gambar belum diupload, tampilkan placeholder gradient
        supaya halaman tetap rapi (bukan ikon "broken image"). */
  function markMissing(img) {
    var box = img.parentElement;
    if (!box) return;
    box.classList.add('img-missing');
    if (!box.hasAttribute('data-placeholder')) {
      box.setAttribute('data-placeholder', img.getAttribute('data-fallback') || 'image');
    }
  }

  Array.prototype.forEach.call(document.querySelectorAll('img[data-fallback]'), function (img) {
    img.addEventListener('error', function () { markMissing(img); });
    // Gambar yang sudah gagal dimuat sebelum script ini jalan.
    if (img.complete && img.naturalWidth === 0) markMissing(img);
  });

  /* 2) Menu mobile */
  var toggle = document.querySelector('.mobile-menu');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* 3) Highlight link yang sedang aktif + tutup menu setelah diklik */
  var navLinks = document.querySelectorAll('.links a');

  Array.prototype.forEach.call(navLinks, function (link) {
    link.addEventListener('click', function () {
      Array.prototype.forEach.call(navLinks, function (other) {
        other.classList.remove('active');
      });
      link.classList.add('active');
      if (nav) nav.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* Sinkronkan link aktif saat halaman di-scroll */
  var sections = Array.prototype.filter.call(
    document.querySelectorAll('main section[id], footer[id]'),
    function (el) { return document.querySelector('.links a[href="#' + el.id + '"]'); }
  );

  if (sections.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Array.prototype.forEach.call(navLinks, function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* 4) Form newsletter (demo — belum terhubung ke layanan email apa pun) */
  var form = document.querySelector('.newsletter-form');

  if (form) {
    var input = form.querySelector('#email');
    var note = form.querySelector('.form-note');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var value = input.value.trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      note.className = 'form-note ' + (valid ? 'ok' : 'err');
      note.textContent = valid
        ? 'Thanks! Your email has been added.'
        : 'Please enter a valid email address.';

      if (valid) input.value = '';
    });
  }

  /* 5) Tahun copyright otomatis */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
