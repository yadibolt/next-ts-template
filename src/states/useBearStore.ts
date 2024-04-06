// We use Zustand as our state manager
// https://github.com/pmndrs/zustand/
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface BearState {
  bears: number;
  increase: () => void;
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: () => set((state) => ({ bears: state.bears + 1 })),
      }),
      {
        name: "bear-storage",
      },
    ),
  ),
);
