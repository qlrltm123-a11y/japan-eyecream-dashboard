import { glossary } from "@/lib/data";

type GlossaryKey = keyof typeof glossary;

export function GlossaryBox({ terms, title }: { terms: GlossaryKey[]; title?: string }) {
  return (
    <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 mb-4">
      <div className="text-sm font-bold text-sky-700 mb-2">
        💡 {title ?? "이 섹션을 보기 전에 알아두면 좋은 용어"}
      </div>
      <dl className="space-y-2">
        {terms.map((key) => {
          const g = glossary[key];
          return (
            <div key={key} className="text-sm leading-relaxed">
              <dt className="font-semibold text-slate-700 inline">{g.term}</dt>
              <dd className="inline text-slate-600"> — {g.desc}</dd>
              {"example" in g && g.example && (
                <div className="text-xs text-slate-400 mt-0.5">{g.example}</div>
              )}
            </div>
          );
        })}
      </dl>
    </div>
  );
}
