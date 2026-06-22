import { positioningData } from "@/lib/positioningData";

const matchColor: Record<string, string> = {
  "대응": "bg-emerald-100 text-emerald-700",
  "부분대응": "bg-amber-100 text-amber-700",
  "공백": "bg-rose-100 text-primary",
};

export default function PositioningPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">포지셔닝 전략</h1>
        <p className="text-slate-500">
          리스닝마인드 검색 욕구(CEP)와 자사 프로바이오덤 제품설명서(성분·카피)를 매칭한 갭 분석입니다.
        </p>
        <div className="mt-3 bg-rose-50 border border-rose-100 rounded-xl px-4 py-3 text-sm text-slate-700">
          <b className="text-primary">핵심 발견:</b> {positioningData.summary}
        </div>
      </section>

      <section>
        <h2 className="section-title">CEP별 대응 현황</h2>
        <p className="text-sm text-slate-500 mb-3">
          '대응'은 현재 카피가 검색 욕구를 잘 커버하는 상태, '부분대응'은 관련 워딩은 있으나 핵심 키워드가 빠진 상태, '공백'은 대응하는 제품·카피가 전혀 없는 상태입니다.
        </p>
        <div className="space-y-4">
          {positioningData.cepMatches.map((m) => (
            <div key={m.cepId} className="card">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <div className="font-bold text-slate-800">
                  {m.cepId} · {m.cepTitle}
                </div>
                <span className={`badge ${matchColor[m.matchLevel] ?? "bg-slate-100 text-slate-600"}`}>
                  {m.matchLevel}
                </span>
              </div>
              {m.matchedProducts.length > 0 && (
                <div className="text-xs text-slate-400 mb-2">
                  관련 제품: {m.matchedProducts.join(", ")}
                </div>
              )}
              <div className="text-sm text-slate-600 mb-2">
                <span className="font-semibold text-slate-700">현재 카피: </span>
                {m.currentCopy}
              </div>
              {m.gapReason && (
                <div className="text-sm text-slate-600 mb-2">
                  <span className="font-semibold text-slate-700">갭 이유: </span>
                  {m.gapReason}
                </div>
              )}
              <div className="text-sm bg-slate-50 rounded-lg px-3 py-2 text-slate-700">
                <span className="font-semibold text-primary">제안 카피: </span>
                {m.recommendedMessage}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">성분 × CEP 매핑</h2>
        <div className="card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400 border-b">
                <th className="py-2 pr-4">성분/기술</th>
                <th className="py-2 pr-4">관련 CEP</th>
                <th className="py-2 pr-4">설명</th>
              </tr>
            </thead>
            <tbody>
              {positioningData.ingredientCepMap.map((i) => (
                <tr key={i.ingredient} className="border-b last:border-0">
                  <td className="py-2 pr-4 font-semibold whitespace-nowrap">{i.ingredient}</td>
                  <td className="py-2 pr-4 whitespace-nowrap">
                    {i.relatedCeps.map((c) => (
                      <span key={c} className="badge bg-rose-100 text-primary mr-1">
                        {c}
                      </span>
                    ))}
                  </td>
                  <td className="py-2 pr-4 text-slate-600 text-xs">{i.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">실행 제안</h2>
        <div className="space-y-3">
          {positioningData.recommendations.map((r, i) => (
            <div key={r.title} className="card flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-extrabold">
                {i + 1}
              </div>
              <div>
                <div className="font-bold text-slate-800">{r.title}</div>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
