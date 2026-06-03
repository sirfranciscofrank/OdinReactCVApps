import { useState } from "react";

const PLACEHOLDERS = {
  education: {
    school: "Institution Name",
    title:  "Degree / Certificate",
    date:   "2020 – 2024",
  },
  experience: {
    company:          "Company Name",
    position:         "Position Title",
    responsibilities: "Describe your main responsibilities and key achievements…",
    from:             "Jan 2022",
    until:            "Present",
  },
};

// ── Shared section chrome ──────────────────────────────────────────────────────

function SectionWrapper({ num, label, children, onAdd, addLabel }) {
  return (
    <div className="mb-9">
      <div className="flex items-center gap-3 mb-5">
        <span className="cv-section-num">{num}</span>
        <span className="cv-section-label">{label}</span>
        <div className="flex-1 h-px" style={{ background: 'var(--ink-5)' }} />
      </div>
      {children}
      <button onClick={onAdd} className="cv-add-btn mt-1">
        + {addLabel}
      </button>
    </div>
  );
}

// ── Education ──────────────────────────────────────────────────────────────────

function EducationEntry({ entry, onChange, onRemove }) {
  return (
    <div className="entry-group mb-5">
      <div className="flex items-baseline justify-between gap-4">
        <input
          name="school"
          value={entry.school}
          onChange={(e) => onChange(entry.id, e)}
          placeholder={PLACEHOLDERS.education.school}
          aria-label="School name"
          className="cv-entry-name flex-1"
        />
        <input
          name="date"
          value={entry.date}
          onChange={(e) => onChange(entry.id, e)}
          placeholder={PLACEHOLDERS.education.date}
          aria-label="Date of study"
          className="cv-entry-date shrink-0"
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <input
          name="title"
          value={entry.title}
          onChange={(e) => onChange(entry.id, e)}
          placeholder={PLACEHOLDERS.education.title}
          aria-label="Title of study"
          className="cv-entry-sub flex-1"
        />
        <button onClick={() => onRemove(entry.id)} className="cv-remove-btn">
          remove
        </button>
      </div>
    </div>
  );
}

export function EducationSection() {
  const [entries, setEntries] = useState([
    { id: 1, school: "", title: "", date: "" },
  ]);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setEntries((prev) => prev.map((en) => (en.id === id ? { ...en, [name]: value } : en)));
  };
  const addEntry    = () => setEntries((prev) => [...prev, { id: Date.now(), school: "", title: "", date: "" }]);
  const removeEntry = (id) => setEntries((prev) => prev.filter((en) => en.id !== id));

  return (
    <SectionWrapper num="01" label="Education" onAdd={addEntry} addLabel="Add Education">
      {entries.map((entry) => (
        <EducationEntry key={entry.id} entry={entry} onChange={handleChange} onRemove={removeEntry} />
      ))}
    </SectionWrapper>
  );
}

// ── Experience ─────────────────────────────────────────────────────────────────

function ExperienceEntry({ entry, onChange, onRemove }) {
  return (
    <div className="entry-group mb-6">
      <div className="flex items-baseline justify-between gap-4">
        <input
          name="company"
          value={entry.company}
          onChange={(e) => onChange(entry.id, e)}
          placeholder={PLACEHOLDERS.experience.company}
          aria-label="Company name"
          className="cv-entry-name flex-1"
        />
        <div className="flex items-baseline gap-1 shrink-0">
          <input
            name="from"
            value={entry.from}
            onChange={(e) => onChange(entry.id, e)}
            placeholder={PLACEHOLDERS.experience.from}
            aria-label="Start date"
            className="cv-entry-date"
          />
          <span style={{ color: 'var(--ink-4)', fontSize: '0.75rem' }}>–</span>
          <input
            name="until"
            value={entry.until}
            onChange={(e) => onChange(entry.id, e)}
            placeholder={PLACEHOLDERS.experience.until}
            aria-label="End date"
            className="cv-entry-date"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <input
          name="position"
          value={entry.position}
          onChange={(e) => onChange(entry.id, e)}
          placeholder={PLACEHOLDERS.experience.position}
          aria-label="Position title"
          className="cv-entry-sub flex-1"
        />
        <button onClick={() => onRemove(entry.id)} className="cv-remove-btn">
          remove
        </button>
      </div>

      <textarea
        name="responsibilities"
        value={entry.responsibilities}
        onChange={(e) => onChange(entry.id, e)}
        placeholder={PLACEHOLDERS.experience.responsibilities}
        aria-label="Responsibilities"
        rows={3}
        className="cv-resp mt-2"
      />
    </div>
  );
}

export function ExperienceSection() {
  const [entries, setEntries] = useState([
    { id: 1, company: "", position: "", responsibilities: "", from: "", until: "" },
  ]);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setEntries((prev) => prev.map((en) => (en.id === id ? { ...en, [name]: value } : en)));
  };
  const addEntry    = () => setEntries((prev) => [...prev, { id: Date.now(), company: "", position: "", responsibilities: "", from: "", until: "" }]);
  const removeEntry = (id) => setEntries((prev) => prev.filter((en) => en.id !== id));

  return (
    <SectionWrapper num="02" label="Experience" onAdd={addEntry} addLabel="Add Experience">
      {entries.map((entry) => (
        <ExperienceEntry key={entry.id} entry={entry} onChange={handleChange} onRemove={removeEntry} />
      ))}
    </SectionWrapper>
  );
}
