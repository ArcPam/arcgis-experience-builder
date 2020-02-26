define((function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1583)}({1583:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(1584)),r=l(n(1585)),i=l(n(1586)),o=l(n(1587)),u=l(n(1588));function l(e){return e&&e.__esModule?e:{default:e}}var d={formatDistance:a.default,formatLong:r.default,formatRelative:i.default,localize:o.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=d,e.exports=t.default},1584:function(e,t,n){"use strict";function a(e,t,n){n=n||"regular";var a=function(e,t){if(1===t)return e.one;var n=t%100;if(n<=20&&n>10)return e.other;var a=n%10;return a>=2&&a<=4?e.twoFour:e.other}(e,t);return(a[n]||a).replace("{{count}}",t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){n=n||{};var i=r[e];if(!n.addSuffix)return a(i,t);return n.comparison>0?"za "+a(i,t,"future"):a(i,t,"past")+" temu"};var r={lessThanXSeconds:{one:{regular:"mniej niż sekunda",past:"mniej niż sekundę",future:"mniej niż sekundę"},twoFour:"mniej niż {{count}} sekundy",other:"mniej niż {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekundę",future:"sekundę"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"pół minuty",twoFour:"pół minuty",other:"pół minuty"},lessThanXMinutes:{one:{regular:"mniej niż minuta",past:"mniej niż minutę",future:"mniej niż minutę"},twoFour:"mniej niż {{count}} minuty",other:"mniej niż {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minutę",future:"minutę"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"około godzina",past:"około godziny",future:"około godzinę"},twoFour:"około {{count}} godziny",other:"około {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzinę",future:"godzinę"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzień",past:"dzień",future:"1 dzień"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXMonths:{one:"około miesiąc",twoFour:"około {{count}} miesiące",other:"około {{count}} miesięcy"},xMonths:{one:"miesiąc",twoFour:"{{count}} miesiące",other:"{{count}} miesięcy"},aboutXYears:{one:"około rok",twoFour:"około {{count}} lata",other:"około {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};e.exports=t.default},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(5))&&a.__esModule?a:{default:a};var i={date:(0,r.default)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},1586:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,a){var r=c[e];if("function"==typeof r)return r(e,t,n,a);return r};var a,r=(a=n(59))&&a.__esModule?a:{default:a};var i={masculine:"ostatni",feminine:"ostatnia"},o={masculine:"ten",feminine:"ta"},u={masculine:"następny",feminine:"następna"},l={0:"feminine",1:"masculine",2:"masculine",3:"feminine",4:"masculine",5:"masculine",6:"feminine"};function d(e,t,n,a){var d=t.getUTCDay();return function(e,t,n,a){if((0,r.default)(t,n,a))return o;if("lastWeek"===e)return i;if("nextWeek"===e)return u;throw new Error("Cannot determine adjectives for token ".concat(e))}(e,t,n,a)[l[d]]}function s(e,t,n,a){var r=d(e,t,n,a);return"'".concat(r,"' eeee 'o' p")}var c={lastWeek:s,yesterday:"'wczoraj o' p",today:"'dzisiaj o' p",tomorrow:"'jutro o' p",nextWeek:s,other:"P"};e.exports=t.default},1587:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(6))&&a.__esModule?a:{default:a};var i={ordinalNumber:function(e){var t=Number(e);return String(t)},era:(0,r.default)({values:{narrow:["p.n.e.","n.e."],abbreviated:["p.n.e.","n.e."],wide:["przed naszą erą","naszej ery"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["I kw.","II kw.","III kw.","IV kw."],wide:["I kwartał","II kwartał","III kwartał","IV kwartał"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["S","L","M","K","M","C","L","S","W","P","L","G"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],wide:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]},defaultWidth:"wide",formattingValues:{narrow:["s","l","m","k","m","c","l","s","w","p","l","g"],abbreviated:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],wide:["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia"]},defaultFormattingWidth:"wide"}),day:(0,r.default)({values:{narrow:["N","P","W","Ś","C","P","S"],short:["nie","pon","wto","śro","czw","pią","sob"],abbreviated:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],wide:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},defaultWidth:"wide",formattingValues:{narrow:["n","p","w","ś","c","p","s"],short:["nie","pon","wto","śro","czw","pią","sob"],abbreviated:["niedz.","pon.","wt.","śr.","czw.","pt.","sob."],wide:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},defaultFormattingWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"a",pm:"p",midnight:"półn.",noon:"poł",morning:"rano",afternoon:"popoł.",evening:"wiecz.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"północ",noon:"południe",morning:"rano",afternoon:"popołudnie",evening:"wieczór",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"północ",noon:"południe",morning:"rano",afternoon:"popołudnie",evening:"wieczór",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"o półn.",noon:"w poł.",morning:"rano",afternoon:"po poł.",evening:"wiecz.",night:"w nocy"},abbreviated:{am:"AM",pm:"PM",midnight:"o północy",noon:"w południe",morning:"rano",afternoon:"po południu",evening:"wieczorem",night:"w nocy"},wide:{am:"AM",pm:"PM",midnight:"o północy",noon:"w południe",morning:"rano",afternoon:"po południu",evening:"wieczorem",night:"w nocy"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},1588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(7)),r=i(n(8));function i(e){return e&&e.__esModule?e:{default:e}}var o={ordinalNumber:(0,a.default)({matchPattern:/^(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,abbreviated:/^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,wide:/^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^n/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^(I|II|III|IV)\s*kw\.?/i,wide:/^(I|II|III|IV)\s*kwarta(ł|l)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/1/i,/2/i,/3/i,/4/i],any:[/^I kw/i,/^II kw/i,/^III kw/i,/^IV kw/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[slmkcwpg]/i,abbreviated:/^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,wide:/^(stycze(ń|n)|stycznia|luty|lutego|marzec|marca|kwiecie(ń|n)|kwietnia|maj|maja|czerwiec|czerwca|lipiec|lipca|sierpie(ń|n)|sierpnia|wrzesie(ń|n)|wrze(ś|s)nia|pa(ź|z)dziernik|pa(ź|z)dziernika|listopad|listopada|grudzie(ń|n)|grudnia)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^l/i,/^m/i,/^k/i,/^m/i,/^c/i,/^l/i,/^s/i,/^w/i,/^p/i,/^l/i,/^g/i],any:[/^st/i,/^lu/i,/^mar/i,/^k/i,/^maj/i,/^c/i,/^lip/i,/^si/i,/^w/i,/^p/i,/^lis/i,/^g/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[npwścs]/i,short:/^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,abbreviated:/^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,wide:/^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^w/i,/^ś/i,/^c/i,/^p/i,/^s/i],abbreviated:[/^n/i,/^po/i,/^w/i,/^(ś|s)r/i,/^c/i,/^pt/i,/^so/i],any:[/^n/i,/^po/i,/^w/i,/^(ś|s)r/i,/^c/i,/^pi/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,any:/^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^a$/i,pm:/^p$/i,midnight:/pó(ł|l)n/i,noon:/po(ł|l)/i,morning:/rano/i,afternoon:/po\s*po(ł|l)/i,evening:/wiecz/i,night:/noc/i},any:{am:/^am/i,pm:/^pm/i,midnight:/pó(ł|l)n/i,noon:/po(ł|l)/i,morning:/rano/i,afternoon:/po\s*po(ł|l)/i,evening:/wiecz/i,night:/noc/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if(arguments.length<2)throw new TypeError("2 argument required, but only "+arguments.length+" present");var a=(0,r.default)(e,n),i=(0,r.default)(t,n);return a.getTime()===i.getTime()};var a,r=(a=n(60))&&a.__esModule?a:{default:a};e.exports=t.default},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;a=e.values[l]||e.values[u]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t||{},i=n.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:(0,a.default)(o),l=null==n.weekStartsOn?u:(0,a.default)(n.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=(0,r.default)(e),s=d.getUTCDay(),c=(s<l?7:0)+s-l;return d.setUTCDate(d.getUTCDate()-c),d.setUTCHours(0,0,0,0),d};var a=i(n(61)),r=i(n(62));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))},e.exports=t.default},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a=String(t),r=n||{},i=a.match(e.matchPattern);if(!i)return null;var o=i[0],u=a.match(e.parsePattern);if(!u)return null;var l=e.valueCallback?e.valueCallback(u[0]):u[0];return{value:l=r.valueCallback?r.valueCallback(l):l,rest:a.slice(o.length)}}},e.exports=t.default},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a=String(t),r=n||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=a.match(o);if(!u)return null;var l,d=u[0],s=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(s)?s.findIndex((function(e){return e.test(a)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(s,(function(e){return e.test(a)})),l=e.valueCallback?e.valueCallback(l):l,{value:l=r.valueCallback?r.valueCallback(l):l,rest:a.slice(d.length)}}},e.exports=t.default}})}));