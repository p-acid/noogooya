import { PropsWithChildren } from "react";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <div className="bg-base-300 py-4 text-center text-xl font-bold tracking-tighter">
        누구야⚾
      </div>
      <div className="mx-auto h-full w-full max-w-lg">{children}</div>
    </div>
  );
}
