"use client";

import ChipBasic from "@/components/chips/basic";
import ThemeSwitch from "@/components/themeSwitch";
import { useBearStore } from "@/states/useBearStore";

export default function App() {
  // In order to make the store work, you have to create a client component!
  const bears = useBearStore((state) => state.bears);
  const increaseBears = useBearStore((state) => state.increase);

  return (
    <>
      <p className="text-2xl">App 🤗</p>
      <ThemeSwitch />
      <ChipBasic text={"Chip!"} backgroundColor={"Red!"} />
      <p>{bears}</p>
      <button onClick={increaseBears}>Increase the bears!</button>
    </>
  );
}
