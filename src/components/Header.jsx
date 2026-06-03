import { useState } from "react";

const PLACEHOLDERS = {
  firstName:   "First Name",
  lastName:    "Last Name",
  jobPosition: "Position or Role",
  phoneNumber: "+1 234 567 8901",
  email:       "name@email.com",
  location:    "City, Country",
};

const contactFields = [
  { name: "phoneNumber", label: "Phone",    width: "8rem"  },
  { name: "email",       label: "Email",    width: "10rem", type: "email" },
  { name: "location",    label: "Location", width: "8rem"  },
];

export function Header() {
  const [info, setInfo] = useState({
    firstName: "", lastName: "", jobPosition: "",
    phoneNumber: "", email: "", location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mb-10 pb-8" style={{ borderBottom: '1px solid var(--ink-5)' }}>
      {/* Name */}
      <div className="flex items-end gap-3">
        {["firstName", "lastName"].map((field) => (
          <input
            key={field}
            name={field}
            value={info[field]}
            onChange={handleChange}
            placeholder={PLACEHOLDERS[field]}
            aria-label={field === "firstName" ? "First name" : "Last name"}
            className="cv-name"
          />
        ))}
      </div>

      {/* Ornamental divider */}
      <div className="cv-ornament">
        <div className="cv-ornament-line" />
        <span className="cv-ornament-diamond">◆</span>
        <div className="cv-ornament-line" />
      </div>

      {/* Position */}
      <input
        name="jobPosition"
        value={info.jobPosition}
        onChange={handleChange}
        placeholder={PLACEHOLDERS.jobPosition}
        aria-label="Job position"
        className="cv-position w-full mb-5"
      />

      {/* Contact row */}
      <div className="flex items-center flex-wrap">
        {contactFields.map((field, i) => (
          <span key={field.name} className="flex items-center">
            {i > 0 && (
              <span
                className="mx-4 select-none"
                style={{ color: 'var(--terra-l)', fontSize: '0.4rem' }}
              >
                ◆
              </span>
            )}
            <input
              name={field.name}
              value={info[field.name]}
              onChange={handleChange}
              placeholder={PLACEHOLDERS[field.name]}
              aria-label={field.label}
              type={field.type || "text"}
              className="cv-contact"
              style={{ width: field.width }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
