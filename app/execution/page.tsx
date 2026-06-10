import { executionPlan } from "@/lib/data";
import { GlossaryBox } from "@/components/GlossaryBox";

const plans = [executionPlan.qoo10, executionPlan.rakuten, executionPlan.performance];

export default function ExecutionPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">실행 플랜</h1>
        <p className="text-slate-500">
          '검색 인사이트'에서 확인한 소비자 행동 데이터를, 우리 팀이 직접 운영하는
          Qoo10·라쿠텐 운영과 퍼포먼스 마케팅(온라인 광고)에 어떻게 적용할지 정리한 페이지입니다.
          각 항목마다 <b>왜 그렇게 하는지(근거 인사이트)</b>와 <b>구체적으로 무엇을 하는지(액션)</b>를 짝지어 보여줍니다.
        </p>
      </section>

      <GlossaryBox terms={["keywordPlus", "rpp", "megawari", "ugc", "point"]} />

      {plans.map((plan) => (
        <section key={plan.title}>
          <h2 className="section-title">{plan.title}</h2>
          <div className="bg-rose-50 border border-rose-100 rounded-xl px-4 py-3 mb-4 text-sm text-slate-700">
            <b className="text-primary">핵심 방향:</b> {plan.insight}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {plan.items.map((item) => (
              <div key={item.area} className="card">
                <div className="font-bold text-slate-800 mb-2">{item.area}</div>
                <div className="text-xs text-sky-700 bg-sky-50 border border-sky-100 rounded-lg px-2 py-1.5 mb-2">
                  <b>근거 인사이트:</b> {item.insight}
                </div>
                <div className="text-sm text-slate-600 leading-relaxed">
                  <b className="text-slate-800">액션:</b> {item.action}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
