// 全症状データ（33テーマ）
// Pillar = 食いしばり / 頭痛 / 顎関節症 の3カテゴリ
// 各Pillarに10件のClusterが紐づく

export interface ClusterItem {
  num: string;
  title: string;
  shortTitle: string;
  href: string;
}

export interface PillarItem {
  key: string;
  name: string;
  emoji: string;
  href: string;
  description: string;
  clusters: ClusterItem[];
}

export const pillars: PillarItem[] = [
  {
    key: "kuishibari",
    name: "食いしばり",
    emoji: "🦷",
    href: "/symptoms/kuishibari",
    description: "朝の顎の疲れ、エラ張り、マウスピースでも改善しない悩みに。",
    clusters: [
      { num: "A01", shortTitle: "朝の顎の疲れ", title: "朝起きると顎がだるい・痛い", href: "/symptoms/kuishibari/morning-jaw-fatigue" },
      { num: "A02", shortTitle: "デスクワーク中", title: "デスクワーク中の食いしばり", href: "/symptoms/kuishibari/desk-work-bruxism" },
      { num: "A03", shortTitle: "マウスピース効かない", title: "マウスピースを使っても改善しない", href: "/symptoms/kuishibari/mouthpiece-ineffective" },
      { num: "A04", shortTitle: "肩こり・首こり", title: "肩こり・首こりが一緒にひどい", href: "/symptoms/kuishibari/shoulder-neck-stiffness" },
      { num: "A05", shortTitle: "子どもの食いしばり", title: "子どもの食いしばりが気になる", href: "/symptoms/kuishibari/kids-bruxism" },
      { num: "A06", shortTitle: "ストレス", title: "ストレスで食いしばりが悪化する", href: "/symptoms/kuishibari/stress-and-bruxism" },
      { num: "A07", shortTitle: "歯のすり減り", title: "歯がすり減ってきた", href: "/symptoms/kuishibari/tooth-wear" },
      { num: "A08", shortTitle: "セルフチェック", title: "食いしばりセルフチェック5項目", href: "/symptoms/kuishibari/self-check" },
      { num: "A09", shortTitle: "エラ張り", title: "エラ張りが気になる", href: "/symptoms/kuishibari/ela-and-bruxism" },
      { num: "A10", shortTitle: "就寝前ルーティン", title: "就寝前のセルフケアルーティン", href: "/symptoms/kuishibari/night-routine" }
    ]
  },
  {
    key: "headache",
    name: "頭痛",
    emoji: "🤕",
    href: "/symptoms/headache",
    description: "緊張型頭痛・片頭痛・天気痛など、慢性化した頭痛のお悩みに。",
    clusters: [
      { num: "B01", shortTitle: "緊張型頭痛", title: "緊張型頭痛が慢性化している", href: "/symptoms/headache/tension-headache" },
      { num: "B02", shortTitle: "こめかみ", title: "こめかみがズキズキ痛む", href: "/symptoms/headache/temple-headache" },
      { num: "B03", shortTitle: "後頭部", title: "後頭部が重く痛む", href: "/symptoms/headache/occipital-headache" },
      { num: "B04", shortTitle: "目の奥", title: "目の奥が痛い", href: "/symptoms/headache/eye-pressure-headache" },
      { num: "B05", shortTitle: "生理周期", title: "生理周期で頭痛が悪化する", href: "/symptoms/headache/menstrual-headache" },
      { num: "B06", shortTitle: "天気痛", title: "天気で頭痛が悪化する（天気痛）", href: "/symptoms/headache/weather-headache" },
      { num: "B07", shortTitle: "薬を減らしたい", title: "鎮痛剤を減らしたい", href: "/symptoms/headache/reduce-painkillers" },
      { num: "B08", shortTitle: "肩こり同時", title: "頭痛と肩こりが同時にひどい", href: "/symptoms/headache/headache-with-shoulder" },
      { num: "B09", shortTitle: "朝の頭痛", title: "朝起きると頭痛がする", href: "/symptoms/headache/morning-headache" },
      { num: "B10", shortTitle: "片頭痛", title: "片頭痛の頻度を減らしたい", href: "/symptoms/headache/migraine-care" }
    ]
  },
  {
    key: "tmj",
    name: "顎関節症",
    emoji: "😬",
    href: "/symptoms/tmj",
    description: "口が開かない、顎の音、左右差、耳の違和感のお悩みに。",
    clusters: [
      { num: "C01", shortTitle: "口が開かない", title: "口が開きにくい・開かない", href: "/symptoms/tmj/cant-open-mouth" },
      { num: "C02", shortTitle: "カクッと音", title: "顎を動かすとカクッと音がする", href: "/symptoms/tmj/clicking-sound" },
      { num: "C03", shortTitle: "顎の左右差", title: "顎の左右差が気になる", href: "/symptoms/tmj/jaw-asymmetry" },
      { num: "C04", shortTitle: "指2本分", title: "指2本分しか口が開かない", href: "/symptoms/tmj/2-finger-opening" },
      { num: "C05", shortTitle: "耳の痛み", title: "顎まわり・耳の痛みや耳鳴り", href: "/symptoms/tmj/jaw-ear-pain" },
      { num: "C06", shortTitle: "矯正治療中", title: "矯正治療中の顎の不調", href: "/symptoms/tmj/orthodontics-jaw" },
      { num: "C07", shortTitle: "スポーツ", title: "スポーツマウスガードを使う方の顎ケア", href: "/symptoms/tmj/sports-mouthguard" },
      { num: "C08", shortTitle: "頬の張り", title: "頬の張り・突っ張り感", href: "/symptoms/tmj/cheek-tension" },
      { num: "C09", shortTitle: "避けたい食習慣", title: "顎関節症の人が避けたい食習慣", href: "/symptoms/tmj/food-habits" },
      { num: "C10", shortTitle: "セルフチェック", title: "顎関節症セルフチェック", href: "/symptoms/tmj/self-check" }
    ]
  }
];

// 公開済みURLのリスト（実際に作成済みのページのみ true）
export const publishedHrefs = new Set([
  "/symptoms",
  "/symptoms/kuishibari",
  "/symptoms/headache",
  "/symptoms/tmj",
  "/symptoms/kuishibari/morning-jaw-fatigue"
]);

export const isPublished = (href: string): boolean => publishedHrefs.has(href);
