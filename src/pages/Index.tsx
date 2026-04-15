import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/0f0e92f1-8c32-44b1-a5a4-d99f9d8f7d20/files/8094a8f4-8479-4f80-93e4-f89cd49525be.jpg";

const STATS_DATA = [
  { value: "74%", label: "молодёжи сталкивались с мошенничеством", color: "#EF4444", icon: "AlertTriangle" },
  { value: "₽2.1 млрд", label: "потери в 2024 году", color: "#F59E0B", icon: "TrendingDown" },
  { value: "3.8 млн", label: "инцидентов за год", color: "#2282F0", icon: "Activity" },
  { value: "12 лет", label: "средний возраст первой угрозы", color: "#22D3EE", icon: "Users" },
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
  { title: "Как распознать фишинговый сайт", duration: "12:40", level: "Базовый", views: "48 320", tag: "Фишинг", icon: "Globe" },
  { title: "Защита личных данных в соцсетях", duration: "18:05", level: "Средний", views: "31 780", tag: "Данные", icon: "Lock" },
  { title: "Двухфакторная аутентификация", duration: "9:15", level: "Базовый", views: "62 410", tag: "Аккаунты", icon: "Shield" },
  { title: "Безопасность банковских приложений", duration: "22:30", level: "Продвинутый", views: "19 650", tag: "Финансы", icon: "CreditCard" },
  { title: "Мошенничество в онлайн-играх", duration: "15:55", level: "Базовый", views: "55 900", tag: "Игры", icon: "Gamepad2" },
  { title: "Цифровая гигиена: полный курс", duration: "45:00", level: "Продвинутый", views: "27 300", tag: "Курс", icon: "BookOpen" },
];

const PLANS = [
  {
    name: "Базовый", price: "0 ₽", period: "навсегда", desc: "Для начинающих", featured: false,
    features: ["10 базовых уроков", "Еженедельный дайджест угроз", "База знаний", "Поддержка в рабочие часы"],
    cta: "Начать бесплатно",
  },
  {
    name: "Стандарт", price: "490 ₽", period: "в месяц", desc: "Популярный выбор", featured: true,
    features: ["Все материалы без ограничений", "Персональный риск-отчёт", "Уведомления 24/7", "Приоритетная поддержка", "Сертификат"],
    cta: "Оформить подписку",
  },
  {
    name: "Семейный", price: "890 ₽", period: "в месяц", desc: "До 5 пользователей", featured: false,
    features: ["Всё из Стандарта", "До 5 аккаунтов", "Родительский контроль", "Экстренная линия 24/7", "Ежемесячный аудит"],
    cta: "Выбрать Семейный",
  },
];

const CONTACTS = [
  { icon: "Phone", label: "Горячая линия", value: "8-800-000-00-00", sub: "Бесплатно, 24/7" },
  { icon: "Mail", label: "Почта", value: "help@kibershield.ru", sub: "Ответим за 2 часа" },
  { icon: "MessageSquare", label: "Онлайн-чат", value: "Написать сейчас", sub: "~5 минут ответ" },
  { icon: "MapPin", label: "Офис", value: "Москва, Большая Академическая, 12", sub: "Пн–Пт 9:00–18:00" },
];

const FAQ = [
  { q: "Сколько времени занимает обучение?", a: "Базовый курс — около 3 часов. Полная программа — 2–3 недели по 30 минут в день." },
  { q: "Как работают риск-отчёты?", a: "Система анализирует актуальные угрозы и региональную статистику, формируя персональный отчёт." },
  { q: "Могу я отменить подписку?", a: "Да, в любой момент без штрафов. Доступ сохраняется до конца периода." },
  { q: "Есть ли сертификат об обучении?", a: "Да, цифровой сертификат после завершения курса." },
];

type Tab = "home" | "stats" | "education" | "support" | "pricing";

const NAV = [
  { id: "home" as Tab, icon: "Home", label: "Главная" },
  { id: "stats" as Tab, icon: "BarChart2", label: "Статистика" },
  { id: "education" as Tab, icon: "Play", label: "Обучение" },
  { id: "support" as Tab, icon: "MessageCircle", label: "Поддержка" },
  { id: "pricing" as Tab, icon: "Star", label: "Подписка" },
];

function RiskBar({ percent, level }: { percent: number; level: string }) {
  return (
    <div style={{ width: "100%", height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
      <div style={{
        width: `${percent}%`,
        height: "100%",
        borderRadius: 3,
        background: level === "danger"
          ? "linear-gradient(90deg, #EF4444, #F97316)"
          : "linear-gradient(90deg, #F59E0B, #EAB308)",
        transition: "width 1s ease-out",
      }} />
    </div>
  );
}

function HomeTab({ onNavigate }: { onNavigate: (t: Tab) => void }) {
  return (
    <div style={{ paddingBottom: 90 }}>
      {/* Hero card */}
      <div style={{ margin: "0 16px 20px", borderRadius: 20, overflow: "hidden", position: "relative", height: 220 }}>
        <img src={HERO_IMAGE} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,13,31,0.3), rgba(6,13,31,0.85))" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 20px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <div style={{ width: 3, height: 14, background: "#2282F0", borderRadius: 2 }} />
            <span style={{ color: "#2282F0", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.12em", textTransform: "uppercase" }}>Платформа безопасности</span>
          </div>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 26, fontWeight: 700, color: "#fff", lineHeight: 1.15, margin: 0 }}>
            ЗАЩИТА МОЛОДЁЖИ<br />В ЦИФРОВОЙ СРЕДЕ
          </h1>
        </div>
      </div>

      {/* Quick stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "0 16px 20px" }}>
        {STATS_DATA.map((s, i) => (
          <div key={i} style={{ background: "rgba(11,22,41,0.9)", border: "1px solid rgba(34,130,240,0.15)", borderRadius: 14, padding: "14px 14px 12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${s.color}18`, border: `1px solid ${s.color}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={s.icon} fallback="Shield" size={13} style={{ color: s.color }} />
              </div>
            </div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ color: "#5A7A9A", fontSize: 11, lineHeight: 1.4, marginTop: 3 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div style={{ margin: "0 16px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
        <button
          onClick={() => onNavigate("education")}
          style={{ width: "100%", padding: "15px", borderRadius: 14, background: "#1A6ECC", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 15, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
        >
          <Icon name="Play" size={18} />
          Начать обучение
        </button>
        <button
          onClick={() => onNavigate("stats")}
          style={{ width: "100%", padding: "15px", borderRadius: 14, background: "transparent", color: "#8BA3C0", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 500, fontSize: 15, border: "1px solid rgba(34,130,240,0.25)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
        >
          <Icon name="BarChart2" size={18} />
          Смотреть статистику
        </button>
      </div>

      {/* Trust row */}
      <div style={{ margin: "0 16px", display: "flex", gap: 0, background: "rgba(11,22,41,0.8)", border: "1px solid rgba(34,130,240,0.12)", borderRadius: 14, overflow: "hidden" }}>
        {[["150 000+", "защищённых"], ["98%", "довольны"], ["24/7", "поддержка"]].map(([val, lbl], i) => (
          <div key={i} style={{ flex: 1, padding: "14px 8px", textAlign: "center", borderRight: i < 2 ? "1px solid rgba(34,130,240,0.1)" : "none" }}>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 600, color: "#EEF2F8" }}>{val}</div>
            <div style={{ color: "#5A7A9A", fontSize: 11, marginTop: 2 }}>{lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatsTab() {
  return (
    <div style={{ paddingBottom: 90 }}>
      <div style={{ padding: "4px 16px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
          <div style={{ width: 3, height: 14, background: "#EF4444", borderRadius: 2 }} />
          <span style={{ color: "#EF4444", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.12em", textTransform: "uppercase" }}>Данные 2024–2025</span>
        </div>
        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 26, fontWeight: 700, color: "#EEF2F8", margin: 0 }}>СТАТИСТИКА УГРОЗ</h2>
        <p style={{ color: "#5A7A9A", fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>Цифровое мошенничество среди молодёжи растёт на 34% ежегодно</p>
      </div>

      {/* Stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "0 16px 20px" }}>
        {STATS_DATA.map((s, i) => (
          <div key={i} style={{ background: "rgba(11,22,41,0.9)", border: "1px solid rgba(34,130,240,0.15)", borderRadius: 14, padding: 16 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: `${s.color}18`, border: `1px solid ${s.color}35`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
              <Icon name={s.icon} fallback="Shield" size={15} style={{ color: s.color }} />
            </div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 24, fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ color: "#5A7A9A", fontSize: 11, lineHeight: 1.45, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Risk report */}
      <div style={{ margin: "0 16px", background: "rgba(11,22,41,0.85)", border: "1px solid rgba(34,130,240,0.15)", borderRadius: 16, padding: "18px 16px 16px" }}>
        <div style={{ marginBottom: 16 }}>
          <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 17, fontWeight: 600, color: "#EEF2F8", margin: "0 0 4px" }}>РИС-ОТЧЁТ: ТОП УГРОЗ</h3>
          <p style={{ color: "#5A7A9A", fontSize: 12, margin: 0 }}>Индекс риска для молодёжи 14–25 лет</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {RISK_REPORTS.map((r, i) => (
            <div key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <span style={{ color: "#B0C8E0", fontSize: 13 }}>{r.category}</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: r.level === "danger" ? "#EF4444" : "#F59E0B", fontWeight: 600 }}>{r.percent}%</span>
              </div>
              <RiskBar percent={r.percent} level={r.level} />
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(34,130,240,0.08)" }}>
          <p style={{ color: "#3A5A7A", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", margin: 0 }}>
            МВД РФ · Банк России · апрель 2025
          </p>
        </div>
      </div>
    </div>
  );
}

function EducationTab() {
  const [filter, setFilter] = useState("Все");
  const filters = ["Все", "Базовый", "Средний", "Продвинутый"];
  const filtered = filter === "Все" ? VIDEOS : VIDEOS.filter(v => v.level === filter);

  return (
    <div style={{ paddingBottom: 90 }}>
      <div style={{ padding: "4px 16px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
          <div style={{ width: 3, height: 14, background: "#2282F0", borderRadius: 2 }} />
          <span style={{ color: "#2282F0", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.12em", textTransform: "uppercase" }}>Видеокурсы</span>
        </div>
        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 26, fontWeight: 700, color: "#EEF2F8", margin: "0 0 14px" }}>ОБУЧЕНИЕ</h2>

        {/* Filter chips */}
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 2 }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{
                flexShrink: 0, padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 500, cursor: "pointer",
                fontFamily: "'IBM Plex Sans', sans-serif",
                background: filter === f ? "#1A6ECC" : "rgba(34,130,240,0.08)",
                color: filter === f ? "#fff" : "#5A7A9A",
                border: filter === f ? "none" : "1px solid rgba(34,130,240,0.15)",
              }}
            >{f}</button>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 16px" }}>
        {filtered.map((v, i) => (
          <div key={i} style={{ background: "rgba(11,22,41,0.85)", border: "1px solid rgba(34,130,240,0.12)", borderRadius: 16, overflow: "hidden", display: "flex", alignItems: "stretch" }}>
            {/* Thumbnail */}
            <div style={{ width: 90, flexShrink: 0, background: "linear-gradient(135deg, rgba(15,30,56,0.95), rgba(6,13,31,1))", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(34,130,240,0.12)", border: "1px solid rgba(34,130,240,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={v.icon} fallback="Play" size={18} style={{ color: "#2282F0" }} />
              </div>
              <div style={{ position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap", padding: "2px 6px", borderRadius: 4, background: "rgba(0,0,0,0.7)", color: "#B0C8E0", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace" }}>
                {v.duration}
              </div>
            </div>
            {/* Info */}
            <div style={{ flex: 1, padding: "12px 14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <span style={{ padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 500, background: "rgba(34,130,240,0.12)", color: "#2282F0" }}>{v.tag}</span>
                <span style={{ fontSize: 10, color: v.level === "Базовый" ? "#22C55E" : v.level === "Средний" ? "#F59E0B" : "#EF4444" }}>{v.level}</span>
              </div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 15, fontWeight: 500, color: "#EEF2F8", lineHeight: 1.35, marginBottom: 8 }}>{v.title}</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 11, color: "#3A5A7A", display: "flex", alignItems: "center", gap: 4 }}>
                  <Icon name="Eye" fallback="Eye" size={11} />
                  {v.views}
                </span>
                <button style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 10px", borderRadius: 8, background: "rgba(34,130,240,0.12)", color: "#2282F0", border: "none", fontSize: 12, cursor: "pointer", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  <Icon name="Play" size={11} />
                  Смотреть
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SupportTab() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ paddingBottom: 90 }}>
      <div style={{ padding: "4px 16px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
          <div style={{ width: 3, height: 14, background: "#22D3EE", borderRadius: 2 }} />
          <span style={{ color: "#22D3EE", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.12em", textTransform: "uppercase" }}>Помощь</span>
        </div>
        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 26, fontWeight: 700, color: "#EEF2F8", margin: 0 }}>ПОДДЕРЖКА</h2>
      </div>

      {/* Hotline */}
      <div style={{ margin: "0 16px 16px", background: "linear-gradient(135deg, rgba(26,110,204,0.25), rgba(11,22,41,0.95))", border: "1px solid rgba(34,130,240,0.35)", borderRadius: 16, padding: "18px 18px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(34,130,240,0.15)", border: "1px solid rgba(34,130,240,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="Phone" size={16} style={{ color: "#2282F0" }} />
          </div>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 16, fontWeight: 600, color: "#EEF2F8", textTransform: "uppercase", letterSpacing: "0.04em" }}>Горячая линия</span>
        </div>
        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 28, fontWeight: 700, color: "#2282F0", letterSpacing: "0.04em", marginBottom: 8 }}>8-800-000-00-00</div>
        <p style={{ color: "#8BA3C0", fontSize: 13, margin: 0, lineHeight: 1.5 }}>Бесплатно по всей России · 24 часа, 7 дней</p>
        <button style={{ marginTop: 14, width: "100%", padding: "12px", borderRadius: 10, background: "#1A6ECC", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer" }}>
          Позвонить сейчас
        </button>
      </div>

      {/* Contact cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "0 16px 20px" }}>
        {CONTACTS.map((c, i) => (
          <div key={i} style={{ background: "rgba(11,22,41,0.85)", border: "1px solid rgba(34,130,240,0.12)", borderRadius: 14, padding: "14px 12px" }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
              <Icon name={c.icon} fallback="HelpCircle" size={14} style={{ color: "#22D3EE" }} />
            </div>
            <div style={{ color: "#3A5A7A", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'IBM Plex Mono', monospace" }}>{c.label}</div>
            <div style={{ color: "#B0C8E0", fontSize: 12, fontWeight: 500, marginTop: 3, lineHeight: 1.4 }}>{c.value}</div>
            <div style={{ color: "#3A5A7A", fontSize: 11, marginTop: 2 }}>{c.sub}</div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div style={{ margin: "0 16px 20px" }}>
        <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 600, color: "#EEF2F8", margin: "0 0 12px" }}>ЧАСТЫЕ ВОПРОСЫ</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {FAQ.map((f, i) => (
            <div key={i} style={{ background: "rgba(11,22,41,0.8)", border: "1px solid rgba(34,130,240,0.1)", borderRadius: 12, overflow: "hidden" }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 14px", textAlign: "left", background: "none", border: "none", cursor: "pointer" }}
              >
                <span style={{ color: "#B0C8E0", fontSize: 13, fontWeight: 500, paddingRight: 12, fontFamily: "'IBM Plex Sans', sans-serif" }}>{f.q}</span>
                <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={15} style={{ color: "#5A7A9A", flexShrink: 0 }} />
              </button>
              {openFaq === i && (
                <div style={{ padding: "0 14px 14px", color: "#5A7A9A", fontSize: 13, lineHeight: 1.65, borderTop: "1px solid rgba(34,130,240,0.07)" }}>
                  <div style={{ paddingTop: 10 }}>{f.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Write question */}
      <div style={{ margin: "0 16px", background: "rgba(11,22,41,0.8)", border: "1px solid rgba(34,130,240,0.12)", borderRadius: 14, padding: 16 }}>
        <p style={{ color: "#8BA3C0", fontSize: 13, marginBottom: 10 }}>Не нашли ответ? Напишите нам</p>
        <input type="text" placeholder="Ваш вопрос..."
          style={{ width: "100%", padding: "12px 14px", borderRadius: 10, background: "rgba(34,130,240,0.05)", border: "1px solid rgba(34,130,240,0.15)", color: "#EEF2F8", fontSize: 14, fontFamily: "'IBM Plex Sans', sans-serif", boxSizing: "border-box", outline: "none", marginBottom: 10 }}
        />
        <button style={{ width: "100%", padding: "12px", borderRadius: 10, background: "#1A6ECC", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer" }}>
          Отправить
        </button>
      </div>
    </div>
  );
}

function PricingTab() {
  return (
    <div style={{ paddingBottom: 90 }}>
      <div style={{ padding: "4px 16px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
          <div style={{ width: 3, height: 14, background: "#C9A84C", borderRadius: 2 }} />
          <span style={{ color: "#C9A84C", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.12em", textTransform: "uppercase" }}>Тарифы</span>
        </div>
        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 26, fontWeight: 700, color: "#EEF2F8", margin: "0 0 6px" }}>ПОДПИСКА</h2>
        <p style={{ color: "#5A7A9A", fontSize: 13, margin: 0 }}>Выберите уровень защиты</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 16px" }}>
        {PLANS.map((p, i) => (
          <div key={i} style={{
            background: p.featured ? "linear-gradient(160deg, rgba(26,110,204,0.2), rgba(11,22,41,0.95))" : "rgba(11,22,41,0.85)",
            border: `1px solid ${p.featured ? "rgba(34,130,240,0.5)" : "rgba(34,130,240,0.12)"}`,
            borderRadius: 16,
            padding: "18px 16px",
            boxShadow: p.featured ? "0 0 30px rgba(34,130,240,0.15)" : "none",
            position: "relative",
          }}>
            {p.featured && (
              <div style={{ position: "absolute", top: -1, right: 16, background: "#1A6ECC", color: "#fff", fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: "0 0 8px 8px", fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.08em" }}>
                РЕКОМЕНДУЕМ
              </div>
            )}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 14 }}>
              <div>
                <div style={{ color: "#5A7A9A", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'IBM Plex Mono', monospace" }}>{p.name}</div>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 34, fontWeight: 700, color: p.featured ? "#2282F0" : "#EEF2F8", lineHeight: 1.1, marginTop: 2 }}>{p.price}</div>
                <div style={{ color: "#5A7A9A", fontSize: 12 }}>{p.period}</div>
              </div>
              <div style={{ color: "#8BA3C0", fontSize: 12, textAlign: "right" }}>{p.desc}</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
              {p.features.map((f, j) => (
                <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <Icon name="Check" size={14} style={{ color: p.featured ? "#2282F0" : "#22C55E", marginTop: 1, flexShrink: 0 }} />
                  <span style={{ color: "#8BA3C0", fontSize: 13, lineHeight: 1.4 }}>{f}</span>
                </div>
              ))}
            </div>

            <button style={{
              width: "100%", padding: "13px", borderRadius: 10,
              background: p.featured ? "#1A6ECC" : "rgba(34,130,240,0.1)",
              color: p.featured ? "#fff" : "#2282F0",
              border: p.featured ? "none" : "1px solid rgba(34,130,240,0.25)",
              fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 14, cursor: "pointer",
            }}>
              {p.cta}
            </button>
          </div>
        ))}
      </div>

      <p style={{ textAlign: "center", margin: "16px 16px 0", color: "#3A5A7A", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", lineHeight: 1.6 }}>
        Отмена в любой момент · Данные защищены · Политика конфиденциальности
      </p>
    </div>
  );
}

export default function Index() {
  const [tab, setTab] = useState<Tab>("home");

  const CONTENT: Record<Tab, JSX.Element> = {
    home: <HomeTab onNavigate={setTab} />,
    stats: <StatsTab />,
    education: <EducationTab />,
    support: <SupportTab />,
    pricing: <PricingTab />,
  };

  return (
    <div style={{ background: "#060D1F", minHeight: "100dvh", maxWidth: 480, margin: "0 auto", position: "relative", fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* Status bar spacer */}
      <div style={{ height: "env(safe-area-inset-top, 0px)", background: "#060D1F" }} />

      {/* Top header */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(6,13,31,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(34,130,240,0.1)", padding: "12px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(34,130,240,0.15)", border: "1px solid rgba(34,130,240,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="Shield" size={15} style={{ color: "#2282F0" }} />
            </div>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 600, color: "#EEF2F8", letterSpacing: "0.04em" }}>
              КИБЕР<span style={{ color: "#2282F0" }}>ЩИТ</span>
            </span>
          </div>
          <button style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(34,130,240,0.08)", border: "1px solid rgba(34,130,240,0.15)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <Icon name="Bell" size={15} style={{ color: "#5A7A9A" }} />
          </button>
        </div>
      </div>

      {/* Page title */}
      <div style={{ padding: "16px 16px 8px" }}>
        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, fontWeight: 500, color: "#3A5A7A", margin: 0, textTransform: "uppercase", letterSpacing: "0.12em" }}>
          {NAV.find(n => n.id === tab)?.label}
        </h2>
      </div>

      {/* Content */}
      <div>{CONTENT[tab]}</div>

      {/* Bottom nav */}
      <div style={{
        position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 480,
        background: "rgba(6,13,31,0.96)", backdropFilter: "blur(24px)",
        borderTop: "1px solid rgba(34,130,240,0.12)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "stretch" }}>
          {NAV.map(n => {
            const active = tab === n.id;
            return (
              <button key={n.id} onClick={() => setTab(n.id)}
                style={{
                  flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  gap: 4, padding: "10px 4px 10px", border: "none", background: "none", cursor: "pointer",
                  position: "relative",
                }}
              >
                {active && (
                  <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 24, height: 2, background: "#2282F0", borderRadius: "0 0 2px 2px" }} />
                )}
                <Icon name={n.icon} fallback="Circle" size={20} style={{ color: active ? "#2282F0" : "#3A5A7A" }} />
                <span style={{ fontSize: 10, fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: active ? 600 : 400, color: active ? "#2282F0" : "#3A5A7A" }}>
                  {n.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
