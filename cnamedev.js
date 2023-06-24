// 2023-06-24 10:22:33
const $=$substore,bl=$arguments["bl"],yw=$arguments["yw"],isp=$arguments["isp"],yun=$arguments["yun"],city=$arguments["city"],flag=$arguments["flag"],game=$arguments["game"],yuan=$arguments["yuan"],sheng=$arguments["sheng"],offtz=$arguments["offtz"],debug=$arguments["debug"],numone=$arguments["snone"],keyp="3.s",h=$arguments.h?decodeURI($arguments.h):"",min=$arguments.min?decodeURI($arguments.min):"",tzname=$arguments.tz?decodeURI($arguments.tz):"",firstN=$arguments.name?decodeURI($arguments.name):"";let FGF=$arguments.fgf==undefined?" ":decodeURI($arguments.fgf),XHFGF=$arguments.sn==undefined?" ":decodeURI($arguments.sn),{isLoon:isLoon,isSurge:isSurge}=$substore.env,dns=$arguments["dnsjx"],target=isLoon?"Loon":isSurge?"Surge":undefined,keypr="peedtest";let cd=$arguments["cd"]?$arguments["cd"]:460,timeout=$arguments["timeout"]?$arguments["timeout"]:1520,writet="",innum=1728e5,loontrue=false,onen=false,Sue=false;if(min!==""){Sue=true;innum=parseInt(min,10)*6e4;writet=$persistentStore.write(JSON.stringify(innum),"time-cache")}else if(h!==""){Sue=true;innum=parseInt(h,10)*36e5;writet=$persistentStore.write(JSON.stringify(innum),"time-cache")}else{writet=$persistentStore.write(JSON.stringify(innum),"time-cache")}const nlc =/\u9080\u8bf7|\u8fd4\u5229|\u5faa\u73af|\u7981\u6b62|\u5b98\u7f51|\u4f7f\u7528|\u5ba2\u670d|\u7f51\u7ad9|\u7f51\u5740|\u83b7\u53d6|\u8ba2\u9605|\u6d41\u91cf|\u5230\u671f|\u4e0b\u6b21|\u7248\u672c|\u5b98\u5740|\u5907\u7528|\u5230\u671f|\u8fc7\u671f|\u5df2\u7528|\u56fd\u5185|\u56fd\u9645|\u56fd\u5916|\u8054\u7cfb|\u90ae\u7bb1|\u5de5\u5355|\u8d29\u5356|\u5012\u5356|\u9632\u6b62|(\b(USE|USED|TOTAL|EXPIRE|EMAIL)\b)|\d\s?g/i;async function operator(e){let t=0;const n=new Date;const s=isLoon||isSurge;if(!s){$.error(`No Loon or Surge`);return e}if(typeof scriptResourceCache==="undefined"){console.log("\nNCNAME: 不支持此 SubStore,\n查看脚本说明\nhttps://github.com/Keywos/rule/raw/main/cname.js");if(target=="Surge"){$notification.post("NCNAME Sub-Store未更新","","请点击或查看log查看脚本说明安装对应版本",{url:"https://github.com/Keywos/rule/raw/main/Sub-Store/Sub-Store.sgmodule"})}else if(target=="Loon"){$notification.post("NCNAME Sub-Store未更新","","请点击安装插件, 或查看log安装对应版本, 并关闭原本的substore","loon://import?plugin=https://gitlab.com/lodepuly/vpn_tool/-/raw/main/Tool/Loon/Plugin/Sub-Store.plugin")}return e}var i=$arguments["bs"]?$arguments["bs"]:12;const r=e.length;console.log(`设定api超时: ${zhTime(timeout)}`);console.log(`有缓api超时: ${zhTime(cd)}`);console.log(`批处理节点数: ${i} 个`);console.log(`开始处理节点: ${r} 个`);e=e.filter((e=>!nlc.test(e.name)));let o=0,a="",c="",u=false,m=false;do{while(o<e.length&&!u){const t=e.slice(o,o+1);await Promise.all(t.map((async e=>{try{const t=new Map;const n=getid(e);if(t.has(n)){return t.get(n)}const s=scriptResourceCache.get(n);if(s){if(!onen){timeout=cd;onen=true;u=true}const e=scriptResourceCache.gettime(n);let t=(new Date).getTime();let s="";if(target=="Loon"){let n="";const i={"1分钟":6e4,"5分钟":3e5,"10分钟":6e5,"30分钟":18e5,"1小时":36e5,"2小时":72e5,"3小时":108e5,"6小时":216e5,"12小时":432e5,"24小时":864e5,"48小时":1728e5,"72小时":2592e5,"参数传入":"innums"};c=$persistentStore.read("节点缓存有效期");n=i[c]||1728e5;if(n=="innums"){n=innum}s=zhTime(parseInt(e,10)-t+parseInt(n,10))}else if(target=="Surge"&&Sue){s=zhTime(parseInt(e,10)-t+parseInt(innum,10))}else{s=zhTime(parseInt(e,10)-t+parseInt(TIMEDKEY,10))}a=`, ${s}后过期 \n`}}catch(e){}})));o+=1}let n=0;while(n<e.length){const t=e.slice(n,n+i);await Promise.all(t.map((async e=>{try{let t=[],n=e.server,s="",i="",r="",o="",a=false,c="",u="",m="",g="",f="",d="",l=false,h=false,p=false;const $=await AliD(n);switch($){case"keyn":p=true;$=n;break;default:e.keyrk=$;if(!p){if(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test($)){l=true}else if(/^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test($)){h=true}}break}const _=await OUTIA(e);let{country:y,countryCode:w,city:S,query:b}=_;debug&&(e.keyoutld=_,console.log("落地信息 "+JSON.stringify(_)));s=y==="中国"?S:yw?w:y;let C=b!==$;if(C){if(!p||l){const t=await SPEC(n,$);let{country:s,regionName:r,city:o,isp:c,ip:d}=t;debug&&(e.keyinsp=t);a=s==="中国";const l={"电信":"🅳","联通":"🅻","移动":"🆈","广电":"🅶"};if(a){debug&&(e.keyinsp=t,console.log("国内入口 "+JSON.stringify(t)));i=d;if(isp&&flag){c=c.replace(/中国/g,"");flag&&(m=l.hasOwnProperty(c)?l[c]:"🅲")}else if(isp){u=/电信|联通|移动|广电/.test(c)?c.replace(/中国/g,""):"企业"}r===o&&(o="");if(sheng&&city){g=r;f=o}else if(sheng){g=r}else if(city){f=o?o:r}}}if(p||h||!a){const t=await INIA(n);let{country:s,city:r,query:o,regionName:a}=t;debug&&(e.keyinipapi=t,console.log("ipapi入口 "+JSON.stringify(t)));i=o;if(s==="中国"){/[a-zA-Z]/.test(r)&&(r=a);r===a&&(a="");if(sheng&&city){g=a;f=r}else if(sheng){g=a}else if(city){f=r?r:a}flag&&(m="🅲")}else{if(o===b){flag&&(m="🆉");(sheng||city||isp)&&(d="直连")}else if(yuan){flag&&(m="🅲");(sheng||city||isp)&&(d=s)}else{flag&&(m="🆇");(sheng||city||isp)&&(d="境外")}}}}else{flag&&(m="🆉");(sheng||city||isp)&&(d="直连")}flag&&(o=getflag(w));game&&(c=/game|游戏/i.test(e.name)?flag?"🎮":FGF+"Game":c);if(bl){const t=e.name.match(/(倍率\D?((\d\.)?\d+)\D?)|((\d\.)?\d+)(倍|X|x|×)/);if(t){const e=t[0].match(/(\d[\d.]*)/)[0];if(e!=="1"){r=FGF+e+"X"}}}!isp&&!city&&!sheng&&(m="",FGF="");t=t.concat(firstN,m,g,f,u,d,FGF,o,s,c,r).filter((e=>e!==""));const N=t.join("");dns&&(e.server=i);e.name=N;e.qc=i+b}catch(e){}})));!onen&&await sleep(50);n+=i}t++;e=removels(e);m=e.length<r*.2||false;m&&t===1&&(cd=timeout,await sleep(50))}while(m&&t<2);t<3&&console.log("任务执行次数: "+t);e=removeqc(e);e=jxh(e);numone&&(e=onee(e));let g=e.length;const f=new Date;const d=f.getTime()-n.getTime();if(dns){console.log(`dns解析后共: ${g} 个`)}apiRead>0?console.log(`读取api缓存: ${apiRead} 个`):null;apiw>0?console.log(`写入api缓存: ${apiw} 个`):null;console.log(`处理完后剩余: ${g} 个`);if(target=="Loon"){console.log("缓存过期时间: "+c+", 还剩"+a.replace(/,|\n/g,""))}else{console.log("缓存过期时间: "+zhTime(TIMEDKEY)+", 还剩"+a.replace(/,|\n/g,""))}console.log(`此方法总用时: ${zhTime(d)}\n----For New CNAME----`);const l=apiRead?`读取缓存:${apiRead} `:"";const h=apiw?`写入缓存:${apiw}, `:"";const p=g==r?"全部通过测试, ":"去除无效节点后有"+g+"个, ";if(!offtz){$notification.post(`${tzname}共${r}个节点`,"",`${h}${l}${a}${p}用时:${zhTime(d)}`)}return e}function getflag(e){const t=e.toUpperCase().split("").map((e=>127397+e.charCodeAt()));return String.fromCodePoint(...t).replace(/🇹🇼/g,"🇨🇳")}function sleep(e){return new Promise((t=>setTimeout(t,e)))}let apiRead=0,apiw=0;const outs=new Map;async function OUTIA(e){const t=getid(e);if(outs.has(t)){return outs.get(t)}const n=scriptResourceCache.get(t);if(n){apiRead++;return n}else{const n=1;const s=new Promise(((i,r)=>{if(cd<1&&onen){return s}else{const s=async o=>{const a=`http://ip-api.com/json?lang=zh-CN&fields=status,message,country,countryCode,city,query`;let c=ProxyUtils.produce([e],target);try{const e=await Promise.race([$.http.get({url:a,node:c,"policy-descriptor":c}),new Promise(((e,t)=>setTimeout((()=>t(new Error("timeout"))),timeout)))]);const n=JSON.parse(e.body);if(n.status==="success"){scriptResourceCache.set(t,n);apiw++;i(n)}else{r(new Error(n.message))}}catch(e){if(o<n){s(o+1)}else{r(e)}}};s(0)}}));outs.set(t,s);return s}}const ali=new Map;async function AliD(e){const t=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$|^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test(e);if(t){return e}else{const t=getaliid(e);if(ali.has(t)){return ali.get(t)}const n=scriptResourceCache.get(t);if(n){return n}else{const n=new Promise(((s,i)=>{if(cd<1&&onen){return n}else{const n=`http://223.5.5.5/resolve?name=${e}&type=A&short=1`;const r=new Promise(((e,t)=>{setTimeout((()=>{t(new Error("timeout"))}),timeout)}));const o=$.http.get({url:n}).then((e=>{const n=JSON.parse(e.body);if(n.length>0){scriptResourceCache.set(t,n[0]);s(n[0])}else{s("keyn")}})).catch((e=>{i(e)}));Promise.race([r,o]).catch((e=>{i(e)}))}}));ali.set(t,n);return n}}}const spapi=new Map;async function SPEC(e,t){const n=getspcn(e);if(spapi.has(n)){return spapi.get(n)}const s=scriptResourceCache.get(n);if(s){return s}else{const e=new Promise(((s,i)=>{if(cd<1&&onen){return e}else{const e=t;const r=`https://api-v${keyp}${keypr}.cn/ip?ip=${e}`;const o=new Promise(((e,t)=>{setTimeout((()=>{t(new Error("timeout"))}),timeout)}));const a=$.http.get({url:r}).then((e=>{const t=JSON.parse(e.body);if(t.data){const{country:e,province:i,city:r,isp:o,ip:a}=t.data;const c={country:e,regionName:i,city:r,isp:o,ip:a};s(c);scriptResourceCache.set(n,c)}else{i(new Error)}})).catch((e=>{i(e)}));Promise.race([o,a]).catch((e=>{i(e)}))}}));ins.set(n,e);return e}}const ins=new Map;async function INIA(e){const t=getinid(e);if(ins.has(t)){return ins.get(t)}const n=scriptResourceCache.get(t);if(n){return n}else{const n=new Promise(((s,i)=>{if(cd<1&&onen){return n}else{const n=e;const r=`http://ip-api.com/json/${n}?lang=zh-CN&fields=status,message,country,city,query,regionName`;const o=new Promise(((e,t)=>{setTimeout((()=>{t(new Error("timeout"))}),timeout)}));const a=$.http.get({url:r}).then((e=>{const i=JSON.parse(e.body);if(i.status==="success"){scriptResourceCache.set(t,i);s(i)}else{s(n)}})).catch((e=>{i(e)}));Promise.race([o,a]).catch((e=>{i(e)}))}}));ins.set(t,n);return n}}function removels(e){const t=new Set;const n=[];for(const s of e){if(s.qc&&!t.has(s.qc)){t.add(s.qc);n.push(s)}}return n}function removeqc(e){const t=new Set;const n=[];for(const s of e){if(!t.has(s.qc)){t.add(s.qc);const e={...s};delete e.qc;n.push(e)}}return n}function jxh(e){const t=e.reduce(((e,t)=>{const n=e.find((e=>e.name===t.name));if(n){n.count++;n.items.push({...t,name:`${t.name}${XHFGF}${n.count.toString().padStart(2,"0")}`})}else{e.push({name:t.name,count:1,items:[{...t,name:`${t.name}${XHFGF}01`}]})}return e}),[]);const n=t.flatMap((e=>e.items));e.splice(0,e.length,...n);return e}function onee(e){const t=e.reduce(((e,t)=>{const n=t.name.replace(/[^A-Za-z0-9\u00C0-\u017F\u4E00-\u9FFF]+\d+$/,"");if(!e[n]){e[n]=[]}e[n].push(t);return e}),{});for(const e in t){if(t[e].length===1&&t[e][0].name.endsWith("01")){const n=t[e][0];n.name=e}}return e}function zhTime(e){e=e.toString().replace(/-/g,"");if(e<1e3){return`${Math.round(e)}毫秒`}else if(e<6e4){return`${Math.round(e/1e3)}秒`}else if(e<36e5){return`${Math.round(e/6e4)}分钟`}else if(e>=36e5){return`${Math.round(e/36e5)}小时`}}var MD5=function(e){var t=M(V(Y(X(e),8*e.length)));return t.toLowerCase()};function M(e){for(var t,n="0123456789ABCDEF",s="",i=0;i<e.length;i++)t=e.charCodeAt(i),s+=n.charAt(t>>>4&15)+n.charAt(15&t);return s}function X(e){for(var t=Array(e.length>>2),n=0;n<t.length;n++)t[n]=0;for(n=0;n<8*e.length;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<n%32;return t}function V(e){for(var t="",n=0;n<32*e.length;n+=8)t+=String.fromCharCode(e[n>>5]>>>n%32&255);return t}function Y(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,s=-271733879,i=-1732584194,r=271733878,o=0;o<e.length;o+=16){var a=n,c=s,u=i,m=r;s=md5_ii(s=md5_ii(s=md5_ii(s=md5_ii(s=md5_hh(s=md5_hh(s=md5_hh(s=md5_hh(s=md5_gg(s=md5_gg(s=md5_gg(s=md5_gg(s=md5_ff(s=md5_ff(s=md5_ff(s=md5_ff(s,i=md5_ff(i,r=md5_ff(r,n=md5_ff(n,s,i,r,e[o+0],7,-680876936),s,i,e[o+1],12,-389564586),n,s,e[o+2],17,606105819),r,n,e[o+3],22,-1044525330),i=md5_ff(i,r=md5_ff(r,n=md5_ff(n,s,i,r,e[o+4],7,-176418897),s,i,e[o+5],12,1200080426),n,s,e[o+6],17,-1473231341),r,n,e[o+7],22,-45705983),i=md5_ff(i,r=md5_ff(r,n=md5_ff(n,s,i,r,e[o+8],7,1770035416),s,i,e[o+9],12,-1958414417),n,s,e[o+10],17,-42063),r,n,e[o+11],22,-1990404162),i=md5_ff(i,r=md5_ff(r,n=md5_ff(n,s,i,r,e[o+12],7,1804603682),s,i,e[o+13],12,-40341101),n,s,e[o+14],17,-1502002290),r,n,e[o+15],22,1236535329),i=md5_gg(i,r=md5_gg(r,n=md5_gg(n,s,i,r,e[o+1],5,-165796510),s,i,e[o+6],9,-1069501632),n,s,e[o+11],14,643717713),r,n,e[o+0],20,-373897302),i=md5_gg(i,r=md5_gg(r,n=md5_gg(n,s,i,r,e[o+5],5,-701558691),s,i,e[o+10],9,38016083),n,s,e[o+15],14,-660478335),r,n,e[o+4],20,-405537848),i=md5_gg(i,r=md5_gg(r,n=md5_gg(n,s,i,r,e[o+9],5,568446438),s,i,e[o+14],9,-1019803690),n,s,e[o+3],14,-187363961),r,n,e[o+8],20,1163531501),i=md5_gg(i,r=md5_gg(r,n=md5_gg(n,s,i,r,e[o+13],5,-1444681467),s,i,e[o+2],9,-51403784),n,s,e[o+7],14,1735328473),r,n,e[o+12],20,-1926607734),i=md5_hh(i,r=md5_hh(r,n=md5_hh(n,s,i,r,e[o+5],4,-378558),s,i,e[o+8],11,-2022574463),n,s,e[o+11],16,1839030562),r,n,e[o+14],23,-35309556),i=md5_hh(i,r=md5_hh(r,n=md5_hh(n,s,i,r,e[o+1],4,-1530992060),s,i,e[o+4],11,1272893353),n,s,e[o+7],16,-155497632),r,n,e[o+10],23,-1094730640),i=md5_hh(i,r=md5_hh(r,n=md5_hh(n,s,i,r,e[o+13],4,681279174),s,i,e[o+0],11,-358537222),n,s,e[o+3],16,-722521979),r,n,e[o+6],23,76029189),i=md5_hh(i,r=md5_hh(r,n=md5_hh(n,s,i,r,e[o+9],4,-640364487),s,i,e[o+12],11,-421815835),n,s,e[o+15],16,530742520),r,n,e[o+2],23,-995338651),i=md5_ii(i,r=md5_ii(r,n=md5_ii(n,s,i,r,e[o+0],6,-198630844),s,i,e[o+7],10,1126891415),n,s,e[o+14],15,-1416354905),r,n,e[o+5],21,-57434055),i=md5_ii(i,r=md5_ii(r,n=md5_ii(n,s,i,r,e[o+12],6,1700485571),s,i,e[o+3],10,-1894986606),n,s,e[o+10],15,-1051523),r,n,e[o+1],21,-2054922799),i=md5_ii(i,r=md5_ii(r,n=md5_ii(n,s,i,r,e[o+8],6,1873313359),s,i,e[o+15],10,-30611744),n,s,e[o+6],15,-1560198380),r,n,e[o+13],21,1309151649),i=md5_ii(i,r=md5_ii(r,n=md5_ii(n,s,i,r,e[o+4],6,-145523070),s,i,e[o+11],10,-1120210379),n,s,e[o+2],15,718787259),r,n,e[o+9],21,-343485551),n=safe_add(n,a),s=safe_add(s,c),i=safe_add(i,u),r=safe_add(r,m)}return Array(n,s,i,r)}function md5_cmn(e,t,n,s,i,r){return safe_add(bit_rol(safe_add(safe_add(t,e),safe_add(s,r)),i),n)}function md5_ff(e,t,n,s,i,r,o){return md5_cmn(t&n|~t&s,e,t,i,r,o)}function md5_gg(e,t,n,s,i,r,o){return md5_cmn(t&s|n&~s,e,t,i,r,o)}function md5_hh(e,t,n,s,i,r,o){return md5_cmn(t^n^s,e,t,i,r,o)}function md5_ii(e,t,n,s,i,r,o){return md5_cmn(n^(t|~s),e,t,i,r,o)}function safe_add(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function bit_rol(e,t){return e<<t|e>>>32-t}function getid(e){let t="ld";return MD5(`${t}-${e.server}-${e.port}`)}function getinid(e){let t="ia";return MD5(`${t}-${e}`)}function getaliid(e){let t="al";return MD5(`${t}-${e}`)}function getspcn(e){let t="sc";return MD5(`${t}-${e}`)}