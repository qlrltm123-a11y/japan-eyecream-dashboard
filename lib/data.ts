// 일본 아이크림 시장 조사 데이터
// 출처: 리스닝마인드(올리브영PB), 富士経済, GII, Report Ocean, 마이나비, TPC마케팅, LIPS, @cosme, PR TIMES 등
// 수집일: 2026-06-09

export const marketStats = [
  { label: "일본 스킨케어 시장 (2025)", value: "1조 4,624억엔", sub: "전년比 +3.5%", source: "富士経済" },
  { label: "스페셜케어(아이크림 포함) 성장률", value: "+5% 이상", sub: "전년 대비", source: "富士経済" },
  { label: "글로벌 아이크림 CAGR", value: "6.6%", sub: "2024-2032", source: "GII" },
  { label: "아시아태평양 아이크림 CAGR", value: "7.1%", sub: "글로벌 평균 상회", source: "GII" },
];

export const consumerGap = {
  hasIssue: 50.8,
  doesCare: 30.8,
  gap: 19.2,
  issues: [
    { name: "다크서클(クマ)", value: 61.5, rank: 1 },
    { name: "주름(シワ)", value: 57.9, rank: 2 },
    { name: "잡티/기미(シミ)", value: 44.6, rank: 3 },
    { name: "건조(乾燥)", value: 36.9, rank: 4 },
  ],
  source: "마이나비 뉴스, 2024.11, 여성 384명",
};

export const clusters = [
  { id: "F", name: "눈가 건조·처짐 케어 탐색", volume: 88062, keywords: "アイクリーム(41,033), アイクリーム おすすめ(22,466)", note: "최대 수요 볼륨", meaning: "'아이크림이 뭔지', '눈가 건조·처짐에 좋은 아이크림 추천해줘'처럼, 아이크림 자체를 알아보기 시작하는 사람들의 검색 모음 (풀어 말하면 '아이크림 입문자 검색')" },
  { id: "G", name: "눈가 안티에이징 케어 탐색", volume: 43942, keywords: "アイクリーム ランキング(11,366), キュレル アイクリーム(10,433)", note: "추천·랭킹 키워드 집중", meaning: "'아이크림 순위', '큐레르 아이크림' 등 이미 알려진 제품을 비교·추천 랭킹으로 찾아보는 검색 (풀어 말하면 '뭐가 제일 좋은지 비교 중')" },
  { id: "L", name: "가성비 아이크림 탐색", volume: 20294, keywords: "なめらか本舗(6,700), プチプラ アイクリーム(3,900)", note: "PB 자연 강점 구간", meaning: "'プチプラ(저렴한) 아이크림', 'なめらか本舗' 같은 가성비 제품을 찾는 검색 (풀어 말하면 '저렴하면서 괜찮은 거 없나')" },
  { id: "H", name: "효과 좋고 가성비 좋은 연령맞춤 탐색", volume: 12629, keywords: "効果絶大プチプラ(3,200), 効果絶大 50代(2,133)", note: "効果絶大プチプラ 명시 수요", meaning: "'50대에게 효과 확실한 가성비 아이크림'처럼 연령대+가격+효과를 동시에 따지는 검색 (풀어 말하면 '내 나이에 맞고 저렴한데 효과까지 확실한 거')" },
  { id: "C", name: "Y존 케어 탐색 (연관성 낮음)", volume: 26325, keywords: "デリケートゾーン 黒ずみ(23,833)", note: "직접 연관성 낮음", meaning: "여성청결제·Y존 미백 관련 검색. 데이터상 같은 그룹으로 묶였을 뿐 아이크림과는 직접 관련 없음" },
  { id: "M", name: "화장품 대분류 탐색 (연관성 낮음)", volume: 85986, keywords: "パック(60,500), パウダーファンデーション(25,466)", note: "직접 연관성 낮음", meaning: "'팩', '파운데이션' 등 화장품 전반을 찾는 일반 검색. 아이크림과는 직접 관련 없음" },
  { id: "B", name: "헬레나 루빈스타인 브랜드 탐색", volume: 7173, keywords: "ヘレナ ルビンスタイン(3,600)", note: "프리미엄 브랜드 탐색", meaning: "'헬레나 루빈스타인'처럼 특정 프리미엄 브랜드 자체를 검색 (브랜드 이름으로 바로 찾아오는 충성 고객형 검색)" },
  { id: "K", name: "링클크림 추천·효과 탐색", volume: 1876, keywords: "エリクシール 効果ない(1,260)", note: "효능 검증 니즈", meaning: "'엘릭서 효과 없다'처럼 이미 사용 중인 제품의 효과를 검증·의심하는 검색 (풀어 말하면 '이거 써봤는데 진짜 효과 있어?')" },
  { id: "N", name: "눈가 처짐 케어 후기 탐색", volume: 987, keywords: "たるみ アイクリーム(553)", note: "처짐 특화 후기", meaning: "'처짐 아이크림' 사용 후기를 찾아보는 검색 (풀어 말하면 '써본 사람 후기 보고 싶다')" },
  { id: "E", name: "Three 브랜드 탐색", volume: 1511, keywords: "threeハンドクリーム(1,360)", note: "브랜드 탐색", meaning: "'THREE' 브랜드의 핸드크림 등을 찾는 검색 (브랜드명으로 바로 찾아오는 검색)" },
  { id: "I", name: "Est 브랜드 탐색", volume: 1338, keywords: "エスト 乳液(396)", note: "브랜드 탐색", meaning: "'에스트' 브랜드의 유액(에멀전)을 찾는 검색 (브랜드명으로 바로 찾아오는 검색)" },
  { id: "D", name: "남성 안티에이징 탐색", volume: 584, keywords: "ほうれい線消えるクリーム(143)", note: "경쟁 공백 (장기 검토)", meaning: "'팔자주름 없애는 크림'처럼 남성 안티에이징을 찾는 검색. 경쟁 제품이 적어 장기적으로 검토해볼 만한 영역" },
  { id: "J", name: "가네보 안티에이징 탐색", volume: 75, keywords: "カネボウ アイセラム(10)", note: "브랜드 탐색", meaning: "'가네보 아이세럼'처럼 특정 브랜드를 직접 검색 (브랜드명으로 바로 찾아오는 검색)" },
  { id: "A", name: "히스 코스메틱 활용법", volume: 358, keywords: "heath スキンケア(10)", note: "브랜드 탐색", meaning: "'히스 코스메틱 사용법'을 찾는 검색 (이미 산 제품을 어떻게 쓰는지 찾아보는 검색)" },
];

export const eyeCreamClusterVolume = clusters
  .filter((c) => ["F", "G", "L", "H", "N"].includes(c.id))
  .reduce((sum, c) => sum + c.volume, 0);

export const cdjStages = [
  { stage: "①인지", intent: "정보형", share: 9.9, volume: 468788, desc: "카테고리 인식 단계" },
  { stage: "②탐색", intent: "상업형", share: 88.1, volume: 4171692, desc: "브랜드 미결정 — 진입 핵심 구간" },
  { stage: "③비교", intent: "상업형", share: 1.0, volume: 46578, desc: "구체 제품 비교" },
  { stage: "④구매", intent: "거래형", share: 0.3, volume: 14008, desc: "전환 단계" },
  { stage: "⑤경험", intent: "정보형", share: 0.7, volume: 34869, desc: "사용법 탐색 (리텐션 기회)" },
];

export const ceps = [
  { id: "CEP-7", title: "눈가 처짐·탄력 저하 인식", situation: "노화 인식 시점, 연중", keyword: "目元のハリ, くぼみ目 アイクリーム", priority: 1, example: "예: 거울을 보다가 '눈가가 푹 꺼지고 탄력이 없어 보이네... 탄탄하게 채워주는 크림 없을까?' 하고 검색" },
  { id: "CEP-6", title: "수면 부족 다음날 다크서클", situation: "아침, 연중", keyword: "青クマ アイクリーム", priority: 2, example: "예: 늦게 잔 다음날 아침 '오늘따라 다크서클이 너무 진한데 빨리 가릴 방법 없나' 하고 검색" },
  { id: "CEP-1", title: "에어컨 건조 심화", situation: "여름 집중", keyword: "乾燥 アイクリーム", priority: 3, example: "예: 에어컨 켠 사무실에서 하루 종일 있었더니 눈가가 당기고 건조해서 검색" },
  { id: "CEP-4", title: "20대 잔주름 예방 시작", situation: "연중", keyword: "アイクリーム 20代", priority: 4, example: "예: 20대인데 '벌써 잔주름이 보이기 시작해서 미리 예방하고 싶다'며 검색" },
  { id: "CEP-5", title: "레티놀 자극 후 대체 탐색", situation: "연중", keyword: "レチノールなし アイクリーム", priority: 5, example: "예: 레티놀 제품을 썼다가 따갑고 붉어져서 '자극 없는 대체 성분 아이크림' 검색" },
  { id: "CEP-3", title: "메이크업 전 들뜸 발견", situation: "아침, 연중", keyword: "アイクリーム メイク前", priority: 6, example: "예: 아침 화장 중 '눈가 화장이 자꾸 들뜨고 갈라진다'며 검색" },
  { id: "CEP-9", title: "스마트폰·PC 후 저녁 다크서클", situation: "저녁, 연중", keyword: "血行促進 アイクリーム", priority: 7, example: "예: 퇴근 후 스마트폰을 오래 봤더니 저녁에 다크서클이 더 진해진 것 같아 검색" },
  { id: "CEP-2", title: "메이크업 후 눈가 자극 우려", situation: "연중", keyword: "敏感肌 アイクリーム", priority: 8, example: "예: 새 화장품을 쓴 뒤 눈가가 따가워서 '민감성 피부용 아이크림' 검색" },
  { id: "CEP-8", title: "눈 밑 건조·들뜸 발견", situation: "낮, 연중", keyword: "目元の乾燥 アイクリーム", priority: 9, example: "예: 한낮에 거울을 보니 눈 밑이 푸석하고 들떠 보여서 검색" },
  { id: "CEP-10", title: "눈가 꺼짐 발견", situation: "연중", keyword: "目のくぼみ アイクリーム", priority: 10, example: "예: '눈이 점점 꺼지는 것 같다'며 원인과 해결책을 검색" },
];

export const competitors = [
  { brand: "에리크실르 (시세이도)", product: "레치노파워 링클 크림 ba", date: "2025.09.21", price: "6,600~8,800엔", ingredient: "순수 레티놀, 콜라제네시스R", tier: "미드레인지" },
  { brand: "SK-II", product: "스킨파워 아이 플러스 라인 필러 크림", date: "2025.09.20", price: "프리미엄(미공개)", ingredient: "피테라, 쿠말산, 작약 추출물", tier: "프리미엄" },
  { brand: "POLA", product: "링클샷 메디컬 세럼 듀오", date: "2025.01.01", price: "19,800엔", ingredient: "니르완, 2제 혼합", tier: "울트라 프리미엄" },
  { brand: "나메라카 혼포", product: "링클 아이크림", date: "-", price: "~1,500엔", ingredient: "두유 발효액", tier: "가성비" },
  { brand: "Anua (K-뷰티)", product: "레티놀 0.1 카페인 리바이탈라이징 아이크림", date: "-", price: "가성비", ingredient: "레티놀+카페인", tier: "K-뷰티 (라쿠텐 1위)" },
  { brand: "numbuzin (K-뷰티)", product: "9번 NMN 레티놀 리프트 아이크림", date: "-", price: "가성비", ingredient: "NMN 99% + 리포솜 레티놀", tier: "K-뷰티" },
];

export const priceTiers = [
  { tier: "프리미엄 (8,000엔+)", brands: "SK-II, POLA 링클샷", desc: "기술·헤리티지 소구" },
  { tier: "미드레인지 (3,000~8,000엔)", brands: "에리크실르", desc: "드럭스토어 접근성 + 의약부외품" },
  { tier: "K-뷰티 진입구간 (2,500~4,500엔)", brands: "바이오힐보 등", desc: "에리크실르 정면충돌 회피, 가성비 상위 차별화 — 권장 포지션" },
  { tier: "가성비 (1,000~3,000엔)", brands: "나메라카 혼포, セザンヌ", desc: "원료 가성비" },
];

export const ingredientStrategy = [
  { ingredient: "펩타이드 (EGF·Argireline)", point: "탄력·리프팅, 레티놀 안전 대안", target: "처짐·안티에이징 (F·G)", priority: 3 },
  { ingredient: "나이아신아마이드", point: "다크서클 개선 + 주름 Wケア + 저자극", target: "다크서클·민감성", priority: 3 },
  { ingredient: "두유 이소플라본 (豆乳イソフラボン)", point: "일본 현지화, 月 15,000건 독립 검색", target: "40~50대 안티에이징", priority: 2 },
  { ingredient: "세라마이드·히알루론산", point: "보습 지속·메이크업 들뜸 방지", target: "건조·메이크업 전 (CEP-1·3·8)", priority: 2 },
  { ingredient: "NMN (검토)", point: "numbuzin 성공 실증, 고가치 성분", target: "30~50대 안티에이징", priority: 1 },
];

export const quickWins = [
  { id: "QW-1", title: "Amazon Japan 탐색 키워드 광고 집중 집행", ice: 5.76, kpi: "Top 20 진입, 리뷰 50건+, 별점 4.0+", status: "검토" },
  { id: "QW-2", title: "@cosme 선발 리뷰어 체험단 운영 (100명)", ice: 5.67, kpi: "평점 4.0 이상, 리뷰 100건 (3개월)", status: "검토" },
  { id: "QW-3", title: "CEP 상황공감형 일본어 랜딩페이지 3종", ice: 3.84, kpi: "체류시간 2분+, 이탈률 60% 이하", status: "검토" },
];

export const roadmap = [
  { phase: "Quick Win (1~3개월)", items: ["Amazon 탐색 키워드 광고", "@cosme 체험단 100명", "CEP 랜딩페이지 3종 (CEP-7,1,4)"] },
  { phase: "중기 (3~6개월)", items: ["LIPS 인플루언서 10인 30일 체험 콘텐츠", "두유 이소플라본 현지화 캠페인", "드럭스토어 입점 협상(네마와시)"] },
  { phase: "장기 (6개월+)", items: ["레티놀 대안 성분 라인 강화", "퍼스널라이즈 커뮤니케이션 전환", "EC 직영 구독 모델", "남성 안티에이징 세그먼트 검토"] },
];

export const kpiDashboard = [
  { metric: "Amazon 카테고리 랭킹", m3: "Top 20", m6: "Top 10" },
  { metric: "Amazon 리뷰 수", m3: "50건", m6: "150건" },
  { metric: "Amazon 별점", m3: "4.0+", m6: "4.2+" },
  { metric: "@cosme 리뷰 수", m3: "100건", m6: "300건" },
  { metric: "@cosme 평점", m3: "4.0+", m6: "4.0+ 유지" },
  { metric: "브랜드 월간 검색량", m3: "500건", m6: "2,000건" },
  { metric: "랜딩페이지 전환율", m3: "2.0%+", m6: "2.5%+" },
  { metric: "아마존 월 판매수량", m3: "300개", m6: "1,000개" },
];

export const channels = [
  {
    name: "Qoo10",
    brands: ["바이오힐보", "웨이크메이크", "컬러그램"],
    role: "신규 고객 유입 및 브랜드 인지 확산",
    promo: "메가와리 번들 할인, 크로스셀링",
    kpi3m: { sales: "200개", rank: "Top 50", review: "30건", rating: "4.0+", bundle: "15%" },
    kpi6m: { sales: "500개", rank: "Top 20", review: "100건", rating: "4.2+", bundle: "25%" },
  },
  {
    name: "라쿠텐",
    brands: ["바이오힐보"],
    role: "충성 고객 전환 및 LTV 극대화",
    promo: "포인트 배율, SPU 연계",
    kpi3m: { sales: "150개", rank: "Top 50", review: "30건", rating: "4.0+", bundle: "-" },
    kpi6m: { sales: "400개", rank: "Top 20", review: "100건", rating: "4.2+", bundle: "-" },
  },
];

export const bundles = [
  { combo: "바이오힐보 아이크림 + 웨이크메이크 아이섀도우", target: "30대 메이크업 관심층", message: "눈가 케어부터 눈 메이크업까지 한 번에" },
  { combo: "바이오힐보 아이크림 + 컬러그램 컨실러", target: "다크서클 고민층 (CEP-6)", message: "다크서클은 바르고, 커버는 컬러그램으로" },
  { combo: "3브랜드 아이 케어 세트", target: "첫 구매 입문층", message: "트라이얼 세트로 올리브영 PB 전체 경험" },
];

export const pointPromos = [
  { type: "기본 포인트", multiplier: "1배", timing: "상시", purpose: "기준선 유지" },
  { type: "신규 구매 포인트", multiplier: "5배", timing: "출시 후 3개월", purpose: "첫 구매 장벽 제거" },
  { type: "재구매 포인트", multiplier: "3배", timing: "상시 쿠폰", purpose: "LTV 증대" },
  { type: "시즌 이벤트 포인트", multiplier: "10배", timing: "골든위크, 연말연시", purpose: "시즌 피크 매출 극대화" },
  { type: "라쿠텐 슈퍼세일 연계", multiplier: "최대 20배", timing: "슈퍼세일 기간", purpose: "랭킹 부스트" },
];

export const caseStudy = {
  product: "바이오힐보 1:1 프로바이오덤 3D 리프팅아이앤링클크림 25ml",
  qoo10Sales: 14830,
  qoo10Rating: 4.6,
  qoo10Reviews: 3825,
  price: 3200,
  lipsReviews: 545,
  ranking: "2025년 1월 Qoo10 아이크림·젤 카테고리 월간 판매 1위",
  nickname: "탄탄 크림 (한국발 바이럴)",
  ingredients: ["17종 펩타이드", "프로바이오덤(PROBIODERM) 특허성분", "나이아신아마이드", "아데노신", "세라마이드NP", "히알루론산"],
  reasons: [
    {
      title: "한국발 바이럴의 스필오버 (Pre-built Demand)",
      desc: "한국에서 이미 탄탄 크림으로 입소문 확산 → 일본 진입 시점에 사전 인지도 형성된 상태로 출시",
    },
    {
      title: "제품-검색의도 적합성 (Product-Search Fit)",
      desc: "17종 펩타이드+리프팅 → 클러스터 F(88,062건), 나이아신아마이드 → CEP-6(다크서클), 3,200엔 → 클러스터 H+L(가성비 32,923건)과 정확히 매칭",
    },
    {
      title: "Qoo10 랭킹 알고리즘 자기강화 루프",
      desc: "판매량 → 카테고리 1위 → 노출 증가 → 판매량 추가 증가의 선순환 구조 가동 중",
    },
    {
      title: "UGC(사용자 생성 콘텐츠) 누적 효과",
      desc: "LIPS 545건, @cosme, Qoo10 3,825건 모두 자발적 리뷰 — 평점 4.6이 강력한 사회적 증거로 작용",
    },
    {
      title: "획득 미디어 (Earned Media)",
      desc: "美容매체가 塗るハイフ(바르는 하이푸)로 자발 소개 → 해당 표현이 바이럴 검색어로 작동",
    },
  ],
  risks: [
    "에리쿠실르·SK-II 레티놀 신제품 출시(2025.09)로 카테고리 경쟁 심화 → 오가닉 1위 잠식 가능",
    "UGC 의존도 높음 → 부정 리뷰 1건의 임팩트가 큼, 평점 모니터링 강화 필요",
  ],
  actions: [
    "현재 1위 유지를 위한 방어적 RPP 광고 소액 투입",
    "塗るハイフ 키워드를 상세페이지·태그에 공식 반영",
    "Qoo10 리뷰·랭킹 자산을 라쿠텐 진입 근거로 활용",
  ],
};

// 비마케터를 위한 용어 설명 모음 - 각 페이지에서 GlossaryBox로 필요한 항목만 골라서 보여줌
export const glossary = {
  cluster: {
    term: "클러스터(Cluster)",
    desc: "비슷한 의도를 가진 검색어들을 하나로 묶은 그룹",
    example: "예: '아이크림 추천', '아이크림이 뭐예요'는 둘 다 '아이크림을 처음 알아본다'는 같은 의도라서 같은 그룹(F)으로 묶음",
  },
  cdj: {
    term: "CDJ (고객 의사결정 여정, Customer Decision Journey)",
    desc: "고객이 제품을 ①알게 되고 → ②찾아보고 → ③비교하고 → ④사고 → ⑤써보는 5단계의 흐름. 흔히 말하는 '구매 퍼널(funnel)'과 같은 개념",
    example: "예: 아이크림이 있다는 걸 처음 안 사람(인지) -> 어떤 게 좋은지 검색(탐색) -> 후보 2~3개 비교(비교) -> 결제(구매) -> 발라보고 후기 남김(경험)",
  },
  cep: {
    term: "CEP (카테고리 진입 시점, Category Entry Point)",
    desc: "'이런 상황이 되면 이 제품이 떠오른다'는 구체적인 계기 상황. 광고를 안 봐도 소비자가 스스로 떠올리게 만드는 순간",
    example: "예: 아침에 거울을 보다가 다크서클이 신경 쓰이는 순간 -> '아이크림' 떠올림",
  },
  gap: {
    term: "인지-행동 갭 (Awareness-Action Gap)",
    desc: "'문제는 느끼고 있지만 아직 아무 제품도 안 쓰고 있는' 사람들의 비율. 이 사람들이 잠재 고객",
    example: "예: 눈가 고민이 있는 사람 100명 중 31명만 케어 제품을 쓰고 있다면, 나머지 69명이 새 브랜드가 노려야 할 잠재 고객",
  },
  ice: {
    term: "ICE Score",
    desc: "어떤 일을 먼저 해야 할지 우선순위를 정하는 점수. Impact(이걸 하면 효과가 얼마나 큰가) · Confidence(성공할 확신이 얼마나 있나) · Ease(실행하기 얼마나 쉬운가) 세 가지를 각각 점수 매겨 평균낸 값",
    example: "예: 점수가 높을수록 '효과도 크고, 될 것 같고, 하기도 쉬운' 일이라 가장 먼저 시도해볼 만한 액션",
  },
  ugc: {
    term: "UGC (사용자 생성 콘텐츠, User-Generated Content)",
    desc: "브랜드가 돈 주고 만든 광고가 아니라, 실제로 써본 일반 소비자가 자발적으로 올린 후기·리뷰·SNS 게시물",
    example: "예: 쇼핑몰 리뷰란에 별점과 함께 '이거 진짜 좋아요'라고 남긴 일반 구매자의 글",
  },
  earnedMedia: {
    term: "획득 미디어 (Earned Media)",
    desc: "돈을 주고 산 광고(Paid Media)가 아니라, 언론사나 인플루언서가 스스로 좋다고 판단해 자발적으로 소개해주는 것",
    example: "예: 뷰티 매체가 '요즘 뜨는 제품'이라며 자기 돈으로 사서 직접 써보고 기사를 쓴 경우",
  },
  spu: {
    term: "SPU (라쿠텐 포인트 배율 프로그램)",
    desc: "라쿠텐의 여러 서비스(카드, 모바일, 쇼핑 등)를 함께 이용할수록 적립되는 포인트 배율이 올라가는 제도",
    example: "예: 라쿠텐카드+라쿠텐모바일을 같이 쓰는 고객은 포인트를 2배, 3배로 더 받기 때문에, 포인트 적립이 큰 상품/매장에서 사고 싶어함",
  },
  rpp: {
    term: "RPP 광고",
    desc: "라쿠텐 검색 결과 상단에 내 상품을 노출시켜주는 키워드 광고. 네이버 '파워링크' 광고와 비슷한 개념",
    example: "예: '아이크림'을 검색했을 때 가장 위쪽에 '광고'라고 표시되며 노출되는 상품",
  },
  megawari: {
    term: "메가와리 (메가 할인 행사)",
    desc: "Qoo10에서 정기적으로 열리는 대규모 할인 프로모션 행사 이름",
    example: "예: 백화점의 '정기 세일 기간'과 비슷한, Qoo10판 대형 할인 이벤트",
  },
  tier: {
    term: "티어 (Tier, 가격대 등급)",
    desc: "제품을 가격 수준에 따라 '프리미엄 / 중간(미드레인지) / 가성비'처럼 등급으로 나눈 것",
    example: "예: 백화점 화장품 코너(프리미엄) vs 드럭스토어 중간 가격(미드레인지) vs 다이소형 저가(가성비) 같은 구분",
  },
  ltv: {
    term: "LTV (고객생애가치, Life Time Value)",
    desc: "고객 한 명이 처음 구매부터 더 이상 안 살 때까지, 우리 브랜드에 가져다주는 매출의 총합",
    example: "예: 한 번만 사고 마는 고객보다, 재구매를 계속하는 '단골 고객'의 LTV가 훨씬 높음",
  },
  nemawashi: {
    term: "네마와시 (根回し)",
    desc: "일본식 사전 조율 문화. 회의에서 정식으로 결정하기 전에, 관련된 사람들과 미리 충분히 이야기해서 의견을 맞춰두는 것",
    example: "예: 드럭스토어 본사에 정식 입점 제안을 넣기 전에, 담당 바이어와 미리 식사하며 분위기를 파악하고 공감대를 만들어두는 과정",
  },
  bundle: {
    term: "번들 (Bundle)",
    desc: "여러 제품을 묶어서 하나의 세트로 함께 판매하는 것",
    example: "예: 아이크림 + 컨실러를 묶어서 '눈가 케어 세트'로 같이 팔면, 한 제품만 알던 고객이 다른 브랜드 제품도 같이 사보게 됨",
  },
  point: {
    term: "포인트 배율 프로모션",
    desc: "구매 금액에 비례해 적립되는 포인트를 평소보다 몇 배 더 주는 이벤트. 적립 포인트가 많을수록 '지금 사면 이득'이라는 느낌을 줌",
    example: "예: 평소 1,000엔당 1포인트인데 '오늘만 5배'면 1,000엔당 5포인트 - 사실상 할인처럼 작동",
  },
} as const;

export const dataReliability = [
  { claim: "눈가 처짐·탄력 저하가 최대 고민", source1: "클러스터 F 88,062건 1위", source2: "마이나비: 다크서클 61.5%, 주름 57.9%", confidence: "높음" },
  { claim: "탐색 단계 소비자가 대다수", source1: "CDJ 탐색 88.1%", source2: "케어 미실시율 69.2%와 정합", confidence: "높음" },
  { claim: "레티놀·나이아신아마이드 탐색 증가", source1: "리스닝마인드 트렌드 요약", source2: "에리크실르 신제품, 나이아신아마이드 80% 임상", confidence: "높음" },
  { claim: "가성비 아이크림 수요 명확", source1: "클러스터 H+L 32,923건", source2: "K-뷰티 가성비 차별화 포인트로 주목", confidence: "높음" },
  { claim: "K-뷰티 아이크림 일본 영향력", source1: "기존 데이터 미포함", source2: "Anua 라쿠텐 1위, 올리브영 오프라인 진출", confidence: "높음" },
];
