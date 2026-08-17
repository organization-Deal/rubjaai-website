(() => {
  const q = (s, root=document) => root.querySelector(s);
  const qa = (s, root=document) => [...root.querySelectorAll(s)];


  // Monochrome line icons — restrained, Apple-like visual language.
  const icons = {
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 18.5 4 20l1.1-3.2A7.8 7.8 0 0 1 4 12.8C4 8.5 7.6 5 12 5s8 3.5 8 7.8-3.6 7.2-8 7.2c-1.6 0-3.1-.4-4.5-1.1Z"/><path d="M8.5 12.5h7"/></svg>',
    status: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="m8.8 12.1 2.1 2.1 4.6-4.8"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3.2 2"/></svg>',
    doc: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.8h6.8L18 8v12.2H7z"/><path d="M13.5 4v4.5H18M9.5 12h6M9.5 15h6"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="12" rx="2.5"/><path d="m5.5 8 6.5 5 6.5-5"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="10" height="11" rx="2"/><path d="M6 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    wallet: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6.5h12.5A2.5 2.5 0 0 1 20 9v9H5a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2Z"/><path d="M17 11.5h3v4h-3a2 2 0 0 1 0-4Z"/><path d="M6 5.5 15 3"/></svg>',
    people: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="9" r="3"/><path d="M3.8 19c.4-3.2 2.1-5 5.2-5s4.8 1.8 5.2 5"/><circle cx="17" cy="9.5" r="2.3"/><path d="M15.4 14.5c2.7-.4 4.6 1.1 4.8 4.5"/></svg>'
  };
  qa('[data-icon]').forEach(el => { const svg = icons[el.dataset.icon]; if (svg) el.innerHTML = svg; });

  // Light nav elevation after the page starts moving.
  const topbar = q('.topbar');
  const syncTopbar = () => topbar?.classList.toggle('scrolled', window.scrollY > 12);
  syncTopbar();
  addEventListener('scroll', syncTopbar, {passive:true});

  // Mobile menu
  const menu = q('[data-menu]');
  const links = q('.nav-links');
  if (menu && links) {
    menu.addEventListener('click', () => {
      const open = links.dataset.open === '1';
      links.dataset.open = open ? '0' : '1';
      if (!open) {
        Object.assign(links.style,{display:'grid',position:'absolute',left:'12px',right:'12px',top:'66px',padding:'18px',background:'#fff',border:'1px solid #e4e7ec',borderRadius:'16px',boxShadow:'0 18px 45px rgba(18,19,22,.12)'});
      } else links.removeAttribute('style');
    });
    qa('.nav-links a').forEach(a => a.addEventListener('click', () => { if (innerWidth <= 1020) { links.dataset.open='0'; links.removeAttribute('style'); }}));
  }

  // Pricing monthly / annual
  const cycleButtons = qa('[data-cycle]');
  const cards = qa('[data-price-card]');
  function setCycle(cycle){
    cycleButtons.forEach(b => b.classList.toggle('active', b.dataset.cycle === cycle));
    cards.forEach(card => {
      const amount = cycle === 'annual' ? card.dataset.annual : card.dataset.monthly;
      const unit = cycle === 'annual' ? '/ปี' : '/เดือน';
      const target = q('[data-price]', card);
      const sub = q('[data-billing-note]', card);
      if (target) target.innerHTML = `<b>${Number(amount).toLocaleString('th-TH')} บาท</b><span>${unit}</span>`;
      if (sub) {
        if (Number(amount) === 0) sub.textContent = 'ไม่มีค่าบริการ';
        else if (cycle === 'annual') sub.textContent = `เฉลี่ย ${Math.round(Number(amount)/12).toLocaleString('th-TH')} บาท/เดือน · ชำระครั้งเดียวรายปี`;
        else sub.textContent = 'ชำระรายเดือน · ยกเลิกก่อนรอบถัดไปได้';
      }
    });
  }
  cycleButtons.forEach(b => b.addEventListener('click',()=>setCycle(b.dataset.cycle)));
  setCycle('monthly');

  // Scroll reveal
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
    qa('.reveal').forEach(el=>io.observe(el));
  } else qa('.reveal').forEach(el=>el.classList.add('in'));

  // Trial form: combine fields expected by existing public pilot endpoint.
  const form = q('#trialForm');
  if (form) {
    form.addEventListener('submit', () => {
      const phone = q('[name="phone"]',form)?.value.trim() || '';
      const line = q('[name="lineId"]',form)?.value.trim() || '';
      const interests = qa('[name="interest"]:checked',form).map(x=>x.value).join(', ');
      const direct = [phone && `โทร ${phone}`,line && `LINE ${line}`].filter(Boolean).join(' · ');
      q('[name="contact"]',form).value = direct;
      q('[name="interests"]',form).value = interests;
    });
  }
})();
