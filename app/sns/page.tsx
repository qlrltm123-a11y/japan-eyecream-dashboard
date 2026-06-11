"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { snsData } from "@/lib/snsData";

const keywordChartData = snsData.topKeywords.map((k) => ({
  name: `${k.keyword} (${k.meaning.split("(")[0].split(" — ")[0]})`,
  count: k.count,
}));

export default function SnsPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">SNS 분석</h1>
        <p className="text-slate-500">
          유튜브·인스타그램에서 'アイクリーム(아이크림)' 키워드/해시태그로 수집한 실제 게시물 데이터
          (유튜브 {snsData.summary.youtubeCount}건 · 인스타그램 {snsData.summary.instagramCount}건, 총 조회수{" "}
          <b className="text-primary">{snsData.summary.totalViews.toLocaleString()}회</b>)를 분석한 결과입니다.
        </p>
        <div className="mt-3 bg-rose-50 border border-rose-100 rounded-xl px-4 py-3 text-sm text-slate-700">
          <b className="text-primary">핵심 발견:</b> {snsData.summary.keyFinding}
        </div>
      </section>

      <section>
        <h2 className="section-title">어떤 콘텐츠가 잘 보일까? (유형별 평균 조회수)</h2>
        <p className="text-sm text-slate-500 mb-3">
          영상·게시물을 주제별로 분류하고, 유형마다 평균 조회수를 비교했습니다. '비중'은 전체 콘텐츠에서 그 유형이 차지하는 비율입니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {snsData.contentTypes.map((ct) => (
            <div key={ct.type} className="card">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-slate-800">{ct.type}</div>
                <div className="text-right shrink-0 ml-2">
                  <span className="badge bg-rose-100 text-primary">평균 {Math.round(ct.avgViews / 10000)}만 회</span>
                  <span className="badge bg-slate-100 text-slate-500 ml-1">비중 {ct.share}%</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{ct.desc}</p>
              <p className="text-xs text-slate-400 mt-2 italic">{ct.example}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">자주 등장하는 키워드 Top 10</h2>
        <p className="text-sm text-slate-500 mb-3">
          제목·캡션·해시태그에서 많이 쓰인 일본어 단어입니다. 소비자들이 어떤 고민·관심사로 아이크림 콘텐츠를 보는지 보여줍니다.
        </p>
        <div className="card">
          <ResponsiveContainer width="100%" height={380}>
            <BarChart data={keywordChartData} layout="vertical" margin={{ left: 150, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={150} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#E11D48" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <h2 className="section-title">포맷·플랫폼에서 발견한 것들</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {snsData.formatInsights.map((fi) => (
            <div key={fi.title} className="card">
              <div className="font-bold text-slate-800 mb-2">{fi.title}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{fi.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">자주 언급되는 브랜드</h2>
        <div className="card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400 border-b">
                <th className="py-2 pr-4">브랜드</th>
                <th className="py-2 pr-4">언급 수</th>
                <th className="py-2 pr-4">맥락</th>
              </tr>
            </thead>
            <tbody>
              {snsData.brands.map((b) => (
                <tr key={b.brand} className="border-b last:border-0">
                  <td className="py-2 pr-4 font-semibold">{b.brand}</td>
                  <td className="py-2 pr-4 font-bold text-primary">{b.mentions}</td>
                  <td className="py-2 pr-4 text-slate-500 text-xs">{b.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title">대표 게시물</h2>
        <p className="text-sm text-slate-500 mb-3">
          실제로 반응이 좋았던 게시물 예시입니다. 클릭하면 원본 게시물로 이동합니다.
        </p>
        <div className="space-y-3 mb-4">
          {snsData.representativePosts.youtube.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex gap-4 items-start hover:bg-slate-50 transition-colors"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-rose-100 text-primary flex items-center justify-center font-extrabold text-xs text-center">
                {p.type === "shorts" ? "쇼츠" : "영상"}
              </div>
              <div>
                <div className="font-semibold text-slate-800">{p.title}</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {p.channel} · 조회수 {p.views.toLocaleString()}회
                </div>
                <p className="text-sm text-slate-600 mt-1.5">{p.summary}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="space-y-3">
          {snsData.representativePosts.instagram.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex gap-4 items-start hover:bg-slate-50 transition-colors"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-extrabold text-xs">
                IG
              </div>
              <div>
                <div className="font-semibold text-slate-800">{p.user}</div>
                <div className="text-xs text-slate-400 mt-0.5">좋아요 {p.likes.toLocaleString()}개</div>
                <p className="text-sm text-slate-600 mt-1.5">{p.summary}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">그래서 우리 팀은 뭘 하면 될까? (시사점)</h2>
        <div className="space-y-4">
          {snsData.implications.map((imp, i) => (
            <div key={imp.title} className="card flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-extrabold">
                {i + 1}
              </div>
              <div>
                <div className="font-bold text-slate-800">{imp.title}</div>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">{imp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
