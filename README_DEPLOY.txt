รับจ่ายแบบไม่จำกัด — Marketing Website
========================================

ไฟล์นี้เป็น Static Website พร้อม deploy บน Cloudflare Pages

ไฟล์หลัก
- index.html               หน้า Landing Page / Features / Pricing / Trial form
- privacy.html             Privacy Policy
- terms.html               Terms of Service
- refund.html              Cancellation / Refund Policy
- assets/site.css          Design system + responsive styles
- assets/site.js           Pricing toggle + form helper
- assets/favicon.svg       Favicon
- _headers                 Security headers สำหรับ Cloudflare Pages

Deploy แบบง่าย
1. สร้าง GitHub repo ใหม่ เช่น rubjaai-website
2. อัปโหลดไฟล์ทั้งหมดโดยให้ index.html อยู่ที่ root
3. Cloudflare > Workers & Pages > Create > Pages > Connect to Git
4. Framework preset: None
5. Build command: เว้นว่าง
6. Build output directory: /
7. Deploy
8. นำ URL ที่ได้ไปใส่ใน Stripe Business website
9. เมื่อมีโดเมนจริง ค่อยผูก Custom Domain กับ Pages project

Trial Form
----------
หน้าเว็บตั้งค่า action ไว้ที่ public pilot endpoint ที่ระบบปัจจุบันมีอยู่แล้ว:
https://accoutingsuppor02.organization-23c.workers.dev/pilot/request

ถ้า Worker URL เปลี่ยน ให้ค้นหา URL นี้ใน index.html แล้วเปลี่ยนเฉพาะ form action

ข้อมูลที่ต้องตรวจอีกครั้งก่อนเปิดรับเงินจริง
----------------------------------------
1. ชื่อผู้ให้บริการใน Footer / Legal pages ตอนนี้ใช้ Deal Invest Co., Ltd.
2. เพิ่มอีเมลหรือเบอร์ Customer Support จริงเมื่อพร้อม
3. ให้ฝ่ายกฎหมาย/บัญชีตรวจ Privacy / Terms / Refund ก่อนเปิด Billing จริง
4. เมื่อ Stripe Billing พร้อม ให้เปลี่ยนปุ่มแพ็กเกจจาก #trial เป็น Checkout URL/API ของแพ็กนั้น
5. ราคาในเว็บปัจจุบัน: Free 0 / Lite 199 / Pro 399 / Business 1,290 (ก่อน VAT)
6. รายปี: 0 / 1,990 / 3,990 / 12,900
7. AI อ่านเอกสาร: 5 / 30 / 150 / 1,000 ใบต่อเดือน
8. รายการ: 20 / 200 / 1,000 / 3,000 ต่อเดือน
9. บริษัท: 1 / 1 / 1 / 2
10. Trial: Business 30 วัน / 1,000 รายการ / AI 100 ใบ / 2 บริษัท / ไม่มี Auto charge

หมายเหตุ
--------
เว็บนี้ไม่ใช้ framework หรือ dependency ภายนอก จึง deploy เร็วและไม่ต้อง npm install
