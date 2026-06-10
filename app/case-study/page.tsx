import { caseStudy } from "@/lib/data";

export default function CaseStudyPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">케이스 스터디</h1>
        <p className="text-slate-500">바이오힐보 아이크림 - 무광고/무인플루언서로 Qoo10 카테고리 1위 달성 원인 분석</p>
      </section>

      <section className="card">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-xl font-extrabold text-slate-900">{caseStudy.product}</div>
            <div className="text-sm text-slate-500 mt-1">{caseStudy.ranking}</div>
            <span className="badge bg-rose-100 text-primary mt-2">{caseStudy.nickname}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center shrink-0">
            <div>
              <div className="text-2xl font-extrabold text-slate-900">{caseStudy.qoo10Sales.toLocaleString()}</div>
              <div className="text-xs text-slate-500">Qoo10 판매</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">{caseStudy.qoo10Rating}</div>
              <div className="text-xs text-slate-500">평점</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">{caseStudy.qoo10Reviews.toLocaleString()}</div>
              <div className="text-xs text-slate-500">Qoo10 리뷰</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">{caseStudy.lipsReviews.toLocaleString()}</div>
              <div className="text-xs text-slate-500">LIPS 리뷰</div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {caseStudy.ingredients.map((ing) => (
            <span key={ing} className="badge bg-slate-100 text-slate-600">{ing}</span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">성공 원인 분석 (5가지)</h2>
        <div className="space-y-4">
          {caseStudy.reasons.map((r, i) => (
            <div key={r.title} className="card flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-extrabold">
                {i + 1}
              </div>
              <div>
                <div className="font-bold text-slate-800">{r.title}</div>
                <div className="text-sm text-slate-600 mt-1">{r.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">리스크</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudy.risks.map((risk) => (
            <div key={risk} className="card border-l-4 border-amber-400">
              <div className="text-sm text-slate-700">{risk}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">권장 액션</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {caseStudy.actions.map((action, i) => (
            <div key={action} className="card border-l-4 border-emerald-400">
              <div className="text-xs text-slate-400 mb-1">ACTION {i + 1}</div>
              <div className="text-sm text-slate-700 font-medium">{action}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
