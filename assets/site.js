(() => {
  const q = (s, root=document) => root.querySelector(s);
  const qa = (s, root=document) => [...root.querySelectorAll(s)];

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
  // Live Stripe annual prices (2026-08-17). Keep marketing display equal to Checkout.
  const liveAnnual = [0, 2149, 4213, 13158];
  cards.forEach((card, index) => { if (liveAnnual[index] != null) card.dataset.annual = String(liveAnnual[index]); });
  const saveBadge = q('.save'); if (saveBadge) saveBadge.textContent = 'ราคาพิเศษรายปี';
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
