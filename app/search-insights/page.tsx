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

const eyeCreamIds = ["F", "G", "L", "H", "N"];

export default function SearchInsightsPage() {
  const sortedClusters = [...clusters].sort((a, b) => b.volume - a.volume);

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">검색 인사이트</h1>
        <p className="text-slate-500">
          리스닝마인드 일본 검색 클러스터 분석 - 14개 클러스터 중 아이크림 직접 연관 클러스터(F, G, L, H, N) 합계{" "}
          <b className="text-primary">{eyeCreamClusterVolume.toLocaleString()}건</b>
        </p>
      </section>

      <section>
        <h2 className="section-title">클러스터별 검색량</h2>
        <div className="card">
          <ResponsiveContainer width="100%" height={420}>
            <BarChart data={sortedClusters} layout="vertical" margin={{ left: 40, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tickFormatter={(v) => v.toLocaleString()} />
              <YAxis type="category" dataKey="id" width={30} />
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
                  <th className="py-2 pr-4">ID</th>
                  <th className="py-2 pr-4">클러스터명</th>
                  <th className="py-2 pr-4">검색량</th>
                  <th className="py-2 pr-4">주요 키워드</th>
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
                        {c.id}
                      </span>
                    </td>
                    <td className="py-2 pr-4">{c.name}</td>
                    <td className="py-2 pr-4 font-semibold">{c.volume.toLocaleString()}</td>
                    <td className="py-2 pr-4 text-slate-500 text-xs">{c.keywords}</td>
                    <td className="py-2 pr-4 text-slate-500 text-xs">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">CDJ (Customer Decision Journey) 단계별 비중</h2>
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
        <h2 className="section-title">CEP (Category Entry Points) 우선순위</h2>
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
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
