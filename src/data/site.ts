import type { LucideIcon } from "lucide-react";
import {
  BookMarked,
  Gem,
  Home,
  Mail,
  PanelsTopLeft,
  Sparkles,
  UserRound
} from "lucide-react";

export type RailItem = {
  id: string;
  label: string;
  shortLabel: string;
  accent: string;
  icon: LucideIcon;
  active?: boolean;
};

export type SidebarEntry = {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  state: "active" | "planned";
};

export type PreviewCard = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  accent: string;
};

export const railItems: RailItem[] = [
  {
    id: "home",
    label: "Главная",
    shortLabel: "TF",
    accent: "var(--accent-blue)",
    icon: Home,
    active: true
  },
  {
    id: "resources",
    label: "Ресурсы",
    shortLabel: "R",
    accent: "var(--accent-cyan)",
    icon: PanelsTopLeft
  },
  {
    id: "contacts",
    label: "Контакты",
    shortLabel: "C",
    accent: "var(--accent-amber)",
    icon: Mail
  },
  {
    id: "creator",
    label: "О создателе",
    shortLabel: "ME",
    accent: "var(--accent-coral)",
    icon: UserRound
  }
];

export const sidebarEntries: SidebarEntry[] = [
  {
    id: "resources",
    label: "Ресурсы",
    description: "Места, ссылки и полезные площадки",
    icon: BookMarked,
    accent: "var(--accent-cyan)",
    state: "planned"
  },
  {
    id: "contacts",
    label: "Контакты",
    description: "Как написать и где меня найти",
    icon: Mail,
    accent: "var(--accent-amber)",
    state: "planned"
  },
  {
    id: "creator",
    label: "О Создателе",
    description: "Немного обо мне и моих интересах",
    icon: UserRound,
    accent: "var(--accent-coral)",
    state: "planned"
  }
];

export const previewCards: PreviewCard[] = [
  {
    id: "resources",
    eyebrow: "Ресурсы",
    title: "В одном месте всё важное",
    description:
      "Соберу сюда ссылки, площадки, подборки и удобные переходы без каши и потери контекста.",
    points: ["основные ссылки", "полезные подборки", "быстрый доступ"],
    accent: "var(--accent-cyan)"
  },
  {
    id: "contacts",
    eyebrow: "Контакты",
    title: "Нормальная связь без поиска",
    description:
      "Отдельный раздел под способы связи, чтобы человек сразу понимал, куда лучше писать и зачем.",
    points: ["основной канал", "ответы и статусы", "важные заметки"],
    accent: "var(--accent-amber)"
  },
  {
    id: "creator",
    eyebrow: "О Создателе",
    title: "Личное, но без перегруза",
    description:
      "Коротко и стильно покажем, кто я, чем занимаюсь и какие темы на сайте вообще будут раскрываться дальше.",
    points: ["био", "интересы", "будущие ветки"],
    accent: "var(--accent-coral)"
  }
];

export const dashboardStats = [
  { label: "Активная зона", value: "Главная" },
  { label: "Готово сейчас", value: "1 экран" },
  { label: "Следующий шаг", value: "иконки и разделы" }
];

export const heroBadges = ["desktop first", "discord-like vibe", "hub skeleton"];

export const introNotes = [
  {
    title: "Чистая стартовая точка",
    body: "Главная сразу задаёт настроение и объясняет, что именно человек сможет открыть дальше."
  },
  {
    title: "Анимации без перегиба",
    body: "Наведение, glow и плавные появления уже заложены, но без ощущения дешёвого эффекта ради эффекта."
  }
];

export const cornerMarks = [
  {
    icon: Sparkles,
    label: "вход в хаб"
  },
  {
    icon: Gem,
    label: "дальше будет глубже"
  }
];
