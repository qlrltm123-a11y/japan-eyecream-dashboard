"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { clusters, cdjStages, ceps, eyeCreamClusterVolume } from "@/lib/data";
import { GlossaryBox } from "@/components/GlossaryBox";

const eyeCreamIds = ["F", "G", "L", "H", "N"];

export default function SearchInsightsPage() {
  const sortedClusters = [...clusters].sort((a, b) => b.volume - a.volume);

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">검색 인사이트</h1>
        <p className="text-slate-500">
          일본 소비자들이 어떤 단어로, 얼마나 검색하는지를 분석한 결과입니다. 아래 14개 검색어 그룹 중
          '아이크림'과 직접 관련된 5개 그룹(눈가 건조·처짐 입문, 눈가 안티에이징 비교, 가성비 아이크림, 연령별 가성비+효과, 처짐케어 후기)의 검색량 합계는{" "}
          <b className="text-primary">{eyeCreamClusterVolume.toLocaleString()}건</b>입니다.
        </p>
      </section>

      <section>
        <h2 className="section-title">검색어 그룹별 검색량 (클러스터)</h2>
        <p className="text-sm text-slate-500 mb-3">
          비슷한 의도로 검색하는 단어들을 한 그룹으로 묶은 결과입니다. 막대가 길수록 그 그룹의 검색량이 많고,
          빨간 막대가 '아이크림'과 직접 관련된 그룹입니다.
        </p>
        <GlossaryBox terms={["cluster"]} />
        <div className="card">
          <ResponsiveContainer width="100%" height={480}>
            <BarChart data={sortedClusters} layout="vertical" margin={{ left: 110, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tickFormatter={(v) => v.toLocaleString()} />
              <YAxis type="category" dataKey="label" width={110} tick={{ fontSize: 12 }} />
              <Tooltip
                formatter={(value: number, _name, props) => [
                  value.toLocaleString(),
                  props.payload.name,
                ]}
              />
              <Bar dataKey="volume" radius={[0, 6, 6, 0]}>
                {sortedClusters.map((c) => (
                  <Cell
                    key={c.id}
                    fill={eyeCreamIds.includes(c.id) ? "#E11D48" : "#cbd5e1"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-400 border-b">
                  <th className="py-2 pr-4">그룹 이름 (요약)</th>
                  <th className="py-2 pr-4">그룹 이름 (상세)</th>
                  <th className="py-2 pr-4">검색량</th>
                  <th className="py-2 pr-4">주요 검색어</th>
                  <th className="py-2 pr-4 min-w-[260px]">쉽게 말하면</th>
                  <th className="py-2 pr-4">비고</th>
                </tr>
              </thead>
              <tbody>
                {sortedClusters.map((c) => (
                  <tr key={c.id} className="border-b last:border-0">
                    <td className="py-2 pr-4 font-bold">
                      <span
                        className={`badge ${
                          eyeCreamIds.includes(c.id)
                            ? "bg-rose-100 text-primary"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {c.label}
                      </span>
                    </td>
                    <td className="py-2 pr-4">{c.name}</td>
                    <td className="py-2 pr-4 font-semibold">{c.volume.toLocaleString()}</td>
                    <td className="py-2 pr-4 text-slate-500 text-xs">{c.keywords}</td>
                    <td className="py-2 pr-4 text-slate-500 text-xs">{c.meaning}</td>
                    <td className="py-2 pr-4 text-slate-500 text-xs">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">고객이 구매까지 거치는 5단계 여정 (CDJ)</h2>
        <GlossaryBox terms={["cdj"]} />
        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {cdjStages.map((stage) => (
              <div key={stage.stage} className="text-center p-4 rounded-xl bg-slate-50">
                <div className="text-lg font-bold text-slate-800">{stage.stage}</div>
                <div className="text-2xl font-extrabold text-primary mt-1">{stage.share}%</div>
                <div className="text-xs text-slate-500 mt-1">{stage.volume.toLocaleString()}건</div>
                <div className="text-[11px] text-slate-400 mt-2">{stage.intent}</div>
                <div className="text-xs text-slate-600 mt-2">{stage.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">고객이 우리 제품을 떠올리는 순간 (CEP)</h2>
        <GlossaryBox terms={["cep"]} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ceps.map((cep) => (
            <div key={cep.id} className="card flex gap-4 items-start">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-extrabold">
                {cep.priority}
              </div>
              <div>
                <div className="text-xs text-slate-400">{cep.id} - {cep.situation}</div>
                <div className="font-semibold text-slate-800">{cep.title}</div>
                <div className="text-xs text-accent mt-1">{cep.keyword}</div>
                <div className="text-xs text-slate-500 mt-1.5 italic">{cep.example}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
