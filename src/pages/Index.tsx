import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/0f0e92f1-8c32-44b1-a5a4-d99f9d8f7d20/bucket/7ed6c6aa-7b0b-4026-8f79-90a0609b2f24.jpg";

const STATS_DATA = [
  { value: "30%", label: "молодёжи сталкивались с мошенничеством", color: "#EF4444", icon: "AlertTriangle" },
  { value: "₽150 млрд", label: "потери в 2024 году", color: "#F59E0B", icon: "TrendingDown" },
  { value: "564 тыс", label: "инцидентов за год", color: "#2282F0", icon: "Activity" },
  { value: "Дагестан", label: "самый опасный регион", color: "#22D3EE", icon: "MapPin" },
];

const RISK_REPORTS = [
  { category: "Фишинг и поддельные сайты", percent: 42, level: "warning" },
  { category: "Мошенничество в соцсетях", percent: 37, level: "warning" },
  { category: "Кража личных данных", percent: 53, level: "danger" },
  { category: "Онлайн-вымогательство", percent: 13, level: "warning" },
  { category: "Взлом аккаунтов", percent: 20, level: "warning" },
  { category: "Финансовые схемы обмана", percent: 51, level: "danger" },
];



const PLANS = [
  {
    name: "Базовый", price: "149 ₽", period: "в месяц", desc: "", featured: false,
    features: ["Создание собственных мошеннических игр", "Личный куратор 24/7", "Решение продвинутых мошеннических игр"],
    cta: "Оформить подписку",
  },
  {
    name: "Премиум", price: "5 490 ₽", period: "в месяц", desc: "Для организаций", featured: true,
    features: ["Создание собственных мошеннических игр", "Личный куратор 24/7", "Решение продвинутых мошеннических игр"],
    cta: "Оформить подписку",
  },
];

const CONTACTS = [
  { icon: "Phone", label: "Горячая линия", value: "8 913 114 88 01", sub: "Бесплатно, 24/7" },
  { icon: "Mail", label: "Почта", value: "tkachenko.dmitriy.06@bk.ru", sub: "Ответим за 2 часа" },
  { icon: "MessageSquare", label: "Онлайн-чат", value: "Написать сейчас", sub: "~5 минут ответ" },
  { icon: "MapPin", label: "Офис", value: "г. Томск, ул. Белинского 51", sub: "Пн–Пт 9:00–18:00" },
];

const FAQ = [
  { q: "Сколько времени занимает обучение?", a: "Базовый курс — около 3 часов. Полная программа — 2–3 недели по 30 минут в день." },
  { q: "Как работают риск-отчёты?", a: "Система анализирует актуальные угрозы и региональную статистику, формируя персональный отчёт." },
  { q: "Могу я отменить подписку?", a: "Да, в любой момент без штрафов. Доступ сохраняется до конца периода." },
  { q: "Есть ли сертификат об обучении?", a: "Да, цифровой сертификат после завершения курса." },
];

type Tab = "home" | "stats" | "education" | "games" | "support" | "pricing" | "rating";

const NAV = [
  { id: "home" as Tab, icon: "Home", label: "Главная" },
  { id: "stats" as Tab, icon: "BarChart2", label: "Статистика" },
  { id: "education" as Tab, icon: "BookOpen", label: "Обучение" },
  { id: "games" as Tab, icon: "Gamepad2", label: "Игры" },
  { id: "support" as Tab, icon: "MessageCircle", label: "Поддержка" },
  { id: "pricing" as Tab, icon: "Star", label: "Подписка" },
  { id: "rating" as Tab, icon: "Trophy", label: "Рейтинг" },
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
          <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 17, fontWeight: 600, color: "#EEF2F8", margin: "0 0 4px" }}>ТОП УГРОЗ</h3>
          <p style={{ color: "#5A7A9A", fontSize: 12, margin: 0 }}>Индекс риска для молодёжи · 2025</p>
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
            МВД РФ · Банк России · 2025
          </p>
        </div>
      </div>
    </div>
  );
}

type ActiveGame = "hunters" | "hacknet" | "shadows" | "heist" | "devmode" | null;
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
  { id: "hacknet", title: "Hacknet", desc: "Взломай систему до того, как тебя отследят", icon: "Terminal", color: "#22D3EE", gradient: "rgba(34,211,238,0.12)", border: "rgba(34,211,238,0.3)", tag: "Хакинг", rounds: "6 уровней" },
  { id: "shadows", title: "Тени обмана", desc: "Детективная история: найди мошенника среди NPC", icon: "Eye", color: "#F59E0B", gradient: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)", tag: "Детектив", rounds: "5 подозреваемых" },
  { id: "heist", title: "Афера", desc: "Стань детективом и раскрой финансовую схему", icon: "Briefcase", color: "#EF4444", gradient: "rgba(239,68,68,0.12)", border: "rgba(239,68,68,0.3)", tag: "Расследование", rounds: "4 дела" },
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

const HACKNET_LEVELS = [
  { id: 1, prompt: "Ты подключился к сети. Введи команду для сканирования портов:", hint: "scan", wrongHints: ["hack", "connect", "run"], success: "Порты найдены: 22, 80, 443. Уязвимость обнаружена на порту 22.", fail: "Неверная команда. Система зафиксировала попытку. +10% трекинга." },
  { id: 2, prompt: "Порт 22 открыт. Введи команду для подключения:", hint: "ssh", wrongHints: ["ping", "wget", "curl"], success: "SSH-соединение установлено. Ты внутри!", fail: "Соединение отклонено. Система подняла тревогу. +15% трекинга." },
  { id: 3, prompt: "Ты в системе. Найди файл с уликами командой:", hint: "ls", wrongHints: ["cd", "rm", "pwd"], success: "Найден файл: evidence.txt. Данные о мошеннике получены!", fail: "Файл не найден. Следы заметены. +10% трекинга." },
  { id: 4, prompt: "Скачай улики на свой сервер командой:", hint: "download", wrongHints: ["copy", "move", "save"], success: "Файл скачан. Улики у тебя!", fail: "Ошибка передачи. Соединение нестабильно. +20% трекинга." },
  { id: 5, prompt: "Удали следы своего присутствия:", hint: "clean", wrongHints: ["exit", "logout", "quit"], success: "Логи очищены. Ты невидим!", fail: "Следы остались. Они на твоём хвосте! +25% трекинга." },
  { id: 6, prompt: "Покинь систему незамеченным:", hint: "disconnect", wrongHints: ["exit", "quit", "stop"], success: "Операция завершена успешно. Мошенник разоблачён!", fail: "Соединение обнаружено при выходе. +15% трекинга." },
];

function HacknetGame({ onBack }: { onBack: () => void }) {
  const [levelIdx, setLevelIdx] = useState(0);
  const [input, setInput] = useState("");
  const [tracking, setTracking] = useState(0);
  const [log, setLog] = useState<{ text: string; type: "system" | "success" | "error" | "info" }[]>([
    { text: "> HACKNET v2.4 — Система безопасного взлома", type: "system" },
    { text: "> Цель: разоблачить мошенника. Не дай себя отследить.", type: "info" },
    { text: "─────────────────────────────────", type: "system" },
  ]);
  const [phase, setPhase] = useState<"playing" | "win" | "lose">("playing");
  const [answered, setAnswered] = useState(false);

  const level = HACKNET_LEVELS[levelIdx];

  function handleSubmit() {
    if (!input.trim() || answered) return;
    const cmd = input.trim().toLowerCase();
    setAnswered(true);
    if (cmd === level.hint) {
      const newLog = [...log, { text: `$ ${cmd}`, type: "info" as const }, { text: level.success, type: "success" as const }];
      setLog(newLog);
      if (levelIdx + 1 >= HACKNET_LEVELS.length) {
        setTimeout(() => setPhase("win"), 600);
      } else {
        setTimeout(() => { setLevelIdx(i => i + 1); setInput(""); setAnswered(false); }, 1200);
      }
    } else {
      const penalty = [10, 15, 20, 25][Math.floor(Math.random() * 4)];
      const newTracking = Math.min(100, tracking + penalty);
      setTracking(newTracking);
      setLog([...log, { text: `$ ${cmd}`, type: "info" as const }, { text: level.fail, type: "error" as const }]);
      if (newTracking >= 100) {
        setTimeout(() => setPhase("lose"), 600);
      } else {
        setTimeout(() => { setInput(""); setAnswered(false); }, 1000);
      }
    }
    setInput("");
  }

  function restart() { setLevelIdx(0); setInput(""); setTracking(0); setLog([{ text: "> HACKNET v2.4 — новая сессия", type: "system" }, { text: "─────────────────────────────────", type: "system" }]); setPhase("playing"); setAnswered(false); }

  return (
    <div style={{ paddingBottom: 90 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 16px 12px" }}>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "#5A7A9A", padding: 0 }}>
          <Icon name="ChevronLeft" size={18} style={{ color: "#5A7A9A" }} />
          <span style={{ fontSize: 13, fontFamily: "'IBM Plex Sans', sans-serif" }}>Все игры</span>
        </button>
        <span style={{ color: "#3A5A7A" }}>·</span>
        <span style={{ color: "#22D3EE", fontSize: 13, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}>Hacknet</span>
      </div>

      {phase !== "playing" ? (
        <div style={{ padding: "0 16px" }}>
          <div style={{ background: phase === "win" ? "rgba(34,197,94,0.07)" : "rgba(239,68,68,0.07)", border: `1px solid ${phase === "win" ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`, borderRadius: 18, padding: "24px 20px", textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>{phase === "win" ? "🏆" : "💀"}</div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 20, fontWeight: 700, color: phase === "win" ? "#22C55E" : "#EF4444", marginBottom: 8 }}>
              {phase === "win" ? "ОПЕРАЦИЯ ЗАВЕРШЕНА!" : "ОТСЛЕЖЕН!"}
            </div>
            <p style={{ color: "#8BA3C0", fontSize: 13, lineHeight: 1.6, margin: "0 0 20px" }}>
              {phase === "win" ? "Мошенник разоблачён. Ты настоящий хакер!" : `Уровень трекинга достиг ${tracking}%. Они тебя нашли.`}
            </p>
            <button onClick={restart} style={{ width: "100%", padding: "13px", borderRadius: 12, background: "linear-gradient(135deg, #0891B2, #22D3EE)", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>
              Новая сессия
            </button>
          </div>
        </div>
      ) : (
        <div style={{ padding: "0 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ color: "#5A7A9A", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace" }}>Уровень {levelIdx + 1}/{HACKNET_LEVELS.length}</span>
            <span style={{ color: tracking > 60 ? "#EF4444" : tracking > 30 ? "#F59E0B" : "#22C55E", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}>Трекинг: {tracking}%</span>
          </div>
          <div style={{ width: "100%", height: 3, background: "rgba(239,68,68,0.1)", borderRadius: 2, marginBottom: 12 }}>
            <div style={{ width: `${tracking}%`, height: "100%", background: tracking > 60 ? "#EF4444" : tracking > 30 ? "#F59E0B" : "#22C55E", borderRadius: 2, transition: "width 0.5s ease" }} />
          </div>

          <div style={{ background: "#050E1C", border: "1px solid rgba(34,211,238,0.2)", borderRadius: 12, padding: "14px", marginBottom: 12, minHeight: 140, maxHeight: 200, overflowY: "auto", fontFamily: "'IBM Plex Mono', monospace", fontSize: 11 }}>
            {log.map((l, i) => (
              <div key={i} style={{ marginBottom: 4, color: l.type === "success" ? "#22C55E" : l.type === "error" ? "#EF4444" : l.type === "info" ? "#22D3EE" : "#3A5A7A" }}>{l.text}</div>
            ))}
          </div>

          <div style={{ background: "rgba(11,22,41,0.9)", border: "1px solid rgba(34,211,238,0.2)", borderRadius: 12, padding: "14px", marginBottom: 10 }}>
            <p style={{ color: "#B0C8E0", fontSize: 13, margin: "0 0 12px", lineHeight: 1.5 }}>{level.prompt}</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
              {[level.hint, ...level.wrongHints].sort(() => Math.random() - 0.5).map((cmd, i) => (
                <button key={i} onClick={() => { if (!answered) { setInput(cmd); } }}
                  style={{ padding: "6px 12px", borderRadius: 8, background: input === cmd ? "rgba(34,211,238,0.15)" : "rgba(34,211,238,0.05)", border: `1px solid ${input === cmd ? "rgba(34,211,238,0.4)" : "rgba(34,211,238,0.12)"}`, color: input === cmd ? "#22D3EE" : "#5A7A9A", fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, cursor: "pointer" }}>
                  {cmd}
                </button>
              ))}
            </div>
            <button onClick={handleSubmit} disabled={!input || answered}
              style={{ width: "100%", padding: "11px", borderRadius: 10, background: input && !answered ? "linear-gradient(135deg, #0891B2, #22D3EE)" : "rgba(34,211,238,0.08)", color: input && !answered ? "#fff" : "#3A5A7A", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 13, border: "none", cursor: input && !answered ? "pointer" : "default" }}>
              Выполнить команду
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const SUSPECTS = [
  { name: "Алексей Нечаев", role: "Менеджер банка", age: 34, clues: ["Звонил жертве 3 раза", "Знал номер карты заранее", "Телефон зарегистрирован на подставное лицо"], guilty: true, motive: "Продавал базы данных клиентов конкурентам" },
  { name: "Марина Соколова", role: "Кассир магазина", age: 27, clues: ["Работала в смену в день кражи", "Не имеет доступа к банковским данным", "Алиби подтверждено камерами"], guilty: false, motive: null },
  { name: "Дмитрий Волков", role: "IT-специалист", age: 41, clues: ["Имеет доступ к системе", "Отсутствовал в офисе в нужный день", "Недавно взял кредит на 500 000 руб."], guilty: false, motive: null },
  { name: "Светлана Петрова", role: "Секретарь директора", age: 29, clues: ["Видела жертву в тот день", "Не имеет технических навыков", "Уволена 2 месяца назад"], guilty: false, motive: null },
  { name: "Игорь Быков", role: "Охранник", age: 38, clues: ["Дежурил у входа", "Знаком с Алексеем лично", "Пропускал его без записи"], guilty: false, motive: null },
];

function ShadowsGame({ onBack }: { onBack: () => void }) {
  const [phase, setPhase] = useState<"intro" | "investigation" | "accusation" | "result">("intro");
  const [openSuspect, setOpenSuspect] = useState<number | null>(null);
  const [studied, setStudied] = useState<Set<number>>(new Set());
  const [accused, setAccused] = useState<number | null>(null);

  function studySuspect(i: number) { setOpenSuspect(i); setStudied(s => new Set([...s, i])); }

  function accuse(i: number) { setAccused(i); setPhase("result"); }

  const correct = accused !== null && SUSPECTS[accused].guilty;

  return (
    <div style={{ paddingBottom: 90 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 16px 12px" }}>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "#5A7A9A", padding: 0 }}>
          <Icon name="ChevronLeft" size={18} style={{ color: "#5A7A9A" }} />
          <span style={{ fontSize: 13, fontFamily: "'IBM Plex Sans', sans-serif" }}>Все игры</span>
        </button>
        <span style={{ color: "#3A5A7A" }}>·</span>
        <span style={{ color: "#F59E0B", fontSize: 13, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}>Тени обмана</span>
      </div>

      {phase === "intro" && (
        <div style={{ padding: "0 16px" }}>
          <div style={{ background: "linear-gradient(160deg, rgba(245,158,11,0.12), rgba(11,22,41,0.95))", border: "1px solid rgba(245,158,11,0.3)", borderRadius: 18, padding: "20px 18px" }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
              <Icon name="Eye" fallback="Search" size={24} style={{ color: "#F59E0B" }} />
            </div>
            <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 20, fontWeight: 700, color: "#EEF2F8", margin: "0 0 10px" }}>ДЕЛО №47: КРАЖА ДАННЫХ</h3>
            <p style={{ color: "#8BA3C0", fontSize: 12, lineHeight: 1.65, margin: "0 0 16px" }}>
              Клиент банка потерял 180 000 руб. Мошенник знал все данные карты и кодовое слово. Среди пяти сотрудников — один виновен. Изучи улики и найди его.
            </p>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              {[["5", "подозреваемых"], ["🔍", "улики"], ["⚖️", "обвинение"]].map(([v, l], i) => (
                <div key={i} style={{ flex: 1, background: "rgba(11,22,41,0.7)", border: "1px solid rgba(245,158,11,0.15)", borderRadius: 10, padding: "10px 8px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 700, color: "#F59E0B" }}>{v}</div>
                  <div style={{ color: "#5A7A9A", fontSize: 10, marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
            <button onClick={() => setPhase("investigation")} style={{ width: "100%", padding: "13px", borderRadius: 12, background: "linear-gradient(135deg, #B45309, #F59E0B)", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>
              Начать расследование
            </button>
          </div>
        </div>
      )}

      {phase === "investigation" && (
        <div style={{ padding: "0 16px" }}>
          <div style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.15)", borderRadius: 12, padding: "12px 14px", marginBottom: 14 }}>
            <p style={{ color: "#F59E0B", fontSize: 12, margin: 0, fontFamily: "'IBM Plex Mono', monospace" }}>ИЗУЧИ ПОДОЗРЕВАЕМЫХ · ИЗУЧЕНО: {studied.size}/5</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
            {SUSPECTS.map((s, i) => (
              <div key={i}>
                <button onClick={() => studySuspect(i)}
                  style={{ width: "100%", background: openSuspect === i ? "rgba(245,158,11,0.1)" : "rgba(11,22,41,0.85)", border: `1px solid ${studied.has(i) ? "rgba(245,158,11,0.3)" : "rgba(34,130,240,0.12)"}`, borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: studied.has(i) ? "rgba(245,158,11,0.12)" : "rgba(34,130,240,0.08)", border: `1px solid ${studied.has(i) ? "rgba(245,158,11,0.3)" : "rgba(34,130,240,0.1)"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name="User" fallback="User" size={16} style={{ color: studied.has(i) ? "#F59E0B" : "#3A5A7A" }} />
                    </div>
                    <div>
                      <div style={{ color: "#EEF2F8", fontSize: 13, fontWeight: 600, fontFamily: "'IBM Plex Sans', sans-serif" }}>{s.name}</div>
                      <div style={{ color: "#5A7A9A", fontSize: 11 }}>{s.role} · {s.age} лет</div>
                    </div>
                  </div>
                  <Icon name={openSuspect === i ? "ChevronUp" : "ChevronDown"} size={14} style={{ color: "#5A7A9A" }} />
                </button>
                {openSuspect === i && (
                  <div style={{ background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.15)", borderRadius: "0 0 12px 12px", padding: "12px 14px", marginTop: -4 }}>
                    <p style={{ color: "#F59E0B", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", margin: "0 0 8px" }}>УЛИКИ:</p>
                    {s.clues.map((c, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 5 }}>
                        <Icon name="AlertCircle" fallback="Circle" size={12} style={{ color: "#F59E0B", marginTop: 1, flexShrink: 0 }} />
                        <span style={{ color: "#8BA3C0", fontSize: 12, lineHeight: 1.5 }}>{c}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {studied.size >= 3 && (
            <button onClick={() => setPhase("accusation")} style={{ width: "100%", padding: "13px", borderRadius: 12, background: "linear-gradient(135deg, #B45309, #F59E0B)", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>
              Выдвинуть обвинение →
            </button>
          )}
        </div>
      )}

      {phase === "accusation" && (
        <div style={{ padding: "0 16px" }}>
          <div style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 12, padding: "12px 14px", marginBottom: 14 }}>
            <p style={{ color: "#F59E0B", fontSize: 12, fontFamily: "'IBM Plex Mono', monospace", margin: 0 }}>КТО ВИНОВЕН? Выбери подозреваемого:</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {SUSPECTS.map((s, i) => (
              <button key={i} onClick={() => accuse(i)}
                style={{ width: "100%", background: "rgba(11,22,41,0.85)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="User" fallback="User" size={16} style={{ color: "#EF4444" }} />
                </div>
                <div>
                  <div style={{ color: "#EEF2F8", fontSize: 14, fontWeight: 600 }}>{s.name}</div>
                  <div style={{ color: "#5A7A9A", fontSize: 11 }}>{s.role}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {phase === "result" && accused !== null && (
        <div style={{ padding: "0 16px" }}>
          <div style={{ background: correct ? "rgba(34,197,94,0.07)" : "rgba(239,68,68,0.07)", border: `1px solid ${correct ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`, borderRadius: 18, padding: "22px 18px", textAlign: "center" }}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>{correct ? "⚖️" : "❌"}</div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 700, color: correct ? "#22C55E" : "#EF4444", marginBottom: 8 }}>
              {correct ? "ВИНОВНЫЙ НАЙДЕН!" : "НЕВЕРНОЕ ОБВИНЕНИЕ"}
            </div>
            <p style={{ color: "#8BA3C0", fontSize: 13, lineHeight: 1.6, margin: "0 0 8px" }}>
              {correct ? `${SUSPECTS[accused].name} виновен. ${SUSPECTS[accused].motive}` : `${SUSPECTS[accused].name} невиновен. Виновный — Алексей Нечаев. ${SUSPECTS.find(s => s.guilty)?.motive}`}
            </p>
            <button onClick={() => { setPhase("intro"); setStudied(new Set()); setOpenSuspect(null); setAccused(null); }}
              style={{ width: "100%", padding: "13px", borderRadius: 12, background: "linear-gradient(135deg, #B45309, #F59E0B)", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", marginTop: 12 }}>
              Новое дело
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const HEIST_CASES = [
  {
    title: "Дело о фиктивном ООО",
    brief: "Компания продаёт несуществующие товары через интернет. Соберите доказательства мошенничества.",
    evidence: [
      { text: "Юридический адрес — заброшенный склад", isProof: true },
      { text: "Сайт создан 2 недели назад", isProof: true },
      { text: "Компания зарегистрирована в ФНС", isProof: false },
      { text: "Отзывы покупателей только положительные и без деталей", isProof: true },
      { text: "Директор компании имеет LinkedIn-профиль", isProof: false },
      { text: "Требуют 100% предоплату без гарантий", isProof: true },
    ],
    minProofs: 3,
  },
  {
    title: "Пирамида инвестиций",
    brief: "Компания обещает 50% прибыли в месяц. Докажите, что это финансовая пирамида.",
    evidence: [
      { text: "Обещают доходность 50% в месяц", isProof: true },
      { text: "Нет лицензии ЦБ РФ", isProof: true },
      { text: "Активно нанимают новых участников", isProof: true },
      { text: "Основатель имеет офис в Москве", isProof: false },
      { text: "Нельзя вывести деньги первые 6 месяцев", isProof: true },
      { text: "Публикуют красивые графики роста", isProof: false },
    ],
    minProofs: 3,
  },
  {
    title: "Поддельный интернет-магазин",
    brief: "Магазин копирует известный бренд. Нужно доказать факт мошенничества.",
    evidence: [
      { text: "Домен похож на оригинал: amaz0n-shop.ru", isProof: true },
      { text: "Цены ниже рыночных на 70%", isProof: true },
      { text: "Нет HTTPS-сертификата", isProof: true },
      { text: "Есть страница «О нас»", isProof: false },
      { text: "Контакты — только форма обратной связи", isProof: true },
      { text: "Принимают оплату только переводом на карту физлица", isProof: true },
    ],
    minProofs: 4,
  },
  {
    title: "Схема с трудоустройством",
    brief: "Агентство берёт деньги за 'гарантированное' трудоустройство. Разоблачите их.",
    evidence: [
      { text: "Требуют предоплату 15 000 руб. за резюме", isProof: true },
      { text: "Офис снят в коворкинге", isProof: false },
      { text: "Обещают зарплату 150 000 руб. без опыта", isProof: true },
      { text: "Нет реальных работодателей-партнёров", isProof: true },
      { text: "Договор не предусматривает возврат денег", isProof: true },
      { text: "У агентства есть сайт", isProof: false },
    ],
    minProofs: 3,
  },
];

function HeistGame({ onBack }: { onBack: () => void }) {
  const [caseIdx, setCaseIdx] = useState(0);
  const [phase, setPhase] = useState<"intro" | "collect" | "verdict" | "result">("intro");
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [solvedCount, setSolvedCount] = useState(0);

  const currentCase = HEIST_CASES[caseIdx];
  const correctSelected = [...selected].filter(i => currentCase.evidence[i].isProof).length;
  const wrongSelected = [...selected].filter(i => !currentCase.evidence[i].isProof).length;
  const enough = correctSelected >= currentCase.minProofs && wrongSelected === 0;

  function toggleEvidence(i: number) {
    setSelected(s => {
      const n = new Set(s);
      if (n.has(i)) { n.delete(i); } else { n.add(i); }
      return n;
    });
  }

  function submitVerdict() { setPhase("verdict"); }

  function nextCase() {
    const solved = enough ? solvedCount + 1 : solvedCount;
    if (caseIdx + 1 >= HEIST_CASES.length) { setSolvedCount(solved); setPhase("result"); }
    else { setSolvedCount(solved); setCaseIdx(i => i + 1); setSelected(new Set()); setPhase("collect"); }
  }

  function restart() { setCaseIdx(0); setPhase("intro"); setSelected(new Set()); setSolvedCount(0); }

  return (
    <div style={{ paddingBottom: 90 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 16px 12px" }}>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "#5A7A9A", padding: 0 }}>
          <Icon name="ChevronLeft" size={18} style={{ color: "#5A7A9A" }} />
          <span style={{ fontSize: 13, fontFamily: "'IBM Plex Sans', sans-serif" }}>Все игры</span>
        </button>
        <span style={{ color: "#3A5A7A" }}>·</span>
        <span style={{ color: "#EF4444", fontSize: 13, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}>Афера</span>
      </div>

      {phase === "intro" && (
        <div style={{ padding: "0 16px" }}>
          <div style={{ background: "linear-gradient(160deg, rgba(239,68,68,0.12), rgba(11,22,41,0.95))", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 18, padding: "20px 18px" }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
              <Icon name="Briefcase" fallback="Search" size={24} style={{ color: "#EF4444" }} />
            </div>
            <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 20, fontWeight: 700, color: "#EEF2F8", margin: "0 0 10px" }}>АФЕРА: ДЕЛА ДЕТЕКТИВА</h3>
            <p style={{ color: "#8BA3C0", fontSize: 12, lineHeight: 1.65, margin: "0 0 16px" }}>
              Ты детектив финансовых преступлений. Собери только нужные улики и вынеси верный приговор мошенникам.
            </p>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              {[["4", "дела"], ["🔎", "улики"], ["⚖️", "вердикт"]].map(([v, l], i) => (
                <div key={i} style={{ flex: 1, background: "rgba(11,22,41,0.7)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 10, padding: "10px 8px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 700, color: "#EF4444" }}>{v}</div>
                  <div style={{ color: "#5A7A9A", fontSize: 10, marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
            <button onClick={() => setPhase("collect")} style={{ width: "100%", padding: "13px", borderRadius: 12, background: "linear-gradient(135deg, #B91C1C, #EF4444)", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>
              Взяться за дело
            </button>
          </div>
        </div>
      )}

      {(phase === "collect" || phase === "verdict") && (
        <div style={{ padding: "0 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ color: "#5A7A9A", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace" }}>Дело {caseIdx + 1} из {HEIST_CASES.length}</span>
            <span style={{ color: "#EF4444", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace" }}>Раскрыто: {solvedCount}</span>
          </div>
          <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 12, padding: "14px", marginBottom: 12 }}>
            <div style={{ color: "#EF4444", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", marginBottom: 6 }}>ДЕЛО: {currentCase.title}</div>
            <p style={{ color: "#B0C8E0", fontSize: 13, margin: 0, lineHeight: 1.55 }}>{currentCase.brief}</p>
          </div>
          <p style={{ color: "#5A7A9A", fontSize: 12, margin: "0 0 10px" }}>Выбери улики, доказывающие мошенничество:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
            {currentCase.evidence.map((e, i) => {
              const isChosen = selected.has(i);
              let bg = "rgba(11,22,41,0.85)", border = "rgba(34,130,240,0.12)", color = "#8BA3C0";
              if (phase === "verdict") {
                if (isChosen && e.isProof) { bg = "rgba(34,197,94,0.07)"; border = "rgba(34,197,94,0.4)"; color = "#22C55E"; }
                else if (isChosen && !e.isProof) { bg = "rgba(239,68,68,0.07)"; border = "rgba(239,68,68,0.4)"; color = "#EF4444"; }
                else if (!isChosen && e.isProof) { bg = "rgba(245,158,11,0.05)"; border = "rgba(245,158,11,0.25)"; color = "#F59E0B"; }
              } else if (isChosen) { bg = "rgba(239,68,68,0.08)"; border = "rgba(239,68,68,0.35)"; color = "#EEF2F8"; }
              return (
                <button key={i} onClick={() => phase === "collect" && toggleEvidence(i)}
                  style={{ width: "100%", padding: "11px 14px", borderRadius: 10, background: bg, border: `1px solid ${border}`, color, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12, textAlign: "left", cursor: phase === "collect" ? "pointer" : "default", display: "flex", alignItems: "center", gap: 8 }}>
                  {phase === "verdict"
                    ? <Icon name={isChosen && e.isProof ? "CheckCircle" : isChosen && !e.isProof ? "XCircle" : !isChosen && e.isProof ? "AlertCircle" : "Circle"} fallback="Circle" size={14} style={{ flexShrink: 0, color }} />
                    : <div style={{ width: 16, height: 16, borderRadius: 4, border: `2px solid ${isChosen ? "#EF4444" : "#3A5A7A"}`, background: isChosen ? "rgba(239,68,68,0.2)" : "transparent", flexShrink: 0 }} />
                  }
                  {e.text}
                </button>
              );
            })}
          </div>
          {phase === "collect" && selected.size >= currentCase.minProofs && (
            <button onClick={submitVerdict} style={{ width: "100%", padding: "13px", borderRadius: 12, background: "linear-gradient(135deg, #B91C1C, #EF4444)", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>
              Вынести вердикт →
            </button>
          )}
          {phase === "verdict" && (
            <button onClick={nextCase} style={{ width: "100%", padding: "13px", borderRadius: 12, background: enough ? "linear-gradient(135deg, #15803D, #22C55E)" : "rgba(239,68,68,0.15)", color: enough ? "#fff" : "#EF4444", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>
              {caseIdx + 1 < HEIST_CASES.length ? "Следующее дело →" : "Итоги дел →"}
            </button>
          )}
        </div>
      )}

      {phase === "result" && (
        <div style={{ padding: "0 16px" }}>
          <div style={{ background: solvedCount >= 3 ? "rgba(34,197,94,0.07)" : "rgba(245,158,11,0.07)", border: `1px solid ${solvedCount >= 3 ? "rgba(34,197,94,0.3)" : "rgba(245,158,11,0.3)"}`, borderRadius: 18, padding: "24px 18px", textAlign: "center" }}>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 52, fontWeight: 700, color: solvedCount >= 3 ? "#22C55E" : "#F59E0B", lineHeight: 1 }}>{solvedCount}/{HEIST_CASES.length}</div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 16, fontWeight: 600, color: "#EEF2F8", margin: "8px 0 4px" }}>
              {solvedCount >= 3 ? "Мастер-детектив!" : "Начинающий детектив"}
            </div>
            <p style={{ color: "#5A7A9A", fontSize: 12, margin: "0 0 18px", lineHeight: 1.55 }}>
              {solvedCount >= 3 ? "Ты раскрыл большинство дел. Мошенники за решёткой!" : "Некоторые дела остались нераскрытыми. Попробуй ещё раз."}
            </p>
            <button onClick={restart} style={{ width: "100%", padding: "13px", borderRadius: 12, background: "linear-gradient(135deg, #B91C1C, #EF4444)", color: "#fff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>
              Новые дела
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const GAME_AI_URL = "https://functions.poehali.dev/4df046ed-b5ef-426a-86ae-f4be83833cd4";

const GENRES = ["Квиз", "Детектив", "Симулятор", "Стратегия", "Хакинг", "Ролевая"];
const THEMES = ["Фишинг", "Финансовое мошенничество", "Кража данных", "Социальная инженерия", "Взлом аккаунтов", "Онлайн-пирамиды"];
const AUDIENCES = ["Дети 10-13 лет", "Молодёжь 14-25 лет", "Взрослые 25-45 лет", "Пожилые 55+"];

interface GameIdea {
  title: string;
  tagline: string;
  description: string;
  mechanics: string[];
  levels: string[];
  win_condition: string;
  educational_goal: string;
}

function GameDevScreen({ onBack }: { onBack: () => void }) {
  const [genre, setGenre] = useState(GENRES[0]);
  const [theme, setTheme] = useState(THEMES[0]);
  const [audience, setAudience] = useState(AUDIENCES[1]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GameIdea | null>(null);
  const [error, setError] = useState("");

  async function generate() {
    setLoading(true);
    setResult(null);
    setError("");
    try {
      const resp = await fetch(GAME_AI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ genre, theme, audience }),
      });
      const data = await resp.json();
      if (data.ok) { setResult(data.game); }
      else { setError("Нейросеть не ответила. Попробуй ещё раз."); }
    } catch {
      setError("Ошибка соединения. Попробуй позже.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ paddingBottom: 90 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 16px 14px" }}>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "#5A7A9A", padding: 0 }}>
          <Icon name="ChevronLeft" size={18} style={{ color: "#5A7A9A" }} />
          <span style={{ fontSize: 13, fontFamily: "'IBM Plex Sans', sans-serif" }}>Все игры</span>
        </button>
        <span style={{ color: "#3A5A7A" }}>·</span>
        <span style={{ color: "#34D399", fontSize: 13, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}>Разработка игры</span>
      </div>

      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Header */}
        <div style={{ background: "linear-gradient(135deg, rgba(52,211,153,0.12), rgba(11,22,41,0.95))", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 16, padding: "16px 18px", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 46, height: 46, borderRadius: 13, background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon name="Sparkles" fallback="Wand2" size={22} style={{ color: "#34D399" }} />
          </div>
          <div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 17, fontWeight: 700, color: "#EEF2F8" }}>ИИ-ГЕНЕРАТОР ИГР</div>
            <p style={{ color: "#5A7A9A", fontSize: 12, margin: 0, lineHeight: 1.4 }}>Задай параметры — нейросеть придумает концепцию</p>
          </div>
        </div>

        {/* Genre */}
        <div>
          <p style={{ color: "#5A7A9A", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 8px" }}>Жанр</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {GENRES.map(g => (
              <button key={g} onClick={() => setGenre(g)} style={{ padding: "7px 14px", borderRadius: 20, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "'IBM Plex Sans', sans-serif", background: genre === g ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.04)", color: genre === g ? "#34D399" : "#5A7A9A", border: `1px solid ${genre === g ? "rgba(52,211,153,0.4)" : "rgba(255,255,255,0.06)"}` }}>
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Theme */}
        <div>
          <p style={{ color: "#5A7A9A", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 8px" }}>Тема</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {THEMES.map(t => (
              <button key={t} onClick={() => setTheme(t)} style={{ padding: "7px 14px", borderRadius: 20, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "'IBM Plex Sans', sans-serif", background: theme === t ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.04)", color: theme === t ? "#34D399" : "#5A7A9A", border: `1px solid ${theme === t ? "rgba(52,211,153,0.4)" : "rgba(255,255,255,0.06)"}` }}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Audience */}
        <div>
          <p style={{ color: "#5A7A9A", fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 8px" }}>Аудитория</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {AUDIENCES.map(a => (
              <button key={a} onClick={() => setAudience(a)} style={{ padding: "7px 14px", borderRadius: 20, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "'IBM Plex Sans', sans-serif", background: audience === a ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.04)", color: audience === a ? "#34D399" : "#5A7A9A", border: `1px solid ${audience === a ? "rgba(52,211,153,0.4)" : "rgba(255,255,255,0.06)"}` }}>
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* Generate button */}
        <button onClick={generate} disabled={loading}
          style={{ width: "100%", padding: "14px", borderRadius: 14, background: loading ? "rgba(52,211,153,0.1)" : "linear-gradient(135deg, #059669, #34D399)", color: loading ? "#34D399" : "#fff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 15, border: loading ? "1px solid rgba(52,211,153,0.3)" : "none", cursor: loading ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          {loading
            ? <><Icon name="Loader" fallback="Loader" size={16} style={{ color: "#34D399" }} /> Генерирую идею...</>
            : <><Icon name="Sparkles" fallback="Wand2" size={16} /> Сгенерировать игру</>
          }
        </button>

        {error && (
          <div style={{ background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 12, padding: "12px 14px", color: "#EF4444", fontSize: 13 }}>{error}</div>
        )}

        {/* Result */}
        {result && (
          <div style={{ background: "rgba(11,22,41,0.9)", border: "1px solid rgba(52,211,153,0.25)", borderRadius: 16, padding: "18px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 700, color: "#34D399", marginBottom: 4 }}>{result.title}</div>
              <div style={{ color: "#8BA3C0", fontSize: 13, fontStyle: "italic" }}>"{result.tagline}"</div>
            </div>
            <p style={{ color: "#B0C8E0", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{result.description}</p>

            <div>
              <p style={{ color: "#34D399", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 8px" }}>Механики</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {result.mechanics.map((m, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <Icon name="Zap" fallback="Circle" size={12} style={{ color: "#34D399", marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: "#8BA3C0", fontSize: 12, lineHeight: 1.5 }}>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p style={{ color: "#34D399", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 8px" }}>Уровни</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {result.levels.map((l, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#34D399", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{i + 1}.</span>
                    <span style={{ color: "#8BA3C0", fontSize: 12, lineHeight: 1.5 }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(52,211,153,0.05)", border: "1px solid rgba(52,211,153,0.15)", borderRadius: 10, padding: "12px 14px" }}>
              <p style={{ color: "#34D399", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>Цель обучения</p>
              <p style={{ color: "#B0C8E0", fontSize: 12, lineHeight: 1.55, margin: 0 }}>{result.educational_goal}</p>
            </div>

            <button onClick={generate}
              style={{ width: "100%", padding: "11px", borderRadius: 10, background: "rgba(52,211,153,0.08)", color: "#34D399", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 13, border: "1px solid rgba(52,211,153,0.2)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <Icon name="RefreshCw" fallback="RefreshCw" size={14} />
              Сгенерировать ещё
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function GamesTab() {
  const [activeGame, setActiveGame] = useState<ActiveGame>(null);

  if (activeGame === "hunters") return <HuntersGame onBack={() => setActiveGame(null)} />;
  if (activeGame === "hacknet") return <HacknetGame onBack={() => setActiveGame(null)} />;
  if (activeGame === "shadows") return <ShadowsGame onBack={() => setActiveGame(null)} />;
  if (activeGame === "heist") return <HeistGame onBack={() => setActiveGame(null)} />;
  if (activeGame === "devmode") return <GameDevScreen onBack={() => setActiveGame(null)} />;

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

        {/* Dev button */}
        <button onClick={() => setActiveGame("devmode")}
          style={{ width: "100%", background: "linear-gradient(135deg, rgba(52,211,153,0.12), rgba(11,22,41,0.92))", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 16, padding: "14px 16px", display: "flex", alignItems: "center", gap: 14, textAlign: "left", cursor: "pointer" }}>
          <div style={{ width: 46, height: 46, borderRadius: 13, background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon name="Sparkles" fallback="Wand2" size={20} style={{ color: "#34D399" }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 15, fontWeight: 600, color: "#EEF2F8" }}>Разработка игры</span>
              <span style={{ padding: "1px 7px", borderRadius: 4, fontSize: 9, fontWeight: 700, background: "rgba(52,211,153,0.15)", color: "#34D399", fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.06em" }}>ИИ</span>
            </div>
            <p style={{ color: "#5A7A9A", fontSize: 11, margin: "0 0 4px", lineHeight: 1.4 }}>Нейросеть придумает концепцию твоей игры</p>
            <span style={{ fontSize: 10, color: "#34D399", fontFamily: "'IBM Plex Mono', monospace" }}>Жанр · Тема · Механики</span>
          </div>
          <Icon name="ChevronRight" size={16} style={{ color: "#34D399", flexShrink: 0 }} />
        </button>
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
        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 28, fontWeight: 700, color: "#2282F0", letterSpacing: "0.04em", marginBottom: 8 }}>8 913 114 88 01</div>
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

const RATING_DATA = [
  { place: 1, id: "#KS-00142", name: "CyberFox", game: "Охотники на мошенников", score: 4980, medal: "🥇" },
  { place: 2, id: "#KS-00087", name: "ShadowHunt", game: "Тени обмана", score: 4610, medal: "🥈" },
  { place: 3, id: "#KS-00315", name: "NetBreaker", game: "Hacknet", score: 4450, medal: "🥉" },
  { place: 4, id: "#KS-00229", name: "AgentX", game: "Афера", score: 4120, medal: null },
  { place: 5, id: "#KS-00503", name: "DigitalShield", game: "Охотники на мошенников", score: 3870, medal: null },
  { place: 6, id: "#KS-00011", name: "PhantomUser", game: "Тени обмана", score: 3640, medal: null },
  { place: 7, id: "#KS-00478", name: "HackMaster", game: "Hacknet", score: 3390, medal: null },
  { place: 8, id: "#KS-00192", name: "ScamBuster", game: "Афера", score: 3150, medal: null },
  { place: 9, id: "#KS-00356", name: "CyberGuard", game: "Охотники на мошенников", score: 2980, medal: null },
  { place: 10, id: "#KS-00044", name: "ProDetective", game: "Тени обмана", score: 2710, medal: null },
];

const GAME_COLORS: Record<string, string> = {
  "Охотники на мошенников": "#A855F7",
  "Hacknet": "#22D3EE",
  "Тени обмана": "#F59E0B",
  "Афера": "#EF4444",
};

function RatingTab() {
  return (
    <div style={{ paddingBottom: 90 }}>
      <div style={{ padding: "4px 16px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
          <div style={{ width: 3, height: 14, background: "#C9A84C", borderRadius: 2 }} />
          <span style={{ color: "#C9A84C", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.12em", textTransform: "uppercase" }}>Топ</span>
        </div>
        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 26, fontWeight: 700, color: "#EEF2F8", margin: "0 0 4px" }}>РЕЙТИНГ ИГР</h2>
        <p style={{ color: "#5A7A9A", fontSize: 12, margin: 0 }}>Лучшие игры</p>
      </div>

      {/* Top-3 podium */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, margin: "0 16px 20px", height: 110 }}>
        {[RATING_DATA[1], RATING_DATA[0], RATING_DATA[2]].map((p, i) => {
          const heights = [80, 110, 70];
          const colors = ["#9CA3AF", "#C9A84C", "#CD7F32"];
          return (
            <div key={p.id} style={{ flex: 1, height: heights[i], background: `linear-gradient(180deg, ${colors[i]}22, rgba(11,22,41,0.9))`, border: `1px solid ${colors[i]}40`, borderRadius: "10px 10px 0 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3 }}>
              <span style={{ fontSize: 18 }}>{p.medal}</span>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 12, fontWeight: 600, color: colors[i] }}>{p.name}</span>
              
            </div>
          );
        })}
      </div>

      {/* Full list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "0 16px" }}>
        {RATING_DATA.map((r) => {
          const gameColor = GAME_COLORS[r.game] || "#2282F0";
          const isTop3 = r.place <= 3;
          const isEmpty = r.place > 3;
          return (
            <div key={r.place} style={{ background: isTop3 ? `linear-gradient(135deg, ${gameColor}10, rgba(11,22,41,0.9))` : "rgba(11,22,41,0.5)", border: `1px solid ${isTop3 ? `${gameColor}30` : "rgba(255,255,255,0.04)"}`, borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: isTop3 ? `${gameColor}18` : "rgba(255,255,255,0.03)", border: `1px solid ${isTop3 ? `${gameColor}40` : "rgba(255,255,255,0.06)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {r.medal
                  ? <span style={{ fontSize: 16 }}>{r.medal}</span>
                  : <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, fontWeight: 700, color: "#2A3A50" }}>{r.place}</span>
                }
              </div>
              {isEmpty ? (
                <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ height: 10, width: 80, borderRadius: 4, background: "rgba(255,255,255,0.04)" }} />
                  <div style={{ height: 10, width: 50, borderRadius: 4, background: "rgba(255,255,255,0.03)" }} />
                </div>
              ) : (
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                    <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 600, color: "#EEF2F8" }}>{r.name}</span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#3A5A7A" }}>{r.id}</span>
                  </div>
                  <span style={{ padding: "1px 7px", borderRadius: 4, fontSize: 10, fontWeight: 600, background: `${gameColor}15`, color: gameColor, fontFamily: "'IBM Plex Mono', monospace" }}>{r.game}</span>
                </div>
              )}
              
            </div>
          );
        })}
      </div>

      <p style={{ textAlign: "center", margin: "16px 16px 0", color: "#3A5A7A", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", lineHeight: 1.6 }}>
        Обновляется каждые 24 часа · апрель 2025
      </p>
    </div>
  );
}

export default function Index() {
  const [tab, setTab] = useState<Tab>("home");

  const CONTENT: Record<Tab, JSX.Element> = {
    home: <HomeTab onNavigate={setTab} />,
    stats: <StatsTab />,
    education: (
      <div style={{ paddingBottom: 90 }}>
        <div style={{ padding: "4px 16px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
            <div style={{ width: 3, height: 14, background: "#2282F0", borderRadius: 2 }} />
            <span style={{ color: "#2282F0", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.12em", textTransform: "uppercase" }}>Курсы</span>
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 26, fontWeight: 700, color: "#EEF2F8", margin: "0 0 6px" }}>ОБУЧЕНИЕ</h2>
        </div>
        <div style={{ margin: "0 16px", background: "rgba(11,22,41,0.7)", border: "1px solid rgba(34,130,240,0.1)", borderRadius: 16, overflow: "hidden" }}>
          <div style={{ padding: "14px 16px 12px", borderBottom: "1px solid rgba(34,130,240,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Icon name="Play" size={14} style={{ color: "#2282F0" }} />
              <span style={{ color: "#B0C8E0", fontSize: 13, fontWeight: 600 }}>Масккод</span>
            </div>
          </div>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src="https://rutube.ru/play/embed/b06b10f0e63afd585c6e28e27f4d09cb/?p=abTEKBpWtiRRxKUsGzo3_w"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              allowFullScreen
              allow="clipboard-write; autoplay"
            />
          </div>
        </div>
      </div>
    ),
    games: <GamesTab />,
    support: <SupportTab />,
    pricing: <PricingTab />,
    rating: <RatingTab />,
  };

  return (
    <div style={{ background: "#060D1F", minHeight: "100dvh", maxWidth: 480, margin: "0 auto", position: "relative", fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* Status bar spacer */}
      <div style={{ height: "env(safe-area-inset-top, 0px)", background: "#060D1F" }} />

      {/* Top header */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(6,13,31,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(34,130,240,0.1)", padding: "12px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src="https://cdn.poehali.dev/projects/0f0e92f1-8c32-44b1-a5a4-d99f9d8f7d20/bucket/ff78346a-1bf2-491a-9614-879d513f7815.png" alt="logo" style={{ width: 34, height: 34, objectFit: "contain" }} />
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
                  gap: 3, padding: "8px 2px 8px", border: "none", background: "none", cursor: "pointer",
                  position: "relative", minWidth: 0,
                }}
              >
                {active && (
                  <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 20, height: 2, background: "#2282F0", borderRadius: "0 0 2px 2px" }} />
                )}
                <Icon name={n.icon} fallback="Circle" size={17} style={{ color: active ? "#2282F0" : "#3A5A7A" }} />
                <span style={{ fontSize: 9, fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: active ? 600 : 400, color: active ? "#2282F0" : "#3A5A7A", lineHeight: 1.2, textAlign: "center" }}>
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