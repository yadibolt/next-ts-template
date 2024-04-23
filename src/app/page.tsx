"use client";

import ChipBasic from "@/components/chips/basic";
import { useBearStore } from "@/states/useBearStore";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export default function App() {
  // We use ReactQuery
  // Docs: https://tanstack.com/query/latest/docs/framework/react/overview
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <InitialComponent />
      </QueryClientProvider>
    </>
  );
}

function InitialComponent() {
  // Zustand states
  const bears = useBearStore((state) => state.bears);
  const increaseBears = useBearStore((state) => state.increase);

  const { isLoading, data, error } = useQuery({
    queryKey: ["myInitialKey", "mySecondaryDynamicKey"],
    queryFn: () =>
      fetch("http://localhost:8080/", { cache: "no-store" }).then((result) => {
        if (!result.ok) {
          throw new Error("Failed to fetch.");
        }
        return result.json();
      }),
  });

  return (
    <>
      <p>App 🤗 {data?.result}</p>
      <ChipBasic text={"Chip!"} backgroundColor={"Red!"} />
      <p>{bears}</p>
      <button onClick={increaseBears}>Increase the bears!</button>
    </>
  );
}
