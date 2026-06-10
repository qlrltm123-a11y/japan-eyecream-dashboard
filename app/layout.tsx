import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "일본 아이크림 시장 대시보드",
  description: "올리브영 PB 아이크림 일본 진출 시장조사 & 전략 대시보드",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Nav />
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <footer className="text-center text-xs text-slate-400 py-8">
          데이터 출처: 리스닝마인드(올리브영PB), 富士経済, GII, 마이나비, LIPS, @cosme, PR TIMES, Qoo10 등 - 2026.06 업데이트
        </footer>
      </body>
    </html>
  );
}
