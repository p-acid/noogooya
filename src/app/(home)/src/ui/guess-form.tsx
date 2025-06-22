"use client";

import React, { useState, useRef, useMemo, useCallback } from "react";
import { debounce } from "lodash-es";

import { BaseballPlayer, KBO_ROSTERS } from "@/consts/kbo-rosters";
import { useGuessResult } from "../contexts/guess-result-context";
import { PLAYER_POSITION_LABELS } from "@/consts/player-attributes";

export function GuessForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState("");

  const { add } = useGuessResult();

  const handleSubmit = (player: BaseballPlayer) => {
    add(player);

    if (inputRef.current) {
      inputRef.current.value = "";
      setValue("");
    }
  };

  const debouncedSearch = useMemo(
    () =>
      debounce(() => {
        setValue(inputRef.current?.value || "");
      }, 500),
    [],
  );

  const handleSearch = useCallback(() => {
    debouncedSearch();
  }, [debouncedSearch]);

  const searchResults = KBO_ROSTERS.filter((player) => {
    return player.name.includes(value);
  });

  return (
    <div className="relative w-full">
      <form className="flex w-full gap-2" autoComplete="off">
        <input
          ref={inputRef}
          id="guess-input"
          className="input input-bordered input-lg w-full"
          type="text"
          placeholder="정답을 입력하세요"
          autoComplete="off"
          onChange={handleSearch}
        />
      </form>

      {value && searchResults.length > 0 && (
        <ul className="bg-base-300 text-base-content absolute right-0 left-0 z-10 mt-1 flex max-h-60 flex-col gap-1 overflow-y-auto rounded border py-1">
          {searchResults.map((player) => (
            <li
              key={Object.values(player).join("-")}
              className="hover:bg-base-100 flex cursor-pointer items-center justify-between px-4 py-2.5"
              onClick={() => {
                handleSubmit(player);
              }}
            >
              <span className="flex items-center gap-1 text-base">
                {player.name}
                <span className="text-gray-400">({player.team})</span>
              </span>
              <div className="text-base">
                {PLAYER_POSITION_LABELS[player.position]}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
