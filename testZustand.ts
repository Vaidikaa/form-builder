import { create } from "zustand";

const useTestStore = create(() => ({ test: "Hello Zustand!" }));

console.log("Test Zustand:", useTestStore.getState());
