// src/lib/i18n.ts

export type Lang = 'ja' | 'en';

export const translations = {
  ja: {
    brand: {
      name: '日本若者防災復興協会',
      tag: '特定非営利活動法人',
      sub: 'Japan Youth Resilience Action Consortium (JYRAC)',
    },
    nav: {
      news: 'ホーム / 新着情報',
      about: '当法人について',
      services: '事業内容・活動',
      recruitment: 'メンバー募集',
      gioco: 'HUG Gioco (教材)',
      governance: '情報公開・設立公告',
      sns: '公式SNS一覧',
      contact: 'お問い合わせ',
    },
    gioco: {
      title: 'HUG Gioco — TKB型避難所運営ディスカッションゲーム',
      desc: '「HUG Gioco（ジョーコ）」は、TKB（トイレ・キッチン・ベッド）型避難所運営をテーマにした、子どもから大人まで直感的に学べる防災シミュレーションゲームです。',
      launch: '🚀 ゲームを起動する ➔',
    },
    footer: {
      copyright: '© 2026 特定非営利活動法人日本若者防災復興協会 All Rights Reserved.',
    },
  },
  en: {
    brand: {
      name: 'JYRAC',
      tag: 'NPO',
      sub: 'Japan Youth Resilience Action Consortium',
    },
    nav: {
      news: 'Home / News',
      about: 'About Us',
      services: 'Services & Activities',
      recruitment: 'Join Us',
      gioco: 'HUG Gioco (Learning Tool)',
      governance: 'Governance & Public Notice',
      sns: 'Official SNS',
      contact: 'Contact Us',
    },
    gioco: {
      title: 'HUG Gioco — TKB-type Evacuation Shelter Management Discussion Game',
      desc: '"HUG Gioco" is a disaster simulation game focused on TKB (Toilet, Kitchen, Bed) evacuation shelter management, designed for intuitive learning from children to adults.',
      launch: '🚀 Launch Game ➔',
    },
    footer: {
      copyright: '© 2026 Japan Youth Resilience Action Consortium (JYRAC) All Rights Reserved.',
    },
  },
};

export function getLangFromUrl(url: URL): Lang {
  const lang = url.searchParams.get('lang');
  return lang === 'en' ? 'en' : 'ja';
}

export function useTranslations(lang: Lang) {
  return translations[lang] || translations.ja;
}
