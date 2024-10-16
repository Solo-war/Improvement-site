(()=>{"use strict";var e={602:(e,t)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return(t=c(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function c(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}t.Z=void 0;var s=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"local";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._key=t,this._storage=window[n+"Storage"];var r=this._storage.getItem(t);this._value=r?JSON.parse(r):{}}var t,n,c;return t=e,n=[{key:"_save",value:function(){this._storage.setItem(this._key,JSON.stringify(this._value))}},{key:"clear",value:function(){return this._value={},this._save(),this}},{key:"value",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this._value)}},{key:"isEmpty",get:function(){return 0===Object.keys(this._value).length}},{key:"get",value:function(e){return this._value[e]}},{key:"set",value:function(e,t){return this._value[e]=t,this._save(),this}},{key:"delete",value:function(e){return delete this._value[e],this._save(),this}}],n&&a(t.prototype,n),c&&a(t,c),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.Z=s}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(()=>{var e=n(602);const t=(()=>{const e=["matches","matchesSelector","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];for(let t=0,n=e.length;t<n;t++)if(Element.prototype[e[t]])return e[t];return!1})();function r(e,n){return!!t&&e[t](n)}function o(e,t){if(Array.isArray(e)||e instanceof NodeList)[].forEach.call(e,t);else if("object"==typeof e)for(let n in e)e.hasOwnProperty(n)&&t(e[n],n)}class a{constructor(e){a.map=e.map||{},a.ecommerce=e.ecommerce||[],a.afterSend=e.afterSend||null,c.init(a.ecommerce),a.bindEvents(),a.observe((e=>{if("IFRAME"===e.tagName)try{const t=e.contentWindow;if(!t||!t.addEventListener)return;t.addEventListener("DOMContentLoaded",(()=>{t.s3&&t.s3.Goal||a.bindEvents(t.document)}))}catch(e){}}))}static bindEvents(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;const t=function(e,t){const n={};return o(e,(e=>{const r=e[t];r&&(n[r]=1)})),Object.keys(n)}(a.map,"event");o(t,(t=>{e.addEventListener(t,(e=>{a.handle(e.target,t)}),!0)}))}static handle(e,t){if("FORM"!==e.tagName);else{let n=e.getAttribute(a.GOAL_ANKETA_ID_ATTR);if(!n){const t=function(e,t){for(;e;){if(r(e,t))return e;e=e.parentElement}return null}(e,`[${a.GOAL_API_FORM_URL_ATTR}]`);t&&(n=a.getApiFormId(t))}if(!n)return;o(a.map,(e=>{e.object_id!=n||e.event!=t||"anketa"!=e.code&&"anketa2"!=e.code||(e.object="form",a.send(e))}))}}static send(e){switch(e.system){case"analytics":a.googleSend(e);break;case"metrika":a.yandexSend(e)}}static get googleCounters(){return window.ga?[window.ga]:[]}static get yandexCounters(){try{return function(e){const t=[];return o(e,(e=>{t.push(e)})),t}(Ya._metrika.counters)}catch(e){return a.logEnabled&&console.error(e),[]}}static get existCounters(){return this.yandexCounters.length||this.googleCounters.length}static googleSend(e){return o(a.googleCounters,(t=>{t((()=>{t.getAll().forEach((n=>{const r=n.get("name");t(r+".send","event",e.object,e.event,e.label)}))})),a.logEnabled&&console.info("Goal.send",e)})),!0}static yandexSend(e){const t=a.yandexCounters;return!!t&&(o(t,(t=>{t.reachGoal(e.label,{object:e.object,event:e.event}),a.logEnabled&&console.info("Goal.send",e)})),!0)}static get googleDataLayerKeys(){if(!window.google_tag_manager)return[];const e=function(e,t){for(let n in e){if(!e.hasOwnProperty(n))return;if(t(e[n]))return n}}(google_tag_manager,(e=>e.gtmDom&&e.gtmLoad));return e?[e]:[]}static get yandexDataLayerKeys(){const e=a.yandexCounters,t=[];return o(e,(e=>{e._ecommerce&&t.push(e._ecommerce)})),t}static observe(e){if(!window.MutationObserver)return;new MutationObserver((function(t){t.forEach((function(t){[].forEach.call(t.addedNodes,(function(t){t.nodeType==Node.ELEMENT_NODE&&e(t)}))}))})).observe(document,{childList:!0,subtree:!0})}static getApiFormId(e){const t=e.getAttribute(a.GOAL_API_FORM_URL_ATTR);if(!t)return null;const n=t.match(/(?:&|\?)param\[form_id\]=(\d+)(?:&|$)/);return n&&2===n.length?n[1]:null}}a.GOAL_ANKETA_ID_ATTR="data-s3-anketa-id",a.GOAL_API_FORM_URL_ATTR="data-api-url",a.logEnabled=!1;class c{static init(e){e.forEach((e=>{let t=null;try{t=e.ecommerce.purchase.actionField.id}catch(e){}if(t){c.state.delete("products");const e=c.state.get("orders")||{};if(e[t])return;e[t]=1,c.state.set("orders",e)}e._correction?c.recount(e._correction):c.push(e)})),setInterval((()=>{c.send()}),100),window.jQuery&&jQuery.ajaxSetup({beforeSend:function(e,t){const n=t.url.match(/(?:\?|&)cmd=(cartAddItem|cartRemoveItem|cartUpdate)(?:&|$)/);if(!n||2!==n.length)return;if("cartAddItem"===n[1])e.done((function(e){"object"==typeof e&&e.ecommerce&&c.addProduct(e.ecommerce)}))}})}static push(e){["add","remove","detail","purchase"].some((function(t){if(e.ecommerce[t])return e.event="s3_shop_"+t,!0})),c._pool.push({value:e,layers:{}}),c.send()}static send(){let e=function(e){let t=[];return e.forEach((e=>{-1===t.indexOf(e)&&t.push(e)})),t}(a.googleDataLayerKeys.concat(a.yandexDataLayerKeys));e.length||(e=c._defaultKeys),o(e,(e=>{const t=window[e]=window[e]||[];o(c._pool,(n=>{if(!n.layers[e]){const o=(r=n.value,JSON.parse(JSON.stringify(r)));t.push(o),c.logEnabled&&console.info("Ecommerce.send",e,o),n.layers[e]=!0,c.isSend=!0}var r}))})),a.afterSend&&"function"==typeof a.afterSend&&c.isSend&&(a.afterSend(),c.isSend=!1)}static addProduct(e){const t=c.state.get("products")||{};e.forEach((e=>{e.ecommerce.add.products.forEach((e=>{const n=c.getKeyProduct(e);t[n]?t[n].quantity+=e.quantity:t[n]=e})),c.push(e)})),c.state.set("products",t)}static getKeyProduct(e){return JSON.stringify([e.id+"",e.variant])}static recount(e){const t={};o(e,(e=>{t[c.getKeyProduct(e)]=e}));const n=c.state.get("products")||{};o(t,((e,r)=>{if(!n[r])return n[r]=e,void c.add(e);const o=t[r].quantity-n[r].quantity;o<0?(e.quantity=-o,c.remove(e),n[r].quantity+=o):o>0&&(e.quantity=o,c.add(e),n[r].quantity+=o)})),o(n,((e,r)=>{t[r]||(c.remove(e),delete n[r])})),c.state.set("products",n)}static remove(e){c.push({ecommerce:{remove:{products:[e]}}})}static add(e,t){c.push({ecommerce:{add:{products:[e]}}})}}c.state=new e.Z("s3.goal.ecommerce"),c._pool=[],c.logEnabled=!1,c._defaultKeys=["dataLayer"],c.isSend=!1;const s=window.s3=window.s3||{};s.Ecommerce=c,s.Goal=a})()})();
//# sourceMappingURL=s3.goal.js.map