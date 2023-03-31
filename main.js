(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function a(e){t(1,arguments);var a=Object.prototype.toString.call(e);return e instanceof Date||"object"===n(e)&&"[object Date]"===a?new Date(e.getTime()):"number"==typeof e||"[object Number]"===a?new Date(e):("string"!=typeof e&&"[object String]"!==a||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function r(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function i(e){t(1,arguments);var n=a(e),r=n.getUTCDay(),i=(r<1?7:0)+r-1;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function o(e){t(1,arguments);var n=a(e),r=n.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(r+1,0,4),o.setUTCHours(0,0,0,0);var u=i(o),d=new Date(0);d.setUTCFullYear(r,0,4),d.setUTCHours(0,0,0,0);var s=i(d);return n.getTime()>=u.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}var u={};function d(){return u}function s(e,n){var i,o,u,s,l,c,m,h;t(1,arguments);var f=d(),g=r(null!==(i=null!==(o=null!==(u=null!==(s=null==n?void 0:n.weekStartsOn)&&void 0!==s?s:null==n||null===(l=n.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==u?u:f.weekStartsOn)&&void 0!==o?o:null===(m=f.locale)||void 0===m||null===(h=m.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==i?i:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=a(e),v=p.getUTCDay(),b=(v<g?7:0)+v-g;return p.setUTCDate(p.getUTCDate()-b),p.setUTCHours(0,0,0,0),p}function l(e,n){var i,o,u,l,c,m,h,f;t(1,arguments);var g=a(e),p=g.getUTCFullYear(),v=d(),b=r(null!==(i=null!==(o=null!==(u=null!==(l=null==n?void 0:n.firstWeekContainsDate)&&void 0!==l?l:null==n||null===(c=n.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==u?u:v.firstWeekContainsDate)&&void 0!==o?o:null===(h=v.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==i?i:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(p+1,0,b),w.setUTCHours(0,0,0,0);var y=s(w,n),C=new Date(0);C.setUTCFullYear(p,0,b),C.setUTCHours(0,0,0,0);var T=s(C,n);return g.getTime()>=y.getTime()?p+1:g.getTime()>=T.getTime()?p:p-1}function c(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const m=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return c("yy"===e?a%100:a,e.length)},h=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):c(n+1,2)},f=function(t,e){return c(t.getUTCDate(),e.length)},g=function(t,e){return c(t.getUTCHours()%12||12,e.length)},p=function(t,e){return c(t.getUTCHours(),e.length)},v=function(t,e){return c(t.getUTCMinutes(),e.length)},b=function(t,e){return c(t.getUTCSeconds(),e.length)},w=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return c(Math.floor(a*Math.pow(10,n-3)),e.length)};var y={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return m(t,e)},Y:function(t,e,n,a){var r=l(t,a),i=r>0?r:1-r;return"YY"===e?c(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):c(i,e.length)},R:function(t,e){return c(o(t),e.length)},u:function(t,e){return c(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return c(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return c(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return h(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return c(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,n,i,o){var u=function(e,n){t(1,arguments);var i=a(e),o=s(i,n).getTime()-function(e,n){var a,i,o,u,c,m,h,f;t(1,arguments);var g=d(),p=r(null!==(a=null!==(i=null!==(o=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(c=n.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:g.firstWeekContainsDate)&&void 0!==i?i:null===(h=g.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==a?a:1),v=l(e,n),b=new Date(0);return b.setUTCFullYear(v,0,p),b.setUTCHours(0,0,0,0),s(b,n)}(i,n).getTime();return Math.round(o/6048e5)+1}(e,o);return"wo"===n?i.ordinalNumber(u,{unit:"week"}):c(u,n.length)},I:function(e,n,r){var u=function(e){t(1,arguments);var n=a(e),r=i(n).getTime()-function(e){t(1,arguments);var n=o(e),a=new Date(0);return a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0),i(a)}(n).getTime();return Math.round(r/6048e5)+1}(e);return"Io"===n?r.ordinalNumber(u,{unit:"week"}):c(u,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):f(t,e)},D:function(e,n,r){var i=function(e){t(1,arguments);var n=a(e),r=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var i=r-n.getTime();return Math.floor(i/864e5)+1}(e);return"Do"===n?r.ordinalNumber(i,{unit:"dayOfYear"}):c(i,n.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return c(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return c(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return c(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return g(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):p(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):c(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):c(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):v(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):b(t,e)},S:function(t,e){return w(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return T(r);case"XXXX":case"XX":return k(r);default:return k(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return T(r);case"xxxx":case"xx":return k(r);default:return k(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+C(r,":");default:return"GMT"+k(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+C(r,":");default:return"GMT"+k(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return c(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return c((a._originalDate||t).getTime(),e.length)}};function C(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+c(i,2)}function T(t,e){return t%60==0?(t>0?"-":"+")+c(Math.abs(t)/60,2):k(t,e)}function k(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+c(Math.floor(r/60),2)+n+c(r%60,2)}const E=y;var M=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},x=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},D={p:x,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],i=a[2];if(!i)return M(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",M(r,e)).replace("{{time}}",x(i,e))}};const S=D;var P=["D","DD"],U=["YY","YYYY"];function A(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var W={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function L(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var Y,O={date:L({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:L({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:L({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},N={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function q(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):r;a=t.formattingValues[i]||t.formattingValues[r]}else{var o=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[u]||t.values[o]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function j(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,u=i[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(d);return o=t.valueCallback?t.valueCallback(s):s,{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(u.length)}}}const H={code:"en-US",formatDistance:function(t,e,n){var a,r=W[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:O,formatRelative:function(t,e,n,a){return N[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:q({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:q({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:q({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:q({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:q({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Y={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Y.matchPattern);if(!n)return null;var a=n[0],r=t.match(Y.parsePattern);if(!r)return null;var i=Y.valueCallback?Y.valueCallback(r[0]):r[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(a.length)}}),era:j({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:j({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:j({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:j({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:j({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var F=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,z=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,B=/^'([^]*?)'?$/,Q=/''/g,G=/[a-zA-Z]/;function X(n,i,o){var u,s,l,c,m,h,f,g,p,v,b,w,y,C,T,k,M,x;t(2,arguments);var D=String(i),W=d(),L=null!==(u=null!==(s=null==o?void 0:o.locale)&&void 0!==s?s:W.locale)&&void 0!==u?u:H,Y=r(null!==(l=null!==(c=null!==(m=null!==(h=null==o?void 0:o.firstWeekContainsDate)&&void 0!==h?h:null==o||null===(f=o.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:W.firstWeekContainsDate)&&void 0!==c?c:null===(p=W.locale)||void 0===p||null===(v=p.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==l?l:1);if(!(Y>=1&&Y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var O=r(null!==(b=null!==(w=null!==(y=null!==(C=null==o?void 0:o.weekStartsOn)&&void 0!==C?C:null==o||null===(T=o.locale)||void 0===T||null===(k=T.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==y?y:W.weekStartsOn)&&void 0!==w?w:null===(M=W.locale)||void 0===M||null===(x=M.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==b?b:0);if(!(O>=0&&O<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!L.localize)throw new RangeError("locale must contain localize property");if(!L.formatLong)throw new RangeError("locale must contain formatLong property");var N=a(n);if(!function(n){if(t(1,arguments),!function(n){return t(1,arguments),n instanceof Date||"object"===e(n)&&"[object Date]"===Object.prototype.toString.call(n)}(n)&&"number"!=typeof n)return!1;var r=a(n);return!isNaN(Number(r))}(N))throw new RangeError("Invalid time value");var q=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(N),j=function(e,n){return t(2,arguments),function(e,n){t(2,arguments);var i=a(e).getTime(),o=r(n);return new Date(i+o)}(e,-r(n))}(N,q),X={firstWeekContainsDate:Y,weekStartsOn:O,locale:L,_originalDate:N};return D.match(z).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,S[e])(t,L.formatLong):t})).join("").match(F).map((function(t){if("''"===t)return"'";var e,a,r=t[0];if("'"===r)return(a=(e=t).match(B))?a[1].replace(Q,"'"):e;var u,d=E[r];if(d)return null!=o&&o.useAdditionalWeekYearTokens||(u=t,-1===U.indexOf(u))||A(t,i,String(n)),null!=o&&o.useAdditionalDayOfYearTokens||!function(t){return-1!==P.indexOf(t)}(t)||A(t,i,String(n)),d(j,t,L.localize,X);if(r.match(G))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return t})).join("")}var R=[],I=1;document.getElementById("addTask").addEventListener("click",(function(){const t=document.createElement("div");t.classList.add("overlay");const e=document.createElement("form");e.classList.add("task-form");const n=document.createElement("label");n.textContent="Name: ";const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","name"),a.required=!0,e.appendChild(n),e.appendChild(a);const r=document.createElement("label");r.textContent="Description: ";const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("name","description"),e.appendChild(r),e.appendChild(i);const o=new Date;let u=o.getDate(),d=o.getMonth()+1,s=o.getFullYear()+"-"+("0"+d).slice(-2)+"-"+("0"+u).slice(-2);console.log(s);const l=document.createElement("label");l.textContent="Date: ";const c=document.createElement("input");c.setAttribute("type","date"),c.setAttribute("name","date"),c.setAttribute("min",s),c.required=!0,e.appendChild(l),e.appendChild(c);const m=document.createElement("label");m.textContent="Priority: ";const h=document.createElement("select");h.setAttribute("id","prioritySelect"),h.multiple=!0,h.required=!0;const f=document.createElement("option");f.textContent="Low",f.setAttribute("id","low"),f.setAttribute("value","low");const g=document.createElement("option");g.textContent="Medium",g.setAttribute("id","medium"),g.setAttribute("value","medium");const p=document.createElement("option");p.textContent="High",p.setAttribute("id","high"),p.setAttribute("value","high"),h.appendChild(f),h.appendChild(g),h.appendChild(p),e.appendChild(m),e.appendChild(h);const v=document.createElement("button");v.textContent="Add Task",v.setAttribute("type","submit"),e.appendChild(v),t.appendChild(e),document.body.appendChild(t),e.addEventListener("submit",(e=>{e.preventDefault();var n=new K(a.value,i.value,c.value,h.value);const r=R.find((t=>!0===t.currentlyOn));console.log(r),r.tasks.push(n),console.log(r.tasks),t.remove(),nt()}))}));const J=document.getElementById("new-project-button");function _(t){this.name=t,this.tasks=[],this.currentlyOn=!1}J.addEventListener("click",(function(){J.style.display="none";const t=document.createElement("form"),e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("name","name"),t.appendChild(e);const n=document.createElement("button");n.textContent="Add Project",n.setAttribute("type","submit"),t.appendChild(n);const a=document.createElement("button");a.textContent="Cancel",a.setAttribute("type","reset"),t.appendChild(a),document.querySelector("aside").appendChild(t),a.addEventListener("click",(()=>{t.remove(),J.style.display="block"})),t.addEventListener("submit",(n=>{n.preventDefault(),t.remove(),J.style.display="block";let a=new _(e.value);R.push(a),console.log(R),tt(),et()}))}));const V=new _("Default");function K(t,e,n,a){return this.idNum=I,this.name=t,this.description=e,this.dueDate=n,this.priority=a,this.finished=!1,I++}V.currentlyOn=!0,R.push(V);const $=new K("keko"),Z=new K("zirto");function tt(){const t=document.getElementById("project-list");t.innerHTML="";for(let e=0;e<R.length;e++){const n=document.createElement("li");n.classList.add("projectName1"),n.textContent=R[e].name,t.appendChild(n),document.querySelectorAll(".projectName1").forEach((t=>{t.addEventListener("click",(function(){const t=R.find((t=>!0===t.currentlyOn));t.currentlyOn=!1;const e=R.find((t=>t.name===this.innerText));e.currentlyOn=!0,tt(),et()}))}))}}function et(){const t=R.find((t=>!0===t.currentlyOn)),e=document.querySelectorAll(".projectName1");for(var n=0,a=e.length;n<a;n++)e[n].innerText===t.name&&e[n].classList.add("selectedProject1");nt()}function nt(){const t=R.find((t=>!0===t.currentlyOn)),e=document.getElementById("task-list");e.innerHTML="";for(let n=0;n<t.tasks.length;n++){const a=document.createElement("li"),r=document.createElement("div");r.classList.add("task-container");const i=document.createElement("div");i.classList.add("task-title");const o=document.createElement("label"),u=document.createElement("input");u.setAttribute("type","checkbox");const d=document.createElement("span");d.innerText=t.tasks[n].name;const s=document.createElement("div");s.classList.add("task-details");const l=X(new Date(t.tasks[n].dueDate),"d MMMM"),c=document.createElement("p");c.classList.add("task-date"),c.innerText=l;const m=document.createElement("p");m.classList.add("task-description"),m.innerText=t.tasks[n].description;const h=document.createElement("div");h.classList.add("task-buttons");const f=document.createElement("button");f.classList.add("details-button"),f.innerText="Details",f.addEventListener("click",at);const g=document.createElement("button");g.classList.add("edit-button"),g.innerText="Edit",g.addEventListener("click",(function(){rt(n)}));const p=document.createElement("button");p.classList.add("delete-button"),p.innerText="x",p.addEventListener("click",(function(){var t;t=n,R.find((t=>!0===t.currentlyOn)).tasks.splice(t,1),nt()})),o.appendChild(u),o.appendChild(d),i.appendChild(o),r.appendChild(i),s.appendChild(c),s.appendChild(m),r.appendChild(s),h.appendChild(f),h.appendChild(g),h.appendChild(p),r.appendChild(h),a.appendChild(r),e.appendChild(a)}}function at(){}function rt(t){const e=R.find((t=>!0===t.currentlyOn)),n=document.createElement("div");n.classList.add("overlay");const a=document.createElement("form");a.classList.add("task-form");const r=document.createElement("label");r.textContent="Name: ";const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("name","name"),i.required=!0,i.value=e.tasks[t].name,a.appendChild(r),a.appendChild(i);const o=document.createElement("label");o.textContent="Description: ";const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("name","description"),u.value=e.tasks[t].description,a.appendChild(o),a.appendChild(u);const d=new Date;let s=d.getDate(),l=d.getMonth()+1,c=d.getFullYear()+"-"+("0"+l).slice(-2)+"-"+("0"+s).slice(-2);console.log(c);const m=document.createElement("label");m.textContent="Date: ";const h=document.createElement("input");h.setAttribute("type","date"),h.setAttribute("name","date"),h.setAttribute("min",c),h.required=!0,h.value=e.tasks[t].dueDate,a.appendChild(m),a.appendChild(h);const f=document.createElement("label");f.textContent="Priority: ";const g=document.createElement("select");g.setAttribute("id","prioritySelect"),g.multiple=!0,g.required=!0;const p=document.createElement("option");p.textContent="Low",p.setAttribute("id","low"),p.setAttribute("value","low");const v=document.createElement("option");v.textContent="Medium",v.setAttribute("id","medium"),v.setAttribute("value","medium");const b=document.createElement("option");b.textContent="High",b.setAttribute("id","high"),b.setAttribute("value","high"),g.appendChild(p),g.appendChild(v),g.appendChild(b),a.appendChild(f),a.appendChild(g);for(var w=g.childNodes,y=0;y<w.length;y++)w[y].id===e.tasks[t].priority&&(w[y].selected=!0);const C=document.createElement("button");C.textContent="Update Task",C.setAttribute("type","submit"),a.appendChild(C),n.appendChild(a),document.body.appendChild(n),a.addEventListener("submit",(a=>{a.preventDefault(),e.tasks[t].name=i.value,e.tasks[t].description=u.value,e.tasks[t].dueDate=h.value,e.tasks[t].priority=g.value,console.log(e),console.log(e.tasks),n.remove(),nt()}))}console.log($.idNum),console.log($.name),console.log(Z.idNum),console.log(Z.name),tt(),et()})();