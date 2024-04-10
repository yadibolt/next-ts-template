// "use client";

import ChipBasic from "@/components/chips/basic";
import { useBearStore } from "@/states/useBearStore";

export default async function App() {
  // In order to make the store work, you have to create a client component!
  // const bears = useBearStore((state) => state.bears);
  // const increaseBears = useBearStore((state) => state.increase);

  const request = await fetch("http://localhost:8080/", { cache: "no-store" });
  const data = await request.json();

  if (!data.result)
    return (
      <>
        <p>No data found.</p>
      </>
    );

  return (
    <>
      <p>App 🤗 {data.result}</p>
      <ChipBasic text={"Chip!"} backgroundColor={"Red!"} />
      {/*<p>{bears}</p>
      <button onClick={increaseBears}>Increase the bears!</button> */}
    </>
  );
}
