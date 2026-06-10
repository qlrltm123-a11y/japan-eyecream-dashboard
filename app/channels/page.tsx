import { channels, bundles, pointPromos } from "@/lib/data";
import { GlossaryBox } from "@/components/GlossaryBox";

export default function ChannelsPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">채널 전략</h1>
        <p className="text-slate-500">Qoo10(바이오힐보, 웨이크메이크, 컬러그램) / 라쿠텐(바이오힐보) 채널별 역할 분담 및 실행 전략</p>
        <p className="text-sm text-slate-500 mt-2">
          Qoo10과 라쿠텐은 한국의 쿠팡·네이버쇼핑처럼 일본의 대표적인 온라인 쇼핑몰입니다.
          두 플랫폼의 성격이 달라서, 같은 브랜드라도 '여기서는 신규 고객 유입용', '저기서는 단골 고객 관리용'처럼 역할을 나눠서 운영합니다.
        </p>
      </section>

      <section>
        <h2 className="section-title">채널별 역할 및 KPI</h2>
        <GlossaryBox terms={["ltv"]} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {channels.map((ch) => (
            <div key={ch.name} className="card">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-extrabold text-slate-900">{ch.name}</div>
                <span className="badge bg-rose-100 text-primary">{ch.role}</span>
              </div>
              <div className="text-sm text-slate-500 mb-1">취급 브랜드: {ch.brands.join(", ")}</div>
              <div className="text-sm text-slate-500 mb-4">핵심 프로모션: {ch.promo}</div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-400 border-b">
                    <th className="py-2 pr-2">기간</th>
                    <th className="py-2 pr-2">판매수량</th>
                    <th className="py-2 pr-2">랭킹</th>
                    <th className="py-2 pr-2">리뷰</th>
                    <th className="py-2 pr-2">평점</th>
                    {ch.kpi3m.bundle !== "-" && <th className="py-2 pr-2">번들비중</th>}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-2 font-semibold">3개월</td>
                    <td className="py-2 pr-2">{ch.kpi3m.sales}</td>
                    <td className="py-2 pr-2">{ch.kpi3m.rank}</td>
                    <td className="py-2 pr-2">{ch.kpi3m.review}</td>
                    <td className="py-2 pr-2">{ch.kpi3m.rating}</td>
                    {ch.kpi3m.bundle !== "-" && <td className="py-2 pr-2">{ch.kpi3m.bundle}</td>}
                  </tr>
                  <tr>
                    <td className="py-2 pr-2 font-semibold">6개월</td>
                    <td className="py-2 pr-2">{ch.kpi6m.sales}</td>
                    <td className="py-2 pr-2">{ch.kpi6m.rank}</td>
                    <td className="py-2 pr-2">{ch.kpi6m.review}</td>
                    <td className="py-2 pr-2">{ch.kpi6m.rating}</td>
                    {ch.kpi6m.bundle !== "-" && <td className="py-2 pr-2">{ch.kpi6m.bundle}</td>}
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Qoo10 번들 전략 (3브랜드 시너지)</h2>
        <GlossaryBox terms={["bundle"]} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bundles.map((b) => (
            <div key={b.combo} className="card">
              <div className="font-semibold text-slate-800">{b.combo}</div>
              <div className="text-xs text-accent mt-2">타겟: {b.target}</div>
              <div className="text-sm text-slate-600 mt-2 italic">{b.message}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">라쿠텐 포인트 프로모션 전략</h2>
        <GlossaryBox terms={["point", "spu", "rpp", "megawari"]} />
        <div className="card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400 border-b">
                <th className="py-2 pr-4">유형</th>
                <th className="py-2 pr-4">배율</th>
                <th className="py-2 pr-4">시점</th>
                <th className="py-2 pr-4">목적</th>
              </tr>
            </thead>
            <tbody>
              {pointPromos.map((p) => (
                <tr key={p.type} className="border-b last:border-0">
                  <td className="py-2 pr-4 font-semibold">{p.type}</td>
                  <td className="py-2 pr-4">
                    <span className="badge bg-rose-100 text-primary">{p.multiplier}</span>
                  </td>
                  <td className="py-2 pr-4 text-slate-500">{p.timing}</td>
                  <td className="py-2 pr-4 text-slate-500 text-xs">{p.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
