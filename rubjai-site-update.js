(() => {
  "use strict";
  const ID = "rubjai-features-v2";
  if (document.getElementById(ID)) return;

  const features = [
    {
      title:"ตั้งเบิกจาก LINE ได้เลย",
      text:"พนักงานส่งบิลหรือพิมพ์ตั้งเบิกใน LINE แล้วระบบพาเข้าขั้นตอนตรวจเอกสาร อนุมัติ และจ่ายเงินต่อโดยไม่ต้องย้ายไปกรอกหลายระบบ"
    },
    {
      title:"ตั้งเบิกคู่ค้า ช่าง หรือบริษัทอื่น",
      text:"ฝ่ายจัดซื้อและพนักงานสร้างคำขอจ่ายคู่ค้าได้จาก LINE กรอกผู้รับเงิน VAT หัก ณ ที่จ่าย วันครบกำหนด และแนบเอกสารได้ครบ"
    },
    {
      title:"AI อ่านบิลและใบเสร็จ",
      text:"อ่านข้อความจากบิล ใบกำกับภาษี และหลักฐาน ช่วยกรอกวันที่ ร้านค้า ยอดเงิน หมวด และข้อมูลเอกสารเพื่อลดงานคีย์ซ้ำ"
    },
    {
      title:"Workflow อนุมัติเป็นขั้นตอน",
      text:"รายการเดินจากผู้ขอเบิก → ผู้อนุมัติ → ฝ่ายบัญชี → รอโอน พร้อมสถานะชัดเจน เช่น รอตรวจ ต้องแก้ รอโอน และจ่ายแล้ว"
    },
    {
      title:"โอนแล้ว แนบสลิป แล้วแจ้ง LINE",
      text:"บัญชีบันทึกการจ่าย แนบหลักฐานการโอน และระบบอัปเดตสถานะพร้อมแจ้งกลับคนที่เกี่ยวข้อง ลดการตามถามว่าเงินออกหรือยัง"
    },
    {
      title:"Dashboard สำหรับบัญชีและเจ้าของ",
      text:"ดูรายจ่าย รายรับ งานที่ต้องทำ ยอดรอจ่าย รายการที่จ่ายแล้ว เอกสาร และสถานะทั้งหมดจากหน้าหลังบ้านเดียว"
    },
    {
      title:"VAT และหัก ณ ที่จ่าย",
      text:"รองรับรายการมี VAT 7% และหัก ณ ที่จ่าย ช่วยให้ยอดก่อนภาษี ภาษี และยอดสุทธิที่ต้องโอนแยกชัดเจน"
    },
    {
      title:"เอกสารอัตโนมัติ + Google Drive",
      text:"สร้างใบเบิก ใบแทน และเอกสารที่เกี่ยวข้อง พร้อมจัดเก็บหลักฐานลง Drive เพื่อให้ค้นย้อนหลังและส่งต่อฝ่ายบัญชีง่ายขึ้น"
    },
    {
      title:"ดึงเอกสารจาก Gmail",
      text:"เชื่อม Gmail เพื่อช่วยรวบรวมใบเสร็จและเอกสารจากอีเมลเข้ากระบวนการบัญชี ลดการไล่หาใบเสร็จจาก Inbox"
    },
    {
      title:"ตรวจรายการซ้ำ",
      text:"ช่วยจับรายการหรือเอกสารที่มีโอกาสถูกบันทึกซ้ำก่อนเข้ากระบวนการจ่าย เพื่อลดความเสี่ยงโอนซ้ำ"
    },
    {
      title:"หลายกลุ่ม LINE และหลายทีม",
      text:"ผูกหลาย LINE Workspace เข้าธุรกิจเดียว และดูได้ว่ารายการมาจากกลุ่มไหน พร้อมสิทธิ์ Owner, บัญชี, ผู้อนุมัติ และดูอย่างเดียว"
    },
    {
      title:"กระทบยอดและสถานะเงิน",
      text:"ช่วยติดตามช่องทางการเงิน ยอดพร้อมจ่าย รายการรอกระทบยอด และหลักฐาน เพื่อให้บัญชีปิดงานได้เป็นระบบมากขึ้น",
      wide:true
    }
  ];

  const section = document.createElement("section");
  section.id = ID;
  section.innerHTML = `
    <div class="rf-head">
      <div>
        <div class="rf-kicker">FEATURES ที่ใช้งานในระบบจริง</div>
        <h2>ตั้งแต่ “ขอจ่าย”<br>จนถึง “จ่ายเสร็จ” อยู่ใน Workflow เดียว</h2>
      </div>
      <p class="rf-lead">ไม่ได้มีแค่ OCR อ่านบิล แต่รวมการตั้งเบิก อนุมัติ งานบัญชี การโอน หลักฐาน เอกสาร และการติดตามสถานะเข้าไว้ด้วยกัน</p>
    </div>
    <div class="rf-grid">
      ${features.map((f,i)=>`
        <article class="rf-card ${f.wide ? "rf-wide" : ""}">
          <span class="rf-no">${String(i+1).padStart(2,"0")}</span>
          <h3>${f.title}</h3>
          <p>${f.text}</p>
          ${f.wide ? `
            <div class="rf-status">
              <span class="rf-chip">รอตรวจ</span>
              <span class="rf-chip">ต้องแก้</span>
              <span class="rf-chip">รออนุมัติ</span>
              <span class="rf-chip">รอโอน</span>
              <span class="rf-chip">จ่ายแล้ว</span>
            </div>` : ""}
        </article>
      `).join("")}
    </div>
  `;

  function textOf(el){ return (el?.textContent || "").replace(/\s+/g," ").trim(); }

  // Prefer inserting before pricing so features appear before the purchase decision.
  const candidates = [...document.querySelectorAll("section,main>div,body>div")];
  const pricing = candidates.find(el => /ราคา|แพ็กเกจ|pricing/i.test(textOf(el).slice(0,120)));
  if (pricing && pricing.parentNode) {
    pricing.parentNode.insertBefore(section, pricing);
    return;
  }

  const footer = document.querySelector("footer");
  if (footer?.parentNode) {
    footer.parentNode.insertBefore(section, footer);
    return;
  }

  document.body.appendChild(section);
})();
