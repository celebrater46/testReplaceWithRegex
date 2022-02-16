"use strict";

const str = "<6>大晦日</6>";
const str2 = "<3>大晦日</3>です、<5>ヒデル</5>様！！";
//$ptn = "/\<[1-7]\>(.*)\<\/[1-7]\>/u";
// const ptn = "/\<([1-7])\>(.*)\<\/.\>/g";
// const rp = "<span class='f$1'>$2</span>";

str.replace(/<b>.*?<\/b>/g, "");
// const replaced = str.replace(ptn, rp); // <6>大晦日</6>
const replaced = str.replace(/<([1-7])>(.*)<\/.>/sg, "<span class='f$1'>$2</span>"); // <span class='f6'>大晦日</span>
// const replaced2 = str2.replace(/<([1-7])>(.*)<\/.>/sg, "<span class='f$1'>$2</span>"); // 失敗。<span class='f3'>大晦日</3>です、<5>ヒデル</span>様！！
const replaced2 = str2.replace(/<([1-7])>([^\x01-\x7E]*)<\/.>/sg, "<span class='f$1'>$2</span>"); // 成功。<span class='f6'>大晦日</span>
// (.*)ではなく、タグの中の文字の種類をちゃんと指定すること。

console.log(replaced);
console.log(replaced2);