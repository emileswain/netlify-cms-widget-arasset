!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){e.exports=r(4)()},function(e,t,r){"use strict";e.exports=r(6)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ARAssetEditorComponent=t.ARAssetPreview=t.ARAssetControl=void 0;var n=a(r(3)),o=a(r(8)),u=a(r(9));function a(e){return e&&e.__esModule?e:{default:e}}"undefined"!=typeof window&&(window.ARAssetControl=n.default,window.ARAssetPreview=o.default,window.ARAssetEditorComponent=u.default),t.ARAssetControl=n.default,t.ARAssetPreview=o.default,t.ARAssetEditorComponent=u.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=a(r(0)),u=a(r(1));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){var e=this.props,t=e.forID,r=e.value,n=e.onChange,o=e.classNameWrapper,a=JSON.parse(r||'{"id":"", "type":""}'),i=function(e){console.log("handleChange "+e),n(JSON.stringify(e))};return u.default.createElement("div",{id:t},u.default.createElement("label",null,"ID of AR asset"),u.default.createElement("input",{id:"vid",type:"text",className:o,value:r?r.id:"--a",onChange:function(e){console.log("id: "+e.target.value),a.id=e.target.value,i(a)}}),u.default.createElement("label",null,"Type of "),u.default.createElement("input",{id:"vtype",type:"text",className:o,value:r?r.type:"--b",onChange:function(e){console.log("type: "+e.target.value),a.type=e.target.value,i(a)}}))}}]),t}(u.default.Component);c.propTypes={onChange:o.default.func.isRequired,forID:o.default.string,value:o.default.object,classNameWrapper:o.default.string.isRequired},c.defaultProps={value:""},t.default=c},function(e,t,r){"use strict";var n=r(5);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,u,a){if(a!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";
/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7),o=60103,u=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,i=60110,l=60112;t.Suspense=60113;var c=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),u=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),a=s("react.provider"),i=s("react.context"),l=s("react.forward_ref"),t.Suspense=s("react.suspense"),c=s("react.memo"),f=s("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function m(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}function h(){}function b(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=m.prototype;var _=b.prototype=new h;_.constructor=b,n(_,m.prototype),_.isPureReactComponent=!0;var g={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,u={},a=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)O.call(t,n)&&!w.hasOwnProperty(n)&&(u[n]=t[n]);var l=arguments.length-2;if(1===l)u.children=r;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];u.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===u[n]&&(u[n]=l[n]);return{$$typeof:o,type:e,key:a,ref:i,props:u,_owner:g.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case u:l=!0}}if(l)return a=a(l=e),e=""===n?"."+E(l,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),S(a,t,r,"",(function(e){return e}))):null!=a&&(R(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var f=n+E(i=e[c],c);l+=S(i,t,r,f,a)}else if("function"==typeof(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=f.call(e),c=0;!(i=e.next()).done;)l+=S(i=i.value,t,r,f=n+E(i,c++),a);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function A(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var k={current:null};function x(){var e=k.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:A,forEach:function(e,t,r){A(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var u=n({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=g.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in t)O.call(t,f)&&!w.hasOwnProperty(f)&&(u[f]=void 0===t[f]&&void 0!==c?c[f]:t[f])}var f=arguments.length-2;if(1===f)u.children=r;else if(1<f){c=Array(f);for(var s=0;s<f;s++)c[s]=arguments[s+2];u.children=c}return{$$typeof:o,type:e.type,key:a,ref:i,props:u,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return x().useCallback(e,t)},t.useContext=function(e,t){return x().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return x().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return x().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return x().useLayoutEffect(e,t)},t.useMemo=function(e,t){return x().useMemo(e,t)},t.useReducer=function(e,t,r){return x().useReducer(e,t,r)},t.useRef=function(e){return x().useRef(e)},t.useState=function(e){return x().useState(e)},t.version="17.0.1"},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,l=a(e),c=1;c<arguments.length;c++){for(var f in r=Object(arguments[c]))o.call(r,f)&&(l[f]=r[f]);if(n){i=n(r);for(var s=0;s<i.length;s++)u.call(r,i[s])&&(l[i[s]]=r[i[s]])}}return l}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var n=u(r(0)),o=u(r(1));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.value;return o.default.createElement("div",null,o.default.createElement("h1",null," From Preview "),o.default.createElement("hr",null),o.default.createElement("pre",null," ",JSON.stringify(t,null,4)))}a.propTypes={value:n.default.node}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});u(r(0));var n=u(r(1)),o=r(2);function u(e){return e&&e.__esModule?e:{default:e}}t.default={id:"ARmdx",label:"AR Asset",fields:[{name:"id",label:"Asset ID",widget:"string"},{name:"type",label:"Asset Type",widget:"string"}],pattern:/(?:<AR data=')(.[^']+)(?:.*?>)(.*)(?:<\/AR>)/gms,fromBlock:function(e){console.log("fromBlock(match) : "+e);var t=e[0];return t=(t=RegExp(/(?:<AR data=')(.[^']+)(?:.*?>)(.*)(?:<\/AR>)/gms).exec(t))[1],t=JSON.parse(decodeURI(t)),console.log("fromBlock(data) : "+JSON.stringify(t)),null==t?t={id:"none",type:"none"}:(!t.hasOwnProperty("id")&&(t.id="none"),!t.hasOwnProperty("type")&&(t.type="none")),console.log("fromBlock()  data validated : "+JSON.stringify(t)),t},toBlock:function(e){var t=JSON.stringify({id:e.id||"none",type:e.type||"none"});return console.log("toBlock()  Data:"+JSON.stringify(e)),"<AR data='"+encodeURI(t)+"'>\n<p>something</p>\n</AR>"},toPreview:function(e){return n.default.createElement(o.ARAssetPreview,{value:e}," ")}}}]);
//# sourceMappingURL=main.js.map