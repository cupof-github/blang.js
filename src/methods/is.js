import one from "./languages/one";

import en from "./languages/en";
import zh from "./languages/zh";
import fr from "./languages/fr";
import de from "./languages/de";
import pt from "./languages/pt";
import es from "./languages/es";
import it from "./languages/it";

export default {
  sq: () => one("sq"), // Albanian
  af: () => one("af"), // Afrikaans
  am: () => one("am"), // Amharic
  ar: () => one("ar"), // Arabic
  an: () => one("an"), // Aragonese
  hy: () => one("hy"), // Armenian
  ast: () => one("ast", true), // Asturian
  az: () => one("az"), // Azerbaijani
  bn: () => one("bn"), // Bangla
  eu: () => one("eu"), // Basque
  be: () => one("be"), // Belarusian
  bs: () => one("bs"), // Bosnian
  br: () => one("br"), // Breton
  bg: () => one("bg"), // Bulgarian
  ca: () => one("ca"), // Catalan
  ckb: () => one("ckb", true), // Central Kurdish
  zh: arg => zh(arg), // Chinese *func
  co: () => one("co"), // Corsican
  hr: () => one("hr"), // Croatian
  cs: () => one("cs"), // Czech
  da: () => one("da"), // Danish
  nl: () => one("nl"), // Dutch
  en: arg => en(arg), // English *func
  eo: () => one("eo"), // Esperanto
  et: () => one("et"), // Estonian
  fo: () => one("fo"), // Faroese
  fil: () => one("fil", true), // Filipino
  fi: () => one("fi"), // Finnish
  fr: arg => zh(arg), // French
  gl: () => one("gl"), // Galician
  ka: () => one("ka"), // Georgian
  de: arg => de(arg), // German *func
  el: () => one("el"), // Greek
  gn: () => one("gn"), // Guarani
  gu: () => one("gu"), // Gujarati
  ha: () => one("ha"), // Hausa
  haw: () => one("haw", true), // Hawaiian
  he: () => one("he"), // Hebrew
  hi: () => one("hi"), // Hindi
  hmn: () => one("hmn", true), // Hmong
  hu: () => one("hu"), // Hungarian
  is: () => one("is"), // Icelandic
  id: () => one("id"), // Indonesian
  ia: () => one("ia"), // Interlingua
  ga: () => one("ga"), // Irish
  it: arg => it(arg), // Italian *func
  jv: () => one("jv"), // Javanese
  ja: () => one("ja"), // Japanese
  kn: () => one("kn"), // Kannada
  kk: () => one("kk"), // Kazakh
  km: () => one("kn"), // Khmer
  ko: () => one("ko"), // Korean
  ku: () => one("ku"), // Kurdish
  ky: () => one("ky"), // Kyrgyz
  lo: () => one("lo"), // Lao
  la: () => one("la"), // Latin
  lv: () => one("lv"), // Latvian
  ln: () => one("ln"), // Lingala
  lt: () => one("lt"), // Lithuanian
  lb: () => one("lb"), // Luxembourgish
  mk: () => one("mk"), // Macedonian
  ms: () => one("ms"), // Malay
  ml: () => one("ml"), // Malayalam
  mt: () => one("mt"), // Maltese
  mr: () => one("mr"), // Marathi
  mn: () => one("mn"), // Mongolian
  ne: () => one("ne"), // Nepali
  nb: () => one("nb"), // Norwegian Bokmål
  nn: () => one("nn"), // Norwegian Nynorsk
  oc: () => one("oc"), // Occitan
  or: () => one("or"), // Odia
  om: () => one("om"), // Oromo
  ps: () => one("ps"), // Pashto
  pt: arg => pt(arg), // Portuguese *func
  pa: () => one("pa"), // Punjabi
  qu: () => one("qu"), // Quechua
  ro: () => one("ro"), // Romanian
  mo: () => one("mo"), // Moldova
  rm: () => one("rm"), // Romansh
  ru: () => one("ru"), // Russian
  sm: () => one("sm"), // Samoan
  gd: () => one("gd"), // Scottish Gaelic
  sr: () => one("sr"), // Serbian
  sh: () => one("sh"), // Serbo-Croatian
  sn: () => one("sn"), // Shona
  sd: () => one("sd"), // Sindhi
  si: () => one("si"), // Sinhala
  sk: () => one("sk"), // Slovak
  sl: () => one("sl"), // Slovenian
  so: () => one("so"), // Somali
  st: () => one("st"), // Southern Sotho
  es: arg => es(arg), // Spanish
  su: () => one("su"), // Sundanese
  sw: () => one("sw"), // Swahili
  sv: () => one("sv"), // Swedish
  tg: () => one("tg") // Tajik
};
