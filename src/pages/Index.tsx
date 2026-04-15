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



const PLANS = [
  {
    name: "Базовый", price: "0 ₽", period: "навсегда", desc: "Для начинающих", featured: false,
    features: ["Создание собственных мошеннических игр", "Личный куратор 24/7", "Решение продвинутых мошеннических игр"],
    cta: "Начать бесплатно",
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

type Tab = "home" | "stats" | "games" | "support" | "pricing";

const NAV = [
  { id: "home" as Tab, icon: "Home", label: "Главная" },
  { id: "stats" as Tab, icon: "BarChart2", label: "Статистика" },
  { id: "games" as Tab, icon: "Gamepad2", label: "Игры" },
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
          onClick={() => onNavigate("games")}
          style={{ width: "100%", padding: "15px", borderRadius: 14, background: "#1A6ECC", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 15, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
        >
          <Icon name="Gamepad2" size={18} />
          Играть
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

type ActiveGame = "hunters" | null;
type GamePhase = "menu" | "playing" | "result";

interface Scenario {
  id: number;
  message: string;
  sender: string;
  options: { text: string; correct: boolean; explanation: string }[];
}

const SCENARIOS: Scenario[] = [
  {
    id: 1,
    message: "Поздравляем! Вы выиграли iPhone 15 Pro! Для получения приза нужно оплатить доставку 299 руб. Введите данные карты: 💳",
    sender: "Служба доставки призов",
    options: [
      { text: "Ввести данные карты", correct: false, explanation: "Это классическая ловушка! Настоящие конкурсы не просят данные карты для получения приза." },
      { text: "Игнорировать и заблокировать", correct: true, explanation: "Верно! Это мошенничество. Настоящие призы не требуют оплаты." },
      { text: "Уточнить детали конкурса", correct: false, explanation: "Любой контакт с мошенником опасен. Лучше сразу заблокировать." },
    ],
  },
  {
    id: 2,
    message: "Вашу карту заблокировали из-за подозрительных операций. Срочно позвоните: 8-800-XXX-XX-XX для разблокировки. — Служба безопасности Сбербанка",
    sender: "СМС от: SberBank",
    options: [
      { text: "Позвонить по указанному номеру", correct: false, explanation: "Номер в СМС может быть поддельным. Мошенники перехватят ваши данные." },
      { text: "Зайти в приложение банка и проверить статус карты", correct: true, explanation: "Правильно! Всегда проверяйте через официальное приложение, а не по номерам из СМС." },
      { text: "Написать в чат банка по ссылке из СМС", correct: false, explanation: "Ссылки в подозрительных СМС ведут на фишинговые сайты мошенников." },
    ],
  },
  {
    id: 3,
    message: "Привет! Я твой одноклассник Дима. Срочно нужна помощь — сломался телефон, пишу с чужого. Переведи 2000 руб, верну завтра!",
    sender: "Незнакомый номер",
    options: [
      { text: "Перевести деньги, друг же просит", correct: false, explanation: "Мошенники часто притворяются знакомыми. Счёт может оказаться чужим." },
      { text: "Позвонить Диме на его настоящий номер", correct: true, explanation: "Отлично! Всегда проверяйте через известный вам контакт, не доверяйте незнакомым номерам." },
      { text: "Попросить прислать фото для подтверждения", correct: false, explanation: "Фото легко подделать. Только звонок на известный номер даст уверенность." },
    ],
  },
  {
    id: 4,
    message: "Ваш аккаунт ВКонтакте будет удалён через 24 часа. Войдите для подтверждения: vk-account-verify.ru/login",
    sender: "support@vk-service.net",
    options: [
      { text: "Перейти по ссылке и войти", correct: false, explanation: "Это фишинговый сайт! Адрес vk-account-verify.ru — не официальный сайт ВКонтакте." },
      { text: "Проверить аккаунт напрямую через vk.com", correct: true, explanation: "Верно! Всегда открывайте сайты вручную, никогда не переходите по ссылкам из писем." },
      { text: "Переслать ссылку другу для проверки", correct: false, explanation: "Не стоит подвергать риску других. Просто зайдите на официальный сайт напрямую." },
    ],
  },
  {
    id: 5,
    message: "Работа из дома! Доход от 50 000 руб/месяц. Требования: 18+, доступ к интернету. Нужна предоплата за обучающие материалы — 1500 руб.",
    sender: "HR-менеджер Карьера.ру",
    options: [
      { text: "Оплатить обучение и начать работу", correct: false, explanation: "Настоящие работодатели никогда не берут предоплату за трудоустройство — это мошенничество." },
      { text: "Отказаться: серьёзные работодатели не берут предоплату", correct: true, explanation: "Правильно! Любая предоплата при найме — признак мошенничества." },
      { text: "Попросить гарантии возврата денег", correct: false, explanation: "Мошенники дадут любые «гарантии», но деньги вы потеряете." },
    ],
  },
];

const GAME_LIST = [
  { id: "hunters", title: "Охотники на мошенников", desc: "Распознай схему и выбери верное действие", icon: "Crosshair", color: "#A855F7", gradient: "rgba(168,85,247,0.18)", border: "rgba(168,85,247,0.35)", tag: "Квиз", rounds: "5 раундов" },
  { id: "hacknet", title: "Hacknet", desc: "Взломай систему до того, как тебя отследят", icon: "Terminal", color: "#22D3EE", gradient: "rgba(34,211,238,0.12)", border: "rgba(34,211,238,0.3)", tag: "Скоро", rounds: "В разработке" },
  { id: "shadows", title: "Тени обмана", desc: "Детективная история: найди мошенника среди NPC", icon: "Eye", color: "#F59E0B", gradient: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)", tag: "Скоро", rounds: "В разработке" },
  { id: "heist", title: "Афера", desc: "Стань детективом и раскрой финансовую схему", icon: "Briefcase", color: "#EF4444", gradient: "rgba(239,68,68,0.12)", border: "rgba(239,68,68,0.3)", tag: "Скоро", rounds: "В разработке" },
  { id: "codex", title: "Код мошенника", desc: "Расшифруй послания и обезвредь преступника", icon: "Code2", color: "#22C55E", gradient: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.3)", tag: "Скоро", rounds: "В разработке" },
  { id: "price", title: "Цена обмана", desc: "Симулятор: защити бюджет от атак мошенников", icon: "CircleDollarSign", color: "#FB923C", gradient: "rgba(251,146,60,0.12)", border: "rgba(251,146,60,0.3)", tag: "Скоро", rounds: "В разработке" },
];

function HuntersGame({ onBack }: { onBack: () => void }) {
  const [phase, setPhase] = useState<GamePhase>("menu");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const scenario = SCENARIOS[currentIdx];
  const isLast = currentIdx === SCENARIOS.length - 1;

  function startGame() {
    setPhase("playing");
    setCurrentIdx(0);
    setScore(0);
    setSelected(null);
    setShowExplanation(false);
  }

  function handleAnswer(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
    if (scenario.options[idx].correct) setScore(s => s + 1);
  }

  function handleNext() {
    if (isLast) { setPhase("result"); }
    else { setCurrentIdx(i => i + 1); setSelected(null); setShowExplanation(false); }
  }

  const scoreColor = score >= 4 ? "#22C55E" : score >= 2 ? "#F59E0B" : "#EF4444";
  const scoreLabel = score >= 4 ? "Охотник-эксперт!" : score >= 2 ? "Неплохой охотник" : "Новичок в деле";

  return (
    <div style={{ paddingBottom: 90 }}>
      {/* Back header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 16px 14px" }}>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "#5A7A9A", padding: 0 }}>
          <Icon name="ChevronLeft" size={18} style={{ color: "#5A7A9A" }} />
          <span style={{ fontSize: 13, fontFamily: "'IBM Plex Sans', sans-serif" }}>Все игры</span>
        </button>
        <span style={{ color: "#3A5A7A", fontSize: 13 }}>·</span>
        <span style={{ color: "#A855F7", fontSize: 13, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}>Охотники на мошенников</span>
      </div>

      {phase === "menu" && (
        <div style={{ padding: "0 16px" }}>
          <div style={{ background: "linear-gradient(160deg, rgba(168,85,247,0.15), rgba(11,22,41,0.95))", border: "1px solid rgba(168,85,247,0.3)", borderRadius: 18, padding: "20px 18px", textAlign: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
              <Icon name="Crosshair" fallback="Target" size={26} style={{ color: "#A855F7" }} />
            </div>
            <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 20, fontWeight: 700, color: "#EEF2F8", margin: "0 0 8px" }}>ОХОТНИКИ НА МОШЕННИКОВ</h3>
            <p style={{ color: "#8BA3C0", fontSize: 12, lineHeight: 1.6, margin: "0 0 16px" }}>Распознай реальные схемы обмана и выбери верное действие.</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 16 }}>
              {[["5", "раундов"], ["🎯", "схемы"], ["🏆", "очки"]].map(([v, l], i) => (
                <div key={i} style={{ background: "rgba(11,22,41,0.7)", border: "1px solid rgba(168,85,247,0.15)", borderRadius: 10, padding: "10px 12px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 700, color: "#A855F7" }}>{v}</div>
                  <div style={{ color: "#5A7A9A", fontSize: 10, marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
            <button onClick={startGame} style={{ width: "100%", padding: "13px", borderRadius: 12, background: "linear-gradient(135deg, #7C3AED, #A855F7)", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <Icon name="Crosshair" fallback="Play" size={16} /> Начать охоту
            </button>
          </div>
        </div>
      )}

      {phase === "result" && (
        <div style={{ padding: "0 16px" }}>
          <div style={{ background: "linear-gradient(160deg, rgba(168,85,247,0.12), rgba(11,22,41,0.95))", border: "1px solid rgba(168,85,247,0.25)", borderRadius: 18, padding: "24px 18px", textAlign: "center" }}>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 56, fontWeight: 700, color: scoreColor, lineHeight: 1 }}>{score}/{SCENARIOS.length}</div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 17, fontWeight: 600, color: "#EEF2F8", margin: "8px 0 4px" }}>{scoreLabel}</div>
            <p style={{ color: "#5A7A9A", fontSize: 12, lineHeight: 1.55, margin: "0 0 20px" }}>
              {score >= 4 ? "Мошенникам от тебя не скрыться!" : score >= 2 ? "Неплохо! Ещё немного практики." : "Мошенники опасны — пройди ещё раз!"}
            </p>
            <button onClick={startGame} style={{ width: "100%", padding: "13px", borderRadius: 12, background: "linear-gradient(135deg, #7C3AED, #A855F7)", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>
              Сыграть ещё раз
            </button>
          </div>
        </div>
      )}

      {phase === "playing" && (
        <>
          <div style={{ padding: "0 16px 14px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ color: "#5A7A9A", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace" }}>Сценарий {currentIdx + 1} из {SCENARIOS.length}</span>
              <span style={{ color: "#A855F7", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}>Очки: {score}</span>
            </div>
            <div style={{ width: "100%", height: 3, background: "rgba(168,85,247,0.1)", borderRadius: 2 }}>
              <div style={{ width: `${((currentIdx + 1) / SCENARIOS.length) * 100}%`, height: "100%", background: "linear-gradient(90deg, #7C3AED, #A855F7)", borderRadius: 2 }} />
            </div>
          </div>
          <div style={{ margin: "0 16px 12px", background: "rgba(11,22,41,0.9)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 14, padding: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: 7, background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="AlertCircle" fallback="AlertCircle" size={13} style={{ color: "#EF4444" }} />
              </div>
              <div>
                <div style={{ color: "#EF4444", fontSize: 10, fontWeight: 600, fontFamily: "'IBM Plex Mono', monospace" }}>ПОДОЗРИТЕЛЬНОЕ СООБЩЕНИЕ</div>
                <div style={{ color: "#5A7A9A", fontSize: 10 }}>От: {scenario.sender}</div>
              </div>
            </div>
            <div style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.08)", borderRadius: 8, padding: "10px 12px" }}>
              <p style={{ color: "#EEF2F8", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{scenario.message}</p>
            </div>
          </div>
          <div style={{ padding: "0 16px 10px" }}>
            <p style={{ color: "#B0C8E0", fontSize: 13, fontWeight: 600, margin: "0 0 10px" }}>Что ты сделаешь?</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {scenario.options.map((opt, idx) => {
                const isSelected = selected === idx;
                const isCorrect = opt.correct;
                let borderColor = "rgba(34,130,240,0.15)", bg = "rgba(11,22,41,0.85)", textColor = "#B0C8E0";
                if (selected !== null) {
                  if (isCorrect) { borderColor = "rgba(34,197,94,0.5)"; bg = "rgba(34,197,94,0.07)"; textColor = "#22C55E"; }
                  else if (isSelected) { borderColor = "rgba(239,68,68,0.5)"; bg = "rgba(239,68,68,0.07)"; textColor = "#EF4444"; }
                }
                return (
                  <button key={idx} onClick={() => handleAnswer(idx)}
                    style={{ width: "100%", padding: "11px 13px", borderRadius: 10, background: bg, border: `1px solid ${borderColor}`, color: textColor, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12, textAlign: "left", cursor: selected !== null ? "default" : "pointer", display: "flex", alignItems: "center", gap: 8 }}
                  >
                    {selected !== null && <Icon name={isCorrect ? "CheckCircle" : isSelected ? "XCircle" : "Circle"} fallback="Circle" size={14} style={{ flexShrink: 0, color: isCorrect ? "#22C55E" : isSelected ? "#EF4444" : "#3A5A7A" }} />}
                    <span style={{ lineHeight: 1.45 }}>{opt.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
          {showExplanation && (
            <div style={{ margin: "0 16px 16px", background: selected !== null && scenario.options[selected].correct ? "rgba(34,197,94,0.06)" : "rgba(239,68,68,0.06)", border: `1px solid ${selected !== null && scenario.options[selected].correct ? "rgba(34,197,94,0.25)" : "rgba(239,68,68,0.25)"}`, borderRadius: 10, padding: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <Icon name={selected !== null && scenario.options[selected].correct ? "CheckCircle" : "XCircle"} fallback="Info" size={13} style={{ color: selected !== null && scenario.options[selected].correct ? "#22C55E" : "#EF4444" }} />
                <span style={{ fontWeight: 600, fontSize: 11, color: selected !== null && scenario.options[selected].correct ? "#22C55E" : "#EF4444", fontFamily: "'IBM Plex Mono', monospace" }}>
                  {selected !== null && scenario.options[selected].correct ? "ПРАВИЛЬНО!" : "НЕВЕРНО"}
                </span>
              </div>
              <p style={{ color: "#8BA3C0", fontSize: 12, lineHeight: 1.6, margin: "0 0 10px" }}>{selected !== null ? scenario.options[selected].explanation : ""}</p>
              <button onClick={handleNext} style={{ width: "100%", padding: "10px", borderRadius: 8, background: "#1A6ECC", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 12, border: "none", cursor: "pointer" }}>
                {isLast ? "Посмотреть результат" : "Следующий →"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function GamesTab() {
  const [activeGame, setActiveGame] = useState<ActiveGame>(null);

  if (activeGame === "hunters") return <HuntersGame onBack={() => setActiveGame(null)} />;

  return (
    <div style={{ paddingBottom: 90 }}>
      <div style={{ padding: "4px 16px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
          <div style={{ width: 3, height: 14, background: "#A855F7", borderRadius: 2 }} />
          <span style={{ color: "#A855F7", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.12em", textTransform: "uppercase" }}>Интерактив</span>
        </div>
        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 26, fontWeight: 700, color: "#EEF2F8", margin: "0 0 4px" }}>ИГРЫ</h2>
        <p style={{ color: "#5A7A9A", fontSize: 12, margin: 0 }}>{GAME_LIST.filter(g => g.tag !== "Скоро").length} доступно · {GAME_LIST.filter(g => g.tag === "Скоро").length} скоро</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "0 16px" }}>
        {GAME_LIST.map((g) => {
          const available = g.tag !== "Скоро";
          return (
            <button key={g.id}
              onClick={() => available ? setActiveGame(g.id as ActiveGame) : undefined}
              style={{ width: "100%", background: `linear-gradient(135deg, ${g.gradient}, rgba(11,22,41,0.92))`, border: `1px solid ${available ? g.border : "rgba(255,255,255,0.06)"}`, borderRadius: 16, padding: "14px 16px", display: "flex", alignItems: "center", gap: 14, textAlign: "left", cursor: available ? "pointer" : "default", opacity: available ? 1 : 0.6 }}
            >
              <div style={{ width: 46, height: 46, borderRadius: 13, background: available ? `${g.gradient}` : "rgba(255,255,255,0.04)", border: `1px solid ${available ? g.border : "rgba(255,255,255,0.06)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name={g.icon} fallback="Gamepad2" size={20} style={{ color: available ? g.color : "#3A5A7A" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                  <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 15, fontWeight: 600, color: available ? "#EEF2F8" : "#3A5A7A" }}>{g.title}</span>
                  <span style={{ padding: "1px 7px", borderRadius: 4, fontSize: 9, fontWeight: 700, background: available ? `${g.color}20` : "rgba(255,255,255,0.05)", color: available ? g.color : "#3A5A7A", fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.06em" }}>{g.tag}</span>
                </div>
                <p style={{ color: "#5A7A9A", fontSize: 11, margin: "0 0 4px", lineHeight: 1.4 }}>{g.desc}</p>
                <span style={{ fontSize: 10, color: available ? g.color : "#3A5A7A", fontFamily: "'IBM Plex Mono', monospace" }}>{g.rounds}</span>
              </div>
              {available && <Icon name="ChevronRight" size={16} style={{ color: g.color, flexShrink: 0 }} />}
            </button>
          );
        })}
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
    games: <GamesTab />,
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