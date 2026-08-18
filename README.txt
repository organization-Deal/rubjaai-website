RUBJAI WEBSITE v2 — Kanit + อัปเดต Features

เป้าหมาย
1) เปลี่ยน Font ทั้งเว็บเป็น Kanit จริง
2) เพิ่มฟีเจอร์ปัจจุบันของ Product เข้าเว็บไซต์ Marketing

ไฟล์
- rubjai-site-update.css
- rubjai-site-update.js
- INSTALL_SNIPPET.html.txt

วิธีใช้แบบไฟล์แยก
1. เอา rubjai-site-update.css และ rubjai-site-update.js ไปไว้ใน static/public root ของเว็บไซต์
2. ใส่ <link rel="stylesheet" href="/rubjai-site-update.css?v=2"> ก่อน </head>
3. ใส่ <script src="/rubjai-site-update.js?v=2" defer></script> ก่อน </body>
4. Deploy ใหม่
5. Hard refresh Ctrl+F5

Font
CSS บังคับ Kanit ให้ body + heading + button + input + select + textarea
เพื่อกัน selector เก่าที่กำหนด font-family ไว้ใน component ย่อย

ฟีเจอร์ที่เพิ่มในหน้า Marketing
- ตั้งเบิกจาก LINE
- ตั้งเบิกคู่ค้า / ช่าง / บริษัท
- AI อ่านบิลและใบเสร็จ
- Workflow ผู้ขอ → ผู้อนุมัติ → บัญชี → โอน
- สถานะ รอตรวจ / ต้องแก้ / รออนุมัติ / รอโอน / จ่ายแล้ว
- แนบสลิปและแจ้งกลับ LINE
- Dashboard หลังบ้าน
- VAT 7% / หัก ณ ที่จ่าย
- เอกสารอัตโนมัติ + Google Drive
- Gmail receipt collection
- ตรวจรายการซ้ำ
- หลาย LINE Workspace + สิทธิ์ทีม
- กระทบยอด / สถานะเงิน

หมายเหตุ
JS จะพยายามแทรก section ก่อนส่วนราคาโดยอัตโนมัติ
ถ้าหาไม่เจอจะวางก่อน footer และถ้าไม่มี footer จะต่อท้าย body
