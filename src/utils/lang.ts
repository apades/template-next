export enum Language {
  English = 'en',
  'Chinese(Simplified)' = 'zh-CN',
  'Chinese(Traditional)' = 'zh-TW',

  // 按知名度排序
  Spanish = 'es',
  French = 'fr',
  Japanese = 'ja',
  German = 'de',
  Portuguese = 'pt',
  Arabic = 'ar',
  Russian = 'ru',
  Italian = 'it',
  Korean = 'ko',
  Hindi = 'hi',
  Dutch = 'nl',
  Polish = 'pl',

  // 以下按字母表排序
  Amharic = 'am',
  Bulgarian = 'bg',
  Bengali = 'bn',
  Catalan = 'ca',
  Czech = 'cs',
  Danish = 'da',
  Greek = 'el',
  Estonian = 'et',
  Persian = 'fa',
  Finnish = 'fi',
  Filipino = 'fil',
  Gujarati = 'gu',
  Hebrew = 'he',
  Croatian = 'hr',
  Hungarian = 'hu',
  Indonesian = 'id',
  Kannada = 'kn',
  Lithuanian = 'lt',
  Latvian = 'lv',
  Malayalam = 'ml',
  Marathi = 'mr',
  Malay = 'ms',
  Norwegian = 'no',
  Romanian = 'ro',
  Slovak = 'sk',
  Slovenian = 'sl',
  Serbian = 'sr',
  Swedish = 'sv',
  Swahili = 'sw',
  Tamil = 'ta',
  Telugu = 'te',
  Thai = 'th',
  Turkish = 'tr',
  Ukrainian = 'uk',
  Urdu = 'ur',
  Vietnamese = 'vi',
}

export const LanguageNativeNames: Record<Language, string> = {
  en: 'English',
  'zh-CN': '中文(简体)',
  'zh-TW': '中文(繁體)',
  es: 'Español',
  fr: 'Français',
  ja: '日本語',
  de: 'Deutsch',
  pt: 'Português',
  ar: 'العربية',
  ru: 'Русский',
  it: 'Italiano',
  ko: '한국어',
  hi: 'हिन्दी',
  nl: 'Nederlands',
  pl: 'Polski',
  am: 'አማርኛ',
  bg: 'Български',
  bn: 'বাংলা',
  ca: 'Català',
  cs: 'Čeština',
  da: 'Dansk',
  el: 'Ελληνικά',
  et: 'Eesti',
  fa: 'فارسی',
  fi: 'Suomi',
  fil: 'Filipino',
  gu: 'ગુજરાતી',
  he: 'עברית',
  hr: 'Hrvatski',
  hu: 'Magyar',
  id: 'Indonesia',
  kn: 'ಕನ್ನಡ',
  lt: 'Lietuvių',
  lv: 'Latviešu',
  ml: 'മലയാളം',
  mr: 'मराठी',
  ms: 'Bahasa Melayu',
  no: 'Norsk',
  ro: 'Română',
  sk: 'Slovenčina',
  sl: 'Slovenščina',
  sr: 'Српски',
  sv: 'Svenska',
  sw: 'Kiswahili',
  ta: 'தமிழ்',
  te: 'తెలుగు',
  th: 'ไทย',
  tr: 'Türkçe',
  uk: 'Українська',
  ur: 'اردو',
  vi: 'Tiếng Việt',
}

export const locales = Object.keys(LanguageNativeNames)
