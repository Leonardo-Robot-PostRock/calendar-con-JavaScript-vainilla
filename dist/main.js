(()=>{"use strict";function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}var t,n=function(t){if(Array.isArray(t))return r(t)}(t=Array(12).keys())||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),e=new Intl.DateTimeFormat("es",{month:"long"}),o=n.map((function(r){var t=e.format(new Date(2022,r));return console.log(t),{monthName:t}})),a=o.map((function(r){var t=r.monthName;return"<h1>".concat(t," ").concat(2022,"</h1>")})).join("");document.querySelector("div").innerHTML=a,console.log(o)})();