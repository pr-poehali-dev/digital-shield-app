import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/0f0e92f1-8c32-44b1-a5a4-d99f9d8f7d20/files/8094a8f4-8479-4f80-93e4-f89cd49525be.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "education", label: "Обучение" },
  { id: "stats", label: "Статистика" },
  { id: "support", label: "Поддержка" },
  { id: "pricing", label: "Подписка" },
];

const STATS = [
  { value: "74%", label: "молодёжи сталкивались с цифровым мошенничеством", color: "#EF4444", icon: "AlertTriangle" },
  { value: "₽2.1 млрд", label: "потери молодёжи 18–25 лет в 2024 году", color: "#F59E0B", icon: "TrendingDown" },
  { value: "3.8 млн", label: "инцидентов зафиксировано за 12 месяцев", color: "#2282F0", icon: "Activity" },
  { value: "12 лет", label: "средний возраст первой цифровой угрозы", color: "#22D3EE", icon: "Users" },
];

const RISK_REPORTS = [
  { category: "Фишинг и поддельные сайты", percent: 87, level: "danger" },
  { category: "Мошенничество в соцсетях", percent: 72, level: "danger" },
  { category: "Кража личных данных", percent: 61, level: "warning" },
  { category: "Онлайн-вымогательство", percent: 48, level: "warning" },
  { category: "Взлом аккаунтов", percent: 83, level: "danger" },
  { category: "Финансовые схемы обмана", percent: 55, level: "warning" },
];

const VIDEOS = [
  {
    title: "Как распознать фишинговый сайт",
    duration: "12:40",
    level: "Базовый",
    views: "48 320",
    tag: "Фишинг",
    icon: "Globe",
  },
  {
    title: "Защита личных данных в соцсетях",
    duration: "18:05",
    level: "Средний",
    views: "31 780",
    tag: "Данные",
    icon: "Lock",
  },
  {
    title: "Двухфакторная аутентификация",
    duration: "9:15",
    level: "Базовый",
    views: "62 410",
    tag: "Аккаунты",
    icon: "Shield",
  },
  {
    title: "Безопасность банковских приложений",
    duration: "22:30",
    level: "Продвинутый",
    views: "19 650",
    tag: "Финансы",
    icon: "CreditCard",
  },
  {
    title: "Мошенничество в онлайн-играх",
    duration: "15:55",
    level: "Базовый",
    views: "55 900",
    tag: "Игры",
    icon: "Gamepad2",
  },
  {
    title: "Цифровая гигиена: полный курс",
    duration: "45:00",
    level: "Продвинутый",
    views: "27 300",
    tag: "Курс",
    icon: "BookOpen",
  },
];

const PLANS = [
  {
    name: "Базовый",
    price: "0 ₽",
    period: "навсегда",
    desc: "Для начинающих",
    features: [
      "Доступ к 10 базовым урокам",
      "Еженедельный риск-дайджест",
      "База знаний по угрозам",
      "Горячая линия (рабочие часы)",
    ],
    cta: "Начать бесплатно",
    featured: false,
  },
  {
    name: "Стандарт",
    price: "490 ₽",
    period: "в месяц",
    desc: "Наиболее популярный",
    features: [
      "Все материалы без ограничений",
      "Персональный риск-отчёт",
      "Уведомления об угрозах 24/7",
      "Приоритетная поддержка",
      "Сертификат по итогам обучения",
    ],
    cta: "Оформить подписку",
    featured: true,
  },
  {
    name: "Семейный",
    price: "890 ₽",
    period: "в месяц",
    desc: "До 5 пользователей",
    features: [
      "Все функции Стандарта",
      "До 5 аккаунтов в семье",
      "Родительский контроль",
      "Экстренная линия 24/7",
      "Ежемесячный аудит безопасности",
    ],
    cta: "Выбрать Семейный",
    featured: false,
  },
];

const CONTACTS = [
  { icon: "Phone", label: "Горячая линия", value: "8-800-000-00-00", sub: "Бесплатно, круглосуточно" },
  { icon: "Mail", label: "Электронная почта", value: "help@kibershield.ru", sub: "Ответим в течение 2 часов" },
  { icon: "MessageSquare", label: "Онлайн-чат", value: "Написать сейчас", sub: "Среднее время ответа — 5 минут" },
  { icon: "MapPin", label: "Офис", value: "Москва, ул. Большая Академическая, 12", sub: "Пн–Пт 9:00–18:00" },
];

const FAQ = [
  { q: "Сколько времени занимает обучение?", a: "Базовый курс — около 3 часов. Полная программа рассчитана на 2–3 недели при ежедневных занятиях по 30 минут." },
  { q: "Как работают риск-отчёты?", a: "Система анализирует актуальные угрозы, региональную статистику и поведенческие паттерны, формируя персональный отчёт с рекомендациями." },
  { q: "Могу я отменить подписку?", a: "Да, в любой момент без штрафов. Доступ сохраняется до конца оплаченного периода." },
  { q: "Есть ли сертификат об обучении?", a: "Да, по завершении курса вы получаете цифровой сертификат, который можно добавить в резюме." },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function AnimatedBar({ percent, level, delay = 0 }: { percent: number; level: string; delay?: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div ref={ref} className="w-full bg-white/5 rounded-full overflow-hidden" style={{ height: 8 }}>
      <div
        className={`risk-bar ${level}`}
        style={{ width: inView ? `${percent}%` : "0%", transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handler = () => {
      const sections = NAV_ITEMS.map(n => n.id);
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(s); break; }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#060D1F", fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* NAV */}
      <nav className="nav-blur fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: "rgba(34,130,240,0.15)", border: "1px solid rgba(34,130,240,0.4)" }}>
              <Icon name="Shield" size={16} style={{ color: "#2282F0" }} />
            </div>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 20, fontWeight: 600, letterSpacing: "0.04em", color: "#EEF2F8" }}>
              КИБЕР<span style={{ color: "#2282F0" }}>ЩИТ</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(n => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="px-4 py-2 rounded text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  color: activeSection === n.id ? "#2282F0" : "#8BA3C0",
                  background: activeSection === n.id ? "rgba(34,130,240,0.1)" : "transparent",
                  border: activeSection === n.id ? "1px solid rgba(34,130,240,0.25)" : "1px solid transparent",
                }}
              >
                {n.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("pricing")}
            className="hidden md:block px-5 py-2 rounded text-sm font-semibold transition-all duration-200 hover:brightness-110"
            style={{ background: "#1A6ECC", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif" }}
          >
            Подключить
          </button>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(v => !v)} style={{ color: "#8BA3C0" }}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-2" style={{ borderTop: "1px solid rgba(34,130,240,0.1)" }}>
            {NAV_ITEMS.map(n => (
              <button key={n.id} onClick={() => scrollTo(n.id)}
                className="text-left px-4 py-3 rounded text-sm"
                style={{ color: activeSection === n.id ? "#2282F0" : "#8BA3C0", background: activeSection === n.id ? "rgba(34,130,240,0.08)" : "transparent" }}
              >
                {n.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center grid-overlay pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,130,240,0.12) 0%, transparent 70%)"
          }} />
          <img src={HERO_IMAGE} alt="" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 mix-blend-luminosity" style={{ maskImage: "linear-gradient(to left, rgba(0,0,0,0.6), transparent)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl animate-slide-up">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-6" style={{ background: "#2282F0" }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#2282F0", fontFamily: "'IBM Plex Mono', monospace" }}>
                Платформа кибербезопасности
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "0.02em",
              color: "#EEF2F8",
              marginBottom: 24,
            }}>
              ЗАЩИТА МОЛОДЁЖИ<br />
              <span style={{ color: "#2282F0" }}>В ЦИФРОВОЙ</span><br />
              СРЕДЕ
            </h1>

            <p style={{ color: "#8BA3C0", fontSize: 18, lineHeight: 1.7, marginBottom: 40, fontWeight: 400 }}>
              Комплексное обучение, риск-отчёты и оперативная поддержка для защиты от цифрового мошенничества. Более 150 000 защищённых пользователей по всей России.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("education")}
                className="flex items-center gap-2 px-8 py-4 rounded font-semibold text-base transition-all duration-200 hover:brightness-110 hover:translate-y-[-1px]"
                style={{ background: "#1A6ECC", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                <Icon name="Play" size={18} />
                Начать обучение
              </button>
              <button
                onClick={() => scrollTo("stats")}
                className="flex items-center gap-2 px-8 py-4 rounded font-semibold text-base transition-all duration-200"
                style={{ border: "1px solid rgba(34,130,240,0.4)", color: "#8BA3C0", background: "transparent", fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                <Icon name="BarChart2" size={18} />
                Смотреть статистику
              </button>
            </div>

            <div className="flex items-center gap-6 mt-12 pt-8" style={{ borderTop: "1px solid rgba(34,130,240,0.1)" }}>
              {[["150 000+", "защищённых"], ["98%", "удовлетворённость"], ["24/7", "поддержка"]].map(([val, lbl]) => (
                <div key={val}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 600, color: "#EEF2F8" }}>{val}</div>
                  <div style={{ fontSize: 12, color: "#5A7A9A", marginTop: 2 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "#3A5A7A" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.15em", fontFamily: "'IBM Plex Mono', monospace" }}>SCROLL</span>
          <Icon name="ChevronDown" size={16} className="animate-bounce" />
        </div>
      </section>

      <div className="section-divider" />

      {/* STATS */}
      <section id="stats" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-5" style={{ background: "#EF4444" }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#EF4444", fontFamily: "'IBM Plex Mono', monospace" }}>
                Актуальные данные 2024–2025
              </span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#EEF2F8" }}>
              СТАТИСТИКА УГРОЗ
            </h2>
            <p style={{ color: "#8BA3C0", marginTop: 12, fontSize: 16, maxWidth: 560 }}>
              Цифровое мошенничество среди молодёжи растёт на 34% ежегодно. Знание угроз — первый шаг к защите.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {STATS.map((s, i) => (
              <div key={i} className="stat-card rounded-lg p-6 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-10 h-10 rounded flex items-center justify-center mb-4" style={{ background: `${s.color}18`, border: `1px solid ${s.color}40` }}>
                  <Icon name={s.icon} fallback="Shield" size={18} style={{ color: s.color }} />
                </div>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 32, fontWeight: 700, color: s.color, letterSpacing: "0.02em" }}>
                  {s.value}
                </div>
                <div style={{ color: "#8BA3C0", fontSize: 13, lineHeight: 1.5, marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Risk report */}
          <div className="rounded-lg p-8" style={{ background: "rgba(11,22,41,0.8)", border: "1px solid rgba(34,130,240,0.15)" }}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 600, color: "#EEF2F8" }}>
                  РИС-ОТЧЁТ: ТОП УГРОЗ
                </h3>
                <p style={{ color: "#5A7A9A", fontSize: 13, marginTop: 4 }}>Индекс риска по категориям цифрового мошенничества среди 14–25 лет</p>
              </div>
              <div className="flex items-center gap-4 text-xs" style={{ color: "#5A7A9A", fontFamily: "'IBM Plex Mono', monospace" }}>
                <span className="flex items-center gap-1.5"><span className="w-3 h-1.5 rounded-full inline-block" style={{ background: "rgba(239,68,68,0.7)" }} />Высокий</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-1.5 rounded-full inline-block" style={{ background: "rgba(245,158,11,0.7)" }} />Средний</span>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {RISK_REPORTS.map((r, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ color: "#B0C8E0", fontSize: 14 }}>{r.category}</span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: r.level === "danger" ? "#EF4444" : "#F59E0B", fontWeight: 500 }}>
                      {r.percent}%
                    </span>
                  </div>
                  <AnimatedBar percent={r.percent} level={r.level} delay={i * 80} />
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 flex items-center justify-between" style={{ borderTop: "1px solid rgba(34,130,240,0.1)" }}>
              <span style={{ color: "#5A7A9A", fontSize: 12, fontFamily: "'IBM Plex Mono', monospace" }}>
                Источник: МВД РФ, Банк России, ЦБ РФ · Обновлено: апрель 2025
              </span>
              <button
                onClick={() => scrollTo("pricing")}
                className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: "#2282F0" }}
              >
                Персональный отчёт
                <Icon name="ArrowRight" size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* EDUCATION */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-5" style={{ background: "#2282F0" }} />
                <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#2282F0", fontFamily: "'IBM Plex Mono', monospace" }}>
                  Видеокурсы
                </span>
              </div>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#EEF2F8" }}>
                ОБУЧЕНИЕ
              </h2>
              <p style={{ color: "#8BA3C0", marginTop: 12, fontSize: 16 }}>Практические курсы от ведущих экспертов по кибербезопасности</p>
            </div>
            <div className="flex gap-2">
              {["Все", "Базовый", "Средний", "Продвинутый"].map(f => (
                <button key={f}
                  className="px-4 py-1.5 rounded text-xs font-medium transition-all"
                  style={{
                    background: f === "Все" ? "rgba(34,130,240,0.15)" : "transparent",
                    border: f === "Все" ? "1px solid rgba(34,130,240,0.4)" : "1px solid rgba(34,130,240,0.1)",
                    color: f === "Все" ? "#2282F0" : "#5A7A9A",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VIDEOS.map((v, i) => (
              <div key={i} className="video-card rounded-lg overflow-hidden animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="relative flex items-center justify-center" style={{ height: 160, background: "linear-gradient(135deg, rgba(15,30,56,0.9), rgba(6,13,31,0.95))", borderBottom: "1px solid rgba(34,130,240,0.1)" }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(34,130,240,0.1)", border: "1px solid rgba(34,130,240,0.3)" }}>
                    <Icon name={v.icon} fallback="Play" size={28} style={{ color: "#2282F0" }} />
                  </div>
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-medium" style={{ background: "rgba(34,130,240,0.2)", color: "#2282F0", border: "1px solid rgba(34,130,240,0.3)" }}>
                    {v.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded" style={{ background: "rgba(0,0,0,0.6)", color: "#B0C8E0", fontSize: 12, fontFamily: "'IBM Plex Mono', monospace" }}>
                    <Icon name="Clock" size={11} />
                    {v.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity" style={{ background: "rgba(34,130,240,0.08)" }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#1A6ECC" }}>
                      <Icon name="Play" size={20} style={{ color: "#fff" }} />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-0.5 rounded" style={{
                      background: v.level === "Базовый" ? "rgba(34,197,94,0.1)" : v.level === "Средний" ? "rgba(245,158,11,0.1)" : "rgba(239,68,68,0.1)",
                      color: v.level === "Базовый" ? "#22C55E" : v.level === "Средний" ? "#F59E0B" : "#EF4444",
                    }}>
                      {v.level}
                    </span>
                    <span className="text-xs flex items-center gap-1" style={{ color: "#5A7A9A" }}>
                      <Icon name="Eye" size={11} />
                      {v.views}
                    </span>
                  </div>
                  <h4 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 16, fontWeight: 500, color: "#EEF2F8", lineHeight: 1.4 }}>
                    {v.title}
                  </h4>
                  <button className="mt-4 w-full py-2 rounded text-sm font-medium transition-all hover:brightness-110"
                    style={{ background: "rgba(34,130,240,0.12)", color: "#2282F0", border: "1px solid rgba(34,130,240,0.2)" }}>
                    Смотреть урок
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded font-semibold text-sm transition-all hover:brightness-110"
              style={{ border: "1px solid rgba(34,130,240,0.3)", color: "#8BA3C0", background: "transparent" }}>
              Показать все уроки (48)
              <Icon name="ChevronDown" size={16} />
            </button>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* SUPPORT */}
      <section id="support" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-5" style={{ background: "#22D3EE" }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#22D3EE", fontFamily: "'IBM Plex Mono', monospace" }}>
                Помощь и контакты
              </span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#EEF2F8" }}>
              ПОДДЕРЖКА
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {CONTACTS.map((c, i) => (
                  <div key={i} className="stat-card rounded-lg p-5">
                    <div className="w-9 h-9 rounded flex items-center justify-center mb-3" style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.25)" }}>
                      <Icon name={c.icon} fallback="HelpCircle" size={17} style={{ color: "#22D3EE" }} />
                    </div>
                    <div style={{ color: "#5A7A9A", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'IBM Plex Mono', monospace" }}>{c.label}</div>
                    <div style={{ color: "#EEF2F8", fontSize: 14, fontWeight: 500, marginTop: 4 }}>{c.value}</div>
                    <div style={{ color: "#5A7A9A", fontSize: 12, marginTop: 2 }}>{c.sub}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg p-6" style={{ background: "linear-gradient(135deg, rgba(26,110,204,0.2), rgba(11,22,41,0.9))", border: "1px solid rgba(34,130,240,0.3)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Phone" size={20} style={{ color: "#2282F0" }} />
                  <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 20, fontWeight: 600, color: "#EEF2F8" }}>
                    ГОРЯЧАЯ ЛИНИЯ
                  </span>
                </div>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 36, fontWeight: 700, color: "#2282F0", letterSpacing: "0.04em" }}>
                  8-800-000-00-00
                </div>
                <p style={{ color: "#8BA3C0", fontSize: 14, marginTop: 8 }}>
                  Бесплатно по всей России · Работает 24 часа, 7 дней в неделю · Квалифицированные специалисты
                </p>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 600, color: "#EEF2F8", marginBottom: 20 }}>
                ЧАСТЫЕ ВОПРОСЫ
              </h3>
              <div className="flex flex-col gap-3">
                {FAQ.map((f, i) => (
                  <div key={i} className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(34,130,240,0.12)", background: "rgba(11,22,41,0.6)" }}>
                    <button
                      className="w-full flex items-center justify-between p-5 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span style={{ color: "#B0C8E0", fontSize: 14, fontWeight: 500, paddingRight: 16 }}>{f.q}</span>
                      <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={16} style={{ color: "#5A7A9A", flexShrink: 0 }} />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 animate-fade-in" style={{ color: "#5A7A9A", fontSize: 14, lineHeight: 1.7, borderTop: "1px solid rgba(34,130,240,0.08)" }}>
                        <div style={{ paddingTop: 12 }}>{f.a}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg p-5" style={{ background: "rgba(11,22,41,0.6)", border: "1px solid rgba(34,130,240,0.12)" }}>
                <p style={{ color: "#8BA3C0", fontSize: 14, marginBottom: 12 }}>Не нашли ответ? Напишите нам</p>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Ваш вопрос..."
                    className="flex-1 px-4 py-2.5 rounded text-sm outline-none"
                    style={{ background: "rgba(34,130,240,0.05)", border: "1px solid rgba(34,130,240,0.15)", color: "#EEF2F8", fontFamily: "'IBM Plex Sans', sans-serif" }}
                  />
                  <button className="px-5 py-2.5 rounded text-sm font-medium" style={{ background: "#1A6ECC", color: "#fff" }}>
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-1.5 h-5" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "'IBM Plex Mono', monospace" }}>
                Тарифы
              </span>
              <div className="w-1.5 h-5" style={{ background: "#C9A84C" }} />
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#EEF2F8" }}>
              ПОДПИСКА
            </h2>
            <p style={{ color: "#8BA3C0", marginTop: 12, fontSize: 16, maxWidth: 500, margin: "12px auto 0" }}>
              Выберите уровень защиты, подходящий именно вам
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PLANS.map((p, i) => (
              <div key={i} className={`plan-card rounded-lg p-7 flex flex-col ${p.featured ? "featured" : ""}`} style={{ animationDelay: `${i * 100}ms` }}>
                {p.featured && (
                  <div className="text-center mb-5">
                    <span className="px-4 py-1 rounded-full text-xs font-semibold" style={{ background: "#1A6ECC", color: "#fff", fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.08em" }}>
                      РЕКОМЕНДУЕМ
                    </span>
                  </div>
                )}
                <div style={{ color: "#5A7A9A", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "'IBM Plex Mono', monospace" }}>{p.name}</div>
                <div className="mt-2 mb-1" style={{ fontFamily: "'Oswald', sans-serif", fontSize: 40, fontWeight: 700, color: p.featured ? "#2282F0" : "#EEF2F8" }}>
                  {p.price}
                </div>
                <div style={{ color: "#5A7A9A", fontSize: 13, marginBottom: 6 }}>{p.period}</div>
                <div style={{ color: "#8BA3C0", fontSize: 13, marginBottom: 20 }}>{p.desc}</div>

                <div className="flex-1 flex flex-col gap-3 mb-8">
                  {p.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Icon name="Check" size={15} style={{ color: p.featured ? "#2282F0" : "#22C55E", marginTop: 2, flexShrink: 0 }} />
                      <span style={{ color: "#8BA3C0", fontSize: 14 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3.5 rounded font-semibold text-sm transition-all hover:brightness-110"
                  style={{
                    background: p.featured ? "#1A6ECC" : "rgba(34,130,240,0.1)",
                    color: p.featured ? "#fff" : "#2282F0",
                    border: p.featured ? "none" : "1px solid rgba(34,130,240,0.25)",
                    fontFamily: "'IBM Plex Sans', sans-serif",
                  }}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center mt-8" style={{ color: "#3A5A7A", fontSize: 13, fontFamily: "'IBM Plex Mono', monospace" }}>
            Все тарифы включают шифрование данных · Политика конфиденциальности · Отмена в любой момент
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6" style={{ borderTop: "1px solid rgba(34,130,240,0.1)", background: "rgba(6,13,31,0.8)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: "rgba(34,130,240,0.12)", border: "1px solid rgba(34,130,240,0.3)" }}>
                <Icon name="Shield" size={14} style={{ color: "#2282F0" }} />
              </div>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 600, color: "#EEF2F8" }}>
                КИБЕР<span style={{ color: "#2282F0" }}>ЩИТ</span>
              </span>
            </div>
            <div className="flex gap-6">
              {NAV_ITEMS.map(n => (
                <button key={n.id} onClick={() => scrollTo(n.id)} style={{ color: "#5A7A9A", fontSize: 13, background: "none", border: "none", cursor: "pointer" }}
                  className="hover:text-white transition-colors">
                  {n.label}
                </button>
              ))}
            </div>
            <div style={{ color: "#3A5A7A", fontSize: 12, fontFamily: "'IBM Plex Mono', monospace" }}>
              © 2025 КиберЩит · Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}