import { ingredientStrategy, quickWins, roadmap, kpiDashboard } from "@/lib/data";
import { GlossaryBox } from "@/components/GlossaryBox";

export default function StrategyPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">전략</h1>
        <p className="text-slate-500">성분 전략, 우선순위 액션(ICE Score), 단계별 로드맵, KPI 대시보드</p>
      </section>

      <section>
        <h2 className="section-title">성분 전략</h2>
        <p className="text-sm text-slate-500 mb-3">
          위 '검색 인사이트'에서 일본 소비자들이 많이 찾는 키워드와 고민(다크서클·주름·건조 등)에 맞춰,
          어떤 성분을 강조해서 제품을 만들고 마케팅할지 정리한 표입니다. 별(★) 개수가 많을수록 우선순위가 높습니다.
        </p>
        <div className="card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400 border-b">
                <th className="py-2 pr-4">성분</th>
                <th className="py-2 pr-4">포인트</th>
                <th className="py-2 pr-4">타겟</th>
                <th className="py-2 pr-4">우선순위</th>
              </tr>
            </thead>
            <tbody>
              {ingredientStrategy
                .slice()
                .sort((a, b) => b.priority - a.priority)
                .map((ing) => (
                  <tr key={ing.ingredient} className="border-b last:border-0">
                    <td className="py-2 pr-4 font-semibold">{ing.ingredient}</td>
                    <td className="py-2 pr-4 text-slate-500 text-xs">{ing.point}</td>
                    <td className="py-2 pr-4 text-slate-500 text-xs">{ing.target}</td>
                    <td className="py-2 pr-4">
                      {"*".repeat(ing.priority)}
                      <span className="text-slate-200">{"*".repeat(3 - ing.priority)}</span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">Quick Win 액션 (ICE Score)</h2>
        <GlossaryBox terms={["ice"]} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickWins.map((qw) => (
            <div key={qw.id} className="card">
              <div className="flex items-center justify-between mb-2">
                <span className="badge bg-rose-100 text-primary">{qw.id}</span>
                <span className="text-lg font-extrabold text-accent">ICE {qw.ice}</span>
              </div>
              <div className="font-semibold text-slate-800">{qw.title}</div>
              <div className="text-xs text-slate-500 mt-2">KPI: {qw.kpi}</div>
              <div className="mt-3">
                <span className="badge bg-amber-100 text-amber-700">{qw.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">단계별 로드맵</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roadmap.map((phase) => (
            <div key={phase.phase} className="card">
              <div className="font-bold text-slate-800 mb-3">{phase.phase}</div>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="text-sm text-slate-600 flex gap-2">
                    <span className="text-primary">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">KPI 대시보드</h2>
        <p className="text-sm text-slate-500 mb-3">
          KPI(Key Performance Indicator, 핵심 성과 지표)는 '이 전략이 잘 되고 있는지'를 숫자로 확인하기 위한 목표치입니다.
          3개월/6개월 뒤 이 숫자에 도달했는지를 보면 성공 여부를 판단할 수 있습니다.
        </p>
        <div className="card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400 border-b">
                <th className="py-2 pr-4">지표</th>
                <th className="py-2 pr-4">3개월 목표</th>
                <th className="py-2 pr-4">6개월 목표</th>
              </tr>
            </thead>
            <tbody>
              {kpiDashboard.map((kpi) => (
                <tr key={kpi.metric} className="border-b last:border-0">
                  <td className="py-2 pr-4 font-semibold">{kpi.metric}</td>
                  <td className="py-2 pr-4">
                    <span className="badge bg-blue-100 text-blue-700">{kpi.m3}</span>
                  </td>
                  <td className="py-2 pr-4">
                    <span className="badge bg-emerald-100 text-emerald-700">{kpi.m6}</span>
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
