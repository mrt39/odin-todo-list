(()=>{"use strict";function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(t){e(1,arguments);var r=Object.prototype.toString.call(t);return t instanceof Date||"object"===n(t)&&"[object Date]"===r?new Date(t.getTime()):"number"==typeof t||"[object Number]"===r?new Date(t):("string"!=typeof t&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function i(t){e(1,arguments);var n=r(t),a=n.getUTCDay(),i=(a<1?7:0)+a-1;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function o(t){e(1,arguments);var n=r(t),a=n.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var s=i(o),d=new Date(0);d.setUTCFullYear(a,0,4),d.setUTCHours(0,0,0,0);var u=i(d);return n.getTime()>=s.getTime()?a+1:n.getTime()>=u.getTime()?a:a-1}var s={};function d(){return s}function u(t,n){var i,o,s,u,l,c,m,h;e(1,arguments);var f=d(),p=a(null!==(i=null!==(o=null!==(s=null!==(u=null==n?void 0:n.weekStartsOn)&&void 0!==u?u:null==n||null===(l=n.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==s?s:f.weekStartsOn)&&void 0!==o?o:null===(m=f.locale)||void 0===m||null===(h=m.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==i?i:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=r(t),v=g.getUTCDay(),b=(v<p?7:0)+v-p;return g.setUTCDate(g.getUTCDate()-b),g.setUTCHours(0,0,0,0),g}function l(t,n){var i,o,s,l,c,m,h,f;e(1,arguments);var p=r(t),g=p.getUTCFullYear(),v=d(),b=a(null!==(i=null!==(o=null!==(s=null!==(l=null==n?void 0:n.firstWeekContainsDate)&&void 0!==l?l:null==n||null===(c=n.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==s?s:v.firstWeekContainsDate)&&void 0!==o?o:null===(h=v.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==i?i:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(g+1,0,b),w.setUTCHours(0,0,0,0);var y=u(w,n),C=new Date(0);C.setUTCFullYear(g,0,b),C.setUTCHours(0,0,0,0);var k=u(C,n);return p.getTime()>=y.getTime()?g+1:p.getTime()>=k.getTime()?g:g-1}function c(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const m=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return c("yy"===t?r%100:r,t.length)},h=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):c(n+1,2)},f=function(e,t){return c(e.getUTCDate(),t.length)},p=function(e,t){return c(e.getUTCHours()%12||12,t.length)},g=function(e,t){return c(e.getUTCHours(),t.length)},v=function(e,t){return c(e.getUTCMinutes(),t.length)},b=function(e,t){return c(e.getUTCSeconds(),t.length)},w=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return c(Math.floor(r*Math.pow(10,n-3)),t.length)};var y={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return m(e,t)},Y:function(e,t,n,r){var a=l(e,r),i=a>0?a:1-a;return"YY"===t?c(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):c(i,t.length)},R:function(e,t){return c(o(e),t.length)},u:function(e,t){return c(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return c(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return c(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return h(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return c(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,i,o){var s=function(t,n){e(1,arguments);var i=r(t),o=u(i,n).getTime()-function(t,n){var r,i,o,s,c,m,h,f;e(1,arguments);var p=d(),g=a(null!==(r=null!==(i=null!==(o=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(c=n.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:p.firstWeekContainsDate)&&void 0!==i?i:null===(h=p.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==r?r:1),v=l(t,n),b=new Date(0);return b.setUTCFullYear(v,0,g),b.setUTCHours(0,0,0,0),u(b,n)}(i,n).getTime();return Math.round(o/6048e5)+1}(t,o);return"wo"===n?i.ordinalNumber(s,{unit:"week"}):c(s,n.length)},I:function(t,n,a){var s=function(t){e(1,arguments);var n=r(t),a=i(n).getTime()-function(t){e(1,arguments);var n=o(t),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),i(r)}(n).getTime();return Math.round(a/6048e5)+1}(t);return"Io"===n?a.ordinalNumber(s,{unit:"week"}):c(s,n.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):f(e,t)},D:function(t,n,a){var i=function(t){e(1,arguments);var n=r(t),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var i=a-n.getTime();return Math.floor(i/864e5)+1}(t);return"Do"===n?a.ordinalNumber(i,{unit:"dayOfYear"}):c(i,n.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return c(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return c(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return c(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return p(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):g(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):c(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):c(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):v(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):b(e,t)},S:function(e,t){return w(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return k(a);case"XXXX":case"XX":return T(a);default:return T(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return k(a);case"xxxx":case"xx":return T(a);default:return T(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+C(a,":");default:return"GMT"+T(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+C(a,":");default:return"GMT"+T(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return c(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return c((r._originalDate||e).getTime(),t.length)}};function C(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+c(i,2)}function k(e,t){return e%60==0?(e>0?"-":"+")+c(Math.abs(e)/60,2):T(e,t)}function T(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+c(Math.floor(a/60),2)+n+c(a%60,2)}const M=y;var E=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},x=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},L={p:x,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return E(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",E(a,t)).replace("{{time}}",x(i,t))}};const D=L;var S=["D","DD"],H=["YY","YYYY"];function P(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var U={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function N(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var A,j={date:N({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:N({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:N({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},O={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function W(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=e.formattingValues[i]||e.formattingValues[a]}else{var o=e.defaultWidth,s=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[s]||e.values[o]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function Y(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o,s=i[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(d)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(s))return n}(d):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(s))return n}(d);return o=e.valueCallback?e.valueCallback(u):u,{value:o=n.valueCallback?n.valueCallback(o):o,rest:t.slice(s.length)}}}const q={code:"en-US",formatDistance:function(e,t,n){var r,a=U[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:j,formatRelative:function(e,t,n,r){return O[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:W({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:W({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:W({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:W({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:W({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(A={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(A.matchPattern);if(!n)return null;var r=n[0],a=e.match(A.parsePattern);if(!a)return null;var i=A.valueCallback?A.valueCallback(a[0]):a[0];return{value:i=t.valueCallback?t.valueCallback(i):i,rest:e.slice(r.length)}}),era:Y({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Y({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Y({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Y({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Y({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var V=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,G=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,F=/^'([^]*?)'?$/,R=/''/g,z=/[a-zA-Z]/;function B(n,i,o){var s,u,l,c,m,h,f,p,g,v,b,w,y,C,k,T,E,x;e(2,arguments);var L=String(i),U=d(),N=null!==(s=null!==(u=null==o?void 0:o.locale)&&void 0!==u?u:U.locale)&&void 0!==s?s:q,A=a(null!==(l=null!==(c=null!==(m=null!==(h=null==o?void 0:o.firstWeekContainsDate)&&void 0!==h?h:null==o||null===(f=o.locale)||void 0===f||null===(p=f.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==m?m:U.firstWeekContainsDate)&&void 0!==c?c:null===(g=U.locale)||void 0===g||null===(v=g.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==l?l:1);if(!(A>=1&&A<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var j=a(null!==(b=null!==(w=null!==(y=null!==(C=null==o?void 0:o.weekStartsOn)&&void 0!==C?C:null==o||null===(k=o.locale)||void 0===k||null===(T=k.options)||void 0===T?void 0:T.weekStartsOn)&&void 0!==y?y:U.weekStartsOn)&&void 0!==w?w:null===(E=U.locale)||void 0===E||null===(x=E.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==b?b:0);if(!(j>=0&&j<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!N.localize)throw new RangeError("locale must contain localize property");if(!N.formatLong)throw new RangeError("locale must contain formatLong property");var O=r(n);if(!function(n){if(e(1,arguments),!function(n){return e(1,arguments),n instanceof Date||"object"===t(n)&&"[object Date]"===Object.prototype.toString.call(n)}(n)&&"number"!=typeof n)return!1;var a=r(n);return!isNaN(Number(a))}(O))throw new RangeError("Invalid time value");var W=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(O),Y=function(t,n){return e(2,arguments),function(t,n){e(2,arguments);var i=r(t).getTime(),o=a(n);return new Date(i+o)}(t,-a(n))}(O,W),B={firstWeekContainsDate:A,weekStartsOn:j,locale:N,_originalDate:O};return L.match(G).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,D[t])(e,N.formatLong):e})).join("").match(V).map((function(e){if("''"===e)return"'";var t,r,a=e[0];if("'"===a)return(r=(t=e).match(F))?r[1].replace(R,"'"):t;var s,d=M[a];if(d)return null!=o&&o.useAdditionalWeekYearTokens||(s=e,-1===H.indexOf(s))||P(e,i,String(n)),null!=o&&o.useAdditionalDayOfYearTokens||!function(e){return-1!==S.indexOf(e)}(e)||P(e,i,String(n)),d(Y,e,N.localize,B);if(a.match(z))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return e})).join("")}var _=[],Q=4;document.getElementById("addTask").addEventListener("click",(function(){const e=document.createElement("div");e.classList.add("overlay");const t=document.createElement("form");t.classList.add("task-form");const n=document.createElement("a");n.innerHTML="&times;",n.classList.add("close-button"),n.href="#",n.addEventListener("click",(function(){e.remove()})),t.appendChild(n);const r=document.createElement("label");r.textContent="Task Name ",r.classList.add("form-label");const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","name"),a.classList.add("form-input"),a.required=!0,t.appendChild(r),t.appendChild(a);const i=document.createElement("label");i.textContent="Description ",i.classList.add("form-label");const o=document.createElement("textarea");o.setAttribute("rows","5"),o.setAttribute("name","description"),o.classList.add("form-input"),t.appendChild(i),t.appendChild(o);const s=new Date;let d=s.getDate(),u=s.getMonth()+1,l=s.getFullYear()+"-"+("0"+u).slice(-2)+"-"+("0"+d).slice(-2);const c=document.createElement("label");c.textContent="Due ",c.classList.add("form-label");const m=document.createElement("input");m.setAttribute("type","date"),m.setAttribute("name","date"),m.setAttribute("min",l),m.required=!0,m.classList.add("form-input"),t.appendChild(c),t.appendChild(m);const h=document.createElement("label");h.textContent="Priority ",h.classList.add("form-label");const f=document.createElement("select");f.setAttribute("id","prioritySelect"),f.multiple=!0,f.required=!0;const p=document.createElement("option");p.textContent="Low",p.setAttribute("id","low"),p.setAttribute("value","low");const g=document.createElement("option");g.textContent="Medium",g.setAttribute("id","medium"),g.setAttribute("value","medium");const v=document.createElement("option");v.textContent="High",v.setAttribute("id","high"),v.setAttribute("value","high"),f.appendChild(p),f.appendChild(g),f.appendChild(v),t.appendChild(h),t.appendChild(f);const b=document.createElement("button");b.textContent="Add Task",b.setAttribute("type","submit"),b.classList.add("form-button"),t.appendChild(b),e.appendChild(t),document.body.appendChild(e),t.addEventListener("submit",(t=>{t.preventDefault();var n=new Z(a.value,o.value,m.value,f.value);console.log(n),_.find((e=>!0===e.currentlyOn)).tasks.push(n),te(),e.remove(),ae()}))}));const X=document.getElementById("new-project-button");function I(e){this.name=e,this.tasks=[],this.currentlyOn=!1}function Z(e,t,n,r){return this.idNum=Q,this.name=e,this.description=t,this.dueDate=n,this.priority=r,this.finished=!1,Q++}X.addEventListener("click",(function(){X.style.display="none";const e=document.createElement("form");e.classList.add("project-form");const t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("name","name"),t.required=!0,e.appendChild(t);const n=document.createElement("div"),r=document.createElement("button");r.textContent="+",r.setAttribute("type","submit"),r.classList.add("new-task-button"),n.appendChild(r),e.appendChild(n);const a=document.createElement("span");a.innerHTML="X",a.classList.add("close-button1"),e.appendChild(a),document.querySelector("aside").appendChild(e),a.addEventListener("click",(()=>{var t=document.querySelector(".alertSpan");null!=t&&t.remove(),e.remove(),X.style.display="flex"})),e.addEventListener("submit",(n=>{n.preventDefault();const r=document.createElement("span");if(r.classList.add("alertSpan"),r.innerText="Project name must be unique!",null!=_.find((e=>e.name===t.value))){if(null!=document.querySelector(".alertSpan"))return;return void e.parentNode.insertBefore(r,e.nextSibling)}let a=document.querySelector(".alertSpan");a&&a.remove(),e.remove(),X.style.display="flex";let i=new I(t.value);_.push(i),te(),ne(),re()}))}));const J=new I("Today");J.currentlyOn=!0,_.push(J);const K=new I("Week");_.push(K);const $=new I("Home");_.push($);const ee=new I("School");function te(){localStorage.setItem("allProjectsStored",JSON.stringify(_))}function ne(){const e=document.getElementById("project-list");e.innerHTML="";const t=document.createElement("li");t.classList.add("projectName1");const n=document.createElement("div");n.classList.add("project-item");const r=document.createElement("div");r.classList.add("projectParaContainer"),r.style.width="100%";const a=document.createElement("p");a.classList.add("projectPara"),a.textContent=_[0].name,r.appendChild(a),n.appendChild(r),t.appendChild(n),e.appendChild(t);for(let t=1;t<_.length;t++){const n=document.createElement("li");n.classList.add("projectName1");const r=document.createElement("div");r.classList.add("project-item");const a=document.createElement("div");r.classList.add("projectParaContainer");const i=document.createElement("p");i.classList.add("projectPara"),i.textContent=_[t].name;const o=document.createElement("div");o.classList.add("delete-project-button1"),o.innerHTML="<svg class= 'delete-svg' width='32px' height='32px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path fill-rule='evenodd' clip-rule='evenodd' d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6H17H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H7H9V5ZM10 8H8V18C8 18.5523 8.44772 19 9 19H15C15.5523 19 16 18.5523 16 18V8H14H10ZM13 6H11V5H13V6ZM10 9C10.5523 9 11 9.44772 11 10V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V10C9 9.44772 9.44772 9 10 9ZM14 9C14.5523 9 15 9.44772 15 10V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V10C13 9.44772 13.4477 9 14 9Z' fill='currentColor'></path> </g></svg>",o.addEventListener("click",(function(){var e;e=t,_.find((e=>!0===e.currentlyOn)).currentlyOn=!1,_[0].currentlyOn=!0,_.splice(e,1),te(),ne(),re()})),a.appendChild(i),r.appendChild(a),r.appendChild(o),n.appendChild(r),e.appendChild(n)}document.querySelectorAll(".projectParaContainer").forEach((e=>{e.addEventListener("click",(function(){const e=_.find((e=>!0===e.currentlyOn));e.currentlyOn=!1;const t=_.find((e=>e.name===this.firstChild.innerText));null!=t?(t.currentlyOn=!0,te(),ne(),re()):_[0].currentlyOn=!0}))}))}function re(){const e=_.find((e=>!0===e.currentlyOn)),t=document.querySelectorAll(".projectName1");for(var n=0,r=t.length;n<r;n++)t[n].innerText===e.name&&t[n].classList.add("selectedProject1");ae()}function ae(){const e=_.find((e=>!0===e.currentlyOn)),t=document.getElementById("task-list");t.innerHTML="";for(let n=0;n<e.tasks.length;n++){const r=document.createElement("li"),a=document.createElement("div");a.classList.add("task-item"),"low"===e.tasks[n].priority?a.classList.add("priority-low"):"medium"===e.tasks[n].priority?a.classList.add("priority-medium"):"high"===e.tasks[n].priority&&a.classList.add("priority-high");const i=document.createElement("div");i.classList.add("task-title");const o=document.createElement("label");o.classList.add("task-label");const s=document.createElement("input");s.setAttribute("type","checkbox"),s.classList.add("checkboxInput"),!0===e.tasks[n].finished&&(s.checked=!0),s.addEventListener("change",(function(){this.checked?(d.classList.add("checked-span"),e.tasks[n].finished=!0,te()):(d.style.textDecoration="none",d.classList.remove("checked-span"),e.tasks[n].finished=!1,te())}));const d=document.createElement("span");d.innerText=e.tasks[n].name,!0===e.tasks[n].finished&&d.classList.add("checked-span");const u=B(new Date(e.tasks[n].dueDate),"d MMMM"),l=document.createElement("p");l.classList.add("date"),l.innerText=u;const c=document.createElement("div");c.classList.add("task-buttons");const m=document.createElement("button");m.classList.add("details-button"),m.innerHTML="<svg width='28px' height='28px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path> <path d='M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path> <path d='M8 13H12' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path> <path d='M8 17H16' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path> </g></svg>",m.addEventListener("click",(function(){ie(n)}));const h=document.createElement("div");h.classList.add("edit-button"),h.innerHTML="<svg class= 'edit-svg' width='34px' height='34px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path opacity='0.15' d='M8 16H12L18 10L14 6L8 12V16Z' fill='currentColor'></path> <path d='M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path> </g></svg>",h.addEventListener("click",(function(){oe(n)}));const f=document.createElement("div");f.classList.add("delete-button"),f.innerHTML="<svg class= 'delete-svg' width='32px' height='32px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path fill-rule='evenodd' clip-rule='evenodd' d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6H17H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H7H9V5ZM10 8H8V18C8 18.5523 8.44772 19 9 19H15C15.5523 19 16 18.5523 16 18V8H14H10ZM13 6H11V5H13V6ZM10 9C10.5523 9 11 9.44772 11 10V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V10C9 9.44772 9.44772 9 10 9ZM14 9C14.5523 9 15 9.44772 15 10V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V10C13 9.44772 13.4477 9 14 9Z' fill='currentColor'></path> </g></svg>",f.addEventListener("click",(function(){var e;e=n,_.find((e=>!0===e.currentlyOn)).tasks.splice(e,1),te(),ae()})),o.appendChild(s),o.appendChild(d),i.appendChild(o),a.appendChild(i),c.appendChild(l),c.appendChild(m),c.appendChild(h),c.appendChild(f),a.appendChild(c),r.appendChild(a),t.appendChild(r)}}function ie(e){const t=_.find((e=>!0===e.currentlyOn)),n=document.createElement("div");n.classList.add("overlay");const r=document.createElement("div");r.classList.add("task-form");const a=document.createElement("a");a.innerHTML="&times;",a.classList.add("close-button"),a.href="#",a.addEventListener("click",(function(){n.remove()})),r.appendChild(a);const i=document.createElement("h3");i.innerHTML=t.tasks[e].name+"<br><br>",r.appendChild(i);const o=document.createElement("para");o.innerHTML="Description: "+t.tasks[e].description+"<br><br>",r.appendChild(o);const s=B(new Date(t.tasks[e].dueDate),"d MMMM y"),d=document.createElement("para");d.innerHTML="Due: "+s+"<br><br>",r.appendChild(d);const u=t.tasks[e].priority.charAt(0).toUpperCase()+t.tasks[e].priority.slice(1),l=document.createElement("para");l.innerHTML="Priority: "+u+"<br><br>",r.appendChild(l),n.appendChild(r),document.body.appendChild(n)}function oe(e){const t=_.find((e=>!0===e.currentlyOn)),n=document.createElement("div");n.classList.add("overlay");const r=document.createElement("form");r.classList.add("task-form");const a=document.createElement("a");a.innerHTML="&times;",a.classList.add("close-button"),a.href="#",a.addEventListener("click",(function(){n.remove()})),r.appendChild(a);const i=document.createElement("label");i.textContent="Task Name ";const o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name","name"),o.classList.add("form-input"),o.required=!0,o.value=t.tasks[e].name,r.appendChild(i),r.appendChild(o);const s=document.createElement("label");s.textContent="Description ",s.classList.add("form-label");const d=document.createElement("textarea");d.setAttribute("rows","5"),d.setAttribute("name","description"),d.classList.add("form-input"),d.value=t.tasks[e].description,r.appendChild(s),r.appendChild(d);const u=new Date;let l=u.getDate(),c=u.getMonth()+1,m=u.getFullYear()+"-"+("0"+c).slice(-2)+"-"+("0"+l).slice(-2);const h=document.createElement("label");h.textContent="Due ";const f=document.createElement("input");f.setAttribute("type","date"),f.setAttribute("name","date"),f.setAttribute("min",m),f.required=!0,f.classList.add("form-input"),f.value=t.tasks[e].dueDate,r.appendChild(h),r.appendChild(f);const p=document.createElement("label");p.textContent="Priority ",p.classList.add("form-label");const g=document.createElement("select");g.setAttribute("id","prioritySelect"),g.multiple=!0,g.required=!0;const v=document.createElement("option");v.textContent="Low",v.setAttribute("id","low"),v.setAttribute("value","low");const b=document.createElement("option");b.textContent="Medium",b.setAttribute("id","medium"),b.setAttribute("value","medium");const w=document.createElement("option");w.textContent="High",w.setAttribute("id","high"),w.setAttribute("value","high"),g.appendChild(v),g.appendChild(b),g.appendChild(w),r.appendChild(p),r.appendChild(g);for(var y=g.childNodes,C=0;C<y.length;C++)y[C].id===t.tasks[e].priority&&(y[C].selected=!0);const k=document.createElement("button");k.textContent="Update Task",k.setAttribute("type","submit"),k.classList.add("form-button"),r.appendChild(k),n.appendChild(r),document.body.appendChild(n),r.addEventListener("submit",(r=>{r.preventDefault(),t.tasks[e].name=o.value,t.tasks[e].description=d.value,t.tasks[e].dueDate=f.value,t.tasks[e].priority=g.value,te(),n.remove(),ae()}))}_.push(ee),$.tasks.push({idNum:1,name:"dishes",description:"",dueDate:"2023-04-03",priority:"medium",finished:!0}),$.tasks.push({idNum:1,name:"buy tea",description:"buy tea from amazon",dueDate:"2023-04-03",priority:"low",finished:!1}),$.tasks.push({idNum:1,name:"get chicken out of freezer",description:"",dueDate:"2023-04-03",priority:"high",finished:!1}),J.tasks.push({idNum:1,name:"send e-mail",description:"send e-mail to xoxo@internet.com",dueDate:"2023-04-03",priority:"medium",finished:!1}),J.tasks.push({idNum:1,name:"50 pushups",description:"send e-mail to xoxo@internet.com",dueDate:"2023-04-03",priority:"medium",finished:!0}),J.tasks.push({idNum:1,name:"read the article",description:"read the article emily sent you",dueDate:"2023-04-03",priority:"low",finished:!1}),J.tasks.push({idNum:1,name:"take tom to vet",description:"",dueDate:"2023-04-03",priority:"high",finished:!0}),K.tasks.push({idNum:1,name:"finish book",description:"finish the brothers karamazov",dueDate:"2023-04-10",priority:"medium",finished:!1}),K.tasks.push({idNum:1,name:"renew insurance",description:"renew car insurance",dueDate:"2023-04-10",priority:"high",finished:!1}),ee.tasks.push({idNum:1,name:"prepare for the exam",description:"",dueDate:"2023-04-08",priority:"high",finished:!1}),ee.tasks.push({idNum:1,name:"finish project",description:"",dueDate:"2023-04-13",priority:"high",finished:!0}),null!==localStorage.getItem("allProjectsStored")&&void 0!==localStorage.getItem("allProjectsStored")&&(_=JSON.parse(localStorage.getItem("allProjectsStored"))),console.log(_),ne(),re()})();