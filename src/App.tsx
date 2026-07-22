import {
  ArrowRight,
  AudioWaveform,
  ChevronDown,
  Dot,
  Sparkles
} from "lucide-react";
import type { CSSProperties } from "react";
import {
  cornerMarks,
  dashboardStats,
  heroBadges,
  introNotes,
  previewCards,
  railItems,
  sidebarEntries
} from "./data/site";

export function App() {
  return (
    <div className="app-frame">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <aside className="rail">
        <div className="rail-top">
          {railItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                className={`rail-button${item.active ? " is-active" : ""}`}
                data-title={item.label}
                aria-current={item.active ? "page" : undefined}
                aria-label={item.label}
              >
                <span className="rail-pill" />
                <span
                  className="rail-avatar"
                  style={{ "--rail-accent": item.accent } as CSSProperties}
                >
                  <Icon size={18} strokeWidth={2.25} />
                </span>
              </button>
            );
          })}
        </div>

        <div className="rail-footer">
          <button type="button" className="rail-button utility" data-title="Звук">
            <span className="rail-pill" />
            <span className="rail-avatar muted">
              <AudioWaveform size={18} strokeWidth={2.25} />
            </span>
          </button>
        </div>
      </aside>

      <aside className="sidebar">
        <div className="sidebar-banner">
          <div className="sidebar-banner-overlay" />
          <div className="sidebar-brand">
            <div className="brand-glyph">
              <Sparkles size={18} strokeWidth={2.4} />
            </div>
            <div>
              <p className="eyebrow">TengokuFirst.ru</p>
              <h1>Главная</h1>
            </div>
          </div>
          <p className="sidebar-copy">
            Входная точка в личный хаб. Сейчас здесь собран стартовый экран и
            заложена будущая навигация.
          </p>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-section-header">
            <span>Разделы</span>
            <ChevronDown size={16} />
          </div>

          <button type="button" className="sidebar-link is-current">
            <span className="sidebar-link-icon">
              <Dot size={20} strokeWidth={2.5} />
            </span>
            <span>
              <strong>Главная</strong>
              <small>текущий экран</small>
            </span>
          </button>

          {sidebarEntries.map((entry) => {
            const Icon = entry.icon;

            return (
              <button
                key={entry.id}
                type="button"
                className={`sidebar-link is-${entry.state}`}
              >
                <span
                  className="sidebar-link-icon"
                  style={{ "--sidebar-accent": entry.accent } as CSSProperties}
                >
                  <Icon size={16} strokeWidth={2.2} />
                </span>
                <span>
                  <strong>{entry.label}</strong>
                  <small>{entry.description}</small>
                </span>
              </button>
            );
          })}
        </div>

        <div className="sidebar-section compact">
          <div className="sidebar-section-header">
            <span>Статус проекта</span>
          </div>

          <div className="status-list">
            {dashboardStats.map((stat) => (
              <div key={stat.label} className="status-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="topbar-label">Персональный хаб</p>
            <h2>Стартовый экран для выбора направления</h2>
          </div>
          <div className="topbar-pulse">desktop preview</div>
        </header>

        <section className="hero-panel">
          <div className="hero-copy">
            <div className="hero-badges">
              {heroBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>

            <h3>
              TengokuFirst.ru
              <br />
              как аккуратный хаб, а не просто набор ссылок
            </h3>

            <p>
              Главная уже работает как центральная точка входа: показывает
              настроение сайта, объясняет, что здесь будет, и мягко ведёт
              человека дальше по будущим разделам.
            </p>

            <div className="hero-actions">
              <button type="button" className="primary-action">
                Открыта главная
                <ArrowRight size={18} />
              </button>
              <span className="hero-hint">
                Левые кнопки и отдельные страницы подключим следующим этапом.
              </span>
            </div>
          </div>

          <div className="hero-aside">
            <div className="hero-aside-card">
              <p className="eyebrow">Что уже заложено</p>
              {introNotes.map((note) => (
                <div key={note.title} className="note-row">
                  <strong>{note.title}</strong>
                  <p>{note.body}</p>
                </div>
              ))}
            </div>

            <div className="hero-corners">
              {cornerMarks.map((mark) => {
                const Icon = mark.icon;

                return (
                  <div key={mark.label} className="corner-chip">
                    <Icon size={16} strokeWidth={2.3} />
                    <span>{mark.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="card-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Что можно будет открыть дальше</p>
              <h3>Будущие ветки уже показаны на главной</h3>
            </div>
            <p className="section-copy">
              Пока это preview-блоки, чтобы страница уже ощущалась как
              полноценный центр навигации.
            </p>
          </div>

          <div className="card-grid">
            {previewCards.map((card, index) => (
              <article
                key={card.id}
                className="preview-card"
                style={
                  {
                    "--card-accent": card.accent,
                    "--card-delay": `${index * 90}ms`
                  } as CSSProperties
                }
              >
                <div className="preview-card-glow" />
                <p className="eyebrow">{card.eyebrow}</p>
                <h4>{card.title}</h4>
                <p>{card.description}</p>

                <div className="preview-points">
                  {card.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
