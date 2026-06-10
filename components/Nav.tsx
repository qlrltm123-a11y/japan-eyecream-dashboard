"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "개요" },
  { href: "/search-insights", label: "검색 인사이트" },
  { href: "/cep-ugc", label: "CEP & UGC" },
  { href: "/competitors", label: "경쟁 환경" },
  { href: "/sns", label: "SNS 분석" },
  { href: "/channels", label: "채널 전략" },
  { href: "/execution", label: "실행 플랜" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-extrabold text-lg text-primary">
            일본 아이크림 시장 대시보드
          </div>
          <div className="flex gap-1 overflow-x-auto">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    active
                      ? "bg-primary text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
