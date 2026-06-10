import { competitors, priceTiers, dataReliability } from "@/lib/data";

const tierColor: Record<string, string> = {
  "프리미엄": "bg-purple-100 text-purple-700",
  "미드레인지": "bg-blue-100 text-blue-700",
  "울트라 프리미엄": "bg-violet-100 text-violet-700",
  "가성비": "bg-emerald-100 text-emerald-700",
  "K-뷰티 (라쿠텐 1위)": "bg-rose-100 text-primary",
  "K-뷰티": "bg-rose-100 text-primary",
};

export default function CompetitorsPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">경쟁 환경</h1>
        <p className="text-slate-500">2025년 일본 아이크림 시장 주요 신제품 동향과 가격대별 포지셔닝 맵</p>
      </section>

      <section>
        <h2 className="section-title">최근 신제품 동향</h2>
        <div className="card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400 border-b">
                <th className="py-2 pr-4">브랜드</th>
                <th className="py-2 pr-4">제품</th>
                <th className="py-2 pr-4">출시일</th>
                <th className="py-2 pr-4">가격</th>
                <th className="py-2 pr-4">핵심 성분</th>
                <th className="py-2 pr-4">티어</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c) => (
                <tr key={c.brand + c.product} className="border-b last:border-0">
                  <td className="py-2 pr-4 font-semibold">{c.brand}</td>
                  <td className="py-2 pr-4">{c.product}</td>
                  <td className="py-2 pr-4 text-slate-500">{c.date}</td>
                  <td className="py-2 pr-4">{c.price}</td>
                  <td className="py-2 pr-4 text-slate-500 text-xs">{c.ingredient}</td>
                  <td className="py-2 pr-4">
                    <span className={`badge ${tierColor[c.tier] ?? "bg-slate-100 text-slate-600"}`}>
                      {c.tier}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">가격대별 포지셔닝</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {priceTiers.map((t) => (
            <div
              key={t.tier}
              className={`card ${t.tier.includes("K-뷰티") ? "ring-2 ring-primary" : ""}`}
            >
              <div className="font-bold text-slate-800">{t.tier}</div>
              {t.tier.includes("K-뷰티") && (
                <span className="badge bg-rose-100 text-primary mt-1">권장 포지션</span>
              )}
              <div className="text-sm text-slate-500 mt-2">{t.brands}</div>
              <div className="text-xs text-slate-400 mt-2">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">데이터 신뢰도 (교차 검증)</h2>
        <div className="card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400 border-b">
                <th className="py-2 pr-4">주장</th>
                <th className="py-2 pr-4">근거 1</th>
                <th className="py-2 pr-4">근거 2</th>
                <th className="py-2 pr-4">신뢰도</th>
              </tr>
            </thead>
            <tbody>
              {dataReliability.map((d) => (
                <tr key={d.claim} className="border-b last:border-0">
                  <td className="py-2 pr-4 font-semibold">{d.claim}</td>
                  <td className="py-2 pr-4 text-slate-500 text-xs">{d.source1}</td>
                  <td className="py-2 pr-4 text-slate-500 text-xs">{d.source2}</td>
                  <td className="py-2 pr-4">
                    <span className="badge bg-emerald-100 text-emerald-700">{d.confidence}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
