"use client";

import ChipBasic from "@/components/chips/basic";
import { useBearStore } from "@/states/useBearStore";

export default function App() {
  // In order to make the store work, you have to create a client component!
  const bears = useBearStore((state) => state.bears);
  const increaseBears = useBearStore((state) => state.increase);

  return (
    <>
      <p>App 🤗</p>
      <ChipBasic text={"Chip!"} backgroundColor={"Red!"} />
      <p>{bears}</p>
      <button onClick={increaseBears}>Increase the bears!</button>
    </>
  );
}
