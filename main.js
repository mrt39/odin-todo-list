(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(e){t(1,arguments);var r=Object.prototype.toString.call(e);return e instanceof Date||"object"===n(e)&&"[object Date]"===r?new Date(e.getTime()):"number"==typeof e||"[object Number]"===r?new Date(e):("string"!=typeof e&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function i(e){t(1,arguments);var n=r(e),a=n.getUTCDay(),i=(a<1?7:0)+a-1;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function o(e){t(1,arguments);var n=r(e),a=n.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var d=i(o),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var s=i(u);return n.getTime()>=d.getTime()?a+1:n.getTime()>=s.getTime()?a:a-1}var d={};function u(){return d}function s(e,n){var i,o,d,s,l,c,m,h;t(1,arguments);var f=u(),p=a(null!==(i=null!==(o=null!==(d=null!==(s=null==n?void 0:n.weekStartsOn)&&void 0!==s?s:null==n||null===(l=n.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==d?d:f.weekStartsOn)&&void 0!==o?o:null===(m=f.locale)||void 0===m||null===(h=m.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==i?i:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=r(e),v=g.getUTCDay(),b=(v<p?7:0)+v-p;return g.setUTCDate(g.getUTCDate()-b),g.setUTCHours(0,0,0,0),g}function l(e,n){var i,o,d,l,c,m,h,f;t(1,arguments);var p=r(e),g=p.getUTCFullYear(),v=u(),b=a(null!==(i=null!==(o=null!==(d=null!==(l=null==n?void 0:n.firstWeekContainsDate)&&void 0!==l?l:null==n||null===(c=n.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==d?d:v.firstWeekContainsDate)&&void 0!==o?o:null===(h=v.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==i?i:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(g+1,0,b),w.setUTCHours(0,0,0,0);var y=s(w,n),C=new Date(0);C.setUTCFullYear(g,0,b),C.setUTCHours(0,0,0,0);var T=s(C,n);return p.getTime()>=y.getTime()?g+1:p.getTime()>=T.getTime()?g:g-1}function c(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const m=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return c("yy"===e?r%100:r,e.length)},h=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):c(n+1,2)},f=function(t,e){return c(t.getUTCDate(),e.length)},p=function(t,e){return c(t.getUTCHours()%12||12,e.length)},g=function(t,e){return c(t.getUTCHours(),e.length)},v=function(t,e){return c(t.getUTCMinutes(),e.length)},b=function(t,e){return c(t.getUTCSeconds(),e.length)},w=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return c(Math.floor(r*Math.pow(10,n-3)),e.length)};var y={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return m(t,e)},Y:function(t,e,n,r){var a=l(t,r),i=a>0?a:1-a;return"YY"===e?c(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):c(i,e.length)},R:function(t,e){return c(o(t),e.length)},u:function(t,e){return c(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return c(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return c(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return h(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return c(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,i,o){var d=function(e,n){t(1,arguments);var i=r(e),o=s(i,n).getTime()-function(e,n){var r,i,o,d,c,m,h,f;t(1,arguments);var p=u(),g=a(null!==(r=null!==(i=null!==(o=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(c=n.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:p.firstWeekContainsDate)&&void 0!==i?i:null===(h=p.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==r?r:1),v=l(e,n),b=new Date(0);return b.setUTCFullYear(v,0,g),b.setUTCHours(0,0,0,0),s(b,n)}(i,n).getTime();return Math.round(o/6048e5)+1}(e,o);return"wo"===n?i.ordinalNumber(d,{unit:"week"}):c(d,n.length)},I:function(e,n,a){var d=function(e){t(1,arguments);var n=r(e),a=i(n).getTime()-function(e){t(1,arguments);var n=o(e),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),i(r)}(n).getTime();return Math.round(a/6048e5)+1}(e);return"Io"===n?a.ordinalNumber(d,{unit:"week"}):c(d,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):f(t,e)},D:function(e,n,a){var i=function(e){t(1,arguments);var n=r(e),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var i=a-n.getTime();return Math.floor(i/864e5)+1}(e);return"Do"===n?a.ordinalNumber(i,{unit:"dayOfYear"}):c(i,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return c(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return c(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return c(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return p(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):g(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):v(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):b(t,e)},S:function(t,e){return w(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return T(a);case"XXXX":case"XX":return k(a);default:return k(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return T(a);case"xxxx":case"xx":return k(a);default:return k(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+C(a,":");default:return"GMT"+k(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+C(a,":");default:return"GMT"+k(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return c(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return c((r._originalDate||t).getTime(),e.length)}};function C(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+c(i,2)}function T(t,e){return t%60==0?(t>0?"-":"+")+c(Math.abs(t)/60,2):k(t,e)}function k(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+c(Math.floor(a/60),2)+n+c(a%60,2)}const M=y;var E=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},x=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},D={p:x,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return E(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",E(a,e)).replace("{{time}}",x(i,e))}};const S=D;var L=["D","DD"],P=["YY","YYYY"];function H(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var U={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function A(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var O,W={date:A({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:A({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:A({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Y={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function N(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,d=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[d]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function j(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,d=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(u)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(d))return n}(u):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(d))return n}(u);return o=t.valueCallback?t.valueCallback(s):s,{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(d.length)}}}const q={code:"en-US",formatDistance:function(t,e,n){var r,a=U[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:W,formatRelative:function(t,e,n,r){return Y[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:N({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:N({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:N({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:N({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:N({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(O={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(O.matchPattern);if(!n)return null;var r=n[0],a=t.match(O.parsePattern);if(!a)return null;var i=O.valueCallback?O.valueCallback(a[0]):a[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(r.length)}}),era:j({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:j({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:j({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:j({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:j({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var V=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,F=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,G=/^'([^]*?)'?$/,R=/''/g,B=/[a-zA-Z]/;function z(n,i,o){var d,s,l,c,m,h,f,p,g,v,b,w,y,C,T,k,E,x;t(2,arguments);var D=String(i),U=u(),A=null!==(d=null!==(s=null==o?void 0:o.locale)&&void 0!==s?s:U.locale)&&void 0!==d?d:q,O=a(null!==(l=null!==(c=null!==(m=null!==(h=null==o?void 0:o.firstWeekContainsDate)&&void 0!==h?h:null==o||null===(f=o.locale)||void 0===f||null===(p=f.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==m?m:U.firstWeekContainsDate)&&void 0!==c?c:null===(g=U.locale)||void 0===g||null===(v=g.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==l?l:1);if(!(O>=1&&O<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=a(null!==(b=null!==(w=null!==(y=null!==(C=null==o?void 0:o.weekStartsOn)&&void 0!==C?C:null==o||null===(T=o.locale)||void 0===T||null===(k=T.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==y?y:U.weekStartsOn)&&void 0!==w?w:null===(E=U.locale)||void 0===E||null===(x=E.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==b?b:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!A.localize)throw new RangeError("locale must contain localize property");if(!A.formatLong)throw new RangeError("locale must contain formatLong property");var Y=r(n);if(!function(n){if(t(1,arguments),!function(n){return t(1,arguments),n instanceof Date||"object"===e(n)&&"[object Date]"===Object.prototype.toString.call(n)}(n)&&"number"!=typeof n)return!1;var a=r(n);return!isNaN(Number(a))}(Y))throw new RangeError("Invalid time value");var N=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(Y),j=function(e,n){return t(2,arguments),function(e,n){t(2,arguments);var i=r(e).getTime(),o=a(n);return new Date(i+o)}(e,-a(n))}(Y,N),z={firstWeekContainsDate:O,weekStartsOn:W,locale:A,_originalDate:Y};return D.match(F).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,S[e])(t,A.formatLong):t})).join("").match(V).map((function(t){if("''"===t)return"'";var e,r,a=t[0];if("'"===a)return(r=(e=t).match(G))?r[1].replace(R,"'"):e;var d,u=M[a];if(u)return null!=o&&o.useAdditionalWeekYearTokens||(d=t,-1===P.indexOf(d))||H(t,i,String(n)),null!=o&&o.useAdditionalDayOfYearTokens||!function(t){return-1!==L.indexOf(t)}(t)||H(t,i,String(n)),u(j,t,A.localize,z);if(a.match(B))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return t})).join("")}var Q=[],X=1;document.getElementById("addTask").addEventListener("click",(function(){const t=document.createElement("div");t.classList.add("overlay");const e=document.createElement("form");e.classList.add("task-form");const n=document.createElement("label");n.textContent="Name: ";const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","name"),r.required=!0,e.appendChild(n),e.appendChild(r);const a=document.createElement("label");a.textContent="Description: ";const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("name","description"),e.appendChild(a),e.appendChild(i);const o=new Date;let d=o.getDate(),u=o.getMonth()+1,s=o.getFullYear()+"-"+("0"+u).slice(-2)+"-"+("0"+d).slice(-2);console.log(s);const l=document.createElement("label");l.textContent="Date: ";const c=document.createElement("input");c.setAttribute("type","date"),c.setAttribute("name","date"),c.setAttribute("min",s),c.required=!0,e.appendChild(l),e.appendChild(c);const m=document.createElement("label");m.textContent="Priority: ";const h=document.createElement("select");h.setAttribute("id","prioritySelect"),h.multiple=!0,h.required=!0;const f=document.createElement("option");f.textContent="Low",f.setAttribute("id","low"),f.setAttribute("value","low");const p=document.createElement("option");p.textContent="Medium",p.setAttribute("id","medium"),p.setAttribute("value","medium");const g=document.createElement("option");g.textContent="High",g.setAttribute("id","high"),g.setAttribute("value","high"),h.appendChild(f),h.appendChild(p),h.appendChild(g),e.appendChild(m),e.appendChild(h);const v=document.createElement("button");v.textContent="Add Task",v.setAttribute("type","submit"),e.appendChild(v),t.appendChild(e),document.body.appendChild(t),e.addEventListener("submit",(e=>{e.preventDefault();var n=new J(r.value,i.value,c.value,h.value);const a=Q.find((t=>!0===t.currentlyOn));console.log(a),a.tasks.push(n),console.log(a.tasks),t.remove(),tt()}))}));const _=document.getElementById("new-project-button");function Z(t){this.name=t,this.tasks=[],this.currentlyOn=!1}_.addEventListener("click",(function(){_.style.display="none";const t=document.createElement("form"),e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("name","name"),t.appendChild(e);const n=document.createElement("button");n.textContent="Add Project",n.setAttribute("type","submit"),t.appendChild(n);const r=document.createElement("button");r.textContent="Cancel",r.setAttribute("type","reset"),t.appendChild(r),document.querySelector("aside").appendChild(t),r.addEventListener("click",(()=>{t.remove(),_.style.display="flex"})),t.addEventListener("submit",(n=>{n.preventDefault(),t.remove(),_.style.display="flex";let r=new Z(e.value);Q.push(r),console.log(Q),K(),$()}))}));const I=new Z("Default");function J(t,e,n,r){return this.idNum=X,this.name=t,this.description=e,this.dueDate=n,this.priority=r,this.finished=!1,X++}function K(){const t=document.getElementById("project-list");t.innerHTML="";const e=document.createElement("li");e.classList.add("projectName1");const n=document.createElement("div");n.classList.add("project-item");const r=document.createElement("div");r.classList.add("projectParaContainer"),r.style.width="100%";const a=document.createElement("p");a.textContent=Q[0].name,r.appendChild(a),n.appendChild(r),e.appendChild(n),t.appendChild(e);for(let e=1;e<Q.length;e++){const n=document.createElement("li");n.classList.add("projectName1");const r=document.createElement("div");r.classList.add("project-item");const a=document.createElement("div");r.classList.add("projectParaContainer");const i=document.createElement("p");i.textContent=Q[e].name;const o=document.createElement("div");o.classList.add("delete-project-button1"),o.innerHTML="<svg class= 'delete-svg' width='32px' height='32px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path fill-rule='evenodd' clip-rule='evenodd' d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6H17H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H7H9V5ZM10 8H8V18C8 18.5523 8.44772 19 9 19H15C15.5523 19 16 18.5523 16 18V8H14H10ZM13 6H11V5H13V6ZM10 9C10.5523 9 11 9.44772 11 10V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V10C9 9.44772 9.44772 9 10 9ZM14 9C14.5523 9 15 9.44772 15 10V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V10C13 9.44772 13.4477 9 14 9Z' fill='currentColor'></path> </g></svg>",o.addEventListener("click",(function(){var t;t=e,Q.find((t=>!0===t.currentlyOn)).currentlyOn=!1,Q[0].currentlyOn=!0,Q.splice(t,1),K(),$()})),a.appendChild(i),r.appendChild(a),r.appendChild(o),n.appendChild(r),t.appendChild(n)}document.querySelectorAll(".projectParaContainer").forEach((t=>{t.addEventListener("click",(function(){const t=Q.find((t=>!0===t.currentlyOn));t.currentlyOn=!1;const e=Q.find((t=>t.name===this.firstChild.innerText));null!=e?(e.currentlyOn=!0,K(),$()):Q[0].currentlyOn=!0}))}))}function $(){const t=Q.find((t=>!0===t.currentlyOn)),e=document.querySelectorAll(".projectName1");for(var n=0,r=e.length;n<r;n++)e[n].innerText===t.name&&e[n].classList.add("selectedProject1");tt()}function tt(){const t=Q.find((t=>!0===t.currentlyOn)),e=document.getElementById("task-list");e.innerHTML="";for(let n=0;n<t.tasks.length;n++){const r=document.createElement("li"),a=document.createElement("div");a.classList.add("task-item");const i=document.createElement("div");i.classList.add("task-title");const o=document.createElement("label"),d=document.createElement("input");d.setAttribute("type","checkbox");const u=document.createElement("span");u.innerText=t.tasks[n].name;const s=document.createElement("div");s.classList.add("task-details");const l=z(new Date(t.tasks[n].dueDate),"d MMMM"),c=document.createElement("p");c.classList.add("date"),c.innerText=l;const m=document.createElement("div");m.classList.add("task-buttons");const h=document.createElement("button");h.classList.add("details-button"),h.innerText="Details",h.addEventListener("click",(function(){et(n)}));const f=document.createElement("div");f.classList.add("edit-button"),f.innerHTML="<svg class= 'edit-svg' width='32px' height='32px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path opacity='0.15' d='M8 16H12L18 10L14 6L8 12V16Z' fill='currentColor'></path> <path d='M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path> </g></svg>",f.addEventListener("click",(function(){nt(n)}));const p=document.createElement("div");p.classList.add("delete-button"),p.innerHTML="<svg class= 'delete-svg' width='32px' height='32px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path fill-rule='evenodd' clip-rule='evenodd' d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6H17H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H7H9V5ZM10 8H8V18C8 18.5523 8.44772 19 9 19H15C15.5523 19 16 18.5523 16 18V8H14H10ZM13 6H11V5H13V6ZM10 9C10.5523 9 11 9.44772 11 10V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V10C9 9.44772 9.44772 9 10 9ZM14 9C14.5523 9 15 9.44772 15 10V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V10C13 9.44772 13.4477 9 14 9Z' fill='currentColor'></path> </g></svg>",p.addEventListener("click",(function(){var t;t=n,Q.find((t=>!0===t.currentlyOn)).tasks.splice(t,1),tt()})),o.appendChild(d),o.appendChild(u),i.appendChild(o),a.appendChild(i),s.appendChild(c),a.appendChild(s),m.appendChild(h),m.appendChild(f),m.appendChild(p),a.appendChild(m),r.appendChild(a),e.appendChild(r)}}function et(t){const e=Q.find((t=>!0===t.currentlyOn)),n=document.createElement("div");n.classList.add("overlay");const r=document.createElement("div");r.classList.add("task-form");const a=document.createElement("h3");a.innerHTML=e.tasks[t].name+"<br><br>",r.appendChild(a);const i=document.createElement("para");i.innerHTML="Description: "+e.tasks[t].description+"<br><br>",r.appendChild(i);const o=z(new Date(e.tasks[t].dueDate),"d MMMM y"),d=document.createElement("para");d.innerHTML="Due: "+o+"<br><br>",r.appendChild(d);const u=e.tasks[t].priority.charAt(0).toUpperCase()+e.tasks[t].priority.slice(1),s=document.createElement("para");s.innerHTML="Priority: "+u+"<br><br>",r.appendChild(s);const l=document.createElement("button");l.innerHTML="CLOSE",l.setAttribute("type","button"),r.appendChild(l),n.appendChild(r),document.body.appendChild(n),l.addEventListener("click",(t=>{t.preventDefault(),n.remove()}))}function nt(t){const e=Q.find((t=>!0===t.currentlyOn)),n=document.createElement("div");n.classList.add("overlay");const r=document.createElement("form");r.classList.add("task-form");const a=document.createElement("label");a.textContent="Name: ";const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("name","name"),i.required=!0,i.value=e.tasks[t].name,r.appendChild(a),r.appendChild(i);const o=document.createElement("label");o.textContent="Description: ";const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("name","description"),d.value=e.tasks[t].description,r.appendChild(o),r.appendChild(d);const u=new Date;let s=u.getDate(),l=u.getMonth()+1,c=u.getFullYear()+"-"+("0"+l).slice(-2)+"-"+("0"+s).slice(-2);console.log(c);const m=document.createElement("label");m.textContent="Date: ";const h=document.createElement("input");h.setAttribute("type","date"),h.setAttribute("name","date"),h.setAttribute("min",c),h.required=!0,h.value=e.tasks[t].dueDate,r.appendChild(m),r.appendChild(h);const f=document.createElement("label");f.textContent="Priority: ";const p=document.createElement("select");p.setAttribute("id","prioritySelect"),p.multiple=!0,p.required=!0;const g=document.createElement("option");g.textContent="Low",g.setAttribute("id","low"),g.setAttribute("value","low");const v=document.createElement("option");v.textContent="Medium",v.setAttribute("id","medium"),v.setAttribute("value","medium");const b=document.createElement("option");b.textContent="High",b.setAttribute("id","high"),b.setAttribute("value","high"),p.appendChild(g),p.appendChild(v),p.appendChild(b),r.appendChild(f),r.appendChild(p);for(var w=p.childNodes,y=0;y<w.length;y++)w[y].id===e.tasks[t].priority&&(w[y].selected=!0);const C=document.createElement("button");C.textContent="Update Task",C.setAttribute("type","submit"),r.appendChild(C),n.appendChild(r),document.body.appendChild(n),r.addEventListener("submit",(r=>{r.preventDefault(),e.tasks[t].name=i.value,e.tasks[t].description=d.value,e.tasks[t].dueDate=h.value,e.tasks[t].priority=p.value,console.log(e),console.log(e.tasks),n.remove(),tt()}))}I.currentlyOn=!0,Q.push(I),K(),$()})();