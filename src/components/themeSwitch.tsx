"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <></>;

  if (resolvedTheme === "dark") {
    return <button onClick={() => setTheme("light")}>Set Light 💡</button>;
  }

  if (resolvedTheme === "light") {
    return <button onClick={() => setTheme("dark")}>Set Dark 🌌</button>;
  }
}
