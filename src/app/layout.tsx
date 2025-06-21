import "../styles/globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

import { MainLayout } from "@/layouts/main-layout";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.ttf",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "누구야",
  description: "KBO 선수 중 누구인지 맞춰보세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
