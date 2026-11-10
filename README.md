# واصل | Wasel

**نقل جامعي للطالبات — نسخة تجريبية تفاعلية**
**University transport for female students — interactive demo**

> بيانات وهمية فقط · لا يوجد GPS حقيقي ولا بوابة دفع.
> Sample data only · no real GPS and no payment gateway.

---

## العربية

تطبيق ويب (PWA) يعمل على أي جوال ويمكن تثبيته على الشاشة الرئيسية. فيه ثلاث واجهات:

**المالك**
- نظرة عامة: حافلات في الخدمة، الطالبات، رحلات اليوم، المقاعد المشغولة، المستحق والمحصّل هذا الشهر.
- خريطة مباشرة ومحاكاة لرحلات الذهاب، والحافلات تتحرك في كل الواجهات.
- **الرحلات:** إضافة وتعديل وحذف، وتصفية حسب الحالة، وبدء الرحلة وإعادتها.
- **الخطوط:** المحطات وعدد الطالبات والحافلة والسائقة ورحلات اليوم لكل خط.
- **الطالبات:** إضافة وتعديل وحذف، وبحث، وتحديد الخط والمحطة والرسوم.
- **الحافلات (إدارة الأسطول):** إضافة وحذف حافلة، وإسناد الخط والسائقة، وتحويل للصيانة، والعداد، ومواعيد الصيانة الدورية والتأمين والفحص الدوري مع تنبيهات، وسجل صيانة بالتكاليف.
- **السائقون:** إضافة وتعديل وحذف، ورقم الرخصة وتاريخ انتهائها، وحالة الإجازة.
- **الاشتراكات:** اشتراكات شهرية مع تسجيل دفعات يدوية (نقداً أو تحويل)، والحالة: مدفوع / جزئي / غير مدفوع، وحذف الدفعات.

**السائق:** المحطة الحالية والتالية، تأكيد صعود أو غياب كل طالبة، وتنتقل القائمة تلقائياً للمحطة التالية.

**الطالبة:** وقت وصول الحافلة، خريطة الخط، زر «لن أحضر اليوم»، بيانات السائقة، الاشتراك والدفعات، بطاقة صعود، الإشعارات، سجل الرحلات.

زر **English** يحوّل الواجهة كاملة إلى الإنجليزية.

### التشغيل
لا يحتاج أي تثبيت. افتح `index.html` في المتصفح، أو انشره كموقع ثابت:
- **Replit:** أنشئ Repl من هذا المستودع ← Deploy ← Static، ومجلد النشر هو جذر المشروع.
- **GitHub Pages:** Settings ← Pages ← Deploy from branch ← `main` / root.

---

## English

An installable web app (PWA) with three views:

- **Owner:** overview KPIs, live map and morning-trip simulation, trips (add/edit/delete), routes, students, **fleet management** (add/remove buses, assign route and driver, maintenance mode, odometer, service/insurance/inspection due dates with alerts, maintenance log with costs), drivers (license number and expiry, leave), and monthly subscriptions with **manual payment recording** (paid / partial / unpaid).
- **Driver:** current and next stop, mark each student boarded or absent, auto-advancing pickup list.
- **Student:** live ETA, route map, "I won't ride today", driver card, subscription and payments, boarding pass, notifications, trip history.

Arabic (RTL) by default; **English** button switches the whole UI.

### Run
No build step. Open `index.html`, or deploy as a static site (Replit → Deploy → Static, or GitHub Pages from `main` / root).

### Files
| File | Purpose |
|---|---|
| `index.html` | App shell and meta tags |
| `styles.css` | Design (beige/navy, RTL-aware) |
| `app.js` | All logic: data, simulation, views, i18n |
| `manifest.json`, `sw.js`, `icons/` | PWA install and offline cache |

Data is kept in the browser (`localStorage`) and resets each day or with **↺ Reset**.

### Next steps toward production
- Backend and database (e.g. Supabase or Firebase) with logins for owner, drivers and students
- Real driver location from the phone's GPS
- Push notifications
- Payments through a Saudi gateway (Moyasar, Tap, HyperPay) once there's a merchant account
