import { ceps } from "@/lib/data";

export default function CepUgcPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          고객이 우리 제품을 떠올리는 순간 &amp; 필요한 후기 콘텐츠
        </h1>
        <p className="text-slate-500">
          일본 소비자가 '어떤 상황에서' 아이크림을 검색하는지를 우선순위대로 정리하고,
          각 상황에 맞춰 어떤 실사용 후기 콘텐츠(UGC)를 확보하면 좋은지 짝지어 보여주는 페이지입니다.
        </p>
      </section>

      <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm leading-relaxed text-slate-600">
        <div className="font-bold text-amber-700 mb-1">🔍 이 '상황'과 '예시 문장'은 어떻게 알아낸 건가요?</div>
        <p>
          소비자를 인터뷰한 게 아니라, <b>실제 검색어 자체에 상황이 담겨 있는 경우가 많기 때문</b>입니다.
          예를 들어 일본어 검색어 중 <span className="text-accent">青クマ(아오쿠마, &apos;푸르스름한 다크서클&apos;)</span>이라는 단어가
          아이크림과 함께 자주 검색된다면, 이 단어를 쓰는 사람은 이미 &apos;잠을 잘 못 자서 다크서클이 진해진&apos; 상황에 있다는 뜻입니다.
          여기에 특정 단어가 &apos;아침 시간대&apos;나 &apos;여름철&apos;에 유독 많이 검색되는 패턴을 더하면,
          &apos;아침에 거울을 보고&apos;, &apos;에어컨 때문에 건조해서&apos;처럼 상황과 시점을 추정할 수 있습니다.
          아래 &apos;예시 문장&apos;은 그 추론을 이해하기 쉬운 대화체로 풀어쓴 것입니다.
        </p>
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ceps.map((cep) => (
            <div key={cep.id} className="card flex gap-4 items-start">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-extrabold">
                {cep.priority}
              </div>
              <div>
                <div className="text-xs text-slate-400">{cep.situation}</div>
                <div className="font-semibold text-slate-800">{cep.title}</div>
                <div className="text-xs text-accent mt-1">{cep.keyword}</div>
                <div className="text-xs text-slate-500 mt-1.5 italic">{cep.example}</div>
                <div className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-2 py-1.5 mt-2">
                  <b>확보하면 좋은 후기 콘텐츠:</b> {cep.ugc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
