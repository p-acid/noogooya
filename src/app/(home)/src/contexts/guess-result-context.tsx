"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

import { BaseballPlayer } from "@/consts/kbo-rosters";

const GuessResultContext = createContext<BaseballPlayer[]>([]);
const GuessResultActionContext = createContext<
  | {
      add: (player: BaseballPlayer) => void;
      clear: () => void;
    }
  | undefined
>(undefined);

export function GuessResultProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<BaseballPlayer[]>([]);

  const add = (player: BaseballPlayer) => {
    setList((prev) => [...prev, player]);
  };
  const clear = () => setList([]);

  return (
    <GuessResultContext.Provider value={list}>
      <GuessResultActionContext.Provider value={{ add, clear }}>
        {children}
      </GuessResultActionContext.Provider>
    </GuessResultContext.Provider>
  );
}

export function useGuessResult() {
  const value = useContext(GuessResultContext);
  const action = useContext(GuessResultActionContext);
  if (!action)
    throw new Error("useGuessResult must be used within GuessResultProvider");
  return { list: value, ...action };
}
