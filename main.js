"use strict";

const str = "<6>大晦日</6>";
//$ptn = "/\<[1-7]\>(.*)\<\/[1-7]\>/u";
// const ptn = "/\<([1-7])\>(.*)\<\/.\>/g";
// const rp = "<span class='f$1'>$2</span>";

// const replaced = str.replace(ptn, rp); // <6>大晦日</6>
const replaced = str.replace(/\<([1-7])\>(.*)\<\/.\>/g, "<span class='f$1'>$2</span>"); // <span class='f6'>大晦日</span>

console.log(replaced);