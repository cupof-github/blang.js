# Belang.js

>  Detect browser's default language.

![logo](./img/logo.png)

Blang.js is light-weight and none-dependency **language detect** javascript library. Blang.js is able to detect user's set **default language** on Web-browser.

```js
import lang from "blang";

lang.is.en(); // if English, return 'true'

lang.is.fr(); // if not French, return false
lang.is.gb(); // if not German, return false
lang.is.es(); // if not Spanish, return false
lang.is.ru(); // if not Russian, return false

// ... goes on
```

> ! Working only web-browser

## Installation

```js
// npm
npm i blang
// yarn
yarn add blang
// cdn
<script src="https://unpkg.com/dist/blang.min.js"></script>
```

### Import library

ES-2015 and so (Babel)

```js
import lang from "blang";

lang.is.en(); // call library
```

CommonJS

```js
const lang =  require('blang');

lang.is.en(); // call library
```

Import library with `<script>` tag

```html
<!-- import library from script tag -->
<script src="/path/to/dist/blang.min.js"></script>
<!-- OR from CDN -->
<script src="https://unpkg.com/blang/dist/blang.min.js"></script>

<script>
// you can access library with 'blang' object
blang.is.en(); // call library

</script>
```

### is.languageCode() : Boolean

`is` object can detect a browser's language whether what you expected.

Quick example below snippet. If user's browser-language has set as **English**, return `true`. Otherwise return `false`.

```js
/* detect english of not */
import lang from "blang";

// true if, en-us, en-gp, en-in, en-ca, en-nz ...*
lang.is.en();
```

Currently detectable **108 languages**.

[Available language lists](#blang_lists)

```js
// if English, return 'true'
lang.is.en(); // English
lang.is.fr(); // French
lang.is.ru(); // Russian
lang.is.he(); // Hebrew
lang.is.zh(); // Chinese
lang.is.hi(); // Hindi

// .. goes on
```

#### multiple regions

Some languages have multiple regions like country in one language. For example **English** have `en-au`, `en-ca`, `en-in`, `en-za`, `en-gb`, `en-nz`, `en-us` and `en`.

In that case, you can define a regions with argument.

> Regions are available in 'English', 'Chinese', 'French', 'German', 'Italian', 'Portuguese', 'Spanish'

```js
/* detect one-region in English :String */
lang.is.en("gb"); // if 'en-gb'

/* multiple regions in English :Array */
lang.is.en(['us', 'ca']); // if 'en', 'en-us' and 'en-ca'
lang.is.en(['au', 'nz']); // // if 'en', 'en-au' and 'en-nz'
```

### plural(array) : Boolean

`plural` method is detect a languages.

Below snippet is to return boolean, if browser's language has setting as `English`, `French`, `Spanish` or `German`.

```js
import lang from "blang";

lang.plural(['en', 'fr', 'es', 'de']);
```

### detect() : String

`detect` method is to retrun browser's setting language as string.

```js
import lang from "blang";

lang.detect();
// e.x.p: fr-ca, en-us, en, zh-tw ... etc
```

## Practical usage

Blang.js is very useful for a case of switching a rendering components by language with Virtual-DOM libs ( React.js, Vue.js, and so.) .

#### vue.js case ( vuex )

```html
<template>
<div>
<!-- if English to be rendering  -->
<div v-if="lang().en()">
  <h2> Your expected it's English 😆 </h2>
</div>

<!-- if setting as 'en-ca'  -->
<div v-if="lang().en('ca')">
  <h2> 🇨🇦  😆 </h2>
</div>

<!-- if setting as 'en-au', 'en-nz' or 'en'  -->
<div v-if="lang().en(['au', 'nz'])">
  <h2> 🇦🇺  🇳🇿  😆 </h2>
</div>

</div>
</template>


<script>
import lang from "blang";

export default {
  name: 'HelloWorld',
  methods : {
    lang() { return lang.is; },
    plural(arg) { return lang.plural(arg) }
  }
}
</script>
```

#### react.js case

This example with React.js. below snippet used   [react-extras](https://github.com/sindresorhus/react-extras).

```js
import { Choose } from "react-extras";
import language from "blang";

//...
render() {
 const lang = language.is;

 return(
 <div>
　{/* Choose */}
  <Choose>
     /* rendering if set as English */
    <Choose.When condition={lang.en()}>
     <h1> Hello! </h1>
    </Choose.When>
    /* rendering if set as Chinise */
    <Choose.When condition={lang.zh()}>
     <h1> 你好! </h1>
    </Choose.When>
    /* rendering if set as Japanese */
    <Choose.When condition={lang.ja()}>
     <h1> こんにちは！ </h1>
    </Choose.When>

    <Choose.Otherwise>
     <h1> Somthing else. </h1>
    </Choose.Otherwise>
  </Choose>
 </div>
 )
} // ! render()
```

#### axios case

You can easy to switching a request by language.

```js
import axios from "axios";
import lang from "blang";

let url;

if(lang.is.ja()) {
  // if japan
  url = '/req/for/japanese';
} else {
  // if not japan
  url = '/req/for/english';
}

axios.get(url)
     .then((val) => {
      // diffrent request by language
     });
```

<div id='blang_lists'></div>

## Detectable-languages

Those list of data are from Google-Chrome have.

| Language          |                                                                                                                                                                   code                                                                                                                                                                   |
| ----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Albanian          |                                                                                                                                                                    sq                                                                                                                                                                    |
| Afrikaans         |                                                                                                                                                                    af                                                                                                                                                                    |
| Amharic           |                                                                                                                                                                    am                                                                                                                                                                    |
| Arabic            |                                                                                                                                                                    ar                                                                                                                                                                    |
| Aragonese         |                                                                                                                                                                    an                                                                                                                                                                    |
| Armenian          |                                                                                                                                                                    hy                                                                                                                                                                    |
| Asturian          |                                                                                                                                                                    ast                                                                                                                                                                   |
| Azerbaijani       |                                                                                                                                                                    az                                                                                                                                                                    |
| Bangla            |                                                                                                                                                                    bn                                                                                                                                                                    |
| Basque            |                                                                                                                                                                    eu                                                                                                                                                                    |
| Belarusian        |                                                                                                                                                                    be                                                                                                                                                                    |
| Bosnian           |                                                                                                                                                                    bs                                                                                                                                                                    |
| Breton            |                                                                                                                                                                    br                                                                                                                                                                    |
| Bulgarian         |                                                                                                                                                                    bg                                                                                                                                                                    |
| Catalan           |                                                                                                                                                                    ca                                                                                                                                                                    |
| Central Kurdish   |                                                                                                                                                                    ckb                                                                                                                                                                   |
| Chinese           |                                                                                                                    (Chinese) : zh <br /> (Hong Kong) : zh-HK <br /> (Simplified) : zh-CN <br /> (Traditional) : zh-TW                                                                                                                    |
| Corsican          |                                                                                                                                                                    co                                                                                                                                                                    |
| Croatian          |                                                                                                                                                                    hr                                                                                                                                                                    |
| Czech             |                                                                                                                                                                    cs                                                                                                                                                                    |
| Danish            |                                                                                                                                                                    da                                                                                                                                                                    |
| Dutch             |                                                                                                                                                                    nl                                                                                                                                                                    |
| English           |                                                          (English) : en <br /> (Australia) : en-AU   <br /> (Canada) : en-CA <br />  (India) : en-IN <br />  (New Zealand) : en-NZ <br /> (South Africa) : en-ZA <br /> (United Kingdom) : en-GB <br /> (United States) : en-US                                                          |
| Esperanto         |                                                                                                                                                                    eo                                                                                                                                                                    |
| Estonian          |                                                                                                                                                                    et                                                                                                                                                                    |
| Faroese           |                                                                                                                                                                    fo                                                                                                                                                                    |
| Filipino          |                                                                                                                                                                    fil                                                                                                                                                                   |
| Finnish           |                                                                                                                                                                    fi                                                                                                                                                                    |
| French            |                                                                                                                         (French) : fr<br /> (Canada) : fr-CA <br /> (France) : fr-FR <br /> (Switzerland) : fr-CH                                                                                                                        |
| Galician          |                                                                                                                                                                    gl                                                                                                                                                                    |
| Georgian          |                                                                                                                                                                    ka                                                                                                                                                                    |
| German            |                                                                                                         (German) : de <br /> (Austria) : de-AT<br /> (Germany) : de-DE <br /> (Liechtenstein) : de-LI<br /> (Switzerland) : de-CH                                                                                                        |
| Greek             |                                                                                                                                                                    el                                                                                                                                                                    |
| Guarani           |                                                                                                                                                                    gn                                                                                                                                                                    |
| Gujarati          |                                                                                                                                                                    gu                                                                                                                                                                    |
| Hausa             |                                                                                                                                                                    ha                                                                                                                                                                    |
| Hawaiian          |                                                                                                                                                                    haw                                                                                                                                                                   |
| Hebrew            |                                                                                                                                                                    he                                                                                                                                                                    |
| Hindi             |                                                                                                                                                                    hi                                                                                                                                                                    |
| Hmong             |                                                                                                                                                                    hmn                                                                                                                                                                   |
| Hungarian         |                                                                                                                                                                    hu                                                                                                                                                                    |
| Icelandic         |                                                                                                                                                                    is                                                                                                                                                                    |
| Indonesian        |                                                                                                                                                                    id                                                                                                                                                                    |
| Interlingua       |                                                                                                                                                                    ia                                                                                                                                                                    |
| Irish             |                                                                                                                                                                    ga                                                                                                                                                                    |
| Italian           |                                                                                                                                      (Italian) : it<br /> (Italy) : it-IT<br />(Switzerland) : it-CH                                                                                                                                     |
| Javanese          |                                                                                                                                                                    jv                                                                                                                                                                    |
| Japanese          |                                                                                                                                                                    ja                                                                                                                                                                    |
| Kannada           |                                                                                                                                                                    kn                                                                                                                                                                    |
| Kazakh            |                                                                                                                                                                    kk                                                                                                                                                                    |
| Khmer             |                                                                                                                                                                    km                                                                                                                                                                    |
| Korean            |                                                                                                                                                                    ko                                                                                                                                                                    |
| Kurdish           |                                                                                                                                                                    ku                                                                                                                                                                    |
| Kyrgyz            |                                                                                                                                                                    ky                                                                                                                                                                    |
| Lao               |                                                                                                                                                                    lo                                                                                                                                                                    |
| Latin             |                                                                                                                                                                    la                                                                                                                                                                    |
| Latvian           |                                                                                                                                                                    lv                                                                                                                                                                    |
| Lingala           |                                                                                                                                                                    ln                                                                                                                                                                    |
| Lithuanian        |                                                                                                                                                                    lt                                                                                                                                                                    |
| Luxembourgish     |                                                                                                                                                                    lb                                                                                                                                                                    |
| Macedonian        |                                                                                                                                                                    mk                                                                                                                                                                    |
| Malay             |                                                                                                                                                                    ms                                                                                                                                                                    |
| Malayalam         |                                                                                                                                                                    ml                                                                                                                                                                    |
| Maltese           |                                                                                                                                                                    mt                                                                                                                                                                    |
| Marathi           |                                                                                                                                                                    mr                                                                                                                                                                    |
| Mongolian         |                                                                                                                                                                    mn                                                                                                                                                                    |
| Nepali            |                                                                                                                                                                    ne                                                                                                                                                                    |
| Norwegian Bokmål  |                                                                                                                                                                    nb                                                                                                                                                                    |
| Norwegian Nynorsk |                                                                                                                                                                    nn                                                                                                                                                                    |
| Occitan           |                                                                                                                                                                    oc                                                                                                                                                                    |
| Odia              |                                                                                                                                                                    or                                                                                                                                                                    |
| Oromo             |                                                                                                                                                                    om                                                                                                                                                                    |
| Pashto            |                                                                                                                                                                    ps                                                                                                                                                                    |
| Persian           |                                                                                                                                                                    fa                                                                                                                                                                    |
| Polish            |                                                                                                                                                                    pl                                                                                                                                                                    |
| Portuguese        |                                                                                                                                   (Portuguese) : pt <br />  (Brazil) : pt-BR <br /> (Portugal) : pt-PT                                                                                                                                   |
| Punjabi           |                                                                                                                                                                    pa                                                                                                                                                                    |
| Quechua           |                                                                                                                                                                    qu                                                                                                                                                                    |
| Romanian          |                                                                                                                                                   (Romanian) : ro <br /> (Moldova) : mo                                                                                                                                                  |
| Romansh           |                                                                                                                                                                    rm                                                                                                                                                                    |
| Russian           |                                                                                                                                                                    ru                                                                                                                                                                    |
| Samoan            |                                                                                                                                                                    sm                                                                                                                                                                    |
| Scottish Gaelic   |                                                                                                                                                                    gd                                                                                                                                                                    |
| Serbian           |                                                                                                                                                                    sr                                                                                                                                                                    |
| Serbo-Croatian    |                                                                                                                                                                    sh                                                                                                                                                                    |
| Shona             |                                                                                                                                                                    sn                                                                                                                                                                    |
| Sindhi            |                                                                                                                                                                    sd                                                                                                                                                                    |
| Sinhala           |                                                                                                                                                                    si                                                                                                                                                                    |
| Slovak            |                                                                                                                                                                    sk                                                                                                                                                                    |
| Slovenian         |                                                                                                                                                                    sl                                                                                                                                                                    |
| Somali            |                                                                                                                                                                    so                                                                                                                                                                    |
| Southern Sotho    |                                                                                                                                                                    st                                                                                                                                                                    |
| Spanish           | (Spanish) : es <br /> (Argentina) : es-AR <br /> (Chile) : es-CL <br /> (Colombia) : es-CO <br /> (Costa Rica) : es-CR <br /> (Honduras) : es-HN <br /> (Latin America) : es-419 <br /> (Mexico) : es-MX <br /> (Peru) : es-PE <br /> (Spain) : es-ES <br /> (United States) : es-US <br /> (Uruguay) : es-UY <br /> (Venezuela) : es-VE |
| Sundanese         |                                                                                                                                                                    su                                                                                                                                                                    |
| Swahili           |                                                                                                                                                                    sw                                                                                                                                                                    |
| Swedish           |                                                                                                                                                                    sv                                                                                                                                                                    |
| Tajik             |                                                                                                                                                                    tg                                                                                                                                                                    |
| Tamil             |                                                                                                                                                                    ta                                                                                                                                                                    |
| Tatar             |                                                                                                                                                                    tt                                                                                                                                                                    |
| Telugu            |                                                                                                                                                                    te                                                                                                                                                                    |
| Thai              |                                                                                                                                                                    th                                                                                                                                                                    |
| Tigrinya          |                                                                                                                                                                    ti                                                                                                                                                                    |
| Tongan            |                                                                                                                                                                    to                                                                                                                                                                    |
| Turkish           |                                                                                                                                                                    tr                                                                                                                                                                    |
| Turkmen           |                                                                                                                                                                    tk                                                                                                                                                                    |
| Twi               |                                                                                                                                                                    tw                                                                                                                                                                    |
| Ukrainian         |                                                                                                                                                                    uk                                                                                                                                                                    |
| Uyghur            |                                                                                                                                                                    ug                                                                                                                                                                    |
| Uzbek             |                                                                                                                                                                    uz                                                                                                                                                                    |
| Urdu              |                                                                                                                                                                    ur                                                                                                                                                                    |
| Vietnamese        |                                                                                                                                                                    vi                                                                                                                                                                    |
| Walloon           |                                                                                                                                                                    wa                                                                                                                                                                    |
| Welsh             |                                                                                                                                                                    cy                                                                                                                                                                    |
| Western Frisian   |                                                                                                                                                                    fy                                                                                                                                                                    |
| Xhosa             |                                                                                                                                                                    xh                                                                                                                                                                    |
| Yiddish           |                                                                                                                                                                    yi                                                                                                                                                                    |
| Yoruba            |                                                                                                                                                                    yo                                                                                                                                                                    |
| Zulu              |                                                                                                                                                                    zu                                                                                                                                                                    |

## LICENCE

MIT
