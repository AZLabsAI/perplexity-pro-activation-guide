"use client";

import { useEffect, useState } from "react";

const COPY_RESET_MS = 2200;

async function fallbackCopy(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

type CopyUrlBlockProps = {
  value: string;
  label: string;
  hint: string;
};

export function CopyUrlBlock({ value, label, hint }: CopyUrlBlockProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timer = window.setTimeout(() => setCopied(false), COPY_RESET_MS);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        await fallbackCopy(value);
      }

      setCopied(true);
    } catch {
      await fallbackCopy(value);
      setCopied(true);
    }
  };

  return (
    <div className="copy-block" role="group" aria-label={`Copy ${label}`}>
      <div className="copy-block__header">
        <span className="copy-block__eyebrow">{label}</span>
        <button
          className={`copy-block__button${copied ? " is-copied" : ""}`}
          onClick={handleCopy}
          type="button"
          aria-live="polite"
        >
          {copied ? "Copied" : "Copy URL"}
        </button>
      </div>

      <code className="copy-block__value">{value}</code>
      <p className="copy-block__hint">{hint}</p>
    </div>
  );
}
