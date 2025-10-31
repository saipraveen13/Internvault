import { useState } from "react";
import styles from "./prompt.module.css";

export function Prompt() {
  const [copied, setCopied] = useState(false);

  const textToCopy =
    "Hi there! You can contact me at contact@example.com or visit my LinkedIn profile.";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className={styles.card}>
      <p className={styles.text}>{textToCopy}</p>
      <button className={styles.copyBtn} onClick={handleCopy}>
        {copied ? "✅ Copied!" : "📋 Copy"}
      </button>
    </div>
  );
}
