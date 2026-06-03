import { useState } from "react";

const PLACEHOLDERS = {
  summary: "Write a short personal statement — who you are and what you bring to the table.",
  skill:   "Add a skill",
};

function SectionWrapper({ num, label, children }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="cv-section-num">{num}</span>
        <span className="cv-section-label">{label}</span>
        <div className="flex-1 h-px" style={{ background: 'var(--ink-5)' }} />
      </div>
      {children}
    </div>
  );
}

function SkillTag({ skill, onRemove }) {
  return (
    <span className="cv-skill-tag">
      {skill}
      <button
        onClick={onRemove}
        aria-label={`Remove ${skill}`}
        style={{
          color: 'var(--ink-4)',
          fontSize: '0.85rem',
          lineHeight: 1,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          transition: 'color 0.15s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#b83232')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-4)')}
      >
        ×
      </button>
    </span>
  );
}

export function Footer() {
  const [summary, setSummary] = useState("");
  const [skills,  setSkills]  = useState([]);
  const [draft,   setDraft]   = useState("");

  const addSkill = () => {
    const trimmed = draft.trim();
    if (trimmed && !skills.includes(trimmed)) setSkills((prev) => [...prev, trimmed]);
    setDraft("");
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") { e.preventDefault(); addSkill(); }
  };

  const removeSkill = (skill) => setSkills((prev) => prev.filter((s) => s !== skill));

  return (
    <div className="pb-12">
      <SectionWrapper num="03" label="About">
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder={PLACEHOLDERS.summary}
          aria-label="Personal summary"
          rows={3}
          className="cv-summary"
        />
      </SectionWrapper>

      <SectionWrapper num="04" label="Skills">
        <div className="flex flex-wrap gap-2 items-center">
          {skills.map((skill) => (
            <SkillTag key={skill} skill={skill} onRemove={() => removeSkill(skill)} />
          ))}
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleSkillKeyDown}
            onBlur={addSkill}
            placeholder={PLACEHOLDERS.skill}
            aria-label="Add skill"
            className="cv-skill-input"
          />
        </div>
        <p
          className="mt-3"
          style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-4)' }}
        >
          Press Enter or comma to add
        </p>
      </SectionWrapper>
    </div>
  );
}
