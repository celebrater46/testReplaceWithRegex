"use strict";

const str = "<6>大晦日</6>";
const str2 = "<3>大晦日</3>です、<5>ヒデル</5>様！！";
const str3 = "人間の息子・｜堕天男《ルシファー》と、天使の母・｜沙麻《サーマ》。";
const str4 = "人間の息子・<ruby><rb>堕天男</rb><rp>(</rp><rt>ルシファー</rt><rp>)</rp></ruby>と、天使の母・<ruby><rb>沙麻</rb><rp>(</rp><rt>サーマ</rt><rp>)</rp></ruby>。";
//$ptn = "/\<[1-7]\>(.*)\<\/[1-7]\>/u";
// const ptn = "/\<([1-7])\>(.*)\<\/.\>/g";
// const rp = "<span class='f$1'>$2</span>";

str.replace(/<b>.*?<\/b>/g, "");
// const replaced = str.replace(ptn, rp); // <6>大晦日</6>

// <span class='f6'>大晦日</span>
const replaced = str.replace(
    /<([1-7])>(.*)<\/.>/sg,
    "<span class='f$1'>$2</span>"
);

// 失敗。<span class='f3'>大晦日</3>です、<5>ヒデル</span>様！！
// const replaced2 = str2.replace(/<([1-7])>(.*)<\/.>/sg, "<span class='f$1'>$2</span>");

// (.*)ではなく、タグの中の文字の種類をちゃんと指定したら成功。<span class='f6'>大晦日</span>
// [^\x01-\x7E] は、あらゆる全角文字の羅列の表現。1バイト文字という指定を ^ で否定して、「1バイト文字以外」としている
const replaced2 = str2.replace(
    /<([1-7])>([^\x01-\x7E]*)<\/.>/sg,
    "<span class='f$1'>$2</span>"
);

// 《 以外の全角文字の繰り返しは、[^《]+ と指定する。
// さらにそれを () で括ってパターンとし、置き換え後の $1, $2 に適用させている。
const replaced3 = str3.replace(
    // /｜(^[《]*)《(^[》]*)》/g,
    // /｜(?!.*《).*《(?!.*》).*》/g,
    /｜([^《]+)《([^》]+)》/g,
    "<ruby><rb>$1</rb><rp>(</rp><rt>$2</rt><rp>)</rp></ruby>"
);

const replaced4 = str4.replace(
    /<ruby><rb>([^\x01-\x7E]+)<\/rb><rp>\(<\/rp><rt>([^\x01-\x7E]+)<\/rt><rp>\)<\/rp><\/ruby>/g,
    "｜$1《$2》"
);

console.log(replaced);
console.log(replaced2);
console.log(replaced3);
console.log(replaced4);