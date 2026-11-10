/* Wasel (واصل) — university transport for female students (demo)
 * Owner · Driver · Student views, live trip simulation, fleet management,
 * routes, students, drivers, trips and manual monthly payments.
 * Pure HTML/CSS/JS, no build step, no backend. Sample data only.
 */
'use strict';
(() => {
  // ================= i18n =================
  const I18N = {
    ar: {
      appName: 'واصل', tagline: 'نقل جامعي للطالبات', install: 'تثبيت',
      demoBanner: 'نسخة تجريبية · بيانات وهمية · بدون GPS أو بوابة دفع',
      roleAdmin: 'المالك', roleDriver: 'السائق', roleStudent: 'الطالبة',
      tabDash: 'نظرة عامة', tabTrips: 'الرحلات', tabRoutes: 'الخطوط', tabStudents: 'الطالبات', tabFleet: 'الحافلات', tabDrivers: 'السائقون', tabSubs: 'الاشتراكات',
      kBuses: 'حافلات في الخدمة', kBusesSub: '{n} في الصيانة', kStudents: 'طالبات', kStudentsSub: '{n} مُسنَدات لخطوط',
      kTrips: 'رحلات اليوم', kTripsSub: '{n} جارية الآن', kSeats: 'مقاعد مشغولة', kSeatsSub: 'في الحافلات الآن',
      kDue: 'مستحق هذا الشهر', kPaid: 'المحصّل هذا الشهر', kRemainAll: 'المتبقي (كل الأشهر): {v}',
      sar: 'ر.س', minutes: 'دقيقة',
      simTitle: 'محاكاة رحلات الذهاب', simHint: 'شغّل الرحلات وتابع الحافلات تتحرك على الخريطة في كل الواجهات.',
      startAll: '▶ تشغيل رحلات الذهاب', resetDemo: '↺ إعادة ضبط', resetConfirm: 'سيتم إرجاع كل البيانات التجريبية لحالتها الأولى. متابعة؟',
      liveMap: 'الخريطة المباشرة', liveTrips: 'رحلات اليوم', alerts: 'تنبيهات', campus: 'الحرم الجامعي', seeAll: 'عرض الكل',
      stScheduled: 'مجدولة', stActive: 'جارية', stCompleted: 'مكتملة',
      busActive: 'في الخدمة', busMaint: 'صيانة', busStandby: 'احتياط',
      capacity: 'السعة', seats: 'مقعد', route: 'الخط', driver: 'السائق', none: '— بدون —', unassigned: 'غير مُسنَدة',
      onboardNow: 'على المتن الآن', toMaint: 'تحويل للصيانة', toService: 'إرجاع للخدمة', busBusy: 'لا يمكن تعديل حافلة في رحلة جارية',
      drvOnTrip: 'في رحلة', drvAvail: 'متاحة', drvOff: 'إجازة', rating: 'التقييم', tripsDone: 'الرحلات المنفذة', bus: 'الحافلة',
      phone: 'الجوال', license: 'رقم الرخصة', licenseExp: 'الرخصة سارية حتى',
      am: 'ذهاب', pm: 'عودة', boarded: 'صعدت', absent: 'غائبة', waiting: 'بالانتظار', arrived: 'وصلت',
      paxSummary: '{b} صعدت · {a} غائبة · {w} بالانتظار', noBusForRoute: 'لا توجد حافلة على هذا الخط',
      fAll: 'الكل', fActive: 'الجارية', fScheduled: 'المجدولة', fCompleted: 'المكتملة',
      add: '+ إضافة', edit: 'تعديل', del: 'حذف', save: 'حفظ', cancel: 'إلغاء', saved: 'تم الحفظ', deleted: 'تم الحذف', confirmDel: 'تأكيد الحذف؟',
      addTrip: 'رحلة جديدة', editTrip: 'تعديل الرحلة', time: 'الوقت', dir: 'الاتجاه', cantDelActive: 'لا يمكن حذف رحلة جارية',
      startTrip: '▶ بدء الرحلة', resetTrip: '↺ إعادة الرحلة', routeBusy: 'توجد رحلة جارية على هذا الخط',
      stopsN: '{n} محطات', studentsN: '{n} طالبات', tripsToday: 'رحلات اليوم', stops: 'المحطات',
      addStudent: 'طالبة جديدة', editStudent: 'تعديل بيانات الطالبة', nameAr: 'الاسم (عربي)', nameEn: 'الاسم بالإنجليزي (اختياري)',
      stop: 'المحطة', college: 'الكلية', required: 'اكتب الاسم', monthlyFee: 'الرسوم الشهرية', search: 'بحث بالاسم…',
      fleetTotal: 'إجمالي الحافلات', totalSeats: 'إجمالي المقاعد', utilization: 'إشغال الحافلات الآن', addBus: 'حافلة جديدة',
      busNum: 'رقم الحافلة', plateNo: 'رقم اللوحة', model: 'الطراز', km: 'العداد', kmU: 'كم', nextService: 'الصيانة الدورية',
      insurance: 'التأمين', inspection: 'الفحص الدوري', maintLog: 'سجل الصيانة', addEntry: 'إضافة سجل',
      type: 'النوع', cost: 'التكلفة', note: 'ملاحظة', mOil: 'تغيير زيت', mTires: 'إطارات', mBrakes: 'فرامل', mAc: 'تكييف',
      mService: 'صيانة دورية شاملة', mInspect: 'فحص دوري', noLog: 'لا توجد سجلات صيانة', busAdded: 'تمت إضافة الحافلة {num}',
      entryAdded: 'تمت إضافة سجل الصيانة', dueIn: 'خلال {n} يوم', overdue: 'متأخرة {n} يوم',
      serviceAlert: 'الحافلة {num}: الصيانة الدورية {when}', docAlert: 'الحافلة {num}: {doc} ينتهي خلال {n} يوم', maintAlert: 'الحافلة {num} في الصيانة',
      licAlert: 'رخصة {name} تنتهي خلال {n} يوم', unpaidAlert: '{name}: متبقي {v}',
      numRequired: 'اكتب رقم الحافلة واللوحة', numTaken: 'رقم الحافلة مستخدم', totalCost: 'إجمالي تكاليف الصيانة',
      assignHint: 'اختر الخط والسائق لتصبح الحافلة في الخدمة', lockedTrip: 'مقفلة أثناء الرحلة',
      addDriver: 'سائقة جديدة', editDriver: 'تعديل بيانات السائقة', onLeave: 'في إجازة', driverBusy: 'لا يمكن حذف سائقة في رحلة جارية',
      subsTitle: 'الاشتراكات', newSub: '+ اشتراك شهري جديد', manualOnly: 'تسجيل يدوي فقط — لا توجد بوابة دفع ولا خصم فعلي.',
      amount: 'المبلغ', paid: 'المدفوع', remaining: 'المتبقي', stPaid: 'مدفوع', stPartial: 'مدفوع جزئياً', stUnpaid: 'غير مدفوع',
      recordPay: 'تسجيل دفعة يدوية', payAmount: 'مبلغ الدفعة', method: 'طريقة الدفع', cash: 'نقداً', transfer: 'تحويل بنكي',
      payRecorded: 'تم تسجيل دفعة {v}', month: 'الشهر', student: 'الطالبة', subExists: 'لهذه الطالبة اشتراك لهذا الشهر',
      noSubs: 'لا توجد اشتراكات', overpay: 'المبلغ أكبر من المتبقي',
      chooseDriver: 'السائقة', tripAm: 'رحلة الذهاب', currentStop: 'المحطة الحالية', nextStop: 'المحطة التالية', toCampus: 'التوجه إلى الحرم الجامعي',
      pickHere: 'الطالبات في هذه المحطة', autoSim: 'محاكاة تلقائية', autoHint: 'عند الإيقاف، تنتظر الحافلة حتى تؤكد صعود كل طالبة.',
      markBoard: 'صعدت ✓', markAbsent: 'غائبة', tripDone: 'وصلت الحافلة إلى الحرم الجامعي', tripDoneAt: 'وقت الوصول {t}',
      onboard: 'على المتن', noBus: 'لا توجد حافلة مسندة لهذه السائقة', notStarted: 'لم تبدأ بعد — موعد الانطلاق {t}', driving: 'متجهة إلى',
      viewAs: 'عرض كطالبة', hello: 'مرحباً {name}', yourStop: 'محطتك',
      sTripNot: 'رحلة الذهاب لم تبدأ بعد', sTripNotSub: 'موعد الانطلاق {t}', sNoTrip: 'لا توجد رحلة اليوم على خطك',
      sDemoStart: '▶ تشغيل المحاكاة', sEta: 'الحافلة تصل محطتك خلال', sStopsAway: 'على بعد {n} محطة',
      sAtStop: 'الحافلة وصلت محطتك!', sAtStopSub: 'تفضلي بالصعود — السائقة بانتظارك',
      sOnboard: 'أنتِ على متن الحافلة', sOnboardSub: 'الوصول للحرم خلال {n} دقيقة تقريباً',
      sArrived: 'وصلتِ الحرم الجامعي', sArrivedSub: 'وقت الوصول {t}', sAbsentT: 'سجّلتِ غياباً اليوم', sAbsentSub: 'لن تتوقف الحافلة في محطتك',
      sMissed: 'غادرت الحافلة محطتك', sMissedSub: 'تواصلي مع الإدارة إذا احتجتِ مساعدة',
      absentToday: 'لن أحضر اليوم', absentHint: 'تُبلَّغ السائقة مباشرة ولا تتوقف الحافلة في محطتك.',
      yourDriver: 'سائقتك', call: 'اتصال', callDemo: 'الاتصال غير مفعّل في النسخة التجريبية',
      mySub: 'اشتراكي', payHint: 'الدفع يتم لدى الإدارة ويُسجَّل يدوياً.', boardingPass: 'بطاقة الصعود', boardingHint: 'تُعرض للسائقة عند الصعود (رمز تجريبي)',
      notifs: 'الإشعارات', markRead: 'تحديد الكل كمقروء', noNotifs: 'لا توجد إشعارات بعد', history: 'سجل الرحلات', arrivedAt: 'وصلت {t}', wasAbsent: 'غياب', yesterday: 'أمس',
      nStarted: 'انطلقت الحافلة {num} في رحلة الذهاب', nNear: 'الحافلة على بعد {n} دقائق من محطتك', nAtStop: 'الحافلة وصلت محطتك',
      nBoarded: 'تم تسجيل صعودك الحافلة', nArrived: 'وصلتِ الحرم الجامعي بسلام', nAbsent: 'تم تسجيل غيابك اليوم', nSkipped: 'غادرت الحافلة محطتك',
      nPaid: 'تم تسجيل دفعة {v} لاشتراكك',
      resetDone: 'تمت إعادة ضبط البيانات', installDone: 'تم تثبيت التطبيق', noSub: 'لا يوجد اشتراك لهذا الشهر',
    },
    en: {
      appName: 'Wasel', tagline: 'University transport for women', install: 'Install',
      demoBanner: 'Demo · Sample data · No real GPS or payment gateway',
      roleAdmin: 'Owner', roleDriver: 'Driver', roleStudent: 'Student',
      tabDash: 'Overview', tabTrips: 'Trips', tabRoutes: 'Routes', tabStudents: 'Students', tabFleet: 'Buses', tabDrivers: 'Drivers', tabSubs: 'Subscriptions',
      kBuses: 'Buses in service', kBusesSub: '{n} in maintenance', kStudents: 'Students', kStudentsSub: '{n} assigned to routes',
      kTrips: "Today's trips", kTripsSub: '{n} running now', kSeats: 'Seats taken', kSeatsSub: 'on buses right now',
      kDue: 'Due this month', kPaid: 'Collected this month', kRemainAll: 'Outstanding (all months): {v}',
      sar: 'SAR', minutes: 'min',
      simTitle: 'Morning trip simulation', simHint: 'Start the trips and watch the buses move on the map in every view.',
      startAll: '▶ Start morning trips', resetDemo: '↺ Reset', resetConfirm: 'All demo data will go back to its starting state. Continue?',
      liveMap: 'Live map', liveTrips: "Today's trips", alerts: 'Alerts', campus: 'Campus', seeAll: 'See all',
      stScheduled: 'Scheduled', stActive: 'Running', stCompleted: 'Completed',
      busActive: 'In service', busMaint: 'Maintenance', busStandby: 'Standby',
      capacity: 'Capacity', seats: 'seats', route: 'Route', driver: 'Driver', none: '— None —', unassigned: 'Unassigned',
      onboardNow: 'On board now', toMaint: 'Send to maintenance', toService: 'Return to service', busBusy: "Can't change a bus on a running trip",
      drvOnTrip: 'On trip', drvAvail: 'Available', drvOff: 'On leave', rating: 'Rating', tripsDone: 'Trips driven', bus: 'Bus',
      phone: 'Phone', license: 'License no.', licenseExp: 'License valid until',
      am: 'Morning', pm: 'Return', boarded: 'Boarded', absent: 'Absent', waiting: 'Waiting', arrived: 'Arrived',
      paxSummary: '{b} boarded · {a} absent · {w} waiting', noBusForRoute: 'No bus on this route',
      fAll: 'All', fActive: 'Running', fScheduled: 'Scheduled', fCompleted: 'Completed',
      add: '+ Add', edit: 'Edit', del: 'Delete', save: 'Save', cancel: 'Cancel', saved: 'Saved', deleted: 'Deleted', confirmDel: 'Delete this?',
      addTrip: 'New trip', editTrip: 'Edit trip', time: 'Time', dir: 'Direction', cantDelActive: "Can't delete a running trip",
      startTrip: '▶ Start trip', resetTrip: '↺ Restart trip', routeBusy: 'A trip is already running on this route',
      stopsN: '{n} stops', studentsN: '{n} students', tripsToday: "Today's trips", stops: 'Stops',
      addStudent: 'New student', editStudent: 'Edit student', nameAr: 'Name (Arabic)', nameEn: 'Name in English (optional)',
      stop: 'Stop', college: 'College', required: 'Enter a name', monthlyFee: 'Monthly fee', search: 'Search by name…',
      fleetTotal: 'Total buses', totalSeats: 'Total seats', utilization: 'Seat use right now', addBus: 'New bus',
      busNum: 'Bus number', plateNo: 'Plate number', model: 'Model', km: 'Odometer', kmU: 'km', nextService: 'Scheduled service',
      insurance: 'Insurance', inspection: 'Periodic inspection', maintLog: 'Maintenance log', addEntry: 'Add entry',
      type: 'Type', cost: 'Cost', note: 'Note', mOil: 'Oil change', mTires: 'Tires', mBrakes: 'Brakes', mAc: 'Air conditioning',
      mService: 'Full scheduled service', mInspect: 'Periodic inspection', noLog: 'No maintenance records', busAdded: 'Bus {num} added',
      entryAdded: 'Maintenance entry added', dueIn: 'in {n} days', overdue: '{n} days overdue',
      serviceAlert: 'Bus {num}: scheduled service {when}', docAlert: 'Bus {num}: {doc} expires in {n} days', maintAlert: 'Bus {num} is in maintenance',
      licAlert: "{name}'s license expires in {n} days", unpaidAlert: '{name}: {v} outstanding',
      numRequired: 'Enter the bus number and plate', numTaken: 'That bus number is taken', totalCost: 'Total maintenance cost',
      assignHint: 'Pick a route and a driver to put the bus in service', lockedTrip: 'Locked during trip',
      addDriver: 'New driver', editDriver: 'Edit driver', onLeave: 'On leave', driverBusy: "Can't delete a driver on a running trip",
      subsTitle: 'Subscriptions', newSub: '+ New monthly subscription', manualOnly: 'Manual recording only — no payment gateway, no real charges.',
      amount: 'Amount', paid: 'Paid', remaining: 'Remaining', stPaid: 'Paid', stPartial: 'Partly paid', stUnpaid: 'Unpaid',
      recordPay: 'Record manual payment', payAmount: 'Payment amount', method: 'Method', cash: 'Cash', transfer: 'Bank transfer',
      payRecorded: '{v} payment recorded', month: 'Month', student: 'Student', subExists: 'This student already has a subscription for that month',
      noSubs: 'No subscriptions', overpay: 'Amount is more than what remains',
      chooseDriver: 'Driver', tripAm: 'Morning trip', currentStop: 'Current stop', nextStop: 'Next stop', toCampus: 'Heading to campus',
      pickHere: 'Students at this stop', autoSim: 'Auto simulation', autoHint: 'When off, the bus waits until you confirm every student.',
      markBoard: 'Boarded ✓', markAbsent: 'Absent', tripDone: 'The bus has arrived at campus', tripDoneAt: 'Arrived at {t}',
      onboard: 'On board', noBus: 'No bus assigned to this driver', notStarted: 'Not started — departs at {t}', driving: 'Heading to',
      viewAs: 'View as student', hello: 'Hi {name}', yourStop: 'Your stop',
      sTripNot: "Morning trip hasn't started", sTripNotSub: 'Departs at {t}', sNoTrip: 'No trip on your route today',
      sDemoStart: '▶ Run simulation', sEta: 'Bus reaches your stop in', sStopsAway: '{n} stops away',
      sAtStop: 'The bus is at your stop!', sAtStopSub: 'Please board — the driver is waiting',
      sOnboard: "You're on the bus", sOnboardSub: 'About {n} min to campus',
      sArrived: "You've arrived at campus", sArrivedSub: 'Arrived at {t}', sAbsentT: "You're marked absent today", sAbsentSub: "The bus won't stop for you",
      sMissed: 'The bus has left your stop', sMissedSub: 'Contact the office if you need help',
      absentToday: "I won't ride today", absentHint: 'The driver is told right away and skips your stop.',
      yourDriver: 'Your driver', call: 'Call', callDemo: 'Calling is off in the demo',
      mySub: 'My subscription', payHint: 'Pay at the office; payments are recorded manually.', boardingPass: 'Boarding pass', boardingHint: 'Show to the driver when boarding (demo code)',
      notifs: 'Notifications', markRead: 'Mark all read', noNotifs: 'No notifications yet', history: 'Trip history', arrivedAt: 'Arrived {t}', wasAbsent: 'Absent', yesterday: 'Yesterday',
      nStarted: 'Bus {num} has started the morning trip', nNear: 'The bus is {n} min from your stop', nAtStop: 'The bus is at your stop',
      nBoarded: 'Your boarding was recorded', nArrived: 'You arrived safely at campus', nAbsent: "You're marked absent today", nSkipped: 'The bus left your stop',
      nPaid: 'A {v} payment was recorded for your subscription',
      resetDone: 'Demo data reset', installDone: 'App installed', noSub: 'No subscription this month',
    },
  };

  // ================= helpers =================
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } },
  };
  let lang = store.get('wasel-lang') === 'en' ? 'en' : 'ar';
  const t = (k, p) => {
    let s = I18N[lang][k] ?? I18N.ar[k] ?? k;
    if (p && typeof s === 'string') for (const [a, b] of Object.entries(p)) s = s.split('{' + a + '}').join(b);
    return s;
  };
  const L = (o) => (o == null ? '' : typeof o === 'string' ? o : (o[lang] || o.ar));
  const locale = () => (lang === 'ar' ? 'ar-SA-u-nu-latn-ca-gregory' : 'en-US');
  const fmtN = (n) => Number(n).toLocaleString(locale());
  const money = (n) => `${fmtN(n)} ${t('sar')}`;
  const fmtDate = (ts) => new Date(ts).toLocaleDateString(locale(), { day: 'numeric', month: 'short', year: 'numeric' });
  const fmtMonth = (m) => { const [y, mo] = m.split('-').map(Number); return new Date(y, mo - 1, 1).toLocaleDateString(locale(), { month: 'long', year: 'numeric' }); };
  const DAY = 864e5;
  const today0 = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); };
  const monthKey = (off = 0) => { const d = new Date(); d.setDate(1); d.setMonth(d.getMonth() + off); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`; };
  const daysTo = (ts) => Math.ceil((ts - today0()) / DAY);
  const initials = (name) => (L(name).trim()[0] || '?');
  const clockStr = (mins) => { const h = Math.floor(mins / 60) % 24; const m = Math.floor(mins % 60); return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`; };
  const parseClock = (s) => { const [h, m] = String(s).split(':').map(Number); return (h || 0) * 60 + (m || 0); };
  let S = null;
  const uid = (p) => p + (++S.seq);

  // ================= static geography =================
  const CAMPUS = [330, 150];
  const ROUTES = {
    r1: {
      name: { ar: 'خط الشمال', en: 'North Route' }, color: '#1f7a6d',
      pts: [[40, 40], [130, 40], [130, 105], [220, 105], [220, 150], CAMPUS],
      stops: [{ ar: 'حي النخيل', en: 'Al Nakheel' }, { ar: 'حي الريان', en: 'Al Rayyan' }, { ar: 'حي الصفراء', en: 'Al Safra' }, { ar: 'حي الإسكان', en: 'Al Iskan' }],
    },
    r2: {
      name: { ar: 'خط الجنوب', en: 'South Route' }, color: '#7c4dbd',
      pts: [[40, 265], [140, 265], [140, 215], [250, 215], [250, 165], [330, 165], CAMPUS],
      stops: [{ ar: 'حي الفايزية', en: 'Al Fayziyah' }, { ar: 'حي الخليج', en: 'Al Khaleej' }, { ar: 'حي الأفق', en: 'Al Ufuq' }, { ar: 'حي الربوة', en: 'Al Rabwah' }],
    },
    r3: {
      name: { ar: 'خط الشرق', en: 'East Route' }, color: '#c2477a',
      pts: [[372, 28], [285, 28], [285, 90], [345, 90], [345, 140], CAMPUS],
      stops: [{ ar: 'حي الملك فهد', en: 'King Fahd' }, { ar: 'حي الشفاء', en: 'Al Shifa' }, { ar: 'حي المروج', en: 'Al Muruj' }, { ar: 'حي الواحة', en: 'Al Waha' }],
    },
  };
  const GEO = {};
  for (const [id, r] of Object.entries(ROUTES)) {
    const cum = [0];
    for (let i = 1; i < r.pts.length; i++) cum.push(cum[i - 1] + Math.hypot(r.pts[i][0] - r.pts[i - 1][0], r.pts[i][1] - r.pts[i - 1][1]));
    GEO[id] = { cum, total: cum[cum.length - 1], stopD: r.stops.map((_, i) => cum[i]) };
  }
  const pointAt = (rid, d) => {
    const r = ROUTES[rid]; const g = GEO[rid];
    if (d <= 0) return r.pts[0];
    for (let i = 1; i < r.pts.length; i++) {
      if (d <= g.cum[i]) {
        const f = (d - g.cum[i - 1]) / (g.cum[i] - g.cum[i - 1] || 1);
        return [r.pts[i - 1][0] + (r.pts[i][0] - r.pts[i - 1][0]) * f, r.pts[i - 1][1] + (r.pts[i][1] - r.pts[i - 1][1]) * f];
      }
    }
    return r.pts[r.pts.length - 1];
  };

  // simulation constants: map units/sec, seconds at a stop, demo-second → real-second factor, tick ms
  const SPEED = 6; const DWELL = 4; const SCALE = 25; const TICK = 250;

  // ================= state =================
  const STATE_KEY = 'wasel-demo-v4';
  function initialState() {
    const t0 = today0(); const m0 = monthKey(0); const m1 = monthKey(-1);
    const C = { is: { ar: 'نظم المعلومات', en: 'Information Systems' }, md: { ar: 'الطب', en: 'Medicine' }, bz: { ar: 'إدارة الأعمال', en: 'Business' }, en: { ar: 'الهندسة', en: 'Engineering' }, sc: { ar: 'العلوم', en: 'Science' } };
    const ST = (id, ar, en, route, stop, college, fee) => ({ id, name: { ar, en }, route, stop, college, fee });
    const students = [
      ST('st1', 'نورة الحربي', 'Noura Al-Harbi', 'r1', 0, C.is, 650), ST('st2', 'ريم السبيعي', 'Reem Al-Subaie', 'r1', 0, C.bz, 650),
      ST('st3', 'لمى الزهراني', 'Lama Al-Zahrani', 'r1', 1, C.md, 650), ST('st4', 'سارة القحطاني', 'Sarah Al-Qahtani', 'r1', 2, C.is, 650),
      ST('st5', 'هيا المطيري', 'Haya Al-Mutairi', 'r1', 2, C.sc, 650), ST('st6', 'جود الغامدي', 'Jood Al-Ghamdi', 'r1', 3, C.en, 650),
      ST('st7', 'دانة الشمري', 'Dana Al-Shammari', 'r2', 0, C.md, 720), ST('st8', 'رزان العمري', 'Razan Al-Omari', 'r2', 1, C.bz, 720),
      ST('st9', 'شهد البقمي', 'Shahad Al-Buqami', 'r2', 1, C.en, 720), ST('st10', 'أريج الرشيدي', 'Areej Al-Rashidi', 'r2', 2, C.sc, 720),
      ST('st11', 'وعد السهلي', 'Waad Al-Sahli', 'r2', 3, C.is, 720), ST('st12', 'غادة المالكي', 'Ghada Al-Malki', 'r3', 0, C.bz, 680),
      ST('st13', 'عبير الجهني', 'Abeer Al-Juhani', 'r3', 1, C.md, 680), ST('st14', 'أمل الحازمي', 'Amal Al-Hazmi', 'r3', 1, C.sc, 680),
      ST('st15', 'لينا الفيفي', 'Lina Al-Faifi', 'r3', 2, C.en, 680), ST('st16', 'بشاير القرني', 'Bashayer Al-Qarni', 'r3', 3, C.is, 680),
    ];
    const D = (id, ar, en, phone, license, exp, rating, trips, off = false) => ({ id, name: { ar, en }, phone, license, licenseExp: t0 + exp * DAY, rating, trips, off });
    const drivers = [
      D('d1', 'منيرة العتيبي', 'Munira Al-Otaibi', '0550 000 141', 'DL-48213', 420, 4.9, 412),
      D('d2', 'هيفاء الشمري', 'Haifa Al-Shammari', '0550 000 262', 'DL-57390', 22, 4.8, 365),
      D('d3', 'نوال الدوسري', 'Nawal Al-Dosari', '0550 000 383', 'DL-61027', 610, 4.7, 298),
      D('d4', 'أسماء القحطاني', 'Asma Al-Qahtani', '0550 000 404', 'DL-70455', 300, 4.8, 187, true),
    ];
    const M = (dOff, type, cost, note) => ({ at: t0 + dOff * DAY, type, cost, note: note || null });
    const B = (id, num, pAr, pEn, cap, mAr, mEn, route, driver, status, km, svc, ins, insp, log) => ({
      id, num, plate: { ar: pAr, en: pEn }, cap, model: { ar: mAr, en: mEn }, route, driver, status,
      km, service: t0 + svc * DAY, insurance: t0 + ins * DAY, inspection: t0 + insp * DAY, log,
    });
    const buses = [
      B('b1', '101', 'أ ب ج 1234', 'A B J 1234', 30, 'كوستر 2023', 'Coaster 2023', 'r1', 'd1', 'active', 48210, 40, 200, 120, [M(-35, 'mOil', 420), M(-80, 'mService', 1850)]),
      B('b2', '102', 'ح د ر 5821', 'H D R 5821', 30, 'كوستر 2022', 'Coaster 2022', 'r2', 'd2', 'active', 61540, 9, 12, 160, [M(-20, 'mTires', 3200)]),
      B('b3', '103', 'س ص ط 3390', 'S S T 3390', 26, 'كاونتي 2023', 'County 2023', 'r3', 'd3', 'active', 35120, 55, 300, 25, [M(-50, 'mAc', 900)]),
      B('b4', '104', 'ع ق ك 7714', 'A Q K 7714', 30, 'كوستر 2021', 'Coaster 2021', null, null, 'maintenance', 92300, -2, 90, 140,
        [M(-1, 'mBrakes', 2400, { ar: 'تغيير الفحمات والأقراص', en: 'Pads and discs replaced' }), M(-95, 'mService', 1900)]),
      B('b5', '105', 'ل م ن 2468', 'L M N 2468', 45, 'حافلة كبيرة 2022', 'Full-size 2022', null, null, 'standby', 22800, 70, 240, 180, []),
    ];
    // monthly subscriptions with manual payments: studentId → [paid this month, paid last month]
    let pn = 0;
    const P = (dOff, amount, method = 'cash') => ({ id: 'p' + (++pn), at: t0 + dOff * DAY, amount, method, note: null });
    const plan = { st1: [650, 650], st2: [300, 650], st3: [650, 650], st4: [300, 650], st5: [0, 650], st6: [650, 650], st7: [720, 720], st8: [200, 720],
      st9: [720, 720], st10: [0, 520], st11: [720, 720], st12: [680, 680], st13: [400, 680], st14: [680, 680], st15: [0, 680], st16: [680, 680] };
    const subs = [];
    for (const st of students) {
      const [a, b] = plan[st.id];
      subs.push({ id: 'sub-' + st.id + '-1', sid: st.id, month: m1, amount: st.fee, payments: b ? [P(-34, b, 'transfer')] : [] });
      subs.push({ id: 'sub-' + st.id + '-0', sid: st.id, month: m0, amount: st.fee, payments: a ? [P(-((Number(st.id.slice(2)) % 8) + 1), a)] : [] });
    }
    const s = { v: 4, day: t0, students, drivers, buses, subs, trips: [], notifs: {}, absent: {}, auto: true, seq: 200 };
    const times = { r1: [400, 850], r2: [420, 870], r3: [390, 900] };
    for (const rid of Object.keys(ROUTES)) {
      s.trips.push(newTrip(rid, 'am', times[rid][0], 't-' + rid + '-am'));
      s.trips.push(newTrip(rid, 'pm', times[rid][1], 't-' + rid + '-pm'));
    }
    return s;
  }
  function newTrip(route, dir, start, id) {
    return { id: id || uid('t'), route, dir, start, bus: null, status: 'scheduled', dist: 0, next: 0, atStop: false, dwell: 0, elapsed: 0, pax: {}, near: {}, endedAt: null };
  }
  function loadState() {
    try {
      const raw = store.get(STATE_KEY);
      if (raw) { const s = JSON.parse(raw); if (s && s.v === 4 && s.day === today0()) return s; }
    } catch (e) { /* rebuild */ }
    return initialState();
  }
  let saveTimer = null;
  const persist = () => { clearTimeout(saveTimer); saveTimer = setTimeout(() => store.set(STATE_KEY, JSON.stringify(S)), 250); };
  S = loadState();

  const UI = {
    role: ['admin', 'driver', 'student'].includes(store.get('wasel-role')) ? store.get('wasel-role') : 'admin',
    adminTab: 'dash', driver: 'd1', student: 'st4', tripFilter: 'all', subMonth: monthKey(0), query: '',
  };

  // ================= lookups =================
  const bus = (id) => S.buses.find((b) => b.id === id);
  const driverById = (id) => S.drivers.find((d) => d.id === id);
  const student = (id) => S.students.find((x) => x.id === id);
  const busOfRoute = (rid) => S.buses.find((b) => b.route === rid && b.status === 'active');
  const tripBus = (tr) => bus(tr.bus) || busOfRoute(tr.route);
  const studentsAt = (rid, stop) => S.students.filter((x) => x.route === rid && x.stop === stop);
  const subOf = (sid, month = monthKey(0)) => S.subs.find((x) => x.sid === sid && x.month === month);
  const paidOf = (sub) => sub.payments.reduce((n, p) => n + p.amount, 0);
  const subStatus = (sub) => { const p = paidOf(sub); return p >= sub.amount ? 'paid' : p > 0 ? 'partial' : 'unpaid'; };
  const isRider = (st) => !!st.route && !!subOf(st.id);
  const tripTime = (tr) => tr.start + tr.elapsed * SCALE / 60;
  // the morning trip shown live for a route
  function liveTrip(rid) {
    const am = S.trips.filter((x) => x.route === rid && x.dir === 'am').sort((a, b) => a.start - b.start);
    return am.find((x) => x.status === 'active') || am.find((x) => x.status === 'scheduled') || am.filter((x) => x.status === 'completed').pop() || null;
  }
  const activeOnRoute = (rid) => S.trips.find((x) => x.route === rid && x.status === 'active');

  // ================= notifications =================
  function notify(sid, key, params = {}) {
    (S.notifs[sid] ||= []).unshift({ key, params, at: Date.now(), read: false });
    if (S.notifs[sid].length > 30) S.notifs[sid].length = 30;
    if (UI.role === 'student' && UI.student === sid) toast(t(key, params));
  }

  // ================= simulation =================
  function startTrip(tr) {
    if (!tr || tr.status !== 'scheduled' || tr.dir !== 'am') return;
    if (activeOnRoute(tr.route)) { toast(t('routeBusy')); return; }
    const b = busOfRoute(tr.route); if (!b) { toast(t('noBusForRoute')); return; }
    Object.assign(tr, { status: 'active', bus: b.id, dist: 0, next: 0, atStop: false, elapsed: 0, near: {}, pax: {} });
    for (const st of S.students.filter((x) => x.route === tr.route && isRider(x))) {
      tr.pax[st.id] = S.absent[st.id] ? 'absent' : 'waiting';
      notify(st.id, 'nStarted', { num: b.num });
    }
    persist();
  }
  function resetTrip(tr) { Object.assign(tr, newTrip(tr.route, tr.dir, tr.start, tr.id)); persist(); }
  const waitingAt = (tr, stop) => studentsAt(tr.route, stop).filter((x) => tr.pax[x.id] === 'waiting');
  function leaveStop(tr) {
    for (const st of studentsAt(tr.route, tr.next)) if (tr.pax[st.id] === 'waiting') { tr.pax[st.id] = 'missed'; notify(st.id, 'nSkipped'); }
    tr.atStop = false; tr.dwell = 0; tr.next += 1;
  }
  function board(tr, sid) { if (tr && tr.pax[sid] === 'waiting') { tr.pax[sid] = 'boarded'; notify(sid, 'nBoarded'); } }
  function etaSec(tr, stop) {
    if (!tr || tr.status !== 'active' || stop < tr.next) return null;
    const g = GEO[tr.route]; const n = ROUTES[tr.route].stops.length;
    let sec = Math.max(0, (stop >= n ? g.total : g.stopD[stop]) - tr.dist) / SPEED;
    if (tr.atStop) sec += Math.max(0, tr.dwell);
    for (let i = tr.atStop ? tr.next + 1 : tr.next; i < stop && i < n; i++) if (waitingAt(tr, i).length) sec += DWELL;
    return sec;
  }
  const toMin = (sec) => Math.max(1, Math.round((sec || 0) * SCALE / 60));
  function step(tr, dt) {
    const g = GEO[tr.route]; const n = ROUTES[tr.route].stops.length;
    tr.elapsed += dt;
    if (tr.atStop) {
      tr.dwell -= dt;
      const w = waitingAt(tr, tr.next);
      if (!w.length) { leaveStop(tr); return; }
      if (S.auto && tr.dwell <= 0) { w.forEach((x) => board(tr, x.id)); leaveStop(tr); }
      return;
    }
    const target = tr.next < n ? g.stopD[tr.next] : g.total;
    tr.dist = Math.min(target, tr.dist + SPEED * dt);
    for (const st of S.students.filter((x) => x.route === tr.route && tr.pax[x.id] === 'waiting' && x.stop >= tr.next)) {
      const e = etaSec(tr, st.stop);
      if (e != null && e > 0.5 && toMin(e) <= 5 && !tr.near[st.id]) { tr.near[st.id] = 1; notify(st.id, 'nNear', { n: toMin(e) }); }
    }
    if (tr.dist >= target - 0.001) {
      if (tr.next < n) {
        const w = waitingAt(tr, tr.next);
        if (!w.length) { tr.next += 1; return; }
        tr.atStop = true; tr.dwell = DWELL; w.forEach((x) => notify(x.id, 'nAtStop'));
      } else {
        tr.status = 'completed'; tr.endedAt = tripTime(tr);
        for (const [sid, v] of Object.entries(tr.pax)) if (v === 'boarded') { tr.pax[sid] = 'arrived'; notify(sid, 'nArrived'); }
        const d = driverById(tripBus(tr)?.driver); if (d) d.trips += 1;
      }
    }
  }
  let lastPersist = 0;
  function tick() {
    let any = false;
    for (const tr of S.trips) if (tr.status === 'active') { step(tr, TICK / 1000); any = true; }
    if (any && Date.now() - lastPersist > 2000) { lastPersist = Date.now(); persist(); }
    updateLive();
  }

  // ================= map =================
  function mapSVG(cfg) {
    let s = `<svg viewBox="0 0 400 300" role="img" aria-label="${esc(t('liveMap'))}"><rect width="400" height="300" fill="#eef0ec"/>`;
    for (let x = 0; x < 400; x += 50) for (let y = 0; y < 300; y += 50) s += `<rect x="${x + 6}" y="${y + 6}" width="38" height="38" rx="5" fill="#e4e6df"/>`;
    s += `<path d="M0 125 Q120 110 200 128 T400 120" stroke="#d3e2ea" stroke-width="9" fill="none"/>`;
    for (const rid of cfg.routes) {
      const pts = ROUTES[rid].pts.map((p) => p.join(',')).join(' ');
      s += `<polyline points="${pts}" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><polyline points="${pts}" fill="none" stroke="${ROUTES[rid].color}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>`;
    }
    s += `<g transform="translate(${CAMPUS[0]},${CAMPUS[1]})"><rect x="-17" y="-14" width="34" height="28" rx="7" fill="#1f3d4a"/><path d="M-9 4 V-3 L0 -9 L9 -3 V4 Z" fill="#fff"/><rect x="-3" y="-1" width="6" height="5" fill="#1f3d4a"/></g>`;
    s += `<text x="${CAMPUS[0]}" y="${CAMPUS[1] + 27}" text-anchor="middle" font-size="10" font-weight="700" fill="#1f3d4a">${esc(t('campus'))}</text>`;
    for (const rid of cfg.routes) {
      const r = ROUTES[rid]; const tr = liveTrip(rid);
      r.stops.forEach((nm, i) => {
        const [x, y] = r.pts[i];
        const passed = tr && (tr.status === 'completed' || (tr.status === 'active' && i < tr.next));
        const focus = cfg.focus && cfg.focus.route === rid && cfg.focus.stop === i;
        if (focus) s += `<circle cx="${x}" cy="${y}" r="11" fill="${r.color}" opacity=".2"/>`;
        s += `<circle cx="${x}" cy="${y}" r="${focus ? 6.5 : 5}" fill="${passed ? r.color : '#fff'}" stroke="${r.color}" stroke-width="2.5"/>`;
        const dy = y < 50 ? 17 : -10;
        s += `<text x="${x}" y="${y + dy}" text-anchor="middle" font-size="${focus ? 10 : 8.5}" font-weight="${focus ? 800 : 600}" fill="#334155" paint-order="stroke" stroke="#eef0ec" stroke-width="3">${esc(L(nm))}</text>`;
      });
    }
    for (const rid of cfg.routes) {
      const tr = liveTrip(rid); const b = tr && tripBus(tr); if (!tr || !b) continue;
      const [x, y] = pointAt(rid, tr.dist);
      s += `<g class="bus" data-trip="${tr.id}" style="transform: translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)">`;
      if (tr.status === 'active') s += `<circle class="pulse" r="10" fill="${ROUTES[rid].color}"/>`;
      s += `<circle r="10.5" fill="#e39a3e" stroke="#fff" stroke-width="2.5"/><text y="3.2" text-anchor="middle" font-size="8" font-weight="800" fill="#2b1d08">${esc(b.num)}</text></g>`;
    }
    return s + `</svg>`;
  }
  const mapSig = (cfg) => lang + '|' + cfg.routes.map((rid) => { const tr = liveTrip(rid); const b = tr && tripBus(tr); return tr ? `${tr.id}:${tr.status}:${tr.next}:${b ? b.num : ''}` : rid; }).join(',') + '|' + JSON.stringify(cfg.focus || null);
  function mapBlock(cfg) {
    const legend = cfg.routes.length > 1 ? `<div class="legend">${cfg.routes.map((rid) => `<span><i style="background:${ROUTES[rid].color}"></i>${esc(L(ROUTES[rid].name))}</span>`).join('')}</div>` : '';
    return `<div class="map" data-map='${esc(JSON.stringify(cfg))}'></div>${legend}`;
  }
  function updateMaps() {
    for (const el of $$('[data-map]')) {
      const cfg = JSON.parse(el.dataset.map); const sig = mapSig(cfg);
      if (el._sig !== sig) { el.innerHTML = mapSVG(cfg); el._sig = sig; continue; }
      for (const g of $$('g.bus', el)) {
        const tr = S.trips.find((x) => x.id === g.dataset.trip); if (!tr) continue;
        const [x, y] = pointAt(tr.route, tr.dist);
        g.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      }
    }
  }

  // ================= live regions =================
  // Elements with data-live="key" are recomputed every tick but only touched when their HTML changes.
  const LIVE = {};
  function updateLive() {
    for (const el of $$('[data-live]')) {
      const fn = LIVE[el.dataset.live]; if (!fn) continue;
      const html = fn(el.dataset.arg);
      if (el._html !== html) { el.innerHTML = html; el._html = html; }
    }
    updateMaps();
  }
  const live = (key, arg = '') => `<div data-live="${key}" data-arg="${esc(arg)}"></div>`;
  const badge = (cls, txt) => `<span class="badge ${cls}">${esc(txt)}</span>`;
  const iconBtns = (kind, id) => `<div class="row" style="gap:8px"><button class="btn icon" data-act="edit-${kind}" data-id="${id}" aria-label="${esc(t('edit'))}">✎</button><button class="btn icon del" data-act="del-${kind}" data-id="${id}" aria-label="${esc(t('del'))}">🗑</button></div>`;
  const sectionHead = (title, btn) => `<div class="card-h"><h2>${esc(title)}</h2>${btn || ''}</div>`;
  const closeX = () => `<button type="button" class="btn icon" data-act="close" aria-label="${esc(t('cancel'))}">✕</button>`;
  const formBtns = () => `<div class="row" style="margin-top:6px"><button class="btn grow" type="submit">${esc(t('save'))}</button><button class="btn ghost" type="button" data-act="close">${esc(t('cancel'))}</button></div>`;

  // ================= OWNER =================
  const TABS = [['dash', 'tabDash'], ['trips', 'tabTrips'], ['routes', 'tabRoutes'], ['students', 'tabStudents'], ['fleet', 'tabFleet'], ['drivers', 'tabDrivers'], ['subs', 'tabSubs']];
  function renderAdmin() {
    const h = `<div class="chips">${TABS.map(([k, l]) => `<button class="chip ${UI.adminTab === k ? 'on' : ''}" data-act="atab" data-tab="${k}">${esc(t(l))}</button>`).join('')}</div>`;
    const v = { dash: adminDash, trips: () => `<div class="card">${live('trips')}</div>`, routes: () => live('routes'), students: adminStudents, fleet: renderFleet, drivers: () => `<div class="card">${live('drivers')}</div>`, subs: adminSubs }[UI.adminTab];
    return h + v();
  }
  function adminDash() {
    const anySched = Object.keys(ROUTES).some((rid) => { const tr = liveTrip(rid); return tr && tr.status === 'scheduled' && busOfRoute(rid); });
    return `${live('kpis')}
      <div class="card"><div class="row between wrap"><div class="grow"><h3>${esc(t('simTitle'))}</h3><p class="muted small">${esc(t('simHint'))}</p></div>
        <div class="row"><button class="btn accent" data-act="start-all" ${anySched ? '' : 'disabled'}>${esc(t('startAll'))}</button><button class="btn ghost" data-act="reset">${esc(t('resetDemo'))}</button></div></div></div>
      <div class="grid two">
        <div class="card">${sectionHead(t('liveMap'))}${mapBlock({ routes: Object.keys(ROUTES) })}</div>
        <div class="card">${sectionHead(t('liveTrips'), `<button class="btn ghost sm" data-act="atab" data-tab="trips">${esc(t('seeAll'))}</button>`)}${live('tripProgress')}</div>
      </div>
      <div class="card" style="margin-top:14px">${sectionHead(t('alerts'))}${live('alerts')}</div>`;
  }
  function monthTotals(month) {
    const subs = S.subs.filter((x) => x.month === month);
    const due = subs.reduce((n, x) => n + x.amount, 0); const paid = subs.reduce((n, x) => n + paidOf(x), 0);
    return { due, paid, rem: due - paid };
  }
  LIVE.kpis = () => {
    const inSvc = S.buses.filter((b) => b.status === 'active');
    const maint = S.buses.filter((b) => b.status === 'maintenance').length;
    const running = S.trips.filter((x) => x.status === 'active');
    const onb = running.reduce((n, tr) => n + Object.values(tr.pax).filter((v) => v === 'boarded').length, 0);
    const cap = inSvc.reduce((n, b) => n + b.cap, 0);
    const m = monthTotals(monthKey(0));
    const remAll = S.subs.reduce((n, x) => n + Math.max(0, x.amount - paidOf(x)), 0);
    const k = (v, l, s, cls = '') => `<div class="kpi ${cls}"><div class="l">${esc(l)}</div><div class="v">${v}</div><div class="s small muted">${esc(s)}</div></div>`;
    return `<div class="kpis">
      ${k(inSvc.length, t('kBuses'), t('kBusesSub', { n: maint }), 'dark')}
      ${k(S.students.length, t('kStudents'), t('kStudentsSub', { n: S.students.filter((x) => x.route).length }))}
      ${k(S.trips.length, t('kTrips'), t('kTripsSub', { n: running.length }))}
      ${k(`${onb}/${cap}`, t('kSeats'), t('kSeatsSub'))}
      ${k(money(m.due), t('kDue'), fmtMonth(monthKey(0)))}
      ${k(`<span class="pos">${money(m.paid)}</span>`, t('kPaid'), t('kRemainAll', { v: money(remAll) }))}
    </div>`;
  };
  const statusBadge = (tr) => { const m = { scheduled: ['', 'stScheduled'], active: ['info', 'stActive'], completed: ['ok', 'stCompleted'] }[tr.status]; return badge(m[0], t(m[1])); };
  const progressPct = (tr) => (tr.status === 'completed' ? 100 : Math.round((tr.dist / GEO[tr.route].total) * 100));
  const paxCounts = (tr) => { const v = Object.values(tr.pax); return { b: v.filter((x) => x === 'boarded' || x === 'arrived').length, a: v.filter((x) => x === 'absent' || x === 'missed').length, w: v.filter((x) => x === 'waiting').length }; };
  LIVE.tripProgress = () => {
    const rows = [...S.trips].sort((a, b) => a.start - b.start);
    return `<ul class="list">${rows.map((tr) => {
      const r = ROUTES[tr.route]; const b = tripBus(tr); const d = b && driverById(b.driver);
      const nxt = tr.status === 'active' ? (tr.next < r.stops.length ? L(r.stops[tr.next]) : t('campus')) : '';
      return `<li><div class="row between"><div class="row"><b class="num">${clockStr(tr.start)}</b><span class="small">${esc(L(r.name))} · ${esc(t(tr.dir))}</span></div>${statusBadge(tr)}</div>
        ${tr.status !== 'scheduled' ? `<div class="progress" style="margin:8px 0 4px"><i style="width:${progressPct(tr)}%;background:${r.color}"></i></div><div class="row between small muted"><span>${esc(t('paxSummary', paxCounts(tr)))}</span><span class="num">${tr.status === 'active' ? `${esc(t('driving'))} ${esc(nxt)}` : clockStr(tr.endedAt)}</span></div>`
          : `<div class="small muted">${b ? `${esc(t('bus'))} ${esc(b.num)} · ${esc(d ? L(d.name) : t('none'))}` : esc(t('noBusForRoute'))}</div>`}</li>`;
    }).join('')}</ul>`;
  };
  LIVE.alerts = () => {
    const items = [];
    const fleetBtn = (bid) => `<button class="btn ghost sm" data-act="bus-log" data-bus="${bid}">🔧</button>`;
    for (const b of S.buses) {
      const sv = daysTo(b.service);
      if (sv <= 14) items.push(['🛠️', t('serviceAlert', { num: b.num, when: sv < 0 ? t('overdue', { n: -sv }) : t('dueIn', { n: sv }) }), fleetBtn(b.id)]);
      for (const f of ['insurance', 'inspection']) { const n = daysTo(b[f]); if (n <= 30) items.push(['📄', t('docAlert', { num: b.num, doc: t(f), n }), fleetBtn(b.id)]); }
      if (b.status === 'maintenance') items.push(['🔧', t('maintAlert', { num: b.num }), badge('bad', t('busMaint'))]);
    }
    for (const d of S.drivers) { const n = daysTo(d.licenseExp); if (n <= 30) items.push(['🪪', t('licAlert', { name: L(d.name), n }), `<button class="btn ghost sm" data-act="edit-driver" data-id="${d.id}">✎</button>`]); }
    for (const sub of S.subs.filter((x) => x.month === monthKey(0) && subStatus(x) !== 'paid')) {
      const st = student(sub.sid); if (!st) continue;
      items.push(['💳', t('unpaidAlert', { name: L(st.name), v: money(sub.amount - paidOf(sub)) }), `<button class="btn accent sm" data-act="pay" data-id="${sub.id}">💵</button>`]);
    }
    if (!items.length) return `<div class="empty">✓</div>`;
    return `<ul class="list">${items.map(([ic, txt, btn]) => `<li class="row"><span>${ic}</span><span class="grow small">${esc(txt)}</span>${btn}</li>`).join('')}</ul>`;
  };

  // ---- trips
  LIVE.trips = () => {
    const f = [['all', 'fAll'], ['active', 'fActive'], ['scheduled', 'fScheduled'], ['completed', 'fCompleted']];
    const rows = [...S.trips].filter((x) => UI.tripFilter === 'all' || x.status === UI.tripFilter).sort((a, b) => a.start - b.start);
    return `${sectionHead(t('tabTrips'), `<button class="btn" data-act="add-trip">${esc(t('add'))}</button>`)}
      <div class="chips">${f.map(([k, l]) => `<button class="chip ${UI.tripFilter === k ? 'on' : ''}" data-act="trip-filter" data-f="${k}">${esc(t(l))}</button>`).join('')}</div>
      ${rows.length ? rows.map((tr) => {
        const r = ROUTES[tr.route]; const b = tripBus(tr); const d = b && driverById(b.driver); const c = paxCounts(tr);
        const total = S.students.filter((x) => x.route === tr.route && isRider(x)).length;
        const action = tr.dir === 'am' && tr.status === 'scheduled' ? `<button class="btn accent sm" data-act="start-trip" data-trip="${tr.id}">${esc(t('startTrip'))}</button>`
          : tr.status === 'completed' ? `<button class="btn ghost sm" data-act="reset-trip" data-trip="${tr.id}">${esc(t('resetTrip'))}</button>` : '<span></span>';
        return `<div class="sub-card">
          <div class="row between"><div class="row"><span class="num" style="font-size:1.5rem;font-weight:800">${clockStr(tr.start)}</span>
            <div><b>${esc(L(r.name))} · ${esc(t(tr.dir))}</b><div class="small muted">${b ? `${esc(t('bus'))} ${esc(b.num)} · ${esc(d ? L(d.name) : t('none'))}` : esc(t('noBusForRoute'))}</div></div></div>${statusBadge(tr)}</div>
          ${tr.status !== 'scheduled' ? `<div class="row" style="margin-top:10px"><div class="progress grow"><i style="width:${progressPct(tr)}%;background:${r.color}"></i></div><span class="small num muted">${c.b} / ${total}</span></div>` : ''}
          <div class="row between" style="margin-top:10px">${action}${tr.status === 'active' ? '' : iconBtns('trip', tr.id)}</div>
        </div>`;
      }).join('') : `<div class="empty">—</div>`}`;
  };
  function tripModal(id) {
    const tr = id ? S.trips.find((x) => x.id === id) : null;
    openModal(`<form data-form="trip"><input type="hidden" name="id" value="${tr ? tr.id : ''}">
      ${sectionHead(t(tr ? 'editTrip' : 'addTrip'), closeX())}
      <label class="field"><span>${esc(t('route'))}</span><select class="select" name="route">${Object.entries(ROUTES).map(([rid, r]) => `<option value="${rid}" ${tr && tr.route === rid ? 'selected' : ''}>${esc(L(r.name))}</option>`).join('')}</select></label>
      <div class="row" style="gap:8px">
        <label class="field grow"><span>${esc(t('dir'))}</span><select class="select" name="dir"><option value="am" ${!tr || tr.dir === 'am' ? 'selected' : ''}>${esc(t('am'))}</option><option value="pm" ${tr && tr.dir === 'pm' ? 'selected' : ''}>${esc(t('pm'))}</option></select></label>
        <label class="field grow"><span>${esc(t('time'))}</span><input class="input" type="time" name="time" value="${clockStr(tr ? tr.start : 420)}" required></label>
      </div>${formBtns()}</form>`);
  }

  // ---- routes
  LIVE.routes = () => Object.entries(ROUTES).map(([rid, r]) => {
    const b = busOfRoute(rid); const d = b && driverById(b.driver);
    const trips = S.trips.filter((x) => x.route === rid).sort((a, c) => a.start - c.start);
    const n = S.students.filter((x) => x.route === rid).length;
    return `<div class="card">
      <div class="card-h"><div class="row"><span style="width:14px;height:14px;border-radius:50%;background:${r.color};display:inline-block"></span><h2>${esc(L(r.name))}</h2></div>
        <span class="small muted">${esc(t('stopsN', { n: r.stops.length }))} · ${esc(t('studentsN', { n }))}</span></div>
      <div class="grid two">
        <div>${mapBlock({ routes: [rid] })}</div>
        <div class="stack small">
          <div class="row between"><span class="muted">${esc(t('bus'))}</span><b>${b ? `${esc(b.num)} · ${esc(L(b.plate))}` : esc(t('none'))}</b></div>
          <div class="row between"><span class="muted">${esc(t('driver'))}</span><b>${esc(d ? L(d.name) : t('none'))}</b></div>
          <div class="row between"><span class="muted">${esc(t('tripsToday'))}</span><b class="num">${trips.map((x) => `${clockStr(x.start)} ${esc(t(x.dir))}`).join(' · ') || '—'}</b></div>
          <ol class="timeline" style="margin-top:10px">${r.stops.map((s, i) => `<li><span class="dot"></span><div class="row between"><b>${esc(L(s))}</b><span class="muted">${esc(t('studentsN', { n: studentsAt(rid, i).length }))}</span></div></li>`).join('')}<li><span class="dot"></span><b>${esc(t('campus'))}</b></li></ol>
        </div>
      </div></div>`;
  }).join('');

  // ---- students
  function adminStudents() {
    return `<div class="card">${sectionHead(t('tabStudents'), `<button class="btn" data-act="add-student">${esc(t('add'))}</button>`)}
      <input class="input" type="search" data-input="query" placeholder="${esc(t('search'))}" value="${esc(UI.query)}" style="margin-bottom:6px">
      ${live('studentList')}</div>`;
  }
  const payBadge = (ss) => badge({ paid: 'ok', partial: 'warn', unpaid: 'bad' }[ss], t({ paid: 'stPaid', partial: 'stPartial', unpaid: 'stUnpaid' }[ss]));
  LIVE.studentList = () => {
    const q = UI.query.trim().toLowerCase();
    const rows = S.students.filter((st) => !q || `${st.name.ar} ${st.name.en}`.toLowerCase().includes(q));
    if (!rows.length) return `<div class="empty">—</div>`;
    return `<ul class="list">${rows.map((st) => {
      const sub = subOf(st.id);
      return `<li><div class="row"><div class="avatar">${esc(initials(st.name))}</div><div class="grow"><b>${esc(L(st.name))}</b>
        <div class="small muted">${st.route ? `${esc(L(ROUTES[st.route].name))} · ${esc(L(ROUTES[st.route].stops[st.stop]))}` : esc(t('unassigned'))} · ${esc(L(st.college))}</div></div>
        ${sub ? payBadge(subStatus(sub)) : badge('', t('noSub'))}</div>
        <div class="row between" style="margin-top:8px"><span class="small muted">${esc(t('monthlyFee'))}: ${money(st.fee)}</span>${iconBtns('student', st.id)}</div></li>`;
    }).join('')}</ul>`;
  };
  const COLLEGES = { is: ['نظم المعلومات', 'Information Systems'], md: ['الطب', 'Medicine'], bz: ['إدارة الأعمال', 'Business'], en: ['الهندسة', 'Engineering'], sc: ['العلوم', 'Science'] };
  const stopOpts = (rid, sel) => (rid ? ROUTES[rid].stops.map((s, i) => `<option value="${i}" ${sel === i ? 'selected' : ''}>${esc(L(s))}</option>`).join('') : '');
  function studentModal(id) {
    const st = id ? student(id) : null; const rid = st ? st.route : 'r1';
    openModal(`<form data-form="student"><input type="hidden" name="id" value="${st ? st.id : ''}">
      ${sectionHead(t(st ? 'editStudent' : 'addStudent'), closeX())}
      <label class="field"><span>${esc(t('nameAr'))}</span><input class="input" name="ar" value="${esc(st ? st.name.ar : '')}" autocomplete="off" required></label>
      <label class="field"><span>${esc(t('nameEn'))}</span><input class="input" name="en" value="${esc(st && st.name.en !== st.name.ar ? st.name.en : '')}" autocomplete="off" dir="ltr"></label>
      <div class="row" style="gap:8px">
        <label class="field grow"><span>${esc(t('route'))}</span><select class="select" name="route" data-input="route-pick"><option value="">${esc(t('none'))}</option>${Object.entries(ROUTES).map(([k, r]) => `<option value="${k}" ${rid === k ? 'selected' : ''}>${esc(L(r.name))}</option>`).join('')}</select></label>
        <label class="field grow"><span>${esc(t('stop'))}</span><select class="select" name="stop" id="stopPick">${stopOpts(rid, st ? st.stop : 0)}</select></label>
      </div>
      <div class="row" style="gap:8px">
        <label class="field grow"><span>${esc(t('college'))}</span><select class="select" name="college">${Object.entries(COLLEGES).map(([k, [a, e]]) => `<option value="${k}" ${st && st.college && st.college.ar === a ? 'selected' : ''}>${esc(lang === 'ar' ? a : e)}</option>`).join('')}</select></label>
        <label class="field" style="width:130px"><span>${esc(t('monthlyFee'))}</span><input class="input" type="number" min="0" step="10" name="fee" value="${st ? st.fee : 650}" inputmode="numeric"></label>
      </div>${formBtns()}</form>`);
  }

  // ---- fleet
  function dueBadge(ts, warnAt = 14) {
    const n = daysTo(ts); const cls = n < 0 ? 'bad' : n <= warnAt ? 'warn' : '';
    return cls ? badge(cls, `${fmtDate(ts)} · ${n < 0 ? t('overdue', { n: -n }) : t('dueIn', { n })}`) : `<b>${esc(fmtDate(ts))}</b>`;
  }
  function renderFleet() {
    const c = (st) => S.buses.filter((b) => b.status === st).length;
    const k = (v, l, col = '') => `<div class="kpi"><div class="l">${esc(l)}</div><div class="v" style="${col}">${v}</div></div>`;
    return `<div class="kpis">${k(S.buses.length, t('fleetTotal'))}${k(c('active'), t('busActive'), 'color:var(--ok)')}${k(c('maintenance'), t('busMaint'), 'color:var(--bad)')}
        ${k(c('standby'), t('busStandby'), 'color:var(--muted)')}${k(fmtN(S.buses.reduce((n, b) => n + b.cap, 0)), t('totalSeats'))}${live('fleetUtil')}</div>
      <div class="row" style="margin-bottom:14px"><button class="btn" data-act="add-bus">+ ${esc(t('addBus'))}</button></div>
      <div class="grid cards">${S.buses.map(busCard).join('')}</div>`;
  }
  LIVE.fleetUtil = () => {
    const act = S.trips.filter((x) => x.status === 'active');
    const cap = act.reduce((n, tr) => n + (tripBus(tr) ? tripBus(tr).cap : 0), 0);
    const onb = act.reduce((n, tr) => n + Object.values(tr.pax).filter((v) => v === 'boarded').length, 0);
    return `<div class="kpi"><div class="l">${esc(t('utilization'))}</div><div class="v">${cap ? Math.round(onb / cap * 100) : 0}%</div></div>`;
  };
  LIVE.busOnboard = (bid) => {
    const tr = S.trips.find((x) => x.status === 'active' && x.bus === bid); const b = bus(bid);
    if (!tr || !b) return '';
    const onb = Object.values(tr.pax).filter((v) => v === 'boarded').length;
    return `<div style="margin-top:10px"><div class="row between small"><span class="muted">${esc(t('onboardNow'))}</span><b class="num">${onb} / ${b.cap}</b></div><div class="progress" style="margin-top:6px"><i style="width:${Math.round(onb / b.cap * 100)}%"></i></div></div>`;
  };
  const busBusy = (b) => S.trips.some((x) => x.status === 'active' && x.bus === b.id);
  function busCard(b) {
    const busy = busBusy(b); const maint = b.status === 'maintenance';
    const st = { active: ['ok', 'busActive'], maintenance: ['bad', 'busMaint'], standby: ['', 'busStandby'] }[b.status];
    const routes = Object.keys(ROUTES).filter((rid) => rid === b.route || !S.buses.some((x) => x.id !== b.id && x.route === rid));
    const drivers = S.drivers.filter((d) => d.id === b.driver || (!d.off && !S.buses.some((x) => x.id !== b.id && x.driver === d.id)));
    const lock = busy || maint ? 'disabled' : '';
    return `<div class="card" style="margin:0">
      <div class="card-h"><div class="row"><div class="avatar" style="border-radius:14px;background:${b.route ? ROUTES[b.route].color : '#9aa3a8'};color:#fff">${esc(b.num)}</div>
        <div><b>${esc(t('bus'))} ${esc(b.num)}</b><div class="small muted">${esc(L(b.plate))} · ${esc(L(b.model))} · ${b.cap} ${esc(t('seats'))}</div></div></div>${badge(st[0], t(st[1]))}</div>
      <div class="row" style="gap:8px">
        <label class="field grow" style="margin:0"><span>${esc(t('route'))}</span><select class="select" data-input="bus-route" data-bus="${b.id}" ${lock}><option value="">${esc(t('none'))}</option>${routes.map((rid) => `<option value="${rid}" ${b.route === rid ? 'selected' : ''}>${esc(L(ROUTES[rid].name))}</option>`).join('')}</select></label>
        <label class="field grow" style="margin:0"><span>${esc(t('driver'))}</span><select class="select" data-input="bus-driver" data-bus="${b.id}" ${lock}><option value="">${esc(t('none'))}</option>${drivers.map((d) => `<option value="${d.id}" ${b.driver === d.id ? 'selected' : ''}>${esc(L(d.name))}</option>`).join('')}</select></label>
      </div>
      ${busy ? `<p class="small muted" style="margin-top:6px">🔒 ${esc(t('lockedTrip'))}</p>` : b.status === 'standby' ? `<p class="small muted" style="margin-top:6px">${esc(t('assignHint'))}</p>` : ''}
      ${live('busOnboard', b.id)}
      <div class="stack small" style="margin-top:12px">
        <div class="row between"><span class="muted">${esc(t('km'))}</span><b class="num">${fmtN(b.km)} ${esc(t('kmU'))}</b></div>
        <div class="row between"><span class="muted">${esc(t('nextService'))}</span>${dueBadge(b.service)}</div>
        <div class="row between"><span class="muted">${esc(t('insurance'))}</span>${dueBadge(b.insurance, 30)}</div>
        <div class="row between"><span class="muted">${esc(t('inspection'))}</span>${dueBadge(b.inspection, 30)}</div>
        <div class="row between"><span class="muted">${esc(t('totalCost'))}</span><b>${money(b.log.reduce((n, m) => n + m.cost, 0))}</b></div>
      </div>
      <div class="row" style="margin-top:12px">
        <button class="btn soft sm grow" data-act="bus-log" data-bus="${b.id}">🔧 ${esc(t('maintLog'))} (${b.log.length})</button>
        <button class="btn ghost sm grow" data-act="bus-toggle" data-bus="${b.id}" ${busy ? 'disabled' : ''}>${esc(t(maint ? 'toService' : 'toMaint'))}</button>
        <button class="btn icon del" data-act="del-bus" data-id="${b.id}" ${busy ? 'disabled' : ''} aria-label="${esc(t('del'))}">🗑</button>
      </div></div>`;
  }
  function syncBus(b) { if (b.status !== 'maintenance') b.status = b.route && b.driver ? 'active' : 'standby'; persist(); }
  const MTYPES = ['mOil', 'mTires', 'mBrakes', 'mAc', 'mService', 'mInspect'];
  function busLogModal(bid) {
    const b = bus(bid); const rows = [...b.log].sort((x, y) => y.at - x.at);
    openModal(`${sectionHead(`🔧 ${t('maintLog')} · ${b.num}`, closeX())}
      ${rows.length ? `<ul class="list">${rows.map((m) => `<li><div class="row between"><b>${esc(t(m.type))}</b><b>${money(m.cost)}</b></div><div class="small muted">${esc(fmtDate(m.at))}${m.note ? ' · ' + esc(L(m.note)) : ''}</div></li>`).join('')}</ul>
        <div class="row between" style="margin:8px 0 16px"><span class="muted">${esc(t('totalCost'))}</span><b>${money(b.log.reduce((n, m) => n + m.cost, 0))}</b></div>` : `<div class="empty">${esc(t('noLog'))}</div>`}
      <form data-form="log"><h3 style="margin-bottom:10px">${esc(t('addEntry'))}</h3><input type="hidden" name="bus" value="${b.id}">
        <div class="row" style="gap:8px">
          <label class="field grow"><span>${esc(t('type'))}</span><select class="select" name="type">${MTYPES.map((k) => `<option value="${k}">${esc(t(k))}</option>`).join('')}</select></label>
          <label class="field" style="width:120px"><span>${esc(t('cost'))}</span><input class="input" name="cost" type="number" min="0" step="10" value="0" inputmode="numeric"></label>
        </div>
        <label class="field"><span>${esc(t('km'))}</span><input class="input" name="km" type="number" min="0" value="${b.km}" inputmode="numeric"></label>
        <label class="field"><span>${esc(t('note'))}</span><input class="input" name="note" autocomplete="off"></label>
        <button class="btn block" type="submit">${esc(t('addEntry'))}</button></form>`);
  }
  function busModal() {
    openModal(`<form data-form="bus">${sectionHead(t('addBus'), closeX())}
      <div class="row" style="gap:8px">
        <label class="field" style="width:120px"><span>${esc(t('busNum'))}</span><input class="input" name="num" inputmode="numeric" required></label>
        <label class="field grow"><span>${esc(t('plateNo'))}</span><input class="input" name="plate" autocomplete="off" required></label>
      </div>
      <label class="field"><span>${esc(t('model'))}</span><input class="input" name="model" autocomplete="off"></label>
      <div class="row" style="gap:8px">
        <label class="field grow"><span>${esc(t('capacity'))}</span><select class="select" name="cap"><option>15</option><option>26</option><option selected>30</option><option>45</option><option>50</option></select></label>
        <label class="field grow"><span>${esc(t('km'))}</span><input class="input" name="km" type="number" min="0" value="0" inputmode="numeric"></label>
      </div>${formBtns()}</form>`);
  }

  // ---- drivers
  LIVE.drivers = () => `${sectionHead(t('tabDrivers'), `<button class="btn" data-act="add-driver">${esc(t('add'))}</button>`)}
    <ul class="list">${S.drivers.map((d) => {
      const b = S.buses.find((x) => x.driver === d.id);
      const st = d.off ? ['', 'drvOff'] : b && busBusy(b) ? ['info', 'drvOnTrip'] : ['ok', 'drvAvail'];
      return `<li><div class="row"><div class="avatar">${esc(initials(d.name))}</div>
        <div class="grow"><b>${esc(L(d.name))}</b><div class="small muted num"><bdi>${esc(d.phone)} · ${esc(d.license)}</bdi></div></div>
        <div style="text-align:end">${badge(st[0], t(st[1]))}<div class="small muted" style="margin-top:4px">${b && b.route ? esc(L(ROUTES[b.route].name)) : esc(t('unassigned'))}</div></div></div>
        <div class="row between wrap" style="margin-top:8px"><span class="small muted">★ ${d.rating} · ${esc(t('tripsDone'))}: ${fmtN(d.trips)} · ${esc(t('licenseExp'))} ${dueBadge(d.licenseExp, 30)}</span>${iconBtns('driver', d.id)}</div></li>`;
    }).join('')}</ul>`;
  const isoDate = (ts) => { const d = new Date(ts); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  function driverModal(id) {
    const d = id ? driverById(id) : null;
    openModal(`<form data-form="driver"><input type="hidden" name="id" value="${d ? d.id : ''}">
      ${sectionHead(t(d ? 'editDriver' : 'addDriver'), closeX())}
      <label class="field"><span>${esc(t('nameAr'))}</span><input class="input" name="ar" value="${esc(d ? d.name.ar : '')}" autocomplete="off" required></label>
      <label class="field"><span>${esc(t('nameEn'))}</span><input class="input" name="en" value="${esc(d && d.name.en !== d.name.ar ? d.name.en : '')}" dir="ltr" autocomplete="off"></label>
      <div class="row" style="gap:8px">
        <label class="field grow"><span>${esc(t('phone'))}</span><input class="input" name="phone" value="${esc(d ? d.phone : '05')}" dir="ltr" inputmode="tel"></label>
        <label class="field grow"><span>${esc(t('license'))}</span><input class="input" name="license" value="${esc(d ? d.license : 'DL-')}" dir="ltr"></label>
      </div>
      <label class="field"><span>${esc(t('licenseExp'))}</span><input class="input" type="date" name="exp" value="${isoDate(d ? d.licenseExp : today0() + 365 * DAY)}"></label>
      <label class="row small" style="margin-bottom:14px"><span class="switch green"><input type="checkbox" name="off" ${d && d.off ? 'checked' : ''}><span></span></span>${esc(t('onLeave'))}</label>
      ${formBtns()}</form>`);
  }

  // ---- subscriptions (manual payments)
  function adminSubs() {
    const months = [...new Set(S.subs.map((x) => x.month).concat(monthKey(0)))].sort().reverse();
    return `<div class="card">${sectionHead(t('subsTitle'), `<button class="btn" data-act="add-sub">${esc(t('newSub'))}</button>`)}
      <div class="stripes">${esc(t('manualOnly'))}</div>
      <div class="chips">${months.map((m) => `<button class="chip ${UI.subMonth === m ? 'on' : ''}" data-act="sub-month" data-m="${m}">${esc(fmtMonth(m))}</button>`).join('')}</div>
      ${live('subList')}</div>`;
  }
  const ORDER = { unpaid: 0, partial: 1, paid: 2 };
  LIVE.subList = () => {
    const m = monthTotals(UI.subMonth);
    const subs = S.subs.filter((x) => x.month === UI.subMonth).sort((a, b) => ORDER[subStatus(a)] - ORDER[subStatus(b)]);
    return `<div class="money-row"><span>${esc(t('amount'))}: <b>${money(m.due)}</b></span><span>${esc(t('paid'))}: <b class="pos">${money(m.paid)}</b></span><span>${esc(t('remaining'))}: <b class="neg">${money(m.rem)}</b></span></div>
      ${subs.length ? subs.map((sub) => {
        const st = student(sub.sid); const ss = subStatus(sub); const p = paidOf(sub);
        return `<div class="sub-card">
          <div class="row between"><div><b style="font-size:1.05rem">${esc(st ? L(st.name) : '—')}</b><div class="small muted">${esc(fmtMonth(sub.month))}${st && st.route ? ' · ' + esc(L(ROUTES[st.route].name)) : ''}</div></div>
            <div style="text-align:end"><div class="num">${money(p)} / ${money(sub.amount)}</div>${payBadge(ss)}</div></div>
          <div class="row" style="margin-top:10px"><button class="btn accent grow" data-act="pay" data-id="${sub.id}" ${ss === 'paid' ? 'disabled' : ''}>💵 ${esc(t('recordPay'))}</button><button class="btn icon del" data-act="del-sub" data-id="${sub.id}" aria-label="${esc(t('del'))}">🗑</button></div>
          ${sub.payments.length ? `<ul class="list" style="margin-top:6px;border-top:1px solid var(--line)">${sub.payments.map((py) => `<li class="row small"><span class="grow muted">${esc(fmtDate(py.at))} · ${esc(t(py.method))}${py.note ? ' · ' + esc(py.note) : ''}</span><b class="num">${money(py.amount)}</b><button class="btn icon del" style="width:36px;height:36px" data-act="del-pay" data-id="${sub.id}" data-pay="${py.id}" aria-label="${esc(t('del'))}">🗑</button></li>`).join('')}</ul>` : ''}
        </div>`;
      }).join('') : `<div class="empty">${esc(t('noSubs'))}</div>`}`;
  };
  function payModal(subId) {
    const sub = S.subs.find((x) => x.id === subId); const st = student(sub.sid); const rem = sub.amount - paidOf(sub);
    openModal(`<form data-form="pay"><input type="hidden" name="id" value="${sub.id}">
      ${sectionHead(t('recordPay'), closeX())}
      <p style="margin-bottom:12px"><b>${esc(st ? L(st.name) : '—')}</b> · ${esc(fmtMonth(sub.month))}<br><span class="small muted">${esc(t('remaining'))}: ${money(rem)}</span></p>
      <div class="row" style="gap:8px">
        <label class="field grow"><span>${esc(t('payAmount'))}</span><input class="input" type="number" name="amount" min="1" max="${rem}" value="${rem}" inputmode="numeric" required></label>
        <label class="field grow"><span>${esc(t('method'))}</span><select class="select" name="method"><option value="cash">${esc(t('cash'))}</option><option value="transfer">${esc(t('transfer'))}</option></select></label>
      </div>
      <label class="field"><span>${esc(t('note'))}</span><input class="input" name="note" autocomplete="off"></label>
      <div class="stripes small">${esc(t('manualOnly'))}</div>${formBtns()}</form>`);
  }
  function subModal() {
    const months = [monthKey(0), monthKey(1)];
    openModal(`<form data-form="sub">${sectionHead(t('newSub').replace('+ ', ''), closeX())}
      <label class="field"><span>${esc(t('student'))}</span><select class="select" name="sid">${S.students.map((st) => `<option value="${st.id}" data-fee="${st.fee}">${esc(L(st.name))}</option>`).join('')}</select></label>
      <div class="row" style="gap:8px">
        <label class="field grow"><span>${esc(t('month'))}</span><select class="select" name="month">${months.map((m) => `<option value="${m}">${esc(fmtMonth(m))}</option>`).join('')}</select></label>
        <label class="field grow"><span>${esc(t('amount'))}</span><input class="input" type="number" name="amount" min="0" step="10" value="${S.students[0] ? S.students[0].fee : 650}" inputmode="numeric"></label>
      </div>${formBtns()}</form>`);
  }

  // ================= DRIVER =================
  const driverBus = (did) => S.buses.find((x) => x.driver === did && x.route && x.status === 'active');
  function renderDriver() {
    const avail = S.drivers.filter((d) => driverBus(d.id));
    if (avail.length && !avail.some((d) => d.id === UI.driver)) UI.driver = avail[0].id;
    return `<div class="narrow"><label class="field"><span>${esc(t('chooseDriver'))}</span><select class="select" data-input="driver">${avail.map((d) => `<option value="${d.id}" ${UI.driver === d.id ? 'selected' : ''}>${esc(L(d.name))}</option>`).join('')}</select></label>${live('driverMain')}</div>`;
  }
  LIVE.driverMain = () => {
    const d = driverById(UI.driver); const b = d && driverBus(d.id);
    if (!b) return `<div class="card empty">${esc(t('noBus'))}</div>`;
    const tr = liveTrip(b.route); const r = ROUTES[b.route];
    if (!tr) return `<div class="card empty">${esc(t('sNoTrip'))}</div>`;
    const c = paxCounts(tr);
    let h = `<div class="card"><div class="row between">
        <div class="row"><div class="avatar">${esc(initials(d.name))}</div><div><b>${esc(L(d.name))}</b><div class="small muted">${esc(t('bus'))} ${esc(b.num)} · ${esc(L(b.plate))}</div></div></div>
        <div style="text-align:end"><div class="clock">${clockStr(tr.status === 'scheduled' ? tr.start : tr.status === 'completed' ? tr.endedAt : tripTime(tr))}</div>${statusBadge(tr)}</div></div>
      <div class="row between small" style="margin-top:12px"><span class="muted">${esc(t('tripAm'))} · ${esc(L(r.name))}</span><span>${esc(t('onboard'))}: <b class="num">${c.b} / ${b.cap}</b></span></div></div>`;
    if (tr.status === 'scheduled') {
      h += `<div class="card"><p class="muted" style="margin-bottom:12px">${esc(t('notStarted', { t: clockStr(tr.start) }))}</p><button class="btn accent lg" data-act="start-trip" data-trip="${tr.id}">${esc(t('startTrip'))}</button></div>`;
    } else if (tr.status === 'active') {
      const toCampus = tr.next >= r.stops.length;
      const here = !toCampus ? studentsAt(tr.route, tr.next).filter((x) => tr.pax[x.id]) : [];
      h += `<div class="card stop-card"><div class="small muted">${esc(t(tr.atStop ? 'currentStop' : 'nextStop'))}</div>
        <div class="big-title">${esc(toCampus ? t('toCampus') : L(r.stops[tr.next]))}</div>
        ${!toCampus && !tr.atStop ? `<div class="small muted num">≈ ${toMin(etaSec(tr, tr.next))} ${esc(t('minutes'))}</div>` : ''}
        ${here.length ? `<div class="sec-title" style="margin-top:12px">${esc(t('pickHere'))}</div>${here.map((st) => {
          const v = tr.pax[st.id]; const act = tr.atStop && v === 'waiting';
          return `<div class="pax"><div class="avatar">${esc(initials(st.name))}</div><div class="grow"><b>${esc(L(st.name))}</b><div class="small muted">${esc(L(st.college))}</div></div>
            ${act ? `<button class="btn ok sm" data-act="board" data-sid="${st.id}">${esc(t('markBoard'))}</button><button class="btn bad sm" data-act="mark-absent" data-sid="${st.id}">${esc(t('markAbsent'))}</button>`
              : badge(v === 'boarded' ? 'ok' : v === 'waiting' ? 'info' : 'bad', t(v === 'missed' ? 'absent' : v))}</div>`;
        }).join('')}` : ''}</div>
        <div class="card">${mapBlock({ routes: [tr.route] })}</div>`;
    } else {
      h += `<div class="card" style="text-align:center"><div style="font-size:2.2rem">🎓</div><h2>${esc(t('tripDone'))}</h2><p class="muted num">${esc(t('tripDoneAt', { t: clockStr(tr.endedAt) }))}</p><p class="small" style="margin:8px 0 14px">${esc(t('paxSummary', c))}</p><button class="btn ghost" data-act="reset-trip" data-trip="${tr.id}">${esc(t('resetTrip'))}</button></div>`;
    }
    h += `<div class="card"><div class="card-h"><h3>${esc(t('stops'))}</h3><label class="row small"><span class="muted">${esc(t('autoSim'))}</span><span class="switch green"><input type="checkbox" data-input="auto" ${S.auto ? 'checked' : ''}><span></span></span></label></div>
      <p class="small muted" style="margin:-6px 0 12px">${esc(t('autoHint'))}</p>
      <ol class="timeline">${r.stops.map((s, i) => {
        const cls = tr.status === 'completed' || (tr.status === 'active' && i < tr.next) ? 'done' : tr.status === 'active' && i === tr.next ? 'now' : '';
        return `<li class="${cls}"><span class="dot"></span><div class="row between"><b>${esc(L(s))}</b><span class="small muted">${esc(t('studentsN', { n: studentsAt(tr.route, i).filter(isRider).length }))}</span></div></li>`;
      }).join('')}<li class="${tr.status === 'completed' ? 'done' : tr.status === 'active' && tr.next >= r.stops.length ? 'now' : ''}"><span class="dot"></span><b>${esc(t('campus'))}</b></li></ol></div>`;
    return h;
  };

  // ================= STUDENT =================
  function renderStudent() {
    if (!student(UI.student)) UI.student = S.students[0] ? S.students[0].id : null;
    const st = student(UI.student); if (!st) return `<div class="card empty">—</div>`;
    return `<div class="narrow">
      <label class="field"><span>${esc(t('viewAs'))}</span><select class="select" data-input="student">${S.students.map((x) => `<option value="${x.id}" ${UI.student === x.id ? 'selected' : ''}>${esc(L(x.name))}${x.route ? ' — ' + esc(L(ROUTES[x.route].name)) : ''}</option>`).join('')}</select></label>
      ${live('studentHero')}
      ${st.route ? `<div class="card">${mapBlock({ routes: [st.route], focus: { route: st.route, stop: st.stop } })}</div>` : ''}
      ${live('studentAbsent')}${live('studentDriver')}${live('studentSub')}${live('studentNotifs')}
      <div class="card"><div class="card-h"><h3>${esc(t('history'))}</h3></div>${studentHistory(st)}</div></div>`;
  }
  function studentState(st, tr) {
    if (!st.route || !tr) return 'none';
    if (tr.status === 'scheduled') return S.absent[st.id] ? 'absent' : 'scheduled';
    const v = tr.pax[st.id];
    if (!v) return tr.status === 'completed' ? 'none' : 'scheduled';
    if (v === 'absent') return 'absent';
    if (v === 'missed') return 'missed';
    if (v === 'arrived') return 'arrived';
    if (v === 'boarded') return 'onboard';
    if (tr.status === 'completed') return 'missed';
    if (tr.atStop && tr.next === st.stop) return 'atStop';
    return 'coming';
  }
  LIVE.studentHero = () => {
    const st = student(UI.student); if (!st) return '';
    const tr = st.route ? liveTrip(st.route) : null; const r = st.route ? ROUTES[st.route] : null;
    const s = studentState(st, tr); const pct = tr ? progressPct(tr) : 0;
    if (s === 'coming') {
      const away = st.stop - tr.next; const b = tripBus(tr);
      return `<div class="hero"><div class="small muted">${esc(t('sEta'))}</div>
        <div class="row" style="align-items:baseline;gap:8px;margin:6px 0 4px"><span class="eta">${toMin(etaSec(tr, st.stop))}</span><b>${esc(t('minutes'))}</b></div>
        <div class="small muted">${esc(away > 0 ? t('sStopsAway', { n: away }) : t('yourStop'))} · ${esc(t('bus'))} ${esc(b ? b.num : '')} · <span class="num">${clockStr(tripTime(tr))}</span></div>
        <div class="progress" style="margin-top:14px"><i style="width:${pct}%"></i></div></div>`;
    }
    const M = {
      none: ['🚫', t('sNoTrip'), ''],
      scheduled: ['🕡', t('sTripNot'), t('sTripNotSub', { t: clockStr(tr ? tr.start : 0) })],
      atStop: ['🚌', t('sAtStop'), t('sAtStopSub')],
      onboard: ['🛣️', t('sOnboard'), t('sOnboardSub', { n: tr && r ? toMin(etaSec(tr, r.stops.length)) : 0 })],
      arrived: ['🎓', t('sArrived'), t('sArrivedSub', { t: clockStr(tr ? tr.endedAt : 0) })],
      absent: ['🙅‍♀️', t('sAbsentT'), t('sAbsentSub')],
      missed: ['⚠️', t('sMissed'), t('sMissedSub')],
    }[s];
    const extra = s === 'scheduled' && tr && busOfRoute(st.route) ? `<button class="btn soft sm" style="margin-top:12px" data-act="start-trip" data-trip="${tr.id}">${esc(t('sDemoStart'))}</button>` : '';
    return `<div class="hero"><div class="small muted">${esc(t('hello', { name: L(st.name).split(' ')[0] }))}${r ? ` · ${esc(t('yourStop'))}: ${esc(L(r.stops[st.stop]))}` : ''}</div>
      <div class="row" style="margin-top:8px"><span style="font-size:1.8rem">${M[0]}</span><div><div style="font-size:1.25rem;font-weight:800">${esc(M[1])}</div><div class="small muted num">${esc(M[2])}</div></div></div>
      ${tr && tr.status !== 'scheduled' ? `<div class="progress" style="margin-top:14px"><i style="width:${pct}%"></i></div>` : ''}${extra}</div>`;
  };
  LIVE.studentAbsent = () => {
    const st = student(UI.student); if (!st || !st.route) return '';
    const tr = liveTrip(st.route); const started = tr && tr.status !== 'scheduled';
    const v = started ? tr.pax[st.id] : null;
    const checked = started ? v === 'absent' : !!S.absent[st.id];
    const disabled = !isRider(st) || (started && (tr.status === 'completed' || !['waiting', 'absent'].includes(v) || tr.next > st.stop));
    return `<div class="card"><div class="row between"><div class="grow"><b>${esc(t('absentToday'))}</b><p class="small muted">${esc(t('absentHint'))}</p></div>
      <label class="switch"><input type="checkbox" data-input="absent" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''} aria-label="${esc(t('absentToday'))}"><span></span></label></div></div>`;
  };
  LIVE.studentDriver = () => {
    const st = student(UI.student); const b = st && st.route && busOfRoute(st.route); const d = b && driverById(b.driver);
    if (!d) return '';
    return `<div class="card"><div class="card-h"><h3>${esc(t('yourDriver'))}</h3></div><div class="row"><div class="avatar">${esc(initials(d.name))}</div>
      <div class="grow"><b>${esc(L(d.name))}</b><div class="small muted">${esc(t('bus'))} ${esc(b.num)} · ${esc(L(b.plate))} · ★ ${d.rating}</div></div>
      <button class="btn soft sm" data-act="call">📞 ${esc(t('call'))}</button></div></div>`;
  };
  LIVE.studentSub = () => {
    const st = student(UI.student); if (!st) return '';
    const sub = subOf(st.id);
    if (!sub) return `<div class="card"><div class="card-h"><h3>${esc(t('mySub'))}</h3>${badge('', t('noSub'))}</div><p class="small muted">${esc(t('payHint'))}</p></div>`;
    const p = paidOf(sub);
    return `<div class="card"><div class="card-h"><h3>${esc(t('mySub'))} · ${esc(fmtMonth(sub.month))}</h3>${payBadge(subStatus(sub))}</div>
      <div class="row" style="align-items:flex-start">
        <div class="grow stack small">
          <div class="row between"><span class="muted">${esc(t('amount'))}</span><b>${money(sub.amount)}</b></div>
          <div class="row between"><span class="muted">${esc(t('paid'))}</span><b class="pos">${money(p)}</b></div>
          <div class="row between"><span class="muted">${esc(t('remaining'))}</span><b class="${sub.amount - p > 0 ? 'neg' : ''}">${money(sub.amount - p)}</b></div>
          <div class="progress"><i style="width:${Math.min(100, Math.round(p / (sub.amount || 1) * 100))}%"></i></div>
          ${sub.payments.map((py) => `<div class="row between muted"><span>${esc(fmtDate(py.at))} · ${esc(t(py.method))}</span><span class="num">${money(py.amount)}</span></div>`).join('')}
          <p class="muted">${esc(t('payHint'))}</p>
        </div>
        <div style="text-align:center">${qrSVG(st.id)}<div class="small muted" style="max-width:132px;margin-top:4px">${esc(t('boardingPass'))}</div></div>
      </div><p class="small muted" style="margin-top:10px">${esc(t('boardingHint'))}</p></div>`;
  };
  function qrSVG(seed) { // decorative pseudo-QR, not scannable
    let h = 2166136261; for (const ch of seed + 'wasel') { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619) >>> 0; }
    const rnd = () => { h ^= h << 13; h >>>= 0; h ^= h >>> 17; h ^= h << 5; h >>>= 0; return h / 4294967296; };
    const N = 21; let s = `<svg class="qr" viewBox="0 0 ${N} ${N}" shape-rendering="crispEdges"><rect width="${N}" height="${N}" fill="#fff"/>`;
    const finder = (x, y) => `<rect x="${x}" y="${y}" width="7" height="7" fill="#1c2733"/><rect x="${x + 1}" y="${y + 1}" width="5" height="5" fill="#fff"/><rect x="${x + 2}" y="${y + 2}" width="3" height="3" fill="#1c2733"/>`;
    const inF = (x, y) => (x < 8 && y < 8) || (x > N - 9 && y < 8) || (x < 8 && y > N - 9);
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (!inF(x, y) && rnd() > 0.52) s += `<rect x="${x}" y="${y}" width="1" height="1" fill="#1c2733"/>`;
    return s + finder(0, 0) + finder(N - 7, 0) + finder(0, N - 7) + `</svg>`;
  }
  LIVE.studentNotifs = () => {
    const list = S.notifs[UI.student] || []; const unread = list.filter((n) => !n.read).length;
    const icon = { nStarted: '🚌', nNear: '⏱️', nAtStop: '📍', nBoarded: '✅', nArrived: '🎓', nAbsent: '🙅‍♀️', nSkipped: '⚠️', nPaid: '💵' };
    return `<div class="card"><div class="card-h"><h3>${esc(t('notifs'))} ${unread ? `<span class="dotbadge">${unread}</span>` : ''}</h3>${unread ? `<button class="btn ghost sm" data-act="read-all">${esc(t('markRead'))}</button>` : ''}</div>
      ${list.length ? `<ul class="list">${list.slice(0, 8).map((n) => `<li class="notif ${n.read ? '' : 'unread'}"><span class="ic">${icon[n.key] || '🔔'}</span><div class="grow"><b class="small">${esc(t(n.key, n.params))}</b><div class="small muted num">${new Date(n.at).toLocaleTimeString(locale(), { hour: '2-digit', minute: '2-digit' })}</div></div></li>`).join('')}</ul>` : `<div class="empty small">${esc(t('noNotifs'))}</div>`}</div>`;
  };
  function studentHistory(st) {
    const rows = []; let d = today0(); let n = 0; let seed = Number(st.id.replace(/\D/g, '')) || 7;
    while (rows.length < 5 && n < 14) {
      d -= DAY; n++;
      const wd = new Date(d).getDay(); if (wd === 5 || wd === 6) continue; // Fri/Sat weekend
      seed = (seed * 9301 + 49297) % 233280;
      const label = n === 1 ? t('yesterday') : new Date(d).toLocaleDateString(locale(), { weekday: 'long', day: 'numeric', month: 'short' });
      rows.push(`<li class="row between small"><span>${esc(label)}</span>${seed % 7 === 0 ? badge('', t('wasAbsent')) : badge('ok', t('arrivedAt', { t: clockStr(430 + (seed % 9)) }))}</li>`);
    }
    return `<ul class="list">${rows.join('')}</ul>`;
  }

  // ================= render / chrome =================
  function applyChrome() {
    document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $('#langBtn').textContent = lang === 'ar' ? 'English' : 'العربية';
    for (const el of $$('[data-t]')) el.textContent = t(el.dataset.t);
    for (const b of $$('.roles button')) b.setAttribute('aria-selected', String(b.dataset.role === UI.role));
    document.title = lang === 'ar' ? 'واصل | Wasel — نقل جامعي للطالبات' : 'Wasel | واصل — University transport';
  }
  function render() {
    applyChrome();
    $('#view').innerHTML = UI.role === 'admin' ? renderAdmin() : UI.role === 'driver' ? renderDriver() : renderStudent();
    updateLive();
  }
  function openModal(html) { const m = $('#modal'); m.innerHTML = `<div class="sheet" role="dialog" aria-modal="true">${html}</div>`; m.hidden = false; const f = $('input:not([type=hidden]), select', m); if (f) f.focus(); }
  function closeModal() { const m = $('#modal'); m.hidden = true; m.innerHTML = ''; }
  let toastTimer;
  function toast(msg) { const el = $('#toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2600); }
  const confirmDel = () => window.confirm(t('confirmDel'));

  // ================= actions =================
  function setAbsent(sid, on) {
    const st = student(sid); const tr = liveTrip(st.route);
    if (on) S.absent[sid] = true; else delete S.absent[sid];
    if (tr && tr.status === 'active' && tr.next <= st.stop) {
      if (on && tr.pax[sid] === 'waiting') tr.pax[sid] = 'absent';
      if (!on && tr.pax[sid] === 'absent') tr.pax[sid] = 'waiting';
    }
    if (on) notify(sid, 'nAbsent');
    persist(); updateLive();
  }
  const findTrip = (id) => S.trips.find((x) => x.id === id);
  const done = (msg) => { persist(); if (msg) toast(msg); render(); };
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-act]'); if (!el || el.disabled) return;
    const id = el.dataset.id;
    switch (el.dataset.act) {
      case 'role': UI.role = el.dataset.role; store.set('wasel-role', UI.role); render(); window.scrollTo({ top: 0 }); break;
      case 'lang': lang = lang === 'ar' ? 'en' : 'ar'; store.set('wasel-lang', lang); render(); break;
      case 'atab': UI.adminTab = el.dataset.tab; render(); window.scrollTo({ top: 0 }); break;
      case 'start-all': Object.keys(ROUTES).forEach((rid) => { const tr = liveTrip(rid); if (tr && tr.status === 'scheduled' && busOfRoute(rid)) startTrip(tr); }); render(); break;
      case 'start-trip': startTrip(findTrip(el.dataset.trip)); render(); break;
      case 'reset-trip': resetTrip(findTrip(el.dataset.trip)); render(); break;
      case 'reset': if (window.confirm(t('resetConfirm'))) { S = initialState(); store.set(STATE_KEY, JSON.stringify(S)); toast(t('resetDone')); render(); } break;
      case 'board': { const st = student(el.dataset.sid); board(liveTrip(st.route), st.id); persist(); updateLive(); break; }
      case 'mark-absent': { const st = student(el.dataset.sid); const tr = liveTrip(st.route); if (tr && tr.pax[st.id] === 'waiting') { tr.pax[st.id] = 'absent'; notify(st.id, 'nAbsent'); } persist(); updateLive(); break; }
      case 'trip-filter': UI.tripFilter = el.dataset.f; updateLive(); break;
      case 'add-trip': tripModal(); break;
      case 'edit-trip': tripModal(id); break;
      case 'del-trip': { const tr = findTrip(id); if (tr.status === 'active') { toast(t('cantDelActive')); break; } if (confirmDel()) { S.trips = S.trips.filter((x) => x.id !== id); done(t('deleted')); } break; }
      case 'add-student': studentModal(); break;
      case 'edit-student': studentModal(id); break;
      case 'del-student': if (confirmDel()) { S.students = S.students.filter((x) => x.id !== id); S.subs = S.subs.filter((x) => x.sid !== id); S.trips.forEach((tr) => { delete tr.pax[id]; }); done(t('deleted')); } break;
      case 'add-bus': busModal(); break;
      case 'del-bus': { const b = bus(id); if (busBusy(b)) { toast(t('busBusy')); break; } if (confirmDel()) { S.buses = S.buses.filter((x) => x.id !== id); done(t('deleted')); } break; }
      case 'bus-toggle': {
        const b = bus(el.dataset.bus); if (busBusy(b)) { toast(t('busBusy')); break; }
        if (b.status === 'maintenance') b.status = 'standby'; else { b.status = 'maintenance'; b.route = null; }
        syncBus(b); render(); break;
      }
      case 'bus-log': busLogModal(el.dataset.bus); break;
      case 'add-driver': driverModal(); break;
      case 'edit-driver': driverModal(id); break;
      case 'del-driver': {
        const b = S.buses.find((x) => x.driver === id); if (b && busBusy(b)) { toast(t('driverBusy')); break; }
        if (confirmDel()) { S.drivers = S.drivers.filter((x) => x.id !== id); if (b) { b.driver = null; syncBus(b); } done(t('deleted')); }
        break;
      }
      case 'sub-month': UI.subMonth = el.dataset.m; render(); break;
      case 'add-sub': subModal(); break;
      case 'pay': payModal(id); break;
      case 'del-sub': if (confirmDel()) { S.subs = S.subs.filter((x) => x.id !== id); done(t('deleted')); } break;
      case 'del-pay': { const sub = S.subs.find((x) => x.id === id); if (sub && confirmDel()) { sub.payments = sub.payments.filter((p) => p.id !== el.dataset.pay); done(t('deleted')); } break; }
      case 'close': closeModal(); break;
      case 'read-all': (S.notifs[UI.student] || []).forEach((n) => { n.read = true; }); persist(); updateLive(); break;
      case 'call': toast(t('callDemo')); break;
      case 'install': if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt.userChoice.finally(() => { deferredPrompt = null; $('#installBtn').hidden = true; }); } break;
      default: break;
    }
  });
  document.addEventListener('input', (e) => { if (e.target.dataset.input === 'query') { UI.query = e.target.value; updateLive(); } });
  document.addEventListener('change', (e) => {
    const tg = e.target; const k = tg.dataset.input;
    if (k === 'driver') { UI.driver = tg.value; render(); }
    if (k === 'student') { UI.student = tg.value; render(); }
    if (k === 'auto') { S.auto = tg.checked; persist(); }
    if (k === 'absent') setAbsent(UI.student, tg.checked);
    if (k === 'route-pick') { const sp = $('#stopPick'); if (sp) sp.innerHTML = stopOpts(tg.value, 0); }
    if (k === 'bus-route' || k === 'bus-driver') {
      const b = bus(tg.dataset.bus); if (busBusy(b)) { toast(t('busBusy')); render(); return; }
      if (k === 'bus-route') b.route = tg.value || null; else b.driver = tg.value || null;
      syncBus(b); toast(t('saved')); render();
    }
    if (tg.name === 'sid' && tg.form && tg.form.dataset.form === 'sub') { const fee = tg.selectedOptions[0] && tg.selectedOptions[0].dataset.fee; if (fee) tg.form.amount.value = fee; }
  });
  // each handler returns false (keep modal open), true (close), or 'keep' (re-opened its own modal)
  const FORMS = {
    trip(fd) {
      const id = fd.get('id'); const route = String(fd.get('route')); const dir = String(fd.get('dir')); const start = parseClock(fd.get('time'));
      if (id) { const tr = findTrip(id); if (tr.status === 'active') { toast(t('busBusy')); return false; } Object.assign(tr, newTrip(route, dir, start, tr.id)); }
      else S.trips.push(newTrip(route, dir, start));
      toast(t('saved')); return true;
    },
    student(fd) {
      const ar = String(fd.get('ar') || '').trim(); if (!ar) { toast(t('required')); return false; }
      const c = COLLEGES[fd.get('college')] || COLLEGES.is;
      const data = { name: { ar, en: String(fd.get('en') || '').trim() || ar }, route: fd.get('route') || null, stop: Number(fd.get('stop') || 0), college: { ar: c[0], en: c[1] }, fee: Math.max(0, Number(fd.get('fee')) || 0) };
      const id = fd.get('id');
      if (id) {
        const st = student(id);
        if (st.route !== data.route || st.stop !== data.stop) S.trips.forEach((tr) => { if (tr.status !== 'completed') delete tr.pax[id]; });
        Object.assign(st, data);
      } else {
        const nid = uid('st'); S.students.push({ id: nid, ...data });
        S.subs.push({ id: uid('sub'), sid: nid, month: monthKey(0), amount: data.fee, payments: [] });
        const tr = data.route && liveTrip(data.route);
        if (tr && tr.status === 'active' && tr.next <= data.stop) tr.pax[nid] = 'waiting';
      }
      toast(t('saved')); return true;
    },
    bus(fd) {
      const num = String(fd.get('num') || '').trim(); const plate = String(fd.get('plate') || '').trim();
      if (!num || !plate) { toast(t('numRequired')); return false; }
      if (S.buses.some((b) => b.num === num)) { toast(t('numTaken')); return false; }
      const model = String(fd.get('model') || '').trim() || '—'; const now = today0();
      S.buses.push({ id: uid('b'), num, plate: { ar: plate, en: plate }, cap: Number(fd.get('cap')) || 30, model: { ar: model, en: model }, route: null, driver: null, status: 'standby',
        km: Number(fd.get('km')) || 0, service: now + 90 * DAY, insurance: now + 365 * DAY, inspection: now + 365 * DAY, log: [] });
      toast(t('busAdded', { num })); return true;
    },
    log(fd) {
      const b = bus(String(fd.get('bus'))); if (!b) return false;
      const type = String(fd.get('type')); const note = String(fd.get('note') || '').trim(); const now = today0();
      b.log.push({ at: now, type, cost: Math.max(0, Number(fd.get('cost')) || 0), note: note ? { ar: note, en: note } : null });
      b.km = Math.max(b.km, Number(fd.get('km')) || 0);
      if (type === 'mService') b.service = now + 90 * DAY;
      if (type === 'mInspect') b.inspection = now + 365 * DAY;
      toast(t('entryAdded')); return 'keep';
    },
    driver(fd) {
      const ar = String(fd.get('ar') || '').trim(); if (!ar) { toast(t('required')); return false; }
      const exp = String(fd.get('exp') || '');
      const data = { name: { ar, en: String(fd.get('en') || '').trim() || ar }, phone: String(fd.get('phone') || ''), license: String(fd.get('license') || ''),
        licenseExp: exp ? new Date(exp + 'T00:00').getTime() : today0() + 365 * DAY, off: fd.get('off') === 'on' };
      const id = fd.get('id');
      if (id) {
        const d = driverById(id); Object.assign(d, data);
        if (d.off) { const b = S.buses.find((x) => x.driver === d.id); if (b && !busBusy(b)) { b.driver = null; syncBus(b); } }
      } else S.drivers.push({ id: uid('d'), rating: 5, trips: 0, ...data });
      toast(t('saved')); return true;
    },
    pay(fd) {
      const sub = S.subs.find((x) => x.id === fd.get('id')); const rem = sub.amount - paidOf(sub);
      const amount = Math.round(Number(fd.get('amount')) || 0);
      if (amount <= 0) return false;
      if (amount > rem) { toast(t('overpay')); return false; }
      const note = String(fd.get('note') || '').trim();
      sub.payments.push({ id: uid('p'), at: Date.now(), amount, method: String(fd.get('method')), note: note || null });
      notify(sub.sid, 'nPaid', { v: money(amount) });
      toast(t('payRecorded', { v: money(amount) })); return true;
    },
    sub(fd) {
      const sid = String(fd.get('sid')); const month = String(fd.get('month'));
      if (subOf(sid, month)) { toast(t('subExists')); return false; }
      S.subs.push({ id: uid('sub'), sid, month, amount: Math.max(0, Number(fd.get('amount')) || 0), payments: [] });
      UI.subMonth = month; toast(t('saved')); return true;
    },
  };
  document.addEventListener('submit', (e) => {
    const f = e.target; const name = f.dataset.form; const fn = FORMS[name]; if (!fn) return;
    e.preventDefault();
    const fd = new FormData(f);
    const res = fn(fd);
    if (!res) return;
    persist(); render();
    if (res === 'keep') busLogModal(String(fd.get('bus'))); else closeModal();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('#modal').hidden) closeModal(); });
  $('#modal').addEventListener('click', (e) => { if (e.target.id === 'modal') closeModal(); });

  // ================= PWA =================
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredPrompt = e; $('#installBtn').hidden = false; });
  window.addEventListener('appinstalled', () => { $('#installBtn').hidden = true; toast(t('installDone')); });
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => { /* not available here */ }); });
  }
  window.addEventListener('storage', (e) => { if (e.key === STATE_KEY && e.newValue) { try { S = JSON.parse(e.newValue); render(); } catch (err) { /* ignore */ } } });
  setInterval(() => { if (S.day !== today0()) { S = initialState(); render(); } }, 60000);

  render();
  setInterval(tick, TICK);
  window.Wasel = { get state() { return S; }, ui: UI };
})();
