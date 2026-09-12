"use client";

import { useState, useEffect } from "react";

const greetings = [
  { text: "Hi, I'm", lang: "English", font: "font-sans font-medium tracking-wide" },
  { text: "नमस्ते, मैं हूँ", lang: "Hindi", font: "font-sans font-semibold" },
  { text: "Hola, soy", lang: "Spanish", font: "italic font-serif" },
  { text: "Bonjour, je suis", lang: "French", font: "font-serif tracking-wider" },
  { text: "こんにちは、私は", lang: "Japanese", font: "font-sans font-bold" },
  { text: "Ciao, sono", lang: "Italian", font: "italic font-sans" },
  { text: "안녕하세요, 저는", lang: "Korean", font: "font-sans font-semibold" },
  { text: "مرحبًا، أنا", lang: "Arabic", font: "font-serif" },
];

export function DynamicGreeting() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % greetings.length);
        setVisible(true);
      }, 300);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className={`text-sm text-white/50 mb-3 tracking-wide uppercase transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
      } ${greetings[index].font}`}
    >
      {greetings[index].text}
    </p>
  );
}