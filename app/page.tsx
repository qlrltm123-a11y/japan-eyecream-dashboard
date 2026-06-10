import { marketStats, consumerGap, eyeCreamClusterVolume, caseStudy } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          일본 아이크림 시장 진출 전략 대시보드
        </h1>
        <p className="text-slate-500">
          올리브영 PB 브랜드(바이오힐보, 웨이크메이크, 컬러그램)의 일본 Qoo10 / 라쿠텐 진출을 위한
          시장조사, 검색 데이터, 경쟁 환경, 전략 통합 뷰
        </p>
      </section>

      <section>
        <h2 className="section-title">Executive Summary</h2>
        <ul className="card space-y-2 text-sm leading-relaxed text-slate-700 list-disc list-inside">
          <li>일본 스킨케어 시장은 2025년 1조 4,624억엔 규모(전년比 +3.5%)로 꾸준히 성장 중이며, 아이크림을 포함한 스페셜케어 카테고리는 +5% 이상 더 빠르게 성장</li>
          <li>소비자의 50.8%가 눈가 고민이 있지만 실제 케어 실시율은 30.8%에 불과 - 약 19.2%p의 인지-행동 갭 존재 = 신규 진입 기회</li>
          <li>검색 데이터 기준 아이크림 직접 연관 클러스터 총 검색량 <b>{eyeCreamClusterVolume.toLocaleString()}건</b>, CDJ 상 탐색 단계가 88.1%로 압도적 - 브랜드 미결정 소비자를 잡는 것이 핵심</li>
          <li>바이오힐보 아이크림은 광고/인플루언서 협업 없이 Qoo10 카테고리 1위 달성 - 한국발 바이럴 + 검색의도 적합성 + UGC 누적이 핵심 동력 (자세한 내용은 케이스 스터디 참고)</li>
          <li>권장 포지셔닝: K-뷰티 진입구간(2,500~4,500엔), 펩타이드/나이아신아마이드/두유 이소플라본 성분 강조, Qoo10은 신규 유입/번들, 라쿠텐은 충성고객 전환 채널로 역할 분담</li>
        </ul>
      </section>

      <section>
        <h2 className="section-title">시장 규모 핵심 지표</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {marketStats.map((stat) => (
            <div key={stat.label} className="card">
              <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
              <div className="text-2xl font-extrabold text-slate-900">{stat.value}</div>
              <div className="text-sm text-accent font-semibold mt-1">{stat.sub}</div>
              <div className="text-[11px] text-slate-400 mt-2">출처: {stat.source}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">인지-행동 갭 (Awareness-Action Gap)</h2>
        <div className="card grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-primary">{consumerGap.hasIssue}%</div>
                <div className="text-xs text-slate-500 mt-1">눈가 고민 있음</div>
              </div>
              <div className="text-2xl text-slate-300">-&gt;</div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-accent">{consumerGap.doesCare}%</div>
                <div className="text-xs text-slate-500 mt-1">실제 케어 실시</div>
              </div>
              <div className="text-2xl text-slate-300">=</div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-emerald-500">{consumerGap.gap}%p</div>
                <div className="text-xs text-slate-500 mt-1">미충족 기회</div>
              </div>
            </div>
            <p className="text-xs text-slate-400">출처: {consumerGap.source}</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-700 mb-2">눈가 고민 항목 순위</div>
            <div className="space-y-2">
              {consumerGap.issues.map((issue) => (
                <div key={issue.name} className="flex items-center gap-3">
                  <div className="w-24 text-sm text-slate-600 shrink-0">{issue.rank}. {issue.name}</div>
                  <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-primary h-3 rounded-full"
                      style={{ width: `${issue.value}%` }}
                    />
                  </div>
                  <div className="w-12 text-sm text-right font-semibold text-slate-700">{issue.value}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">바이오힐보 케이스 스냅샷</h2>
        <div className="card grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-extrabold text-slate-900">{caseStudy.qoo10Sales.toLocaleString()}</div>
            <div className="text-xs text-slate-500 mt-1">Qoo10 누적 판매</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">{caseStudy.qoo10Rating}점</div>
            <div className="text-xs text-slate-500 mt-1">Qoo10 평점</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">{caseStudy.qoo10Reviews.toLocaleString()}</div>
            <div className="text-xs text-slate-500 mt-1">Qoo10 리뷰 수</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">{caseStudy.price.toLocaleString()}엔</div>
            <div className="text-xs text-slate-500 mt-1">판매가</div>
          </div>
        </div>
        <p className="text-sm text-slate-500 mt-2">{caseStudy.ranking} / 별명: {caseStudy.nickname}</p>
      </section>
    </div>
  );
}
