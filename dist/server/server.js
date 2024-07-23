import { Writable } from 'node:stream';
import require$$0$6 from 'tty';
import { nothing, noChange, ReactiveElement } from 'lit';
import { directive, Directive, PartType } from 'lit/directive.js';
import { getDirectiveClass, isTemplateResult, isPrimitive, isCompiledTemplateResult, TemplateResultType } from 'lit/directive-helpers.js';
import require$$1, { Buffer as Buffer$1 } from 'buffer';
import require$$0$1, { Readable } from 'stream';
import require$$0$5 from 'fs';
import require$$1$2 from 'url';
import require$$0$3 from 'http';
import require$$0$2 from 'util';
import require$$1$1 from 'https';
import require$$3 from 'zlib';
import require$$2 from 'crypto';
import require$$0$4 from 'querystring';
import require$$3$1 from 'stream/web';
import express from 'express';

function _mergeNamespaces(n, m) {
    for (var i = 0; i < m.length; i++) {
        const e = m[i];
        if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
            if (k !== 'default' && !(k in n)) {
                const d = Object.getOwnPropertyDescriptor(e, k);
                if (d) {
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: () => e[k]
                    });
                }
            }
        } }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

const IP_LOCALHOST = "127.0.0.1";
const IP_EXPOSED = "0.0.0.0";
const PUBLIC_DIR = "./dist/client";

let cwd = process.env['__GRACILE_PROJECT_CWD'] || process.cwd();
function setCurrentWorkingDirectory(root) {
    if (root && root !== cwd) {
        cwd = root;
    }
    process.env['__GRACILE_PROJECT_CWD'] = cwd;
    return cwd;
}

const routes = new Map([
  [
    "/",
    {
      "filePath": "src/routes/(home).ts",
      "pattern": {},
      "hasParams": false,
      "pageAssets": [
        "src/routes/(home).client.ts",
        "src/routes/(home).scss"
      ]
    }
  ],
  [
    "/about/",
    {
      "filePath": "src/routes/about.ts",
      "pattern": {},
      "hasParams": false,
      "pageAssets": []
    }
  ]
]);

const routeImports = new Map(
	[
	  ['/', () => import('./chunk/(home).js')],
    ['/about/', () => import('./chunk/about.js')],
	]
);

const routeAssets = new Map([
  [
    "/about/",
    "\t<script type=\"module\" crossorigin src=\"/assets/document.client-8jvz8cCD.js\"></script>\n\n\t<link rel=\"stylesheet\" crossorigin href=\"/assets/bootstrap-C_5tx43a.css\">\n"
  ],
  [
    "/",
    "\t<script type=\"module\" crossorigin src=\"/assets/index-Bil4xfo2.js\"></script>\n\n\t<link rel=\"modulepreload\" crossorigin href=\"/assets/document.client-8jvz8cCD.js\">\n\n\t<link rel=\"stylesheet\" crossorigin href=\"/assets/bootstrap-C_5tx43a.css\">\n\n\t<link rel=\"stylesheet\" crossorigin href=\"/assets/index-CQn9OfY7.css\">\n"
  ]
]);

/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck TODO: Implement stubs
const NOT_PROD = process.env.NODE_ENV !== 'production';
const logger = {
    info(msg, options) {
        if (NOT_PROD)
            console.info(msg);
    },
    warn(msg, options) {
        if (NOT_PROD)
            console.warn(msg);
    },
    warnOnce(msg, options) {
        if (NOT_PROD)
            console.warn(msg);
    },
    error(msg, options) {
        if (NOT_PROD)
            console.error(msg);
    },
    clearScreen(type) {
        if (NOT_PROD)
            console.clear();
    },
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    hasErrorLogged(error) {
        if (NOT_PROD)
            console.error(error);
    },
    hasWarned: false,
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var nodePonyfill = {};

function isNextJs() {
  return Object.keys(globalThis).some(key => key.startsWith('__NEXT'))
}

var shouldSkipPonyfill$2 = function shouldSkipPonyfill() {
  // Bun and Deno already have a Fetch API
  if (globalThis.Deno) {
    return true
  }
  if (process.versions.bun) {
    return true
  }
  if (isNextJs()) {
    return true
  }
  return false
};

var urlpattern;
var hasRequiredUrlpattern;

function requireUrlpattern () {
	if (hasRequiredUrlpattern) return urlpattern;
	hasRequiredUrlpattern = 1;
var M=Object.defineProperty;var Pe=Object.getOwnPropertyDescriptor;var Re=Object.getOwnPropertyNames;var Ee=Object.prototype.hasOwnProperty;var Oe=(e,t)=>{for(var r in t)M(e,r,{get:t[r],enumerable:!0});},ke=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Re(t))!Ee.call(e,a)&&a!==r&&M(e,a,{get:()=>t[a],enumerable:!(n=Pe(t,a))||n.enumerable});return e};var Te=e=>ke(M({},"__esModule",{value:!0}),e);var Ne={};Oe(Ne,{URLPattern:()=>Y});urlpattern=Te(Ne);var R=class{type=3;name="";prefix="";value="";suffix="";modifier=3;constructor(t,r,n,a,c,l){this.type=t,this.name=r,this.prefix=n,this.value=a,this.suffix=c,this.modifier=l;}hasCustomName(){return this.name!==""&&typeof this.name!="number"}},Ae=/[$_\p{ID_Start}]/u,ye=/[$_\u200C\u200D\p{ID_Continue}]/u,v=".*";function we(e,t){return (/^[\x00-\x7F]*$/).test(e)}function D(e,t=!1){let r=[],n=0;for(;n<e.length;){let a=e[n],c=function(l){if(!t)throw new TypeError(l);r.push({type:"INVALID_CHAR",index:n,value:e[n++]});};if(a==="*"){r.push({type:"ASTERISK",index:n,value:e[n++]});continue}if(a==="+"||a==="?"){r.push({type:"OTHER_MODIFIER",index:n,value:e[n++]});continue}if(a==="\\"){r.push({type:"ESCAPED_CHAR",index:n++,value:e[n++]});continue}if(a==="{"){r.push({type:"OPEN",index:n,value:e[n++]});continue}if(a==="}"){r.push({type:"CLOSE",index:n,value:e[n++]});continue}if(a===":"){let l="",s=n+1;for(;s<e.length;){let i=e.substr(s,1);if(s===n+1&&Ae.test(i)||s!==n+1&&ye.test(i)){l+=e[s++];continue}break}if(!l){c(`Missing parameter name at ${n}`);continue}r.push({type:"NAME",index:n,value:l}),n=s;continue}if(a==="("){let l=1,s="",i=n+1,o=!1;if(e[i]==="?"){c(`Pattern cannot start with "?" at ${i}`);continue}for(;i<e.length;){if(!we(e[i])){c(`Invalid character '${e[i]}' at ${i}.`),o=!0;break}if(e[i]==="\\"){s+=e[i++]+e[i++];continue}if(e[i]===")"){if(l--,l===0){i++;break}}else if(e[i]==="("&&(l++,e[i+1]!=="?")){c(`Capturing groups are not allowed at ${i}`),o=!0;break}s+=e[i++];}if(o)continue;if(l){c(`Unbalanced pattern at ${n}`);continue}if(!s){c(`Missing pattern at ${n}`);continue}r.push({type:"REGEX",index:n,value:s}),n=i;continue}r.push({type:"CHAR",index:n,value:e[n++]});}return r.push({type:"END",index:n,value:""}),r}function F(e,t={}){let r=D(e);t.delimiter??="/#?",t.prefixes??="./";let n=`[^${S(t.delimiter)}]+?`,a=[],c=0,l=0,i=new Set,o=h=>{if(l<r.length&&r[l].type===h)return r[l++].value},f=()=>o("OTHER_MODIFIER")??o("ASTERISK"),d=h=>{let u=o(h);if(u!==void 0)return u;let{type:p,index:A}=r[l];throw new TypeError(`Unexpected ${p} at ${A}, expected ${h}`)},T=()=>{let h="",u;for(;u=o("CHAR")??o("ESCAPED_CHAR");)h+=u;return h},xe=h=>h,L=t.encodePart||xe,I="",U=h=>{I+=h;},$=()=>{I.length&&(a.push(new R(3,"","",L(I),"",3)),I="");},X=(h,u,p,A,Z)=>{let g=3;switch(Z){case"?":g=1;break;case"*":g=0;break;case"+":g=2;break}if(!u&&!p&&g===3){U(h);return}if($(),!u&&!p){if(!h)return;a.push(new R(3,"","",L(h),"",g));return}let m;p?p==="*"?m=v:m=p:m=n;let O=2;m===n?(O=1,m=""):m===v&&(O=0,m="");let P;if(u?P=u:p&&(P=c++),i.has(P))throw new TypeError(`Duplicate name '${P}'.`);i.add(P),a.push(new R(O,P,L(h),m,L(A),g));};for(;l<r.length;){let h=o("CHAR"),u=o("NAME"),p=o("REGEX");if(!u&&!p&&(p=o("ASTERISK")),u||p){let g=h??"";t.prefixes.indexOf(g)===-1&&(U(g),g=""),$();let m=f();X(g,u,p,"",m);continue}let A=h??o("ESCAPED_CHAR");if(A){U(A);continue}if(o("OPEN")){let g=T(),m=o("NAME"),O=o("REGEX");!m&&!O&&(O=o("ASTERISK"));let P=T();d("CLOSE");let be=f();X(g,m,O,P,be);continue}$(),d("END");}return a}function S(e){return e.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function B(e){return e&&e.ignoreCase?"ui":"u"}function q(e,t,r){return W(F(e,r),t,r)}function k(e){switch(e){case 0:return "*";case 1:return "?";case 2:return "+";case 3:return ""}}function W(e,t,r={}){r.delimiter??="/#?",r.prefixes??="./",r.sensitive??=!1,r.strict??=!1,r.end??=!0,r.start??=!0,r.endsWith="";let n=r.start?"^":"";for(let s of e){if(s.type===3){s.modifier===3?n+=S(s.value):n+=`(?:${S(s.value)})${k(s.modifier)}`;continue}t&&t.push(s.name);let i=`[^${S(r.delimiter)}]+?`,o=s.value;if(s.type===1?o=i:s.type===0&&(o=v),!s.prefix.length&&!s.suffix.length){s.modifier===3||s.modifier===1?n+=`(${o})${k(s.modifier)}`:n+=`((?:${o})${k(s.modifier)})`;continue}if(s.modifier===3||s.modifier===1){n+=`(?:${S(s.prefix)}(${o})${S(s.suffix)})`,n+=k(s.modifier);continue}n+=`(?:${S(s.prefix)}`,n+=`((?:${o})(?:`,n+=S(s.suffix),n+=S(s.prefix),n+=`(?:${o}))*)${S(s.suffix)})`,s.modifier===0&&(n+="?");}let a=`[${S(r.endsWith)}]|$`,c=`[${S(r.delimiter)}]`;if(r.end)return r.strict||(n+=`${c}?`),r.endsWith.length?n+=`(?=${a})`:n+="$",new RegExp(n,B(r));r.strict||(n+=`(?:${c}(?=${a}))?`);let l=!1;if(e.length){let s=e[e.length-1];s.type===3&&s.modifier===3&&(l=r.delimiter.indexOf(s)>-1);}return l||(n+=`(?=${c}|${a})`),new RegExp(n,B(r))}var x={delimiter:"",prefixes:"",sensitive:!0,strict:!0},J={delimiter:".",prefixes:"",sensitive:!0,strict:!0},Q={delimiter:"/",prefixes:"/",sensitive:!0,strict:!0};function ee(e,t){return e.length?e[0]==="/"?!0:!t||e.length<2?!1:(e[0]=="\\"||e[0]=="{")&&e[1]=="/":!1}function te(e,t){return e.startsWith(t)?e.substring(t.length,e.length):e}function Ce(e,t){return e.endsWith(t)?e.substr(0,e.length-t.length):e}function _(e){return !e||e.length<2?!1:e[0]==="["||(e[0]==="\\"||e[0]==="{")&&e[1]==="["}var re=["ftp","file","http","https","ws","wss"];function N(e){if(!e)return !0;for(let t of re)if(e.test(t))return !0;return !1}function ne(e,t){if(e=te(e,"#"),t||e==="")return e;let r=new URL("https://example.com");return r.hash=e,r.hash?r.hash.substring(1,r.hash.length):""}function se(e,t){if(e=te(e,"?"),t||e==="")return e;let r=new URL("https://example.com");return r.search=e,r.search?r.search.substring(1,r.search.length):""}function ie(e,t){return t||e===""?e:_(e)?K(e):j(e)}function ae(e,t){if(t||e==="")return e;let r=new URL("https://example.com");return r.password=e,r.password}function oe(e,t){if(t||e==="")return e;let r=new URL("https://example.com");return r.username=e,r.username}function ce(e,t,r){if(r||e==="")return e;if(t&&!re.includes(t))return new URL(`${t}:${e}`).pathname;let n=e[0]=="/";return e=new URL(n?e:"/-"+e,"https://example.com").pathname,n||(e=e.substring(2,e.length)),e}function le(e,t,r){return z(t)===e&&(e=""),r||e===""?e:G(e)}function fe(e,t){return e=Ce(e,":"),t||e===""?e:y(e)}function z(e){switch(e){case"ws":case"http":return "80";case"wws":case"https":return "443";case"ftp":return "21";default:return ""}}function y(e){if(e==="")return e;if(/^[-+.A-Za-z0-9]*$/.test(e))return e.toLowerCase();throw new TypeError(`Invalid protocol '${e}'.`)}function he(e){if(e==="")return e;let t=new URL("https://example.com");return t.username=e,t.username}function ue(e){if(e==="")return e;let t=new URL("https://example.com");return t.password=e,t.password}function j(e){if(e==="")return e;if(/[\t\n\r #%/:<>?@[\]^\\|]/g.test(e))throw new TypeError(`Invalid hostname '${e}'`);let t=new URL("https://example.com");return t.hostname=e,t.hostname}function K(e){if(e==="")return e;if(/[^0-9a-fA-F[\]:]/g.test(e))throw new TypeError(`Invalid IPv6 hostname '${e}'`);return e.toLowerCase()}function G(e){if(e===""||/^[0-9]*$/.test(e)&&parseInt(e)<=65535)return e;throw new TypeError(`Invalid port '${e}'.`)}function de(e){if(e==="")return e;let t=new URL("https://example.com");return t.pathname=e[0]!=="/"?"/-"+e:e,e[0]!=="/"?t.pathname.substring(2,t.pathname.length):t.pathname}function pe(e){return e===""?e:new URL(`data:${e}`).pathname}function ge(e){if(e==="")return e;let t=new URL("https://example.com");return t.search=e,t.search.substring(1,t.search.length)}function me(e){if(e==="")return e;let t=new URL("https://example.com");return t.hash=e,t.hash.substring(1,t.hash.length)}var H=class{#i;#n=[];#t={};#e=0;#s=1;#l=0;#o=0;#d=0;#p=0;#g=!1;constructor(t){this.#i=t;}get result(){return this.#t}parse(){for(this.#n=D(this.#i,!0);this.#e<this.#n.length;this.#e+=this.#s){if(this.#s=1,this.#n[this.#e].type==="END"){if(this.#o===0){this.#b(),this.#f()?this.#r(9,1):this.#h()?this.#r(8,1):this.#r(7,0);continue}else if(this.#o===2){this.#u(5);continue}this.#r(10,0);break}if(this.#d>0)if(this.#A())this.#d-=1;else continue;if(this.#T()){this.#d+=1;continue}switch(this.#o){case 0:this.#P()&&this.#u(1);break;case 1:if(this.#P()){this.#C();let t=7,r=1;this.#E()?(t=2,r=3):this.#g&&(t=2),this.#r(t,r);}break;case 2:this.#S()?this.#u(3):(this.#x()||this.#h()||this.#f())&&this.#u(5);break;case 3:this.#O()?this.#r(4,1):this.#S()&&this.#r(5,1);break;case 4:this.#S()&&this.#r(5,1);break;case 5:this.#y()?this.#p+=1:this.#w()&&(this.#p-=1),this.#k()&&!this.#p?this.#r(6,1):this.#x()?this.#r(7,0):this.#h()?this.#r(8,1):this.#f()&&this.#r(9,1);break;case 6:this.#x()?this.#r(7,0):this.#h()?this.#r(8,1):this.#f()&&this.#r(9,1);break;case 7:this.#h()?this.#r(8,1):this.#f()&&this.#r(9,1);break;case 8:this.#f()&&this.#r(9,1);break;}}this.#t.hostname!==void 0&&this.#t.port===void 0&&(this.#t.port="");}#r(t,r){switch(this.#o){case 0:break;case 1:this.#t.protocol=this.#c();break;case 2:break;case 3:this.#t.username=this.#c();break;case 4:this.#t.password=this.#c();break;case 5:this.#t.hostname=this.#c();break;case 6:this.#t.port=this.#c();break;case 7:this.#t.pathname=this.#c();break;case 8:this.#t.search=this.#c();break;case 9:this.#t.hash=this.#c();break;}this.#o!==0&&t!==10&&([1,2,3,4].includes(this.#o)&&[6,7,8,9].includes(t)&&(this.#t.hostname??=""),[1,2,3,4,5,6].includes(this.#o)&&[8,9].includes(t)&&(this.#t.pathname??=this.#g?"/":""),[1,2,3,4,5,6,7].includes(this.#o)&&t===9&&(this.#t.search??="")),this.#R(t,r);}#R(t,r){this.#o=t,this.#l=this.#e+r,this.#e+=r,this.#s=0;}#b(){this.#e=this.#l,this.#s=0;}#u(t){this.#b(),this.#o=t;}#m(t){return t<0&&(t=this.#n.length-t),t<this.#n.length?this.#n[t]:this.#n[this.#n.length-1]}#a(t,r){let n=this.#m(t);return n.value===r&&(n.type==="CHAR"||n.type==="ESCAPED_CHAR"||n.type==="INVALID_CHAR")}#P(){return this.#a(this.#e,":")}#E(){return this.#a(this.#e+1,"/")&&this.#a(this.#e+2,"/")}#S(){return this.#a(this.#e,"@")}#O(){return this.#a(this.#e,":")}#k(){return this.#a(this.#e,":")}#x(){return this.#a(this.#e,"/")}#h(){if(this.#a(this.#e,"?"))return !0;if(this.#n[this.#e].value!=="?")return !1;let t=this.#m(this.#e-1);return t.type!=="NAME"&&t.type!=="REGEX"&&t.type!=="CLOSE"&&t.type!=="ASTERISK"}#f(){return this.#a(this.#e,"#")}#T(){return this.#n[this.#e].type=="OPEN"}#A(){return this.#n[this.#e].type=="CLOSE"}#y(){return this.#a(this.#e,"[")}#w(){return this.#a(this.#e,"]")}#c(){let t=this.#n[this.#e],r=this.#m(this.#l).index;return this.#i.substring(r,t.index)}#C(){let t={};Object.assign(t,x),t.encodePart=y;let r=q(this.#c(),void 0,t);this.#g=N(r);}};var V=["protocol","username","password","hostname","port","pathname","search","hash"],E="*";function Se(e,t){if(typeof e!="string")throw new TypeError("parameter 1 is not of type 'string'.");let r=new URL(e,t);return {protocol:r.protocol.substring(0,r.protocol.length-1),username:r.username,password:r.password,hostname:r.hostname,port:r.port,pathname:r.pathname,search:r.search!==""?r.search.substring(1,r.search.length):void 0,hash:r.hash!==""?r.hash.substring(1,r.hash.length):void 0}}function b(e,t){return t?C(e):e}function w(e,t,r){let n;if(typeof t.baseURL=="string")try{n=new URL(t.baseURL),t.protocol===void 0&&(e.protocol=b(n.protocol.substring(0,n.protocol.length-1),r)),!r&&t.protocol===void 0&&t.hostname===void 0&&t.port===void 0&&t.username===void 0&&(e.username=b(n.username,r)),!r&&t.protocol===void 0&&t.hostname===void 0&&t.port===void 0&&t.username===void 0&&t.password===void 0&&(e.password=b(n.password,r)),t.protocol===void 0&&t.hostname===void 0&&(e.hostname=b(n.hostname,r)),t.protocol===void 0&&t.hostname===void 0&&t.port===void 0&&(e.port=b(n.port,r)),t.protocol===void 0&&t.hostname===void 0&&t.port===void 0&&t.pathname===void 0&&(e.pathname=b(n.pathname,r)),t.protocol===void 0&&t.hostname===void 0&&t.port===void 0&&t.pathname===void 0&&t.search===void 0&&(e.search=b(n.search.substring(1,n.search.length),r)),t.protocol===void 0&&t.hostname===void 0&&t.port===void 0&&t.pathname===void 0&&t.search===void 0&&t.hash===void 0&&(e.hash=b(n.hash.substring(1,n.hash.length),r));}catch{throw new TypeError(`invalid baseURL '${t.baseURL}'.`)}if(typeof t.protocol=="string"&&(e.protocol=fe(t.protocol,r)),typeof t.username=="string"&&(e.username=oe(t.username,r)),typeof t.password=="string"&&(e.password=ae(t.password,r)),typeof t.hostname=="string"&&(e.hostname=ie(t.hostname,r)),typeof t.port=="string"&&(e.port=le(t.port,e.protocol,r)),typeof t.pathname=="string"){if(e.pathname=t.pathname,n&&!ee(e.pathname,r)){let a=n.pathname.lastIndexOf("/");a>=0&&(e.pathname=b(n.pathname.substring(0,a+1),r)+e.pathname);}e.pathname=ce(e.pathname,e.protocol,r);}return typeof t.search=="string"&&(e.search=se(t.search,r)),typeof t.hash=="string"&&(e.hash=ne(t.hash,r)),e}function C(e){return e.replace(/([+*?:{}()\\])/g,"\\$1")}function Le(e){return e.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function Ie(e,t){t.delimiter??="/#?",t.prefixes??="./",t.sensitive??=!1,t.strict??=!1,t.end??=!0,t.start??=!0,t.endsWith="";let r=".*",n=`[^${Le(t.delimiter)}]+?`,a=/[$_\u200C\u200D\p{ID_Continue}]/u,c="";for(let l=0;l<e.length;++l){let s=e[l];if(s.type===3){if(s.modifier===3){c+=C(s.value);continue}c+=`{${C(s.value)}}${k(s.modifier)}`;continue}let i=s.hasCustomName(),o=!!s.suffix.length||!!s.prefix.length&&(s.prefix.length!==1||!t.prefixes.includes(s.prefix)),f=l>0?e[l-1]:null,d=l<e.length-1?e[l+1]:null;if(!o&&i&&s.type===1&&s.modifier===3&&d&&!d.prefix.length&&!d.suffix.length)if(d.type===3){let T=d.value.length>0?d.value[0]:"";o=a.test(T);}else o=!d.hasCustomName();if(!o&&!s.prefix.length&&f&&f.type===3){let T=f.value[f.value.length-1];o=t.prefixes.includes(T);}o&&(c+="{"),c+=C(s.prefix),i&&(c+=`:${s.name}`),s.type===2?c+=`(${s.value})`:s.type===1?i||(c+=`(${n})`):s.type===0&&(!i&&(!f||f.type===3||f.modifier!==3||o||s.prefix!=="")?c+="*":c+=`(${r})`),s.type===1&&i&&s.suffix.length&&a.test(s.suffix[0])&&(c+="\\"),c+=C(s.suffix),o&&(c+="}"),s.modifier!==3&&(c+=k(s.modifier));}return c}var Y=class{#i;#n={};#t={};#e={};#s={};#l=!1;constructor(t={},r,n){try{let a;if(typeof r=="string"?a=r:n=r,typeof t=="string"){let i=new H(t);if(i.parse(),t=i.result,a===void 0&&typeof t.protocol!="string")throw new TypeError("A base URL must be provided for a relative constructor string.");t.baseURL=a;}else {if(!t||typeof t!="object")throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");if(a)throw new TypeError("parameter 1 is not of type 'string'.")}typeof n>"u"&&(n={ignoreCase:!1});let c={ignoreCase:n.ignoreCase===!0},l={pathname:E,protocol:E,username:E,password:E,hostname:E,port:E,search:E,hash:E};this.#i=w(l,t,!0),z(this.#i.protocol)===this.#i.port&&(this.#i.port="");let s;for(s of V){if(!(s in this.#i))continue;let i={},o=this.#i[s];switch(this.#t[s]=[],s){case"protocol":Object.assign(i,x),i.encodePart=y;break;case"username":Object.assign(i,x),i.encodePart=he;break;case"password":Object.assign(i,x),i.encodePart=ue;break;case"hostname":Object.assign(i,J),_(o)?i.encodePart=K:i.encodePart=j;break;case"port":Object.assign(i,x),i.encodePart=G;break;case"pathname":N(this.#n.protocol)?(Object.assign(i,Q,c),i.encodePart=de):(Object.assign(i,x,c),i.encodePart=pe);break;case"search":Object.assign(i,x,c),i.encodePart=ge;break;case"hash":Object.assign(i,x,c),i.encodePart=me;break}try{this.#s[s]=F(o,i),this.#n[s]=W(this.#s[s],this.#t[s],i),this.#e[s]=Ie(this.#s[s],i),this.#l=this.#l||this.#s[s].some(f=>f.type===2);}catch{throw new TypeError(`invalid ${s} pattern '${this.#i[s]}'.`)}}}catch(a){throw new TypeError(`Failed to construct 'URLPattern': ${a.message}`)}}test(t={},r){let n={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if(typeof t!="string"&&r)throw new TypeError("parameter 1 is not of type 'string'.");if(typeof t>"u")return !1;try{typeof t=="object"?n=w(n,t,!1):n=w(n,Se(t,r),!1);}catch{return !1}let a;for(a of V)if(!this.#n[a].exec(n[a]))return !1;return !0}exec(t={},r){let n={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if(typeof t!="string"&&r)throw new TypeError("parameter 1 is not of type 'string'.");if(typeof t>"u")return;try{typeof t=="object"?n=w(n,t,!1):n=w(n,Se(t,r),!1);}catch{return null}let a={};r?a.inputs=[t,r]:a.inputs=[t];let c;for(c of V){let l=this.#n[c].exec(n[c]);if(!l)return null;let s={};for(let[i,o]of this.#t[c].entries())if(typeof o=="string"||typeof o=="number"){let f=l[i+1];s[o]=f;}a[c]={input:n[c]??"",groups:s};}return a}static compareComponent(t,r,n){let a=(i,o)=>{for(let f of ["type","modifier","prefix","value","suffix"]){if(i[f]<o[f])return -1;if(i[f]===o[f])continue;return 1}return 0},c=new R(3,"","","","",3),l=new R(0,"","","","",3),s=(i,o)=>{let f=0;for(;f<Math.min(i.length,o.length);++f){let d=a(i[f],o[f]);if(d)return d}return i.length===o.length?0:a(i[f]??c,o[f]??c)};return !r.#e[t]&&!n.#e[t]?0:r.#e[t]&&!n.#e[t]?s(r.#s[t],[l]):!r.#e[t]&&n.#e[t]?s([l],n.#s[t]):s(r.#s[t],n.#s[t])}get protocol(){return this.#e.protocol}get username(){return this.#e.username}get password(){return this.#e.password}get hostname(){return this.#e.hostname}get port(){return this.#e.port}get pathname(){return this.#e.pathname}get search(){return this.#e.search}get hash(){return this.#e.hash}get hasRegExpGroups(){return this.#l}};
	return urlpattern;
}

var urlpatternPolyfill;
var hasRequiredUrlpatternPolyfill;

function requireUrlpatternPolyfill () {
	if (hasRequiredUrlpatternPolyfill) return urlpatternPolyfill;
	hasRequiredUrlpatternPolyfill = 1;
	const { URLPattern } = requireUrlpattern();

	urlpatternPolyfill = { URLPattern };

	if (!globalThis.URLPattern) {
	  globalThis.URLPattern = URLPattern;
	}
	return urlpatternPolyfill;
}

var cjs = {};

var fetch$1 = {};

var fetchCurl = {};

var Response$2 = {};

var Body = {};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
}
var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

const tslib_es6 = {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
};

const tslib_es6$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    __addDisposableResource,
    get __assign () { return __assign; },
    __asyncDelegator,
    __asyncGenerator,
    __asyncValues,
    __await,
    __awaiter,
    __classPrivateFieldGet,
    __classPrivateFieldIn,
    __classPrivateFieldSet,
    __createBinding,
    __decorate,
    __disposeResources,
    __esDecorate,
    __exportStar,
    __extends,
    __generator,
    __importDefault,
    __importStar,
    __makeTemplateObject,
    __metadata,
    __param,
    __propKey,
    __read,
    __rest,
    __runInitializers,
    __setFunctionName,
    __spread,
    __spreadArray,
    __spreadArrays,
    __values,
    default: tslib_es6
}, Symbol.toStringTag, { value: 'Module' }));

const require$$0 = /*@__PURE__*/getAugmentedNamespace(tslib_es6$1);

var utils$1;
var hasRequiredUtils$1;

function requireUtils$1 () {
	if (hasRequiredUtils$1) return utils$1;
	hasRequiredUtils$1 = 1;

	function parseContentType(str) {
	  if (str.length === 0)
	    return;

	  const params = Object.create(null);
	  let i = 0;

	  // Parse type
	  for (; i < str.length; ++i) {
	    const code = str.charCodeAt(i);
	    if (TOKEN[code] !== 1) {
	      if (code !== 47/* '/' */ || i === 0)
	        return;
	      break;
	    }
	  }
	  // Check for type without subtype
	  if (i === str.length)
	    return;

	  const type = str.slice(0, i).toLowerCase();

	  // Parse subtype
	  const subtypeStart = ++i;
	  for (; i < str.length; ++i) {
	    const code = str.charCodeAt(i);
	    if (TOKEN[code] !== 1) {
	      // Make sure we have a subtype
	      if (i === subtypeStart)
	        return;

	      if (parseContentTypeParams(str, i, params) === undefined)
	        return;
	      break;
	    }
	  }
	  // Make sure we have a subtype
	  if (i === subtypeStart)
	    return;

	  const subtype = str.slice(subtypeStart, i).toLowerCase();

	  return { type, subtype, params };
	}

	function parseContentTypeParams(str, i, params) {
	  while (i < str.length) {
	    // Consume whitespace
	    for (; i < str.length; ++i) {
	      const code = str.charCodeAt(i);
	      if (code !== 32/* ' ' */ && code !== 9/* '\t' */)
	        break;
	    }

	    // Ended on whitespace
	    if (i === str.length)
	      break;

	    // Check for malformed parameter
	    if (str.charCodeAt(i++) !== 59/* ';' */)
	      return;

	    // Consume whitespace
	    for (; i < str.length; ++i) {
	      const code = str.charCodeAt(i);
	      if (code !== 32/* ' ' */ && code !== 9/* '\t' */)
	        break;
	    }

	    // Ended on whitespace (malformed)
	    if (i === str.length)
	      return;

	    let name;
	    const nameStart = i;
	    // Parse parameter name
	    for (; i < str.length; ++i) {
	      const code = str.charCodeAt(i);
	      if (TOKEN[code] !== 1) {
	        if (code !== 61/* '=' */)
	          return;
	        break;
	      }
	    }

	    // No value (malformed)
	    if (i === str.length)
	      return;

	    name = str.slice(nameStart, i);
	    ++i; // Skip over '='

	    // No value (malformed)
	    if (i === str.length)
	      return;

	    let value = '';
	    let valueStart;
	    if (str.charCodeAt(i) === 34/* '"' */) {
	      valueStart = ++i;
	      let escaping = false;
	      // Parse quoted value
	      for (; i < str.length; ++i) {
	        const code = str.charCodeAt(i);
	        if (code === 92/* '\\' */) {
	          if (escaping) {
	            valueStart = i;
	            escaping = false;
	          } else {
	            value += str.slice(valueStart, i);
	            escaping = true;
	          }
	          continue;
	        }
	        if (code === 34/* '"' */) {
	          if (escaping) {
	            valueStart = i;
	            escaping = false;
	            continue;
	          }
	          value += str.slice(valueStart, i);
	          break;
	        }
	        if (escaping) {
	          valueStart = i - 1;
	          escaping = false;
	        }
	        // Invalid unescaped quoted character (malformed)
	        if (QDTEXT[code] !== 1)
	          return;
	      }

	      // No end quote (malformed)
	      if (i === str.length)
	        return;

	      ++i; // Skip over double quote
	    } else {
	      valueStart = i;
	      // Parse unquoted value
	      for (; i < str.length; ++i) {
	        const code = str.charCodeAt(i);
	        if (TOKEN[code] !== 1) {
	          // No value (malformed)
	          if (i === valueStart)
	            return;
	          break;
	        }
	      }
	      value = str.slice(valueStart, i);
	    }

	    name = name.toLowerCase();
	    if (params[name] === undefined)
	      params[name] = value;
	  }

	  return params;
	}

	function parseDisposition(str, defDecoder) {
	  if (str.length === 0)
	    return;

	  const params = Object.create(null);
	  let i = 0;

	  for (; i < str.length; ++i) {
	    const code = str.charCodeAt(i);
	    if (TOKEN[code] !== 1) {
	      if (parseDispositionParams(str, i, params, defDecoder) === undefined)
	        return;
	      break;
	    }
	  }

	  const type = str.slice(0, i).toLowerCase();

	  return { type, params };
	}

	function parseDispositionParams(str, i, params, defDecoder) {
	  while (i < str.length) {
	    // Consume whitespace
	    for (; i < str.length; ++i) {
	      const code = str.charCodeAt(i);
	      if (code !== 32/* ' ' */ && code !== 9/* '\t' */)
	        break;
	    }

	    // Ended on whitespace
	    if (i === str.length)
	      break;

	    // Check for malformed parameter
	    if (str.charCodeAt(i++) !== 59/* ';' */)
	      return;

	    // Consume whitespace
	    for (; i < str.length; ++i) {
	      const code = str.charCodeAt(i);
	      if (code !== 32/* ' ' */ && code !== 9/* '\t' */)
	        break;
	    }

	    // Ended on whitespace (malformed)
	    if (i === str.length)
	      return;

	    let name;
	    const nameStart = i;
	    // Parse parameter name
	    for (; i < str.length; ++i) {
	      const code = str.charCodeAt(i);
	      if (TOKEN[code] !== 1) {
	        if (code === 61/* '=' */)
	          break;
	        return;
	      }
	    }

	    // No value (malformed)
	    if (i === str.length)
	      return;

	    let value = '';
	    let valueStart;
	    let charset;
	    //~ let lang;
	    name = str.slice(nameStart, i);
	    if (name.charCodeAt(name.length - 1) === 42/* '*' */) {
	      // Extended value

	      const charsetStart = ++i;
	      // Parse charset name
	      for (; i < str.length; ++i) {
	        const code = str.charCodeAt(i);
	        if (CHARSET[code] !== 1) {
	          if (code !== 39/* '\'' */)
	            return;
	          break;
	        }
	      }

	      // Incomplete charset (malformed)
	      if (i === str.length)
	        return;

	      charset = str.slice(charsetStart, i);
	      ++i; // Skip over the '\''

	      //~ const langStart = ++i;
	      // Parse language name
	      for (; i < str.length; ++i) {
	        const code = str.charCodeAt(i);
	        if (code === 39/* '\'' */)
	          break;
	      }

	      // Incomplete language (malformed)
	      if (i === str.length)
	        return;

	      //~ lang = str.slice(langStart, i);
	      ++i; // Skip over the '\''

	      // No value (malformed)
	      if (i === str.length)
	        return;

	      valueStart = i;

	      let encode = 0;
	      // Parse value
	      for (; i < str.length; ++i) {
	        const code = str.charCodeAt(i);
	        if (EXTENDED_VALUE[code] !== 1) {
	          if (code === 37/* '%' */) {
	            let hexUpper;
	            let hexLower;
	            if (i + 2 < str.length
	                && (hexUpper = HEX_VALUES[str.charCodeAt(i + 1)]) !== -1
	                && (hexLower = HEX_VALUES[str.charCodeAt(i + 2)]) !== -1) {
	              const byteVal = (hexUpper << 4) + hexLower;
	              value += str.slice(valueStart, i);
	              value += String.fromCharCode(byteVal);
	              i += 2;
	              valueStart = i + 1;
	              if (byteVal >= 128)
	                encode = 2;
	              else if (encode === 0)
	                encode = 1;
	              continue;
	            }
	            // '%' disallowed in non-percent encoded contexts (malformed)
	            return;
	          }
	          break;
	        }
	      }

	      value += str.slice(valueStart, i);
	      value = convertToUTF8(value, charset, encode);
	      if (value === undefined)
	        return;
	    } else {
	      // Non-extended value

	      ++i; // Skip over '='

	      // No value (malformed)
	      if (i === str.length)
	        return;

	      if (str.charCodeAt(i) === 34/* '"' */) {
	        valueStart = ++i;
	        let escaping = false;
	        // Parse quoted value
	        for (; i < str.length; ++i) {
	          const code = str.charCodeAt(i);
	          if (code === 92/* '\\' */) {
	            if (escaping) {
	              valueStart = i;
	              escaping = false;
	            } else {
	              value += str.slice(valueStart, i);
	              escaping = true;
	            }
	            continue;
	          }
	          if (code === 34/* '"' */) {
	            if (escaping) {
	              valueStart = i;
	              escaping = false;
	              continue;
	            }
	            value += str.slice(valueStart, i);
	            break;
	          }
	          if (escaping) {
	            valueStart = i - 1;
	            escaping = false;
	          }
	          // Invalid unescaped quoted character (malformed)
	          if (QDTEXT[code] !== 1)
	            return;
	        }

	        // No end quote (malformed)
	        if (i === str.length)
	          return;

	        ++i; // Skip over double quote
	      } else {
	        valueStart = i;
	        // Parse unquoted value
	        for (; i < str.length; ++i) {
	          const code = str.charCodeAt(i);
	          if (TOKEN[code] !== 1) {
	            // No value (malformed)
	            if (i === valueStart)
	              return;
	            break;
	          }
	        }
	        value = str.slice(valueStart, i);
	      }

	      value = defDecoder(value, 2);
	      if (value === undefined)
	        return;
	    }

	    name = name.toLowerCase();
	    if (params[name] === undefined)
	      params[name] = value;
	  }

	  return params;
	}

	function getDecoder(charset) {
	  let lc;
	  while (true) {
	    switch (charset) {
	      case 'utf-8':
	      case 'utf8':
	        return decoders.utf8;
	      case 'latin1':
	      case 'ascii': // TODO: Make these a separate, strict decoder?
	      case 'us-ascii':
	      case 'iso-8859-1':
	      case 'iso8859-1':
	      case 'iso88591':
	      case 'iso_8859-1':
	      case 'windows-1252':
	      case 'iso_8859-1:1987':
	      case 'cp1252':
	      case 'x-cp1252':
	        return decoders.latin1;
	      case 'utf16le':
	      case 'utf-16le':
	      case 'ucs2':
	      case 'ucs-2':
	        return decoders.utf16le;
	      case 'base64':
	        return decoders.base64;
	      default:
	        if (lc === undefined) {
	          lc = true;
	          charset = charset.toLowerCase();
	          continue;
	        }
	        return decoders.other.bind(charset);
	    }
	  }
	}

	const decoders = {
	  utf8: (data, hint) => {
	    if (data.length === 0)
	      return '';
	    if (typeof data === 'string') {
	      // If `data` never had any percent-encoded bytes or never had any that
	      // were outside of the ASCII range, then we can safely just return the
	      // input since UTF-8 is ASCII compatible
	      if (hint < 2)
	        return data;

	      data = Buffer.from(data, 'latin1');
	    }
	    return data.utf8Slice(0, data.length);
	  },

	  latin1: (data, hint) => {
	    if (data.length === 0)
	      return '';
	    if (typeof data === 'string')
	      return data;
	    return data.latin1Slice(0, data.length);
	  },

	  utf16le: (data, hint) => {
	    if (data.length === 0)
	      return '';
	    if (typeof data === 'string')
	      data = Buffer.from(data, 'latin1');
	    return data.ucs2Slice(0, data.length);
	  },

	  base64: (data, hint) => {
	    if (data.length === 0)
	      return '';
	    if (typeof data === 'string')
	      data = Buffer.from(data, 'latin1');
	    return data.base64Slice(0, data.length);
	  },

	  other: (data, hint) => {
	    if (data.length === 0)
	      return '';
	    if (typeof data === 'string')
	      data = Buffer.from(data, 'latin1');
	    try {
	      const decoder = new TextDecoder(this);
	      return decoder.decode(data);
	    } catch {}
	  },
	};

	function convertToUTF8(data, charset, hint) {
	  const decode = getDecoder(charset);
	  if (decode)
	    return decode(data, hint);
	}

	function basename(path) {
	  if (typeof path !== 'string')
	    return '';
	  for (let i = path.length - 1; i >= 0; --i) {
	    switch (path.charCodeAt(i)) {
	      case 0x2F: // '/'
	      case 0x5C: // '\'
	        path = path.slice(i + 1);
	        return (path === '..' || path === '.' ? '' : path);
	    }
	  }
	  return (path === '..' || path === '.' ? '' : path);
	}

	const TOKEN = [
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
	  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	];

	const QDTEXT = [
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	];

	const CHARSET = [
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
	  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	];

	const EXTENDED_VALUE = [
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
	  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	];

	/* eslint-disable no-multi-spaces */
	const HEX_VALUES = [
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	   0,  1,  2,  3,  4,  5,  6,  7,  8,  9, -1, -1, -1, -1, -1, -1,
	  -1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	];
	/* eslint-enable no-multi-spaces */

	utils$1 = {
	  basename,
	  convertToUTF8,
	  getDecoder,
	  parseContentType,
	  parseDisposition,
	};
	return utils$1;
}

var sbmh;
var hasRequiredSbmh;

function requireSbmh () {
	if (hasRequiredSbmh) return sbmh;
	hasRequiredSbmh = 1;
	/*
	  Based heavily on the Streaming Boyer-Moore-Horspool C++ implementation
	  by Hongli Lai at: https://github.com/FooBarWidget/boyer-moore-horspool
	*/
	function memcmp(buf1, pos1, buf2, pos2, num) {
	  for (let i = 0; i < num; ++i) {
	    if (buf1[pos1 + i] !== buf2[pos2 + i])
	      return false;
	  }
	  return true;
	}

	class SBMH {
	  constructor(needle, cb) {
	    if (typeof cb !== 'function')
	      throw new Error('Missing match callback');

	    if (typeof needle === 'string')
	      needle = Buffer.from(needle);
	    else if (!Buffer.isBuffer(needle))
	      throw new Error(`Expected Buffer for needle, got ${typeof needle}`);

	    const needleLen = needle.length;

	    this.maxMatches = Infinity;
	    this.matches = 0;

	    this._cb = cb;
	    this._lookbehindSize = 0;
	    this._needle = needle;
	    this._bufPos = 0;

	    this._lookbehind = Buffer.allocUnsafe(needleLen);

	    // Initialize occurrence table.
	    this._occ = [
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen, needleLen, needleLen,
	      needleLen, needleLen, needleLen, needleLen
	    ];

	    // Populate occurrence table with analysis of the needle, ignoring the last
	    // letter.
	    if (needleLen > 1) {
	      for (let i = 0; i < needleLen - 1; ++i)
	        this._occ[needle[i]] = needleLen - 1 - i;
	    }
	  }

	  reset() {
	    this.matches = 0;
	    this._lookbehindSize = 0;
	    this._bufPos = 0;
	  }

	  push(chunk, pos) {
	    let result;
	    if (!Buffer.isBuffer(chunk))
	      chunk = Buffer.from(chunk, 'latin1');
	    const chunkLen = chunk.length;
	    this._bufPos = pos || 0;
	    while (result !== chunkLen && this.matches < this.maxMatches)
	      result = feed(this, chunk);
	    return result;
	  }

	  destroy() {
	    const lbSize = this._lookbehindSize;
	    if (lbSize)
	      this._cb(false, this._lookbehind, 0, lbSize, false);
	    this.reset();
	  }
	}

	function feed(self, data) {
	  const len = data.length;
	  const needle = self._needle;
	  const needleLen = needle.length;

	  // Positive: points to a position in `data`
	  //           pos == 3 points to data[3]
	  // Negative: points to a position in the lookbehind buffer
	  //           pos == -2 points to lookbehind[lookbehindSize - 2]
	  let pos = -self._lookbehindSize;
	  const lastNeedleCharPos = needleLen - 1;
	  const lastNeedleChar = needle[lastNeedleCharPos];
	  const end = len - needleLen;
	  const occ = self._occ;
	  const lookbehind = self._lookbehind;

	  if (pos < 0) {
	    // Lookbehind buffer is not empty. Perform Boyer-Moore-Horspool
	    // search with character lookup code that considers both the
	    // lookbehind buffer and the current round's haystack data.
	    //
	    // Loop until
	    //   there is a match.
	    // or until
	    //   we've moved past the position that requires the
	    //   lookbehind buffer. In this case we switch to the
	    //   optimized loop.
	    // or until
	    //   the character to look at lies outside the haystack.
	    while (pos < 0 && pos <= end) {
	      const nextPos = pos + lastNeedleCharPos;
	      const ch = (nextPos < 0
	                  ? lookbehind[self._lookbehindSize + nextPos]
	                  : data[nextPos]);

	      if (ch === lastNeedleChar
	          && matchNeedle(self, data, pos, lastNeedleCharPos)) {
	        self._lookbehindSize = 0;
	        ++self.matches;
	        if (pos > -self._lookbehindSize)
	          self._cb(true, lookbehind, 0, self._lookbehindSize + pos, false);
	        else
	          self._cb(true, undefined, 0, 0, true);

	        return (self._bufPos = pos + needleLen);
	      }

	      pos += occ[ch];
	    }

	    // No match.

	    // There's too few data for Boyer-Moore-Horspool to run,
	    // so let's use a different algorithm to skip as much as
	    // we can.
	    // Forward pos until
	    //   the trailing part of lookbehind + data
	    //   looks like the beginning of the needle
	    // or until
	    //   pos == 0
	    while (pos < 0 && !matchNeedle(self, data, pos, len - pos))
	      ++pos;

	    if (pos < 0) {
	      // Cut off part of the lookbehind buffer that has
	      // been processed and append the entire haystack
	      // into it.
	      const bytesToCutOff = self._lookbehindSize + pos;

	      if (bytesToCutOff > 0) {
	        // The cut off data is guaranteed not to contain the needle.
	        self._cb(false, lookbehind, 0, bytesToCutOff, false);
	      }

	      self._lookbehindSize -= bytesToCutOff;
	      lookbehind.copy(lookbehind, 0, bytesToCutOff, self._lookbehindSize);
	      lookbehind.set(data, self._lookbehindSize);
	      self._lookbehindSize += len;

	      self._bufPos = len;
	      return len;
	    }

	    // Discard lookbehind buffer.
	    self._cb(false, lookbehind, 0, self._lookbehindSize, false);
	    self._lookbehindSize = 0;
	  }

	  pos += self._bufPos;

	  const firstNeedleChar = needle[0];

	  // Lookbehind buffer is now empty. Perform Boyer-Moore-Horspool
	  // search with optimized character lookup code that only considers
	  // the current round's haystack data.
	  while (pos <= end) {
	    const ch = data[pos + lastNeedleCharPos];

	    if (ch === lastNeedleChar
	        && data[pos] === firstNeedleChar
	        && memcmp(needle, 0, data, pos, lastNeedleCharPos)) {
	      ++self.matches;
	      if (pos > 0)
	        self._cb(true, data, self._bufPos, pos, true);
	      else
	        self._cb(true, undefined, 0, 0, true);

	      return (self._bufPos = pos + needleLen);
	    }

	    pos += occ[ch];
	  }

	  // There was no match. If there's trailing haystack data that we cannot
	  // match yet using the Boyer-Moore-Horspool algorithm (because the trailing
	  // data is less than the needle size) then match using a modified
	  // algorithm that starts matching from the beginning instead of the end.
	  // Whatever trailing data is left after running this algorithm is added to
	  // the lookbehind buffer.
	  while (pos < len) {
	    if (data[pos] !== firstNeedleChar
	        || !memcmp(data, pos, needle, 0, len - pos)) {
	      ++pos;
	      continue;
	    }
	    data.copy(lookbehind, 0, pos, len);
	    self._lookbehindSize = len - pos;
	    break;
	  }

	  // Everything until `pos` is guaranteed not to contain needle data.
	  if (pos > 0)
	    self._cb(false, data, self._bufPos, pos < len ? pos : len, true);

	  self._bufPos = len;
	  return len;
	}

	function matchNeedle(self, data, pos, len) {
	  const lb = self._lookbehind;
	  const lbSize = self._lookbehindSize;
	  const needle = self._needle;

	  for (let i = 0; i < len; ++i, ++pos) {
	    const ch = (pos < 0 ? lb[lbSize + pos] : data[pos]);
	    if (ch !== needle[i])
	      return false;
	  }
	  return true;
	}

	sbmh = SBMH;
	return sbmh;
}

var multipart;
var hasRequiredMultipart;

function requireMultipart () {
	if (hasRequiredMultipart) return multipart;
	hasRequiredMultipart = 1;

	const { Readable, Writable } = require$$0$1;

	const StreamSearch = requireSbmh();

	const {
	  basename,
	  convertToUTF8,
	  getDecoder,
	  parseContentType,
	  parseDisposition,
	} = requireUtils$1();

	const BUF_CRLF = Buffer.from('\r\n');
	const BUF_CR = Buffer.from('\r');
	const BUF_DASH = Buffer.from('-');

	function noop() {}

	const MAX_HEADER_PAIRS = 2000; // From node
	const MAX_HEADER_SIZE = 16 * 1024; // From node (its default value)

	const HPARSER_NAME = 0;
	const HPARSER_PRE_OWS = 1;
	const HPARSER_VALUE = 2;
	class HeaderParser {
	  constructor(cb) {
	    this.header = Object.create(null);
	    this.pairCount = 0;
	    this.byteCount = 0;
	    this.state = HPARSER_NAME;
	    this.name = '';
	    this.value = '';
	    this.crlf = 0;
	    this.cb = cb;
	  }

	  reset() {
	    this.header = Object.create(null);
	    this.pairCount = 0;
	    this.byteCount = 0;
	    this.state = HPARSER_NAME;
	    this.name = '';
	    this.value = '';
	    this.crlf = 0;
	  }

	  push(chunk, pos, end) {
	    let start = pos;
	    while (pos < end) {
	      switch (this.state) {
	        case HPARSER_NAME: {
	          let done = false;
	          for (; pos < end; ++pos) {
	            if (this.byteCount === MAX_HEADER_SIZE)
	              return -1;
	            ++this.byteCount;
	            const code = chunk[pos];
	            if (TOKEN[code] !== 1) {
	              if (code !== 58/* ':' */)
	                return -1;
	              this.name += chunk.latin1Slice(start, pos);
	              if (this.name.length === 0)
	                return -1;
	              ++pos;
	              done = true;
	              this.state = HPARSER_PRE_OWS;
	              break;
	            }
	          }
	          if (!done) {
	            this.name += chunk.latin1Slice(start, pos);
	            break;
	          }
	          // FALLTHROUGH
	        }
	        case HPARSER_PRE_OWS: {
	          // Skip optional whitespace
	          let done = false;
	          for (; pos < end; ++pos) {
	            if (this.byteCount === MAX_HEADER_SIZE)
	              return -1;
	            ++this.byteCount;
	            const code = chunk[pos];
	            if (code !== 32/* ' ' */ && code !== 9/* '\t' */) {
	              start = pos;
	              done = true;
	              this.state = HPARSER_VALUE;
	              break;
	            }
	          }
	          if (!done)
	            break;
	          // FALLTHROUGH
	        }
	        case HPARSER_VALUE:
	          switch (this.crlf) {
	            case 0: // Nothing yet
	              for (; pos < end; ++pos) {
	                if (this.byteCount === MAX_HEADER_SIZE)
	                  return -1;
	                ++this.byteCount;
	                const code = chunk[pos];
	                if (FIELD_VCHAR[code] !== 1) {
	                  if (code !== 13/* '\r' */)
	                    return -1;
	                  ++this.crlf;
	                  break;
	                }
	              }
	              this.value += chunk.latin1Slice(start, pos++);
	              break;
	            case 1: // Received CR
	              if (this.byteCount === MAX_HEADER_SIZE)
	                return -1;
	              ++this.byteCount;
	              if (chunk[pos++] !== 10/* '\n' */)
	                return -1;
	              ++this.crlf;
	              break;
	            case 2: { // Received CR LF
	              if (this.byteCount === MAX_HEADER_SIZE)
	                return -1;
	              ++this.byteCount;
	              const code = chunk[pos];
	              if (code === 32/* ' ' */ || code === 9/* '\t' */) {
	                // Folded value
	                start = pos;
	                this.crlf = 0;
	              } else {
	                if (++this.pairCount < MAX_HEADER_PAIRS) {
	                  this.name = this.name.toLowerCase();
	                  if (this.header[this.name] === undefined)
	                    this.header[this.name] = [this.value];
	                  else
	                    this.header[this.name].push(this.value);
	                }
	                if (code === 13/* '\r' */) {
	                  ++this.crlf;
	                  ++pos;
	                } else {
	                  // Assume start of next header field name
	                  start = pos;
	                  this.crlf = 0;
	                  this.state = HPARSER_NAME;
	                  this.name = '';
	                  this.value = '';
	                }
	              }
	              break;
	            }
	            case 3: { // Received CR LF CR
	              if (this.byteCount === MAX_HEADER_SIZE)
	                return -1;
	              ++this.byteCount;
	              if (chunk[pos++] !== 10/* '\n' */)
	                return -1;
	              // End of header
	              const header = this.header;
	              this.reset();
	              this.cb(header);
	              return pos;
	            }
	          }
	          break;
	      }
	    }

	    return pos;
	  }
	}

	class FileStream extends Readable {
	  constructor(opts, owner) {
	    super(opts);
	    this.truncated = false;
	    this._readcb = null;
	    this.once('end', () => {
	      // We need to make sure that we call any outstanding _writecb() that is
	      // associated with this file so that processing of the rest of the form
	      // can continue. This may not happen if the file stream ends right after
	      // backpressure kicks in, so we force it here.
	      this._read();
	      if (--owner._fileEndsLeft === 0 && owner._finalcb) {
	        const cb = owner._finalcb;
	        owner._finalcb = null;
	        // Make sure other 'end' event handlers get a chance to be executed
	        // before busboy's 'finish' event is emitted
	        process.nextTick(cb);
	      }
	    });
	  }
	  _read(n) {
	    const cb = this._readcb;
	    if (cb) {
	      this._readcb = null;
	      cb();
	    }
	  }
	}

	const ignoreData = {
	  push: (chunk, pos) => {},
	  destroy: () => {},
	};

	function callAndUnsetCb(self, err) {
	  const cb = self._writecb;
	  self._writecb = null;
	  if (cb)
	    cb();
	}

	function nullDecoder(val, hint) {
	  return val;
	}

	class Multipart extends Writable {
	  constructor(cfg) {
	    const streamOpts = {
	      autoDestroy: true,
	      emitClose: true,
	      highWaterMark: (typeof cfg.highWaterMark === 'number'
	                      ? cfg.highWaterMark
	                      : undefined),
	    };
	    super(streamOpts);

	    if (!cfg.conType.params || typeof cfg.conType.params.boundary !== 'string')
	      throw new Error('Multipart: Boundary not found');

	    const boundary = cfg.conType.params.boundary;
	    const paramDecoder = (typeof cfg.defParamCharset === 'string'
	                            && cfg.defParamCharset
	                          ? getDecoder(cfg.defParamCharset)
	                          : nullDecoder);
	    const defCharset = (cfg.defCharset || 'utf8');
	    const preservePath = cfg.preservePath;
	    const fileOpts = {
	      autoDestroy: true,
	      emitClose: true,
	      highWaterMark: (typeof cfg.fileHwm === 'number'
	                      ? cfg.fileHwm
	                      : undefined),
	    };

	    const limits = cfg.limits;
	    const fieldSizeLimit = (limits && typeof limits.fieldSize === 'number'
	                            ? limits.fieldSize
	                            : 1 * 1024 * 1024);
	    const fileSizeLimit = (limits && typeof limits.fileSize === 'number'
	                           ? limits.fileSize
	                           : Infinity);
	    const filesLimit = (limits && typeof limits.files === 'number'
	                        ? limits.files
	                        : Infinity);
	    const fieldsLimit = (limits && typeof limits.fields === 'number'
	                         ? limits.fields
	                         : Infinity);
	    const partsLimit = (limits && typeof limits.parts === 'number'
	                        ? limits.parts
	                        : Infinity);

	    let parts = -1; // Account for initial boundary
	    let fields = 0;
	    let files = 0;
	    let skipPart = false;

	    this._fileEndsLeft = 0;
	    this._fileStream = undefined;
	    this._complete = false;
	    let fileSize = 0;

	    let field;
	    let fieldSize = 0;
	    let partCharset;
	    let partEncoding;
	    let partType;
	    let partName;
	    let partTruncated = false;

	    let hitFilesLimit = false;
	    let hitFieldsLimit = false;

	    this._hparser = null;
	    const hparser = new HeaderParser((header) => {
	      this._hparser = null;
	      skipPart = false;

	      partType = 'text/plain';
	      partCharset = defCharset;
	      partEncoding = '7bit';
	      partName = undefined;
	      partTruncated = false;

	      let filename;
	      if (!header['content-disposition']) {
	        skipPart = true;
	        return;
	      }

	      const disp = parseDisposition(header['content-disposition'][0],
	                                    paramDecoder);
	      if (!disp || disp.type !== 'form-data') {
	        skipPart = true;
	        return;
	      }

	      if (disp.params) {
	        if (disp.params.name)
	          partName = disp.params.name;

	        if (disp.params['filename*'])
	          filename = disp.params['filename*'];
	        else if (disp.params.filename)
	          filename = disp.params.filename;

	        if (filename !== undefined && !preservePath)
	          filename = basename(filename);
	      }

	      if (header['content-type']) {
	        const conType = parseContentType(header['content-type'][0]);
	        if (conType) {
	          partType = `${conType.type}/${conType.subtype}`;
	          if (conType.params && typeof conType.params.charset === 'string')
	            partCharset = conType.params.charset.toLowerCase();
	        }
	      }

	      if (header['content-transfer-encoding'])
	        partEncoding = header['content-transfer-encoding'][0].toLowerCase();

	      if (partType === 'application/octet-stream' || filename !== undefined) {
	        // File

	        if (files === filesLimit) {
	          if (!hitFilesLimit) {
	            hitFilesLimit = true;
	            this.emit('filesLimit');
	          }
	          skipPart = true;
	          return;
	        }
	        ++files;

	        if (this.listenerCount('file') === 0) {
	          skipPart = true;
	          return;
	        }

	        fileSize = 0;
	        this._fileStream = new FileStream(fileOpts, this);
	        ++this._fileEndsLeft;
	        this.emit(
	          'file',
	          partName,
	          this._fileStream,
	          { filename,
	            encoding: partEncoding,
	            mimeType: partType }
	        );
	      } else {
	        // Non-file

	        if (fields === fieldsLimit) {
	          if (!hitFieldsLimit) {
	            hitFieldsLimit = true;
	            this.emit('fieldsLimit');
	          }
	          skipPart = true;
	          return;
	        }
	        ++fields;

	        if (this.listenerCount('field') === 0) {
	          skipPart = true;
	          return;
	        }

	        field = [];
	        fieldSize = 0;
	      }
	    });

	    let matchPostBoundary = 0;
	    const ssCb = (isMatch, data, start, end, isDataSafe) => {
	retrydata:
	      while (data) {
	        if (this._hparser !== null) {
	          const ret = this._hparser.push(data, start, end);
	          if (ret === -1) {
	            this._hparser = null;
	            hparser.reset();
	            this.emit('error', new Error('Malformed part header'));
	            break;
	          }
	          start = ret;
	        }

	        if (start === end)
	          break;

	        if (matchPostBoundary !== 0) {
	          if (matchPostBoundary === 1) {
	            switch (data[start]) {
	              case 45: // '-'
	                // Try matching '--' after boundary
	                matchPostBoundary = 2;
	                ++start;
	                break;
	              case 13: // '\r'
	                // Try matching CR LF before header
	                matchPostBoundary = 3;
	                ++start;
	                break;
	              default:
	                matchPostBoundary = 0;
	            }
	            if (start === end)
	              return;
	          }

	          if (matchPostBoundary === 2) {
	            matchPostBoundary = 0;
	            if (data[start] === 45/* '-' */) {
	              // End of multipart data
	              this._complete = true;
	              this._bparser = ignoreData;
	              return;
	            }
	            // We saw something other than '-', so put the dash we consumed
	            // "back"
	            const writecb = this._writecb;
	            this._writecb = noop;
	            ssCb(false, BUF_DASH, 0, 1, false);
	            this._writecb = writecb;
	          } else if (matchPostBoundary === 3) {
	            matchPostBoundary = 0;
	            if (data[start] === 10/* '\n' */) {
	              ++start;
	              if (parts >= partsLimit)
	                break;
	              // Prepare the header parser
	              this._hparser = hparser;
	              if (start === end)
	                break;
	              // Process the remaining data as a header
	              continue retrydata;
	            } else {
	              // We saw something other than LF, so put the CR we consumed
	              // "back"
	              const writecb = this._writecb;
	              this._writecb = noop;
	              ssCb(false, BUF_CR, 0, 1, false);
	              this._writecb = writecb;
	            }
	          }
	        }

	        if (!skipPart) {
	          if (this._fileStream) {
	            let chunk;
	            const actualLen = Math.min(end - start, fileSizeLimit - fileSize);
	            if (!isDataSafe) {
	              chunk = Buffer.allocUnsafe(actualLen);
	              data.copy(chunk, 0, start, start + actualLen);
	            } else {
	              chunk = data.slice(start, start + actualLen);
	            }

	            fileSize += chunk.length;
	            if (fileSize === fileSizeLimit) {
	              if (chunk.length > 0)
	                this._fileStream.push(chunk);
	              this._fileStream.emit('limit');
	              this._fileStream.truncated = true;
	              skipPart = true;
	            } else if (!this._fileStream.push(chunk)) {
	              if (this._writecb)
	                this._fileStream._readcb = this._writecb;
	              this._writecb = null;
	            }
	          } else if (field !== undefined) {
	            let chunk;
	            const actualLen = Math.min(
	              end - start,
	              fieldSizeLimit - fieldSize
	            );
	            if (!isDataSafe) {
	              chunk = Buffer.allocUnsafe(actualLen);
	              data.copy(chunk, 0, start, start + actualLen);
	            } else {
	              chunk = data.slice(start, start + actualLen);
	            }

	            fieldSize += actualLen;
	            field.push(chunk);
	            if (fieldSize === fieldSizeLimit) {
	              skipPart = true;
	              partTruncated = true;
	            }
	          }
	        }

	        break;
	      }

	      if (isMatch) {
	        matchPostBoundary = 1;

	        if (this._fileStream) {
	          // End the active file stream if the previous part was a file
	          this._fileStream.push(null);
	          this._fileStream = null;
	        } else if (field !== undefined) {
	          let data;
	          switch (field.length) {
	            case 0:
	              data = '';
	              break;
	            case 1:
	              data = convertToUTF8(field[0], partCharset, 0);
	              break;
	            default:
	              data = convertToUTF8(
	                Buffer.concat(field, fieldSize),
	                partCharset,
	                0
	              );
	          }
	          field = undefined;
	          fieldSize = 0;
	          this.emit(
	            'field',
	            partName,
	            data,
	            { nameTruncated: false,
	              valueTruncated: partTruncated,
	              encoding: partEncoding,
	              mimeType: partType }
	          );
	        }

	        if (++parts === partsLimit)
	          this.emit('partsLimit');
	      }
	    };
	    this._bparser = new StreamSearch(`\r\n--${boundary}`, ssCb);

	    this._writecb = null;
	    this._finalcb = null;

	    // Just in case there is no preamble
	    this.write(BUF_CRLF);
	  }

	  static detect(conType) {
	    return (conType.type === 'multipart' && conType.subtype === 'form-data');
	  }

	  _write(chunk, enc, cb) {
	    this._writecb = cb;
	    this._bparser.push(chunk, 0);
	    if (this._writecb)
	      callAndUnsetCb(this);
	  }

	  _destroy(err, cb) {
	    this._hparser = null;
	    this._bparser = ignoreData;
	    if (!err)
	      err = checkEndState(this);
	    const fileStream = this._fileStream;
	    if (fileStream) {
	      this._fileStream = null;
	      fileStream.destroy(err);
	    }
	    cb(err);
	  }

	  _final(cb) {
	    this._bparser.destroy();
	    if (!this._complete)
	      return cb(new Error('Unexpected end of form'));
	    if (this._fileEndsLeft)
	      this._finalcb = finalcb.bind(null, this, cb);
	    else
	      finalcb(this, cb);
	  }
	}

	function finalcb(self, cb, err) {
	  if (err)
	    return cb(err);
	  err = checkEndState(self);
	  cb(err);
	}

	function checkEndState(self) {
	  if (self._hparser)
	    return new Error('Malformed part header');
	  const fileStream = self._fileStream;
	  if (fileStream) {
	    self._fileStream = null;
	    fileStream.destroy(new Error('Unexpected end of file'));
	  }
	  if (!self._complete)
	    return new Error('Unexpected end of form');
	}

	const TOKEN = [
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
	  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	];

	const FIELD_VCHAR = [
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	];

	multipart = Multipart;
	return multipart;
}

var urlencoded;
var hasRequiredUrlencoded;

function requireUrlencoded () {
	if (hasRequiredUrlencoded) return urlencoded;
	hasRequiredUrlencoded = 1;

	const { Writable } = require$$0$1;

	const { getDecoder } = requireUtils$1();

	class URLEncoded extends Writable {
	  constructor(cfg) {
	    const streamOpts = {
	      autoDestroy: true,
	      emitClose: true,
	      highWaterMark: (typeof cfg.highWaterMark === 'number'
	                      ? cfg.highWaterMark
	                      : undefined),
	    };
	    super(streamOpts);

	    let charset = (cfg.defCharset || 'utf8');
	    if (cfg.conType.params && typeof cfg.conType.params.charset === 'string')
	      charset = cfg.conType.params.charset;

	    this.charset = charset;

	    const limits = cfg.limits;
	    this.fieldSizeLimit = (limits && typeof limits.fieldSize === 'number'
	                           ? limits.fieldSize
	                           : 1 * 1024 * 1024);
	    this.fieldsLimit = (limits && typeof limits.fields === 'number'
	                        ? limits.fields
	                        : Infinity);
	    this.fieldNameSizeLimit = (
	      limits && typeof limits.fieldNameSize === 'number'
	      ? limits.fieldNameSize
	      : 100
	    );

	    this._inKey = true;
	    this._keyTrunc = false;
	    this._valTrunc = false;
	    this._bytesKey = 0;
	    this._bytesVal = 0;
	    this._fields = 0;
	    this._key = '';
	    this._val = '';
	    this._byte = -2;
	    this._lastPos = 0;
	    this._encode = 0;
	    this._decoder = getDecoder(charset);
	  }

	  static detect(conType) {
	    return (conType.type === 'application'
	            && conType.subtype === 'x-www-form-urlencoded');
	  }

	  _write(chunk, enc, cb) {
	    if (this._fields >= this.fieldsLimit)
	      return cb();

	    let i = 0;
	    const len = chunk.length;
	    this._lastPos = 0;

	    // Check if we last ended mid-percent-encoded byte
	    if (this._byte !== -2) {
	      i = readPctEnc(this, chunk, i, len);
	      if (i === -1)
	        return cb(new Error('Malformed urlencoded form'));
	      if (i >= len)
	        return cb();
	      if (this._inKey)
	        ++this._bytesKey;
	      else
	        ++this._bytesVal;
	    }

	main:
	    while (i < len) {
	      if (this._inKey) {
	        // Parsing key

	        i = skipKeyBytes(this, chunk, i, len);

	        while (i < len) {
	          switch (chunk[i]) {
	            case 61: // '='
	              if (this._lastPos < i)
	                this._key += chunk.latin1Slice(this._lastPos, i);
	              this._lastPos = ++i;
	              this._key = this._decoder(this._key, this._encode);
	              this._encode = 0;
	              this._inKey = false;
	              continue main;
	            case 38: // '&'
	              if (this._lastPos < i)
	                this._key += chunk.latin1Slice(this._lastPos, i);
	              this._lastPos = ++i;
	              this._key = this._decoder(this._key, this._encode);
	              this._encode = 0;
	              if (this._bytesKey > 0) {
	                this.emit(
	                  'field',
	                  this._key,
	                  '',
	                  { nameTruncated: this._keyTrunc,
	                    valueTruncated: false,
	                    encoding: this.charset,
	                    mimeType: 'text/plain' }
	                );
	              }
	              this._key = '';
	              this._val = '';
	              this._keyTrunc = false;
	              this._valTrunc = false;
	              this._bytesKey = 0;
	              this._bytesVal = 0;
	              if (++this._fields >= this.fieldsLimit) {
	                this.emit('fieldsLimit');
	                return cb();
	              }
	              continue;
	            case 43: // '+'
	              if (this._lastPos < i)
	                this._key += chunk.latin1Slice(this._lastPos, i);
	              this._key += ' ';
	              this._lastPos = i + 1;
	              break;
	            case 37: // '%'
	              if (this._encode === 0)
	                this._encode = 1;
	              if (this._lastPos < i)
	                this._key += chunk.latin1Slice(this._lastPos, i);
	              this._lastPos = i + 1;
	              this._byte = -1;
	              i = readPctEnc(this, chunk, i + 1, len);
	              if (i === -1)
	                return cb(new Error('Malformed urlencoded form'));
	              if (i >= len)
	                return cb();
	              ++this._bytesKey;
	              i = skipKeyBytes(this, chunk, i, len);
	              continue;
	          }
	          ++i;
	          ++this._bytesKey;
	          i = skipKeyBytes(this, chunk, i, len);
	        }
	        if (this._lastPos < i)
	          this._key += chunk.latin1Slice(this._lastPos, i);
	      } else {
	        // Parsing value

	        i = skipValBytes(this, chunk, i, len);

	        while (i < len) {
	          switch (chunk[i]) {
	            case 38: // '&'
	              if (this._lastPos < i)
	                this._val += chunk.latin1Slice(this._lastPos, i);
	              this._lastPos = ++i;
	              this._inKey = true;
	              this._val = this._decoder(this._val, this._encode);
	              this._encode = 0;
	              if (this._bytesKey > 0 || this._bytesVal > 0) {
	                this.emit(
	                  'field',
	                  this._key,
	                  this._val,
	                  { nameTruncated: this._keyTrunc,
	                    valueTruncated: this._valTrunc,
	                    encoding: this.charset,
	                    mimeType: 'text/plain' }
	                );
	              }
	              this._key = '';
	              this._val = '';
	              this._keyTrunc = false;
	              this._valTrunc = false;
	              this._bytesKey = 0;
	              this._bytesVal = 0;
	              if (++this._fields >= this.fieldsLimit) {
	                this.emit('fieldsLimit');
	                return cb();
	              }
	              continue main;
	            case 43: // '+'
	              if (this._lastPos < i)
	                this._val += chunk.latin1Slice(this._lastPos, i);
	              this._val += ' ';
	              this._lastPos = i + 1;
	              break;
	            case 37: // '%'
	              if (this._encode === 0)
	                this._encode = 1;
	              if (this._lastPos < i)
	                this._val += chunk.latin1Slice(this._lastPos, i);
	              this._lastPos = i + 1;
	              this._byte = -1;
	              i = readPctEnc(this, chunk, i + 1, len);
	              if (i === -1)
	                return cb(new Error('Malformed urlencoded form'));
	              if (i >= len)
	                return cb();
	              ++this._bytesVal;
	              i = skipValBytes(this, chunk, i, len);
	              continue;
	          }
	          ++i;
	          ++this._bytesVal;
	          i = skipValBytes(this, chunk, i, len);
	        }
	        if (this._lastPos < i)
	          this._val += chunk.latin1Slice(this._lastPos, i);
	      }
	    }

	    cb();
	  }

	  _final(cb) {
	    if (this._byte !== -2)
	      return cb(new Error('Malformed urlencoded form'));
	    if (!this._inKey || this._bytesKey > 0 || this._bytesVal > 0) {
	      if (this._inKey)
	        this._key = this._decoder(this._key, this._encode);
	      else
	        this._val = this._decoder(this._val, this._encode);
	      this.emit(
	        'field',
	        this._key,
	        this._val,
	        { nameTruncated: this._keyTrunc,
	          valueTruncated: this._valTrunc,
	          encoding: this.charset,
	          mimeType: 'text/plain' }
	      );
	    }
	    cb();
	  }
	}

	function readPctEnc(self, chunk, pos, len) {
	  if (pos >= len)
	    return len;

	  if (self._byte === -1) {
	    // We saw a '%' but no hex characters yet
	    const hexUpper = HEX_VALUES[chunk[pos++]];
	    if (hexUpper === -1)
	      return -1;

	    if (hexUpper >= 8)
	      self._encode = 2; // Indicate high bits detected

	    if (pos < len) {
	      // Both hex characters are in this chunk
	      const hexLower = HEX_VALUES[chunk[pos++]];
	      if (hexLower === -1)
	        return -1;

	      if (self._inKey)
	        self._key += String.fromCharCode((hexUpper << 4) + hexLower);
	      else
	        self._val += String.fromCharCode((hexUpper << 4) + hexLower);

	      self._byte = -2;
	      self._lastPos = pos;
	    } else {
	      // Only one hex character was available in this chunk
	      self._byte = hexUpper;
	    }
	  } else {
	    // We saw only one hex character so far
	    const hexLower = HEX_VALUES[chunk[pos++]];
	    if (hexLower === -1)
	      return -1;

	    if (self._inKey)
	      self._key += String.fromCharCode((self._byte << 4) + hexLower);
	    else
	      self._val += String.fromCharCode((self._byte << 4) + hexLower);

	    self._byte = -2;
	    self._lastPos = pos;
	  }

	  return pos;
	}

	function skipKeyBytes(self, chunk, pos, len) {
	  // Skip bytes if we've truncated
	  if (self._bytesKey > self.fieldNameSizeLimit) {
	    if (!self._keyTrunc) {
	      if (self._lastPos < pos)
	        self._key += chunk.latin1Slice(self._lastPos, pos - 1);
	    }
	    self._keyTrunc = true;
	    for (; pos < len; ++pos) {
	      const code = chunk[pos];
	      if (code === 61/* '=' */ || code === 38/* '&' */)
	        break;
	      ++self._bytesKey;
	    }
	    self._lastPos = pos;
	  }

	  return pos;
	}

	function skipValBytes(self, chunk, pos, len) {
	  // Skip bytes if we've truncated
	  if (self._bytesVal > self.fieldSizeLimit) {
	    if (!self._valTrunc) {
	      if (self._lastPos < pos)
	        self._val += chunk.latin1Slice(self._lastPos, pos - 1);
	    }
	    self._valTrunc = true;
	    for (; pos < len; ++pos) {
	      if (chunk[pos] === 38/* '&' */)
	        break;
	      ++self._bytesVal;
	    }
	    self._lastPos = pos;
	  }

	  return pos;
	}

	/* eslint-disable no-multi-spaces */
	const HEX_VALUES = [
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	   0,  1,  2,  3,  4,  5,  6,  7,  8,  9, -1, -1, -1, -1, -1, -1,
	  -1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	];
	/* eslint-enable no-multi-spaces */

	urlencoded = URLEncoded;
	return urlencoded;
}

var lib$1;
var hasRequiredLib$1;

function requireLib$1 () {
	if (hasRequiredLib$1) return lib$1;
	hasRequiredLib$1 = 1;

	const { parseContentType } = requireUtils$1();

	function getInstance(cfg) {
	  const headers = cfg.headers;
	  const conType = parseContentType(headers['content-type']);
	  if (!conType)
	    throw new Error('Malformed content type');

	  for (const type of TYPES) {
	    const matched = type.detect(conType);
	    if (!matched)
	      continue;

	    const instanceCfg = {
	      limits: cfg.limits,
	      headers,
	      conType,
	      highWaterMark: undefined,
	      fileHwm: undefined,
	      defCharset: undefined,
	      defParamCharset: undefined,
	      preservePath: false,
	    };
	    if (cfg.highWaterMark)
	      instanceCfg.highWaterMark = cfg.highWaterMark;
	    if (cfg.fileHwm)
	      instanceCfg.fileHwm = cfg.fileHwm;
	    instanceCfg.defCharset = cfg.defCharset;
	    instanceCfg.defParamCharset = cfg.defParamCharset;
	    instanceCfg.preservePath = cfg.preservePath;
	    return new type(instanceCfg);
	  }

	  throw new Error(`Unsupported content type: ${headers['content-type']}`);
	}

	// Note: types are explicitly listed here for easier bundling
	// See: https://github.com/mscdex/busboy/issues/121
	const TYPES = [
	  requireMultipart(),
	  requireUrlencoded(),
	].filter(function(typemod) { return typeof typemod.detect === 'function'; });

	lib$1 = (cfg) => {
	  if (typeof cfg !== 'object' || cfg === null)
	    cfg = {};

	  if (typeof cfg.headers !== 'object'
	      || cfg.headers === null
	      || typeof cfg.headers['content-type'] !== 'string') {
	    throw new Error('Missing Content-Type');
	  }

	  return getInstance(cfg);
	};
	return lib$1;
}

var Blob$1 = {};

var ReadableStream$2 = {};

var hasRequiredReadableStream;

function requireReadableStream () {
	if (hasRequiredReadableStream) return ReadableStream$2;
	hasRequiredReadableStream = 1;
	Object.defineProperty(ReadableStream$2, "__esModule", { value: true });
	ReadableStream$2.PonyfillReadableStream = void 0;
	const stream_1 = require$$0$1;
	function createController(desiredSize, readable) {
	    let chunks = [];
	    let _closed = false;
	    let flushed = false;
	    return {
	        desiredSize,
	        enqueue(chunk) {
	            const buf = typeof chunk === 'string' ? Buffer.from(chunk) : chunk;
	            if (!flushed) {
	                chunks.push(buf);
	            }
	            else {
	                readable.push(buf);
	            }
	        },
	        close() {
	            if (chunks.length > 0) {
	                this._flush();
	            }
	            readable.push(null);
	            _closed = true;
	        },
	        error(error) {
	            if (chunks.length > 0) {
	                this._flush();
	            }
	            readable.destroy(error);
	        },
	        get _closed() {
	            return _closed;
	        },
	        _flush() {
	            flushed = true;
	            if (chunks.length > 0) {
	                const concatenated = chunks.length > 1 ? Buffer.concat(chunks) : chunks[0];
	                readable.push(concatenated);
	                chunks = [];
	            }
	        },
	    };
	}
	function isNodeReadable(obj) {
	    return obj?.read != null;
	}
	function isReadableStream(obj) {
	    return obj?.getReader != null;
	}
	class PonyfillReadableStream {
	    constructor(underlyingSource) {
	        this.locked = false;
	        if (underlyingSource instanceof PonyfillReadableStream && underlyingSource.readable != null) {
	            this.readable = underlyingSource.readable;
	        }
	        else if (isNodeReadable(underlyingSource)) {
	            this.readable = underlyingSource;
	        }
	        else if (isReadableStream(underlyingSource)) {
	            let reader;
	            let started = false;
	            this.readable = new stream_1.Readable({
	                read() {
	                    if (!started) {
	                        started = true;
	                        reader = underlyingSource.getReader();
	                    }
	                    reader
	                        .read()
	                        .then(({ value, done }) => {
	                        if (done) {
	                            this.push(null);
	                        }
	                        else {
	                            this.push(value);
	                        }
	                    })
	                        .catch(err => {
	                        this.destroy(err);
	                    });
	                },
	                destroy(err, callback) {
	                    reader.cancel(err).then(() => callback(err), callback);
	                },
	            });
	        }
	        else {
	            let started = false;
	            let ongoing = false;
	            this.readable = new stream_1.Readable({
	                read(desiredSize) {
	                    if (ongoing) {
	                        return;
	                    }
	                    ongoing = true;
	                    return Promise.resolve().then(async () => {
	                        if (!started) {
	                            const controller = createController(desiredSize, this);
	                            started = true;
	                            await underlyingSource?.start?.(controller);
	                            controller._flush();
	                            if (controller._closed) {
	                                return;
	                            }
	                        }
	                        const controller = createController(desiredSize, this);
	                        await underlyingSource?.pull?.(controller);
	                        controller._flush();
	                        ongoing = false;
	                    });
	                },
	                async destroy(err, callback) {
	                    try {
	                        await underlyingSource?.cancel?.(err);
	                        callback(null);
	                    }
	                    catch (err) {
	                        callback(err);
	                    }
	                },
	            });
	        }
	    }
	    cancel(reason) {
	        this.readable.destroy(reason);
	        return Promise.resolve();
	    }
	    getReader(_options) {
	        const iterator = this.readable[Symbol.asyncIterator]();
	        this.locked = true;
	        return {
	            read() {
	                return iterator.next();
	            },
	            releaseLock: () => {
	                iterator.return?.();
	                this.locked = false;
	            },
	            cancel: async (reason) => {
	                await iterator.return?.(reason);
	                this.locked = false;
	            },
	            closed: new Promise((resolve, reject) => {
	                this.readable.once('end', resolve);
	                this.readable.once('error', reject);
	            }),
	        };
	    }
	    [Symbol.asyncIterator]() {
	        return this.readable[Symbol.asyncIterator]();
	    }
	    tee() {
	        throw new Error('Not implemented');
	    }
	    async pipeTo(destination) {
	        const writer = destination.getWriter();
	        await writer.ready;
	        for await (const chunk of this.readable) {
	            await writer.write(chunk);
	        }
	        await writer.ready;
	        return writer.close();
	    }
	    pipeThrough({ writable, readable, }) {
	        this.pipeTo(writable);
	        return readable;
	    }
	    static [Symbol.hasInstance](instance) {
	        return isReadableStream(instance);
	    }
	}
	ReadableStream$2.PonyfillReadableStream = PonyfillReadableStream;
	return ReadableStream$2;
}

var utils = {};

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;
	Object.defineProperty(utils, "__esModule", { value: true });
	utils.isNodeReadable = utils.isArrayBufferView = utils.fakePromise = utils.defaultHeadersSerializer = utils.getHeadersObj = void 0;
	function isHeadersInstance(obj) {
	    return obj?.forEach != null;
	}
	function getHeadersObj(headers) {
	    if (headers == null || !isHeadersInstance(headers)) {
	        return headers;
	    }
	    const obj = {};
	    headers.forEach((value, key) => {
	        obj[key] = value;
	    });
	    return obj;
	}
	utils.getHeadersObj = getHeadersObj;
	function defaultHeadersSerializer(headers, onContentLength) {
	    const headerArray = [];
	    headers.forEach((value, key) => {
	        if (onContentLength && key === 'content-length') {
	            onContentLength(value);
	        }
	        headerArray.push(`${key}: ${value}`);
	    });
	    return headerArray;
	}
	utils.defaultHeadersSerializer = defaultHeadersSerializer;
	function isPromise(val) {
	    return val?.then != null;
	}
	function fakePromise(value) {
	    if (isPromise(value)) {
	        return value;
	    }
	    // Write a fake promise to avoid the promise constructor
	    // being called with `new Promise` in the browser.
	    return {
	        then(resolve) {
	            if (resolve) {
	                const callbackResult = resolve(value);
	                if (isPromise(callbackResult)) {
	                    return callbackResult;
	                }
	                return fakePromise(callbackResult);
	            }
	            return this;
	        },
	        catch() {
	            return this;
	        },
	        finally(cb) {
	            if (cb) {
	                const callbackResult = cb();
	                if (isPromise(callbackResult)) {
	                    return callbackResult.then(() => value);
	                }
	                return fakePromise(value);
	            }
	            return this;
	        },
	        [Symbol.toStringTag]: 'Promise',
	    };
	}
	utils.fakePromise = fakePromise;
	function isArrayBufferView(obj) {
	    return obj != null && obj.buffer != null && obj.byteLength != null && obj.byteOffset != null;
	}
	utils.isArrayBufferView = isArrayBufferView;
	function isNodeReadable(obj) {
	    return obj != null && obj.pipe != null;
	}
	utils.isNodeReadable = isNodeReadable;
	return utils;
}

var hasRequiredBlob;

function requireBlob () {
	if (hasRequiredBlob) return Blob$1;
	hasRequiredBlob = 1;
	Object.defineProperty(Blob$1, "__esModule", { value: true });
	Blob$1.PonyfillBlob = void 0;
	/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
	const ReadableStream_js_1 = requireReadableStream();
	const utils_js_1 = requireUtils();
	function getBlobPartAsBuffer(blobPart) {
	    if (typeof blobPart === 'string') {
	        return Buffer.from(blobPart);
	    }
	    else if (Buffer.isBuffer(blobPart)) {
	        return blobPart;
	    }
	    else if ((0, utils_js_1.isArrayBufferView)(blobPart)) {
	        return Buffer.from(blobPart.buffer, blobPart.byteOffset, blobPart.byteLength);
	    }
	    else {
	        return Buffer.from(blobPart);
	    }
	}
	function isBlob(obj) {
	    return obj != null && obj.arrayBuffer != null;
	}
	// Will be removed after v14 reaches EOL
	// Needed because v14 doesn't have .stream() implemented
	class PonyfillBlob {
	    constructor(blobParts, options) {
	        this.blobParts = blobParts;
	        this._size = null;
	        this.type = options?.type || 'application/octet-stream';
	        this.encoding = options?.encoding || 'utf8';
	        this._size = options?.size || null;
	        if (blobParts.length === 1 && isBlob(blobParts[0])) {
	            return blobParts[0];
	        }
	    }
	    arrayBuffer() {
	        if (this.blobParts.length === 1) {
	            const blobPart = this.blobParts[0];
	            if (isBlob(blobPart)) {
	                return blobPart.arrayBuffer();
	            }
	            return (0, utils_js_1.fakePromise)(getBlobPartAsBuffer(blobPart));
	        }
	        const jobs = [];
	        const bufferChunks = this.blobParts.map((blobPart, i) => {
	            if (isBlob(blobPart)) {
	                jobs.push(blobPart.arrayBuffer().then(arrayBuf => {
	                    bufferChunks[i] = Buffer.from(arrayBuf, undefined, blobPart.size);
	                }));
	                return undefined;
	            }
	            else {
	                return getBlobPartAsBuffer(blobPart);
	            }
	        });
	        if (jobs.length > 0) {
	            return Promise.all(jobs).then(() => Buffer.concat(bufferChunks, this._size || undefined));
	        }
	        return (0, utils_js_1.fakePromise)(Buffer.concat(bufferChunks, this._size || undefined));
	    }
	    text() {
	        if (this.blobParts.length === 1) {
	            const blobPart = this.blobParts[0];
	            if (typeof blobPart === 'string') {
	                return (0, utils_js_1.fakePromise)(blobPart);
	            }
	            if (isBlob(blobPart)) {
	                return blobPart.text();
	            }
	            const buf = getBlobPartAsBuffer(blobPart);
	            return (0, utils_js_1.fakePromise)(buf.toString(this.encoding));
	        }
	        return this.arrayBuffer().then(buf => buf.toString(this.encoding));
	    }
	    get size() {
	        if (this._size == null) {
	            this._size = 0;
	            for (const blobPart of this.blobParts) {
	                if (typeof blobPart === 'string') {
	                    this._size += Buffer.byteLength(blobPart);
	                }
	                else if (isBlob(blobPart)) {
	                    this._size += blobPart.size;
	                }
	                else if ((0, utils_js_1.isArrayBufferView)(blobPart)) {
	                    this._size += blobPart.byteLength;
	                }
	            }
	        }
	        return this._size;
	    }
	    stream() {
	        if (this.blobParts.length === 1) {
	            const blobPart = this.blobParts[0];
	            if (isBlob(blobPart)) {
	                return blobPart.stream();
	            }
	            const buf = getBlobPartAsBuffer(blobPart);
	            return new ReadableStream_js_1.PonyfillReadableStream({
	                start: controller => {
	                    controller.enqueue(buf);
	                    controller.close();
	                },
	            });
	        }
	        let blobPartIterator;
	        return new ReadableStream_js_1.PonyfillReadableStream({
	            start: controller => {
	                if (this.blobParts.length === 0) {
	                    controller.close();
	                    return;
	                }
	                blobPartIterator = this.blobParts[Symbol.iterator]();
	            },
	            pull: controller => {
	                const { value: blobPart, done } = blobPartIterator.next();
	                if (done) {
	                    controller.close();
	                    return;
	                }
	                if (blobPart) {
	                    if (isBlob(blobPart)) {
	                        return blobPart.arrayBuffer().then(arrayBuffer => {
	                            const buf = Buffer.from(arrayBuffer, undefined, blobPart.size);
	                            controller.enqueue(buf);
	                        });
	                    }
	                    const buf = getBlobPartAsBuffer(blobPart);
	                    controller.enqueue(buf);
	                }
	            },
	        });
	    }
	    slice() {
	        throw new Error('Not implemented');
	    }
	}
	Blob$1.PonyfillBlob = PonyfillBlob;
	return Blob$1;
}

var File$1 = {};

var hasRequiredFile;

function requireFile () {
	if (hasRequiredFile) return File$1;
	hasRequiredFile = 1;
	Object.defineProperty(File$1, "__esModule", { value: true });
	File$1.PonyfillFile = void 0;
	const Blob_js_1 = requireBlob();
	class PonyfillFile extends Blob_js_1.PonyfillBlob {
	    constructor(fileBits, name, options) {
	        super(fileBits, options);
	        this.name = name;
	        this.webkitRelativePath = '';
	        this.lastModified = options?.lastModified || Date.now();
	    }
	}
	File$1.PonyfillFile = PonyfillFile;
	return File$1;
}

var FormData$1 = {};

var hasRequiredFormData;

function requireFormData () {
	if (hasRequiredFormData) return FormData$1;
	hasRequiredFormData = 1;
	Object.defineProperty(FormData$1, "__esModule", { value: true });
	FormData$1.getStreamFromFormData = FormData$1.PonyfillFormData = void 0;
	const ReadableStream_js_1 = requireReadableStream();
	class PonyfillFormData {
	    constructor() {
	        this.map = new Map();
	    }
	    append(name, value, fileName) {
	        let values = this.map.get(name);
	        if (!values) {
	            values = [];
	            this.map.set(name, values);
	        }
	        const entry = isBlob(value)
	            ? getNormalizedFile(name, value, fileName)
	            : value;
	        values.push(entry);
	    }
	    delete(name) {
	        this.map.delete(name);
	    }
	    get(name) {
	        const values = this.map.get(name);
	        return values ? values[0] : null;
	    }
	    getAll(name) {
	        return this.map.get(name) || [];
	    }
	    has(name) {
	        return this.map.has(name);
	    }
	    set(name, value, fileName) {
	        const entry = isBlob(value)
	            ? getNormalizedFile(name, value, fileName)
	            : value;
	        this.map.set(name, [entry]);
	    }
	    *[Symbol.iterator]() {
	        for (const [key, values] of this.map) {
	            for (const value of values) {
	                yield [key, value];
	            }
	        }
	    }
	    entries() {
	        return this[Symbol.iterator]();
	    }
	    keys() {
	        return this.map.keys();
	    }
	    *values() {
	        for (const values of this.map.values()) {
	            for (const value of values) {
	                yield value;
	            }
	        }
	    }
	    forEach(callback) {
	        for (const [key, value] of this) {
	            callback(value, key, this);
	        }
	    }
	}
	FormData$1.PonyfillFormData = PonyfillFormData;
	function getStreamFromFormData(formData, boundary = '---') {
	    const entries = [];
	    let sentInitialHeader = false;
	    return new ReadableStream_js_1.PonyfillReadableStream({
	        start: controller => {
	            formData.forEach((value, key) => {
	                if (!sentInitialHeader) {
	                    controller.enqueue(Buffer.from(`--${boundary}\r\n`));
	                    sentInitialHeader = true;
	                }
	                entries.push([key, value]);
	            });
	            if (!sentInitialHeader) {
	                controller.enqueue(Buffer.from(`--${boundary}--\r\n`));
	                controller.close();
	            }
	        },
	        pull: async (controller) => {
	            const entry = entries.shift();
	            if (entry) {
	                const [key, value] = entry;
	                if (typeof value === 'string') {
	                    controller.enqueue(Buffer.from(`Content-Disposition: form-data; name="${key}"\r\n\r\n`));
	                    controller.enqueue(Buffer.from(value));
	                }
	                else {
	                    let filenamePart = '';
	                    if (value.name) {
	                        filenamePart = `; filename="${value.name}"`;
	                    }
	                    controller.enqueue(Buffer.from(`Content-Disposition: form-data; name="${key}"${filenamePart}\r\n`));
	                    controller.enqueue(Buffer.from(`Content-Type: ${value.type || 'application/octet-stream'}\r\n\r\n`));
	                    const entryStream = value.stream();
	                    for await (const chunk of entryStream) {
	                        controller.enqueue(chunk);
	                    }
	                }
	                if (entries.length === 0) {
	                    controller.enqueue(Buffer.from(`\r\n--${boundary}--\r\n`));
	                    controller.close();
	                }
	                else {
	                    controller.enqueue(Buffer.from(`\r\n--${boundary}\r\n`));
	                }
	            }
	            else {
	                controller.enqueue(Buffer.from(`\r\n--${boundary}--\r\n`));
	                controller.close();
	            }
	        },
	    });
	}
	FormData$1.getStreamFromFormData = getStreamFromFormData;
	function getNormalizedFile(name, blob, fileName) {
	    Object.defineProperty(blob, 'name', {
	        configurable: true,
	        enumerable: true,
	        value: fileName || blob.name || name,
	    });
	    return blob;
	}
	function isBlob(value) {
	    return value?.arrayBuffer != null;
	}
	return FormData$1;
}

var hasRequiredBody;

function requireBody () {
	if (hasRequiredBody) return Body;
	hasRequiredBody = 1;
	Object.defineProperty(Body, "__esModule", { value: true });
	Body.PonyfillBody = void 0;
	const tslib_1 = require$$0;
	const stream_1 = require$$0$1;
	const busboy_1 = tslib_1.__importDefault(requireLib$1());
	const Blob_js_1 = requireBlob();
	const File_js_1 = requireFile();
	const FormData_js_1 = requireFormData();
	const ReadableStream_js_1 = requireReadableStream();
	const utils_js_1 = requireUtils();
	var BodyInitType;
	(function (BodyInitType) {
	    BodyInitType["ReadableStream"] = "ReadableStream";
	    BodyInitType["Blob"] = "Blob";
	    BodyInitType["FormData"] = "FormData";
	    BodyInitType["String"] = "String";
	    BodyInitType["Readable"] = "Readable";
	    BodyInitType["Buffer"] = "Buffer";
	})(BodyInitType || (BodyInitType = {}));
	class PonyfillBody {
	    constructor(bodyInit, options = {}) {
	        this.bodyInit = bodyInit;
	        this.options = options;
	        this.bodyUsed = false;
	        this.contentType = null;
	        this.contentLength = null;
	        this._bodyFactory = () => null;
	        this._generatedBody = null;
	        const { bodyFactory, contentType, contentLength, bodyType, buffer } = processBodyInit(bodyInit);
	        this._bodyFactory = bodyFactory;
	        this.contentType = contentType;
	        this.contentLength = contentLength;
	        this.bodyType = bodyType;
	        this._buffer = buffer;
	    }
	    generateBody() {
	        if (this._generatedBody) {
	            return this._generatedBody;
	        }
	        const body = this._bodyFactory();
	        this._generatedBody = body;
	        return body;
	    }
	    get body() {
	        const _body = this.generateBody();
	        if (_body != null) {
	            const ponyfillReadableStream = _body;
	            const readable = _body.readable;
	            return new Proxy(_body.readable, {
	                get(_, prop) {
	                    if (prop in ponyfillReadableStream) {
	                        const ponyfillReadableStreamProp = ponyfillReadableStream[prop];
	                        if (typeof ponyfillReadableStreamProp === 'function') {
	                            return ponyfillReadableStreamProp.bind(ponyfillReadableStream);
	                        }
	                        return ponyfillReadableStreamProp;
	                    }
	                    if (prop in readable) {
	                        const readableProp = readable[prop];
	                        if (typeof readableProp === 'function') {
	                            return readableProp.bind(readable);
	                        }
	                        return readableProp;
	                    }
	                },
	            });
	        }
	        return null;
	    }
	    _collectChunksFromReadable() {
	        const _body = this.generateBody();
	        if (!_body) {
	            return (0, utils_js_1.fakePromise)([]);
	        }
	        const chunks = [];
	        _body.readable.on('data', chunk => {
	            chunks.push(chunk);
	        });
	        return new Promise((resolve, reject) => {
	            _body.readable.once('end', () => {
	                resolve(chunks);
	            });
	            _body.readable.once('error', e => {
	                reject(e);
	            });
	        });
	    }
	    blob() {
	        if (this.bodyType === BodyInitType.Blob) {
	            return (0, utils_js_1.fakePromise)(this.bodyInit);
	        }
	        if (this._buffer) {
	            const blob = new Blob_js_1.PonyfillBlob([this._buffer], {
	                type: this.contentType || '',
	                size: this.contentLength,
	            });
	            return (0, utils_js_1.fakePromise)(blob);
	        }
	        return this._collectChunksFromReadable().then(chunks => {
	            return new Blob_js_1.PonyfillBlob(chunks, {
	                type: this.contentType || '',
	                size: this.contentLength,
	            });
	        });
	    }
	    formData(opts) {
	        if (this.bodyType === BodyInitType.FormData) {
	            return (0, utils_js_1.fakePromise)(this.bodyInit);
	        }
	        const formData = new FormData_js_1.PonyfillFormData();
	        const _body = this.generateBody();
	        if (_body == null) {
	            return (0, utils_js_1.fakePromise)(formData);
	        }
	        const formDataLimits = {
	            ...this.options.formDataLimits,
	            ...opts?.formDataLimits,
	        };
	        return new Promise((resolve, reject) => {
	            const bb = (0, busboy_1.default)({
	                headers: {
	                    'content-type': this.contentType || '',
	                },
	                limits: formDataLimits,
	                defParamCharset: 'utf-8',
	            });
	            bb.on('field', (name, value, { nameTruncated, valueTruncated }) => {
	                if (nameTruncated) {
	                    reject(new Error(`Field name size exceeded: ${formDataLimits?.fieldNameSize} bytes`));
	                }
	                if (valueTruncated) {
	                    reject(new Error(`Field value size exceeded: ${formDataLimits?.fieldSize} bytes`));
	                }
	                formData.set(name, value);
	            });
	            bb.on('fieldsLimit', () => {
	                reject(new Error(`Fields limit exceeded: ${formDataLimits?.fields}`));
	            });
	            bb.on('file', (name, fileStream, { filename, mimeType }) => {
	                const chunks = [];
	                fileStream.on('limit', () => {
	                    reject(new Error(`File size limit exceeded: ${formDataLimits?.fileSize} bytes`));
	                });
	                fileStream.on('data', chunk => {
	                    chunks.push(chunk);
	                });
	                fileStream.on('close', () => {
	                    if (fileStream.truncated) {
	                        reject(new Error(`File size limit exceeded: ${formDataLimits?.fileSize} bytes`));
	                    }
	                    const file = new File_js_1.PonyfillFile(chunks, filename, { type: mimeType });
	                    formData.set(name, file);
	                });
	            });
	            bb.on('filesLimit', () => {
	                reject(new Error(`Files limit exceeded: ${formDataLimits?.files}`));
	            });
	            bb.on('partsLimit', () => {
	                reject(new Error(`Parts limit exceeded: ${formDataLimits?.parts}`));
	            });
	            bb.on('close', () => {
	                resolve(formData);
	            });
	            bb.on('error', (err = 'An error occurred while parsing the form data') => {
	                const errMessage = err.message || err.toString();
	                reject(new TypeError(errMessage, err.cause));
	            });
	            _body?.readable.pipe(bb);
	        });
	    }
	    arrayBuffer() {
	        if (this._buffer) {
	            return (0, utils_js_1.fakePromise)(this._buffer);
	        }
	        if (this.bodyType === BodyInitType.Blob) {
	            if (this.bodyInit instanceof Blob_js_1.PonyfillBlob) {
	                return this.bodyInit.arrayBuffer();
	            }
	            const bodyInitTyped = this.bodyInit;
	            return bodyInitTyped
	                .arrayBuffer()
	                .then(arrayBuffer => Buffer.from(arrayBuffer, undefined, bodyInitTyped.size));
	        }
	        return this._collectChunksFromReadable().then(function concatCollectedChunksFromReadable(chunks) {
	            if (chunks.length === 1) {
	                return chunks[0];
	            }
	            return Buffer.concat(chunks);
	        });
	    }
	    json() {
	        return this.text().then(function parseTextAsJson(text) {
	            return JSON.parse(text);
	        });
	    }
	    text() {
	        if (this.bodyType === BodyInitType.String) {
	            return (0, utils_js_1.fakePromise)(this.bodyInit);
	        }
	        return this.arrayBuffer().then(buffer => buffer.toString('utf-8'));
	    }
	}
	Body.PonyfillBody = PonyfillBody;
	function processBodyInit(bodyInit) {
	    if (bodyInit == null) {
	        return {
	            bodyFactory: () => null,
	            contentType: null,
	            contentLength: null,
	        };
	    }
	    if (typeof bodyInit === 'string') {
	        const buffer = Buffer.from(bodyInit);
	        const contentLength = buffer.byteLength;
	        return {
	            bodyType: BodyInitType.String,
	            contentType: 'text/plain;charset=UTF-8',
	            contentLength,
	            buffer,
	            bodyFactory() {
	                const readable = stream_1.Readable.from(buffer);
	                return new ReadableStream_js_1.PonyfillReadableStream(readable);
	            },
	        };
	    }
	    if (Buffer.isBuffer(bodyInit)) {
	        return {
	            bodyType: BodyInitType.Buffer,
	            contentType: null,
	            contentLength: bodyInit.length,
	            buffer: bodyInit,
	            bodyFactory() {
	                const readable = stream_1.Readable.from(bodyInit);
	                const body = new ReadableStream_js_1.PonyfillReadableStream(readable);
	                return body;
	            },
	        };
	    }
	    if ((0, utils_js_1.isArrayBufferView)(bodyInit)) {
	        const buffer = Buffer.from(bodyInit.buffer, bodyInit.byteOffset, bodyInit.byteLength);
	        return {
	            bodyType: BodyInitType.Buffer,
	            contentLength: bodyInit.byteLength,
	            contentType: null,
	            buffer,
	            bodyFactory() {
	                const readable = stream_1.Readable.from(buffer);
	                const body = new ReadableStream_js_1.PonyfillReadableStream(readable);
	                return body;
	            },
	        };
	    }
	    if (bodyInit instanceof ReadableStream_js_1.PonyfillReadableStream && bodyInit.readable != null) {
	        return {
	            bodyType: BodyInitType.ReadableStream,
	            bodyFactory: () => bodyInit,
	            contentType: null,
	            contentLength: null,
	        };
	    }
	    if (isBlob(bodyInit)) {
	        return {
	            bodyType: BodyInitType.Blob,
	            contentType: bodyInit.type,
	            contentLength: bodyInit.size,
	            bodyFactory() {
	                return bodyInit.stream();
	            },
	        };
	    }
	    if (bodyInit instanceof ArrayBuffer) {
	        const contentLength = bodyInit.byteLength;
	        const buffer = Buffer.from(bodyInit, undefined, bodyInit.byteLength);
	        return {
	            bodyType: BodyInitType.Buffer,
	            contentType: null,
	            contentLength,
	            buffer,
	            bodyFactory() {
	                const readable = stream_1.Readable.from(buffer);
	                const body = new ReadableStream_js_1.PonyfillReadableStream(readable);
	                return body;
	            },
	        };
	    }
	    if (bodyInit instanceof stream_1.Readable) {
	        return {
	            bodyType: BodyInitType.Readable,
	            contentType: null,
	            contentLength: null,
	            bodyFactory() {
	                const body = new ReadableStream_js_1.PonyfillReadableStream(bodyInit);
	                return body;
	            },
	        };
	    }
	    if (isURLSearchParams(bodyInit)) {
	        const contentType = 'application/x-www-form-urlencoded;charset=UTF-8';
	        return {
	            bodyType: BodyInitType.String,
	            contentType,
	            contentLength: null,
	            bodyFactory() {
	                const body = new ReadableStream_js_1.PonyfillReadableStream(stream_1.Readable.from(bodyInit.toString()));
	                return body;
	            },
	        };
	    }
	    if (isFormData(bodyInit)) {
	        const boundary = Math.random().toString(36).substr(2);
	        const contentType = `multipart/form-data; boundary=${boundary}`;
	        return {
	            bodyType: BodyInitType.FormData,
	            contentType,
	            contentLength: null,
	            bodyFactory() {
	                return (0, FormData_js_1.getStreamFromFormData)(bodyInit, boundary);
	            },
	        };
	    }
	    if (isReadableStream(bodyInit)) {
	        return {
	            contentType: null,
	            contentLength: null,
	            bodyFactory() {
	                return new ReadableStream_js_1.PonyfillReadableStream(bodyInit);
	            },
	        };
	    }
	    if (bodyInit[Symbol.iterator] || bodyInit[Symbol.asyncIterator]) {
	        return {
	            contentType: null,
	            contentLength: null,
	            bodyFactory() {
	                const readable = stream_1.Readable.from(bodyInit);
	                return new ReadableStream_js_1.PonyfillReadableStream(readable);
	            },
	        };
	    }
	    throw new Error('Unknown body type');
	}
	function isFormData(value) {
	    return value?.forEach != null;
	}
	function isBlob(value) {
	    return value?.stream != null;
	}
	function isURLSearchParams(value) {
	    return value?.sort != null;
	}
	function isReadableStream(value) {
	    return value?.getReader != null;
	}
	return Body;
}

var Headers$2 = {};

var hasRequiredHeaders;

function requireHeaders () {
	if (hasRequiredHeaders) return Headers$2;
	hasRequiredHeaders = 1;
	Object.defineProperty(Headers$2, "__esModule", { value: true });
	Headers$2.PonyfillHeaders = Headers$2.isHeadersLike = void 0;
	const util_1 = require$$0$2;
	function isHeadersLike(headers) {
	    return headers?.get && headers?.forEach;
	}
	Headers$2.isHeadersLike = isHeadersLike;
	class PonyfillHeaders {
	    constructor(headersInit) {
	        this.headersInit = headersInit;
	        this.objectNormalizedKeysOfHeadersInit = [];
	        this.objectOriginalKeysOfHeadersInit = [];
	        this._setCookies = [];
	    }
	    // perf: we don't need to build `this.map` for Requests, as we can access the headers directly
	    _get(key) {
	        const normalized = key.toLowerCase();
	        if (normalized === 'set-cookie') {
	            return this._setCookies.join(', ');
	        }
	        // If the map is built, reuse it
	        if (this._map) {
	            return this._map.get(normalized) || null;
	        }
	        // If the map is not built, try to get the value from the this.headersInit
	        if (this.headersInit == null) {
	            return null;
	        }
	        if (Array.isArray(this.headersInit)) {
	            return this.headersInit.find(header => header[0].toLowerCase() === normalized)?.[1] || null;
	        }
	        else if (isHeadersLike(this.headersInit)) {
	            return this.headersInit.get(normalized);
	        }
	        else {
	            const initValue = this.headersInit[key] || this.headersInit[normalized];
	            if (initValue != null) {
	                return initValue;
	            }
	            if (!this.objectNormalizedKeysOfHeadersInit.length) {
	                Object.keys(this.headersInit).forEach(k => {
	                    this.objectOriginalKeysOfHeadersInit.push(k);
	                    this.objectNormalizedKeysOfHeadersInit.push(k.toLowerCase());
	                });
	            }
	            const index = this.objectNormalizedKeysOfHeadersInit.indexOf(normalized);
	            if (index === -1) {
	                return null;
	            }
	            const originalKey = this.objectOriginalKeysOfHeadersInit[index];
	            return this.headersInit[originalKey];
	        }
	    }
	    // perf: Build the map of headers lazily, only when we need to access all headers or write to it.
	    // I could do a getter here, but I'm too lazy to type `getter`.
	    getMap() {
	        if (!this._map) {
	            if (this.headersInit != null) {
	                if (Array.isArray(this.headersInit)) {
	                    this._map = new Map();
	                    this.headersInit.forEach(([key, value]) => {
	                        const normalizedKey = key.toLowerCase();
	                        if (normalizedKey === 'set-cookie') {
	                            this._setCookies.push(value);
	                            return;
	                        }
	                        this._map.set(normalizedKey, value);
	                    });
	                }
	                else if (isHeadersLike(this.headersInit)) {
	                    this._map = new Map();
	                    this.headersInit.forEach((value, key) => {
	                        if (key === 'set-cookie') {
	                            this._setCookies.push(value);
	                            return;
	                        }
	                        this._map.set(key, value);
	                    });
	                }
	                else {
	                    this._map = new Map();
	                    for (const initKey in this.headersInit) {
	                        const initValue = this.headersInit[initKey];
	                        if (initValue != null) {
	                            const normalizedKey = initKey.toLowerCase();
	                            if (normalizedKey === 'set-cookie') {
	                                this._setCookies.push(initValue);
	                                continue;
	                            }
	                            this._map.set(normalizedKey, initValue);
	                        }
	                    }
	                }
	            }
	            else {
	                this._map = new Map();
	            }
	        }
	        return this._map;
	    }
	    append(name, value) {
	        const key = name.toLowerCase();
	        if (key === 'set-cookie') {
	            this._setCookies.push(value);
	            return;
	        }
	        const existingValue = this.getMap().get(key);
	        const finalValue = existingValue ? `${existingValue}, ${value}` : value;
	        this.getMap().set(key, finalValue);
	    }
	    get(name) {
	        const value = this._get(name);
	        if (value == null) {
	            return null;
	        }
	        return value;
	    }
	    has(name) {
	        if (name === 'set-cookie') {
	            return this._setCookies.length > 0;
	        }
	        return !!this._get(name); // we might need to check if header exists and not just check if it's not nullable
	    }
	    set(name, value) {
	        const key = name.toLowerCase();
	        if (key === 'set-cookie') {
	            this._setCookies = [value];
	            return;
	        }
	        this.getMap().set(key, value);
	    }
	    delete(name) {
	        const key = name.toLowerCase();
	        if (key === 'set-cookie') {
	            this._setCookies = [];
	            return;
	        }
	        this.getMap().delete(key);
	    }
	    forEach(callback) {
	        this._setCookies.forEach(setCookie => {
	            callback(setCookie, 'set-cookie', this);
	        });
	        if (!this._map) {
	            if (this.headersInit) {
	                if (Array.isArray(this.headersInit)) {
	                    this.headersInit.forEach(([key, value]) => {
	                        callback(value, key, this);
	                    });
	                    return;
	                }
	                if (isHeadersLike(this.headersInit)) {
	                    this.headersInit.forEach(callback);
	                    return;
	                }
	                Object.entries(this.headersInit).forEach(([key, value]) => {
	                    if (value != null) {
	                        callback(value, key, this);
	                    }
	                });
	            }
	            return;
	        }
	        this.getMap().forEach((value, key) => {
	            callback(value, key, this);
	        });
	    }
	    *keys() {
	        if (this._setCookies.length) {
	            yield 'set-cookie';
	        }
	        if (!this._map) {
	            if (this.headersInit) {
	                if (Array.isArray(this.headersInit)) {
	                    yield* this.headersInit.map(([key]) => key)[Symbol.iterator]();
	                    return;
	                }
	                if (isHeadersLike(this.headersInit)) {
	                    yield* this.headersInit.keys();
	                    return;
	                }
	                yield* Object.keys(this.headersInit)[Symbol.iterator]();
	                return;
	            }
	        }
	        yield* this.getMap().keys();
	    }
	    *values() {
	        yield* this._setCookies;
	        if (!this._map) {
	            if (this.headersInit) {
	                if (Array.isArray(this.headersInit)) {
	                    yield* this.headersInit.map(([, value]) => value)[Symbol.iterator]();
	                    return;
	                }
	                if (isHeadersLike(this.headersInit)) {
	                    yield* this.headersInit.values();
	                    return;
	                }
	                yield* Object.values(this.headersInit)[Symbol.iterator]();
	                return;
	            }
	        }
	        yield* this.getMap().values();
	    }
	    *entries() {
	        yield* this._setCookies.map(cookie => ['set-cookie', cookie]);
	        if (!this._map) {
	            if (this.headersInit) {
	                if (Array.isArray(this.headersInit)) {
	                    yield* this.headersInit;
	                    return;
	                }
	                if (isHeadersLike(this.headersInit)) {
	                    yield* this.headersInit.entries();
	                    return;
	                }
	                yield* Object.entries(this.headersInit);
	                return;
	            }
	        }
	        yield* this.getMap().entries();
	    }
	    getSetCookie() {
	        return this._setCookies;
	    }
	    [Symbol.iterator]() {
	        return this.entries();
	    }
	    [Symbol.for('nodejs.util.inspect.custom')]() {
	        const record = {};
	        this.forEach((value, key) => {
	            if (key === 'set-cookie') {
	                record['set-cookie'] = this._setCookies;
	            }
	            else {
	                record[key] = value.includes(',') ? value.split(',').map(el => el.trim()) : value;
	            }
	        });
	        return `Headers ${(0, util_1.inspect)(record)}`;
	    }
	}
	Headers$2.PonyfillHeaders = PonyfillHeaders;
	return Headers$2;
}

var hasRequiredResponse;

function requireResponse () {
	if (hasRequiredResponse) return Response$2;
	hasRequiredResponse = 1;
	Object.defineProperty(Response$2, "__esModule", { value: true });
	Response$2.PonyfillResponse = void 0;
	const http_1 = require$$0$3;
	const Body_js_1 = requireBody();
	const Headers_js_1 = requireHeaders();
	const JSON_CONTENT_TYPE = 'application/json; charset=utf-8';
	class PonyfillResponse extends Body_js_1.PonyfillBody {
	    constructor(body, init) {
	        super(body || null, init);
	        this.headers =
	            init?.headers && (0, Headers_js_1.isHeadersLike)(init.headers)
	                ? init.headers
	                : new Headers_js_1.PonyfillHeaders(init?.headers);
	        this.status = init?.status || 200;
	        this.statusText = init?.statusText || http_1.STATUS_CODES[this.status] || 'OK';
	        this.url = init?.url || '';
	        this.redirected = init?.redirected || false;
	        this.type = init?.type || 'default';
	        const contentTypeInHeaders = this.headers.get('content-type');
	        if (!contentTypeInHeaders) {
	            if (this.contentType) {
	                this.headers.set('content-type', this.contentType);
	            }
	        }
	        else {
	            this.contentType = contentTypeInHeaders;
	        }
	        const contentLengthInHeaders = this.headers.get('content-length');
	        if (!contentLengthInHeaders) {
	            if (this.contentLength) {
	                this.headers.set('content-length', this.contentLength.toString());
	            }
	        }
	        else {
	            this.contentLength = parseInt(contentLengthInHeaders, 10);
	        }
	    }
	    get ok() {
	        return this.status >= 200 && this.status < 300;
	    }
	    clone() {
	        return new PonyfillResponse(this.body, this);
	    }
	    static error() {
	        return new PonyfillResponse(null, {
	            status: 500,
	            statusText: 'Internal Server Error',
	        });
	    }
	    static redirect(url, status = 301) {
	        if (status < 300 || status > 399) {
	            throw new RangeError('Invalid status code');
	        }
	        return new PonyfillResponse(null, {
	            headers: {
	                location: url,
	            },
	            status,
	        });
	    }
	    static json(data, init = {}) {
	        init.headers =
	            init?.headers && (0, Headers_js_1.isHeadersLike)(init.headers)
	                ? init.headers
	                : new Headers_js_1.PonyfillHeaders(init?.headers);
	        if (!init.headers.has('content-type')) {
	            init.headers.set('content-type', JSON_CONTENT_TYPE);
	        }
	        return new PonyfillResponse(JSON.stringify(data), init);
	    }
	}
	Response$2.PonyfillResponse = PonyfillResponse;
	return Response$2;
}

var hasRequiredFetchCurl;

function requireFetchCurl () {
	if (hasRequiredFetchCurl) return fetchCurl;
	hasRequiredFetchCurl = 1;
	Object.defineProperty(fetchCurl, "__esModule", { value: true });
	fetchCurl.fetchCurl = void 0;
	const stream_1 = require$$0$1;
	const Response_js_1 = requireResponse();
	const utils_js_1 = requireUtils();
	function fetchCurl$1(fetchRequest) {
	    const { Curl, CurlFeature, CurlPause, CurlProgressFunc } = globalThis['libcurl'];
	    const curlHandle = new Curl();
	    curlHandle.enable(CurlFeature.NoDataParsing);
	    curlHandle.setOpt('URL', fetchRequest.url);
	    curlHandle.setOpt('SSL_VERIFYPEER', false);
	    curlHandle.enable(CurlFeature.StreamResponse);
	    curlHandle.setStreamProgressCallback(function () {
	        return fetchRequest['_signal']?.aborted
	            ? process.env.DEBUG
	                ? CurlProgressFunc.Continue
	                : 1
	            : 0;
	    });
	    if (fetchRequest['bodyType'] === 'String') {
	        curlHandle.setOpt('POSTFIELDS', fetchRequest['bodyInit']);
	    }
	    else {
	        const nodeReadable = (fetchRequest.body != null
	            ? (0, utils_js_1.isNodeReadable)(fetchRequest.body)
	                ? fetchRequest.body
	                : stream_1.Readable.from(fetchRequest.body)
	            : null);
	        if (nodeReadable) {
	            curlHandle.setOpt('UPLOAD', true);
	            curlHandle.setUploadStream(nodeReadable);
	        }
	    }
	    if (process.env.DEBUG) {
	        curlHandle.setOpt('VERBOSE', true);
	    }
	    curlHandle.setOpt('TRANSFER_ENCODING', false);
	    curlHandle.setOpt('HTTP_TRANSFER_DECODING', true);
	    curlHandle.setOpt('FOLLOWLOCATION', fetchRequest.redirect === 'follow');
	    curlHandle.setOpt('MAXREDIRS', 20);
	    curlHandle.setOpt('ACCEPT_ENCODING', '');
	    curlHandle.setOpt('CUSTOMREQUEST', fetchRequest.method);
	    const headersSerializer = fetchRequest.headersSerializer || utils_js_1.defaultHeadersSerializer;
	    let size;
	    const curlHeaders = headersSerializer(fetchRequest.headers, value => {
	        size = Number(value);
	    });
	    if (size != null) {
	        curlHandle.setOpt('INFILESIZE', size);
	    }
	    curlHandle.setOpt('HTTPHEADER', curlHeaders);
	    curlHandle.enable(CurlFeature.NoHeaderParsing);
	    return new Promise(function promiseResolver(resolve, reject) {
	        let streamResolved;
	        if (fetchRequest['_signal']) {
	            fetchRequest['_signal'].onabort = () => {
	                if (curlHandle.isOpen) {
	                    try {
	                        curlHandle.pause(CurlPause.Recv);
	                    }
	                    catch (e) {
	                        reject(e);
	                    }
	                }
	            };
	        }
	        curlHandle.once('end', function endListener() {
	            curlHandle.close();
	        });
	        curlHandle.once('error', function errorListener(error) {
	            if (streamResolved && !streamResolved.closed && !streamResolved.destroyed) {
	                streamResolved.destroy(error);
	            }
	            else {
	                if (error.message === 'Operation was aborted by an application callback') {
	                    error.message = 'The operation was aborted.';
	                }
	                reject(error);
	            }
	            curlHandle.close();
	        });
	        curlHandle.once('stream', function streamListener(stream, status, headersBuf) {
	            const pipedStream = stream.pipe(new stream_1.PassThrough());
	            const headersFlat = headersBuf
	                .toString('utf8')
	                .split(/\r?\n|\r/g)
	                .filter(headerFilter => {
	                if (headerFilter && !headerFilter.startsWith('HTTP/')) {
	                    if (fetchRequest.redirect === 'error' &&
	                        (headerFilter.includes('location') || headerFilter.includes('Location'))) {
	                        pipedStream.destroy();
	                        reject(new Error('redirect is not allowed'));
	                    }
	                    return true;
	                }
	                return false;
	            });
	            const headersInit = headersFlat.map(headerFlat => headerFlat.split(/:\s(.+)/).slice(0, 2));
	            pipedStream.on('pause', () => {
	                stream.pause();
	            });
	            pipedStream.on('resume', () => {
	                stream.resume();
	            });
	            pipedStream.on('close', () => {
	                stream.destroy();
	            });
	            const ponyfillResponse = new Response_js_1.PonyfillResponse(pipedStream, {
	                status,
	                headers: headersInit,
	                url: fetchRequest.url,
	            });
	            resolve(ponyfillResponse);
	            streamResolved = pipedStream;
	        });
	        curlHandle.perform();
	    });
	}
	fetchCurl.fetchCurl = fetchCurl$1;
	return fetchCurl;
}

var fetchNodeHttp = {};

var AbortError = {};

var hasRequiredAbortError;

function requireAbortError () {
	if (hasRequiredAbortError) return AbortError;
	hasRequiredAbortError = 1;
	Object.defineProperty(AbortError, "__esModule", { value: true });
	AbortError.PonyfillAbortError = void 0;
	class PonyfillAbortError extends Error {
	    constructor(reason) {
	        let message = 'The operation was aborted';
	        if (reason) {
	            message += ` reason: ${reason}`;
	        }
	        super(message, {
	            cause: reason,
	        });
	        this.name = 'AbortError';
	    }
	    get reason() {
	        return this.cause;
	    }
	}
	AbortError.PonyfillAbortError = PonyfillAbortError;
	return AbortError;
}

var Request$1 = {};

var hasRequiredRequest;

function requireRequest () {
	if (hasRequiredRequest) return Request$1;
	hasRequiredRequest = 1;
	var _a;
	Object.defineProperty(Request$1, "__esModule", { value: true });
	Request$1.PonyfillRequest = void 0;
	const Body_js_1 = requireBody();
	const Headers_js_1 = requireHeaders();
	function isRequest(input) {
	    return input[Symbol.toStringTag] === 'Request';
	}
	function isURL(obj) {
	    return obj?.href != null;
	}
	class PonyfillRequest extends Body_js_1.PonyfillBody {
	    constructor(input, options) {
	        let url;
	        let bodyInit = null;
	        let requestInit;
	        if (typeof input === 'string') {
	            url = input;
	        }
	        else if (isURL(input)) {
	            url = input.toString();
	        }
	        else if (isRequest(input)) {
	            url = input.url;
	            bodyInit = input.body;
	            requestInit = input;
	        }
	        if (options != null) {
	            bodyInit = options.body || null;
	            requestInit = options;
	        }
	        super(bodyInit, options);
	        this[_a] = 'Request';
	        this.cache = requestInit?.cache || 'default';
	        this.credentials = requestInit?.credentials || 'same-origin';
	        this.headers =
	            requestInit?.headers && (0, Headers_js_1.isHeadersLike)(requestInit.headers)
	                ? requestInit.headers
	                : new Headers_js_1.PonyfillHeaders(requestInit?.headers);
	        this.integrity = requestInit?.integrity || '';
	        this.keepalive = requestInit?.keepalive != null ? requestInit?.keepalive : false;
	        this.method = requestInit?.method?.toUpperCase() || 'GET';
	        this.mode = requestInit?.mode || 'cors';
	        this.redirect = requestInit?.redirect || 'follow';
	        this.referrer = requestInit?.referrer || 'about:client';
	        this.referrerPolicy = requestInit?.referrerPolicy || 'no-referrer';
	        this._signal = requestInit?.signal;
	        this.headersSerializer = requestInit?.headersSerializer;
	        this.duplex = requestInit?.duplex || 'half';
	        this.url = url || '';
	        this.destination = 'document';
	        this.priority = 'auto';
	        if (this.method !== 'GET' && this.method !== 'HEAD') {
	            const contentTypeInHeaders = this.headers.get('content-type');
	            if (!contentTypeInHeaders) {
	                if (this.contentType) {
	                    this.headers.set('content-type', this.contentType);
	                }
	            }
	            else {
	                this.contentType = contentTypeInHeaders;
	            }
	            const contentLengthInHeaders = this.headers.get('content-length');
	            if (bodyInit == null && !contentLengthInHeaders) {
	                this.contentLength = 0;
	                this.headers.set('content-length', '0');
	            }
	            if (!contentLengthInHeaders) {
	                if (this.contentLength) {
	                    this.headers.set('content-length', this.contentLength.toString());
	                }
	            }
	            else {
	                this.contentLength = parseInt(contentLengthInHeaders, 10);
	            }
	        }
	    }
	    get signal() {
	        // Create a new signal only if needed
	        // Because the creation of signal is expensive
	        if (!this._signal) {
	            this._signal = new AbortController().signal;
	        }
	        return this._signal;
	    }
	    clone() {
	        return new PonyfillRequest(this);
	    }
	}
	Request$1.PonyfillRequest = PonyfillRequest;
	_a = Symbol.toStringTag;
	return Request$1;
}

var URL$2 = {};

var lib = {exports: {}};

var fastDecodeUriComponent;
var hasRequiredFastDecodeUriComponent;

function requireFastDecodeUriComponent () {
	if (hasRequiredFastDecodeUriComponent) return fastDecodeUriComponent;
	hasRequiredFastDecodeUriComponent = 1;

	var UTF8_ACCEPT = 12;
	var UTF8_REJECT = 0;
	var UTF8_DATA = [
	  // The first part of the table maps bytes to character to a transition.
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
	  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
	  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
	  4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
	  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
	  6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7,
	  10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,

	  // The second part of the table maps a state to a new state when adding a
	  // transition.
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96,
	  0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0,
	  0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

	  // The third part maps the current transition to a mask that needs to apply
	  // to the byte.
	  0x7F, 0x3F, 0x3F, 0x3F, 0x00, 0x1F, 0x0F, 0x0F, 0x0F, 0x07, 0x07, 0x07
	];

	function decodeURIComponent (uri) {
	  var percentPosition = uri.indexOf('%');
	  if (percentPosition === -1) return uri

	  var length = uri.length;
	  var decoded = '';
	  var last = 0;
	  var codepoint = 0;
	  var startOfOctets = percentPosition;
	  var state = UTF8_ACCEPT;

	  while (percentPosition > -1 && percentPosition < length) {
	    var high = hexCodeToInt(uri[percentPosition + 1], 4);
	    var low = hexCodeToInt(uri[percentPosition + 2], 0);
	    var byte = high | low;
	    var type = UTF8_DATA[byte];
	    state = UTF8_DATA[256 + state + type];
	    codepoint = (codepoint << 6) | (byte & UTF8_DATA[364 + type]);

	    if (state === UTF8_ACCEPT) {
	      decoded += uri.slice(last, startOfOctets);

	      decoded += (codepoint <= 0xFFFF)
	        ? String.fromCharCode(codepoint)
	        : String.fromCharCode(
	          (0xD7C0 + (codepoint >> 10)),
	          (0xDC00 + (codepoint & 0x3FF))
	        );

	      codepoint = 0;
	      last = percentPosition + 3;
	      percentPosition = startOfOctets = uri.indexOf('%', last);
	    } else if (state === UTF8_REJECT) {
	      return null
	    } else {
	      percentPosition += 3;
	      if (percentPosition < length && uri.charCodeAt(percentPosition) === 37) continue
	      return null
	    }
	  }

	  return decoded + uri.slice(last)
	}

	var HEX = {
	  '0': 0,
	  '1': 1,
	  '2': 2,
	  '3': 3,
	  '4': 4,
	  '5': 5,
	  '6': 6,
	  '7': 7,
	  '8': 8,
	  '9': 9,
	  'a': 10,
	  'A': 10,
	  'b': 11,
	  'B': 11,
	  'c': 12,
	  'C': 12,
	  'd': 13,
	  'D': 13,
	  'e': 14,
	  'E': 14,
	  'f': 15,
	  'F': 15
	};

	function hexCodeToInt (c, shift) {
	  var i = HEX[c];
	  return i === undefined ? 255 : i << shift
	}

	fastDecodeUriComponent = decodeURIComponent;
	return fastDecodeUriComponent;
}

var parse_1;
var hasRequiredParse;

function requireParse () {
	if (hasRequiredParse) return parse_1;
	hasRequiredParse = 1;

	const fastDecode = requireFastDecodeUriComponent();

	const plusRegex = /\+/g;
	const Empty = function () {};
	Empty.prototype = Object.create(null);

	/**
	 * @callback parse
	 * @param {string} input
	 */
	function parse(input) {
	  // Optimization: Use new Empty() instead of Object.create(null) for performance
	  // v8 has a better optimization for initializing functions compared to Object
	  const result = new Empty();

	  if (typeof input !== "string") {
	    return result;
	  }

	  let inputLength = input.length;
	  let key = "";
	  let value = "";
	  let startingIndex = -1;
	  let equalityIndex = -1;
	  let shouldDecodeKey = false;
	  let shouldDecodeValue = false;
	  let keyHasPlus = false;
	  let valueHasPlus = false;
	  let hasBothKeyValuePair = false;
	  let c = 0;

	  // Have a boundary of input.length + 1 to access last pair inside the loop.
	  for (let i = 0; i < inputLength + 1; i++) {
	    c = i !== inputLength ? input.charCodeAt(i) : 38;

	    // Handle '&' and end of line to pass the current values to result
	    if (c === 38) {
	      hasBothKeyValuePair = equalityIndex > startingIndex;

	      // Optimization: Reuse equality index to store the end of key
	      if (!hasBothKeyValuePair) {
	        equalityIndex = i;
	      }

	      key = input.slice(startingIndex + 1, equalityIndex);

	      // Add key/value pair only if the range size is greater than 1; a.k.a. contains at least "="
	      if (hasBothKeyValuePair || key.length > 0) {
	        // Optimization: Replace '+' with space
	        if (keyHasPlus) {
	          key = key.replace(plusRegex, " ");
	        }

	        // Optimization: Do not decode if it's not necessary.
	        if (shouldDecodeKey) {
	          key = fastDecode(key) || key;
	        }

	        if (hasBothKeyValuePair) {
	          value = input.slice(equalityIndex + 1, i);

	          if (valueHasPlus) {
	            value = value.replace(plusRegex, " ");
	          }

	          if (shouldDecodeValue) {
	            value = fastDecode(value) || value;
	          }
	        }
	        const currentValue = result[key];

	        if (currentValue === undefined) {
	          result[key] = value;
	        } else {
	          // Optimization: value.pop is faster than Array.isArray(value)
	          if (currentValue.pop) {
	            currentValue.push(value);
	          } else {
	            result[key] = [currentValue, value];
	          }
	        }
	      }

	      // Reset reading key value pairs
	      value = "";
	      startingIndex = i;
	      equalityIndex = i;
	      shouldDecodeKey = false;
	      shouldDecodeValue = false;
	      keyHasPlus = false;
	      valueHasPlus = false;
	    }
	    // Check '='
	    else if (c === 61) {
	      if (equalityIndex <= startingIndex) {
	        equalityIndex = i;
	      }
	      // If '=' character occurs again, we should decode the input.
	      else {
	        shouldDecodeValue = true;
	      }
	    }
	    // Check '+', and remember to replace it with empty space.
	    else if (c === 43) {
	      if (equalityIndex > startingIndex) {
	        valueHasPlus = true;
	      } else {
	        keyHasPlus = true;
	      }
	    }
	    // Check '%' character for encoding
	    else if (c === 37) {
	      if (equalityIndex > startingIndex) {
	        shouldDecodeValue = true;
	      } else {
	        shouldDecodeKey = true;
	      }
	    }
	  }

	  return result;
	}

	parse_1 = parse;
	return parse_1;
}

var querystring;
var hasRequiredQuerystring;

function requireQuerystring () {
	if (hasRequiredQuerystring) return querystring;
	hasRequiredQuerystring = 1;
	// This file is taken from Node.js project.
	// Full implementation can be found from https://github.com/nodejs/node/blob/main/lib/internal/querystring.js

	const hexTable = Array.from(
	  { length: 256 },
	  (_, i) => "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase(),
	);

	// These characters do not need escaping when generating query strings:
	// ! - . _ ~
	// ' ( ) *
	// digits
	// alpha (uppercase)
	// alpha (lowercase)
	// rome-ignore format: the array should not be formatted
	const noEscape = new Int8Array([
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 0 - 15
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 16 - 31
	  0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, // 32 - 47
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, // 48 - 63
	  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 64 - 79
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, // 80 - 95
	  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 96 - 111
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, // 112 - 127
	]);

	/**
	 * @param {string} str
	 * @returns {string}
	 */
	function encodeString(str) {
	  const len = str.length;
	  if (len === 0) return "";

	  let out = "";
	  let lastPos = 0;
	  let i = 0;

	  outer: for (; i < len; i++) {
	    let c = str.charCodeAt(i);

	    // ASCII
	    while (c < 0x80) {
	      if (noEscape[c] !== 1) {
	        if (lastPos < i) out += str.slice(lastPos, i);
	        lastPos = i + 1;
	        out += hexTable[c];
	      }

	      if (++i === len) break outer;

	      c = str.charCodeAt(i);
	    }

	    if (lastPos < i) out += str.slice(lastPos, i);

	    // Multi-byte characters ...
	    if (c < 0x800) {
	      lastPos = i + 1;
	      out += hexTable[0xc0 | (c >> 6)] + hexTable[0x80 | (c & 0x3f)];
	      continue;
	    }
	    if (c < 0xd800 || c >= 0xe000) {
	      lastPos = i + 1;
	      out +=
	        hexTable[0xe0 | (c >> 12)] +
	        hexTable[0x80 | ((c >> 6) & 0x3f)] +
	        hexTable[0x80 | (c & 0x3f)];
	      continue;
	    }
	    // Surrogate pair
	    ++i;

	    // This branch should never happen because all URLSearchParams entries
	    // should already be converted to USVString. But, included for
	    // completion's sake anyway.
	    if (i >= len) {
	      throw new Error("URI malformed");
	    }

	    const c2 = str.charCodeAt(i) & 0x3ff;

	    lastPos = i + 1;
	    c = 0x10000 + (((c & 0x3ff) << 10) | c2);
	    out +=
	      hexTable[0xf0 | (c >> 18)] +
	      hexTable[0x80 | ((c >> 12) & 0x3f)] +
	      hexTable[0x80 | ((c >> 6) & 0x3f)] +
	      hexTable[0x80 | (c & 0x3f)];
	  }
	  if (lastPos === 0) return str;
	  if (lastPos < len) return out + str.slice(lastPos);
	  return out;
	}

	querystring = { encodeString };
	return querystring;
}

var stringify_1;
var hasRequiredStringify;

function requireStringify () {
	if (hasRequiredStringify) return stringify_1;
	hasRequiredStringify = 1;

	const { encodeString } = requireQuerystring();

	function getAsPrimitive(value) {
	  const type = typeof value;

	  if (type === "string") {
	    // Length check is handled inside encodeString function
	    return encodeString(value);
	  } else if (type === "bigint") {
	    return value.toString();
	  } else if (type === "boolean") {
	    return value ? "true" : "false";
	  } else if (type === "number" && Number.isFinite(value)) {
	    return value < 1e21 ? "" + value : encodeString("" + value);
	  }

	  return "";
	}

	/**
	 * @param {Record<string, string | number | boolean
	 * | ReadonlyArray<string | number | boolean> | null>} input
	 * @returns {string}
	 */
	function stringify(input) {
	  let result = "";

	  if (input === null || typeof input !== "object") {
	    return result;
	  }

	  const separator = "&";
	  const keys = Object.keys(input);
	  const keyLength = keys.length;
	  let valueLength = 0;

	  for (let i = 0; i < keyLength; i++) {
	    const key = keys[i];
	    const value = input[key];
	    const encodedKey = encodeString(key) + "=";

	    if (i) {
	      result += separator;
	    }

	    if (Array.isArray(value)) {
	      valueLength = value.length;
	      for (let j = 0; j < valueLength; j++) {
	        if (j) {
	          result += separator;
	        }

	        // Optimization: Dividing into multiple lines improves the performance.
	        // Since v8 does not need to care about the '+' character if it was one-liner.
	        result += encodedKey;
	        result += getAsPrimitive(value[j]);
	      }
	    } else {
	      result += encodedKey;
	      result += getAsPrimitive(value);
	    }
	  }

	  return result;
	}

	stringify_1 = stringify;
	return stringify_1;
}

var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib.exports;
	hasRequiredLib = 1;

	const parse = requireParse();
	const stringify = requireStringify();

	const fastQuerystring = {
	  parse,
	  stringify,
	};

	/**
	 * Enable TS and JS support
	 *
	 * - `const qs = require('fast-querystring')`
	 * - `import qs from 'fast-querystring'`
	 */
	lib.exports = fastQuerystring;
	lib.exports.default = fastQuerystring;
	lib.exports.parse = parse;
	lib.exports.stringify = stringify;
	return lib.exports;
}

var punycode;
var hasRequiredPunycode;

function requirePunycode () {
	if (hasRequiredPunycode) return punycode;
	hasRequiredPunycode = 1;

	/** Highest positive signed 32-bit float value */
	var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	var base = 36;
	var tMin = 1;
	var tMax = 26;
	var skew = 38;
	var damp = 700;
	var initialBias = 72;
	var initialN = 128; // 0x80
	var delimiter = "-"; // '\x2D'

	/** Regular expressions */
	var regexNonASCII = /[^\0-\x7F]/; // Note: U+007F DEL is excluded too.
	var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

	/** Error messages */
	var errors = {
	  "overflow": "Overflow: input needs wider integers to process",
	  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
	  "invalid-input": "Invalid input",
	};

	/** Convenience shortcuts */
	var baseMinusTMin = base - tMin;
	var floor = Math.floor;
	var stringFromCharCode = String.fromCharCode;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
	  throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, callback) {
	  var result = [];
	  var length = array.length;
	  while (length--) {
	    result[length] = callback(array[length]);
	  }
	  return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {String} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(domain, callback) {
	  var parts = domain.split("@");
	  var result = "";
	  if (parts.length > 1) {
	    // In email addresses, only the domain name should be punycoded. Leave
	    // the local part (i.e. everything up to `@`) intact.
	    result = parts[0] + "@";
	    domain = parts[1];
	  }
	  // Avoid `split(regex)` for IE8 compatibility. See #17.
	  domain = domain.replace(regexSeparators, "\x2E");
	  var labels = domain.split(".");
	  var encoded = map(labels, callback).join(".");
	  return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
	  var output = [];
	  var counter = 0;
	  var length = string.length;
	  while (counter < length) {
	    var value = string.charCodeAt(counter++);
	    if (value >= 0xd800 && value <= 0xdbff && counter < length) {
	      // It's a high surrogate, and there is a next character.
	      var extra = string.charCodeAt(counter++);
	      if ((extra & 0xfc00) === 0xdc00) {
	        // Low surrogate.
	        output.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
	      } else {
	        // It's an unmatched surrogate; only append this code unit, in case the
	        // next code unit is the high surrogate of a surrogate pair.
	        output.push(value);
	        counter--;
	      }
	    } else {
	      output.push(value);
	    }
	  }
	  return output;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	var digitToBasic = function (digit, flag) {
	  //  0..25 map to ASCII a..z or A..Z
	  // 26..35 map to ASCII 0..9
	  return digit + 22 + 75 * (digit < 26) - ((flag !== 0) << 5);
	};

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	var adapt = function (delta, numPoints, firstTime) {
	  var k = 0;
	  delta = firstTime ? floor(delta / damp) : delta >> 1;
	  delta += floor(delta / numPoints);
	  for (; /* no initialization */ delta > (baseMinusTMin * tMax) >> 1; k += base) {
	    delta = floor(delta / baseMinusTMin);
	  }
	  return floor(k + ((baseMinusTMin + 1) * delta) / (delta + skew));
	};

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	var encode = function (input) {
	  var output = [];

	  // Convert the input in UCS-2 to an array of Unicode code points.
	  input = ucs2decode(input);

	  // Cache the length.
	  var inputLength = input.length;

	  // Initialize the state.
	  var n = initialN;
	  var delta = 0;
	  var bias = initialBias;

	  // Handle the basic code points.
	  for (var currentValue of input) {
	    if (currentValue < 0x80) {
	      output.push(stringFromCharCode(currentValue));
	    }
	  }

	  var basicLength = output.length;
	  var handledCPCount = basicLength;

	  // `handledCPCount` is the number of code points that have been handled;
	  // `basicLength` is the number of basic code points.

	  // Finish the basic string with a delimiter unless it's empty.
	  if (basicLength) {
	    output.push(delimiter);
	  }

	  // Main encoding loop:
	  while (handledCPCount < inputLength) {
	    // All non-basic code points < n have been handled already. Find the next
	    // larger one:
	    var m = maxInt;
	    for (var currentValue of input) {
	      if (currentValue >= n && currentValue < m) {
	        m = currentValue;
	      }
	    }

	    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
	    // but guard against overflow.
	    var handledCPCountPlusOne = handledCPCount + 1;
	    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
	      error("overflow");
	    }

	    delta += (m - n) * handledCPCountPlusOne;
	    n = m;

	    for (var currentValue of input) {
	      if (currentValue < n && ++delta > maxInt) {
	        error("overflow");
	      }
	      if (currentValue === n) {
	        // Represent delta as a generalized variable-length integer.
	        var q = delta;
	        for (var k = base /* no condition */; ; k += base) {
	          var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
	          if (q < t) {
	            break;
	          }
	          var qMinusT = q - t;
	          var baseMinusT = base - t;
	          output.push(stringFromCharCode(digitToBasic(t + (qMinusT % baseMinusT), 0)));
	          q = floor(qMinusT / baseMinusT);
	        }

	        output.push(stringFromCharCode(digitToBasic(q, 0)));
	        bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
	        delta = 0;
	        ++handledCPCount;
	      }
	    }

	    ++delta;
	    ++n;
	  }
	  return output.join("");
	};

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	var toASCII = function (input) {
	  return mapDomain(input, function (string) {
	    return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
	  });
	};

	/*--------------------------------------------------------------------------*/

	punycode = {
	    toASCII: toASCII
	};
	return punycode;
}

var urlparser;
var hasRequiredUrlparser;

function requireUrlparser () {
	if (hasRequiredUrlparser) return urlparser;
	hasRequiredUrlparser = 1;
	/*
	Copyright (c) 2014 Petka Antonov

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
	*/
	function Url() {
	    //For more efficient internal representation and laziness.
	    //The non-underscore versions of these properties are accessor functions
	    //defined on the prototype.
	    this._protocol = null;
	    this._href = "";
	    this._port = -1;
	    this._query = null;

	    this.auth = null;
	    this.slashes = null;
	    this.host = null;
	    this.hostname = null;
	    this.hash = null;
	    this.search = null;
	    this.pathname = null;

	    this._prependSlash = false;
	}

	var querystring = require$$0$4;

	Url.queryString = querystring;

	Url.prototype.parse =
	function Url$parse(str, parseQueryString, hostDenotesSlash, disableAutoEscapeChars) {
	    if (typeof str !== "string") {
	        throw new TypeError("Parameter 'url' must be a string, not " +
	            typeof str);
	    }
	    var start = 0;
	    var end = str.length - 1;

	    //Trim leading and trailing ws
	    while (str.charCodeAt(start) <= 0x20 /*' '*/) start++;
	    while (str.charCodeAt(end) <= 0x20 /*' '*/) end--;

	    start = this._parseProtocol(str, start, end);

	    //Javascript doesn't have host
	    if (this._protocol !== "javascript") {
	        start = this._parseHost(str, start, end, hostDenotesSlash);
	        var proto = this._protocol;
	        if (!this.hostname &&
	            (this.slashes || (proto && !slashProtocols[proto]))) {
	            this.hostname = this.host = "";
	        }
	    }

	    if (start <= end) {
	        var ch = str.charCodeAt(start);

	        if (ch === 0x2F /*'/'*/ || ch === 0x5C /*'\'*/) {
	            this._parsePath(str, start, end, disableAutoEscapeChars);
	        }
	        else if (ch === 0x3F /*'?'*/) {
	            this._parseQuery(str, start, end, disableAutoEscapeChars);
	        }
	        else if (ch === 0x23 /*'#'*/) {
	          this._parseHash(str, start, end, disableAutoEscapeChars);
	        }
	        else if (this._protocol !== "javascript") {
	            this._parsePath(str, start, end, disableAutoEscapeChars);
	        }
	        else { //For javascript the pathname is just the rest of it
	            this.pathname = str.slice(start, end + 1 );
	        }

	    }

	    if (!this.pathname && this.hostname &&
	        this._slashProtocols[this._protocol]) {
	        this.pathname = "/";
	    }

	    if (parseQueryString) {
	        var search = this.search;
	        if (search == null) {
	            search = this.search = "";
	        }
	        if (search.charCodeAt(0) === 0x3F /*'?'*/) {
	            search = search.slice(1);
	        }
	        //This calls a setter function, there is no .query data property
	        this.query = Url.queryString.parse(search);
	    }
	};

	Url.prototype.resolve = function Url$resolve(relative) {
	    return this.resolveObject(Url.parse(relative, false, true)).format();
	};

	Url.prototype.format = function Url$format() {
	    var auth = this.auth || "";

	    if (auth) {
	        auth = encodeURIComponent(auth);
	        auth = auth.replace(/%3A/i, ":");
	        auth += "@";
	    }

	    var protocol = this.protocol || "";
	    var pathname = this.pathname || "";
	    var hash = this.hash || "";
	    var search = this.search || "";
	    var query = "";
	    var hostname = this.hostname || "";
	    var port = this.port || "";
	    var host = false;
	    var scheme = "";

	    //Cache the result of the getter function
	    var q = this.query;
	    if (q && typeof q === "object") {
	        query = Url.queryString.stringify(q);
	    }

	    if (!search) {
	        search = query ? "?" + query : "";
	    }

	    if (protocol && protocol.charCodeAt(protocol.length - 1) !== 0x3A /*':'*/)
	        protocol += ":";

	    if (this.host) {
	        host = auth + this.host;
	    }
	    else if (hostname) {
	        var ip6 = hostname.indexOf(":") > -1;
	        if (ip6) hostname = "[" + hostname + "]";
	        host = auth + hostname + (port ? ":" + port : "");
	    }

	    var slashes = this.slashes ||
	        ((!protocol ||
	        slashProtocols[protocol]) && host !== false);


	    if (protocol) scheme = protocol + (slashes ? "//" : "");
	    else if (slashes) scheme = "//";

	    if (slashes && pathname && pathname.charCodeAt(0) !== 0x2F /*'/'*/) {
	        pathname = "/" + pathname;
	    }
	    if (search && search.charCodeAt(0) !== 0x3F /*'?'*/)
	        search = "?" + search;
	    if (hash && hash.charCodeAt(0) !== 0x23 /*'#'*/)
	        hash = "#" + hash;

	    pathname = escapePathName(pathname);
	    search = escapeSearch(search);

	    return scheme + (host === false ? "" : host) + pathname + search + hash;
	};

	Url.prototype.resolveObject = function Url$resolveObject(relative) {
	    if (typeof relative === "string")
	        relative = Url.parse(relative, false, true);

	    var result = this._clone();

	    // hash is always overridden, no matter what.
	    // even href="" will remove it.
	    result.hash = relative.hash;

	    // if the relative url is empty, then there"s nothing left to do here.
	    if (!relative.href) {
	        result._href = "";
	        return result;
	    }

	    // hrefs like //foo/bar always cut to the protocol.
	    if (relative.slashes && !relative._protocol) {
	        relative._copyPropsTo(result, true);

	        if (slashProtocols[result._protocol] &&
	            result.hostname && !result.pathname) {
	            result.pathname = "/";
	        }
	        result._href = "";
	        return result;
	    }

	    if (relative._protocol && relative._protocol !== result._protocol) {
	        // if it"s a known url protocol, then changing
	        // the protocol does weird things
	        // first, if it"s not file:, then we MUST have a host,
	        // and if there was a path
	        // to begin with, then we MUST have a path.
	        // if it is file:, then the host is dropped,
	        // because that"s known to be hostless.
	        // anything else is assumed to be absolute.
	        if (!slashProtocols[relative._protocol]) {
	            relative._copyPropsTo(result, false);
	            result._href = "";
	            return result;
	        }

	        result._protocol = relative._protocol;
	        if (!relative.host && relative._protocol !== "javascript") {
	            var relPath = (relative.pathname || "").split("/");
	            while (relPath.length && !(relative.host = relPath.shift()));
	            if (!relative.host) relative.host = "";
	            if (!relative.hostname) relative.hostname = "";
	            if (relPath[0] !== "") relPath.unshift("");
	            if (relPath.length < 2) relPath.unshift("");
	            result.pathname = relPath.join("/");
	        } else {
	            result.pathname = relative.pathname;
	        }

	        result.search = relative.search;
	        result.host = relative.host || "";
	        result.auth = relative.auth;
	        result.hostname = relative.hostname || relative.host;
	        result._port = relative._port;
	        result.slashes = result.slashes || relative.slashes;
	        result._href = "";
	        return result;
	    }

	    var isSourceAbs =
	        (result.pathname && result.pathname.charCodeAt(0) === 0x2F /*'/'*/);
	    var isRelAbs = (
	            relative.host ||
	            (relative.pathname &&
	            relative.pathname.charCodeAt(0) === 0x2F /*'/'*/)
	        );
	    var mustEndAbs = (isRelAbs || isSourceAbs ||
	                        (result.host && relative.pathname));

	    var removeAllDots = mustEndAbs;

	    var srcPath = result.pathname && result.pathname.split("/") || [];
	    var relPath = relative.pathname && relative.pathname.split("/") || [];
	    var psychotic = result._protocol && !slashProtocols[result._protocol];

	    // if the url is a non-slashed url, then relative
	    // links like ../.. should be able
	    // to crawl up to the hostname, as well.  This is strange.
	    // result.protocol has already been set by now.
	    // Later on, put the first path part into the host field.
	    if (psychotic) {
	        result.hostname = "";
	        result._port = -1;
	        if (result.host) {
	            if (srcPath[0] === "") srcPath[0] = result.host;
	            else srcPath.unshift(result.host);
	        }
	        result.host = "";
	        if (relative._protocol) {
	            relative.hostname = "";
	            relative._port = -1;
	            if (relative.host) {
	                if (relPath[0] === "") relPath[0] = relative.host;
	                else relPath.unshift(relative.host);
	            }
	            relative.host = "";
	        }
	        mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
	    }

	    if (isRelAbs) {
	        // it"s absolute.
	        result.host = relative.host ?
	            relative.host : result.host;
	        result.hostname = relative.hostname ?
	            relative.hostname : result.hostname;
	        result.search = relative.search;
	        srcPath = relPath;
	        // fall through to the dot-handling below.
	    } else if (relPath.length) {
	        // it"s relative
	        // throw away the existing file, and take the new path instead.
	        if (!srcPath) srcPath = [];
	        srcPath.pop();
	        srcPath = srcPath.concat(relPath);
	        result.search = relative.search;
	    } else if (relative.search) {
	        // just pull out the search.
	        // like href="?foo".
	        // Put this after the other two cases because it simplifies the booleans
	        if (psychotic) {
	            result.hostname = result.host = srcPath.shift();
	            //occationaly the auth can get stuck only in host
	            //this especialy happens in cases like
	            //url.resolveObject("mailto:local1@domain1", "local2@domain2")
	            var authInHost = result.host && result.host.indexOf("@") > 0 ?
	                result.host.split("@") : false;
	            if (authInHost) {
	                result.auth = authInHost.shift();
	                result.host = result.hostname = authInHost.shift();
	            }
	        }
	        result.search = relative.search;
	        result._href = "";
	        return result;
	    }

	    if (!srcPath.length) {
	        // no path at all.  easy.
	        // we"ve already handled the other stuff above.
	        result.pathname = null;
	        result._href = "";
	        return result;
	    }

	    // if a url ENDs in . or .., then it must get a trailing slash.
	    // however, if it ends in anything else non-slashy,
	    // then it must NOT get a trailing slash.
	    var last = srcPath.slice(-1)[0];
	    var hasTrailingSlash = (
	        (result.host || relative.host) && (last === "." || last === "..") ||
	        last === "");

	    // strip single dots, resolve double dots to parent dir
	    // if the path tries to go above the root, `up` ends up > 0
	    var up = 0;
	    for (var i = srcPath.length; i >= 0; i--) {
	        last = srcPath[i];
	        if (last === ".") {
	            srcPath.splice(i, 1);
	        } else if (last === "..") {
	            srcPath.splice(i, 1);
	            up++;
	        } else if (up) {
	            srcPath.splice(i, 1);
	            up--;
	        }
	    }

	    // if the path is allowed to go above the root, restore leading ..s
	    if (!mustEndAbs && !removeAllDots) {
	        for (; up--; up) {
	            srcPath.unshift("..");
	        }
	    }

	    if (mustEndAbs && srcPath[0] !== "" &&
	        (!srcPath[0] || srcPath[0].charCodeAt(0) !== 0x2F /*'/'*/)) {
	        srcPath.unshift("");
	    }

	    if (hasTrailingSlash && (srcPath.join("/").substr(-1) !== "/")) {
	        srcPath.push("");
	    }

	    var isAbsolute = srcPath[0] === "" ||
	        (srcPath[0] && srcPath[0].charCodeAt(0) === 0x2F /*'/'*/);

	    // put the host back
	    if (psychotic) {
	        result.hostname = result.host = isAbsolute ? "" :
	            srcPath.length ? srcPath.shift() : "";
	        //occationaly the auth can get stuck only in host
	        //this especialy happens in cases like
	        //url.resolveObject("mailto:local1@domain1", "local2@domain2")
	        var authInHost = result.host && result.host.indexOf("@") > 0 ?
	            result.host.split("@") : false;
	        if (authInHost) {
	            result.auth = authInHost.shift();
	            result.host = result.hostname = authInHost.shift();
	        }
	    }

	    mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	    if (mustEndAbs && !isAbsolute) {
	        srcPath.unshift("");
	    }

	    result.pathname = srcPath.length === 0 ? null : srcPath.join("/");
	    result.auth = relative.auth || result.auth;
	    result.slashes = result.slashes || relative.slashes;
	    result._href = "";
	    return result;
	};

	var punycode = requirePunycode();
	Url.prototype._hostIdna = function Url$_hostIdna(hostname) {
	    // IDNA Support: Returns a punycoded representation of "domain".
	    // It only converts parts of the domain name that
	    // have non-ASCII characters, i.e. it doesn't matter if
	    // you call it with a domain that already is ASCII-only.
	    return punycode.toASCII(hostname);
	};

	var escapePathName = Url.prototype._escapePathName =
	function Url$_escapePathName(pathname) {
	    if (!containsCharacter2(pathname, 0x23 /*'#'*/, 0x3F /*'?'*/)) {
	        return pathname;
	    }
	    //Avoid closure creation to keep this inlinable
	    return _escapePath(pathname);
	};

	var escapeSearch = Url.prototype._escapeSearch =
	function Url$_escapeSearch(search) {
	    if (!containsCharacter2(search, 0x23 /*'#'*/, -1)) return search;
	    //Avoid closure creation to keep this inlinable
	    return _escapeSearch(search);
	};

	Url.prototype._parseProtocol = function Url$_parseProtocol(str, start, end) {
	    var doLowerCase = false;
	    var protocolCharacters = this._protocolCharacters;

	    for (var i = start; i <= end; ++i) {
	        var ch = str.charCodeAt(i);

	        if (ch === 0x3A /*':'*/) {
	            var protocol = str.slice(start, i);
	            if (doLowerCase) protocol = protocol.toLowerCase();
	            this._protocol = protocol;
	            return i + 1;
	        }
	        else if (protocolCharacters[ch] === 1) {
	            if (ch < 0x61 /*'a'*/)
	                doLowerCase = true;
	        }
	        else {
	            return start;
	        }

	    }
	    return start;
	};

	Url.prototype._parseAuth = function Url$_parseAuth(str, start, end, decode) {
	    var auth = str.slice(start, end + 1);
	    if (decode) {
	        auth = decodeURIComponent(auth);
	    }
	    this.auth = auth;
	};

	Url.prototype._parsePort = function Url$_parsePort(str, start, end) {
	    //Internal format is integer for more efficient parsing
	    //and for efficient trimming of leading zeros
	    var port = 0;
	    //Distinguish between :0 and : (no port number at all)
	    var hadChars = false;
	    var validPort = true;

	    for (var i = start; i <= end; ++i) {
	        var ch = str.charCodeAt(i);

	        if (0x30 /*'0'*/ <= ch && ch <= 0x39 /*'9'*/) {
	            port = (10 * port) + (ch - 0x30 /*'0'*/);
	            hadChars = true;
	        }
	        else {
	            validPort = false;
	            if (ch === 0x5C/*'\'*/ || ch === 0x2F/*'/'*/) {
	                validPort = true;
	            }
	            break;
	        }

	    }
	    if ((port === 0 && !hadChars) || !validPort) {
	        if (!validPort) {
	            this._port = -2;
	        }
	        return 0;
	    }

	    this._port = port;
	    return i - start;
	};

	Url.prototype._parseHost =
	function Url$_parseHost(str, start, end, slashesDenoteHost) {
	    var hostEndingCharacters = this._hostEndingCharacters;
	    var first = str.charCodeAt(start);
	    var second = str.charCodeAt(start + 1);
	    if ((first === 0x2F /*'/'*/ || first === 0x5C /*'\'*/) &&
	        (second === 0x2F /*'/'*/ || second === 0x5C /*'\'*/)) {
	        this.slashes = true;

	        //The string starts with //
	        if (start === 0) {
	            //The string is just "//"
	            if (end < 2) return start;
	            //If slashes do not denote host and there is no auth,
	            //there is no host when the string starts with //
	            var hasAuth =
	                containsCharacter(str, 0x40 /*'@'*/, 2, hostEndingCharacters);
	            if (!hasAuth && !slashesDenoteHost) {
	                this.slashes = null;
	                return start;
	            }
	        }
	        //There is a host that starts after the //
	        start += 2;
	    }
	    //If there is no slashes, there is no hostname if
	    //1. there was no protocol at all
	    else if (!this._protocol ||
	        //2. there was a protocol that requires slashes
	        //e.g. in 'http:asd' 'asd' is not a hostname
	        slashProtocols[this._protocol]
	    ) {
	        return start;
	    }

	    var doLowerCase = false;
	    var idna = false;
	    var hostNameStart = start;
	    var hostNameEnd = end;
	    var portLength = 0;
	    var charsAfterDot = 0;
	    var authNeedsDecoding = false;

	    var j = -1;

	    //Find the last occurrence of an @-sign until hostending character is met
	    //also mark if decoding is needed for the auth portion
	    for (var i = start; i <= end; ++i) {
	        var ch = str.charCodeAt(i);

	        if (ch === 0x40 /*'@'*/) {
	            j = i;
	        }
	        //This check is very, very cheap. Unneeded decodeURIComponent is very
	        //very expensive
	        else if (ch === 0x25 /*'%'*/) {
	            authNeedsDecoding = true;
	        }
	        else if (hostEndingCharacters[ch] === 1) {
	            break;
	        }
	    }

	    //@-sign was found at index j, everything to the left from it
	    //is auth part
	    if (j > -1) {
	        this._parseAuth(str, start, j - 1, authNeedsDecoding);
	        //hostname starts after the last @-sign
	        start = hostNameStart = j + 1;
	    }

	    //Host name is starting with a [
	    if (str.charCodeAt(start) === 0x5B /*'['*/) {
	        for (var i = start + 1; i <= end; ++i) {
	            var ch = str.charCodeAt(i);

	            //Assume valid IP6 is between the brackets
	            if (ch === 0x5D /*']'*/) {
	                if (str.charCodeAt(i + 1) === 0x3A /*':'*/) {
	                    portLength = this._parsePort(str, i + 2, end) + 1;
	                }
	                var hostname = str.slice(start + 1, i).toLowerCase();
	                this.hostname = hostname;
	                this.host = this._port > 0 ?
	                    "[" + hostname + "]:" + this._port :
	                    "[" + hostname + "]";
	                this.pathname = "/";
	                return i + portLength + 1;
	            }
	        }
	        //Empty hostname, [ starts a path
	        return start;
	    }

	    for (var i = start; i <= end; ++i) {
	        if (charsAfterDot > 62) {
	            this.hostname = this.host = str.slice(start, i);
	            return i;
	        }
	        var ch = str.charCodeAt(i);

	        if (ch === 0x3A /*':'*/) {
	            portLength = this._parsePort(str, i + 1, end) + 1;
	            hostNameEnd = i - 1;
	            break;
	        }
	        else if (ch < 0x61 /*'a'*/) {
	            if (ch === 0x2E /*'.'*/) {
	                //Node.js ignores this error
	                /*
	                if (lastCh === DOT || lastCh === -1) {
	                    this.hostname = this.host = "";
	                    return start;
	                }
	                */
	                charsAfterDot = -1;
	            }
	            else if (0x41 /*'A'*/ <= ch && ch <= 0x5A /*'Z'*/) {
	                doLowerCase = true;
	            }
	            //Valid characters other than ASCII letters -, _, +, 0-9
	            else if (!(ch === 0x2D /*'-'*/ ||
	                       ch === 0x5F /*'_'*/ ||
	                       ch === 0x2B /*'+'*/ ||
	                       (0x30 /*'0'*/ <= ch && ch <= 0x39 /*'9'*/))
	                ) {
	                if (hostEndingCharacters[ch] === 0 &&
	                    this._noPrependSlashHostEnders[ch] === 0) {
	                    this._prependSlash = true;
	                }
	                hostNameEnd = i - 1;
	                break;
	            }
	        }
	        else if (ch >= 0x7B /*'{'*/) {
	            if (ch <= 0x7E /*'~'*/) {
	                if (this._noPrependSlashHostEnders[ch] === 0) {
	                    this._prependSlash = true;
	                }
	                hostNameEnd = i - 1;
	                break;
	            }
	            idna = true;
	        }
	        charsAfterDot++;
	    }

	    //Node.js ignores this error
	    /*
	    if (lastCh === DOT) {
	        hostNameEnd--;
	    }
	    */

	    if (hostNameEnd + 1 !== start &&
	        hostNameEnd - hostNameStart <= 256) {
	        var hostname = str.slice(hostNameStart, hostNameEnd + 1);
	        if (doLowerCase) hostname = hostname.toLowerCase();
	        if (idna) hostname = this._hostIdna(hostname);
	        this.hostname = hostname;
	        this.host = this._port > 0 ? hostname + ":" + this._port : hostname;
	    }

	    return hostNameEnd + 1 + portLength;

	};

	Url.prototype._copyPropsTo = function Url$_copyPropsTo(input, noProtocol) {
	    if (!noProtocol) {
	        input._protocol = this._protocol;
	    }
	    input._href = this._href;
	    input._port = this._port;
	    input._prependSlash = this._prependSlash;
	    input.auth = this.auth;
	    input.slashes = this.slashes;
	    input.host = this.host;
	    input.hostname = this.hostname;
	    input.hash = this.hash;
	    input.search = this.search;
	    input.pathname = this.pathname;
	};

	Url.prototype._clone = function Url$_clone() {
	    var ret = new Url();
	    ret._protocol = this._protocol;
	    ret._href = this._href;
	    ret._port = this._port;
	    ret._prependSlash = this._prependSlash;
	    ret.auth = this.auth;
	    ret.slashes = this.slashes;
	    ret.host = this.host;
	    ret.hostname = this.hostname;
	    ret.hash = this.hash;
	    ret.search = this.search;
	    ret.pathname = this.pathname;
	    return ret;
	};

	Url.prototype._getComponentEscaped =
	function Url$_getComponentEscaped(str, start, end, isAfterQuery) {
	    var cur = start;
	    var i = start;
	    var ret = "";
	    var autoEscapeMap = isAfterQuery ?
	        this._afterQueryAutoEscapeMap : this._autoEscapeMap;
	    for (; i <= end; ++i) {
	        var ch = str.charCodeAt(i);
	        var escaped = autoEscapeMap[ch];

	        if (escaped !== "" && escaped !== undefined) {
	            if (cur < i) ret += str.slice(cur, i);
	            ret += escaped;
	            cur = i + 1;
	        }
	    }
	    if (cur < i + 1) ret += str.slice(cur, i);
	    return ret;
	};

	Url.prototype._parsePath =
	function Url$_parsePath(str, start, end, disableAutoEscapeChars) {
	    var pathStart = start;
	    var pathEnd = end;
	    var escape = false;
	    var autoEscapeCharacters = this._autoEscapeCharacters;
	    var prePath = this._port === -2 ? "/:" : "";

	    for (var i = start; i <= end; ++i) {
	        var ch = str.charCodeAt(i);
	        if (ch === 0x23 /*'#'*/) {
	          this._parseHash(str, i, end, disableAutoEscapeChars);
	            pathEnd = i - 1;
	            break;
	        }
	        else if (ch === 0x3F /*'?'*/) {
	            this._parseQuery(str, i, end, disableAutoEscapeChars);
	            pathEnd = i - 1;
	            break;
	        }
	        else if (!disableAutoEscapeChars && !escape && autoEscapeCharacters[ch] === 1) {
	            escape = true;
	        }
	    }

	    if (pathStart > pathEnd) {
	        this.pathname = prePath === "" ? "/" : prePath;
	        return;
	    }

	    var path;
	    if (escape) {
	        path = this._getComponentEscaped(str, pathStart, pathEnd, false);
	    }
	    else {
	        path = str.slice(pathStart, pathEnd + 1);
	    }
	    this.pathname = prePath === ""
	        ? (this._prependSlash ? "/" + path : path)
	        : prePath + path;
	};

	Url.prototype._parseQuery = function Url$_parseQuery(str, start, end, disableAutoEscapeChars) {
	    var queryStart = start;
	    var queryEnd = end;
	    var escape = false;
	    var autoEscapeCharacters = this._autoEscapeCharacters;

	    for (var i = start; i <= end; ++i) {
	        var ch = str.charCodeAt(i);

	        if (ch === 0x23 /*'#'*/) {
	            this._parseHash(str, i, end, disableAutoEscapeChars);
	            queryEnd = i - 1;
	            break;
	        }
	        else if (!disableAutoEscapeChars && !escape && autoEscapeCharacters[ch] === 1) {
	            escape = true;
	        }
	    }

	    if (queryStart > queryEnd) {
	        this.search = "";
	        return;
	    }

	    var query;
	    if (escape) {
	        query = this._getComponentEscaped(str, queryStart, queryEnd, true);
	    }
	    else {
	        query = str.slice(queryStart, queryEnd + 1);
	    }
	    this.search = query;
	};

	Url.prototype._parseHash = function Url$_parseHash(str, start, end, disableAutoEscapeChars) {
	    if (start > end) {
	        this.hash = "";
	        return;
	    }

	    this.hash = disableAutoEscapeChars ?
	        str.slice(start, end + 1) : this._getComponentEscaped(str, start, end, true);
	};

	Object.defineProperty(Url.prototype, "port", {
	    get: function() {
	        if (this._port >= 0) {
	            return ("" + this._port);
	        }
	        return null;
	    },
	    set: function(v) {
	        if (v == null) {
	            this._port = -1;
	        }
	        else {
	            this._port = parseInt(v, 10);
	        }
	    }
	});

	Object.defineProperty(Url.prototype, "query", {
	    get: function() {
	        var query = this._query;
	        if (query != null) {
	            return query;
	        }
	        var search = this.search;

	        if (search) {
	            if (search.charCodeAt(0) === 0x3F /*'?'*/) {
	                search = search.slice(1);
	            }
	            if (search !== "") {
	                this._query = search;
	                return search;
	            }
	        }
	        return search;
	    },
	    set: function(v) {
	        this._query = v;
	    }
	});

	Object.defineProperty(Url.prototype, "path", {
	    get: function() {
	        var p = this.pathname || "";
	        var s = this.search || "";
	        if (p || s) {
	            return p + s;
	        }
	        return (p == null && s) ? ("/" + s) : null;
	    },
	    set: function() {}
	});

	Object.defineProperty(Url.prototype, "protocol", {
	    get: function() {
	        var proto = this._protocol;
	        return proto ? proto + ":" : proto;
	    },
	    set: function(v) {
	        if (typeof v === "string") {
	            var end = v.length - 1;
	            if (v.charCodeAt(end) === 0x3A /*':'*/) {
	                this._protocol = v.slice(0, end);
	            }
	            else {
	                this._protocol = v;
	            }
	        }
	        else if (v == null) {
	            this._protocol = null;
	        }
	    }
	});

	Object.defineProperty(Url.prototype, "href", {
	    get: function() {
	        var href = this._href;
	        if (!href) {
	            href = this._href = this.format();
	        }
	        return href;
	    },
	    set: function(v) {
	        this._href = v;
	    }
	});

	Url.parse = function Url$Parse(str, parseQueryString, hostDenotesSlash, disableAutoEscapeChars) {
	    if (str instanceof Url) return str;
	    var ret = new Url();
	    ret.parse(str, !!parseQueryString, !!hostDenotesSlash, !!disableAutoEscapeChars);
	    return ret;
	};

	Url.format = function Url$Format(obj) {
	    if (typeof obj === "string") {
	        obj = Url.parse(obj);
	    }
	    if (!(obj instanceof Url)) {
	        return Url.prototype.format.call(obj);
	    }
	    return obj.format();
	};

	Url.resolve = function Url$Resolve(source, relative) {
	    return Url.parse(source, false, true).resolve(relative);
	};

	Url.resolveObject = function Url$ResolveObject(source, relative) {
	    if (!source) return relative;
	    return Url.parse(source, false, true).resolveObject(relative);
	};

	function _escapePath(pathname) {
	    return pathname.replace(/[?#]/g, function(match) {
	        return encodeURIComponent(match);
	    });
	}

	function _escapeSearch(search) {
	    return search.replace(/#/g, function(match) {
	        return encodeURIComponent(match);
	    });
	}

	//Search `char1` (integer code for a character) in `string`
	//starting from `fromIndex` and ending at `string.length - 1`
	//or when a stop character is found
	function containsCharacter(string, char1, fromIndex, stopCharacterTable) {
	    var len = string.length;
	    for (var i = fromIndex; i < len; ++i) {
	        var ch = string.charCodeAt(i);

	        if (ch === char1) {
	            return true;
	        }
	        else if (stopCharacterTable[ch] === 1) {
	            return false;
	        }
	    }
	    return false;
	}

	//See if `char1` or `char2` (integer codes for characters)
	//is contained in `string`
	function containsCharacter2(string, char1, char2) {
	    for (var i = 0, len = string.length; i < len; ++i) {
	        var ch = string.charCodeAt(i);
	        if (ch === char1 || ch === char2) return true;
	    }
	    return false;
	}

	//Makes an array of 128 uint8's which represent boolean values.
	//Spec is an array of ascii code points or ascii code point ranges
	//ranges are expressed as [start, end]

	//Create a table with the characters 0x30-0x39 (decimals '0' - '9') and
	//0x7A (lowercaseletter 'z') as `true`:
	//
	//var a = makeAsciiTable([[0x30, 0x39], 0x7A]);
	//a[0x30]; //1
	//a[0x15]; //0
	//a[0x35]; //1
	function makeAsciiTable(spec) {
	    var ret = new Uint8Array(128);
	    spec.forEach(function(item){
	        if (typeof item === "number") {
	            ret[item] = 1;
	        }
	        else {
	            var start = item[0];
	            var end = item[1];
	            for (var j = start; j <= end; ++j) {
	                ret[j] = 1;
	            }
	        }
	    });

	    return ret;
	}


	var autoEscape = ["<", ">", "\"", "`", " ", "\r", "\n",
	    "\t", "{", "}", "|", "\\", "^", "`", "'"];

	var autoEscapeMap = new Array(128);



	for (var i = 0, len = autoEscapeMap.length; i < len; ++i) {
	    autoEscapeMap[i] = "";
	}

	for (var i = 0, len = autoEscape.length; i < len; ++i) {
	    var c = autoEscape[i];
	    var esc = encodeURIComponent(c);
	    if (esc === c) {
	        esc = escape(c);
	    }
	    autoEscapeMap[c.charCodeAt(0)] = esc;
	}
	var afterQueryAutoEscapeMap = autoEscapeMap.slice();
	autoEscapeMap[0x5C /*'\'*/] = "/";

	var slashProtocols = Url.prototype._slashProtocols = {
	    http: true,
	    https: true,
	    gopher: true,
	    file: true,
	    ftp: true,

	    "http:": true,
	    "https:": true,
	    "gopher:": true,
	    "file:": true,
	    "ftp:": true
	};

	Url.prototype._protocolCharacters = makeAsciiTable([
	    [0x61 /*'a'*/, 0x7A /*'z'*/],
	    [0x41 /*'A'*/, 0x5A /*'Z'*/],
	    0x2E /*'.'*/, 0x2B /*'+'*/, 0x2D /*'-'*/
	]);

	Url.prototype._hostEndingCharacters = makeAsciiTable([
	    0x23 /*'#'*/, 0x3F /*'?'*/, 0x2F /*'/'*/, 0x5C /*'\'*/
	]);

	Url.prototype._autoEscapeCharacters = makeAsciiTable(
	    autoEscape.map(function(v) {
	        return v.charCodeAt(0);
	    })
	);

	//If these characters end a host name, the path will not be prepended a /
	Url.prototype._noPrependSlashHostEnders = makeAsciiTable(
	    [
	        "<", ">", "'", "`", " ", "\r",
	        "\n", "\t", "{", "}", "|",
	        "^", "`", "\"", "%", ";"
	    ].map(function(v) {
	        return v.charCodeAt(0);
	    })
	);

	Url.prototype._autoEscapeMap = autoEscapeMap;
	Url.prototype._afterQueryAutoEscapeMap = afterQueryAutoEscapeMap;

	urlparser = Url;

	Url.replace = function Url$Replace() {
	    require.cache.url = {
	        exports: Url
	    };
	};
	return urlparser;
}

var URLSearchParams$1 = {};

var hasRequiredURLSearchParams;

function requireURLSearchParams () {
	if (hasRequiredURLSearchParams) return URLSearchParams$1;
	hasRequiredURLSearchParams = 1;
	Object.defineProperty(URLSearchParams$1, "__esModule", { value: true });
	URLSearchParams$1.PonyfillURLSearchParams = void 0;
	const tslib_1 = require$$0;
	const fast_querystring_1 = tslib_1.__importDefault(requireLib());
	function isURLSearchParams(value) {
	    return value?.entries != null;
	}
	class PonyfillURLSearchParams {
	    constructor(init) {
	        if (init) {
	            if (typeof init === 'string') {
	                this.params = fast_querystring_1.default.parse(init);
	            }
	            else if (Array.isArray(init)) {
	                this.params = {};
	                for (const [key, value] of init) {
	                    this.params[key] = value;
	                }
	            }
	            else if (isURLSearchParams(init)) {
	                this.params = {};
	                for (const [key, value] of init.entries()) {
	                    this.params[key] = value;
	                }
	            }
	            else {
	                this.params = init;
	            }
	        }
	        else {
	            this.params = {};
	        }
	    }
	    append(name, value) {
	        const existingValue = this.params[name];
	        const finalValue = existingValue ? `${existingValue},${value}` : value;
	        this.params[name] = finalValue;
	    }
	    delete(name) {
	        delete this.params[name];
	    }
	    get(name) {
	        const value = this.params[name];
	        if (Array.isArray(value)) {
	            return value[0] || null;
	        }
	        return value || null;
	    }
	    getAll(name) {
	        const value = this.params[name];
	        if (!Array.isArray(value)) {
	            return value ? [value] : [];
	        }
	        return value;
	    }
	    has(name) {
	        return name in this.params;
	    }
	    set(name, value) {
	        this.params[name] = value;
	    }
	    sort() {
	        const sortedKeys = Object.keys(this.params).sort();
	        const sortedParams = {};
	        for (const key of sortedKeys) {
	            sortedParams[key] = this.params[key];
	        }
	        this.params = sortedParams;
	    }
	    toString() {
	        return fast_querystring_1.default.stringify(this.params);
	    }
	    *keys() {
	        for (const key in this.params) {
	            yield key;
	        }
	    }
	    *entries() {
	        for (const key of this.keys()) {
	            const value = this.params[key];
	            if (Array.isArray(value)) {
	                for (const item of value) {
	                    yield [key, item];
	                }
	            }
	            else {
	                yield [key, value];
	            }
	        }
	    }
	    *values() {
	        for (const [, value] of this) {
	            yield value;
	        }
	    }
	    [Symbol.iterator]() {
	        return this.entries();
	    }
	    forEach(callback) {
	        for (const [key, value] of this) {
	            callback(value, key, this);
	        }
	    }
	    get size() {
	        return Object.keys(this.params).length;
	    }
	}
	URLSearchParams$1.PonyfillURLSearchParams = PonyfillURLSearchParams;
	return URLSearchParams$1;
}

var hasRequiredURL;

function requireURL () {
	if (hasRequiredURL) return URL$2;
	hasRequiredURL = 1;
	Object.defineProperty(URL$2, "__esModule", { value: true });
	URL$2.PonyfillURL = void 0;
	const tslib_1 = require$$0;
	const buffer_1 = require$$1;
	const crypto_1 = require$$2;
	const fast_querystring_1 = tslib_1.__importDefault(requireLib());
	const fast_url_parser_1 = tslib_1.__importDefault(requireUrlparser());
	const URLSearchParams_js_1 = requireURLSearchParams();
	fast_url_parser_1.default.queryString = fast_querystring_1.default;
	class PonyfillURL extends fast_url_parser_1.default {
	    constructor(url, base) {
	        super();
	        if (url.startsWith('data:')) {
	            this.protocol = 'data:';
	            this.pathname = url.slice('data:'.length);
	            return;
	        }
	        this.parse(url, false);
	        if (base) {
	            const baseParsed = typeof base === 'string' ? new PonyfillURL(base) : base;
	            this.protocol = this.protocol || baseParsed.protocol;
	            this.host = this.host || baseParsed.host;
	            this.pathname = this.pathname || baseParsed.pathname;
	        }
	    }
	    get origin() {
	        return `${this.protocol}//${this.host}`;
	    }
	    get searchParams() {
	        if (!this._searchParams) {
	            this._searchParams = new URLSearchParams_js_1.PonyfillURLSearchParams(this.query);
	        }
	        return this._searchParams;
	    }
	    get username() {
	        return this.auth?.split(':')[0] || '';
	    }
	    set username(value) {
	        this.auth = `${value}:${this.password}`;
	    }
	    get password() {
	        return this.auth?.split(':')[1] || '';
	    }
	    set password(value) {
	        this.auth = `${this.username}:${value}`;
	    }
	    toString() {
	        return this.format();
	    }
	    toJSON() {
	        return this.toString();
	    }
	    static createObjectURL(blob) {
	        const blobUrl = `blob:whatwgnode:${(0, crypto_1.randomUUID)()}`;
	        this.blobRegistry.set(blobUrl, blob);
	        return blobUrl;
	    }
	    static resolveObjectURL(url) {
	        if (!this.blobRegistry.has(url)) {
	            URL.revokeObjectURL(url);
	        }
	        else {
	            this.blobRegistry.delete(url);
	        }
	    }
	    static getBlobFromURL(url) {
	        return (this.blobRegistry.get(url) || (0, buffer_1.resolveObjectURL)(url));
	    }
	}
	URL$2.PonyfillURL = PonyfillURL;
	PonyfillURL.blobRegistry = new Map();
	return URL$2;
}

var hasRequiredFetchNodeHttp;

function requireFetchNodeHttp () {
	if (hasRequiredFetchNodeHttp) return fetchNodeHttp;
	hasRequiredFetchNodeHttp = 1;
	Object.defineProperty(fetchNodeHttp, "__esModule", { value: true });
	fetchNodeHttp.fetchNodeHttp = void 0;
	const http_1 = require$$0$3;
	const https_1 = require$$1$1;
	const stream_1 = require$$0$1;
	const zlib_1 = require$$3;
	const AbortError_js_1 = requireAbortError();
	const Request_js_1 = requireRequest();
	const Response_js_1 = requireResponse();
	const URL_js_1 = requireURL();
	const utils_js_1 = requireUtils();
	function getRequestFnForProtocol(url) {
	    if (url.startsWith('http:')) {
	        return http_1.request;
	    }
	    else if (url.startsWith('https:')) {
	        return https_1.request;
	    }
	    throw new Error(`Unsupported protocol: ${url.split(':')[0] || url}`);
	}
	function fetchNodeHttp$1(fetchRequest) {
	    return new Promise((resolve, reject) => {
	        try {
	            const requestFn = getRequestFnForProtocol(fetchRequest.url);
	            const nodeReadable = (fetchRequest.body != null
	                ? (0, utils_js_1.isNodeReadable)(fetchRequest.body)
	                    ? fetchRequest.body
	                    : stream_1.Readable.from(fetchRequest.body)
	                : null);
	            const headersSerializer = fetchRequest.headersSerializer || utils_js_1.getHeadersObj;
	            const nodeHeaders = headersSerializer(fetchRequest.headers);
	            const nodeRequest = requestFn(fetchRequest.url, {
	                method: fetchRequest.method,
	                headers: nodeHeaders,
	                signal: fetchRequest['_signal'] ?? undefined,
	                agent: fetchRequest.agent,
	            });
	            nodeRequest.once('response', nodeResponse => {
	                let responseBody = nodeResponse;
	                const contentEncoding = nodeResponse.headers['content-encoding'];
	                switch (contentEncoding) {
	                    case 'x-gzip':
	                    case 'gzip':
	                        responseBody = nodeResponse.pipe((0, zlib_1.createGunzip)());
	                        break;
	                    case 'x-deflate':
	                    case 'deflate':
	                        responseBody = nodeResponse.pipe((0, zlib_1.createInflate)());
	                        break;
	                    case 'br':
	                        responseBody = nodeResponse.pipe((0, zlib_1.createBrotliDecompress)());
	                        break;
	                }
	                if (nodeResponse.headers.location) {
	                    if (fetchRequest.redirect === 'error') {
	                        const redirectError = new Error('Redirects are not allowed');
	                        reject(redirectError);
	                        nodeResponse.resume();
	                        return;
	                    }
	                    if (fetchRequest.redirect === 'follow') {
	                        const redirectedUrl = new URL_js_1.PonyfillURL(nodeResponse.headers.location, fetchRequest.url);
	                        const redirectResponse$ = fetchNodeHttp$1(new Request_js_1.PonyfillRequest(redirectedUrl, fetchRequest));
	                        resolve(redirectResponse$.then(redirectResponse => {
	                            redirectResponse.redirected = true;
	                            return redirectResponse;
	                        }));
	                        nodeResponse.resume();
	                        return;
	                    }
	                }
	                if (responseBody === nodeResponse) {
	                    responseBody = nodeResponse.pipe(new stream_1.PassThrough());
	                    responseBody.on('pause', () => {
	                        nodeResponse.pause();
	                    });
	                    responseBody.on('resume', () => {
	                        nodeResponse.resume();
	                    });
	                    responseBody.on('close', () => {
	                        nodeResponse.destroy();
	                    });
	                    fetchRequest['_signal']?.addEventListener('abort', () => {
	                        if (!nodeResponse.destroyed) {
	                            responseBody.emit('error', new AbortError_js_1.PonyfillAbortError());
	                        }
	                    });
	                }
	                nodeResponse.once('error', reject);
	                const ponyfillResponse = new Response_js_1.PonyfillResponse(responseBody, {
	                    status: nodeResponse.statusCode,
	                    statusText: nodeResponse.statusMessage,
	                    headers: nodeResponse.headers,
	                    url: fetchRequest.url,
	                });
	                resolve(ponyfillResponse);
	            });
	            nodeRequest.once('error', reject);
	            if (nodeReadable) {
	                nodeReadable.pipe(nodeRequest);
	            }
	            else {
	                nodeRequest.end();
	            }
	        }
	        catch (e) {
	            reject(e);
	        }
	    });
	}
	fetchNodeHttp.fetchNodeHttp = fetchNodeHttp$1;
	return fetchNodeHttp;
}

var hasRequiredFetch;

function requireFetch () {
	if (hasRequiredFetch) return fetch$1;
	hasRequiredFetch = 1;
	Object.defineProperty(fetch$1, "__esModule", { value: true });
	fetch$1.fetchPonyfill = void 0;
	const fs_1 = require$$0$5;
	const url_1 = require$$1$2;
	const fetchCurl_js_1 = requireFetchCurl();
	const fetchNodeHttp_js_1 = requireFetchNodeHttp();
	const Request_js_1 = requireRequest();
	const Response_js_1 = requireResponse();
	const URL_js_1 = requireURL();
	const utils_js_1 = requireUtils();
	const BASE64_SUFFIX = ';base64';
	function getResponseForFile(url) {
	    const path = (0, url_1.fileURLToPath)(url);
	    const readable = (0, fs_1.createReadStream)(path);
	    return new Response_js_1.PonyfillResponse(readable);
	}
	function getResponseForDataUri(url) {
	    const [mimeType = 'text/plain', ...datas] = url.substring(5).split(',');
	    const data = decodeURIComponent(datas.join(','));
	    if (mimeType.endsWith(BASE64_SUFFIX)) {
	        const buffer = Buffer.from(data, 'base64url');
	        const realMimeType = mimeType.slice(0, -BASE64_SUFFIX.length);
	        return new Response_js_1.PonyfillResponse(buffer, {
	            status: 200,
	            statusText: 'OK',
	            headers: {
	                'content-type': realMimeType,
	            },
	        });
	    }
	    return new Response_js_1.PonyfillResponse(data, {
	        status: 200,
	        statusText: 'OK',
	        headers: {
	            'content-type': mimeType,
	        },
	    });
	}
	function getResponseForBlob(url) {
	    const blob = URL_js_1.PonyfillURL.getBlobFromURL(url);
	    if (!blob) {
	        throw new TypeError('Invalid Blob URL');
	    }
	    return new Response_js_1.PonyfillResponse(blob, {
	        status: 200,
	        headers: {
	            'content-type': blob.type,
	            'content-length': blob.size.toString(),
	        },
	    });
	}
	function isURL(obj) {
	    return obj != null && obj.href != null;
	}
	function fetchPonyfill(info, init) {
	    if (typeof info === 'string' || isURL(info)) {
	        const ponyfillRequest = new Request_js_1.PonyfillRequest(info, init);
	        return fetchPonyfill(ponyfillRequest);
	    }
	    const fetchRequest = info;
	    if (fetchRequest.url.startsWith('data:')) {
	        const response = getResponseForDataUri(fetchRequest.url);
	        return (0, utils_js_1.fakePromise)(response);
	    }
	    if (fetchRequest.url.startsWith('file:')) {
	        const response = getResponseForFile(fetchRequest.url);
	        return (0, utils_js_1.fakePromise)(response);
	    }
	    if (fetchRequest.url.startsWith('blob:')) {
	        const response = getResponseForBlob(fetchRequest.url);
	        return (0, utils_js_1.fakePromise)(response);
	    }
	    if (globalThis.libcurl) {
	        return (0, fetchCurl_js_1.fetchCurl)(fetchRequest);
	    }
	    return (0, fetchNodeHttp_js_1.fetchNodeHttp)(fetchRequest);
	}
	fetch$1.fetchPonyfill = fetchPonyfill;
	return fetch$1;
}

var TextEncoderDecoder = {};

var hasRequiredTextEncoderDecoder;

function requireTextEncoderDecoder () {
	if (hasRequiredTextEncoderDecoder) return TextEncoderDecoder;
	hasRequiredTextEncoderDecoder = 1;
	Object.defineProperty(TextEncoderDecoder, "__esModule", { value: true });
	TextEncoderDecoder.PonyfillBtoa = TextEncoderDecoder.PonyfillTextDecoder = TextEncoderDecoder.PonyfillTextEncoder = void 0;
	const utils_js_1 = requireUtils();
	class PonyfillTextEncoder {
	    constructor(encoding = 'utf-8') {
	        this.encoding = encoding;
	    }
	    encode(input) {
	        return Buffer.from(input, this.encoding);
	    }
	    encodeInto(source, destination) {
	        const buffer = this.encode(source);
	        const copied = buffer.copy(destination);
	        return {
	            read: copied,
	            written: copied,
	        };
	    }
	}
	TextEncoderDecoder.PonyfillTextEncoder = PonyfillTextEncoder;
	class PonyfillTextDecoder {
	    constructor(encoding = 'utf-8', options) {
	        this.encoding = encoding;
	        this.fatal = false;
	        this.ignoreBOM = false;
	        if (options) {
	            this.fatal = options.fatal || false;
	            this.ignoreBOM = options.ignoreBOM || false;
	        }
	    }
	    decode(input) {
	        if (Buffer.isBuffer(input)) {
	            return input.toString(this.encoding);
	        }
	        if ((0, utils_js_1.isArrayBufferView)(input)) {
	            return Buffer.from(input.buffer, input.byteOffset, input.byteLength).toString(this.encoding);
	        }
	        return Buffer.from(input).toString(this.encoding);
	    }
	}
	TextEncoderDecoder.PonyfillTextDecoder = PonyfillTextDecoder;
	function PonyfillBtoa(input) {
	    return Buffer.from(input, 'binary').toString('base64');
	}
	TextEncoderDecoder.PonyfillBtoa = PonyfillBtoa;
	return TextEncoderDecoder;
}

var hasRequiredCjs;

function requireCjs () {
	if (hasRequiredCjs) return cjs;
	hasRequiredCjs = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.URLSearchParams = exports.URL = exports.btoa = exports.TextDecoder = exports.TextEncoder = exports.Blob = exports.FormData = exports.File = exports.ReadableStream = exports.Response = exports.Request = exports.Body = exports.Headers = exports.fetch = void 0;
		var fetch_js_1 = requireFetch();
		Object.defineProperty(exports, "fetch", { enumerable: true, get: function () { return fetch_js_1.fetchPonyfill; } });
		var Headers_js_1 = requireHeaders();
		Object.defineProperty(exports, "Headers", { enumerable: true, get: function () { return Headers_js_1.PonyfillHeaders; } });
		var Body_js_1 = requireBody();
		Object.defineProperty(exports, "Body", { enumerable: true, get: function () { return Body_js_1.PonyfillBody; } });
		var Request_js_1 = requireRequest();
		Object.defineProperty(exports, "Request", { enumerable: true, get: function () { return Request_js_1.PonyfillRequest; } });
		var Response_js_1 = requireResponse();
		Object.defineProperty(exports, "Response", { enumerable: true, get: function () { return Response_js_1.PonyfillResponse; } });
		var ReadableStream_js_1 = requireReadableStream();
		Object.defineProperty(exports, "ReadableStream", { enumerable: true, get: function () { return ReadableStream_js_1.PonyfillReadableStream; } });
		var File_js_1 = requireFile();
		Object.defineProperty(exports, "File", { enumerable: true, get: function () { return File_js_1.PonyfillFile; } });
		var FormData_js_1 = requireFormData();
		Object.defineProperty(exports, "FormData", { enumerable: true, get: function () { return FormData_js_1.PonyfillFormData; } });
		var Blob_js_1 = requireBlob();
		Object.defineProperty(exports, "Blob", { enumerable: true, get: function () { return Blob_js_1.PonyfillBlob; } });
		var TextEncoderDecoder_js_1 = requireTextEncoderDecoder();
		Object.defineProperty(exports, "TextEncoder", { enumerable: true, get: function () { return TextEncoderDecoder_js_1.PonyfillTextEncoder; } });
		Object.defineProperty(exports, "TextDecoder", { enumerable: true, get: function () { return TextEncoderDecoder_js_1.PonyfillTextDecoder; } });
		Object.defineProperty(exports, "btoa", { enumerable: true, get: function () { return TextEncoderDecoder_js_1.PonyfillBtoa; } });
		var URL_js_1 = requireURL();
		Object.defineProperty(exports, "URL", { enumerable: true, get: function () { return URL_js_1.PonyfillURL; } });
		var URLSearchParams_js_1 = requireURLSearchParams();
		Object.defineProperty(exports, "URLSearchParams", { enumerable: true, get: function () { return URLSearchParams_js_1.PonyfillURLSearchParams; } }); 
	} (cjs));
	return cjs;
}

const shouldSkipPonyfill$1 = shouldSkipPonyfill$2;

var createNodePonyfill$1 = function createNodePonyfill(opts = {}) {
  const ponyfills = {};
  
  // We call this previously to patch `Bun`
  if (!ponyfills.URLPattern) {
    const urlPatternModule = requireUrlpatternPolyfill();
    ponyfills.URLPattern = urlPatternModule.URLPattern;
  }

  if (shouldSkipPonyfill$1()) {
    return globalThis;
  }

  const newNodeFetch = requireCjs();

  ponyfills.fetch = newNodeFetch.fetch;
  ponyfills.Request = newNodeFetch.Request;
  ponyfills.Response = newNodeFetch.Response;
  ponyfills.Headers = newNodeFetch.Headers;
  ponyfills.FormData = newNodeFetch.FormData;
  ponyfills.ReadableStream = newNodeFetch.ReadableStream;

  ponyfills.URL = newNodeFetch.URL;
  ponyfills.URLSearchParams = newNodeFetch.URLSearchParams;

  ponyfills.WritableStream = globalThis.WritableStream;
  ponyfills.TransformStream = globalThis.TransformStream;

  if (!ponyfills.WritableStream) {
    const streamsWeb = require$$3$1;
    ponyfills.WritableStream = streamsWeb.WritableStream;
    ponyfills.TransformStream = streamsWeb.TransformStream;
  }

  ponyfills.Blob = newNodeFetch.Blob;
  ponyfills.File = newNodeFetch.File;
  ponyfills.crypto = globalThis.crypto;
  ponyfills.btoa = newNodeFetch.btoa;
  ponyfills.TextEncoder = newNodeFetch.TextEncoder;
  ponyfills.TextDecoder = newNodeFetch.TextDecoder;

  if (opts.formDataLimits) {
    ponyfills.Body = class Body extends newNodeFetch.Body {
      constructor(body, userOpts) {
        super(body, {
          formDataLimits: opts.formDataLimits,
          ...userOpts,
        });
      }
    };
    ponyfills.Request = class Request extends newNodeFetch.Request {
      constructor(input, userOpts) {
        super(input, {
          formDataLimits: opts.formDataLimits,
          ...userOpts,
        });
      }
    };
    ponyfills.Response = class Response extends newNodeFetch.Response {
      constructor(body, userOpts) {
        super(body, {
          formDataLimits: opts.formDataLimits,
          ...userOpts,
        });
      }
    };
  }

  if (!ponyfills.crypto) {
    const cryptoModule = require$$2;
    ponyfills.crypto = cryptoModule.webcrypto;
  }

  return ponyfills;
};

const createNodePonyfill = createNodePonyfill$1;
const shouldSkipPonyfill = shouldSkipPonyfill$2;
const ponyfills = createNodePonyfill();

if (!shouldSkipPonyfill()) {
  try {
    const nodelibcurlName = 'node-libcurl';
    globalThis.libcurl = globalThis.libcurl || commonjsRequire(nodelibcurlName);
  } catch (e) { }
}

var fetch = nodePonyfill.fetch = ponyfills.fetch;
var Headers$1 = nodePonyfill.Headers = ponyfills.Headers;
var Request = nodePonyfill.Request = ponyfills.Request;
var Response$1 = nodePonyfill.Response = ponyfills.Response;
var FormData = nodePonyfill.FormData = ponyfills.FormData;
var ReadableStream$1 = nodePonyfill.ReadableStream = ponyfills.ReadableStream;
var WritableStream = nodePonyfill.WritableStream = ponyfills.WritableStream;
var TransformStream = nodePonyfill.TransformStream = ponyfills.TransformStream;
var Blob = nodePonyfill.Blob = ponyfills.Blob;
var File = nodePonyfill.File = ponyfills.File;
var crypto$1 = nodePonyfill.crypto = ponyfills.crypto;
var btoa = nodePonyfill.btoa = ponyfills.btoa;
var TextEncoder = nodePonyfill.TextEncoder = ponyfills.TextEncoder;
var TextDecoder$1 = nodePonyfill.TextDecoder = ponyfills.TextDecoder;
var URLPattern$1 = nodePonyfill.URLPattern = ponyfills.URLPattern;
var URL$1 = nodePonyfill.URL = ponyfills.URL;
var URLSearchParams = nodePonyfill.URLSearchParams = ponyfills.URLSearchParams;

var createFetch = nodePonyfill.createFetch = createNodePonyfill;

const DefaultFetchAPI = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    Blob,
    File,
    FormData,
    Headers: Headers$1,
    ReadableStream: ReadableStream$1,
    Request,
    Response: Response$1,
    TextDecoder: TextDecoder$1,
    TextEncoder,
    TransformStream,
    URL: URL$1,
    URLPattern: URLPattern$1,
    URLSearchParams,
    WritableStream,
    btoa,
    createFetch,
    crypto: crypto$1,
    default: nodePonyfill,
    fetch
}, [nodePonyfill]);

function isAsyncIterable(body) {
    return (body != null && typeof body === 'object' && typeof body[Symbol.asyncIterator] === 'function');
}
function getPort(nodeRequest) {
    if (nodeRequest.socket?.localPort) {
        return nodeRequest.socket?.localPort;
    }
    const hostInHeader = nodeRequest.headers?.[':authority'] || nodeRequest.headers?.host;
    const portInHeader = hostInHeader?.split(':')?.[1];
    if (portInHeader) {
        return portInHeader;
    }
    return 80;
}
function getHostnameWithPort(nodeRequest) {
    if (nodeRequest.headers?.[':authority']) {
        return nodeRequest.headers?.[':authority'];
    }
    if (nodeRequest.headers?.host) {
        return nodeRequest.headers?.host;
    }
    const port = getPort(nodeRequest);
    if (nodeRequest.hostname) {
        return nodeRequest.hostname + ':' + port;
    }
    const localIp = nodeRequest.socket?.localAddress;
    if (localIp && !localIp?.includes('::') && !localIp?.includes('ffff')) {
        return `${localIp}:${port}`;
    }
    return 'localhost';
}
function buildFullUrl(nodeRequest) {
    const hostnameWithPort = getHostnameWithPort(nodeRequest);
    const protocol = nodeRequest.protocol || (nodeRequest.socket?.encrypted ? 'https' : 'http');
    const endpoint = nodeRequest.originalUrl || nodeRequest.url || '/graphql';
    return `${protocol}://${hostnameWithPort}${endpoint}`;
}
function isRequestBody(body) {
    const stringTag = body[Symbol.toStringTag];
    if (typeof body === 'string' ||
        stringTag === 'Uint8Array' ||
        stringTag === 'Blob' ||
        stringTag === 'FormData' ||
        stringTag === 'URLSearchParams' ||
        isAsyncIterable(body)) {
        return true;
    }
    return false;
}
class ServerAdapterRequestAbortSignal extends EventTarget {
    constructor() {
        super(...arguments);
        this.aborted = false;
        this._onabort = null;
    }
    throwIfAborted() {
        if (this.aborted) {
            throw this.reason;
        }
    }
    sendAbort() {
        this.reason = new DOMException('This operation was aborted', 'AbortError');
        this.aborted = true;
        this.dispatchEvent(new Event('abort'));
    }
    get onabort() {
        return this._onabort;
    }
    set onabort(value) {
        this._onabort = value;
        if (value) {
            this.addEventListener('abort', value);
        }
        else {
            this.removeEventListener('abort', value);
        }
    }
}
let bunNodeCompatModeWarned = false;
const nodeRequestResponseMap = new WeakMap();
function normalizeNodeRequest(nodeRequest, RequestCtor) {
    const rawRequest = nodeRequest.raw || nodeRequest.req || nodeRequest;
    let fullUrl = buildFullUrl(rawRequest);
    if (nodeRequest.query) {
        const url = new URL$1(fullUrl);
        for (const key in nodeRequest.query) {
            url.searchParams.set(key, nodeRequest.query[key]);
        }
        fullUrl = url.toString();
    }
    let signal;
    const nodeResponse = nodeRequestResponseMap.get(nodeRequest);
    nodeRequestResponseMap.delete(nodeRequest);
    if (nodeResponse?.once) {
        let sendAbortSignal;
        // If ponyfilled
        if (RequestCtor !== globalThis.Request) {
            signal = new ServerAdapterRequestAbortSignal();
            sendAbortSignal = () => signal.sendAbort();
        }
        else {
            const controller = new AbortController();
            signal = controller.signal;
            sendAbortSignal = () => controller.abort();
        }
        const closeEventListener = () => {
            if (signal && !signal.aborted) {
                rawRequest.aborted = true;
                sendAbortSignal();
            }
        };
        nodeResponse.once('error', closeEventListener);
        nodeResponse.once('close', closeEventListener);
        nodeResponse.once('finish', () => {
            nodeResponse.removeListener('close', closeEventListener);
        });
    }
    if (nodeRequest.method === 'GET' || nodeRequest.method === 'HEAD') {
        return new RequestCtor(fullUrl, {
            method: nodeRequest.method,
            headers: nodeRequest.headers,
            signal,
        });
    }
    /**
     * Some Node server frameworks like Serverless Express sends a dummy object with body but as a Buffer not string
     * so we do those checks to see is there something we can use directly as BodyInit
     * because the presence of body means the request stream is already consumed and,
     * rawRequest cannot be used as BodyInit/ReadableStream by Fetch API in this case.
     */
    const maybeParsedBody = nodeRequest.body;
    if (maybeParsedBody != null && Object.keys(maybeParsedBody).length > 0) {
        if (isRequestBody(maybeParsedBody)) {
            return new RequestCtor(fullUrl, {
                method: nodeRequest.method,
                headers: nodeRequest.headers,
                body: maybeParsedBody,
                signal,
            });
        }
        const request = new RequestCtor(fullUrl, {
            method: nodeRequest.method,
            headers: nodeRequest.headers,
            signal,
        });
        if (!request.headers.get('content-type')?.includes('json')) {
            request.headers.set('content-type', 'application/json; charset=utf-8');
        }
        return new Proxy(request, {
            get: (target, prop, receiver) => {
                switch (prop) {
                    case 'json':
                        return async () => maybeParsedBody;
                    case 'text':
                        return async () => JSON.stringify(maybeParsedBody);
                    default:
                        return Reflect.get(target, prop, receiver);
                }
            },
        });
    }
    // Temporary workaround for a bug in Bun Node compat mode
    if (globalThis.process?.versions?.bun && isReadable(rawRequest)) {
        if (!bunNodeCompatModeWarned) {
            bunNodeCompatModeWarned = true;
            console.warn(`You use Bun Node compatibility mode, which is not recommended!
It will affect your performance. Please check our Bun integration recipe, and avoid using 'http' for your server implementation.`);
        }
        return new RequestCtor(fullUrl, {
            method: nodeRequest.method,
            headers: nodeRequest.headers,
            duplex: 'half',
            body: new ReadableStream({
                start(controller) {
                    rawRequest.on('data', chunk => {
                        controller.enqueue(chunk);
                    });
                    rawRequest.on('error', e => {
                        controller.error(e);
                    });
                    rawRequest.on('end', () => {
                        controller.close();
                    });
                },
                cancel(e) {
                    rawRequest.destroy(e);
                },
            }),
            signal,
        });
    }
    // perf: instead of spreading the object, we can just pass it as is and it performs better
    return new RequestCtor(fullUrl, {
        method: nodeRequest.method,
        headers: nodeRequest.headers,
        body: rawRequest,
        duplex: 'half',
        signal,
    });
}
function isReadable(stream) {
    return stream.read != null;
}
function isNodeRequest(request) {
    return isReadable(request);
}
function isServerResponse(stream) {
    // Check all used functions are defined
    return (stream != null &&
        stream.setHeader != null &&
        stream.end != null &&
        stream.once != null &&
        stream.write != null);
}
function isFetchEvent(event) {
    return event != null && event.request != null && event.respondWith != null;
}
function configureSocket(rawRequest) {
    rawRequest?.socket?.setTimeout?.(0);
    rawRequest?.socket?.setNoDelay?.(true);
    rawRequest?.socket?.setKeepAlive?.(true);
}
function endResponse(serverResponse) {
    // @ts-expect-error Avoid arguments adaptor trampoline https://v8.dev/blog/adaptor-frame
    serverResponse.end(null, null, null);
}
async function sendAsyncIterable(serverResponse, asyncIterable) {
    for await (const chunk of asyncIterable) {
        if (!serverResponse
            // @ts-expect-error http and http2 writes are actually compatible
            .write(chunk)) {
            break;
        }
    }
    endResponse(serverResponse);
}
function sendNodeResponse(fetchResponse, serverResponse, nodeRequest) {
    if (serverResponse.closed || serverResponse.destroyed || serverResponse.writableEnded) {
        return;
    }
    if (!fetchResponse) {
        serverResponse.statusCode = 404;
        serverResponse.end();
        return;
    }
    serverResponse.statusCode = fetchResponse.status;
    serverResponse.statusMessage = fetchResponse.statusText;
    let setCookiesSet = false;
    fetchResponse.headers.forEach((value, key) => {
        if (key === 'set-cookie') {
            if (setCookiesSet) {
                return;
            }
            setCookiesSet = true;
            const setCookies = fetchResponse.headers.getSetCookie?.();
            if (setCookies) {
                serverResponse.setHeader('set-cookie', setCookies);
                return;
            }
        }
        serverResponse.setHeader(key, value);
    });
    // Optimizations for node-fetch
    const bufOfRes = fetchResponse._buffer;
    if (bufOfRes) {
        // @ts-expect-error http and http2 writes are actually compatible
        serverResponse.write(bufOfRes);
        endResponse(serverResponse);
        return;
    }
    // Other fetch implementations
    const fetchBody = fetchResponse.body;
    if (fetchBody == null) {
        endResponse(serverResponse);
        return;
    }
    if (fetchBody[Symbol.toStringTag] === 'Uint8Array') {
        serverResponse
            // @ts-expect-error http and http2 writes are actually compatible
            .write(fetchBody);
        endResponse(serverResponse);
        return;
    }
    configureSocket(nodeRequest);
    if (isReadable(fetchBody)) {
        serverResponse.once('close', () => {
            fetchBody.destroy();
        });
        fetchBody.pipe(serverResponse);
        return;
    }
    if (isAsyncIterable(fetchBody)) {
        return sendAsyncIterable(serverResponse, fetchBody);
    }
}
function isRequestInit(val) {
    return (val != null &&
        typeof val === 'object' &&
        ('body' in val ||
            'cache' in val ||
            'credentials' in val ||
            'headers' in val ||
            'integrity' in val ||
            'keepalive' in val ||
            'method' in val ||
            'mode' in val ||
            'redirect' in val ||
            'referrer' in val ||
            'referrerPolicy' in val ||
            'signal' in val ||
            'window' in val));
}
// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#copying_accessors
function completeAssign(...args) {
    const [target, ...sources] = args.filter(arg => arg != null && typeof arg === 'object');
    sources.forEach(source => {
        // modified Object.keys to Object.getOwnPropertyNames
        // because Object.keys only returns enumerable properties
        const descriptors = Object.getOwnPropertyNames(source).reduce((descriptors, key) => {
            descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
            return descriptors;
        }, {});
        // By default, Object.assign copies enumerable Symbols, too
        Object.getOwnPropertySymbols(source).forEach(sym => {
            const descriptor = Object.getOwnPropertyDescriptor(source, sym);
            if (descriptor.enumerable) {
                descriptors[sym] = descriptor;
            }
        });
        Object.defineProperties(target, descriptors);
    });
    return target;
}
function isPromise(val) {
    return val?.then != null;
}
function iterateAsyncVoid(iterable, callback) {
    const iterator = iterable[Symbol.iterator]();
    let stopEarlyFlag = false;
    function stopEarlyFn() {
        stopEarlyFlag = true;
    }
    function iterate() {
        const { done: endOfIterator, value } = iterator.next();
        if (endOfIterator) {
            return;
        }
        const result$ = callback(value, stopEarlyFn);
        if (isPromise(result$)) {
            return result$.then(() => {
                if (stopEarlyFlag) {
                    return;
                }
                return iterate();
            });
        }
        if (stopEarlyFlag) {
            return;
        }
        return iterate();
    }
    return iterate();
}
function handleErrorFromRequestHandler(error, ResponseCtor) {
    return new ResponseCtor(error.stack || error.message || error.toString(), {
        status: error.status || 500,
    });
}
function isolateObject(originalCtx, waitUntilPromises) {
    if (originalCtx == null) {
        return {};
    }
    const extraProps = {};
    const deletedProps = new Set();
    return new Proxy(originalCtx, {
        get(originalCtx, prop) {
            if (waitUntilPromises != null && prop === 'waitUntil') {
                return function waitUntil(promise) {
                    waitUntilPromises.push(promise.catch(err => console.error(err)));
                };
            }
            const extraPropVal = extraProps[prop];
            if (extraPropVal != null) {
                if (typeof extraPropVal === 'function') {
                    return extraPropVal.bind(extraProps);
                }
                return extraPropVal;
            }
            if (deletedProps.has(prop)) {
                return undefined;
            }
            return originalCtx[prop];
        },
        set(_originalCtx, prop, value) {
            extraProps[prop] = value;
            return true;
        },
        has(originalCtx, prop) {
            if (waitUntilPromises != null && prop === 'waitUntil') {
                return true;
            }
            if (deletedProps.has(prop)) {
                return false;
            }
            if (prop in extraProps) {
                return true;
            }
            return prop in originalCtx;
        },
        defineProperty(_originalCtx, prop, descriptor) {
            return Reflect.defineProperty(extraProps, prop, descriptor);
        },
        deleteProperty(_originalCtx, prop) {
            if (prop in extraProps) {
                return Reflect.deleteProperty(extraProps, prop);
            }
            deletedProps.add(prop);
            return true;
        },
        ownKeys(originalCtx) {
            const extraKeys = Reflect.ownKeys(extraProps);
            const originalKeys = Reflect.ownKeys(originalCtx);
            const deletedKeys = Array.from(deletedProps);
            const allKeys = new Set(extraKeys.concat(originalKeys.filter(keys => !deletedKeys.includes(keys))));
            if (waitUntilPromises != null) {
                allKeys.add('waitUntil');
            }
            return Array.from(allKeys);
        },
        getOwnPropertyDescriptor(originalCtx, prop) {
            if (prop in extraProps) {
                return Reflect.getOwnPropertyDescriptor(extraProps, prop);
            }
            if (deletedProps.has(prop)) {
                return undefined;
            }
            return Reflect.getOwnPropertyDescriptor(originalCtx, prop);
        },
    });
}
function createDeferredPromise() {
    let resolveFn;
    let rejectFn;
    const promise = new Promise(function deferredPromiseExecutor(resolve, reject) {
        resolveFn = resolve;
        rejectFn = reject;
    });
    return {
        promise,
        get resolve() {
            return resolveFn;
        },
        get reject() {
            return rejectFn;
        },
    };
}
function handleAbortSignalAndPromiseResponse(response$, abortSignal) {
    if (isPromise(response$) && abortSignal) {
        const deferred$ = createDeferredPromise();
        abortSignal.addEventListener('abort', function abortSignalFetchErrorHandler() {
            deferred$.reject(abortSignal.reason);
        });
        response$
            .then(function fetchSuccessHandler(res) {
            deferred$.resolve(res);
        })
            .catch(function fetchErrorHandler(err) {
            deferred$.reject(err);
        });
        return deferred$.promise;
    }
    return response$;
}

function isUWSResponse(res) {
    return !!res.onData;
}
function getRequestFromUWSRequest({ req, res, fetchAPI, signal }) {
    let body;
    const method = req.getMethod();
    if (method !== 'get' && method !== 'head') {
        body = new fetchAPI.ReadableStream({});
        const readable = body.readable;
        signal.addEventListener('abort', () => {
            readable.push(null);
        });
        res.onData(function (ab, isLast) {
            const chunk = Buffer.from(ab, 0, ab.byteLength);
            readable.push(Buffer.from(chunk));
            if (isLast) {
                readable.push(null);
            }
        });
    }
    const headers = new fetchAPI.Headers();
    req.forEach((key, value) => {
        headers.append(key, value);
    });
    let url = `http://localhost${req.getUrl()}`;
    const query = req.getQuery();
    if (query) {
        url += `?${query}`;
    }
    return new fetchAPI.Request(url, {
        method,
        headers,
        body: body,
        signal,
    });
}
async function forwardResponseBodyToUWSResponse(uwsResponse, fetchResponse, signal) {
    for await (const chunk of fetchResponse.body) {
        if (signal.aborted) {
            return;
        }
        uwsResponse.cork(() => {
            uwsResponse.write(chunk);
        });
    }
    uwsResponse.cork(() => {
        uwsResponse.end();
    });
}
function sendResponseToUwsOpts(uwsResponse, fetchResponse, signal) {
    if (!fetchResponse) {
        uwsResponse.writeStatus('404 Not Found');
        uwsResponse.end();
        return;
    }
    const bufferOfRes = fetchResponse._buffer;
    if (signal.aborted) {
        return;
    }
    uwsResponse.cork(() => {
        uwsResponse.writeStatus(`${fetchResponse.status} ${fetchResponse.statusText}`);
        for (const [key, value] of fetchResponse.headers) {
            // content-length causes an error with Node.js's fetch
            if (key !== 'content-length') {
                if (key === 'set-cookie') {
                    const setCookies = fetchResponse.headers.getSetCookie?.();
                    if (setCookies) {
                        for (const setCookie of setCookies) {
                            uwsResponse.writeHeader(key, setCookie);
                        }
                        continue;
                    }
                }
                uwsResponse.writeHeader(key, value);
            }
        }
        if (bufferOfRes) {
            uwsResponse.end(bufferOfRes);
        }
    });
    if (bufferOfRes) {
        return;
    }
    if (!fetchResponse.body) {
        uwsResponse.end();
        return;
    }
    return forwardResponseBodyToUWSResponse(uwsResponse, fetchResponse, signal);
}

/* eslint-disable @typescript-eslint/ban-types */
async function handleWaitUntils(waitUntilPromises) {
    await Promise.allSettled(waitUntilPromises);
}
// Required for envs like nextjs edge runtime
function isRequestAccessible(serverContext) {
    try {
        return !!serverContext?.request;
    }
    catch {
        return false;
    }
}
const EMPTY_OBJECT = {};
function createServerAdapter(serverAdapterBaseObject, options) {
    const fetchAPI = {
        ...DefaultFetchAPI,
        ...options?.fetchAPI,
    };
    const givenHandleRequest = typeof serverAdapterBaseObject === 'function'
        ? serverAdapterBaseObject
        : serverAdapterBaseObject.handle;
    const onRequestHooks = [];
    const onResponseHooks = [];
    const handleRequest = onRequestHooks.length > 0 || onResponseHooks.length > 0
        ? function handleRequest(request, serverContext) {
            let requestHandler = givenHandleRequest;
            let response;
            if (onRequestHooks.length === 0) {
                return handleEarlyResponse();
            }
            let url = new Proxy(EMPTY_OBJECT, {
                get(_target, prop, _receiver) {
                    url = new fetchAPI.URL(request.url, 'http://localhost');
                    return Reflect.get(url, prop, url);
                },
            });
            const onRequestHooksIteration$ = iterateAsyncVoid(onRequestHooks, (onRequestHook, stopEarly) => onRequestHook({
                request,
                serverContext,
                fetchAPI,
                url,
                requestHandler,
                setRequestHandler(newRequestHandler) {
                    requestHandler = newRequestHandler;
                },
                endResponse(newResponse) {
                    response = newResponse;
                    if (newResponse) {
                        stopEarly();
                    }
                },
            }));
            function handleResponse(response) {
                if (onRequestHooks.length === 0) {
                    return response;
                }
                const onResponseHookPayload = {
                    request,
                    response,
                    serverContext,
                };
                const onResponseHooksIteration$ = iterateAsyncVoid(onResponseHooks, onResponseHook => onResponseHook(onResponseHookPayload));
                if (isPromise(onResponseHooksIteration$)) {
                    return onResponseHooksIteration$.then(() => response);
                }
                return response;
            }
            function handleEarlyResponse() {
                if (!response) {
                    const response$ = requestHandler(request, serverContext);
                    if (isPromise(response$)) {
                        return response$.then(handleResponse);
                    }
                    return handleResponse(response$);
                }
                return handleResponse(response);
            }
            if (isPromise(onRequestHooksIteration$)) {
                return onRequestHooksIteration$.then(handleEarlyResponse);
            }
            return handleEarlyResponse();
        }
        : givenHandleRequest;
    // TODO: Remove this on the next major version
    function handleNodeRequest(nodeRequest, ...ctx) {
        const serverContext = ctx.length > 1 ? completeAssign(...ctx) : ctx[0] || {};
        const request = normalizeNodeRequest(nodeRequest, fetchAPI.Request);
        return handleRequest(request, serverContext);
    }
    function handleNodeRequestAndResponse(nodeRequest, nodeResponseOrContainer, ...ctx) {
        const nodeResponse = nodeResponseOrContainer.raw || nodeResponseOrContainer;
        nodeRequestResponseMap.set(nodeRequest, nodeResponse);
        return handleNodeRequest(nodeRequest, ...ctx);
    }
    function requestListener(nodeRequest, serverResponse, ...ctx) {
        const waitUntilPromises = [];
        const defaultServerContext = {
            req: nodeRequest,
            res: serverResponse,
            waitUntil(cb) {
                waitUntilPromises.push(cb.catch(err => console.error(err)));
            },
        };
        nodeRequestResponseMap.set(nodeRequest, serverResponse);
        let response$;
        try {
            response$ = handleNodeRequest(nodeRequest, defaultServerContext, ...ctx);
        }
        catch (err) {
            response$ = handleErrorFromRequestHandler(err, fetchAPI.Response);
        }
        if (isPromise(response$)) {
            return response$
                .catch((e) => handleErrorFromRequestHandler(e, fetchAPI.Response))
                .then(response => sendNodeResponse(response, serverResponse, nodeRequest))
                .catch(err => {
                console.error(`Unexpected error while handling request: ${err.message || err}`);
            });
        }
        try {
            return sendNodeResponse(response$, serverResponse, nodeRequest);
        }
        catch (err) {
            console.error(`Unexpected error while handling request: ${err.message || err}`);
        }
    }
    function handleUWS(res, req, ...ctx) {
        const waitUntilPromises = [];
        const defaultServerContext = {
            res,
            req,
            waitUntil(cb) {
                waitUntilPromises.push(cb.catch(err => console.error(err)));
            },
        };
        const filteredCtxParts = ctx.filter(partCtx => partCtx != null);
        const serverContext = filteredCtxParts.length > 0
            ? completeAssign(defaultServerContext, ...ctx)
            : defaultServerContext;
        const signal = new ServerAdapterRequestAbortSignal();
        const originalResEnd = res.end.bind(res);
        let resEnded = false;
        res.end = function (data) {
            resEnded = true;
            return originalResEnd(data);
        };
        const originalOnAborted = res.onAborted.bind(res);
        originalOnAborted(function () {
            signal.sendAbort();
        });
        res.onAborted = function (cb) {
            signal.addEventListener('abort', cb);
        };
        const request = getRequestFromUWSRequest({
            req,
            res,
            fetchAPI,
            signal,
        });
        let response$;
        try {
            response$ = handleRequest(request, serverContext);
        }
        catch (err) {
            response$ = handleErrorFromRequestHandler(err, fetchAPI.Response);
        }
        if (isPromise(response$)) {
            return response$
                .catch((e) => handleErrorFromRequestHandler(e, fetchAPI.Response))
                .then(response => {
                if (!signal.aborted && !resEnded) {
                    return sendResponseToUwsOpts(res, response, signal);
                }
            })
                .catch(err => {
                console.error(`Unexpected error while handling request: \n${err.stack || err.message || err}`);
            });
        }
        try {
            if (!signal.aborted && !resEnded) {
                return sendResponseToUwsOpts(res, response$, signal);
            }
        }
        catch (err) {
            console.error(`Unexpected error while handling request: \n${err.stack || err.message || err}`);
        }
    }
    function handleEvent(event, ...ctx) {
        if (!event.respondWith || !event.request) {
            throw new TypeError(`Expected FetchEvent, got ${event}`);
        }
        const filteredCtxParts = ctx.filter(partCtx => partCtx != null);
        const serverContext = filteredCtxParts.length > 0
            ? completeAssign({}, event, ...filteredCtxParts)
            : isolateObject(event);
        const response$ = handleRequest(event.request, serverContext);
        event.respondWith(response$);
    }
    function handleRequestWithWaitUntil(request, ...ctx) {
        const filteredCtxParts = ctx.filter(partCtx => partCtx != null);
        let waitUntilPromises;
        const serverContext = filteredCtxParts.length > 1
            ? completeAssign({}, ...filteredCtxParts)
            : isolateObject(filteredCtxParts[0], filteredCtxParts[0] == null || filteredCtxParts[0].waitUntil == null
                ? (waitUntilPromises = [])
                : undefined);
        const response$ = handleRequest(request, serverContext);
        if (waitUntilPromises?.length) {
            return handleWaitUntils(waitUntilPromises).then(() => response$);
        }
        return response$;
    }
    const fetchFn = (input, ...maybeCtx) => {
        if (typeof input === 'string' || 'href' in input) {
            const [initOrCtx, ...restOfCtx] = maybeCtx;
            if (isRequestInit(initOrCtx)) {
                const request = new fetchAPI.Request(input, initOrCtx);
                const res$ = handleRequestWithWaitUntil(request, ...restOfCtx);
                return handleAbortSignalAndPromiseResponse(res$, initOrCtx?.signal);
            }
            const request = new fetchAPI.Request(input);
            return handleRequestWithWaitUntil(request, ...maybeCtx);
        }
        const res$ = handleRequestWithWaitUntil(input, ...maybeCtx);
        return handleAbortSignalAndPromiseResponse(res$, input._signal);
    };
    const genericRequestHandler = (input, ...maybeCtx) => {
        // If it is a Node request
        const [initOrCtxOrRes, ...restOfCtx] = maybeCtx;
        if (isNodeRequest(input)) {
            if (!isServerResponse(initOrCtxOrRes)) {
                throw new TypeError(`Expected ServerResponse, got ${initOrCtxOrRes}`);
            }
            return requestListener(input, initOrCtxOrRes, ...restOfCtx);
        }
        if (isUWSResponse(input)) {
            return handleUWS(input, initOrCtxOrRes, ...restOfCtx);
        }
        if (isServerResponse(initOrCtxOrRes)) {
            throw new TypeError('Got Node response without Node request');
        }
        // Is input a container object over Request?
        if (isRequestAccessible(input)) {
            // Is it FetchEvent?
            if (isFetchEvent(input)) {
                return handleEvent(input, ...maybeCtx);
            }
            // In this input is also the context
            return handleRequestWithWaitUntil(input.request, input, ...maybeCtx);
        }
        // Or is it Request itself?
        // Then ctx is present and it is the context
        return fetchFn(input, ...maybeCtx);
    };
    const adapterObj = {
        handleRequest,
        fetch: fetchFn,
        handleNodeRequest,
        handleNodeRequestAndResponse,
        requestListener,
        handleEvent,
        handleUWS,
        handle: genericRequestHandler,
    };
    const serverAdapter = new Proxy(genericRequestHandler, {
        // It should have all the attributes of the handler function and the server instance
        has: (_, prop) => {
            return (prop in adapterObj ||
                prop in genericRequestHandler ||
                (serverAdapterBaseObject && prop in serverAdapterBaseObject));
        },
        get: (_, prop) => {
            const adapterProp = adapterObj[prop];
            if (adapterProp) {
                if (adapterProp.bind) {
                    return adapterProp.bind(adapterObj);
                }
                return adapterProp;
            }
            const handleProp = genericRequestHandler[prop];
            if (handleProp) {
                if (handleProp.bind) {
                    return handleProp.bind(genericRequestHandler);
                }
                return handleProp;
            }
            if (serverAdapterBaseObject) {
                const serverAdapterBaseObjectProp = serverAdapterBaseObject[prop];
                if (serverAdapterBaseObjectProp) {
                    if (serverAdapterBaseObjectProp.bind) {
                        return function (...args) {
                            const returnedVal = serverAdapterBaseObject[prop](...args);
                            if (returnedVal === serverAdapterBaseObject) {
                                return serverAdapter;
                            }
                            return returnedVal;
                        };
                    }
                    return serverAdapterBaseObjectProp;
                }
            }
        },
        apply(_, __, args) {
            return genericRequestHandler(...args);
        },
    });
    return serverAdapter;
}

var picocolors = {exports: {}};

let tty = require$$0$6;

let isColorSupported =
	!("NO_COLOR" in process.env || process.argv.includes("--no-color")) &&
	("FORCE_COLOR" in process.env ||
		process.argv.includes("--color") ||
		process.platform === "win32" ||
		(tty.isatty(1) && process.env.TERM !== "dumb") ||
		"CI" in process.env);

let formatter =
	(open, close, replace = open) =>
	input => {
		let string = "" + input;
		let index = string.indexOf(close, open.length);
		return ~index
			? open + replaceClose(string, close, replace, index) + close
			: open + string + close
	};

let replaceClose = (string, close, replace, index) => {
	let start = string.substring(0, index) + replace;
	let end = string.substring(index + close.length);
	let nextIndex = end.indexOf(close);
	return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end
};

let createColors = (enabled = isColorSupported) => ({
	isColorSupported: enabled,
	reset: enabled ? s => `\x1b[0m${s}\x1b[0m` : String,
	bold: enabled ? formatter("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m") : String,
	dim: enabled ? formatter("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m") : String,
	italic: enabled ? formatter("\x1b[3m", "\x1b[23m") : String,
	underline: enabled ? formatter("\x1b[4m", "\x1b[24m") : String,
	inverse: enabled ? formatter("\x1b[7m", "\x1b[27m") : String,
	hidden: enabled ? formatter("\x1b[8m", "\x1b[28m") : String,
	strikethrough: enabled ? formatter("\x1b[9m", "\x1b[29m") : String,
	black: enabled ? formatter("\x1b[30m", "\x1b[39m") : String,
	red: enabled ? formatter("\x1b[31m", "\x1b[39m") : String,
	green: enabled ? formatter("\x1b[32m", "\x1b[39m") : String,
	yellow: enabled ? formatter("\x1b[33m", "\x1b[39m") : String,
	blue: enabled ? formatter("\x1b[34m", "\x1b[39m") : String,
	magenta: enabled ? formatter("\x1b[35m", "\x1b[39m") : String,
	cyan: enabled ? formatter("\x1b[36m", "\x1b[39m") : String,
	white: enabled ? formatter("\x1b[37m", "\x1b[39m") : String,
	gray: enabled ? formatter("\x1b[90m", "\x1b[39m") : String,
	bgBlack: enabled ? formatter("\x1b[40m", "\x1b[49m") : String,
	bgRed: enabled ? formatter("\x1b[41m", "\x1b[49m") : String,
	bgGreen: enabled ? formatter("\x1b[42m", "\x1b[49m") : String,
	bgYellow: enabled ? formatter("\x1b[43m", "\x1b[49m") : String,
	bgBlue: enabled ? formatter("\x1b[44m", "\x1b[49m") : String,
	bgMagenta: enabled ? formatter("\x1b[45m", "\x1b[49m") : String,
	bgCyan: enabled ? formatter("\x1b[46m", "\x1b[49m") : String,
	bgWhite: enabled ? formatter("\x1b[47m", "\x1b[49m") : String,
});

picocolors.exports = createColors();
picocolors.exports.createColors = createColors;

var picocolorsExports = picocolors.exports;
const c$3 = /*@__PURE__*/getDefaultExportFromCjs(picocolorsExports);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const replacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    // Note &apos; was not defined in the HTML4 spec, and is not supported by very
    // old browsers like IE8, so a codepoint entity is used instead.
    "'": '&#39;',
};
/**
 * Replaces characters which have special meaning in HTML (&<>"') with escaped
 * HTML entities ("&amp;", "&lt;", etc.).
 */
const escapeHtml = (str) => str.replace(/[&<>"']/g, (char) => replacements[char]);

/// <reference lib="dom" />
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const getElementRenderer = ({ elementRenderers }, tagName, ceClass = customElements.get(tagName), attributes = new Map()) => {
    if (ceClass === undefined) {
        console.warn(`Custom element ${tagName} was not registered.`);
        return new FallbackRenderer(tagName);
    }
    // TODO(kschaaf): Should we implement a caching scheme, e.g. keyed off of
    // ceClass's base class to prevent O(n) lookups for every element (probably
    // not a concern for the small number of element renderers we'd expect)? Doing
    // so would preclude having cross-cutting renderers to e.g. no-op render all
    // custom elements with a `client-only` attribute, so punting for now.
    for (const renderer of elementRenderers) {
        if (renderer.matchesClass(ceClass, tagName, attributes)) {
            return new renderer(tagName);
        }
    }
    return new FallbackRenderer(tagName);
};
/**
 * An object that renders elements of a certain type.
 */
class ElementRenderer {
    /**
     * Should be implemented to return true when the given custom element class
     * and/or tagName should be handled by this renderer.
     *
     * @param ceClass - Custom Element class
     * @param tagName - Tag name of custom element instance
     * @param attributes - Map of attribute key/value pairs
     * @returns
     */
    static matchesClass(_ceClass, _tagName, _attributes) {
        return false;
    }
    /**
     * Called when a custom element is instantiated during a server render.
     *
     * An ElementRenderer can actually instantiate the custom element class, or
     * it could emulate the element in some other way.
     */
    constructor(tagName) {
        this.tagName = tagName;
    }
    /**
     * Called when a custom element is "attached" to the server DOM.
     *
     * Because we don't presume a full DOM emulation, this isn't the same as
     * being connected in a real browser. There may not be an owner document,
     * parentNode, etc., depending on the DOM emulation.
     *
     * If this renderer is creating actual element instances, it may forward
     * the call to the element's `connectedCallback()`.
     *
     * The default impementation is a no-op.
     */
    connectedCallback() {
        // do nothing
    }
    /**
     * Called from `setAttribute()` to emulate the browser's
     * `attributeChangedCallback` lifecycle hook.
     *
     * If this renderer is creating actual element instances, it may forward
     * the call to the element's `attributeChangedCallback()`.
     */
    attributeChangedCallback(_name, _old, _value) {
        // do nothing
    }
    /**
     * Handles setting a property on the element.
     *
     * The default implementation sets the property on the renderer's element
     * instance.
     *
     * @param name Name of the property
     * @param value Value of the property
     */
    setProperty(name, value) {
        if (this.element !== undefined) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.element[name] = value;
        }
    }
    /**
     * Handles setting an attribute on an element.
     *
     * Default implementation calls `setAttribute` on the renderer's element
     * instance, and calls the abstract `attributeChangedCallback` on the
     * renderer.
     *
     * @param name Name of the attribute
     * @param value Value of the attribute
     */
    setAttribute(name, value) {
        // Browser turns all HTML attributes to lowercase.
        name = name.toLowerCase();
        if (this.element !== undefined) {
            const old = this.element.getAttribute(name);
            this.element.setAttribute(name, value);
            this.attributeChangedCallback(name, old, value);
        }
    }
    /**
     * The shadow root options to write to the declarative shadow DOM <template>,
     * if one is created with `renderShadow()`.
     */
    get shadowRootOptions() {
        return { mode: 'open' };
    }
    /**
     * Render the element's shadow root children.
     *
     * If `renderShadow()` returns undefined, no declarative shadow root is
     * emitted.
     */
    renderShadow(_renderInfo) {
        return undefined;
    }
    /**
     * Render the element's light DOM children.
     */
    renderLight(_renderInfo) {
        return undefined;
    }
    /**
     * Render the element's attributes.
     *
     * The default implementation serializes all attributes on the element
     * instance.
     */
    *renderAttributes() {
        if (this.element !== undefined) {
            const { attributes } = this.element;
            for (let i = 0, name, value; i < attributes.length && ({ name, value } = attributes[i]); i++) {
                if (value === '' || value === undefined || value === null) {
                    yield ` ${name}`;
                }
                else {
                    yield ` ${name}="${escapeHtml(value)}"`;
                }
            }
        }
    }
}
/**
 * An ElementRenderer used as a fallback in the case where a custom element is
 * either unregistered or has no other matching renderer.
 */
class FallbackRenderer extends ElementRenderer {
    constructor() {
        super(...arguments);
        this._attributes = {};
    }
    setAttribute(name, value) {
        // Browser turns all HTML attributes to lowercase.
        this._attributes[name.toLowerCase()] = value;
    }
    *renderAttributes() {
        for (const [name, value] of Object.entries(this._attributes)) {
            if (value === '' || value === undefined || value === null) {
                yield ` ${name}`;
            }
            else {
                yield ` ${name}="${escapeHtml(value)}"`;
            }
        }
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Map of ARIAMixin properties to attributes
 */
const ariaMixinAttributes = {
    ariaAtomic: 'aria-atomic',
    ariaAutoComplete: 'aria-autocomplete',
    ariaBraileLabel: 'aria-brailelabel',
    ariaBraileRoleDescription: 'aria-braileroledescription',
    ariaBusy: 'aria-busy',
    ariaChecked: 'aria-checked',
    ariaColCount: 'aria-colcount',
    ariaColIndex: 'aria-colindex',
    ariaColSpan: 'aria-colspan',
    ariaCurrent: 'aria-current',
    ariaDescription: 'aria-description',
    ariaDisabled: 'aria-disabled',
    ariaExpanded: 'aria-expanded',
    ariaHasPopup: 'aria-haspopup',
    ariaHidden: 'aria-hidden',
    ariaInvalid: 'aria-invalid',
    ariaKeyShortcuts: 'aria-keyshortcuts',
    ariaLabel: 'aria-label',
    ariaLevel: 'aria-level',
    ariaLive: 'aria-live',
    ariaModal: 'aria-modal',
    ariaMultiLine: 'aria-multiline',
    ariaMultiSelectable: 'aria-multiselectable',
    ariaOrientation: 'aria-orientation',
    ariaPlaceholder: 'aria-placeholder',
    ariaPosInSet: 'aria-posinset',
    ariaPressed: 'aria-pressed',
    ariaReadOnly: 'aria-readonly',
    ariaRequired: 'aria-required',
    ariaRoleDescription: 'aria-roledescription',
    ariaRowCount: 'aria-rowcount',
    ariaRowIndex: 'aria-rowindex',
    ariaRowSpan: 'aria-rowspan',
    ariaSelected: 'aria-selected',
    ariaSetSize: 'aria-setsize',
    ariaSort: 'aria-sort',
    ariaValueMax: 'aria-valuemax',
    ariaValueMin: 'aria-valuemin',
    ariaValueNow: 'aria-valuenow',
    ariaValueText: 'aria-valuetext',
    role: 'role',
};
// Shim the global element internals object
// Methods should be fine as noops and properties can generally
// be while on the server.
const ElementInternalsShim = class ElementInternals {
    get shadowRoot() {
        // Grab the shadow root instance from the Element shim
        // to ensure that the shadow root is always available
        // to the internals instance even if the mode is 'closed'
        return this.__host
            .__shadowRoot;
    }
    constructor(_host) {
        this.ariaAtomic = '';
        this.ariaAutoComplete = '';
        this.ariaBraileLabel = '';
        this.ariaBraileRoleDescription = '';
        this.ariaBusy = '';
        this.ariaChecked = '';
        this.ariaColCount = '';
        this.ariaColIndex = '';
        this.ariaColSpan = '';
        this.ariaCurrent = '';
        this.ariaDescription = '';
        this.ariaDisabled = '';
        this.ariaExpanded = '';
        this.ariaHasPopup = '';
        this.ariaHidden = '';
        this.ariaInvalid = '';
        this.ariaKeyShortcuts = '';
        this.ariaLabel = '';
        this.ariaLevel = '';
        this.ariaLive = '';
        this.ariaModal = '';
        this.ariaMultiLine = '';
        this.ariaMultiSelectable = '';
        this.ariaOrientation = '';
        this.ariaPlaceholder = '';
        this.ariaPosInSet = '';
        this.ariaPressed = '';
        this.ariaReadOnly = '';
        this.ariaRequired = '';
        this.ariaRoleDescription = '';
        this.ariaRowCount = '';
        this.ariaRowIndex = '';
        this.ariaRowSpan = '';
        this.ariaSelected = '';
        this.ariaSetSize = '';
        this.ariaSort = '';
        this.ariaValueMax = '';
        this.ariaValueMin = '';
        this.ariaValueNow = '';
        this.ariaValueText = '';
        this.role = '';
        this.form = null;
        this.labels = [];
        this.states = new Set();
        this.validationMessage = '';
        this.validity = {};
        this.willValidate = true;
        this.__host = _host;
    }
    checkValidity() {
        // TODO(augustjk) Consider actually implementing logic.
        // See https://github.com/lit/lit/issues/3740
        console.warn('`ElementInternals.checkValidity()` was called on the server.' +
            'This method always returns true.');
        return true;
    }
    reportValidity() {
        return true;
    }
    setFormValue() { }
    setValidity() { }
};
const HYDRATE_INTERNALS_ATTR_PREFIX = 'hydrate-internals-';

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const attributes = new WeakMap();
const attributesForElement = (element) => {
    let attrs = attributes.get(element);
    if (attrs === undefined) {
        attributes.set(element, (attrs = new Map()));
    }
    return attrs;
};
// The typings around the exports below are a little funky:
//
// 1. We want the `name` of the shim classes to match the real ones at runtime,
//    hence e.g. `class Element`.
// 2. We can't shadow the global types with a simple class declaration, because
//    then we can't reference the global types for casting, hence e.g.
//    `const ElementShim = class Element`.
// 3. We want to export the classes typed as the real ones, hence e.g.
//    `const ElementShimWithRealType = ElementShim as object as typeof Element;`.
// 4. We want the exported names to match the real ones, hence e.g.
//    `export {ElementShimWithRealType as Element}`.
const ElementShim = class Element {
    constructor() {
        this.__shadowRootMode = null;
        this.__shadowRoot = null;
        this.__internals = null;
    }
    get attributes() {
        return Array.from(attributesForElement(this)).map(([name, value]) => ({
            name,
            value,
        }));
    }
    get shadowRoot() {
        if (this.__shadowRootMode === 'closed') {
            return null;
        }
        return this.__shadowRoot;
    }
    setAttribute(name, value) {
        // Emulate browser behavior that silently casts all values to string. E.g.
        // `42` becomes `"42"` and `{}` becomes `"[object Object]""`.
        attributesForElement(this).set(name, String(value));
    }
    removeAttribute(name) {
        attributesForElement(this).delete(name);
    }
    toggleAttribute(name, force) {
        // Steps reference https://dom.spec.whatwg.org/#dom-element-toggleattribute
        if (this.hasAttribute(name)) {
            // Step 5
            if (force === undefined || !force) {
                this.removeAttribute(name);
                return false;
            }
        }
        else {
            // Step 4
            if (force === undefined || force) {
                // Step 4.1
                this.setAttribute(name, '');
                return true;
            }
            else {
                // Step 4.2
                return false;
            }
        }
        // Step 6
        return true;
    }
    hasAttribute(name) {
        return attributesForElement(this).has(name);
    }
    attachShadow(init) {
        const shadowRoot = { host: this };
        this.__shadowRootMode = init.mode;
        if (init && init.mode === 'open') {
            this.__shadowRoot = shadowRoot;
        }
        return shadowRoot;
    }
    attachInternals() {
        if (this.__internals !== null) {
            throw new Error(`Failed to execute 'attachInternals' on 'HTMLElement': ` +
                `ElementInternals for the specified element was already attached.`);
        }
        const internals = new ElementInternalsShim(this);
        this.__internals = internals;
        return internals;
    }
    getAttribute(name) {
        const value = attributesForElement(this).get(name);
        return value ?? null;
    }
};
const HTMLElementShim = class HTMLElement extends ElementShim {
};
const HTMLElementShimWithRealType = HTMLElementShim;
const CustomElementRegistryShim = class CustomElementRegistry {
    constructor() {
        this.__definitions = new Map();
    }
    define(name, ctor) {
        if (this.__definitions.has(name)) {
            if (process.env.NODE_ENV === 'development') {
                console.warn(`'CustomElementRegistry' already has "${name}" defined. ` +
                    `This may have been caused by live reload or hot module ` +
                    `replacement in which case it can be safely ignored.\n` +
                    `Make sure to test your application with a production build as ` +
                    `repeat registrations will throw in production.`);
            }
            else {
                throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': ` +
                    `the name "${name}" has already been used with this registry`);
            }
        }
        this.__definitions.set(name, {
            ctor,
            // Note it's important we read `observedAttributes` in case it is a getter
            // with side-effects, as is the case in Lit, where it triggers class
            // finalization.
            //
            // TODO(aomarks) To be spec compliant, we should also capture the
            // registration-time lifecycle methods like `connectedCallback`. For them
            // to be actually accessible to e.g. the Lit SSR element renderer, though,
            // we'd need to introduce a new API for accessing them (since `get` only
            // returns the constructor).
            observedAttributes: ctor.observedAttributes ?? [],
        });
    }
    get(name) {
        const definition = this.__definitions.get(name);
        return definition?.ctor;
    }
};
const CustomElementRegistryShimWithRealType = CustomElementRegistryShim;
const customElements$1 = new CustomElementRegistryShimWithRealType();

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$3=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),o$3=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$2("string"==typeof t?t:t+"",void 0,s$3),S$1=(s,o)=>{if(e$3)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$3||void 0===t$1.CSSStyleSheet?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

const{is:r$3,defineProperty:h$1,getOwnPropertyDescriptor:o$2,getOwnPropertyNames:n$1,getOwnPropertySymbols:a$1,getPrototypeOf:c$1}=Object,l$1=globalThis;l$1.customElements??=customElements$1;const p$1=l$1.trustedTypes,d$1=p$1?p$1.emptyScript:"",u$1=l$1.reactiveElementPolyfillSupport,f$1=(t,s)=>t,b$1={toAttribute(t,s){switch(s){case Boolean:t=t?d$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},y$1=(t,s)=>!r$3(t,s),m$1={attribute:!0,type:String,converter:b$1,reflect:!1,hasChanged:y$1};Symbol.metadata??=Symbol("metadata"),l$1.litPropertyMetadata??=new WeakMap;let g$1 = class g extends(globalThis.HTMLElement??HTMLElementShimWithRealType){static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=m$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),e=this.getPropertyDescriptor(t,i,s);void 0!==e&&h$1(this.prototype,t,e);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=o$2(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const h=e?.call(this);r.call(this,s),this.requestUpdate(t,h,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??m$1}static _$Ei(){if(this.hasOwnProperty(f$1("elementProperties")))return;const t=c$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(f$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f$1("properties"))){const t=this.properties,s=[...n$1(t),...a$1(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)s.unshift(c$2(t));}else void 0!==t&&s.push(c$2(t));return s}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:b$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??y$1)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}};g$1.elementStyles=[],g$1.shadowRootOptions={mode:"open"},g$1[f$1("elementProperties")]=new Map,g$1[f$1("finalized")]=new Map,u$1?.({ReactiveElement:g$1}),(l$1.reactiveElementVersions??=[]).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i$2=t.trustedTypes,s$2=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$2="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$1="?"+h,n=`<${o$1}>`,r$2=void 0===t.document?{createTreeWalker:()=>({})}:document,l=()=>r$2.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$$1=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),A=new WeakMap,E=r$2.createTreeWalker(r$2,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$2?s$2.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v$1:void 0!==u[1]?c=_:void 0!==u[2]?($$1.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v$1||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e$2+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$2)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?R:"?"===e[1]?H:"@"===e[1]?I:k}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($$1.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$2?i$2.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$1)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$2.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===b)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$2).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$2,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==w&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$2.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l()),this.S(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==b,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===b&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===w?t=w:t!==w&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class R extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===w?void 0:t;}}class H extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==w);}}class I extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??w)===b)return;const s=this._$AH,e=t===w&&s!==w||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==w&&(s===w||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const z={P:e$2,A:h,C:o$1,M:1,L:P,R:S,D:u,V:N,I:M,H:k,N:H,U:I,B:R,F:L},W=t.litHtmlPolyfillSupport;W?.(V,M),(t.litHtmlVersions??=[]).push("3.1.3");const Z=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s$1 = class s extends g$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Z(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return b}};s$1._$litElement$=!0,s$1[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s$1});const r$1=globalThis.litElementPolyfillSupport;r$1?.({LitElement:s$1});const o={_$AK:(t,e,i)=>{t._$AK(e,i);},_$AL:t=>t._$AL};(globalThis.litElementVersions??=[]).push("4.0.5");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$1={attributeToProperty:o._$AK,changedProperties:o._$AL};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let r=null;const i$1={boundAttributeSuffix:z.P,marker:z.A,markerMatch:z.C,HTML_RESULT:z.M,getTemplateHtml:z.L,overrideDirectiveResolve:(e,t)=>class extends e{_$AS(e,r){return t(this,r)}},patchDirectiveResolve:(e,t)=>{if(e.prototype._$AS!==t){r??=e.prototype._$AS.name;for(let i=e.prototype;i!==Object.prototype;i=Object.getPrototypeOf(i))if(i.hasOwnProperty(r))return void(i[r]=t);throw Error("Internal error: It is possible that both dev mode and production mode Lit was mixed together during SSR. Please comment on the issue: https://github.com/lit/lit/issues/4527")}},setDirectiveClass(e,t){e._$litDirective$=t;},getAttributePartCommittedValue:(e,r,i)=>{let o=b;return e.j=e=>o=e,e._$AI(r,e,i),o},connectedDisconnectable:e=>({...e,_$AU:!0}),resolveDirective:z.V,AttributePart:z.H,PropertyPart:z.B,BooleanAttributePart:z.N,EventPart:z.U,ElementPart:z.F,TemplateInstance:z.R,isIterable:z.D,ChildPart:z.I};

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=(o,t)=>void 0!==o?._$litType$;

const v=t=>{const r=new Uint32Array(2).fill(5381);for(const e of t.strings)for(let t=0;t<e.length;t++)r[t%2]=33*r[t%2]^e.charCodeAt(t);const n=String.fromCharCode(...new Uint8Array(r.buffer));return Buffer$1.from(n,"binary").toString("base64")};

const UNDEFINED_CODE_POINTS = new Set([
    65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214,
    393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894,
    720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574,
    1048575, 1114110, 1114111,
]);
const REPLACEMENT_CHARACTER = '\uFFFD';
var CODE_POINTS;
(function (CODE_POINTS) {
    CODE_POINTS[CODE_POINTS["EOF"] = -1] = "EOF";
    CODE_POINTS[CODE_POINTS["NULL"] = 0] = "NULL";
    CODE_POINTS[CODE_POINTS["TABULATION"] = 9] = "TABULATION";
    CODE_POINTS[CODE_POINTS["CARRIAGE_RETURN"] = 13] = "CARRIAGE_RETURN";
    CODE_POINTS[CODE_POINTS["LINE_FEED"] = 10] = "LINE_FEED";
    CODE_POINTS[CODE_POINTS["FORM_FEED"] = 12] = "FORM_FEED";
    CODE_POINTS[CODE_POINTS["SPACE"] = 32] = "SPACE";
    CODE_POINTS[CODE_POINTS["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
    CODE_POINTS[CODE_POINTS["QUOTATION_MARK"] = 34] = "QUOTATION_MARK";
    CODE_POINTS[CODE_POINTS["NUMBER_SIGN"] = 35] = "NUMBER_SIGN";
    CODE_POINTS[CODE_POINTS["AMPERSAND"] = 38] = "AMPERSAND";
    CODE_POINTS[CODE_POINTS["APOSTROPHE"] = 39] = "APOSTROPHE";
    CODE_POINTS[CODE_POINTS["HYPHEN_MINUS"] = 45] = "HYPHEN_MINUS";
    CODE_POINTS[CODE_POINTS["SOLIDUS"] = 47] = "SOLIDUS";
    CODE_POINTS[CODE_POINTS["DIGIT_0"] = 48] = "DIGIT_0";
    CODE_POINTS[CODE_POINTS["DIGIT_9"] = 57] = "DIGIT_9";
    CODE_POINTS[CODE_POINTS["SEMICOLON"] = 59] = "SEMICOLON";
    CODE_POINTS[CODE_POINTS["LESS_THAN_SIGN"] = 60] = "LESS_THAN_SIGN";
    CODE_POINTS[CODE_POINTS["EQUALS_SIGN"] = 61] = "EQUALS_SIGN";
    CODE_POINTS[CODE_POINTS["GREATER_THAN_SIGN"] = 62] = "GREATER_THAN_SIGN";
    CODE_POINTS[CODE_POINTS["QUESTION_MARK"] = 63] = "QUESTION_MARK";
    CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_A"] = 65] = "LATIN_CAPITAL_A";
    CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_F"] = 70] = "LATIN_CAPITAL_F";
    CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_X"] = 88] = "LATIN_CAPITAL_X";
    CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_Z"] = 90] = "LATIN_CAPITAL_Z";
    CODE_POINTS[CODE_POINTS["RIGHT_SQUARE_BRACKET"] = 93] = "RIGHT_SQUARE_BRACKET";
    CODE_POINTS[CODE_POINTS["GRAVE_ACCENT"] = 96] = "GRAVE_ACCENT";
    CODE_POINTS[CODE_POINTS["LATIN_SMALL_A"] = 97] = "LATIN_SMALL_A";
    CODE_POINTS[CODE_POINTS["LATIN_SMALL_F"] = 102] = "LATIN_SMALL_F";
    CODE_POINTS[CODE_POINTS["LATIN_SMALL_X"] = 120] = "LATIN_SMALL_X";
    CODE_POINTS[CODE_POINTS["LATIN_SMALL_Z"] = 122] = "LATIN_SMALL_Z";
    CODE_POINTS[CODE_POINTS["REPLACEMENT_CHARACTER"] = 65533] = "REPLACEMENT_CHARACTER";
})(CODE_POINTS = CODE_POINTS || (CODE_POINTS = {}));
const SEQUENCES = {
    DASH_DASH: '--',
    CDATA_START: '[CDATA[',
    DOCTYPE: 'doctype',
    SCRIPT: 'script',
    PUBLIC: 'public',
    SYSTEM: 'system',
};
//Surrogates
function isSurrogate(cp) {
    return cp >= 55296 && cp <= 57343;
}
function isSurrogatePair(cp) {
    return cp >= 56320 && cp <= 57343;
}
function getSurrogatePairCodePoint(cp1, cp2) {
    return (cp1 - 55296) * 1024 + 9216 + cp2;
}
//NOTE: excluding NULL and ASCII whitespace
function isControlCodePoint(cp) {
    return ((cp !== 0x20 && cp !== 0x0a && cp !== 0x0d && cp !== 0x09 && cp !== 0x0c && cp >= 0x01 && cp <= 0x1f) ||
        (cp >= 0x7f && cp <= 0x9f));
}
function isUndefinedCodePoint(cp) {
    return (cp >= 64976 && cp <= 65007) || UNDEFINED_CODE_POINTS.has(cp);
}

var ERR;
(function (ERR) {
    ERR["controlCharacterInInputStream"] = "control-character-in-input-stream";
    ERR["noncharacterInInputStream"] = "noncharacter-in-input-stream";
    ERR["surrogateInInputStream"] = "surrogate-in-input-stream";
    ERR["nonVoidHtmlElementStartTagWithTrailingSolidus"] = "non-void-html-element-start-tag-with-trailing-solidus";
    ERR["endTagWithAttributes"] = "end-tag-with-attributes";
    ERR["endTagWithTrailingSolidus"] = "end-tag-with-trailing-solidus";
    ERR["unexpectedSolidusInTag"] = "unexpected-solidus-in-tag";
    ERR["unexpectedNullCharacter"] = "unexpected-null-character";
    ERR["unexpectedQuestionMarkInsteadOfTagName"] = "unexpected-question-mark-instead-of-tag-name";
    ERR["invalidFirstCharacterOfTagName"] = "invalid-first-character-of-tag-name";
    ERR["unexpectedEqualsSignBeforeAttributeName"] = "unexpected-equals-sign-before-attribute-name";
    ERR["missingEndTagName"] = "missing-end-tag-name";
    ERR["unexpectedCharacterInAttributeName"] = "unexpected-character-in-attribute-name";
    ERR["unknownNamedCharacterReference"] = "unknown-named-character-reference";
    ERR["missingSemicolonAfterCharacterReference"] = "missing-semicolon-after-character-reference";
    ERR["unexpectedCharacterAfterDoctypeSystemIdentifier"] = "unexpected-character-after-doctype-system-identifier";
    ERR["unexpectedCharacterInUnquotedAttributeValue"] = "unexpected-character-in-unquoted-attribute-value";
    ERR["eofBeforeTagName"] = "eof-before-tag-name";
    ERR["eofInTag"] = "eof-in-tag";
    ERR["missingAttributeValue"] = "missing-attribute-value";
    ERR["missingWhitespaceBetweenAttributes"] = "missing-whitespace-between-attributes";
    ERR["missingWhitespaceAfterDoctypePublicKeyword"] = "missing-whitespace-after-doctype-public-keyword";
    ERR["missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers"] = "missing-whitespace-between-doctype-public-and-system-identifiers";
    ERR["missingWhitespaceAfterDoctypeSystemKeyword"] = "missing-whitespace-after-doctype-system-keyword";
    ERR["missingQuoteBeforeDoctypePublicIdentifier"] = "missing-quote-before-doctype-public-identifier";
    ERR["missingQuoteBeforeDoctypeSystemIdentifier"] = "missing-quote-before-doctype-system-identifier";
    ERR["missingDoctypePublicIdentifier"] = "missing-doctype-public-identifier";
    ERR["missingDoctypeSystemIdentifier"] = "missing-doctype-system-identifier";
    ERR["abruptDoctypePublicIdentifier"] = "abrupt-doctype-public-identifier";
    ERR["abruptDoctypeSystemIdentifier"] = "abrupt-doctype-system-identifier";
    ERR["cdataInHtmlContent"] = "cdata-in-html-content";
    ERR["incorrectlyOpenedComment"] = "incorrectly-opened-comment";
    ERR["eofInScriptHtmlCommentLikeText"] = "eof-in-script-html-comment-like-text";
    ERR["eofInDoctype"] = "eof-in-doctype";
    ERR["nestedComment"] = "nested-comment";
    ERR["abruptClosingOfEmptyComment"] = "abrupt-closing-of-empty-comment";
    ERR["eofInComment"] = "eof-in-comment";
    ERR["incorrectlyClosedComment"] = "incorrectly-closed-comment";
    ERR["eofInCdata"] = "eof-in-cdata";
    ERR["absenceOfDigitsInNumericCharacterReference"] = "absence-of-digits-in-numeric-character-reference";
    ERR["nullCharacterReference"] = "null-character-reference";
    ERR["surrogateCharacterReference"] = "surrogate-character-reference";
    ERR["characterReferenceOutsideUnicodeRange"] = "character-reference-outside-unicode-range";
    ERR["controlCharacterReference"] = "control-character-reference";
    ERR["noncharacterCharacterReference"] = "noncharacter-character-reference";
    ERR["missingWhitespaceBeforeDoctypeName"] = "missing-whitespace-before-doctype-name";
    ERR["missingDoctypeName"] = "missing-doctype-name";
    ERR["invalidCharacterSequenceAfterDoctypeName"] = "invalid-character-sequence-after-doctype-name";
    ERR["duplicateAttribute"] = "duplicate-attribute";
    ERR["nonConformingDoctype"] = "non-conforming-doctype";
    ERR["missingDoctype"] = "missing-doctype";
    ERR["misplacedDoctype"] = "misplaced-doctype";
    ERR["endTagWithoutMatchingOpenElement"] = "end-tag-without-matching-open-element";
    ERR["closingOfElementWithOpenChildElements"] = "closing-of-element-with-open-child-elements";
    ERR["disallowedContentInNoscriptInHead"] = "disallowed-content-in-noscript-in-head";
    ERR["openElementsLeftAfterEof"] = "open-elements-left-after-eof";
    ERR["abandonedHeadElementChild"] = "abandoned-head-element-child";
    ERR["misplacedStartTagForHeadElement"] = "misplaced-start-tag-for-head-element";
    ERR["nestedNoscriptInHead"] = "nested-noscript-in-head";
    ERR["eofInElementThatCanContainOnlyText"] = "eof-in-element-that-can-contain-only-text";
})(ERR = ERR || (ERR = {}));

//Const
const DEFAULT_BUFFER_WATERLINE = 1 << 16;
//Preprocessor
//NOTE: HTML input preprocessing
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#preprocessing-the-input-stream)
class Preprocessor {
    constructor(handler) {
        this.handler = handler;
        this.html = '';
        this.pos = -1;
        // NOTE: Initial `lastGapPos` is -2, to ensure `col` on initialisation is 0
        this.lastGapPos = -2;
        this.gapStack = [];
        this.skipNextNewLine = false;
        this.lastChunkWritten = false;
        this.endOfChunkHit = false;
        this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
        this.isEol = false;
        this.lineStartPos = 0;
        this.droppedBufferSize = 0;
        this.line = 1;
        //NOTE: avoid reporting errors twice on advance/retreat
        this.lastErrOffset = -1;
    }
    /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
    get col() {
        return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
    }
    get offset() {
        return this.droppedBufferSize + this.pos;
    }
    getError(code) {
        const { line, col, offset } = this;
        return {
            code,
            startLine: line,
            endLine: line,
            startCol: col,
            endCol: col,
            startOffset: offset,
            endOffset: offset,
        };
    }
    _err(code) {
        if (this.handler.onParseError && this.lastErrOffset !== this.offset) {
            this.lastErrOffset = this.offset;
            this.handler.onParseError(this.getError(code));
        }
    }
    _addGap() {
        this.gapStack.push(this.lastGapPos);
        this.lastGapPos = this.pos;
    }
    _processSurrogate(cp) {
        //NOTE: try to peek a surrogate pair
        if (this.pos !== this.html.length - 1) {
            const nextCp = this.html.charCodeAt(this.pos + 1);
            if (isSurrogatePair(nextCp)) {
                //NOTE: we have a surrogate pair. Peek pair character and recalculate code point.
                this.pos++;
                //NOTE: add a gap that should be avoided during retreat
                this._addGap();
                return getSurrogatePairCodePoint(cp, nextCp);
            }
        }
        //NOTE: we are at the end of a chunk, therefore we can't infer the surrogate pair yet.
        else if (!this.lastChunkWritten) {
            this.endOfChunkHit = true;
            return CODE_POINTS.EOF;
        }
        //NOTE: isolated surrogate
        this._err(ERR.surrogateInInputStream);
        return cp;
    }
    willDropParsedChunk() {
        return this.pos > this.bufferWaterline;
    }
    dropParsedChunk() {
        if (this.willDropParsedChunk()) {
            this.html = this.html.substring(this.pos);
            this.lineStartPos -= this.pos;
            this.droppedBufferSize += this.pos;
            this.pos = 0;
            this.lastGapPos = -2;
            this.gapStack.length = 0;
        }
    }
    write(chunk, isLastChunk) {
        if (this.html.length > 0) {
            this.html += chunk;
        }
        else {
            this.html = chunk;
        }
        this.endOfChunkHit = false;
        this.lastChunkWritten = isLastChunk;
    }
    insertHtmlAtCurrentPos(chunk) {
        this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1);
        this.endOfChunkHit = false;
    }
    startsWith(pattern, caseSensitive) {
        // Check if our buffer has enough characters
        if (this.pos + pattern.length > this.html.length) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return false;
        }
        if (caseSensitive) {
            return this.html.startsWith(pattern, this.pos);
        }
        for (let i = 0; i < pattern.length; i++) {
            const cp = this.html.charCodeAt(this.pos + i) | 0x20;
            if (cp !== pattern.charCodeAt(i)) {
                return false;
            }
        }
        return true;
    }
    peek(offset) {
        const pos = this.pos + offset;
        if (pos >= this.html.length) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return CODE_POINTS.EOF;
        }
        const code = this.html.charCodeAt(pos);
        return code === CODE_POINTS.CARRIAGE_RETURN ? CODE_POINTS.LINE_FEED : code;
    }
    advance() {
        this.pos++;
        //NOTE: LF should be in the last column of the line
        if (this.isEol) {
            this.isEol = false;
            this.line++;
            this.lineStartPos = this.pos;
        }
        if (this.pos >= this.html.length) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return CODE_POINTS.EOF;
        }
        let cp = this.html.charCodeAt(this.pos);
        //NOTE: all U+000D CARRIAGE RETURN (CR) characters must be converted to U+000A LINE FEED (LF) characters
        if (cp === CODE_POINTS.CARRIAGE_RETURN) {
            this.isEol = true;
            this.skipNextNewLine = true;
            return CODE_POINTS.LINE_FEED;
        }
        //NOTE: any U+000A LINE FEED (LF) characters that immediately follow a U+000D CARRIAGE RETURN (CR) character
        //must be ignored.
        if (cp === CODE_POINTS.LINE_FEED) {
            this.isEol = true;
            if (this.skipNextNewLine) {
                // `line` will be bumped again in the recursive call.
                this.line--;
                this.skipNextNewLine = false;
                this._addGap();
                return this.advance();
            }
        }
        this.skipNextNewLine = false;
        if (isSurrogate(cp)) {
            cp = this._processSurrogate(cp);
        }
        //OPTIMIZATION: first check if code point is in the common allowed
        //range (ASCII alphanumeric, whitespaces, big chunk of BMP)
        //before going into detailed performance cost validation.
        const isCommonValidRange = this.handler.onParseError === null ||
            (cp > 0x1f && cp < 0x7f) ||
            cp === CODE_POINTS.LINE_FEED ||
            cp === CODE_POINTS.CARRIAGE_RETURN ||
            (cp > 0x9f && cp < 64976);
        if (!isCommonValidRange) {
            this._checkForProblematicCharacters(cp);
        }
        return cp;
    }
    _checkForProblematicCharacters(cp) {
        if (isControlCodePoint(cp)) {
            this._err(ERR.controlCharacterInInputStream);
        }
        else if (isUndefinedCodePoint(cp)) {
            this._err(ERR.noncharacterInInputStream);
        }
    }
    retreat(count) {
        this.pos -= count;
        while (this.pos < this.lastGapPos) {
            this.lastGapPos = this.gapStack.pop();
            this.pos--;
        }
        this.isEol = false;
    }
}

var TokenType;
(function (TokenType) {
    TokenType[TokenType["CHARACTER"] = 0] = "CHARACTER";
    TokenType[TokenType["NULL_CHARACTER"] = 1] = "NULL_CHARACTER";
    TokenType[TokenType["WHITESPACE_CHARACTER"] = 2] = "WHITESPACE_CHARACTER";
    TokenType[TokenType["START_TAG"] = 3] = "START_TAG";
    TokenType[TokenType["END_TAG"] = 4] = "END_TAG";
    TokenType[TokenType["COMMENT"] = 5] = "COMMENT";
    TokenType[TokenType["DOCTYPE"] = 6] = "DOCTYPE";
    TokenType[TokenType["EOF"] = 7] = "EOF";
    TokenType[TokenType["HIBERNATION"] = 8] = "HIBERNATION";
})(TokenType = TokenType || (TokenType = {}));
function getTokenAttr(token, attrName) {
    for (let i = token.attrs.length - 1; i >= 0; i--) {
        if (token.attrs[i].name === attrName) {
            return token.attrs[i].value;
        }
    }
    return null;
}

// Generated using scripts/write-decode-map.ts
const htmlDecodeTree = new Uint16Array(
// prettier-ignore
"\u1d41<\xd5\u0131\u028a\u049d\u057b\u05d0\u0675\u06de\u07a2\u07d6\u080f\u0a4a\u0a91\u0da1\u0e6d\u0f09\u0f26\u10ca\u1228\u12e1\u1415\u149d\u14c3\u14df\u1525\0\0\0\0\0\0\u156b\u16cd\u198d\u1c12\u1ddd\u1f7e\u2060\u21b0\u228d\u23c0\u23fb\u2442\u2824\u2912\u2d08\u2e48\u2fce\u3016\u32ba\u3639\u37ac\u38fe\u3a28\u3a71\u3ae0\u3b2e\u0800EMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig\u803b\xc6\u40c6P\u803b&\u4026cute\u803b\xc1\u40c1reve;\u4102\u0100iyx}rc\u803b\xc2\u40c2;\u4410r;\uc000\ud835\udd04rave\u803b\xc0\u40c0pha;\u4391acr;\u4100d;\u6a53\u0100gp\x9d\xa1on;\u4104f;\uc000\ud835\udd38plyFunction;\u6061ing\u803b\xc5\u40c5\u0100cs\xbe\xc3r;\uc000\ud835\udc9cign;\u6254ilde\u803b\xc3\u40c3ml\u803b\xc4\u40c4\u0400aceforsu\xe5\xfb\xfe\u0117\u011c\u0122\u0127\u012a\u0100cr\xea\xf2kslash;\u6216\u0176\xf6\xf8;\u6ae7ed;\u6306y;\u4411\u0180crt\u0105\u010b\u0114ause;\u6235noullis;\u612ca;\u4392r;\uc000\ud835\udd05pf;\uc000\ud835\udd39eve;\u42d8c\xf2\u0113mpeq;\u624e\u0700HOacdefhilorsu\u014d\u0151\u0156\u0180\u019e\u01a2\u01b5\u01b7\u01ba\u01dc\u0215\u0273\u0278\u027ecy;\u4427PY\u803b\xa9\u40a9\u0180cpy\u015d\u0162\u017aute;\u4106\u0100;i\u0167\u0168\u62d2talDifferentialD;\u6145leys;\u612d\u0200aeio\u0189\u018e\u0194\u0198ron;\u410cdil\u803b\xc7\u40c7rc;\u4108nint;\u6230ot;\u410a\u0100dn\u01a7\u01adilla;\u40b8terDot;\u40b7\xf2\u017fi;\u43a7rcle\u0200DMPT\u01c7\u01cb\u01d1\u01d6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01e2\u01f8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020foubleQuote;\u601duote;\u6019\u0200lnpu\u021e\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6a74\u0180git\u022f\u0236\u023aruent;\u6261nt;\u622fourIntegral;\u622e\u0100fr\u024c\u024e;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6a2fcr;\uc000\ud835\udc9ep\u0100;C\u0284\u0285\u62d3ap;\u624d\u0580DJSZacefios\u02a0\u02ac\u02b0\u02b4\u02b8\u02cb\u02d7\u02e1\u02e6\u0333\u048d\u0100;o\u0179\u02a5trahd;\u6911cy;\u4402cy;\u4405cy;\u440f\u0180grs\u02bf\u02c4\u02c7ger;\u6021r;\u61a1hv;\u6ae4\u0100ay\u02d0\u02d5ron;\u410e;\u4414l\u0100;t\u02dd\u02de\u6207a;\u4394r;\uc000\ud835\udd07\u0100af\u02eb\u0327\u0100cm\u02f0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031ccute;\u40b4o\u0174\u030b\u030d;\u42d9bleAcute;\u42ddrave;\u4060ilde;\u42dcond;\u62c4ferentialD;\u6146\u0470\u033d\0\0\0\u0342\u0354\0\u0405f;\uc000\ud835\udd3b\u0180;DE\u0348\u0349\u034d\u40a8ot;\u60dcqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03cf\u03e2\u03f8ontourIntegra\xec\u0239o\u0274\u0379\0\0\u037b\xbb\u0349nArrow;\u61d3\u0100eo\u0387\u03a4ft\u0180ART\u0390\u0396\u03a1rrow;\u61d0ightArrow;\u61d4e\xe5\u02cang\u0100LR\u03ab\u03c4eft\u0100AR\u03b3\u03b9rrow;\u67f8ightArrow;\u67faightArrow;\u67f9ight\u0100AT\u03d8\u03derrow;\u61d2ee;\u62a8p\u0241\u03e9\0\0\u03efrrow;\u61d1ownArrow;\u61d5erticalBar;\u6225n\u0300ABLRTa\u0412\u042a\u0430\u045e\u047f\u037crrow\u0180;BU\u041d\u041e\u0422\u6193ar;\u6913pArrow;\u61f5reve;\u4311eft\u02d2\u043a\0\u0446\0\u0450ightVector;\u6950eeVector;\u695eector\u0100;B\u0459\u045a\u61bdar;\u6956ight\u01d4\u0467\0\u0471eeVector;\u695fector\u0100;B\u047a\u047b\u61c1ar;\u6957ee\u0100;A\u0486\u0487\u62a4rrow;\u61a7\u0100ct\u0492\u0497r;\uc000\ud835\udc9frok;\u4110\u0800NTacdfglmopqstux\u04bd\u04c0\u04c4\u04cb\u04de\u04e2\u04e7\u04ee\u04f5\u0521\u052f\u0536\u0552\u055d\u0560\u0565G;\u414aH\u803b\xd0\u40d0cute\u803b\xc9\u40c9\u0180aiy\u04d2\u04d7\u04dcron;\u411arc\u803b\xca\u40ca;\u442dot;\u4116r;\uc000\ud835\udd08rave\u803b\xc8\u40c8ement;\u6208\u0100ap\u04fa\u04fecr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65fberySmallSquare;\u65ab\u0100gp\u0526\u052aon;\u4118f;\uc000\ud835\udd3csilon;\u4395u\u0100ai\u053c\u0549l\u0100;T\u0542\u0543\u6a75ilde;\u6242librium;\u61cc\u0100ci\u0557\u055ar;\u6130m;\u6a73a;\u4397ml\u803b\xcb\u40cb\u0100ip\u056a\u056fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058d\u05b2\u05ccy;\u4424r;\uc000\ud835\udd09lled\u0253\u0597\0\0\u05a3mallSquare;\u65fcerySmallSquare;\u65aa\u0370\u05ba\0\u05bf\0\0\u05c4f;\uc000\ud835\udd3dAll;\u6200riertrf;\u6131c\xf2\u05cb\u0600JTabcdfgorst\u05e8\u05ec\u05ef\u05fa\u0600\u0612\u0616\u061b\u061d\u0623\u066c\u0672cy;\u4403\u803b>\u403emma\u0100;d\u05f7\u05f8\u4393;\u43dcreve;\u411e\u0180eiy\u0607\u060c\u0610dil;\u4122rc;\u411c;\u4413ot;\u4120r;\uc000\ud835\udd0a;\u62d9pf;\uc000\ud835\udd3eeater\u0300EFGLST\u0635\u0644\u064e\u0656\u065b\u0666qual\u0100;L\u063e\u063f\u6265ess;\u62dbullEqual;\u6267reater;\u6aa2ess;\u6277lantEqual;\u6a7eilde;\u6273cr;\uc000\ud835\udca2;\u626b\u0400Aacfiosu\u0685\u068b\u0696\u069b\u069e\u06aa\u06be\u06caRDcy;\u442a\u0100ct\u0690\u0694ek;\u42c7;\u405eirc;\u4124r;\u610clbertSpace;\u610b\u01f0\u06af\0\u06b2f;\u610dizontalLine;\u6500\u0100ct\u06c3\u06c5\xf2\u06a9rok;\u4126mp\u0144\u06d0\u06d8ownHum\xf0\u012fqual;\u624f\u0700EJOacdfgmnostu\u06fa\u06fe\u0703\u0707\u070e\u071a\u071e\u0721\u0728\u0744\u0778\u078b\u078f\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803b\xcd\u40cd\u0100iy\u0713\u0718rc\u803b\xce\u40ce;\u4418ot;\u4130r;\u6111rave\u803b\xcc\u40cc\u0180;ap\u0720\u072f\u073f\u0100cg\u0734\u0737r;\u412ainaryI;\u6148lie\xf3\u03dd\u01f4\u0749\0\u0762\u0100;e\u074d\u074e\u622c\u0100gr\u0753\u0758ral;\u622bsection;\u62c2isible\u0100CT\u076c\u0772omma;\u6063imes;\u6062\u0180gpt\u077f\u0783\u0788on;\u412ef;\uc000\ud835\udd40a;\u4399cr;\u6110ilde;\u4128\u01eb\u079a\0\u079ecy;\u4406l\u803b\xcf\u40cf\u0280cfosu\u07ac\u07b7\u07bc\u07c2\u07d0\u0100iy\u07b1\u07b5rc;\u4134;\u4419r;\uc000\ud835\udd0dpf;\uc000\ud835\udd41\u01e3\u07c7\0\u07ccr;\uc000\ud835\udca5rcy;\u4408kcy;\u4404\u0380HJacfos\u07e4\u07e8\u07ec\u07f1\u07fd\u0802\u0808cy;\u4425cy;\u440cppa;\u439a\u0100ey\u07f6\u07fbdil;\u4136;\u441ar;\uc000\ud835\udd0epf;\uc000\ud835\udd42cr;\uc000\ud835\udca6\u0580JTaceflmost\u0825\u0829\u082c\u0850\u0863\u09b3\u09b8\u09c7\u09cd\u0a37\u0a47cy;\u4409\u803b<\u403c\u0280cmnpr\u0837\u083c\u0841\u0844\u084dute;\u4139bda;\u439bg;\u67ealacetrf;\u6112r;\u619e\u0180aey\u0857\u085c\u0861ron;\u413ddil;\u413b;\u441b\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087e\u08a9\u08b1\u08e0\u08e6\u08fc\u092f\u095b\u0390\u096a\u0100nr\u0883\u088fgleBracket;\u67e8row\u0180;BR\u0899\u089a\u089e\u6190ar;\u61e4ightArrow;\u61c6eiling;\u6308o\u01f5\u08b7\0\u08c3bleBracket;\u67e6n\u01d4\u08c8\0\u08d2eeVector;\u6961ector\u0100;B\u08db\u08dc\u61c3ar;\u6959loor;\u630aight\u0100AV\u08ef\u08f5rrow;\u6194ector;\u694e\u0100er\u0901\u0917e\u0180;AV\u0909\u090a\u0910\u62a3rrow;\u61a4ector;\u695aiangle\u0180;BE\u0924\u0925\u0929\u62b2ar;\u69cfqual;\u62b4p\u0180DTV\u0937\u0942\u094cownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61bfar;\u6958ector\u0100;B\u0965\u0966\u61bcar;\u6952ight\xe1\u039cs\u0300EFGLST\u097e\u098b\u0995\u099d\u09a2\u09adqualGreater;\u62daullEqual;\u6266reater;\u6276ess;\u6aa1lantEqual;\u6a7dilde;\u6272r;\uc000\ud835\udd0f\u0100;e\u09bd\u09be\u62d8ftarrow;\u61daidot;\u413f\u0180npw\u09d4\u0a16\u0a1bg\u0200LRlr\u09de\u09f7\u0a02\u0a10eft\u0100AR\u09e6\u09ecrrow;\u67f5ightArrow;\u67f7ightArrow;\u67f6eft\u0100ar\u03b3\u0a0aight\xe1\u03bfight\xe1\u03caf;\uc000\ud835\udd43er\u0100LR\u0a22\u0a2ceftArrow;\u6199ightArrow;\u6198\u0180cht\u0a3e\u0a40\u0a42\xf2\u084c;\u61b0rok;\u4141;\u626a\u0400acefiosu\u0a5a\u0a5d\u0a60\u0a77\u0a7c\u0a85\u0a8b\u0a8ep;\u6905y;\u441c\u0100dl\u0a65\u0a6fiumSpace;\u605flintrf;\u6133r;\uc000\ud835\udd10nusPlus;\u6213pf;\uc000\ud835\udd44c\xf2\u0a76;\u439c\u0480Jacefostu\u0aa3\u0aa7\u0aad\u0ac0\u0b14\u0b19\u0d91\u0d97\u0d9ecy;\u440acute;\u4143\u0180aey\u0ab4\u0ab9\u0aberon;\u4147dil;\u4145;\u441d\u0180gsw\u0ac7\u0af0\u0b0eative\u0180MTV\u0ad3\u0adf\u0ae8ediumSpace;\u600bhi\u0100cn\u0ae6\u0ad8\xeb\u0ad9eryThi\xee\u0ad9ted\u0100GL\u0af8\u0b06reaterGreate\xf2\u0673essLes\xf3\u0a48Line;\u400ar;\uc000\ud835\udd11\u0200Bnpt\u0b22\u0b28\u0b37\u0b3areak;\u6060BreakingSpace;\u40a0f;\u6115\u0680;CDEGHLNPRSTV\u0b55\u0b56\u0b6a\u0b7c\u0ba1\u0beb\u0c04\u0c5e\u0c84\u0ca6\u0cd8\u0d61\u0d85\u6aec\u0100ou\u0b5b\u0b64ngruent;\u6262pCap;\u626doubleVerticalBar;\u6226\u0180lqx\u0b83\u0b8a\u0b9bement;\u6209ual\u0100;T\u0b92\u0b93\u6260ilde;\uc000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0bb6\u0bb7\u0bbd\u0bc9\u0bd3\u0bd8\u0be5\u626fqual;\u6271ullEqual;\uc000\u2267\u0338reater;\uc000\u226b\u0338ess;\u6279lantEqual;\uc000\u2a7e\u0338ilde;\u6275ump\u0144\u0bf2\u0bfdownHump;\uc000\u224e\u0338qual;\uc000\u224f\u0338e\u0100fs\u0c0a\u0c27tTriangle\u0180;BE\u0c1a\u0c1b\u0c21\u62eaar;\uc000\u29cf\u0338qual;\u62ecs\u0300;EGLST\u0c35\u0c36\u0c3c\u0c44\u0c4b\u0c58\u626equal;\u6270reater;\u6278ess;\uc000\u226a\u0338lantEqual;\uc000\u2a7d\u0338ilde;\u6274ested\u0100GL\u0c68\u0c79reaterGreater;\uc000\u2aa2\u0338essLess;\uc000\u2aa1\u0338recedes\u0180;ES\u0c92\u0c93\u0c9b\u6280qual;\uc000\u2aaf\u0338lantEqual;\u62e0\u0100ei\u0cab\u0cb9verseElement;\u620cghtTriangle\u0180;BE\u0ccb\u0ccc\u0cd2\u62ebar;\uc000\u29d0\u0338qual;\u62ed\u0100qu\u0cdd\u0d0cuareSu\u0100bp\u0ce8\u0cf9set\u0100;E\u0cf0\u0cf3\uc000\u228f\u0338qual;\u62e2erset\u0100;E\u0d03\u0d06\uc000\u2290\u0338qual;\u62e3\u0180bcp\u0d13\u0d24\u0d4eset\u0100;E\u0d1b\u0d1e\uc000\u2282\u20d2qual;\u6288ceeds\u0200;EST\u0d32\u0d33\u0d3b\u0d46\u6281qual;\uc000\u2ab0\u0338lantEqual;\u62e1ilde;\uc000\u227f\u0338erset\u0100;E\u0d58\u0d5b\uc000\u2283\u20d2qual;\u6289ilde\u0200;EFT\u0d6e\u0d6f\u0d75\u0d7f\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uc000\ud835\udca9ilde\u803b\xd1\u40d1;\u439d\u0700Eacdfgmoprstuv\u0dbd\u0dc2\u0dc9\u0dd5\u0ddb\u0de0\u0de7\u0dfc\u0e02\u0e20\u0e22\u0e32\u0e3f\u0e44lig;\u4152cute\u803b\xd3\u40d3\u0100iy\u0dce\u0dd3rc\u803b\xd4\u40d4;\u441eblac;\u4150r;\uc000\ud835\udd12rave\u803b\xd2\u40d2\u0180aei\u0dee\u0df2\u0df6cr;\u414cga;\u43a9cron;\u439fpf;\uc000\ud835\udd46enCurly\u0100DQ\u0e0e\u0e1aoubleQuote;\u601cuote;\u6018;\u6a54\u0100cl\u0e27\u0e2cr;\uc000\ud835\udcaaash\u803b\xd8\u40d8i\u016c\u0e37\u0e3cde\u803b\xd5\u40d5es;\u6a37ml\u803b\xd6\u40d6er\u0100BP\u0e4b\u0e60\u0100ar\u0e50\u0e53r;\u603eac\u0100ek\u0e5a\u0e5c;\u63deet;\u63b4arenthesis;\u63dc\u0480acfhilors\u0e7f\u0e87\u0e8a\u0e8f\u0e92\u0e94\u0e9d\u0eb0\u0efcrtialD;\u6202y;\u441fr;\uc000\ud835\udd13i;\u43a6;\u43a0usMinus;\u40b1\u0100ip\u0ea2\u0eadncareplan\xe5\u069df;\u6119\u0200;eio\u0eb9\u0eba\u0ee0\u0ee4\u6abbcedes\u0200;EST\u0ec8\u0ec9\u0ecf\u0eda\u627aqual;\u6aaflantEqual;\u627cilde;\u627eme;\u6033\u0100dp\u0ee9\u0eeeuct;\u620fortion\u0100;a\u0225\u0ef9l;\u621d\u0100ci\u0f01\u0f06r;\uc000\ud835\udcab;\u43a8\u0200Ufos\u0f11\u0f16\u0f1b\u0f1fOT\u803b\"\u4022r;\uc000\ud835\udd14pf;\u611acr;\uc000\ud835\udcac\u0600BEacefhiorsu\u0f3e\u0f43\u0f47\u0f60\u0f73\u0fa7\u0faa\u0fad\u1096\u10a9\u10b4\u10bearr;\u6910G\u803b\xae\u40ae\u0180cnr\u0f4e\u0f53\u0f56ute;\u4154g;\u67ebr\u0100;t\u0f5c\u0f5d\u61a0l;\u6916\u0180aey\u0f67\u0f6c\u0f71ron;\u4158dil;\u4156;\u4420\u0100;v\u0f78\u0f79\u611cerse\u0100EU\u0f82\u0f99\u0100lq\u0f87\u0f8eement;\u620builibrium;\u61cbpEquilibrium;\u696fr\xbb\u0f79o;\u43a1ght\u0400ACDFTUVa\u0fc1\u0feb\u0ff3\u1022\u1028\u105b\u1087\u03d8\u0100nr\u0fc6\u0fd2gleBracket;\u67e9row\u0180;BL\u0fdc\u0fdd\u0fe1\u6192ar;\u61e5eftArrow;\u61c4eiling;\u6309o\u01f5\u0ff9\0\u1005bleBracket;\u67e7n\u01d4\u100a\0\u1014eeVector;\u695dector\u0100;B\u101d\u101e\u61c2ar;\u6955loor;\u630b\u0100er\u102d\u1043e\u0180;AV\u1035\u1036\u103c\u62a2rrow;\u61a6ector;\u695biangle\u0180;BE\u1050\u1051\u1055\u62b3ar;\u69d0qual;\u62b5p\u0180DTV\u1063\u106e\u1078ownVector;\u694feeVector;\u695cector\u0100;B\u1082\u1083\u61bear;\u6954ector\u0100;B\u1091\u1092\u61c0ar;\u6953\u0100pu\u109b\u109ef;\u611dndImplies;\u6970ightarrow;\u61db\u0100ch\u10b9\u10bcr;\u611b;\u61b1leDelayed;\u69f4\u0680HOacfhimoqstu\u10e4\u10f1\u10f7\u10fd\u1119\u111e\u1151\u1156\u1161\u1167\u11b5\u11bb\u11bf\u0100Cc\u10e9\u10eeHcy;\u4429y;\u4428FTcy;\u442ccute;\u415a\u0280;aeiy\u1108\u1109\u110e\u1113\u1117\u6abcron;\u4160dil;\u415erc;\u415c;\u4421r;\uc000\ud835\udd16ort\u0200DLRU\u112a\u1134\u113e\u1149ownArrow\xbb\u041eeftArrow\xbb\u089aightArrow\xbb\u0fddpArrow;\u6191gma;\u43a3allCircle;\u6218pf;\uc000\ud835\udd4a\u0272\u116d\0\0\u1170t;\u621aare\u0200;ISU\u117b\u117c\u1189\u11af\u65a1ntersection;\u6293u\u0100bp\u118f\u119eset\u0100;E\u1197\u1198\u628fqual;\u6291erset\u0100;E\u11a8\u11a9\u6290qual;\u6292nion;\u6294cr;\uc000\ud835\udcaear;\u62c6\u0200bcmp\u11c8\u11db\u1209\u120b\u0100;s\u11cd\u11ce\u62d0et\u0100;E\u11cd\u11d5qual;\u6286\u0100ch\u11e0\u1205eeds\u0200;EST\u11ed\u11ee\u11f4\u11ff\u627bqual;\u6ab0lantEqual;\u627dilde;\u627fTh\xe1\u0f8c;\u6211\u0180;es\u1212\u1213\u1223\u62d1rset\u0100;E\u121c\u121d\u6283qual;\u6287et\xbb\u1213\u0580HRSacfhiors\u123e\u1244\u1249\u1255\u125e\u1271\u1276\u129f\u12c2\u12c8\u12d1ORN\u803b\xde\u40deADE;\u6122\u0100Hc\u124e\u1252cy;\u440by;\u4426\u0100bu\u125a\u125c;\u4009;\u43a4\u0180aey\u1265\u126a\u126fron;\u4164dil;\u4162;\u4422r;\uc000\ud835\udd17\u0100ei\u127b\u1289\u01f2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128e\u1298kSpace;\uc000\u205f\u200aSpace;\u6009lde\u0200;EFT\u12ab\u12ac\u12b2\u12bc\u623cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uc000\ud835\udd4bipleDot;\u60db\u0100ct\u12d6\u12dbr;\uc000\ud835\udcafrok;\u4166\u0ae1\u12f7\u130e\u131a\u1326\0\u132c\u1331\0\0\0\0\0\u1338\u133d\u1377\u1385\0\u13ff\u1404\u140a\u1410\u0100cr\u12fb\u1301ute\u803b\xda\u40dar\u0100;o\u1307\u1308\u619fcir;\u6949r\u01e3\u1313\0\u1316y;\u440eve;\u416c\u0100iy\u131e\u1323rc\u803b\xdb\u40db;\u4423blac;\u4170r;\uc000\ud835\udd18rave\u803b\xd9\u40d9acr;\u416a\u0100di\u1341\u1369er\u0100BP\u1348\u135d\u0100ar\u134d\u1350r;\u405fac\u0100ek\u1357\u1359;\u63dfet;\u63b5arenthesis;\u63ddon\u0100;P\u1370\u1371\u62c3lus;\u628e\u0100gp\u137b\u137fon;\u4172f;\uc000\ud835\udd4c\u0400ADETadps\u1395\u13ae\u13b8\u13c4\u03e8\u13d2\u13d7\u13f3rrow\u0180;BD\u1150\u13a0\u13a4ar;\u6912ownArrow;\u61c5ownArrow;\u6195quilibrium;\u696eee\u0100;A\u13cb\u13cc\u62a5rrow;\u61a5own\xe1\u03f3er\u0100LR\u13de\u13e8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13f9\u13fa\u43d2on;\u43a5ing;\u416ecr;\uc000\ud835\udcb0ilde;\u4168ml\u803b\xdc\u40dc\u0480Dbcdefosv\u1427\u142c\u1430\u1433\u143e\u1485\u148a\u1490\u1496ash;\u62abar;\u6aeby;\u4412ash\u0100;l\u143b\u143c\u62a9;\u6ae6\u0100er\u1443\u1445;\u62c1\u0180bty\u144c\u1450\u147aar;\u6016\u0100;i\u144f\u1455cal\u0200BLST\u1461\u1465\u146a\u1474ar;\u6223ine;\u407ceparator;\u6758ilde;\u6240ThinSpace;\u600ar;\uc000\ud835\udd19pf;\uc000\ud835\udd4dcr;\uc000\ud835\udcb1dash;\u62aa\u0280cefos\u14a7\u14ac\u14b1\u14b6\u14bcirc;\u4174dge;\u62c0r;\uc000\ud835\udd1apf;\uc000\ud835\udd4ecr;\uc000\ud835\udcb2\u0200fios\u14cb\u14d0\u14d2\u14d8r;\uc000\ud835\udd1b;\u439epf;\uc000\ud835\udd4fcr;\uc000\ud835\udcb3\u0480AIUacfosu\u14f1\u14f5\u14f9\u14fd\u1504\u150f\u1514\u151a\u1520cy;\u442fcy;\u4407cy;\u442ecute\u803b\xdd\u40dd\u0100iy\u1509\u150drc;\u4176;\u442br;\uc000\ud835\udd1cpf;\uc000\ud835\udd50cr;\uc000\ud835\udcb4ml;\u4178\u0400Hacdefos\u1535\u1539\u153f\u154b\u154f\u155d\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417d;\u4417ot;\u417b\u01f2\u1554\0\u155boWidt\xe8\u0ad9a;\u4396r;\u6128pf;\u6124cr;\uc000\ud835\udcb5\u0be1\u1583\u158a\u1590\0\u15b0\u15b6\u15bf\0\0\0\0\u15c6\u15db\u15eb\u165f\u166d\0\u1695\u169b\u16b2\u16b9\0\u16becute\u803b\xe1\u40e1reve;\u4103\u0300;Ediuy\u159c\u159d\u15a1\u15a3\u15a8\u15ad\u623e;\uc000\u223e\u0333;\u623frc\u803b\xe2\u40e2te\u80bb\xb4\u0306;\u4430lig\u803b\xe6\u40e6\u0100;r\xb2\u15ba;\uc000\ud835\udd1erave\u803b\xe0\u40e0\u0100ep\u15ca\u15d6\u0100fp\u15cf\u15d4sym;\u6135\xe8\u15d3ha;\u43b1\u0100ap\u15dfc\u0100cl\u15e4\u15e7r;\u4101g;\u6a3f\u0264\u15f0\0\0\u160a\u0280;adsv\u15fa\u15fb\u15ff\u1601\u1607\u6227nd;\u6a55;\u6a5clope;\u6a58;\u6a5a\u0380;elmrsz\u1618\u1619\u161b\u161e\u163f\u164f\u1659\u6220;\u69a4e\xbb\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163a\u163c\u163e;\u69a8;\u69a9;\u69aa;\u69ab;\u69ac;\u69ad;\u69ae;\u69aft\u0100;v\u1645\u1646\u621fb\u0100;d\u164c\u164d\u62be;\u699d\u0100pt\u1654\u1657h;\u6222\xbb\xb9arr;\u637c\u0100gp\u1663\u1667on;\u4105f;\uc000\ud835\udd52\u0380;Eaeiop\u12c1\u167b\u167d\u1682\u1684\u1687\u168a;\u6a70cir;\u6a6f;\u624ad;\u624bs;\u4027rox\u0100;e\u12c1\u1692\xf1\u1683ing\u803b\xe5\u40e5\u0180cty\u16a1\u16a6\u16a8r;\uc000\ud835\udcb6;\u402amp\u0100;e\u12c1\u16af\xf1\u0288ilde\u803b\xe3\u40e3ml\u803b\xe4\u40e4\u0100ci\u16c2\u16c8onin\xf4\u0272nt;\u6a11\u0800Nabcdefiklnoprsu\u16ed\u16f1\u1730\u173c\u1743\u1748\u1778\u177d\u17e0\u17e6\u1839\u1850\u170d\u193d\u1948\u1970ot;\u6aed\u0100cr\u16f6\u171ek\u0200ceps\u1700\u1705\u170d\u1713ong;\u624cpsilon;\u43f6rime;\u6035im\u0100;e\u171a\u171b\u623dq;\u62cd\u0176\u1722\u1726ee;\u62bded\u0100;g\u172c\u172d\u6305e\xbb\u172drk\u0100;t\u135c\u1737brk;\u63b6\u0100oy\u1701\u1741;\u4431quo;\u601e\u0280cmprt\u1753\u175b\u1761\u1764\u1768aus\u0100;e\u010a\u0109ptyv;\u69b0s\xe9\u170cno\xf5\u0113\u0180ahw\u176f\u1771\u1773;\u43b2;\u6136een;\u626cr;\uc000\ud835\udd1fg\u0380costuvw\u178d\u179d\u17b3\u17c1\u17d5\u17db\u17de\u0180aiu\u1794\u1796\u179a\xf0\u0760rc;\u65efp\xbb\u1371\u0180dpt\u17a4\u17a8\u17adot;\u6a00lus;\u6a01imes;\u6a02\u0271\u17b9\0\0\u17becup;\u6a06ar;\u6605riangle\u0100du\u17cd\u17d2own;\u65bdp;\u65b3plus;\u6a04e\xe5\u1444\xe5\u14adarow;\u690d\u0180ako\u17ed\u1826\u1835\u0100cn\u17f2\u1823k\u0180lst\u17fa\u05ab\u1802ozenge;\u69ebriangle\u0200;dlr\u1812\u1813\u1818\u181d\u65b4own;\u65beeft;\u65c2ight;\u65b8k;\u6423\u01b1\u182b\0\u1833\u01b2\u182f\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183e\u184d\u0100;q\u1843\u1846\uc000=\u20e5uiv;\uc000\u2261\u20e5t;\u6310\u0200ptwx\u1859\u185e\u1867\u186cf;\uc000\ud835\udd53\u0100;t\u13cb\u1863om\xbb\u13cctie;\u62c8\u0600DHUVbdhmptuv\u1885\u1896\u18aa\u18bb\u18d7\u18db\u18ec\u18ff\u1905\u190a\u1910\u1921\u0200LRlr\u188e\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18a1\u18a2\u18a4\u18a6\u18a8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18b3\u18b5\u18b7\u18b9;\u655d;\u655a;\u655c;\u6559\u0380;HLRhlr\u18ca\u18cb\u18cd\u18cf\u18d1\u18d3\u18d5\u6551;\u656c;\u6563;\u6560;\u656b;\u6562;\u655fox;\u69c9\u0200LRlr\u18e4\u18e6\u18e8\u18ea;\u6555;\u6552;\u6510;\u650c\u0280;DUdu\u06bd\u18f7\u18f9\u18fb\u18fd;\u6565;\u6568;\u652c;\u6534inus;\u629flus;\u629eimes;\u62a0\u0200LRlr\u1919\u191b\u191d\u191f;\u655b;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193b\u6502;\u656a;\u6561;\u655e;\u653c;\u6524;\u651c\u0100ev\u0123\u1942bar\u803b\xa6\u40a6\u0200ceio\u1951\u1956\u195a\u1960r;\uc000\ud835\udcb7mi;\u604fm\u0100;e\u171a\u171cl\u0180;bh\u1968\u1969\u196b\u405c;\u69c5sub;\u67c8\u016c\u1974\u197el\u0100;e\u1979\u197a\u6022t\xbb\u197ap\u0180;Ee\u012f\u1985\u1987;\u6aae\u0100;q\u06dc\u06db\u0ce1\u19a7\0\u19e8\u1a11\u1a15\u1a32\0\u1a37\u1a50\0\0\u1ab4\0\0\u1ac1\0\0\u1b21\u1b2e\u1b4d\u1b52\0\u1bfd\0\u1c0c\u0180cpr\u19ad\u19b2\u19ddute;\u4107\u0300;abcds\u19bf\u19c0\u19c4\u19ca\u19d5\u19d9\u6229nd;\u6a44rcup;\u6a49\u0100au\u19cf\u19d2p;\u6a4bp;\u6a47ot;\u6a40;\uc000\u2229\ufe00\u0100eo\u19e2\u19e5t;\u6041\xee\u0693\u0200aeiu\u19f0\u19fb\u1a01\u1a05\u01f0\u19f5\0\u19f8s;\u6a4don;\u410ddil\u803b\xe7\u40e7rc;\u4109ps\u0100;s\u1a0c\u1a0d\u6a4cm;\u6a50ot;\u410b\u0180dmn\u1a1b\u1a20\u1a26il\u80bb\xb8\u01adptyv;\u69b2t\u8100\xa2;e\u1a2d\u1a2e\u40a2r\xe4\u01b2r;\uc000\ud835\udd20\u0180cei\u1a3d\u1a40\u1a4dy;\u4447ck\u0100;m\u1a47\u1a48\u6713ark\xbb\u1a48;\u43c7r\u0380;Ecefms\u1a5f\u1a60\u1a62\u1a6b\u1aa4\u1aaa\u1aae\u65cb;\u69c3\u0180;el\u1a69\u1a6a\u1a6d\u42c6q;\u6257e\u0261\u1a74\0\0\u1a88rrow\u0100lr\u1a7c\u1a81eft;\u61baight;\u61bb\u0280RSacd\u1a92\u1a94\u1a96\u1a9a\u1a9f\xbb\u0f47;\u64c8st;\u629birc;\u629aash;\u629dnint;\u6a10id;\u6aefcir;\u69c2ubs\u0100;u\u1abb\u1abc\u6663it\xbb\u1abc\u02ec\u1ac7\u1ad4\u1afa\0\u1b0aon\u0100;e\u1acd\u1ace\u403a\u0100;q\xc7\xc6\u026d\u1ad9\0\0\u1ae2a\u0100;t\u1ade\u1adf\u402c;\u4040\u0180;fl\u1ae8\u1ae9\u1aeb\u6201\xee\u1160e\u0100mx\u1af1\u1af6ent\xbb\u1ae9e\xf3\u024d\u01e7\u1afe\0\u1b07\u0100;d\u12bb\u1b02ot;\u6a6dn\xf4\u0246\u0180fry\u1b10\u1b14\u1b17;\uc000\ud835\udd54o\xe4\u0254\u8100\xa9;s\u0155\u1b1dr;\u6117\u0100ao\u1b25\u1b29rr;\u61b5ss;\u6717\u0100cu\u1b32\u1b37r;\uc000\ud835\udcb8\u0100bp\u1b3c\u1b44\u0100;e\u1b41\u1b42\u6acf;\u6ad1\u0100;e\u1b49\u1b4a\u6ad0;\u6ad2dot;\u62ef\u0380delprvw\u1b60\u1b6c\u1b77\u1b82\u1bac\u1bd4\u1bf9arr\u0100lr\u1b68\u1b6a;\u6938;\u6935\u0270\u1b72\0\0\u1b75r;\u62dec;\u62dfarr\u0100;p\u1b7f\u1b80\u61b6;\u693d\u0300;bcdos\u1b8f\u1b90\u1b96\u1ba1\u1ba5\u1ba8\u622arcap;\u6a48\u0100au\u1b9b\u1b9ep;\u6a46p;\u6a4aot;\u628dr;\u6a45;\uc000\u222a\ufe00\u0200alrv\u1bb5\u1bbf\u1bde\u1be3rr\u0100;m\u1bbc\u1bbd\u61b7;\u693cy\u0180evw\u1bc7\u1bd4\u1bd8q\u0270\u1bce\0\0\u1bd2re\xe3\u1b73u\xe3\u1b75ee;\u62ceedge;\u62cfen\u803b\xa4\u40a4earrow\u0100lr\u1bee\u1bf3eft\xbb\u1b80ight\xbb\u1bbde\xe4\u1bdd\u0100ci\u1c01\u1c07onin\xf4\u01f7nt;\u6231lcty;\u632d\u0980AHabcdefhijlorstuwz\u1c38\u1c3b\u1c3f\u1c5d\u1c69\u1c75\u1c8a\u1c9e\u1cac\u1cb7\u1cfb\u1cff\u1d0d\u1d7b\u1d91\u1dab\u1dbb\u1dc6\u1dcdr\xf2\u0381ar;\u6965\u0200glrs\u1c48\u1c4d\u1c52\u1c54ger;\u6020eth;\u6138\xf2\u1133h\u0100;v\u1c5a\u1c5b\u6010\xbb\u090a\u016b\u1c61\u1c67arow;\u690fa\xe3\u0315\u0100ay\u1c6e\u1c73ron;\u410f;\u4434\u0180;ao\u0332\u1c7c\u1c84\u0100gr\u02bf\u1c81r;\u61catseq;\u6a77\u0180glm\u1c91\u1c94\u1c98\u803b\xb0\u40b0ta;\u43b4ptyv;\u69b1\u0100ir\u1ca3\u1ca8sht;\u697f;\uc000\ud835\udd21ar\u0100lr\u1cb3\u1cb5\xbb\u08dc\xbb\u101e\u0280aegsv\u1cc2\u0378\u1cd6\u1cdc\u1ce0m\u0180;os\u0326\u1cca\u1cd4nd\u0100;s\u0326\u1cd1uit;\u6666amma;\u43ddin;\u62f2\u0180;io\u1ce7\u1ce8\u1cf8\u40f7de\u8100\xf7;o\u1ce7\u1cf0ntimes;\u62c7n\xf8\u1cf7cy;\u4452c\u026f\u1d06\0\0\u1d0arn;\u631eop;\u630d\u0280lptuw\u1d18\u1d1d\u1d22\u1d49\u1d55lar;\u4024f;\uc000\ud835\udd55\u0280;emps\u030b\u1d2d\u1d37\u1d3d\u1d42q\u0100;d\u0352\u1d33ot;\u6251inus;\u6238lus;\u6214quare;\u62a1blebarwedg\xe5\xfan\u0180adh\u112e\u1d5d\u1d67ownarrow\xf3\u1c83arpoon\u0100lr\u1d72\u1d76ef\xf4\u1cb4igh\xf4\u1cb6\u0162\u1d7f\u1d85karo\xf7\u0f42\u026f\u1d8a\0\0\u1d8ern;\u631fop;\u630c\u0180cot\u1d98\u1da3\u1da6\u0100ry\u1d9d\u1da1;\uc000\ud835\udcb9;\u4455l;\u69f6rok;\u4111\u0100dr\u1db0\u1db4ot;\u62f1i\u0100;f\u1dba\u1816\u65bf\u0100ah\u1dc0\u1dc3r\xf2\u0429a\xf2\u0fa6angle;\u69a6\u0100ci\u1dd2\u1dd5y;\u445fgrarr;\u67ff\u0900Dacdefglmnopqrstux\u1e01\u1e09\u1e19\u1e38\u0578\u1e3c\u1e49\u1e61\u1e7e\u1ea5\u1eaf\u1ebd\u1ee1\u1f2a\u1f37\u1f44\u1f4e\u1f5a\u0100Do\u1e06\u1d34o\xf4\u1c89\u0100cs\u1e0e\u1e14ute\u803b\xe9\u40e9ter;\u6a6e\u0200aioy\u1e22\u1e27\u1e31\u1e36ron;\u411br\u0100;c\u1e2d\u1e2e\u6256\u803b\xea\u40ealon;\u6255;\u444dot;\u4117\u0100Dr\u1e41\u1e45ot;\u6252;\uc000\ud835\udd22\u0180;rs\u1e50\u1e51\u1e57\u6a9aave\u803b\xe8\u40e8\u0100;d\u1e5c\u1e5d\u6a96ot;\u6a98\u0200;ils\u1e6a\u1e6b\u1e72\u1e74\u6a99nters;\u63e7;\u6113\u0100;d\u1e79\u1e7a\u6a95ot;\u6a97\u0180aps\u1e85\u1e89\u1e97cr;\u4113ty\u0180;sv\u1e92\u1e93\u1e95\u6205et\xbb\u1e93p\u01001;\u1e9d\u1ea4\u0133\u1ea1\u1ea3;\u6004;\u6005\u6003\u0100gs\u1eaa\u1eac;\u414bp;\u6002\u0100gp\u1eb4\u1eb8on;\u4119f;\uc000\ud835\udd56\u0180als\u1ec4\u1ece\u1ed2r\u0100;s\u1eca\u1ecb\u62d5l;\u69e3us;\u6a71i\u0180;lv\u1eda\u1edb\u1edf\u43b5on\xbb\u1edb;\u43f5\u0200csuv\u1eea\u1ef3\u1f0b\u1f23\u0100io\u1eef\u1e31rc\xbb\u1e2e\u0269\u1ef9\0\0\u1efb\xed\u0548ant\u0100gl\u1f02\u1f06tr\xbb\u1e5dess\xbb\u1e7a\u0180aei\u1f12\u1f16\u1f1als;\u403dst;\u625fv\u0100;D\u0235\u1f20D;\u6a78parsl;\u69e5\u0100Da\u1f2f\u1f33ot;\u6253rr;\u6971\u0180cdi\u1f3e\u1f41\u1ef8r;\u612fo\xf4\u0352\u0100ah\u1f49\u1f4b;\u43b7\u803b\xf0\u40f0\u0100mr\u1f53\u1f57l\u803b\xeb\u40ebo;\u60ac\u0180cip\u1f61\u1f64\u1f67l;\u4021s\xf4\u056e\u0100eo\u1f6c\u1f74ctatio\xee\u0559nential\xe5\u0579\u09e1\u1f92\0\u1f9e\0\u1fa1\u1fa7\0\0\u1fc6\u1fcc\0\u1fd3\0\u1fe6\u1fea\u2000\0\u2008\u205allingdotse\xf1\u1e44y;\u4444male;\u6640\u0180ilr\u1fad\u1fb3\u1fc1lig;\u8000\ufb03\u0269\u1fb9\0\0\u1fbdg;\u8000\ufb00ig;\u8000\ufb04;\uc000\ud835\udd23lig;\u8000\ufb01lig;\uc000fj\u0180alt\u1fd9\u1fdc\u1fe1t;\u666dig;\u8000\ufb02ns;\u65b1of;\u4192\u01f0\u1fee\0\u1ff3f;\uc000\ud835\udd57\u0100ak\u05bf\u1ff7\u0100;v\u1ffc\u1ffd\u62d4;\u6ad9artint;\u6a0d\u0100ao\u200c\u2055\u0100cs\u2011\u2052\u03b1\u201a\u2030\u2038\u2045\u2048\0\u2050\u03b2\u2022\u2025\u2027\u202a\u202c\0\u202e\u803b\xbd\u40bd;\u6153\u803b\xbc\u40bc;\u6155;\u6159;\u615b\u01b3\u2034\0\u2036;\u6154;\u6156\u02b4\u203e\u2041\0\0\u2043\u803b\xbe\u40be;\u6157;\u615c5;\u6158\u01b6\u204c\0\u204e;\u615a;\u615d8;\u615el;\u6044wn;\u6322cr;\uc000\ud835\udcbb\u0880Eabcdefgijlnorstv\u2082\u2089\u209f\u20a5\u20b0\u20b4\u20f0\u20f5\u20fa\u20ff\u2103\u2112\u2138\u0317\u213e\u2152\u219e\u0100;l\u064d\u2087;\u6a8c\u0180cmp\u2090\u2095\u209dute;\u41f5ma\u0100;d\u209c\u1cda\u43b3;\u6a86reve;\u411f\u0100iy\u20aa\u20aerc;\u411d;\u4433ot;\u4121\u0200;lqs\u063e\u0642\u20bd\u20c9\u0180;qs\u063e\u064c\u20c4lan\xf4\u0665\u0200;cdl\u0665\u20d2\u20d5\u20e5c;\u6aa9ot\u0100;o\u20dc\u20dd\u6a80\u0100;l\u20e2\u20e3\u6a82;\u6a84\u0100;e\u20ea\u20ed\uc000\u22db\ufe00s;\u6a94r;\uc000\ud835\udd24\u0100;g\u0673\u061bmel;\u6137cy;\u4453\u0200;Eaj\u065a\u210c\u210e\u2110;\u6a92;\u6aa5;\u6aa4\u0200Eaes\u211b\u211d\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6a8arox\xbb\u2124\u0100;q\u212e\u212f\u6a88\u0100;q\u212e\u211bim;\u62e7pf;\uc000\ud835\udd58\u0100ci\u2143\u2146r;\u610am\u0180;el\u066b\u214e\u2150;\u6a8e;\u6a90\u8300>;cdlqr\u05ee\u2160\u216a\u216e\u2173\u2179\u0100ci\u2165\u2167;\u6aa7r;\u6a7aot;\u62d7Par;\u6995uest;\u6a7c\u0280adels\u2184\u216a\u2190\u0656\u219b\u01f0\u2189\0\u218epro\xf8\u209er;\u6978q\u0100lq\u063f\u2196les\xf3\u2088i\xed\u066b\u0100en\u21a3\u21adrtneqq;\uc000\u2269\ufe00\xc5\u21aa\u0500Aabcefkosy\u21c4\u21c7\u21f1\u21f5\u21fa\u2218\u221d\u222f\u2268\u227dr\xf2\u03a0\u0200ilmr\u21d0\u21d4\u21d7\u21dbrs\xf0\u1484f\xbb\u2024il\xf4\u06a9\u0100dr\u21e0\u21e4cy;\u444a\u0180;cw\u08f4\u21eb\u21efir;\u6948;\u61adar;\u610firc;\u4125\u0180alr\u2201\u220e\u2213rts\u0100;u\u2209\u220a\u6665it\xbb\u220alip;\u6026con;\u62b9r;\uc000\ud835\udd25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223a\u223e\u2243\u225e\u2263rr;\u61fftht;\u623bk\u0100lr\u2249\u2253eftarrow;\u61a9ightarrow;\u61aaf;\uc000\ud835\udd59bar;\u6015\u0180clt\u226f\u2274\u2278r;\uc000\ud835\udcbdas\xe8\u21f4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xbb\u1c5b\u0ae1\u22a3\0\u22aa\0\u22b8\u22c5\u22ce\0\u22d5\u22f3\0\0\u22f8\u2322\u2367\u2362\u237f\0\u2386\u23aa\u23b4cute\u803b\xed\u40ed\u0180;iy\u0771\u22b0\u22b5rc\u803b\xee\u40ee;\u4438\u0100cx\u22bc\u22bfy;\u4435cl\u803b\xa1\u40a1\u0100fr\u039f\u22c9;\uc000\ud835\udd26rave\u803b\xec\u40ec\u0200;ino\u073e\u22dd\u22e9\u22ee\u0100in\u22e2\u22e6nt;\u6a0ct;\u622dfin;\u69dcta;\u6129lig;\u4133\u0180aop\u22fe\u231a\u231d\u0180cgt\u2305\u2308\u2317r;\u412b\u0180elp\u071f\u230f\u2313in\xe5\u078ear\xf4\u0720h;\u4131f;\u62b7ed;\u41b5\u0280;cfot\u04f4\u232c\u2331\u233d\u2341are;\u6105in\u0100;t\u2338\u2339\u621eie;\u69dddo\xf4\u2319\u0280;celp\u0757\u234c\u2350\u235b\u2361al;\u62ba\u0100gr\u2355\u2359er\xf3\u1563\xe3\u234darhk;\u6a17rod;\u6a3c\u0200cgpt\u236f\u2372\u2376\u237by;\u4451on;\u412ff;\uc000\ud835\udd5aa;\u43b9uest\u803b\xbf\u40bf\u0100ci\u238a\u238fr;\uc000\ud835\udcben\u0280;Edsv\u04f4\u239b\u239d\u23a1\u04f3;\u62f9ot;\u62f5\u0100;v\u23a6\u23a7\u62f4;\u62f3\u0100;i\u0777\u23aelde;\u4129\u01eb\u23b8\0\u23bccy;\u4456l\u803b\xef\u40ef\u0300cfmosu\u23cc\u23d7\u23dc\u23e1\u23e7\u23f5\u0100iy\u23d1\u23d5rc;\u4135;\u4439r;\uc000\ud835\udd27ath;\u4237pf;\uc000\ud835\udd5b\u01e3\u23ec\0\u23f1r;\uc000\ud835\udcbfrcy;\u4458kcy;\u4454\u0400acfghjos\u240b\u2416\u2422\u2427\u242d\u2431\u2435\u243bppa\u0100;v\u2413\u2414\u43ba;\u43f0\u0100ey\u241b\u2420dil;\u4137;\u443ar;\uc000\ud835\udd28reen;\u4138cy;\u4445cy;\u445cpf;\uc000\ud835\udd5ccr;\uc000\ud835\udcc0\u0b80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248d\u2491\u250e\u253d\u255a\u2580\u264e\u265e\u2665\u2679\u267d\u269a\u26b2\u26d8\u275d\u2768\u278b\u27c0\u2801\u2812\u0180art\u2477\u247a\u247cr\xf2\u09c6\xf2\u0395ail;\u691barr;\u690e\u0100;g\u0994\u248b;\u6a8bar;\u6962\u0963\u24a5\0\u24aa\0\u24b1\0\0\0\0\0\u24b5\u24ba\0\u24c6\u24c8\u24cd\0\u24f9ute;\u413amptyv;\u69b4ra\xee\u084cbda;\u43bbg\u0180;dl\u088e\u24c1\u24c3;\u6991\xe5\u088e;\u6a85uo\u803b\xab\u40abr\u0400;bfhlpst\u0899\u24de\u24e6\u24e9\u24eb\u24ee\u24f1\u24f5\u0100;f\u089d\u24e3s;\u691fs;\u691d\xeb\u2252p;\u61abl;\u6939im;\u6973l;\u61a2\u0180;ae\u24ff\u2500\u2504\u6aabil;\u6919\u0100;s\u2509\u250a\u6aad;\uc000\u2aad\ufe00\u0180abr\u2515\u2519\u251drr;\u690crk;\u6772\u0100ak\u2522\u252cc\u0100ek\u2528\u252a;\u407b;\u405b\u0100es\u2531\u2533;\u698bl\u0100du\u2539\u253b;\u698f;\u698d\u0200aeuy\u2546\u254b\u2556\u2558ron;\u413e\u0100di\u2550\u2554il;\u413c\xec\u08b0\xe2\u2529;\u443b\u0200cqrs\u2563\u2566\u256d\u257da;\u6936uo\u0100;r\u0e19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694bh;\u61b2\u0280;fgqs\u258b\u258c\u0989\u25f3\u25ff\u6264t\u0280ahlrt\u2598\u25a4\u25b7\u25c2\u25e8rrow\u0100;t\u0899\u25a1a\xe9\u24f6arpoon\u0100du\u25af\u25b4own\xbb\u045ap\xbb\u0966eftarrows;\u61c7ight\u0180ahs\u25cd\u25d6\u25derrow\u0100;s\u08f4\u08a7arpoon\xf3\u0f98quigarro\xf7\u21f0hreetimes;\u62cb\u0180;qs\u258b\u0993\u25falan\xf4\u09ac\u0280;cdgs\u09ac\u260a\u260d\u261d\u2628c;\u6aa8ot\u0100;o\u2614\u2615\u6a7f\u0100;r\u261a\u261b\u6a81;\u6a83\u0100;e\u2622\u2625\uc000\u22da\ufe00s;\u6a93\u0280adegs\u2633\u2639\u263d\u2649\u264bppro\xf8\u24c6ot;\u62d6q\u0100gq\u2643\u2645\xf4\u0989gt\xf2\u248c\xf4\u099bi\xed\u09b2\u0180ilr\u2655\u08e1\u265asht;\u697c;\uc000\ud835\udd29\u0100;E\u099c\u2663;\u6a91\u0161\u2669\u2676r\u0100du\u25b2\u266e\u0100;l\u0965\u2673;\u696alk;\u6584cy;\u4459\u0280;acht\u0a48\u2688\u268b\u2691\u2696r\xf2\u25c1orne\xf2\u1d08ard;\u696bri;\u65fa\u0100io\u269f\u26a4dot;\u4140ust\u0100;a\u26ac\u26ad\u63b0che\xbb\u26ad\u0200Eaes\u26bb\u26bd\u26c9\u26d4;\u6268p\u0100;p\u26c3\u26c4\u6a89rox\xbb\u26c4\u0100;q\u26ce\u26cf\u6a87\u0100;q\u26ce\u26bbim;\u62e6\u0400abnoptwz\u26e9\u26f4\u26f7\u271a\u272f\u2741\u2747\u2750\u0100nr\u26ee\u26f1g;\u67ecr;\u61fdr\xeb\u08c1g\u0180lmr\u26ff\u270d\u2714eft\u0100ar\u09e6\u2707ight\xe1\u09f2apsto;\u67fcight\xe1\u09fdparrow\u0100lr\u2725\u2729ef\xf4\u24edight;\u61ac\u0180afl\u2736\u2739\u273dr;\u6985;\uc000\ud835\udd5dus;\u6a2dimes;\u6a34\u0161\u274b\u274fst;\u6217\xe1\u134e\u0180;ef\u2757\u2758\u1800\u65cange\xbb\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277c\u2785\u2787r\xf2\u08a8orne\xf2\u1d8car\u0100;d\u0f98\u2783;\u696d;\u600eri;\u62bf\u0300achiqt\u2798\u279d\u0a40\u27a2\u27ae\u27bbquo;\u6039r;\uc000\ud835\udcc1m\u0180;eg\u09b2\u27aa\u27ac;\u6a8d;\u6a8f\u0100bu\u252a\u27b3o\u0100;r\u0e1f\u27b9;\u601arok;\u4142\u8400<;cdhilqr\u082b\u27d2\u2639\u27dc\u27e0\u27e5\u27ea\u27f0\u0100ci\u27d7\u27d9;\u6aa6r;\u6a79re\xe5\u25f2mes;\u62c9arr;\u6976uest;\u6a7b\u0100Pi\u27f5\u27f9ar;\u6996\u0180;ef\u2800\u092d\u181b\u65c3r\u0100du\u2807\u280dshar;\u694ahar;\u6966\u0100en\u2817\u2821rtneqq;\uc000\u2268\ufe00\xc5\u281e\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288e\u2893\u28a0\u28a5\u28a8\u28da\u28e2\u28e4\u0a83\u28f3\u2902Dot;\u623a\u0200clpr\u284e\u2852\u2863\u287dr\u803b\xaf\u40af\u0100et\u2857\u2859;\u6642\u0100;e\u285e\u285f\u6720se\xbb\u285f\u0100;s\u103b\u2868to\u0200;dlu\u103b\u2873\u2877\u287bow\xee\u048cef\xf4\u090f\xf0\u13d1ker;\u65ae\u0100oy\u2887\u288cmma;\u6a29;\u443cash;\u6014asuredangle\xbb\u1626r;\uc000\ud835\udd2ao;\u6127\u0180cdn\u28af\u28b4\u28c9ro\u803b\xb5\u40b5\u0200;acd\u1464\u28bd\u28c0\u28c4s\xf4\u16a7ir;\u6af0ot\u80bb\xb7\u01b5us\u0180;bd\u28d2\u1903\u28d3\u6212\u0100;u\u1d3c\u28d8;\u6a2a\u0163\u28de\u28e1p;\u6adb\xf2\u2212\xf0\u0a81\u0100dp\u28e9\u28eeels;\u62a7f;\uc000\ud835\udd5e\u0100ct\u28f8\u28fdr;\uc000\ud835\udcc2pos\xbb\u159d\u0180;lm\u2909\u290a\u290d\u43bctimap;\u62b8\u0c00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297e\u2989\u2998\u29da\u29e9\u2a15\u2a1a\u2a58\u2a5d\u2a83\u2a95\u2aa4\u2aa8\u2b04\u2b07\u2b44\u2b7f\u2bae\u2c34\u2c67\u2c7c\u2ce9\u0100gt\u2947\u294b;\uc000\u22d9\u0338\u0100;v\u2950\u0bcf\uc000\u226b\u20d2\u0180elt\u295a\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61cdightarrow;\u61ce;\uc000\u22d8\u0338\u0100;v\u297b\u0c47\uc000\u226a\u20d2ightarrow;\u61cf\u0100Dd\u298e\u2993ash;\u62afash;\u62ae\u0280bcnpt\u29a3\u29a7\u29ac\u29b1\u29ccla\xbb\u02deute;\u4144g;\uc000\u2220\u20d2\u0280;Eiop\u0d84\u29bc\u29c0\u29c5\u29c8;\uc000\u2a70\u0338d;\uc000\u224b\u0338s;\u4149ro\xf8\u0d84ur\u0100;a\u29d3\u29d4\u666el\u0100;s\u29d3\u0b38\u01f3\u29df\0\u29e3p\u80bb\xa0\u0b37mp\u0100;e\u0bf9\u0c00\u0280aeouy\u29f4\u29fe\u2a03\u2a10\u2a13\u01f0\u29f9\0\u29fb;\u6a43on;\u4148dil;\u4146ng\u0100;d\u0d7e\u2a0aot;\uc000\u2a6d\u0338p;\u6a42;\u443dash;\u6013\u0380;Aadqsx\u0b92\u2a29\u2a2d\u2a3b\u2a41\u2a45\u2a50rr;\u61d7r\u0100hr\u2a33\u2a36k;\u6924\u0100;o\u13f2\u13f0ot;\uc000\u2250\u0338ui\xf6\u0b63\u0100ei\u2a4a\u2a4ear;\u6928\xed\u0b98ist\u0100;s\u0ba0\u0b9fr;\uc000\ud835\udd2b\u0200Eest\u0bc5\u2a66\u2a79\u2a7c\u0180;qs\u0bbc\u2a6d\u0be1\u0180;qs\u0bbc\u0bc5\u2a74lan\xf4\u0be2i\xed\u0bea\u0100;r\u0bb6\u2a81\xbb\u0bb7\u0180Aap\u2a8a\u2a8d\u2a91r\xf2\u2971rr;\u61aear;\u6af2\u0180;sv\u0f8d\u2a9c\u0f8c\u0100;d\u2aa1\u2aa2\u62fc;\u62facy;\u445a\u0380AEadest\u2ab7\u2aba\u2abe\u2ac2\u2ac5\u2af6\u2af9r\xf2\u2966;\uc000\u2266\u0338rr;\u619ar;\u6025\u0200;fqs\u0c3b\u2ace\u2ae3\u2aeft\u0100ar\u2ad4\u2ad9rro\xf7\u2ac1ightarro\xf7\u2a90\u0180;qs\u0c3b\u2aba\u2aealan\xf4\u0c55\u0100;s\u0c55\u2af4\xbb\u0c36i\xed\u0c5d\u0100;r\u0c35\u2afei\u0100;e\u0c1a\u0c25i\xe4\u0d90\u0100pt\u2b0c\u2b11f;\uc000\ud835\udd5f\u8180\xac;in\u2b19\u2b1a\u2b36\u40acn\u0200;Edv\u0b89\u2b24\u2b28\u2b2e;\uc000\u22f9\u0338ot;\uc000\u22f5\u0338\u01e1\u0b89\u2b33\u2b35;\u62f7;\u62f6i\u0100;v\u0cb8\u2b3c\u01e1\u0cb8\u2b41\u2b43;\u62fe;\u62fd\u0180aor\u2b4b\u2b63\u2b69r\u0200;ast\u0b7b\u2b55\u2b5a\u2b5flle\xec\u0b7bl;\uc000\u2afd\u20e5;\uc000\u2202\u0338lint;\u6a14\u0180;ce\u0c92\u2b70\u2b73u\xe5\u0ca5\u0100;c\u0c98\u2b78\u0100;e\u0c92\u2b7d\xf1\u0c98\u0200Aait\u2b88\u2b8b\u2b9d\u2ba7r\xf2\u2988rr\u0180;cw\u2b94\u2b95\u2b99\u619b;\uc000\u2933\u0338;\uc000\u219d\u0338ghtarrow\xbb\u2b95ri\u0100;e\u0ccb\u0cd6\u0380chimpqu\u2bbd\u2bcd\u2bd9\u2b04\u0b78\u2be4\u2bef\u0200;cer\u0d32\u2bc6\u0d37\u2bc9u\xe5\u0d45;\uc000\ud835\udcc3ort\u026d\u2b05\0\0\u2bd6ar\xe1\u2b56m\u0100;e\u0d6e\u2bdf\u0100;q\u0d74\u0d73su\u0100bp\u2beb\u2bed\xe5\u0cf8\xe5\u0d0b\u0180bcp\u2bf6\u2c11\u2c19\u0200;Ees\u2bff\u2c00\u0d22\u2c04\u6284;\uc000\u2ac5\u0338et\u0100;e\u0d1b\u2c0bq\u0100;q\u0d23\u2c00c\u0100;e\u0d32\u2c17\xf1\u0d38\u0200;Ees\u2c22\u2c23\u0d5f\u2c27\u6285;\uc000\u2ac6\u0338et\u0100;e\u0d58\u2c2eq\u0100;q\u0d60\u2c23\u0200gilr\u2c3d\u2c3f\u2c45\u2c47\xec\u0bd7lde\u803b\xf1\u40f1\xe7\u0c43iangle\u0100lr\u2c52\u2c5ceft\u0100;e\u0c1a\u2c5a\xf1\u0c26ight\u0100;e\u0ccb\u2c65\xf1\u0cd7\u0100;m\u2c6c\u2c6d\u43bd\u0180;es\u2c74\u2c75\u2c79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2c8f\u2c94\u2c99\u2c9e\u2ca3\u2cb0\u2cb6\u2cd3\u2ce3ash;\u62adarr;\u6904p;\uc000\u224d\u20d2ash;\u62ac\u0100et\u2ca8\u2cac;\uc000\u2265\u20d2;\uc000>\u20d2nfin;\u69de\u0180Aet\u2cbd\u2cc1\u2cc5rr;\u6902;\uc000\u2264\u20d2\u0100;r\u2cca\u2ccd\uc000<\u20d2ie;\uc000\u22b4\u20d2\u0100At\u2cd8\u2cdcrr;\u6903rie;\uc000\u22b5\u20d2im;\uc000\u223c\u20d2\u0180Aan\u2cf0\u2cf4\u2d02rr;\u61d6r\u0100hr\u2cfa\u2cfdk;\u6923\u0100;o\u13e7\u13e5ear;\u6927\u1253\u1a95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2d2d\0\u2d38\u2d48\u2d60\u2d65\u2d72\u2d84\u1b07\0\0\u2d8d\u2dab\0\u2dc8\u2dce\0\u2ddc\u2e19\u2e2b\u2e3e\u2e43\u0100cs\u2d31\u1a97ute\u803b\xf3\u40f3\u0100iy\u2d3c\u2d45r\u0100;c\u1a9e\u2d42\u803b\xf4\u40f4;\u443e\u0280abios\u1aa0\u2d52\u2d57\u01c8\u2d5alac;\u4151v;\u6a38old;\u69bclig;\u4153\u0100cr\u2d69\u2d6dir;\u69bf;\uc000\ud835\udd2c\u036f\u2d79\0\0\u2d7c\0\u2d82n;\u42dbave\u803b\xf2\u40f2;\u69c1\u0100bm\u2d88\u0df4ar;\u69b5\u0200acit\u2d95\u2d98\u2da5\u2da8r\xf2\u1a80\u0100ir\u2d9d\u2da0r;\u69beoss;\u69bbn\xe5\u0e52;\u69c0\u0180aei\u2db1\u2db5\u2db9cr;\u414dga;\u43c9\u0180cdn\u2dc0\u2dc5\u01cdron;\u43bf;\u69b6pf;\uc000\ud835\udd60\u0180ael\u2dd4\u2dd7\u01d2r;\u69b7rp;\u69b9\u0380;adiosv\u2dea\u2deb\u2dee\u2e08\u2e0d\u2e10\u2e16\u6228r\xf2\u1a86\u0200;efm\u2df7\u2df8\u2e02\u2e05\u6a5dr\u0100;o\u2dfe\u2dff\u6134f\xbb\u2dff\u803b\xaa\u40aa\u803b\xba\u40bagof;\u62b6r;\u6a56lope;\u6a57;\u6a5b\u0180clo\u2e1f\u2e21\u2e27\xf2\u2e01ash\u803b\xf8\u40f8l;\u6298i\u016c\u2e2f\u2e34de\u803b\xf5\u40f5es\u0100;a\u01db\u2e3as;\u6a36ml\u803b\xf6\u40f6bar;\u633d\u0ae1\u2e5e\0\u2e7d\0\u2e80\u2e9d\0\u2ea2\u2eb9\0\0\u2ecb\u0e9c\0\u2f13\0\0\u2f2b\u2fbc\0\u2fc8r\u0200;ast\u0403\u2e67\u2e72\u0e85\u8100\xb6;l\u2e6d\u2e6e\u40b6le\xec\u0403\u0269\u2e78\0\0\u2e7bm;\u6af3;\u6afdy;\u443fr\u0280cimpt\u2e8b\u2e8f\u2e93\u1865\u2e97nt;\u4025od;\u402eil;\u6030enk;\u6031r;\uc000\ud835\udd2d\u0180imo\u2ea8\u2eb0\u2eb4\u0100;v\u2ead\u2eae\u43c6;\u43d5ma\xf4\u0a76ne;\u660e\u0180;tv\u2ebf\u2ec0\u2ec8\u43c0chfork\xbb\u1ffd;\u43d6\u0100au\u2ecf\u2edfn\u0100ck\u2ed5\u2eddk\u0100;h\u21f4\u2edb;\u610e\xf6\u21f4s\u0480;abcdemst\u2ef3\u2ef4\u1908\u2ef9\u2efd\u2f04\u2f06\u2f0a\u2f0e\u402bcir;\u6a23ir;\u6a22\u0100ou\u1d40\u2f02;\u6a25;\u6a72n\u80bb\xb1\u0e9dim;\u6a26wo;\u6a27\u0180ipu\u2f19\u2f20\u2f25ntint;\u6a15f;\uc000\ud835\udd61nd\u803b\xa3\u40a3\u0500;Eaceinosu\u0ec8\u2f3f\u2f41\u2f44\u2f47\u2f81\u2f89\u2f92\u2f7e\u2fb6;\u6ab3p;\u6ab7u\xe5\u0ed9\u0100;c\u0ece\u2f4c\u0300;acens\u0ec8\u2f59\u2f5f\u2f66\u2f68\u2f7eppro\xf8\u2f43urlye\xf1\u0ed9\xf1\u0ece\u0180aes\u2f6f\u2f76\u2f7approx;\u6ab9qq;\u6ab5im;\u62e8i\xed\u0edfme\u0100;s\u2f88\u0eae\u6032\u0180Eas\u2f78\u2f90\u2f7a\xf0\u2f75\u0180dfp\u0eec\u2f99\u2faf\u0180als\u2fa0\u2fa5\u2faalar;\u632eine;\u6312urf;\u6313\u0100;t\u0efb\u2fb4\xef\u0efbrel;\u62b0\u0100ci\u2fc0\u2fc5r;\uc000\ud835\udcc5;\u43c8ncsp;\u6008\u0300fiopsu\u2fda\u22e2\u2fdf\u2fe5\u2feb\u2ff1r;\uc000\ud835\udd2epf;\uc000\ud835\udd62rime;\u6057cr;\uc000\ud835\udcc6\u0180aeo\u2ff8\u3009\u3013t\u0100ei\u2ffe\u3005rnion\xf3\u06b0nt;\u6a16st\u0100;e\u3010\u3011\u403f\xf1\u1f19\xf4\u0f14\u0a80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30e0\u310e\u312b\u3147\u3162\u3172\u318e\u3206\u3215\u3224\u3229\u3258\u326e\u3272\u3290\u32b0\u32b7\u0180art\u3047\u304a\u304cr\xf2\u10b3\xf2\u03ddail;\u691car\xf2\u1c65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307f\u308f\u3094\u30cc\u0100eu\u306d\u3071;\uc000\u223d\u0331te;\u4155i\xe3\u116emptyv;\u69b3g\u0200;del\u0fd1\u3089\u308b\u308d;\u6992;\u69a5\xe5\u0fd1uo\u803b\xbb\u40bbr\u0580;abcfhlpstw\u0fdc\u30ac\u30af\u30b7\u30b9\u30bc\u30be\u30c0\u30c3\u30c7\u30cap;\u6975\u0100;f\u0fe0\u30b4s;\u6920;\u6933s;\u691e\xeb\u225d\xf0\u272el;\u6945im;\u6974l;\u61a3;\u619d\u0100ai\u30d1\u30d5il;\u691ao\u0100;n\u30db\u30dc\u6236al\xf3\u0f1e\u0180abr\u30e7\u30ea\u30eer\xf2\u17e5rk;\u6773\u0100ak\u30f3\u30fdc\u0100ek\u30f9\u30fb;\u407d;\u405d\u0100es\u3102\u3104;\u698cl\u0100du\u310a\u310c;\u698e;\u6990\u0200aeuy\u3117\u311c\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xec\u0ff2\xe2\u30fa;\u4440\u0200clqs\u3134\u3137\u313d\u3144a;\u6937dhar;\u6969uo\u0100;r\u020e\u020dh;\u61b3\u0180acg\u314e\u315f\u0f44l\u0200;ips\u0f78\u3158\u315b\u109cn\xe5\u10bbar\xf4\u0fa9t;\u65ad\u0180ilr\u3169\u1023\u316esht;\u697d;\uc000\ud835\udd2f\u0100ao\u3177\u3186r\u0100du\u317d\u317f\xbb\u047b\u0100;l\u1091\u3184;\u696c\u0100;v\u318b\u318c\u43c1;\u43f1\u0180gns\u3195\u31f9\u31fcht\u0300ahlrst\u31a4\u31b0\u31c2\u31d8\u31e4\u31eerrow\u0100;t\u0fdc\u31ada\xe9\u30c8arpoon\u0100du\u31bb\u31bfow\xee\u317ep\xbb\u1092eft\u0100ah\u31ca\u31d0rrow\xf3\u0feaarpoon\xf3\u0551ightarrows;\u61c9quigarro\xf7\u30cbhreetimes;\u62ccg;\u42daingdotse\xf1\u1f32\u0180ahm\u320d\u3210\u3213r\xf2\u0feaa\xf2\u0551;\u600foust\u0100;a\u321e\u321f\u63b1che\xbb\u321fmid;\u6aee\u0200abpt\u3232\u323d\u3240\u3252\u0100nr\u3237\u323ag;\u67edr;\u61fer\xeb\u1003\u0180afl\u3247\u324a\u324er;\u6986;\uc000\ud835\udd63us;\u6a2eimes;\u6a35\u0100ap\u325d\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6a12ar\xf2\u31e3\u0200achq\u327b\u3280\u10bc\u3285quo;\u603ar;\uc000\ud835\udcc7\u0100bu\u30fb\u328ao\u0100;r\u0214\u0213\u0180hir\u3297\u329b\u32a0re\xe5\u31f8mes;\u62cai\u0200;efl\u32aa\u1059\u1821\u32ab\u65b9tri;\u69celuhar;\u6968;\u611e\u0d61\u32d5\u32db\u32df\u332c\u3338\u3371\0\u337a\u33a4\0\0\u33ec\u33f0\0\u3428\u3448\u345a\u34ad\u34b1\u34ca\u34f1\0\u3616\0\0\u3633cute;\u415bqu\xef\u27ba\u0500;Eaceinpsy\u11ed\u32f3\u32f5\u32ff\u3302\u330b\u330f\u331f\u3326\u3329;\u6ab4\u01f0\u32fa\0\u32fc;\u6ab8on;\u4161u\xe5\u11fe\u0100;d\u11f3\u3307il;\u415frc;\u415d\u0180Eas\u3316\u3318\u331b;\u6ab6p;\u6abaim;\u62e9olint;\u6a13i\xed\u1204;\u4441ot\u0180;be\u3334\u1d47\u3335\u62c5;\u6a66\u0380Aacmstx\u3346\u334a\u3357\u335b\u335e\u3363\u336drr;\u61d8r\u0100hr\u3350\u3352\xeb\u2228\u0100;o\u0a36\u0a34t\u803b\xa7\u40a7i;\u403bwar;\u6929m\u0100in\u3369\xf0nu\xf3\xf1t;\u6736r\u0100;o\u3376\u2055\uc000\ud835\udd30\u0200acoy\u3382\u3386\u3391\u33a0rp;\u666f\u0100hy\u338b\u338fcy;\u4449;\u4448rt\u026d\u3399\0\0\u339ci\xe4\u1464ara\xec\u2e6f\u803b\xad\u40ad\u0100gm\u33a8\u33b4ma\u0180;fv\u33b1\u33b2\u33b2\u43c3;\u43c2\u0400;deglnpr\u12ab\u33c5\u33c9\u33ce\u33d6\u33de\u33e1\u33e6ot;\u6a6a\u0100;q\u12b1\u12b0\u0100;E\u33d3\u33d4\u6a9e;\u6aa0\u0100;E\u33db\u33dc\u6a9d;\u6a9fe;\u6246lus;\u6a24arr;\u6972ar\xf2\u113d\u0200aeit\u33f8\u3408\u340f\u3417\u0100ls\u33fd\u3404lsetm\xe9\u336ahp;\u6a33parsl;\u69e4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341c\u341d\u6aaa\u0100;s\u3422\u3423\u6aac;\uc000\u2aac\ufe00\u0180flp\u342e\u3433\u3442tcy;\u444c\u0100;b\u3438\u3439\u402f\u0100;a\u343e\u343f\u69c4r;\u633ff;\uc000\ud835\udd64a\u0100dr\u344d\u0402es\u0100;u\u3454\u3455\u6660it\xbb\u3455\u0180csu\u3460\u3479\u349f\u0100au\u3465\u346fp\u0100;s\u1188\u346b;\uc000\u2293\ufe00p\u0100;s\u11b4\u3475;\uc000\u2294\ufe00u\u0100bp\u347f\u348f\u0180;es\u1197\u119c\u3486et\u0100;e\u1197\u348d\xf1\u119d\u0180;es\u11a8\u11ad\u3496et\u0100;e\u11a8\u349d\xf1\u11ae\u0180;af\u117b\u34a6\u05b0r\u0165\u34ab\u05b1\xbb\u117car\xf2\u1148\u0200cemt\u34b9\u34be\u34c2\u34c5r;\uc000\ud835\udcc8tm\xee\xf1i\xec\u3415ar\xe6\u11be\u0100ar\u34ce\u34d5r\u0100;f\u34d4\u17bf\u6606\u0100an\u34da\u34edight\u0100ep\u34e3\u34eapsilo\xee\u1ee0h\xe9\u2eafs\xbb\u2852\u0280bcmnp\u34fb\u355e\u1209\u358b\u358e\u0480;Edemnprs\u350e\u350f\u3511\u3515\u351e\u3523\u352c\u3531\u3536\u6282;\u6ac5ot;\u6abd\u0100;d\u11da\u351aot;\u6ac3ult;\u6ac1\u0100Ee\u3528\u352a;\u6acb;\u628alus;\u6abfarr;\u6979\u0180eiu\u353d\u3552\u3555t\u0180;en\u350e\u3545\u354bq\u0100;q\u11da\u350feq\u0100;q\u352b\u3528m;\u6ac7\u0100bp\u355a\u355c;\u6ad5;\u6ad3c\u0300;acens\u11ed\u356c\u3572\u3579\u357b\u3326ppro\xf8\u32faurlye\xf1\u11fe\xf1\u11f3\u0180aes\u3582\u3588\u331bppro\xf8\u331aq\xf1\u3317g;\u666a\u0680123;Edehlmnps\u35a9\u35ac\u35af\u121c\u35b2\u35b4\u35c0\u35c9\u35d5\u35da\u35df\u35e8\u35ed\u803b\xb9\u40b9\u803b\xb2\u40b2\u803b\xb3\u40b3;\u6ac6\u0100os\u35b9\u35bct;\u6abeub;\u6ad8\u0100;d\u1222\u35c5ot;\u6ac4s\u0100ou\u35cf\u35d2l;\u67c9b;\u6ad7arr;\u697bult;\u6ac2\u0100Ee\u35e4\u35e6;\u6acc;\u628blus;\u6ac0\u0180eiu\u35f4\u3609\u360ct\u0180;en\u121c\u35fc\u3602q\u0100;q\u1222\u35b2eq\u0100;q\u35e7\u35e4m;\u6ac8\u0100bp\u3611\u3613;\u6ad4;\u6ad6\u0180Aan\u361c\u3620\u362drr;\u61d9r\u0100hr\u3626\u3628\xeb\u222e\u0100;o\u0a2b\u0a29war;\u692alig\u803b\xdf\u40df\u0be1\u3651\u365d\u3660\u12ce\u3673\u3679\0\u367e\u36c2\0\0\0\0\0\u36db\u3703\0\u3709\u376c\0\0\0\u3787\u0272\u3656\0\0\u365bget;\u6316;\u43c4r\xeb\u0e5f\u0180aey\u3666\u366b\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uc000\ud835\udd31\u0200eiko\u3686\u369d\u36b5\u36bc\u01f2\u368b\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369b\u43b8ym;\u43d1\u0100cn\u36a2\u36b2k\u0100as\u36a8\u36aeppro\xf8\u12c1im\xbb\u12acs\xf0\u129e\u0100as\u36ba\u36ae\xf0\u12c1rn\u803b\xfe\u40fe\u01ec\u031f\u36c6\u22e7es\u8180\xd7;bd\u36cf\u36d0\u36d8\u40d7\u0100;a\u190f\u36d5r;\u6a31;\u6a30\u0180eps\u36e1\u36e3\u3700\xe1\u2a4d\u0200;bcf\u0486\u36ec\u36f0\u36f4ot;\u6336ir;\u6af1\u0100;o\u36f9\u36fc\uc000\ud835\udd65rk;\u6ada\xe1\u3362rime;\u6034\u0180aip\u370f\u3712\u3764d\xe5\u1248\u0380adempst\u3721\u374d\u3740\u3751\u3757\u375c\u375fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65b5own\xbb\u1dbbeft\u0100;e\u2800\u373e\xf1\u092e;\u625cight\u0100;e\u32aa\u374b\xf1\u105aot;\u65ecinus;\u6a3alus;\u6a39b;\u69cdime;\u6a3bezium;\u63e2\u0180cht\u3772\u377d\u3781\u0100ry\u3777\u377b;\uc000\ud835\udcc9;\u4446cy;\u445brok;\u4167\u0100io\u378b\u378ex\xf4\u1777head\u0100lr\u3797\u37a0eftarro\xf7\u084fightarrow\xbb\u0f5d\u0900AHabcdfghlmoprstuw\u37d0\u37d3\u37d7\u37e4\u37f0\u37fc\u380e\u381c\u3823\u3834\u3851\u385d\u386b\u38a9\u38cc\u38d2\u38ea\u38f6r\xf2\u03edar;\u6963\u0100cr\u37dc\u37e2ute\u803b\xfa\u40fa\xf2\u1150r\u01e3\u37ea\0\u37edy;\u445eve;\u416d\u0100iy\u37f5\u37farc\u803b\xfb\u40fb;\u4443\u0180abh\u3803\u3806\u380br\xf2\u13adlac;\u4171a\xf2\u13c3\u0100ir\u3813\u3818sht;\u697e;\uc000\ud835\udd32rave\u803b\xf9\u40f9\u0161\u3827\u3831r\u0100lr\u382c\u382e\xbb\u0957\xbb\u1083lk;\u6580\u0100ct\u3839\u384d\u026f\u383f\0\0\u384arn\u0100;e\u3845\u3846\u631cr\xbb\u3846op;\u630fri;\u65f8\u0100al\u3856\u385acr;\u416b\u80bb\xa8\u0349\u0100gp\u3862\u3866on;\u4173f;\uc000\ud835\udd66\u0300adhlsu\u114b\u3878\u387d\u1372\u3891\u38a0own\xe1\u13b3arpoon\u0100lr\u3888\u388cef\xf4\u382digh\xf4\u382fi\u0180;hl\u3899\u389a\u389c\u43c5\xbb\u13faon\xbb\u389aparrows;\u61c8\u0180cit\u38b0\u38c4\u38c8\u026f\u38b6\0\0\u38c1rn\u0100;e\u38bc\u38bd\u631dr\xbb\u38bdop;\u630eng;\u416fri;\u65f9cr;\uc000\ud835\udcca\u0180dir\u38d9\u38dd\u38e2ot;\u62f0lde;\u4169i\u0100;f\u3730\u38e8\xbb\u1813\u0100am\u38ef\u38f2r\xf2\u38a8l\u803b\xfc\u40fcangle;\u69a7\u0780ABDacdeflnoprsz\u391c\u391f\u3929\u392d\u39b5\u39b8\u39bd\u39df\u39e4\u39e8\u39f3\u39f9\u39fd\u3a01\u3a20r\xf2\u03f7ar\u0100;v\u3926\u3927\u6ae8;\u6ae9as\xe8\u03e1\u0100nr\u3932\u3937grt;\u699c\u0380eknprst\u34e3\u3946\u394b\u3952\u395d\u3964\u3996app\xe1\u2415othin\xe7\u1e96\u0180hir\u34eb\u2ec8\u3959op\xf4\u2fb5\u0100;h\u13b7\u3962\xef\u318d\u0100iu\u3969\u396dgm\xe1\u33b3\u0100bp\u3972\u3984setneq\u0100;q\u397d\u3980\uc000\u228a\ufe00;\uc000\u2acb\ufe00setneq\u0100;q\u398f\u3992\uc000\u228b\ufe00;\uc000\u2acc\ufe00\u0100hr\u399b\u399fet\xe1\u369ciangle\u0100lr\u39aa\u39afeft\xbb\u0925ight\xbb\u1051y;\u4432ash\xbb\u1036\u0180elr\u39c4\u39d2\u39d7\u0180;be\u2dea\u39cb\u39cfar;\u62bbq;\u625alip;\u62ee\u0100bt\u39dc\u1468a\xf2\u1469r;\uc000\ud835\udd33tr\xe9\u39aesu\u0100bp\u39ef\u39f1\xbb\u0d1c\xbb\u0d59pf;\uc000\ud835\udd67ro\xf0\u0efbtr\xe9\u39b4\u0100cu\u3a06\u3a0br;\uc000\ud835\udccb\u0100bp\u3a10\u3a18n\u0100Ee\u3980\u3a16\xbb\u397en\u0100Ee\u3992\u3a1e\xbb\u3990igzag;\u699a\u0380cefoprs\u3a36\u3a3b\u3a56\u3a5b\u3a54\u3a61\u3a6airc;\u4175\u0100di\u3a40\u3a51\u0100bg\u3a45\u3a49ar;\u6a5fe\u0100;q\u15fa\u3a4f;\u6259erp;\u6118r;\uc000\ud835\udd34pf;\uc000\ud835\udd68\u0100;e\u1479\u3a66at\xe8\u1479cr;\uc000\ud835\udccc\u0ae3\u178e\u3a87\0\u3a8b\0\u3a90\u3a9b\0\0\u3a9d\u3aa8\u3aab\u3aaf\0\0\u3ac3\u3ace\0\u3ad8\u17dc\u17dftr\xe9\u17d1r;\uc000\ud835\udd35\u0100Aa\u3a94\u3a97r\xf2\u03c3r\xf2\u09f6;\u43be\u0100Aa\u3aa1\u3aa4r\xf2\u03b8r\xf2\u09eba\xf0\u2713is;\u62fb\u0180dpt\u17a4\u3ab5\u3abe\u0100fl\u3aba\u17a9;\uc000\ud835\udd69im\xe5\u17b2\u0100Aa\u3ac7\u3acar\xf2\u03cer\xf2\u0a01\u0100cq\u3ad2\u17b8r;\uc000\ud835\udccd\u0100pt\u17d6\u3adcr\xe9\u17d4\u0400acefiosu\u3af0\u3afd\u3b08\u3b0c\u3b11\u3b15\u3b1b\u3b21c\u0100uy\u3af6\u3afbte\u803b\xfd\u40fd;\u444f\u0100iy\u3b02\u3b06rc;\u4177;\u444bn\u803b\xa5\u40a5r;\uc000\ud835\udd36cy;\u4457pf;\uc000\ud835\udd6acr;\uc000\ud835\udcce\u0100cm\u3b26\u3b29y;\u444el\u803b\xff\u40ff\u0500acdefhiosw\u3b42\u3b48\u3b54\u3b58\u3b64\u3b69\u3b6d\u3b74\u3b7a\u3b80cute;\u417a\u0100ay\u3b4d\u3b52ron;\u417e;\u4437ot;\u417c\u0100et\u3b5d\u3b61tr\xe6\u155fa;\u43b6r;\uc000\ud835\udd37cy;\u4436grarr;\u61ddpf;\uc000\ud835\udd6bcr;\uc000\ud835\udccf\u0100jn\u3b85\u3b87;\u600dj;\u600c"
    .split("")
    .map((c) => c.charCodeAt(0)));

// Generated using scripts/write-decode-map.ts
const xmlDecodeTree = new Uint16Array(
// prettier-ignore
"\u0200aglq\t\x15\x18\x1b\u026d\x0f\0\0\x12p;\u4026os;\u4027t;\u403et;\u403cuot;\u4022"
    .split("")
    .map((c) => c.charCodeAt(0)));

// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
var _a;
const decodeMap = new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376],
]);
/**
 * Polyfill for `String.fromCodePoint`. It is used to create a string from a Unicode code point.
 */
const fromCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
(_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function (codePoint) {
    let output = "";
    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
        codePoint = 0xdc00 | (codePoint & 0x3ff);
    }
    output += String.fromCharCode(codePoint);
    return output;
};
/**
 * Replace the given code point with a replacement character if it is a
 * surrogate or is outside the valid range. Otherwise return the code
 * point unchanged.
 */
function replaceCodePoint(codePoint) {
    var _a;
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return 0xfffd;
    }
    return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
}

var CharCodes;
(function (CharCodes) {
    CharCodes[CharCodes["NUM"] = 35] = "NUM";
    CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
    CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
    CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
    CharCodes[CharCodes["NINE"] = 57] = "NINE";
    CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
    CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
    CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
    CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
    CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
    CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
    CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
/** Bit that needs to be set to convert an upper case ASCII character to lower case */
const TO_LOWER_BIT = 0b100000;
var BinTrieFlags;
(function (BinTrieFlags) {
    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code) {
    return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
    return ((code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F) ||
        (code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F));
}
function isAsciiAlphaNumeric$1(code) {
    return ((code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z) ||
        (code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z) ||
        isNumber(code));
}
/**
 * Checks if the given character is a valid end character for an entity in an attribute.
 *
 * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
 * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
 */
function isEntityInAttributeInvalidEnd$1(code) {
    return code === CharCodes.EQUALS || isAsciiAlphaNumeric$1(code);
}
var EntityDecoderState;
(function (EntityDecoderState) {
    EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
    EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
    EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
    EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
    EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function (DecodingMode) {
    /** Entities in text nodes that can end with any character. */
    DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
    /** Only allow entities terminated with a semicolon. */
    DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
    /** Entities in attributes have limitations on ending characters. */
    DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
/**
 * Token decoder with support of writing partial entities.
 */
class EntityDecoder {
    constructor(
    /** The tree used to decode entities. */
    decodeTree, 
    /**
     * The function that is called when a codepoint is decoded.
     *
     * For multi-byte named entities, this will be called multiple times,
     * with the second codepoint, and the same `consumed` value.
     *
     * @param codepoint The decoded codepoint.
     * @param consumed The number of bytes consumed by the decoder.
     */
    emitCodePoint, 
    /** An object that is used to produce errors. */
    errors) {
        this.decodeTree = decodeTree;
        this.emitCodePoint = emitCodePoint;
        this.errors = errors;
        /** The current state of the decoder. */
        this.state = EntityDecoderState.EntityStart;
        /** Characters that were consumed while parsing an entity. */
        this.consumed = 1;
        /**
         * The result of the entity.
         *
         * Either the result index of a numeric entity, or the codepoint of a
         * numeric entity.
         */
        this.result = 0;
        /** The current index in the decode tree. */
        this.treeIndex = 0;
        /** The number of characters that were consumed in excess. */
        this.excess = 1;
        /** The mode in which the decoder is operating. */
        this.decodeMode = DecodingMode.Strict;
    }
    /** Resets the instance to make it reusable. */
    startEntity(decodeMode) {
        this.decodeMode = decodeMode;
        this.state = EntityDecoderState.EntityStart;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.consumed = 1;
    }
    /**
     * Write an entity to the decoder. This can be called multiple times with partial entities.
     * If the entity is incomplete, the decoder will return -1.
     *
     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
     * entity is incomplete, and resume when the next string is written.
     *
     * @param string The string containing the entity (or a continuation of the entity).
     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    write(str, offset) {
        switch (this.state) {
            case EntityDecoderState.EntityStart: {
                if (str.charCodeAt(offset) === CharCodes.NUM) {
                    this.state = EntityDecoderState.NumericStart;
                    this.consumed += 1;
                    return this.stateNumericStart(str, offset + 1);
                }
                this.state = EntityDecoderState.NamedEntity;
                return this.stateNamedEntity(str, offset);
            }
            case EntityDecoderState.NumericStart: {
                return this.stateNumericStart(str, offset);
            }
            case EntityDecoderState.NumericDecimal: {
                return this.stateNumericDecimal(str, offset);
            }
            case EntityDecoderState.NumericHex: {
                return this.stateNumericHex(str, offset);
            }
            case EntityDecoderState.NamedEntity: {
                return this.stateNamedEntity(str, offset);
            }
        }
    }
    /**
     * Switches between the numeric decimal and hexadecimal states.
     *
     * Equivalent to the `Numeric character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNumericStart(str, offset) {
        if (offset >= str.length) {
            return -1;
        }
        if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
            this.state = EntityDecoderState.NumericHex;
            this.consumed += 1;
            return this.stateNumericHex(str, offset + 1);
        }
        this.state = EntityDecoderState.NumericDecimal;
        return this.stateNumericDecimal(str, offset);
    }
    addToNumericResult(str, start, end, base) {
        if (start !== end) {
            const digitCount = end - start;
            this.result =
                this.result * Math.pow(base, digitCount) +
                    parseInt(str.substr(start, digitCount), base);
            this.consumed += digitCount;
        }
    }
    /**
     * Parses a hexadecimal numeric entity.
     *
     * Equivalent to the `Hexademical character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNumericHex(str, offset) {
        const startIdx = offset;
        while (offset < str.length) {
            const char = str.charCodeAt(offset);
            if (isNumber(char) || isHexadecimalCharacter(char)) {
                offset += 1;
            }
            else {
                this.addToNumericResult(str, startIdx, offset, 16);
                return this.emitNumericEntity(char, 3);
            }
        }
        this.addToNumericResult(str, startIdx, offset, 16);
        return -1;
    }
    /**
     * Parses a decimal numeric entity.
     *
     * Equivalent to the `Decimal character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNumericDecimal(str, offset) {
        const startIdx = offset;
        while (offset < str.length) {
            const char = str.charCodeAt(offset);
            if (isNumber(char)) {
                offset += 1;
            }
            else {
                this.addToNumericResult(str, startIdx, offset, 10);
                return this.emitNumericEntity(char, 2);
            }
        }
        this.addToNumericResult(str, startIdx, offset, 10);
        return -1;
    }
    /**
     * Validate and emit a numeric entity.
     *
     * Implements the logic from the `Hexademical character reference start
     * state` and `Numeric character reference end state` in the HTML spec.
     *
     * @param lastCp The last code point of the entity. Used to see if the
     *               entity was terminated with a semicolon.
     * @param expectedLength The minimum number of characters that should be
     *                       consumed. Used to validate that at least one digit
     *                       was consumed.
     * @returns The number of characters that were consumed.
     */
    emitNumericEntity(lastCp, expectedLength) {
        var _a;
        // Ensure we consumed at least one digit.
        if (this.consumed <= expectedLength) {
            (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
        }
        // Figure out if this is a legit end of the entity
        if (lastCp === CharCodes.SEMI) {
            this.consumed += 1;
        }
        else if (this.decodeMode === DecodingMode.Strict) {
            return 0;
        }
        this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
        if (this.errors) {
            if (lastCp !== CharCodes.SEMI) {
                this.errors.missingSemicolonAfterCharacterReference();
            }
            this.errors.validateNumericCharacterReference(this.result);
        }
        return this.consumed;
    }
    /**
     * Parses a named entity.
     *
     * Equivalent to the `Named character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNamedEntity(str, offset) {
        const { decodeTree } = this;
        let current = decodeTree[this.treeIndex];
        // The mask is the number of bytes of the value, including the current byte.
        let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        for (; offset < str.length; offset++, this.excess++) {
            const char = str.charCodeAt(offset);
            this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
            if (this.treeIndex < 0) {
                return this.result === 0 ||
                    // If we are parsing an attribute
                    (this.decodeMode === DecodingMode.Attribute &&
                        // We shouldn't have consumed any characters after the entity,
                        (valueLength === 0 ||
                            // And there should be no invalid characters.
                            isEntityInAttributeInvalidEnd$1(char)))
                    ? 0
                    : this.emitNotTerminatedNamedEntity();
            }
            current = decodeTree[this.treeIndex];
            valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
            // If the branch is a value, store it and continue
            if (valueLength !== 0) {
                // If the entity is terminated by a semicolon, we are done.
                if (char === CharCodes.SEMI) {
                    return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
                }
                // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
                if (this.decodeMode !== DecodingMode.Strict) {
                    this.result = this.treeIndex;
                    this.consumed += this.excess;
                    this.excess = 0;
                }
            }
        }
        return -1;
    }
    /**
     * Emit a named entity that was not terminated with a semicolon.
     *
     * @returns The number of characters consumed.
     */
    emitNotTerminatedNamedEntity() {
        var _a;
        const { result, decodeTree } = this;
        const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
        this.emitNamedEntityData(result, valueLength, this.consumed);
        (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
        return this.consumed;
    }
    /**
     * Emit a named entity.
     *
     * @param result The index of the entity in the decode tree.
     * @param valueLength The number of bytes in the entity.
     * @param consumed The number of characters consumed.
     *
     * @returns The number of characters consumed.
     */
    emitNamedEntityData(result, valueLength, consumed) {
        const { decodeTree } = this;
        this.emitCodePoint(valueLength === 1
            ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH
            : decodeTree[result + 1], consumed);
        if (valueLength === 3) {
            // For multi-byte values, we need to emit the second byte.
            this.emitCodePoint(decodeTree[result + 2], consumed);
        }
        return consumed;
    }
    /**
     * Signal to the parser that the end of the input was reached.
     *
     * Remaining data will be emitted and relevant errors will be produced.
     *
     * @returns The number of characters consumed.
     */
    end() {
        var _a;
        switch (this.state) {
            case EntityDecoderState.NamedEntity: {
                // Emit a named entity if we have one.
                return this.result !== 0 &&
                    (this.decodeMode !== DecodingMode.Attribute ||
                        this.result === this.treeIndex)
                    ? this.emitNotTerminatedNamedEntity()
                    : 0;
            }
            // Otherwise, emit a numeric entity if we have one.
            case EntityDecoderState.NumericDecimal: {
                return this.emitNumericEntity(0, 2);
            }
            case EntityDecoderState.NumericHex: {
                return this.emitNumericEntity(0, 3);
            }
            case EntityDecoderState.NumericStart: {
                (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
                return 0;
            }
            case EntityDecoderState.EntityStart: {
                // Return 0 if we have no entity.
                return 0;
            }
        }
    }
}
/**
 * Creates a function that decodes entities in a string.
 *
 * @param decodeTree The decode tree.
 * @returns A function that decodes entities in a string.
 */
function getDecoder(decodeTree) {
    let ret = "";
    const decoder = new EntityDecoder(decodeTree, (str) => (ret += fromCodePoint(str)));
    return function decodeWithTrie(str, decodeMode) {
        let lastIndex = 0;
        let offset = 0;
        while ((offset = str.indexOf("&", offset)) >= 0) {
            ret += str.slice(lastIndex, offset);
            decoder.startEntity(decodeMode);
            const len = decoder.write(str, 
            // Skip the "&"
            offset + 1);
            if (len < 0) {
                lastIndex = offset + decoder.end();
                break;
            }
            lastIndex = offset + len;
            // If `len` is 0, skip the current `&` and continue.
            offset = len === 0 ? lastIndex + 1 : lastIndex;
        }
        const result = ret + str.slice(lastIndex);
        // Make sure we don't keep a reference to the final string.
        ret = "";
        return result;
    };
}
/**
 * Determines the branch of the current node that is taken given the current
 * character. This function is used to traverse the trie.
 *
 * @param decodeTree The trie.
 * @param current The current node.
 * @param nodeIdx The index right after the current node and its value.
 * @param char The current character.
 * @returns The index of the next node, or -1 if no branch is taken.
 */
function determineBranch(decodeTree, current, nodeIdx, char) {
    const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
    const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
    // Case 1: Single branch encoded in jump offset
    if (branchCount === 0) {
        return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
    }
    // Case 2: Multiple branches encoded in jump table
    if (jumpOffset) {
        const value = char - jumpOffset;
        return value < 0 || value >= branchCount
            ? -1
            : decodeTree[nodeIdx + value] - 1;
    }
    // Case 3: Multiple branches encoded in dictionary
    // Binary search for the character.
    let lo = nodeIdx;
    let hi = lo + branchCount - 1;
    while (lo <= hi) {
        const mid = (lo + hi) >>> 1;
        const midVal = decodeTree[mid];
        if (midVal < char) {
            lo = mid + 1;
        }
        else if (midVal > char) {
            hi = mid - 1;
        }
        else {
            return decodeTree[mid + branchCount];
        }
    }
    return -1;
}
getDecoder(htmlDecodeTree);
getDecoder(xmlDecodeTree);

/** All valid namespaces in HTML. */
var NS;
(function (NS) {
    NS["HTML"] = "http://www.w3.org/1999/xhtml";
    NS["MATHML"] = "http://www.w3.org/1998/Math/MathML";
    NS["SVG"] = "http://www.w3.org/2000/svg";
    NS["XLINK"] = "http://www.w3.org/1999/xlink";
    NS["XML"] = "http://www.w3.org/XML/1998/namespace";
    NS["XMLNS"] = "http://www.w3.org/2000/xmlns/";
})(NS = NS || (NS = {}));
var ATTRS;
(function (ATTRS) {
    ATTRS["TYPE"] = "type";
    ATTRS["ACTION"] = "action";
    ATTRS["ENCODING"] = "encoding";
    ATTRS["PROMPT"] = "prompt";
    ATTRS["NAME"] = "name";
    ATTRS["COLOR"] = "color";
    ATTRS["FACE"] = "face";
    ATTRS["SIZE"] = "size";
})(ATTRS = ATTRS || (ATTRS = {}));
/**
 * The mode of the document.
 *
 * @see {@link https://dom.spec.whatwg.org/#concept-document-limited-quirks}
 */
var DOCUMENT_MODE;
(function (DOCUMENT_MODE) {
    DOCUMENT_MODE["NO_QUIRKS"] = "no-quirks";
    DOCUMENT_MODE["QUIRKS"] = "quirks";
    DOCUMENT_MODE["LIMITED_QUIRKS"] = "limited-quirks";
})(DOCUMENT_MODE = DOCUMENT_MODE || (DOCUMENT_MODE = {}));
var TAG_NAMES;
(function (TAG_NAMES) {
    TAG_NAMES["A"] = "a";
    TAG_NAMES["ADDRESS"] = "address";
    TAG_NAMES["ANNOTATION_XML"] = "annotation-xml";
    TAG_NAMES["APPLET"] = "applet";
    TAG_NAMES["AREA"] = "area";
    TAG_NAMES["ARTICLE"] = "article";
    TAG_NAMES["ASIDE"] = "aside";
    TAG_NAMES["B"] = "b";
    TAG_NAMES["BASE"] = "base";
    TAG_NAMES["BASEFONT"] = "basefont";
    TAG_NAMES["BGSOUND"] = "bgsound";
    TAG_NAMES["BIG"] = "big";
    TAG_NAMES["BLOCKQUOTE"] = "blockquote";
    TAG_NAMES["BODY"] = "body";
    TAG_NAMES["BR"] = "br";
    TAG_NAMES["BUTTON"] = "button";
    TAG_NAMES["CAPTION"] = "caption";
    TAG_NAMES["CENTER"] = "center";
    TAG_NAMES["CODE"] = "code";
    TAG_NAMES["COL"] = "col";
    TAG_NAMES["COLGROUP"] = "colgroup";
    TAG_NAMES["DD"] = "dd";
    TAG_NAMES["DESC"] = "desc";
    TAG_NAMES["DETAILS"] = "details";
    TAG_NAMES["DIALOG"] = "dialog";
    TAG_NAMES["DIR"] = "dir";
    TAG_NAMES["DIV"] = "div";
    TAG_NAMES["DL"] = "dl";
    TAG_NAMES["DT"] = "dt";
    TAG_NAMES["EM"] = "em";
    TAG_NAMES["EMBED"] = "embed";
    TAG_NAMES["FIELDSET"] = "fieldset";
    TAG_NAMES["FIGCAPTION"] = "figcaption";
    TAG_NAMES["FIGURE"] = "figure";
    TAG_NAMES["FONT"] = "font";
    TAG_NAMES["FOOTER"] = "footer";
    TAG_NAMES["FOREIGN_OBJECT"] = "foreignObject";
    TAG_NAMES["FORM"] = "form";
    TAG_NAMES["FRAME"] = "frame";
    TAG_NAMES["FRAMESET"] = "frameset";
    TAG_NAMES["H1"] = "h1";
    TAG_NAMES["H2"] = "h2";
    TAG_NAMES["H3"] = "h3";
    TAG_NAMES["H4"] = "h4";
    TAG_NAMES["H5"] = "h5";
    TAG_NAMES["H6"] = "h6";
    TAG_NAMES["HEAD"] = "head";
    TAG_NAMES["HEADER"] = "header";
    TAG_NAMES["HGROUP"] = "hgroup";
    TAG_NAMES["HR"] = "hr";
    TAG_NAMES["HTML"] = "html";
    TAG_NAMES["I"] = "i";
    TAG_NAMES["IMG"] = "img";
    TAG_NAMES["IMAGE"] = "image";
    TAG_NAMES["INPUT"] = "input";
    TAG_NAMES["IFRAME"] = "iframe";
    TAG_NAMES["KEYGEN"] = "keygen";
    TAG_NAMES["LABEL"] = "label";
    TAG_NAMES["LI"] = "li";
    TAG_NAMES["LINK"] = "link";
    TAG_NAMES["LISTING"] = "listing";
    TAG_NAMES["MAIN"] = "main";
    TAG_NAMES["MALIGNMARK"] = "malignmark";
    TAG_NAMES["MARQUEE"] = "marquee";
    TAG_NAMES["MATH"] = "math";
    TAG_NAMES["MENU"] = "menu";
    TAG_NAMES["META"] = "meta";
    TAG_NAMES["MGLYPH"] = "mglyph";
    TAG_NAMES["MI"] = "mi";
    TAG_NAMES["MO"] = "mo";
    TAG_NAMES["MN"] = "mn";
    TAG_NAMES["MS"] = "ms";
    TAG_NAMES["MTEXT"] = "mtext";
    TAG_NAMES["NAV"] = "nav";
    TAG_NAMES["NOBR"] = "nobr";
    TAG_NAMES["NOFRAMES"] = "noframes";
    TAG_NAMES["NOEMBED"] = "noembed";
    TAG_NAMES["NOSCRIPT"] = "noscript";
    TAG_NAMES["OBJECT"] = "object";
    TAG_NAMES["OL"] = "ol";
    TAG_NAMES["OPTGROUP"] = "optgroup";
    TAG_NAMES["OPTION"] = "option";
    TAG_NAMES["P"] = "p";
    TAG_NAMES["PARAM"] = "param";
    TAG_NAMES["PLAINTEXT"] = "plaintext";
    TAG_NAMES["PRE"] = "pre";
    TAG_NAMES["RB"] = "rb";
    TAG_NAMES["RP"] = "rp";
    TAG_NAMES["RT"] = "rt";
    TAG_NAMES["RTC"] = "rtc";
    TAG_NAMES["RUBY"] = "ruby";
    TAG_NAMES["S"] = "s";
    TAG_NAMES["SCRIPT"] = "script";
    TAG_NAMES["SECTION"] = "section";
    TAG_NAMES["SELECT"] = "select";
    TAG_NAMES["SOURCE"] = "source";
    TAG_NAMES["SMALL"] = "small";
    TAG_NAMES["SPAN"] = "span";
    TAG_NAMES["STRIKE"] = "strike";
    TAG_NAMES["STRONG"] = "strong";
    TAG_NAMES["STYLE"] = "style";
    TAG_NAMES["SUB"] = "sub";
    TAG_NAMES["SUMMARY"] = "summary";
    TAG_NAMES["SUP"] = "sup";
    TAG_NAMES["TABLE"] = "table";
    TAG_NAMES["TBODY"] = "tbody";
    TAG_NAMES["TEMPLATE"] = "template";
    TAG_NAMES["TEXTAREA"] = "textarea";
    TAG_NAMES["TFOOT"] = "tfoot";
    TAG_NAMES["TD"] = "td";
    TAG_NAMES["TH"] = "th";
    TAG_NAMES["THEAD"] = "thead";
    TAG_NAMES["TITLE"] = "title";
    TAG_NAMES["TR"] = "tr";
    TAG_NAMES["TRACK"] = "track";
    TAG_NAMES["TT"] = "tt";
    TAG_NAMES["U"] = "u";
    TAG_NAMES["UL"] = "ul";
    TAG_NAMES["SVG"] = "svg";
    TAG_NAMES["VAR"] = "var";
    TAG_NAMES["WBR"] = "wbr";
    TAG_NAMES["XMP"] = "xmp";
})(TAG_NAMES = TAG_NAMES || (TAG_NAMES = {}));
/**
 * Tag IDs are numeric IDs for known tag names.
 *
 * We use tag IDs to improve the performance of tag name comparisons.
 */
var TAG_ID;
(function (TAG_ID) {
    TAG_ID[TAG_ID["UNKNOWN"] = 0] = "UNKNOWN";
    TAG_ID[TAG_ID["A"] = 1] = "A";
    TAG_ID[TAG_ID["ADDRESS"] = 2] = "ADDRESS";
    TAG_ID[TAG_ID["ANNOTATION_XML"] = 3] = "ANNOTATION_XML";
    TAG_ID[TAG_ID["APPLET"] = 4] = "APPLET";
    TAG_ID[TAG_ID["AREA"] = 5] = "AREA";
    TAG_ID[TAG_ID["ARTICLE"] = 6] = "ARTICLE";
    TAG_ID[TAG_ID["ASIDE"] = 7] = "ASIDE";
    TAG_ID[TAG_ID["B"] = 8] = "B";
    TAG_ID[TAG_ID["BASE"] = 9] = "BASE";
    TAG_ID[TAG_ID["BASEFONT"] = 10] = "BASEFONT";
    TAG_ID[TAG_ID["BGSOUND"] = 11] = "BGSOUND";
    TAG_ID[TAG_ID["BIG"] = 12] = "BIG";
    TAG_ID[TAG_ID["BLOCKQUOTE"] = 13] = "BLOCKQUOTE";
    TAG_ID[TAG_ID["BODY"] = 14] = "BODY";
    TAG_ID[TAG_ID["BR"] = 15] = "BR";
    TAG_ID[TAG_ID["BUTTON"] = 16] = "BUTTON";
    TAG_ID[TAG_ID["CAPTION"] = 17] = "CAPTION";
    TAG_ID[TAG_ID["CENTER"] = 18] = "CENTER";
    TAG_ID[TAG_ID["CODE"] = 19] = "CODE";
    TAG_ID[TAG_ID["COL"] = 20] = "COL";
    TAG_ID[TAG_ID["COLGROUP"] = 21] = "COLGROUP";
    TAG_ID[TAG_ID["DD"] = 22] = "DD";
    TAG_ID[TAG_ID["DESC"] = 23] = "DESC";
    TAG_ID[TAG_ID["DETAILS"] = 24] = "DETAILS";
    TAG_ID[TAG_ID["DIALOG"] = 25] = "DIALOG";
    TAG_ID[TAG_ID["DIR"] = 26] = "DIR";
    TAG_ID[TAG_ID["DIV"] = 27] = "DIV";
    TAG_ID[TAG_ID["DL"] = 28] = "DL";
    TAG_ID[TAG_ID["DT"] = 29] = "DT";
    TAG_ID[TAG_ID["EM"] = 30] = "EM";
    TAG_ID[TAG_ID["EMBED"] = 31] = "EMBED";
    TAG_ID[TAG_ID["FIELDSET"] = 32] = "FIELDSET";
    TAG_ID[TAG_ID["FIGCAPTION"] = 33] = "FIGCAPTION";
    TAG_ID[TAG_ID["FIGURE"] = 34] = "FIGURE";
    TAG_ID[TAG_ID["FONT"] = 35] = "FONT";
    TAG_ID[TAG_ID["FOOTER"] = 36] = "FOOTER";
    TAG_ID[TAG_ID["FOREIGN_OBJECT"] = 37] = "FOREIGN_OBJECT";
    TAG_ID[TAG_ID["FORM"] = 38] = "FORM";
    TAG_ID[TAG_ID["FRAME"] = 39] = "FRAME";
    TAG_ID[TAG_ID["FRAMESET"] = 40] = "FRAMESET";
    TAG_ID[TAG_ID["H1"] = 41] = "H1";
    TAG_ID[TAG_ID["H2"] = 42] = "H2";
    TAG_ID[TAG_ID["H3"] = 43] = "H3";
    TAG_ID[TAG_ID["H4"] = 44] = "H4";
    TAG_ID[TAG_ID["H5"] = 45] = "H5";
    TAG_ID[TAG_ID["H6"] = 46] = "H6";
    TAG_ID[TAG_ID["HEAD"] = 47] = "HEAD";
    TAG_ID[TAG_ID["HEADER"] = 48] = "HEADER";
    TAG_ID[TAG_ID["HGROUP"] = 49] = "HGROUP";
    TAG_ID[TAG_ID["HR"] = 50] = "HR";
    TAG_ID[TAG_ID["HTML"] = 51] = "HTML";
    TAG_ID[TAG_ID["I"] = 52] = "I";
    TAG_ID[TAG_ID["IMG"] = 53] = "IMG";
    TAG_ID[TAG_ID["IMAGE"] = 54] = "IMAGE";
    TAG_ID[TAG_ID["INPUT"] = 55] = "INPUT";
    TAG_ID[TAG_ID["IFRAME"] = 56] = "IFRAME";
    TAG_ID[TAG_ID["KEYGEN"] = 57] = "KEYGEN";
    TAG_ID[TAG_ID["LABEL"] = 58] = "LABEL";
    TAG_ID[TAG_ID["LI"] = 59] = "LI";
    TAG_ID[TAG_ID["LINK"] = 60] = "LINK";
    TAG_ID[TAG_ID["LISTING"] = 61] = "LISTING";
    TAG_ID[TAG_ID["MAIN"] = 62] = "MAIN";
    TAG_ID[TAG_ID["MALIGNMARK"] = 63] = "MALIGNMARK";
    TAG_ID[TAG_ID["MARQUEE"] = 64] = "MARQUEE";
    TAG_ID[TAG_ID["MATH"] = 65] = "MATH";
    TAG_ID[TAG_ID["MENU"] = 66] = "MENU";
    TAG_ID[TAG_ID["META"] = 67] = "META";
    TAG_ID[TAG_ID["MGLYPH"] = 68] = "MGLYPH";
    TAG_ID[TAG_ID["MI"] = 69] = "MI";
    TAG_ID[TAG_ID["MO"] = 70] = "MO";
    TAG_ID[TAG_ID["MN"] = 71] = "MN";
    TAG_ID[TAG_ID["MS"] = 72] = "MS";
    TAG_ID[TAG_ID["MTEXT"] = 73] = "MTEXT";
    TAG_ID[TAG_ID["NAV"] = 74] = "NAV";
    TAG_ID[TAG_ID["NOBR"] = 75] = "NOBR";
    TAG_ID[TAG_ID["NOFRAMES"] = 76] = "NOFRAMES";
    TAG_ID[TAG_ID["NOEMBED"] = 77] = "NOEMBED";
    TAG_ID[TAG_ID["NOSCRIPT"] = 78] = "NOSCRIPT";
    TAG_ID[TAG_ID["OBJECT"] = 79] = "OBJECT";
    TAG_ID[TAG_ID["OL"] = 80] = "OL";
    TAG_ID[TAG_ID["OPTGROUP"] = 81] = "OPTGROUP";
    TAG_ID[TAG_ID["OPTION"] = 82] = "OPTION";
    TAG_ID[TAG_ID["P"] = 83] = "P";
    TAG_ID[TAG_ID["PARAM"] = 84] = "PARAM";
    TAG_ID[TAG_ID["PLAINTEXT"] = 85] = "PLAINTEXT";
    TAG_ID[TAG_ID["PRE"] = 86] = "PRE";
    TAG_ID[TAG_ID["RB"] = 87] = "RB";
    TAG_ID[TAG_ID["RP"] = 88] = "RP";
    TAG_ID[TAG_ID["RT"] = 89] = "RT";
    TAG_ID[TAG_ID["RTC"] = 90] = "RTC";
    TAG_ID[TAG_ID["RUBY"] = 91] = "RUBY";
    TAG_ID[TAG_ID["S"] = 92] = "S";
    TAG_ID[TAG_ID["SCRIPT"] = 93] = "SCRIPT";
    TAG_ID[TAG_ID["SECTION"] = 94] = "SECTION";
    TAG_ID[TAG_ID["SELECT"] = 95] = "SELECT";
    TAG_ID[TAG_ID["SOURCE"] = 96] = "SOURCE";
    TAG_ID[TAG_ID["SMALL"] = 97] = "SMALL";
    TAG_ID[TAG_ID["SPAN"] = 98] = "SPAN";
    TAG_ID[TAG_ID["STRIKE"] = 99] = "STRIKE";
    TAG_ID[TAG_ID["STRONG"] = 100] = "STRONG";
    TAG_ID[TAG_ID["STYLE"] = 101] = "STYLE";
    TAG_ID[TAG_ID["SUB"] = 102] = "SUB";
    TAG_ID[TAG_ID["SUMMARY"] = 103] = "SUMMARY";
    TAG_ID[TAG_ID["SUP"] = 104] = "SUP";
    TAG_ID[TAG_ID["TABLE"] = 105] = "TABLE";
    TAG_ID[TAG_ID["TBODY"] = 106] = "TBODY";
    TAG_ID[TAG_ID["TEMPLATE"] = 107] = "TEMPLATE";
    TAG_ID[TAG_ID["TEXTAREA"] = 108] = "TEXTAREA";
    TAG_ID[TAG_ID["TFOOT"] = 109] = "TFOOT";
    TAG_ID[TAG_ID["TD"] = 110] = "TD";
    TAG_ID[TAG_ID["TH"] = 111] = "TH";
    TAG_ID[TAG_ID["THEAD"] = 112] = "THEAD";
    TAG_ID[TAG_ID["TITLE"] = 113] = "TITLE";
    TAG_ID[TAG_ID["TR"] = 114] = "TR";
    TAG_ID[TAG_ID["TRACK"] = 115] = "TRACK";
    TAG_ID[TAG_ID["TT"] = 116] = "TT";
    TAG_ID[TAG_ID["U"] = 117] = "U";
    TAG_ID[TAG_ID["UL"] = 118] = "UL";
    TAG_ID[TAG_ID["SVG"] = 119] = "SVG";
    TAG_ID[TAG_ID["VAR"] = 120] = "VAR";
    TAG_ID[TAG_ID["WBR"] = 121] = "WBR";
    TAG_ID[TAG_ID["XMP"] = 122] = "XMP";
})(TAG_ID = TAG_ID || (TAG_ID = {}));
const TAG_NAME_TO_ID = new Map([
    [TAG_NAMES.A, TAG_ID.A],
    [TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
    [TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
    [TAG_NAMES.APPLET, TAG_ID.APPLET],
    [TAG_NAMES.AREA, TAG_ID.AREA],
    [TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
    [TAG_NAMES.ASIDE, TAG_ID.ASIDE],
    [TAG_NAMES.B, TAG_ID.B],
    [TAG_NAMES.BASE, TAG_ID.BASE],
    [TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
    [TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
    [TAG_NAMES.BIG, TAG_ID.BIG],
    [TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
    [TAG_NAMES.BODY, TAG_ID.BODY],
    [TAG_NAMES.BR, TAG_ID.BR],
    [TAG_NAMES.BUTTON, TAG_ID.BUTTON],
    [TAG_NAMES.CAPTION, TAG_ID.CAPTION],
    [TAG_NAMES.CENTER, TAG_ID.CENTER],
    [TAG_NAMES.CODE, TAG_ID.CODE],
    [TAG_NAMES.COL, TAG_ID.COL],
    [TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
    [TAG_NAMES.DD, TAG_ID.DD],
    [TAG_NAMES.DESC, TAG_ID.DESC],
    [TAG_NAMES.DETAILS, TAG_ID.DETAILS],
    [TAG_NAMES.DIALOG, TAG_ID.DIALOG],
    [TAG_NAMES.DIR, TAG_ID.DIR],
    [TAG_NAMES.DIV, TAG_ID.DIV],
    [TAG_NAMES.DL, TAG_ID.DL],
    [TAG_NAMES.DT, TAG_ID.DT],
    [TAG_NAMES.EM, TAG_ID.EM],
    [TAG_NAMES.EMBED, TAG_ID.EMBED],
    [TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
    [TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
    [TAG_NAMES.FIGURE, TAG_ID.FIGURE],
    [TAG_NAMES.FONT, TAG_ID.FONT],
    [TAG_NAMES.FOOTER, TAG_ID.FOOTER],
    [TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
    [TAG_NAMES.FORM, TAG_ID.FORM],
    [TAG_NAMES.FRAME, TAG_ID.FRAME],
    [TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
    [TAG_NAMES.H1, TAG_ID.H1],
    [TAG_NAMES.H2, TAG_ID.H2],
    [TAG_NAMES.H3, TAG_ID.H3],
    [TAG_NAMES.H4, TAG_ID.H4],
    [TAG_NAMES.H5, TAG_ID.H5],
    [TAG_NAMES.H6, TAG_ID.H6],
    [TAG_NAMES.HEAD, TAG_ID.HEAD],
    [TAG_NAMES.HEADER, TAG_ID.HEADER],
    [TAG_NAMES.HGROUP, TAG_ID.HGROUP],
    [TAG_NAMES.HR, TAG_ID.HR],
    [TAG_NAMES.HTML, TAG_ID.HTML],
    [TAG_NAMES.I, TAG_ID.I],
    [TAG_NAMES.IMG, TAG_ID.IMG],
    [TAG_NAMES.IMAGE, TAG_ID.IMAGE],
    [TAG_NAMES.INPUT, TAG_ID.INPUT],
    [TAG_NAMES.IFRAME, TAG_ID.IFRAME],
    [TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
    [TAG_NAMES.LABEL, TAG_ID.LABEL],
    [TAG_NAMES.LI, TAG_ID.LI],
    [TAG_NAMES.LINK, TAG_ID.LINK],
    [TAG_NAMES.LISTING, TAG_ID.LISTING],
    [TAG_NAMES.MAIN, TAG_ID.MAIN],
    [TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
    [TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
    [TAG_NAMES.MATH, TAG_ID.MATH],
    [TAG_NAMES.MENU, TAG_ID.MENU],
    [TAG_NAMES.META, TAG_ID.META],
    [TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
    [TAG_NAMES.MI, TAG_ID.MI],
    [TAG_NAMES.MO, TAG_ID.MO],
    [TAG_NAMES.MN, TAG_ID.MN],
    [TAG_NAMES.MS, TAG_ID.MS],
    [TAG_NAMES.MTEXT, TAG_ID.MTEXT],
    [TAG_NAMES.NAV, TAG_ID.NAV],
    [TAG_NAMES.NOBR, TAG_ID.NOBR],
    [TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
    [TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
    [TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
    [TAG_NAMES.OBJECT, TAG_ID.OBJECT],
    [TAG_NAMES.OL, TAG_ID.OL],
    [TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
    [TAG_NAMES.OPTION, TAG_ID.OPTION],
    [TAG_NAMES.P, TAG_ID.P],
    [TAG_NAMES.PARAM, TAG_ID.PARAM],
    [TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
    [TAG_NAMES.PRE, TAG_ID.PRE],
    [TAG_NAMES.RB, TAG_ID.RB],
    [TAG_NAMES.RP, TAG_ID.RP],
    [TAG_NAMES.RT, TAG_ID.RT],
    [TAG_NAMES.RTC, TAG_ID.RTC],
    [TAG_NAMES.RUBY, TAG_ID.RUBY],
    [TAG_NAMES.S, TAG_ID.S],
    [TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
    [TAG_NAMES.SECTION, TAG_ID.SECTION],
    [TAG_NAMES.SELECT, TAG_ID.SELECT],
    [TAG_NAMES.SOURCE, TAG_ID.SOURCE],
    [TAG_NAMES.SMALL, TAG_ID.SMALL],
    [TAG_NAMES.SPAN, TAG_ID.SPAN],
    [TAG_NAMES.STRIKE, TAG_ID.STRIKE],
    [TAG_NAMES.STRONG, TAG_ID.STRONG],
    [TAG_NAMES.STYLE, TAG_ID.STYLE],
    [TAG_NAMES.SUB, TAG_ID.SUB],
    [TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
    [TAG_NAMES.SUP, TAG_ID.SUP],
    [TAG_NAMES.TABLE, TAG_ID.TABLE],
    [TAG_NAMES.TBODY, TAG_ID.TBODY],
    [TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
    [TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
    [TAG_NAMES.TFOOT, TAG_ID.TFOOT],
    [TAG_NAMES.TD, TAG_ID.TD],
    [TAG_NAMES.TH, TAG_ID.TH],
    [TAG_NAMES.THEAD, TAG_ID.THEAD],
    [TAG_NAMES.TITLE, TAG_ID.TITLE],
    [TAG_NAMES.TR, TAG_ID.TR],
    [TAG_NAMES.TRACK, TAG_ID.TRACK],
    [TAG_NAMES.TT, TAG_ID.TT],
    [TAG_NAMES.U, TAG_ID.U],
    [TAG_NAMES.UL, TAG_ID.UL],
    [TAG_NAMES.SVG, TAG_ID.SVG],
    [TAG_NAMES.VAR, TAG_ID.VAR],
    [TAG_NAMES.WBR, TAG_ID.WBR],
    [TAG_NAMES.XMP, TAG_ID.XMP],
]);
function getTagID(tagName) {
    var _a;
    return (_a = TAG_NAME_TO_ID.get(tagName)) !== null && _a !== void 0 ? _a : TAG_ID.UNKNOWN;
}
const $ = TAG_ID;
const SPECIAL_ELEMENTS = {
    [NS.HTML]: new Set([
        $.ADDRESS,
        $.APPLET,
        $.AREA,
        $.ARTICLE,
        $.ASIDE,
        $.BASE,
        $.BASEFONT,
        $.BGSOUND,
        $.BLOCKQUOTE,
        $.BODY,
        $.BR,
        $.BUTTON,
        $.CAPTION,
        $.CENTER,
        $.COL,
        $.COLGROUP,
        $.DD,
        $.DETAILS,
        $.DIR,
        $.DIV,
        $.DL,
        $.DT,
        $.EMBED,
        $.FIELDSET,
        $.FIGCAPTION,
        $.FIGURE,
        $.FOOTER,
        $.FORM,
        $.FRAME,
        $.FRAMESET,
        $.H1,
        $.H2,
        $.H3,
        $.H4,
        $.H5,
        $.H6,
        $.HEAD,
        $.HEADER,
        $.HGROUP,
        $.HR,
        $.HTML,
        $.IFRAME,
        $.IMG,
        $.INPUT,
        $.LI,
        $.LINK,
        $.LISTING,
        $.MAIN,
        $.MARQUEE,
        $.MENU,
        $.META,
        $.NAV,
        $.NOEMBED,
        $.NOFRAMES,
        $.NOSCRIPT,
        $.OBJECT,
        $.OL,
        $.P,
        $.PARAM,
        $.PLAINTEXT,
        $.PRE,
        $.SCRIPT,
        $.SECTION,
        $.SELECT,
        $.SOURCE,
        $.STYLE,
        $.SUMMARY,
        $.TABLE,
        $.TBODY,
        $.TD,
        $.TEMPLATE,
        $.TEXTAREA,
        $.TFOOT,
        $.TH,
        $.THEAD,
        $.TITLE,
        $.TR,
        $.TRACK,
        $.UL,
        $.WBR,
        $.XMP,
    ]),
    [NS.MATHML]: new Set([$.MI, $.MO, $.MN, $.MS, $.MTEXT, $.ANNOTATION_XML]),
    [NS.SVG]: new Set([$.TITLE, $.FOREIGN_OBJECT, $.DESC]),
    [NS.XLINK]: new Set(),
    [NS.XML]: new Set(),
    [NS.XMLNS]: new Set(),
};
function isNumberedHeader(tn) {
    return tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6;
}
new Set([
    TAG_NAMES.STYLE,
    TAG_NAMES.SCRIPT,
    TAG_NAMES.XMP,
    TAG_NAMES.IFRAME,
    TAG_NAMES.NOEMBED,
    TAG_NAMES.NOFRAMES,
    TAG_NAMES.PLAINTEXT,
]);

//C1 Unicode control character reference replacements
const C1_CONTROLS_REFERENCE_REPLACEMENTS = new Map([
    [0x80, 8364],
    [0x82, 8218],
    [0x83, 402],
    [0x84, 8222],
    [0x85, 8230],
    [0x86, 8224],
    [0x87, 8225],
    [0x88, 710],
    [0x89, 8240],
    [0x8a, 352],
    [0x8b, 8249],
    [0x8c, 338],
    [0x8e, 381],
    [0x91, 8216],
    [0x92, 8217],
    [0x93, 8220],
    [0x94, 8221],
    [0x95, 8226],
    [0x96, 8211],
    [0x97, 8212],
    [0x98, 732],
    [0x99, 8482],
    [0x9a, 353],
    [0x9b, 8250],
    [0x9c, 339],
    [0x9e, 382],
    [0x9f, 376],
]);
//States
var State;
(function (State) {
    State[State["DATA"] = 0] = "DATA";
    State[State["RCDATA"] = 1] = "RCDATA";
    State[State["RAWTEXT"] = 2] = "RAWTEXT";
    State[State["SCRIPT_DATA"] = 3] = "SCRIPT_DATA";
    State[State["PLAINTEXT"] = 4] = "PLAINTEXT";
    State[State["TAG_OPEN"] = 5] = "TAG_OPEN";
    State[State["END_TAG_OPEN"] = 6] = "END_TAG_OPEN";
    State[State["TAG_NAME"] = 7] = "TAG_NAME";
    State[State["RCDATA_LESS_THAN_SIGN"] = 8] = "RCDATA_LESS_THAN_SIGN";
    State[State["RCDATA_END_TAG_OPEN"] = 9] = "RCDATA_END_TAG_OPEN";
    State[State["RCDATA_END_TAG_NAME"] = 10] = "RCDATA_END_TAG_NAME";
    State[State["RAWTEXT_LESS_THAN_SIGN"] = 11] = "RAWTEXT_LESS_THAN_SIGN";
    State[State["RAWTEXT_END_TAG_OPEN"] = 12] = "RAWTEXT_END_TAG_OPEN";
    State[State["RAWTEXT_END_TAG_NAME"] = 13] = "RAWTEXT_END_TAG_NAME";
    State[State["SCRIPT_DATA_LESS_THAN_SIGN"] = 14] = "SCRIPT_DATA_LESS_THAN_SIGN";
    State[State["SCRIPT_DATA_END_TAG_OPEN"] = 15] = "SCRIPT_DATA_END_TAG_OPEN";
    State[State["SCRIPT_DATA_END_TAG_NAME"] = 16] = "SCRIPT_DATA_END_TAG_NAME";
    State[State["SCRIPT_DATA_ESCAPE_START"] = 17] = "SCRIPT_DATA_ESCAPE_START";
    State[State["SCRIPT_DATA_ESCAPE_START_DASH"] = 18] = "SCRIPT_DATA_ESCAPE_START_DASH";
    State[State["SCRIPT_DATA_ESCAPED"] = 19] = "SCRIPT_DATA_ESCAPED";
    State[State["SCRIPT_DATA_ESCAPED_DASH"] = 20] = "SCRIPT_DATA_ESCAPED_DASH";
    State[State["SCRIPT_DATA_ESCAPED_DASH_DASH"] = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH";
    State[State["SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"] = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN";
    State[State["SCRIPT_DATA_ESCAPED_END_TAG_OPEN"] = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN";
    State[State["SCRIPT_DATA_ESCAPED_END_TAG_NAME"] = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME";
    State[State["SCRIPT_DATA_DOUBLE_ESCAPE_START"] = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START";
    State[State["SCRIPT_DATA_DOUBLE_ESCAPED"] = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED";
    State[State["SCRIPT_DATA_DOUBLE_ESCAPED_DASH"] = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH";
    State[State["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"] = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH";
    State[State["SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"] = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN";
    State[State["SCRIPT_DATA_DOUBLE_ESCAPE_END"] = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END";
    State[State["BEFORE_ATTRIBUTE_NAME"] = 31] = "BEFORE_ATTRIBUTE_NAME";
    State[State["ATTRIBUTE_NAME"] = 32] = "ATTRIBUTE_NAME";
    State[State["AFTER_ATTRIBUTE_NAME"] = 33] = "AFTER_ATTRIBUTE_NAME";
    State[State["BEFORE_ATTRIBUTE_VALUE"] = 34] = "BEFORE_ATTRIBUTE_VALUE";
    State[State["ATTRIBUTE_VALUE_DOUBLE_QUOTED"] = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED";
    State[State["ATTRIBUTE_VALUE_SINGLE_QUOTED"] = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED";
    State[State["ATTRIBUTE_VALUE_UNQUOTED"] = 37] = "ATTRIBUTE_VALUE_UNQUOTED";
    State[State["AFTER_ATTRIBUTE_VALUE_QUOTED"] = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED";
    State[State["SELF_CLOSING_START_TAG"] = 39] = "SELF_CLOSING_START_TAG";
    State[State["BOGUS_COMMENT"] = 40] = "BOGUS_COMMENT";
    State[State["MARKUP_DECLARATION_OPEN"] = 41] = "MARKUP_DECLARATION_OPEN";
    State[State["COMMENT_START"] = 42] = "COMMENT_START";
    State[State["COMMENT_START_DASH"] = 43] = "COMMENT_START_DASH";
    State[State["COMMENT"] = 44] = "COMMENT";
    State[State["COMMENT_LESS_THAN_SIGN"] = 45] = "COMMENT_LESS_THAN_SIGN";
    State[State["COMMENT_LESS_THAN_SIGN_BANG"] = 46] = "COMMENT_LESS_THAN_SIGN_BANG";
    State[State["COMMENT_LESS_THAN_SIGN_BANG_DASH"] = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH";
    State[State["COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"] = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH";
    State[State["COMMENT_END_DASH"] = 49] = "COMMENT_END_DASH";
    State[State["COMMENT_END"] = 50] = "COMMENT_END";
    State[State["COMMENT_END_BANG"] = 51] = "COMMENT_END_BANG";
    State[State["DOCTYPE"] = 52] = "DOCTYPE";
    State[State["BEFORE_DOCTYPE_NAME"] = 53] = "BEFORE_DOCTYPE_NAME";
    State[State["DOCTYPE_NAME"] = 54] = "DOCTYPE_NAME";
    State[State["AFTER_DOCTYPE_NAME"] = 55] = "AFTER_DOCTYPE_NAME";
    State[State["AFTER_DOCTYPE_PUBLIC_KEYWORD"] = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD";
    State[State["BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"] = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER";
    State[State["DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"] = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED";
    State[State["DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"] = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED";
    State[State["AFTER_DOCTYPE_PUBLIC_IDENTIFIER"] = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER";
    State[State["BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"] = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS";
    State[State["AFTER_DOCTYPE_SYSTEM_KEYWORD"] = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD";
    State[State["BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"] = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER";
    State[State["DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"] = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED";
    State[State["DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"] = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED";
    State[State["AFTER_DOCTYPE_SYSTEM_IDENTIFIER"] = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER";
    State[State["BOGUS_DOCTYPE"] = 67] = "BOGUS_DOCTYPE";
    State[State["CDATA_SECTION"] = 68] = "CDATA_SECTION";
    State[State["CDATA_SECTION_BRACKET"] = 69] = "CDATA_SECTION_BRACKET";
    State[State["CDATA_SECTION_END"] = 70] = "CDATA_SECTION_END";
    State[State["CHARACTER_REFERENCE"] = 71] = "CHARACTER_REFERENCE";
    State[State["NAMED_CHARACTER_REFERENCE"] = 72] = "NAMED_CHARACTER_REFERENCE";
    State[State["AMBIGUOUS_AMPERSAND"] = 73] = "AMBIGUOUS_AMPERSAND";
    State[State["NUMERIC_CHARACTER_REFERENCE"] = 74] = "NUMERIC_CHARACTER_REFERENCE";
    State[State["HEXADEMICAL_CHARACTER_REFERENCE_START"] = 75] = "HEXADEMICAL_CHARACTER_REFERENCE_START";
    State[State["HEXADEMICAL_CHARACTER_REFERENCE"] = 76] = "HEXADEMICAL_CHARACTER_REFERENCE";
    State[State["DECIMAL_CHARACTER_REFERENCE"] = 77] = "DECIMAL_CHARACTER_REFERENCE";
    State[State["NUMERIC_CHARACTER_REFERENCE_END"] = 78] = "NUMERIC_CHARACTER_REFERENCE_END";
})(State || (State = {}));
//Tokenizer initial states for different modes
const TokenizerMode = {
    DATA: State.DATA,
    RCDATA: State.RCDATA,
    RAWTEXT: State.RAWTEXT,
    SCRIPT_DATA: State.SCRIPT_DATA,
    PLAINTEXT: State.PLAINTEXT,
    CDATA_SECTION: State.CDATA_SECTION,
};
//Utils
//OPTIMIZATION: these utility functions should not be moved out of this module. V8 Crankshaft will not inline
//this functions if they will be situated in another module due to context switch.
//Always perform inlining check before modifying this functions ('node --trace-inlining').
function isAsciiDigit(cp) {
    return cp >= CODE_POINTS.DIGIT_0 && cp <= CODE_POINTS.DIGIT_9;
}
function isAsciiUpper(cp) {
    return cp >= CODE_POINTS.LATIN_CAPITAL_A && cp <= CODE_POINTS.LATIN_CAPITAL_Z;
}
function isAsciiLower(cp) {
    return cp >= CODE_POINTS.LATIN_SMALL_A && cp <= CODE_POINTS.LATIN_SMALL_Z;
}
function isAsciiLetter(cp) {
    return isAsciiLower(cp) || isAsciiUpper(cp);
}
function isAsciiAlphaNumeric(cp) {
    return isAsciiLetter(cp) || isAsciiDigit(cp);
}
function isAsciiUpperHexDigit(cp) {
    return cp >= CODE_POINTS.LATIN_CAPITAL_A && cp <= CODE_POINTS.LATIN_CAPITAL_F;
}
function isAsciiLowerHexDigit(cp) {
    return cp >= CODE_POINTS.LATIN_SMALL_A && cp <= CODE_POINTS.LATIN_SMALL_F;
}
function isAsciiHexDigit(cp) {
    return isAsciiDigit(cp) || isAsciiUpperHexDigit(cp) || isAsciiLowerHexDigit(cp);
}
function toAsciiLower(cp) {
    return cp + 32;
}
function isWhitespace(cp) {
    return cp === CODE_POINTS.SPACE || cp === CODE_POINTS.LINE_FEED || cp === CODE_POINTS.TABULATION || cp === CODE_POINTS.FORM_FEED;
}
function isEntityInAttributeInvalidEnd(nextCp) {
    return nextCp === CODE_POINTS.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp);
}
function isScriptDataDoubleEscapeSequenceEnd(cp) {
    return isWhitespace(cp) || cp === CODE_POINTS.SOLIDUS || cp === CODE_POINTS.GREATER_THAN_SIGN;
}
//Tokenizer
class Tokenizer {
    constructor(options, handler) {
        this.options = options;
        this.handler = handler;
        this.paused = false;
        /** Ensures that the parsing loop isn't run multiple times at once. */
        this.inLoop = false;
        /**
         * Indicates that the current adjusted node exists, is not an element in the HTML namespace,
         * and that it is not an integration point for either MathML or HTML.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/parsing.html#tree-construction}
         */
        this.inForeignNode = false;
        this.lastStartTagName = '';
        this.active = false;
        this.state = State.DATA;
        this.returnState = State.DATA;
        this.charRefCode = -1;
        this.consumedAfterSnapshot = -1;
        this.currentCharacterToken = null;
        this.currentToken = null;
        this.currentAttr = { name: '', value: '' };
        this.preprocessor = new Preprocessor(handler);
        this.currentLocation = this.getCurrentLocation(-1);
    }
    //Errors
    _err(code) {
        var _a, _b;
        (_b = (_a = this.handler).onParseError) === null || _b === void 0 ? void 0 : _b.call(_a, this.preprocessor.getError(code));
    }
    // NOTE: `offset` may never run across line boundaries.
    getCurrentLocation(offset) {
        if (!this.options.sourceCodeLocationInfo) {
            return null;
        }
        return {
            startLine: this.preprocessor.line,
            startCol: this.preprocessor.col - offset,
            startOffset: this.preprocessor.offset - offset,
            endLine: -1,
            endCol: -1,
            endOffset: -1,
        };
    }
    _runParsingLoop() {
        if (this.inLoop)
            return;
        this.inLoop = true;
        while (this.active && !this.paused) {
            this.consumedAfterSnapshot = 0;
            const cp = this._consume();
            if (!this._ensureHibernation()) {
                this._callState(cp);
            }
        }
        this.inLoop = false;
    }
    //API
    pause() {
        this.paused = true;
    }
    resume(writeCallback) {
        if (!this.paused) {
            throw new Error('Parser was already resumed');
        }
        this.paused = false;
        // Necessary for synchronous resume.
        if (this.inLoop)
            return;
        this._runParsingLoop();
        if (!this.paused) {
            writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
        }
    }
    write(chunk, isLastChunk, writeCallback) {
        this.active = true;
        this.preprocessor.write(chunk, isLastChunk);
        this._runParsingLoop();
        if (!this.paused) {
            writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
        }
    }
    insertHtmlAtCurrentPos(chunk) {
        this.active = true;
        this.preprocessor.insertHtmlAtCurrentPos(chunk);
        this._runParsingLoop();
    }
    //Hibernation
    _ensureHibernation() {
        if (this.preprocessor.endOfChunkHit) {
            this._unconsume(this.consumedAfterSnapshot);
            this.active = false;
            return true;
        }
        return false;
    }
    //Consumption
    _consume() {
        this.consumedAfterSnapshot++;
        return this.preprocessor.advance();
    }
    _unconsume(count) {
        this.consumedAfterSnapshot -= count;
        this.preprocessor.retreat(count);
    }
    _reconsumeInState(state, cp) {
        this.state = state;
        this._callState(cp);
    }
    _advanceBy(count) {
        this.consumedAfterSnapshot += count;
        for (let i = 0; i < count; i++) {
            this.preprocessor.advance();
        }
    }
    _consumeSequenceIfMatch(pattern, caseSensitive) {
        if (this.preprocessor.startsWith(pattern, caseSensitive)) {
            // We will already have consumed one character before calling this method.
            this._advanceBy(pattern.length - 1);
            return true;
        }
        return false;
    }
    //Token creation
    _createStartTagToken() {
        this.currentToken = {
            type: TokenType.START_TAG,
            tagName: '',
            tagID: TAG_ID.UNKNOWN,
            selfClosing: false,
            ackSelfClosing: false,
            attrs: [],
            location: this.getCurrentLocation(1),
        };
    }
    _createEndTagToken() {
        this.currentToken = {
            type: TokenType.END_TAG,
            tagName: '',
            tagID: TAG_ID.UNKNOWN,
            selfClosing: false,
            ackSelfClosing: false,
            attrs: [],
            location: this.getCurrentLocation(2),
        };
    }
    _createCommentToken(offset) {
        this.currentToken = {
            type: TokenType.COMMENT,
            data: '',
            location: this.getCurrentLocation(offset),
        };
    }
    _createDoctypeToken(initialName) {
        this.currentToken = {
            type: TokenType.DOCTYPE,
            name: initialName,
            forceQuirks: false,
            publicId: null,
            systemId: null,
            location: this.currentLocation,
        };
    }
    _createCharacterToken(type, chars) {
        this.currentCharacterToken = {
            type,
            chars,
            location: this.currentLocation,
        };
    }
    //Tag attributes
    _createAttr(attrNameFirstCh) {
        this.currentAttr = {
            name: attrNameFirstCh,
            value: '',
        };
        this.currentLocation = this.getCurrentLocation(0);
    }
    _leaveAttrName() {
        var _a;
        var _b;
        const token = this.currentToken;
        if (getTokenAttr(token, this.currentAttr.name) === null) {
            token.attrs.push(this.currentAttr);
            if (token.location && this.currentLocation) {
                const attrLocations = ((_a = (_b = token.location).attrs) !== null && _a !== void 0 ? _a : (_b.attrs = Object.create(null)));
                attrLocations[this.currentAttr.name] = this.currentLocation;
                // Set end location
                this._leaveAttrValue();
            }
        }
        else {
            this._err(ERR.duplicateAttribute);
        }
    }
    _leaveAttrValue() {
        if (this.currentLocation) {
            this.currentLocation.endLine = this.preprocessor.line;
            this.currentLocation.endCol = this.preprocessor.col;
            this.currentLocation.endOffset = this.preprocessor.offset;
        }
    }
    //Token emission
    prepareToken(ct) {
        this._emitCurrentCharacterToken(ct.location);
        this.currentToken = null;
        if (ct.location) {
            ct.location.endLine = this.preprocessor.line;
            ct.location.endCol = this.preprocessor.col + 1;
            ct.location.endOffset = this.preprocessor.offset + 1;
        }
        this.currentLocation = this.getCurrentLocation(-1);
    }
    emitCurrentTagToken() {
        const ct = this.currentToken;
        this.prepareToken(ct);
        ct.tagID = getTagID(ct.tagName);
        if (ct.type === TokenType.START_TAG) {
            this.lastStartTagName = ct.tagName;
            this.handler.onStartTag(ct);
        }
        else {
            if (ct.attrs.length > 0) {
                this._err(ERR.endTagWithAttributes);
            }
            if (ct.selfClosing) {
                this._err(ERR.endTagWithTrailingSolidus);
            }
            this.handler.onEndTag(ct);
        }
        this.preprocessor.dropParsedChunk();
    }
    emitCurrentComment(ct) {
        this.prepareToken(ct);
        this.handler.onComment(ct);
        this.preprocessor.dropParsedChunk();
    }
    emitCurrentDoctype(ct) {
        this.prepareToken(ct);
        this.handler.onDoctype(ct);
        this.preprocessor.dropParsedChunk();
    }
    _emitCurrentCharacterToken(nextLocation) {
        if (this.currentCharacterToken) {
            //NOTE: if we have a pending character token, make it's end location equal to the
            //current token's start location.
            if (nextLocation && this.currentCharacterToken.location) {
                this.currentCharacterToken.location.endLine = nextLocation.startLine;
                this.currentCharacterToken.location.endCol = nextLocation.startCol;
                this.currentCharacterToken.location.endOffset = nextLocation.startOffset;
            }
            switch (this.currentCharacterToken.type) {
                case TokenType.CHARACTER: {
                    this.handler.onCharacter(this.currentCharacterToken);
                    break;
                }
                case TokenType.NULL_CHARACTER: {
                    this.handler.onNullCharacter(this.currentCharacterToken);
                    break;
                }
                case TokenType.WHITESPACE_CHARACTER: {
                    this.handler.onWhitespaceCharacter(this.currentCharacterToken);
                    break;
                }
            }
            this.currentCharacterToken = null;
        }
    }
    _emitEOFToken() {
        const location = this.getCurrentLocation(0);
        if (location) {
            location.endLine = location.startLine;
            location.endCol = location.startCol;
            location.endOffset = location.startOffset;
        }
        this._emitCurrentCharacterToken(location);
        this.handler.onEof({ type: TokenType.EOF, location });
        this.active = false;
    }
    //Characters emission
    //OPTIMIZATION: specification uses only one type of character tokens (one token per character).
    //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
    //If we have a sequence of characters that belong to the same group, the parser can process it
    //as a single solid character token.
    //So, there are 3 types of character tokens in parse5:
    //1)TokenType.NULL_CHARACTER - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
    //2)TokenType.WHITESPACE_CHARACTER - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
    //3)TokenType.CHARACTER - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
    _appendCharToCurrentCharacterToken(type, ch) {
        if (this.currentCharacterToken) {
            if (this.currentCharacterToken.type !== type) {
                this.currentLocation = this.getCurrentLocation(0);
                this._emitCurrentCharacterToken(this.currentLocation);
                this.preprocessor.dropParsedChunk();
            }
            else {
                this.currentCharacterToken.chars += ch;
                return;
            }
        }
        this._createCharacterToken(type, ch);
    }
    _emitCodePoint(cp) {
        const type = isWhitespace(cp)
            ? TokenType.WHITESPACE_CHARACTER
            : cp === CODE_POINTS.NULL
                ? TokenType.NULL_CHARACTER
                : TokenType.CHARACTER;
        this._appendCharToCurrentCharacterToken(type, String.fromCodePoint(cp));
    }
    //NOTE: used when we emit characters explicitly.
    //This is always for non-whitespace and non-null characters, which allows us to avoid additional checks.
    _emitChars(ch) {
        this._appendCharToCurrentCharacterToken(TokenType.CHARACTER, ch);
    }
    // Character reference helpers
    _matchNamedCharacterReference(cp) {
        let result = null;
        let excess = 0;
        let withoutSemicolon = false;
        for (let i = 0, current = htmlDecodeTree[0]; i >= 0; cp = this._consume()) {
            i = determineBranch(htmlDecodeTree, current, i + 1, cp);
            if (i < 0)
                break;
            excess += 1;
            current = htmlDecodeTree[i];
            const masked = current & BinTrieFlags.VALUE_LENGTH;
            // If the branch is a value, store it and continue
            if (masked) {
                // The mask is the number of bytes of the value, including the current byte.
                const valueLength = (masked >> 14) - 1;
                // Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
                // See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
                if (cp !== CODE_POINTS.SEMICOLON &&
                    this._isCharacterReferenceInAttribute() &&
                    isEntityInAttributeInvalidEnd(this.preprocessor.peek(1))) {
                    //NOTE: we don't flush all consumed code points here, and instead switch back to the original state after
                    //emitting an ampersand. This is fine, as alphanumeric characters won't be parsed differently in attributes.
                    result = [CODE_POINTS.AMPERSAND];
                    // Skip over the value.
                    i += valueLength;
                }
                else {
                    // If this is a surrogate pair, consume the next two bytes.
                    result =
                        valueLength === 0
                            ? [htmlDecodeTree[i] & ~BinTrieFlags.VALUE_LENGTH]
                            : valueLength === 1
                                ? [htmlDecodeTree[++i]]
                                : [htmlDecodeTree[++i], htmlDecodeTree[++i]];
                    excess = 0;
                    withoutSemicolon = cp !== CODE_POINTS.SEMICOLON;
                }
                if (valueLength === 0) {
                    // If the value is zero-length, we're done.
                    this._consume();
                    break;
                }
            }
        }
        this._unconsume(excess);
        if (withoutSemicolon && !this.preprocessor.endOfChunkHit) {
            this._err(ERR.missingSemicolonAfterCharacterReference);
        }
        // We want to emit the error above on the code point after the entity.
        // We always consume one code point too many in the loop, and we wait to
        // unconsume it until after the error is emitted.
        this._unconsume(1);
        return result;
    }
    _isCharacterReferenceInAttribute() {
        return (this.returnState === State.ATTRIBUTE_VALUE_DOUBLE_QUOTED ||
            this.returnState === State.ATTRIBUTE_VALUE_SINGLE_QUOTED ||
            this.returnState === State.ATTRIBUTE_VALUE_UNQUOTED);
    }
    _flushCodePointConsumedAsCharacterReference(cp) {
        if (this._isCharacterReferenceInAttribute()) {
            this.currentAttr.value += String.fromCodePoint(cp);
        }
        else {
            this._emitCodePoint(cp);
        }
    }
    // Calling states this way turns out to be much faster than any other approach.
    _callState(cp) {
        switch (this.state) {
            case State.DATA: {
                this._stateData(cp);
                break;
            }
            case State.RCDATA: {
                this._stateRcdata(cp);
                break;
            }
            case State.RAWTEXT: {
                this._stateRawtext(cp);
                break;
            }
            case State.SCRIPT_DATA: {
                this._stateScriptData(cp);
                break;
            }
            case State.PLAINTEXT: {
                this._statePlaintext(cp);
                break;
            }
            case State.TAG_OPEN: {
                this._stateTagOpen(cp);
                break;
            }
            case State.END_TAG_OPEN: {
                this._stateEndTagOpen(cp);
                break;
            }
            case State.TAG_NAME: {
                this._stateTagName(cp);
                break;
            }
            case State.RCDATA_LESS_THAN_SIGN: {
                this._stateRcdataLessThanSign(cp);
                break;
            }
            case State.RCDATA_END_TAG_OPEN: {
                this._stateRcdataEndTagOpen(cp);
                break;
            }
            case State.RCDATA_END_TAG_NAME: {
                this._stateRcdataEndTagName(cp);
                break;
            }
            case State.RAWTEXT_LESS_THAN_SIGN: {
                this._stateRawtextLessThanSign(cp);
                break;
            }
            case State.RAWTEXT_END_TAG_OPEN: {
                this._stateRawtextEndTagOpen(cp);
                break;
            }
            case State.RAWTEXT_END_TAG_NAME: {
                this._stateRawtextEndTagName(cp);
                break;
            }
            case State.SCRIPT_DATA_LESS_THAN_SIGN: {
                this._stateScriptDataLessThanSign(cp);
                break;
            }
            case State.SCRIPT_DATA_END_TAG_OPEN: {
                this._stateScriptDataEndTagOpen(cp);
                break;
            }
            case State.SCRIPT_DATA_END_TAG_NAME: {
                this._stateScriptDataEndTagName(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPE_START: {
                this._stateScriptDataEscapeStart(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPE_START_DASH: {
                this._stateScriptDataEscapeStartDash(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPED: {
                this._stateScriptDataEscaped(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPED_DASH: {
                this._stateScriptDataEscapedDash(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPED_DASH_DASH: {
                this._stateScriptDataEscapedDashDash(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
                this._stateScriptDataEscapedLessThanSign(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
                this._stateScriptDataEscapedEndTagOpen(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
                this._stateScriptDataEscapedEndTagName(cp);
                break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
                this._stateScriptDataDoubleEscapeStart(cp);
                break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPED: {
                this._stateScriptDataDoubleEscaped(cp);
                break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
                this._stateScriptDataDoubleEscapedDash(cp);
                break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
                this._stateScriptDataDoubleEscapedDashDash(cp);
                break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
                this._stateScriptDataDoubleEscapedLessThanSign(cp);
                break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
                this._stateScriptDataDoubleEscapeEnd(cp);
                break;
            }
            case State.BEFORE_ATTRIBUTE_NAME: {
                this._stateBeforeAttributeName(cp);
                break;
            }
            case State.ATTRIBUTE_NAME: {
                this._stateAttributeName(cp);
                break;
            }
            case State.AFTER_ATTRIBUTE_NAME: {
                this._stateAfterAttributeName(cp);
                break;
            }
            case State.BEFORE_ATTRIBUTE_VALUE: {
                this._stateBeforeAttributeValue(cp);
                break;
            }
            case State.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
                this._stateAttributeValueDoubleQuoted(cp);
                break;
            }
            case State.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
                this._stateAttributeValueSingleQuoted(cp);
                break;
            }
            case State.ATTRIBUTE_VALUE_UNQUOTED: {
                this._stateAttributeValueUnquoted(cp);
                break;
            }
            case State.AFTER_ATTRIBUTE_VALUE_QUOTED: {
                this._stateAfterAttributeValueQuoted(cp);
                break;
            }
            case State.SELF_CLOSING_START_TAG: {
                this._stateSelfClosingStartTag(cp);
                break;
            }
            case State.BOGUS_COMMENT: {
                this._stateBogusComment(cp);
                break;
            }
            case State.MARKUP_DECLARATION_OPEN: {
                this._stateMarkupDeclarationOpen(cp);
                break;
            }
            case State.COMMENT_START: {
                this._stateCommentStart(cp);
                break;
            }
            case State.COMMENT_START_DASH: {
                this._stateCommentStartDash(cp);
                break;
            }
            case State.COMMENT: {
                this._stateComment(cp);
                break;
            }
            case State.COMMENT_LESS_THAN_SIGN: {
                this._stateCommentLessThanSign(cp);
                break;
            }
            case State.COMMENT_LESS_THAN_SIGN_BANG: {
                this._stateCommentLessThanSignBang(cp);
                break;
            }
            case State.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
                this._stateCommentLessThanSignBangDash(cp);
                break;
            }
            case State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
                this._stateCommentLessThanSignBangDashDash(cp);
                break;
            }
            case State.COMMENT_END_DASH: {
                this._stateCommentEndDash(cp);
                break;
            }
            case State.COMMENT_END: {
                this._stateCommentEnd(cp);
                break;
            }
            case State.COMMENT_END_BANG: {
                this._stateCommentEndBang(cp);
                break;
            }
            case State.DOCTYPE: {
                this._stateDoctype(cp);
                break;
            }
            case State.BEFORE_DOCTYPE_NAME: {
                this._stateBeforeDoctypeName(cp);
                break;
            }
            case State.DOCTYPE_NAME: {
                this._stateDoctypeName(cp);
                break;
            }
            case State.AFTER_DOCTYPE_NAME: {
                this._stateAfterDoctypeName(cp);
                break;
            }
            case State.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
                this._stateAfterDoctypePublicKeyword(cp);
                break;
            }
            case State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
                this._stateBeforeDoctypePublicIdentifier(cp);
                break;
            }
            case State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
                this._stateDoctypePublicIdentifierDoubleQuoted(cp);
                break;
            }
            case State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
                this._stateDoctypePublicIdentifierSingleQuoted(cp);
                break;
            }
            case State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
                this._stateAfterDoctypePublicIdentifier(cp);
                break;
            }
            case State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
                this._stateBetweenDoctypePublicAndSystemIdentifiers(cp);
                break;
            }
            case State.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
                this._stateAfterDoctypeSystemKeyword(cp);
                break;
            }
            case State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
                this._stateBeforeDoctypeSystemIdentifier(cp);
                break;
            }
            case State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
                this._stateDoctypeSystemIdentifierDoubleQuoted(cp);
                break;
            }
            case State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
                this._stateDoctypeSystemIdentifierSingleQuoted(cp);
                break;
            }
            case State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
                this._stateAfterDoctypeSystemIdentifier(cp);
                break;
            }
            case State.BOGUS_DOCTYPE: {
                this._stateBogusDoctype(cp);
                break;
            }
            case State.CDATA_SECTION: {
                this._stateCdataSection(cp);
                break;
            }
            case State.CDATA_SECTION_BRACKET: {
                this._stateCdataSectionBracket(cp);
                break;
            }
            case State.CDATA_SECTION_END: {
                this._stateCdataSectionEnd(cp);
                break;
            }
            case State.CHARACTER_REFERENCE: {
                this._stateCharacterReference(cp);
                break;
            }
            case State.NAMED_CHARACTER_REFERENCE: {
                this._stateNamedCharacterReference(cp);
                break;
            }
            case State.AMBIGUOUS_AMPERSAND: {
                this._stateAmbiguousAmpersand(cp);
                break;
            }
            case State.NUMERIC_CHARACTER_REFERENCE: {
                this._stateNumericCharacterReference(cp);
                break;
            }
            case State.HEXADEMICAL_CHARACTER_REFERENCE_START: {
                this._stateHexademicalCharacterReferenceStart(cp);
                break;
            }
            case State.HEXADEMICAL_CHARACTER_REFERENCE: {
                this._stateHexademicalCharacterReference(cp);
                break;
            }
            case State.DECIMAL_CHARACTER_REFERENCE: {
                this._stateDecimalCharacterReference(cp);
                break;
            }
            case State.NUMERIC_CHARACTER_REFERENCE_END: {
                this._stateNumericCharacterReferenceEnd(cp);
                break;
            }
            default: {
                throw new Error('Unknown state');
            }
        }
    }
    // State machine
    // Data state
    //------------------------------------------------------------------
    _stateData(cp) {
        switch (cp) {
            case CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.TAG_OPEN;
                break;
            }
            case CODE_POINTS.AMPERSAND: {
                this.returnState = State.DATA;
                this.state = State.CHARACTER_REFERENCE;
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                this._emitCodePoint(cp);
                break;
            }
            case CODE_POINTS.EOF: {
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    //  RCDATA state
    //------------------------------------------------------------------
    _stateRcdata(cp) {
        switch (cp) {
            case CODE_POINTS.AMPERSAND: {
                this.returnState = State.RCDATA;
                this.state = State.CHARACTER_REFERENCE;
                break;
            }
            case CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.RCDATA_LESS_THAN_SIGN;
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                this._emitChars(REPLACEMENT_CHARACTER);
                break;
            }
            case CODE_POINTS.EOF: {
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    // RAWTEXT state
    //------------------------------------------------------------------
    _stateRawtext(cp) {
        switch (cp) {
            case CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.RAWTEXT_LESS_THAN_SIGN;
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                this._emitChars(REPLACEMENT_CHARACTER);
                break;
            }
            case CODE_POINTS.EOF: {
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    // Script data state
    //------------------------------------------------------------------
    _stateScriptData(cp) {
        switch (cp) {
            case CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.SCRIPT_DATA_LESS_THAN_SIGN;
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                this._emitChars(REPLACEMENT_CHARACTER);
                break;
            }
            case CODE_POINTS.EOF: {
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    // PLAINTEXT state
    //------------------------------------------------------------------
    _statePlaintext(cp) {
        switch (cp) {
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                this._emitChars(REPLACEMENT_CHARACTER);
                break;
            }
            case CODE_POINTS.EOF: {
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    // Tag open state
    //------------------------------------------------------------------
    _stateTagOpen(cp) {
        if (isAsciiLetter(cp)) {
            this._createStartTagToken();
            this.state = State.TAG_NAME;
            this._stateTagName(cp);
        }
        else
            switch (cp) {
                case CODE_POINTS.EXCLAMATION_MARK: {
                    this.state = State.MARKUP_DECLARATION_OPEN;
                    break;
                }
                case CODE_POINTS.SOLIDUS: {
                    this.state = State.END_TAG_OPEN;
                    break;
                }
                case CODE_POINTS.QUESTION_MARK: {
                    this._err(ERR.unexpectedQuestionMarkInsteadOfTagName);
                    this._createCommentToken(1);
                    this.state = State.BOGUS_COMMENT;
                    this._stateBogusComment(cp);
                    break;
                }
                case CODE_POINTS.EOF: {
                    this._err(ERR.eofBeforeTagName);
                    this._emitChars('<');
                    this._emitEOFToken();
                    break;
                }
                default: {
                    this._err(ERR.invalidFirstCharacterOfTagName);
                    this._emitChars('<');
                    this.state = State.DATA;
                    this._stateData(cp);
                }
            }
    }
    // End tag open state
    //------------------------------------------------------------------
    _stateEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
            this._createEndTagToken();
            this.state = State.TAG_NAME;
            this._stateTagName(cp);
        }
        else
            switch (cp) {
                case CODE_POINTS.GREATER_THAN_SIGN: {
                    this._err(ERR.missingEndTagName);
                    this.state = State.DATA;
                    break;
                }
                case CODE_POINTS.EOF: {
                    this._err(ERR.eofBeforeTagName);
                    this._emitChars('</');
                    this._emitEOFToken();
                    break;
                }
                default: {
                    this._err(ERR.invalidFirstCharacterOfTagName);
                    this._createCommentToken(2);
                    this.state = State.BOGUS_COMMENT;
                    this._stateBogusComment(cp);
                }
            }
    }
    // Tag name state
    //------------------------------------------------------------------
    _stateTagName(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                this.state = State.BEFORE_ATTRIBUTE_NAME;
                break;
            }
            case CODE_POINTS.SOLIDUS: {
                this.state = State.SELF_CLOSING_START_TAG;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                this.emitCurrentTagToken();
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                token.tagName += REPLACEMENT_CHARACTER;
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInTag);
                this._emitEOFToken();
                break;
            }
            default: {
                token.tagName += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
            }
        }
    }
    // RCDATA less-than sign state
    //------------------------------------------------------------------
    _stateRcdataLessThanSign(cp) {
        if (cp === CODE_POINTS.SOLIDUS) {
            this.state = State.RCDATA_END_TAG_OPEN;
        }
        else {
            this._emitChars('<');
            this.state = State.RCDATA;
            this._stateRcdata(cp);
        }
    }
    // RCDATA end tag open state
    //------------------------------------------------------------------
    _stateRcdataEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
            this.state = State.RCDATA_END_TAG_NAME;
            this._stateRcdataEndTagName(cp);
        }
        else {
            this._emitChars('</');
            this.state = State.RCDATA;
            this._stateRcdata(cp);
        }
    }
    handleSpecialEndTag(_cp) {
        if (!this.preprocessor.startsWith(this.lastStartTagName, false)) {
            return !this._ensureHibernation();
        }
        this._createEndTagToken();
        const token = this.currentToken;
        token.tagName = this.lastStartTagName;
        const cp = this.preprocessor.peek(this.lastStartTagName.length);
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                this._advanceBy(this.lastStartTagName.length);
                this.state = State.BEFORE_ATTRIBUTE_NAME;
                return false;
            }
            case CODE_POINTS.SOLIDUS: {
                this._advanceBy(this.lastStartTagName.length);
                this.state = State.SELF_CLOSING_START_TAG;
                return false;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this._advanceBy(this.lastStartTagName.length);
                this.emitCurrentTagToken();
                this.state = State.DATA;
                return false;
            }
            default: {
                return !this._ensureHibernation();
            }
        }
    }
    // RCDATA end tag name state
    //------------------------------------------------------------------
    _stateRcdataEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
            this._emitChars('</');
            this.state = State.RCDATA;
            this._stateRcdata(cp);
        }
    }
    // RAWTEXT less-than sign state
    //------------------------------------------------------------------
    _stateRawtextLessThanSign(cp) {
        if (cp === CODE_POINTS.SOLIDUS) {
            this.state = State.RAWTEXT_END_TAG_OPEN;
        }
        else {
            this._emitChars('<');
            this.state = State.RAWTEXT;
            this._stateRawtext(cp);
        }
    }
    // RAWTEXT end tag open state
    //------------------------------------------------------------------
    _stateRawtextEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
            this.state = State.RAWTEXT_END_TAG_NAME;
            this._stateRawtextEndTagName(cp);
        }
        else {
            this._emitChars('</');
            this.state = State.RAWTEXT;
            this._stateRawtext(cp);
        }
    }
    // RAWTEXT end tag name state
    //------------------------------------------------------------------
    _stateRawtextEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
            this._emitChars('</');
            this.state = State.RAWTEXT;
            this._stateRawtext(cp);
        }
    }
    // Script data less-than sign state
    //------------------------------------------------------------------
    _stateScriptDataLessThanSign(cp) {
        switch (cp) {
            case CODE_POINTS.SOLIDUS: {
                this.state = State.SCRIPT_DATA_END_TAG_OPEN;
                break;
            }
            case CODE_POINTS.EXCLAMATION_MARK: {
                this.state = State.SCRIPT_DATA_ESCAPE_START;
                this._emitChars('<!');
                break;
            }
            default: {
                this._emitChars('<');
                this.state = State.SCRIPT_DATA;
                this._stateScriptData(cp);
            }
        }
    }
    // Script data end tag open state
    //------------------------------------------------------------------
    _stateScriptDataEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
            this.state = State.SCRIPT_DATA_END_TAG_NAME;
            this._stateScriptDataEndTagName(cp);
        }
        else {
            this._emitChars('</');
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
        }
    }
    // Script data end tag name state
    //------------------------------------------------------------------
    _stateScriptDataEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
            this._emitChars('</');
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
        }
    }
    // Script data escape start state
    //------------------------------------------------------------------
    _stateScriptDataEscapeStart(cp) {
        if (cp === CODE_POINTS.HYPHEN_MINUS) {
            this.state = State.SCRIPT_DATA_ESCAPE_START_DASH;
            this._emitChars('-');
        }
        else {
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
        }
    }
    // Script data escape start dash state
    //------------------------------------------------------------------
    _stateScriptDataEscapeStartDash(cp) {
        if (cp === CODE_POINTS.HYPHEN_MINUS) {
            this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
            this._emitChars('-');
        }
        else {
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
        }
    }
    // Script data escaped state
    //------------------------------------------------------------------
    _stateScriptDataEscaped(cp) {
        switch (cp) {
            case CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.SCRIPT_DATA_ESCAPED_DASH;
                this._emitChars('-');
                break;
            }
            case CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                this._emitChars(REPLACEMENT_CHARACTER);
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInScriptHtmlCommentLikeText);
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    // Script data escaped dash state
    //------------------------------------------------------------------
    _stateScriptDataEscapedDash(cp) {
        switch (cp) {
            case CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
                this._emitChars('-');
                break;
            }
            case CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                this.state = State.SCRIPT_DATA_ESCAPED;
                this._emitChars(REPLACEMENT_CHARACTER);
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInScriptHtmlCommentLikeText);
                this._emitEOFToken();
                break;
            }
            default: {
                this.state = State.SCRIPT_DATA_ESCAPED;
                this._emitCodePoint(cp);
            }
        }
    }
    // Script data escaped dash dash state
    //------------------------------------------------------------------
    _stateScriptDataEscapedDashDash(cp) {
        switch (cp) {
            case CODE_POINTS.HYPHEN_MINUS: {
                this._emitChars('-');
                break;
            }
            case CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.SCRIPT_DATA;
                this._emitChars('>');
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                this.state = State.SCRIPT_DATA_ESCAPED;
                this._emitChars(REPLACEMENT_CHARACTER);
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInScriptHtmlCommentLikeText);
                this._emitEOFToken();
                break;
            }
            default: {
                this.state = State.SCRIPT_DATA_ESCAPED;
                this._emitCodePoint(cp);
            }
        }
    }
    // Script data escaped less-than sign state
    //------------------------------------------------------------------
    _stateScriptDataEscapedLessThanSign(cp) {
        if (cp === CODE_POINTS.SOLIDUS) {
            this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;
        }
        else if (isAsciiLetter(cp)) {
            this._emitChars('<');
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_START;
            this._stateScriptDataDoubleEscapeStart(cp);
        }
        else {
            this._emitChars('<');
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(cp);
        }
    }
    // Script data escaped end tag open state
    //------------------------------------------------------------------
    _stateScriptDataEscapedEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
            this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_NAME;
            this._stateScriptDataEscapedEndTagName(cp);
        }
        else {
            this._emitChars('</');
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(cp);
        }
    }
    // Script data escaped end tag name state
    //------------------------------------------------------------------
    _stateScriptDataEscapedEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
            this._emitChars('</');
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(cp);
        }
    }
    // Script data double escape start state
    //------------------------------------------------------------------
    _stateScriptDataDoubleEscapeStart(cp) {
        if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, false) &&
            isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
            this._emitCodePoint(cp);
            for (let i = 0; i < SEQUENCES.SCRIPT.length; i++) {
                this._emitCodePoint(this._consume());
            }
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
        }
        else if (!this._ensureHibernation()) {
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(cp);
        }
    }
    // Script data double escaped state
    //------------------------------------------------------------------
    _stateScriptDataDoubleEscaped(cp) {
        switch (cp) {
            case CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH;
                this._emitChars('-');
                break;
            }
            case CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
                this._emitChars('<');
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                this._emitChars(REPLACEMENT_CHARACTER);
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInScriptHtmlCommentLikeText);
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    // Script data double escaped dash state
    //------------------------------------------------------------------
    _stateScriptDataDoubleEscapedDash(cp) {
        switch (cp) {
            case CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH;
                this._emitChars('-');
                break;
            }
            case CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
                this._emitChars('<');
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
                this._emitChars(REPLACEMENT_CHARACTER);
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInScriptHtmlCommentLikeText);
                this._emitEOFToken();
                break;
            }
            default: {
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
                this._emitCodePoint(cp);
            }
        }
    }
    // Script data double escaped dash dash state
    //------------------------------------------------------------------
    _stateScriptDataDoubleEscapedDashDash(cp) {
        switch (cp) {
            case CODE_POINTS.HYPHEN_MINUS: {
                this._emitChars('-');
                break;
            }
            case CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
                this._emitChars('<');
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.SCRIPT_DATA;
                this._emitChars('>');
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
                this._emitChars(REPLACEMENT_CHARACTER);
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInScriptHtmlCommentLikeText);
                this._emitEOFToken();
                break;
            }
            default: {
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
                this._emitCodePoint(cp);
            }
        }
    }
    // Script data double escaped less-than sign state
    //------------------------------------------------------------------
    _stateScriptDataDoubleEscapedLessThanSign(cp) {
        if (cp === CODE_POINTS.SOLIDUS) {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_END;
            this._emitChars('/');
        }
        else {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._stateScriptDataDoubleEscaped(cp);
        }
    }
    // Script data double escape end state
    //------------------------------------------------------------------
    _stateScriptDataDoubleEscapeEnd(cp) {
        if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, false) &&
            isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
            this._emitCodePoint(cp);
            for (let i = 0; i < SEQUENCES.SCRIPT.length; i++) {
                this._emitCodePoint(this._consume());
            }
            this.state = State.SCRIPT_DATA_ESCAPED;
        }
        else if (!this._ensureHibernation()) {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._stateScriptDataDoubleEscaped(cp);
        }
    }
    // Before attribute name state
    //------------------------------------------------------------------
    _stateBeforeAttributeName(cp) {
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case CODE_POINTS.SOLIDUS:
            case CODE_POINTS.GREATER_THAN_SIGN:
            case CODE_POINTS.EOF: {
                this.state = State.AFTER_ATTRIBUTE_NAME;
                this._stateAfterAttributeName(cp);
                break;
            }
            case CODE_POINTS.EQUALS_SIGN: {
                this._err(ERR.unexpectedEqualsSignBeforeAttributeName);
                this._createAttr('=');
                this.state = State.ATTRIBUTE_NAME;
                break;
            }
            default: {
                this._createAttr('');
                this.state = State.ATTRIBUTE_NAME;
                this._stateAttributeName(cp);
            }
        }
    }
    // Attribute name state
    //------------------------------------------------------------------
    _stateAttributeName(cp) {
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED:
            case CODE_POINTS.SOLIDUS:
            case CODE_POINTS.GREATER_THAN_SIGN:
            case CODE_POINTS.EOF: {
                this._leaveAttrName();
                this.state = State.AFTER_ATTRIBUTE_NAME;
                this._stateAfterAttributeName(cp);
                break;
            }
            case CODE_POINTS.EQUALS_SIGN: {
                this._leaveAttrName();
                this.state = State.BEFORE_ATTRIBUTE_VALUE;
                break;
            }
            case CODE_POINTS.QUOTATION_MARK:
            case CODE_POINTS.APOSTROPHE:
            case CODE_POINTS.LESS_THAN_SIGN: {
                this._err(ERR.unexpectedCharacterInAttributeName);
                this.currentAttr.name += String.fromCodePoint(cp);
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                this.currentAttr.name += REPLACEMENT_CHARACTER;
                break;
            }
            default: {
                this.currentAttr.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
            }
        }
    }
    // After attribute name state
    //------------------------------------------------------------------
    _stateAfterAttributeName(cp) {
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case CODE_POINTS.SOLIDUS: {
                this.state = State.SELF_CLOSING_START_TAG;
                break;
            }
            case CODE_POINTS.EQUALS_SIGN: {
                this.state = State.BEFORE_ATTRIBUTE_VALUE;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                this.emitCurrentTagToken();
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInTag);
                this._emitEOFToken();
                break;
            }
            default: {
                this._createAttr('');
                this.state = State.ATTRIBUTE_NAME;
                this._stateAttributeName(cp);
            }
        }
    }
    // Before attribute value state
    //------------------------------------------------------------------
    _stateBeforeAttributeValue(cp) {
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case CODE_POINTS.QUOTATION_MARK: {
                this.state = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
                break;
            }
            case CODE_POINTS.APOSTROPHE: {
                this.state = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(ERR.missingAttributeValue);
                this.state = State.DATA;
                this.emitCurrentTagToken();
                break;
            }
            default: {
                this.state = State.ATTRIBUTE_VALUE_UNQUOTED;
                this._stateAttributeValueUnquoted(cp);
            }
        }
    }
    // Attribute value (double-quoted) state
    //------------------------------------------------------------------
    _stateAttributeValueDoubleQuoted(cp) {
        switch (cp) {
            case CODE_POINTS.QUOTATION_MARK: {
                this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
                break;
            }
            case CODE_POINTS.AMPERSAND: {
                this.returnState = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
                this.state = State.CHARACTER_REFERENCE;
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                this.currentAttr.value += REPLACEMENT_CHARACTER;
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInTag);
                this._emitEOFToken();
                break;
            }
            default: {
                this.currentAttr.value += String.fromCodePoint(cp);
            }
        }
    }
    // Attribute value (single-quoted) state
    //------------------------------------------------------------------
    _stateAttributeValueSingleQuoted(cp) {
        switch (cp) {
            case CODE_POINTS.APOSTROPHE: {
                this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
                break;
            }
            case CODE_POINTS.AMPERSAND: {
                this.returnState = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
                this.state = State.CHARACTER_REFERENCE;
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                this.currentAttr.value += REPLACEMENT_CHARACTER;
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInTag);
                this._emitEOFToken();
                break;
            }
            default: {
                this.currentAttr.value += String.fromCodePoint(cp);
            }
        }
    }
    // Attribute value (unquoted) state
    //------------------------------------------------------------------
    _stateAttributeValueUnquoted(cp) {
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                this._leaveAttrValue();
                this.state = State.BEFORE_ATTRIBUTE_NAME;
                break;
            }
            case CODE_POINTS.AMPERSAND: {
                this.returnState = State.ATTRIBUTE_VALUE_UNQUOTED;
                this.state = State.CHARACTER_REFERENCE;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this._leaveAttrValue();
                this.state = State.DATA;
                this.emitCurrentTagToken();
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                this.currentAttr.value += REPLACEMENT_CHARACTER;
                break;
            }
            case CODE_POINTS.QUOTATION_MARK:
            case CODE_POINTS.APOSTROPHE:
            case CODE_POINTS.LESS_THAN_SIGN:
            case CODE_POINTS.EQUALS_SIGN:
            case CODE_POINTS.GRAVE_ACCENT: {
                this._err(ERR.unexpectedCharacterInUnquotedAttributeValue);
                this.currentAttr.value += String.fromCodePoint(cp);
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInTag);
                this._emitEOFToken();
                break;
            }
            default: {
                this.currentAttr.value += String.fromCodePoint(cp);
            }
        }
    }
    // After attribute value (quoted) state
    //------------------------------------------------------------------
    _stateAfterAttributeValueQuoted(cp) {
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                this._leaveAttrValue();
                this.state = State.BEFORE_ATTRIBUTE_NAME;
                break;
            }
            case CODE_POINTS.SOLIDUS: {
                this._leaveAttrValue();
                this.state = State.SELF_CLOSING_START_TAG;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this._leaveAttrValue();
                this.state = State.DATA;
                this.emitCurrentTagToken();
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInTag);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(ERR.missingWhitespaceBetweenAttributes);
                this.state = State.BEFORE_ATTRIBUTE_NAME;
                this._stateBeforeAttributeName(cp);
            }
        }
    }
    // Self-closing start tag state
    //------------------------------------------------------------------
    _stateSelfClosingStartTag(cp) {
        switch (cp) {
            case CODE_POINTS.GREATER_THAN_SIGN: {
                const token = this.currentToken;
                token.selfClosing = true;
                this.state = State.DATA;
                this.emitCurrentTagToken();
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInTag);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(ERR.unexpectedSolidusInTag);
                this.state = State.BEFORE_ATTRIBUTE_NAME;
                this._stateBeforeAttributeName(cp);
            }
        }
    }
    // Bogus comment state
    //------------------------------------------------------------------
    _stateBogusComment(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                this.emitCurrentComment(token);
                break;
            }
            case CODE_POINTS.EOF: {
                this.emitCurrentComment(token);
                this._emitEOFToken();
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                token.data += REPLACEMENT_CHARACTER;
                break;
            }
            default: {
                token.data += String.fromCodePoint(cp);
            }
        }
    }
    // Markup declaration open state
    //------------------------------------------------------------------
    _stateMarkupDeclarationOpen(cp) {
        if (this._consumeSequenceIfMatch(SEQUENCES.DASH_DASH, true)) {
            this._createCommentToken(SEQUENCES.DASH_DASH.length + 1);
            this.state = State.COMMENT_START;
        }
        else if (this._consumeSequenceIfMatch(SEQUENCES.DOCTYPE, false)) {
            // NOTE: Doctypes tokens are created without fixed offsets. We keep track of the moment a doctype *might* start here.
            this.currentLocation = this.getCurrentLocation(SEQUENCES.DOCTYPE.length + 1);
            this.state = State.DOCTYPE;
        }
        else if (this._consumeSequenceIfMatch(SEQUENCES.CDATA_START, true)) {
            if (this.inForeignNode) {
                this.state = State.CDATA_SECTION;
            }
            else {
                this._err(ERR.cdataInHtmlContent);
                this._createCommentToken(SEQUENCES.CDATA_START.length + 1);
                this.currentToken.data = '[CDATA[';
                this.state = State.BOGUS_COMMENT;
            }
        }
        //NOTE: Sequence lookups can be abrupted by hibernation. In that case, lookup
        //results are no longer valid and we will need to start over.
        else if (!this._ensureHibernation()) {
            this._err(ERR.incorrectlyOpenedComment);
            this._createCommentToken(2);
            this.state = State.BOGUS_COMMENT;
            this._stateBogusComment(cp);
        }
    }
    // Comment start state
    //------------------------------------------------------------------
    _stateCommentStart(cp) {
        switch (cp) {
            case CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.COMMENT_START_DASH;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(ERR.abruptClosingOfEmptyComment);
                this.state = State.DATA;
                const token = this.currentToken;
                this.emitCurrentComment(token);
                break;
            }
            default: {
                this.state = State.COMMENT;
                this._stateComment(cp);
            }
        }
    }
    // Comment start dash state
    //------------------------------------------------------------------
    _stateCommentStartDash(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.COMMENT_END;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(ERR.abruptClosingOfEmptyComment);
                this.state = State.DATA;
                this.emitCurrentComment(token);
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInComment);
                this.emitCurrentComment(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.data += '-';
                this.state = State.COMMENT;
                this._stateComment(cp);
            }
        }
    }
    // Comment state
    //------------------------------------------------------------------
    _stateComment(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.COMMENT_END_DASH;
                break;
            }
            case CODE_POINTS.LESS_THAN_SIGN: {
                token.data += '<';
                this.state = State.COMMENT_LESS_THAN_SIGN;
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                token.data += REPLACEMENT_CHARACTER;
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInComment);
                this.emitCurrentComment(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.data += String.fromCodePoint(cp);
            }
        }
    }
    // Comment less-than sign state
    //------------------------------------------------------------------
    _stateCommentLessThanSign(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.EXCLAMATION_MARK: {
                token.data += '!';
                this.state = State.COMMENT_LESS_THAN_SIGN_BANG;
                break;
            }
            case CODE_POINTS.LESS_THAN_SIGN: {
                token.data += '<';
                break;
            }
            default: {
                this.state = State.COMMENT;
                this._stateComment(cp);
            }
        }
    }
    // Comment less-than sign bang state
    //------------------------------------------------------------------
    _stateCommentLessThanSignBang(cp) {
        if (cp === CODE_POINTS.HYPHEN_MINUS) {
            this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH;
        }
        else {
            this.state = State.COMMENT;
            this._stateComment(cp);
        }
    }
    // Comment less-than sign bang dash state
    //------------------------------------------------------------------
    _stateCommentLessThanSignBangDash(cp) {
        if (cp === CODE_POINTS.HYPHEN_MINUS) {
            this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
        }
        else {
            this.state = State.COMMENT_END_DASH;
            this._stateCommentEndDash(cp);
        }
    }
    // Comment less-than sign bang dash dash state
    //------------------------------------------------------------------
    _stateCommentLessThanSignBangDashDash(cp) {
        if (cp !== CODE_POINTS.GREATER_THAN_SIGN && cp !== CODE_POINTS.EOF) {
            this._err(ERR.nestedComment);
        }
        this.state = State.COMMENT_END;
        this._stateCommentEnd(cp);
    }
    // Comment end dash state
    //------------------------------------------------------------------
    _stateCommentEndDash(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.COMMENT_END;
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInComment);
                this.emitCurrentComment(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.data += '-';
                this.state = State.COMMENT;
                this._stateComment(cp);
            }
        }
    }
    // Comment end state
    //------------------------------------------------------------------
    _stateCommentEnd(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                this.emitCurrentComment(token);
                break;
            }
            case CODE_POINTS.EXCLAMATION_MARK: {
                this.state = State.COMMENT_END_BANG;
                break;
            }
            case CODE_POINTS.HYPHEN_MINUS: {
                token.data += '-';
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInComment);
                this.emitCurrentComment(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.data += '--';
                this.state = State.COMMENT;
                this._stateComment(cp);
            }
        }
    }
    // Comment end bang state
    //------------------------------------------------------------------
    _stateCommentEndBang(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.HYPHEN_MINUS: {
                token.data += '--!';
                this.state = State.COMMENT_END_DASH;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(ERR.incorrectlyClosedComment);
                this.state = State.DATA;
                this.emitCurrentComment(token);
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInComment);
                this.emitCurrentComment(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.data += '--!';
                this.state = State.COMMENT;
                this._stateComment(cp);
            }
        }
    }
    // DOCTYPE state
    //------------------------------------------------------------------
    _stateDoctype(cp) {
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                this.state = State.BEFORE_DOCTYPE_NAME;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.BEFORE_DOCTYPE_NAME;
                this._stateBeforeDoctypeName(cp);
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInDoctype);
                this._createDoctypeToken(null);
                const token = this.currentToken;
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(ERR.missingWhitespaceBeforeDoctypeName);
                this.state = State.BEFORE_DOCTYPE_NAME;
                this._stateBeforeDoctypeName(cp);
            }
        }
    }
    // Before DOCTYPE name state
    //------------------------------------------------------------------
    _stateBeforeDoctypeName(cp) {
        if (isAsciiUpper(cp)) {
            this._createDoctypeToken(String.fromCharCode(toAsciiLower(cp)));
            this.state = State.DOCTYPE_NAME;
        }
        else
            switch (cp) {
                case CODE_POINTS.SPACE:
                case CODE_POINTS.LINE_FEED:
                case CODE_POINTS.TABULATION:
                case CODE_POINTS.FORM_FEED: {
                    // Ignore whitespace
                    break;
                }
                case CODE_POINTS.NULL: {
                    this._err(ERR.unexpectedNullCharacter);
                    this._createDoctypeToken(REPLACEMENT_CHARACTER);
                    this.state = State.DOCTYPE_NAME;
                    break;
                }
                case CODE_POINTS.GREATER_THAN_SIGN: {
                    this._err(ERR.missingDoctypeName);
                    this._createDoctypeToken(null);
                    const token = this.currentToken;
                    token.forceQuirks = true;
                    this.emitCurrentDoctype(token);
                    this.state = State.DATA;
                    break;
                }
                case CODE_POINTS.EOF: {
                    this._err(ERR.eofInDoctype);
                    this._createDoctypeToken(null);
                    const token = this.currentToken;
                    token.forceQuirks = true;
                    this.emitCurrentDoctype(token);
                    this._emitEOFToken();
                    break;
                }
                default: {
                    this._createDoctypeToken(String.fromCodePoint(cp));
                    this.state = State.DOCTYPE_NAME;
                }
            }
    }
    // DOCTYPE name state
    //------------------------------------------------------------------
    _stateDoctypeName(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                this.state = State.AFTER_DOCTYPE_NAME;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                this.emitCurrentDoctype(token);
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                token.name += REPLACEMENT_CHARACTER;
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
            }
        }
    }
    // After DOCTYPE name state
    //------------------------------------------------------------------
    _stateAfterDoctypeName(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                this.emitCurrentDoctype(token);
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                if (this._consumeSequenceIfMatch(SEQUENCES.PUBLIC, false)) {
                    this.state = State.AFTER_DOCTYPE_PUBLIC_KEYWORD;
                }
                else if (this._consumeSequenceIfMatch(SEQUENCES.SYSTEM, false)) {
                    this.state = State.AFTER_DOCTYPE_SYSTEM_KEYWORD;
                }
                //NOTE: sequence lookup can be abrupted by hibernation. In that case lookup
                //results are no longer valid and we will need to start over.
                else if (!this._ensureHibernation()) {
                    this._err(ERR.invalidCharacterSequenceAfterDoctypeName);
                    token.forceQuirks = true;
                    this.state = State.BOGUS_DOCTYPE;
                    this._stateBogusDoctype(cp);
                }
            }
        }
    }
    // After DOCTYPE public keyword state
    //------------------------------------------------------------------
    _stateAfterDoctypePublicKeyword(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                this.state = State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
                break;
            }
            case CODE_POINTS.QUOTATION_MARK: {
                this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
                token.publicId = '';
                this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                break;
            }
            case CODE_POINTS.APOSTROPHE: {
                this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
                token.publicId = '';
                this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(ERR.missingDoctypePublicIdentifier);
                token.forceQuirks = true;
                this.state = State.DATA;
                this.emitCurrentDoctype(token);
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
                token.forceQuirks = true;
                this.state = State.BOGUS_DOCTYPE;
                this._stateBogusDoctype(cp);
            }
        }
    }
    // Before DOCTYPE public identifier state
    //------------------------------------------------------------------
    _stateBeforeDoctypePublicIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case CODE_POINTS.QUOTATION_MARK: {
                token.publicId = '';
                this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                break;
            }
            case CODE_POINTS.APOSTROPHE: {
                token.publicId = '';
                this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(ERR.missingDoctypePublicIdentifier);
                token.forceQuirks = true;
                this.state = State.DATA;
                this.emitCurrentDoctype(token);
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
                token.forceQuirks = true;
                this.state = State.BOGUS_DOCTYPE;
                this._stateBogusDoctype(cp);
            }
        }
    }
    // DOCTYPE public identifier (double-quoted) state
    //------------------------------------------------------------------
    _stateDoctypePublicIdentifierDoubleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.QUOTATION_MARK: {
                this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                token.publicId += REPLACEMENT_CHARACTER;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(ERR.abruptDoctypePublicIdentifier);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this.state = State.DATA;
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.publicId += String.fromCodePoint(cp);
            }
        }
    }
    // DOCTYPE public identifier (single-quoted) state
    //------------------------------------------------------------------
    _stateDoctypePublicIdentifierSingleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.APOSTROPHE: {
                this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                token.publicId += REPLACEMENT_CHARACTER;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(ERR.abruptDoctypePublicIdentifier);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this.state = State.DATA;
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.publicId += String.fromCodePoint(cp);
            }
        }
    }
    // After DOCTYPE public identifier state
    //------------------------------------------------------------------
    _stateAfterDoctypePublicIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                this.state = State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                this.emitCurrentDoctype(token);
                break;
            }
            case CODE_POINTS.QUOTATION_MARK: {
                this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                break;
            }
            case CODE_POINTS.APOSTROPHE: {
                this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.state = State.BOGUS_DOCTYPE;
                this._stateBogusDoctype(cp);
            }
        }
    }
    // Between DOCTYPE public and system identifiers state
    //------------------------------------------------------------------
    _stateBetweenDoctypePublicAndSystemIdentifiers(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this.emitCurrentDoctype(token);
                this.state = State.DATA;
                break;
            }
            case CODE_POINTS.QUOTATION_MARK: {
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                break;
            }
            case CODE_POINTS.APOSTROPHE: {
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.state = State.BOGUS_DOCTYPE;
                this._stateBogusDoctype(cp);
            }
        }
    }
    // After DOCTYPE system keyword state
    //------------------------------------------------------------------
    _stateAfterDoctypeSystemKeyword(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                this.state = State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
                break;
            }
            case CODE_POINTS.QUOTATION_MARK: {
                this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                break;
            }
            case CODE_POINTS.APOSTROPHE: {
                this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(ERR.missingDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.state = State.DATA;
                this.emitCurrentDoctype(token);
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.state = State.BOGUS_DOCTYPE;
                this._stateBogusDoctype(cp);
            }
        }
    }
    // Before DOCTYPE system identifier state
    //------------------------------------------------------------------
    _stateBeforeDoctypeSystemIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case CODE_POINTS.QUOTATION_MARK: {
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                break;
            }
            case CODE_POINTS.APOSTROPHE: {
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(ERR.missingDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.state = State.DATA;
                this.emitCurrentDoctype(token);
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.state = State.BOGUS_DOCTYPE;
                this._stateBogusDoctype(cp);
            }
        }
    }
    // DOCTYPE system identifier (double-quoted) state
    //------------------------------------------------------------------
    _stateDoctypeSystemIdentifierDoubleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.QUOTATION_MARK: {
                this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                token.systemId += REPLACEMENT_CHARACTER;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(ERR.abruptDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this.state = State.DATA;
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.systemId += String.fromCodePoint(cp);
            }
        }
    }
    // DOCTYPE system identifier (single-quoted) state
    //------------------------------------------------------------------
    _stateDoctypeSystemIdentifierSingleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.APOSTROPHE: {
                this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                token.systemId += REPLACEMENT_CHARACTER;
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(ERR.abruptDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this.state = State.DATA;
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.systemId += String.fromCodePoint(cp);
            }
        }
    }
    // After DOCTYPE system identifier state
    //------------------------------------------------------------------
    _stateAfterDoctypeSystemIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this.emitCurrentDoctype(token);
                this.state = State.DATA;
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
                this.state = State.BOGUS_DOCTYPE;
                this._stateBogusDoctype(cp);
            }
        }
    }
    // Bogus DOCTYPE state
    //------------------------------------------------------------------
    _stateBogusDoctype(cp) {
        const token = this.currentToken;
        switch (cp) {
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this.emitCurrentDoctype(token);
                this.state = State.DATA;
                break;
            }
            case CODE_POINTS.NULL: {
                this._err(ERR.unexpectedNullCharacter);
                break;
            }
            case CODE_POINTS.EOF: {
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            // Do nothing
        }
    }
    // CDATA section state
    //------------------------------------------------------------------
    _stateCdataSection(cp) {
        switch (cp) {
            case CODE_POINTS.RIGHT_SQUARE_BRACKET: {
                this.state = State.CDATA_SECTION_BRACKET;
                break;
            }
            case CODE_POINTS.EOF: {
                this._err(ERR.eofInCdata);
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    // CDATA section bracket state
    //------------------------------------------------------------------
    _stateCdataSectionBracket(cp) {
        if (cp === CODE_POINTS.RIGHT_SQUARE_BRACKET) {
            this.state = State.CDATA_SECTION_END;
        }
        else {
            this._emitChars(']');
            this.state = State.CDATA_SECTION;
            this._stateCdataSection(cp);
        }
    }
    // CDATA section end state
    //------------------------------------------------------------------
    _stateCdataSectionEnd(cp) {
        switch (cp) {
            case CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                break;
            }
            case CODE_POINTS.RIGHT_SQUARE_BRACKET: {
                this._emitChars(']');
                break;
            }
            default: {
                this._emitChars(']]');
                this.state = State.CDATA_SECTION;
                this._stateCdataSection(cp);
            }
        }
    }
    // Character reference state
    //------------------------------------------------------------------
    _stateCharacterReference(cp) {
        if (cp === CODE_POINTS.NUMBER_SIGN) {
            this.state = State.NUMERIC_CHARACTER_REFERENCE;
        }
        else if (isAsciiAlphaNumeric(cp)) {
            this.state = State.NAMED_CHARACTER_REFERENCE;
            this._stateNamedCharacterReference(cp);
        }
        else {
            this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND);
            this._reconsumeInState(this.returnState, cp);
        }
    }
    // Named character reference state
    //------------------------------------------------------------------
    _stateNamedCharacterReference(cp) {
        const matchResult = this._matchNamedCharacterReference(cp);
        //NOTE: Matching can be abrupted by hibernation. In that case, match
        //results are no longer valid and we will need to start over.
        if (this._ensureHibernation()) ;
        else if (matchResult) {
            for (let i = 0; i < matchResult.length; i++) {
                this._flushCodePointConsumedAsCharacterReference(matchResult[i]);
            }
            this.state = this.returnState;
        }
        else {
            this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND);
            this.state = State.AMBIGUOUS_AMPERSAND;
        }
    }
    // Ambiguos ampersand state
    //------------------------------------------------------------------
    _stateAmbiguousAmpersand(cp) {
        if (isAsciiAlphaNumeric(cp)) {
            this._flushCodePointConsumedAsCharacterReference(cp);
        }
        else {
            if (cp === CODE_POINTS.SEMICOLON) {
                this._err(ERR.unknownNamedCharacterReference);
            }
            this._reconsumeInState(this.returnState, cp);
        }
    }
    // Numeric character reference state
    //------------------------------------------------------------------
    _stateNumericCharacterReference(cp) {
        this.charRefCode = 0;
        if (cp === CODE_POINTS.LATIN_SMALL_X || cp === CODE_POINTS.LATIN_CAPITAL_X) {
            this.state = State.HEXADEMICAL_CHARACTER_REFERENCE_START;
        }
        // Inlined decimal character reference start state
        else if (isAsciiDigit(cp)) {
            this.state = State.DECIMAL_CHARACTER_REFERENCE;
            this._stateDecimalCharacterReference(cp);
        }
        else {
            this._err(ERR.absenceOfDigitsInNumericCharacterReference);
            this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND);
            this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.NUMBER_SIGN);
            this._reconsumeInState(this.returnState, cp);
        }
    }
    // Hexademical character reference start state
    //------------------------------------------------------------------
    _stateHexademicalCharacterReferenceStart(cp) {
        if (isAsciiHexDigit(cp)) {
            this.state = State.HEXADEMICAL_CHARACTER_REFERENCE;
            this._stateHexademicalCharacterReference(cp);
        }
        else {
            this._err(ERR.absenceOfDigitsInNumericCharacterReference);
            this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND);
            this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.NUMBER_SIGN);
            this._unconsume(2);
            this.state = this.returnState;
        }
    }
    // Hexademical character reference state
    //------------------------------------------------------------------
    _stateHexademicalCharacterReference(cp) {
        if (isAsciiUpperHexDigit(cp)) {
            this.charRefCode = this.charRefCode * 16 + cp - 0x37;
        }
        else if (isAsciiLowerHexDigit(cp)) {
            this.charRefCode = this.charRefCode * 16 + cp - 0x57;
        }
        else if (isAsciiDigit(cp)) {
            this.charRefCode = this.charRefCode * 16 + cp - 0x30;
        }
        else if (cp === CODE_POINTS.SEMICOLON) {
            this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
        }
        else {
            this._err(ERR.missingSemicolonAfterCharacterReference);
            this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
            this._stateNumericCharacterReferenceEnd(cp);
        }
    }
    // Decimal character reference state
    //------------------------------------------------------------------
    _stateDecimalCharacterReference(cp) {
        if (isAsciiDigit(cp)) {
            this.charRefCode = this.charRefCode * 10 + cp - 0x30;
        }
        else if (cp === CODE_POINTS.SEMICOLON) {
            this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
        }
        else {
            this._err(ERR.missingSemicolonAfterCharacterReference);
            this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
            this._stateNumericCharacterReferenceEnd(cp);
        }
    }
    // Numeric character reference end state
    //------------------------------------------------------------------
    _stateNumericCharacterReferenceEnd(cp) {
        if (this.charRefCode === CODE_POINTS.NULL) {
            this._err(ERR.nullCharacterReference);
            this.charRefCode = CODE_POINTS.REPLACEMENT_CHARACTER;
        }
        else if (this.charRefCode > 1114111) {
            this._err(ERR.characterReferenceOutsideUnicodeRange);
            this.charRefCode = CODE_POINTS.REPLACEMENT_CHARACTER;
        }
        else if (isSurrogate(this.charRefCode)) {
            this._err(ERR.surrogateCharacterReference);
            this.charRefCode = CODE_POINTS.REPLACEMENT_CHARACTER;
        }
        else if (isUndefinedCodePoint(this.charRefCode)) {
            this._err(ERR.noncharacterCharacterReference);
        }
        else if (isControlCodePoint(this.charRefCode) || this.charRefCode === CODE_POINTS.CARRIAGE_RETURN) {
            this._err(ERR.controlCharacterReference);
            const replacement = C1_CONTROLS_REFERENCE_REPLACEMENTS.get(this.charRefCode);
            if (replacement !== undefined) {
                this.charRefCode = replacement;
            }
        }
        this._flushCodePointConsumedAsCharacterReference(this.charRefCode);
        this._reconsumeInState(this.returnState, cp);
    }
}

//Element utils
const IMPLICIT_END_TAG_REQUIRED = new Set([TAG_ID.DD, TAG_ID.DT, TAG_ID.LI, TAG_ID.OPTGROUP, TAG_ID.OPTION, TAG_ID.P, TAG_ID.RB, TAG_ID.RP, TAG_ID.RT, TAG_ID.RTC]);
const IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = new Set([
    ...IMPLICIT_END_TAG_REQUIRED,
    TAG_ID.CAPTION,
    TAG_ID.COLGROUP,
    TAG_ID.TBODY,
    TAG_ID.TD,
    TAG_ID.TFOOT,
    TAG_ID.TH,
    TAG_ID.THEAD,
    TAG_ID.TR,
]);
const SCOPING_ELEMENT_NS = new Map([
    [TAG_ID.APPLET, NS.HTML],
    [TAG_ID.CAPTION, NS.HTML],
    [TAG_ID.HTML, NS.HTML],
    [TAG_ID.MARQUEE, NS.HTML],
    [TAG_ID.OBJECT, NS.HTML],
    [TAG_ID.TABLE, NS.HTML],
    [TAG_ID.TD, NS.HTML],
    [TAG_ID.TEMPLATE, NS.HTML],
    [TAG_ID.TH, NS.HTML],
    [TAG_ID.ANNOTATION_XML, NS.MATHML],
    [TAG_ID.MI, NS.MATHML],
    [TAG_ID.MN, NS.MATHML],
    [TAG_ID.MO, NS.MATHML],
    [TAG_ID.MS, NS.MATHML],
    [TAG_ID.MTEXT, NS.MATHML],
    [TAG_ID.DESC, NS.SVG],
    [TAG_ID.FOREIGN_OBJECT, NS.SVG],
    [TAG_ID.TITLE, NS.SVG],
]);
const NAMED_HEADERS = [TAG_ID.H1, TAG_ID.H2, TAG_ID.H3, TAG_ID.H4, TAG_ID.H5, TAG_ID.H6];
const TABLE_ROW_CONTEXT = [TAG_ID.TR, TAG_ID.TEMPLATE, TAG_ID.HTML];
const TABLE_BODY_CONTEXT = [TAG_ID.TBODY, TAG_ID.TFOOT, TAG_ID.THEAD, TAG_ID.TEMPLATE, TAG_ID.HTML];
const TABLE_CONTEXT = [TAG_ID.TABLE, TAG_ID.TEMPLATE, TAG_ID.HTML];
const TABLE_CELLS = [TAG_ID.TD, TAG_ID.TH];
//Stack of open elements
class OpenElementStack {
    get currentTmplContentOrNode() {
        return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
    }
    constructor(document, treeAdapter, handler) {
        this.treeAdapter = treeAdapter;
        this.handler = handler;
        this.items = [];
        this.tagIDs = [];
        this.stackTop = -1;
        this.tmplCount = 0;
        this.currentTagId = TAG_ID.UNKNOWN;
        this.current = document;
    }
    //Index of element
    _indexOf(element) {
        return this.items.lastIndexOf(element, this.stackTop);
    }
    //Update current element
    _isInTemplate() {
        return this.currentTagId === TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
    }
    _updateCurrentElement() {
        this.current = this.items[this.stackTop];
        this.currentTagId = this.tagIDs[this.stackTop];
    }
    //Mutations
    push(element, tagID) {
        this.stackTop++;
        this.items[this.stackTop] = element;
        this.current = element;
        this.tagIDs[this.stackTop] = tagID;
        this.currentTagId = tagID;
        if (this._isInTemplate()) {
            this.tmplCount++;
        }
        this.handler.onItemPush(element, tagID, true);
    }
    pop() {
        const popped = this.current;
        if (this.tmplCount > 0 && this._isInTemplate()) {
            this.tmplCount--;
        }
        this.stackTop--;
        this._updateCurrentElement();
        this.handler.onItemPop(popped, true);
    }
    replace(oldElement, newElement) {
        const idx = this._indexOf(oldElement);
        this.items[idx] = newElement;
        if (idx === this.stackTop) {
            this.current = newElement;
        }
    }
    insertAfter(referenceElement, newElement, newElementID) {
        const insertionIdx = this._indexOf(referenceElement) + 1;
        this.items.splice(insertionIdx, 0, newElement);
        this.tagIDs.splice(insertionIdx, 0, newElementID);
        this.stackTop++;
        if (insertionIdx === this.stackTop) {
            this._updateCurrentElement();
        }
        this.handler.onItemPush(this.current, this.currentTagId, insertionIdx === this.stackTop);
    }
    popUntilTagNamePopped(tagName) {
        let targetIdx = this.stackTop + 1;
        do {
            targetIdx = this.tagIDs.lastIndexOf(tagName, targetIdx - 1);
        } while (targetIdx > 0 && this.treeAdapter.getNamespaceURI(this.items[targetIdx]) !== NS.HTML);
        this.shortenToLength(targetIdx < 0 ? 0 : targetIdx);
    }
    shortenToLength(idx) {
        while (this.stackTop >= idx) {
            const popped = this.current;
            if (this.tmplCount > 0 && this._isInTemplate()) {
                this.tmplCount -= 1;
            }
            this.stackTop--;
            this._updateCurrentElement();
            this.handler.onItemPop(popped, this.stackTop < idx);
        }
    }
    popUntilElementPopped(element) {
        const idx = this._indexOf(element);
        this.shortenToLength(idx < 0 ? 0 : idx);
    }
    popUntilPopped(tagNames, targetNS) {
        const idx = this._indexOfTagNames(tagNames, targetNS);
        this.shortenToLength(idx < 0 ? 0 : idx);
    }
    popUntilNumberedHeaderPopped() {
        this.popUntilPopped(NAMED_HEADERS, NS.HTML);
    }
    popUntilTableCellPopped() {
        this.popUntilPopped(TABLE_CELLS, NS.HTML);
    }
    popAllUpToHtmlElement() {
        //NOTE: here we assume that the root <html> element is always first in the open element stack, so
        //we perform this fast stack clean up.
        this.tmplCount = 0;
        this.shortenToLength(1);
    }
    _indexOfTagNames(tagNames, namespace) {
        for (let i = this.stackTop; i >= 0; i--) {
            if (tagNames.includes(this.tagIDs[i]) && this.treeAdapter.getNamespaceURI(this.items[i]) === namespace) {
                return i;
            }
        }
        return -1;
    }
    clearBackTo(tagNames, targetNS) {
        const idx = this._indexOfTagNames(tagNames, targetNS);
        this.shortenToLength(idx + 1);
    }
    clearBackToTableContext() {
        this.clearBackTo(TABLE_CONTEXT, NS.HTML);
    }
    clearBackToTableBodyContext() {
        this.clearBackTo(TABLE_BODY_CONTEXT, NS.HTML);
    }
    clearBackToTableRowContext() {
        this.clearBackTo(TABLE_ROW_CONTEXT, NS.HTML);
    }
    remove(element) {
        const idx = this._indexOf(element);
        if (idx >= 0) {
            if (idx === this.stackTop) {
                this.pop();
            }
            else {
                this.items.splice(idx, 1);
                this.tagIDs.splice(idx, 1);
                this.stackTop--;
                this._updateCurrentElement();
                this.handler.onItemPop(element, false);
            }
        }
    }
    //Search
    tryPeekProperlyNestedBodyElement() {
        //Properly nested <body> element (should be second element in stack).
        return this.stackTop >= 1 && this.tagIDs[1] === TAG_ID.BODY ? this.items[1] : null;
    }
    contains(element) {
        return this._indexOf(element) > -1;
    }
    getCommonAncestor(element) {
        const elementIdx = this._indexOf(element) - 1;
        return elementIdx >= 0 ? this.items[elementIdx] : null;
    }
    isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.tagIDs[0] === TAG_ID.HTML;
    }
    //Element in scope
    hasInScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (tn === tagName && ns === NS.HTML) {
                return true;
            }
            if (SCOPING_ELEMENT_NS.get(tn) === ns) {
                return false;
            }
        }
        return true;
    }
    hasNumberedHeaderInScope() {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (isNumberedHeader(tn) && ns === NS.HTML) {
                return true;
            }
            if (SCOPING_ELEMENT_NS.get(tn) === ns) {
                return false;
            }
        }
        return true;
    }
    hasInListItemScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (tn === tagName && ns === NS.HTML) {
                return true;
            }
            if (((tn === TAG_ID.UL || tn === TAG_ID.OL) && ns === NS.HTML) || SCOPING_ELEMENT_NS.get(tn) === ns) {
                return false;
            }
        }
        return true;
    }
    hasInButtonScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (tn === tagName && ns === NS.HTML) {
                return true;
            }
            if ((tn === TAG_ID.BUTTON && ns === NS.HTML) || SCOPING_ELEMENT_NS.get(tn) === ns) {
                return false;
            }
        }
        return true;
    }
    hasInTableScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (ns !== NS.HTML) {
                continue;
            }
            if (tn === tagName) {
                return true;
            }
            if (tn === TAG_ID.TABLE || tn === TAG_ID.TEMPLATE || tn === TAG_ID.HTML) {
                return false;
            }
        }
        return true;
    }
    hasTableBodyContextInTableScope() {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (ns !== NS.HTML) {
                continue;
            }
            if (tn === TAG_ID.TBODY || tn === TAG_ID.THEAD || tn === TAG_ID.TFOOT) {
                return true;
            }
            if (tn === TAG_ID.TABLE || tn === TAG_ID.HTML) {
                return false;
            }
        }
        return true;
    }
    hasInSelectScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (ns !== NS.HTML) {
                continue;
            }
            if (tn === tagName) {
                return true;
            }
            if (tn !== TAG_ID.OPTION && tn !== TAG_ID.OPTGROUP) {
                return false;
            }
        }
        return true;
    }
    //Implied end tags
    generateImpliedEndTags() {
        while (IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId)) {
            this.pop();
        }
    }
    generateImpliedEndTagsThoroughly() {
        while (IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
            this.pop();
        }
    }
    generateImpliedEndTagsWithExclusion(exclusionId) {
        while (this.currentTagId !== exclusionId && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
            this.pop();
        }
    }
}

//Const
const NOAH_ARK_CAPACITY = 3;
var EntryType;
(function (EntryType) {
    EntryType[EntryType["Marker"] = 0] = "Marker";
    EntryType[EntryType["Element"] = 1] = "Element";
})(EntryType = EntryType || (EntryType = {}));
const MARKER = { type: EntryType.Marker };
//List of formatting elements
class FormattingElementList {
    constructor(treeAdapter) {
        this.treeAdapter = treeAdapter;
        this.entries = [];
        this.bookmark = null;
    }
    //Noah Ark's condition
    //OPTIMIZATION: at first we try to find possible candidates for exclusion using
    //lightweight heuristics without thorough attributes check.
    _getNoahArkConditionCandidates(newElement, neAttrs) {
        const candidates = [];
        const neAttrsLength = neAttrs.length;
        const neTagName = this.treeAdapter.getTagName(newElement);
        const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
        for (let i = 0; i < this.entries.length; i++) {
            const entry = this.entries[i];
            if (entry.type === EntryType.Marker) {
                break;
            }
            const { element } = entry;
            if (this.treeAdapter.getTagName(element) === neTagName &&
                this.treeAdapter.getNamespaceURI(element) === neNamespaceURI) {
                const elementAttrs = this.treeAdapter.getAttrList(element);
                if (elementAttrs.length === neAttrsLength) {
                    candidates.push({ idx: i, attrs: elementAttrs });
                }
            }
        }
        return candidates;
    }
    _ensureNoahArkCondition(newElement) {
        if (this.entries.length < NOAH_ARK_CAPACITY)
            return;
        const neAttrs = this.treeAdapter.getAttrList(newElement);
        const candidates = this._getNoahArkConditionCandidates(newElement, neAttrs);
        if (candidates.length < NOAH_ARK_CAPACITY)
            return;
        //NOTE: build attrs map for the new element, so we can perform fast lookups
        const neAttrsMap = new Map(neAttrs.map((neAttr) => [neAttr.name, neAttr.value]));
        let validCandidates = 0;
        //NOTE: remove bottommost candidates, until Noah's Ark condition will not be met
        for (let i = 0; i < candidates.length; i++) {
            const candidate = candidates[i];
            // We know that `candidate.attrs.length === neAttrs.length`
            if (candidate.attrs.every((cAttr) => neAttrsMap.get(cAttr.name) === cAttr.value)) {
                validCandidates += 1;
                if (validCandidates >= NOAH_ARK_CAPACITY) {
                    this.entries.splice(candidate.idx, 1);
                }
            }
        }
    }
    //Mutations
    insertMarker() {
        this.entries.unshift(MARKER);
    }
    pushElement(element, token) {
        this._ensureNoahArkCondition(element);
        this.entries.unshift({
            type: EntryType.Element,
            element,
            token,
        });
    }
    insertElementAfterBookmark(element, token) {
        const bookmarkIdx = this.entries.indexOf(this.bookmark);
        this.entries.splice(bookmarkIdx, 0, {
            type: EntryType.Element,
            element,
            token,
        });
    }
    removeEntry(entry) {
        const entryIndex = this.entries.indexOf(entry);
        if (entryIndex >= 0) {
            this.entries.splice(entryIndex, 1);
        }
    }
    /**
     * Clears the list of formatting elements up to the last marker.
     *
     * @see https://html.spec.whatwg.org/multipage/parsing.html#clear-the-list-of-active-formatting-elements-up-to-the-last-marker
     */
    clearToLastMarker() {
        const markerIdx = this.entries.indexOf(MARKER);
        if (markerIdx >= 0) {
            this.entries.splice(0, markerIdx + 1);
        }
        else {
            this.entries.length = 0;
        }
    }
    //Search
    getElementEntryInScopeWithTagName(tagName) {
        const entry = this.entries.find((entry) => entry.type === EntryType.Marker || this.treeAdapter.getTagName(entry.element) === tagName);
        return entry && entry.type === EntryType.Element ? entry : null;
    }
    getElementEntry(element) {
        return this.entries.find((entry) => entry.type === EntryType.Element && entry.element === element);
    }
}

function createTextNode(value) {
    return {
        nodeName: '#text',
        value,
        parentNode: null,
    };
}
const defaultTreeAdapter = {
    //Node construction
    createDocument() {
        return {
            nodeName: '#document',
            mode: DOCUMENT_MODE.NO_QUIRKS,
            childNodes: [],
        };
    },
    createDocumentFragment() {
        return {
            nodeName: '#document-fragment',
            childNodes: [],
        };
    },
    createElement(tagName, namespaceURI, attrs) {
        return {
            nodeName: tagName,
            tagName,
            attrs,
            namespaceURI,
            childNodes: [],
            parentNode: null,
        };
    },
    createCommentNode(data) {
        return {
            nodeName: '#comment',
            data,
            parentNode: null,
        };
    },
    //Tree mutation
    appendChild(parentNode, newNode) {
        parentNode.childNodes.push(newNode);
        newNode.parentNode = parentNode;
    },
    insertBefore(parentNode, newNode, referenceNode) {
        const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
        parentNode.childNodes.splice(insertionIdx, 0, newNode);
        newNode.parentNode = parentNode;
    },
    setTemplateContent(templateElement, contentElement) {
        templateElement.content = contentElement;
    },
    getTemplateContent(templateElement) {
        return templateElement.content;
    },
    setDocumentType(document, name, publicId, systemId) {
        const doctypeNode = document.childNodes.find((node) => node.nodeName === '#documentType');
        if (doctypeNode) {
            doctypeNode.name = name;
            doctypeNode.publicId = publicId;
            doctypeNode.systemId = systemId;
        }
        else {
            const node = {
                nodeName: '#documentType',
                name,
                publicId,
                systemId,
                parentNode: null,
            };
            defaultTreeAdapter.appendChild(document, node);
        }
    },
    setDocumentMode(document, mode) {
        document.mode = mode;
    },
    getDocumentMode(document) {
        return document.mode;
    },
    detachNode(node) {
        if (node.parentNode) {
            const idx = node.parentNode.childNodes.indexOf(node);
            node.parentNode.childNodes.splice(idx, 1);
            node.parentNode = null;
        }
    },
    insertText(parentNode, text) {
        if (parentNode.childNodes.length > 0) {
            const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
            if (defaultTreeAdapter.isTextNode(prevNode)) {
                prevNode.value += text;
                return;
            }
        }
        defaultTreeAdapter.appendChild(parentNode, createTextNode(text));
    },
    insertTextBefore(parentNode, text, referenceNode) {
        const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
        if (prevNode && defaultTreeAdapter.isTextNode(prevNode)) {
            prevNode.value += text;
        }
        else {
            defaultTreeAdapter.insertBefore(parentNode, createTextNode(text), referenceNode);
        }
    },
    adoptAttributes(recipient, attrs) {
        const recipientAttrsMap = new Set(recipient.attrs.map((attr) => attr.name));
        for (let j = 0; j < attrs.length; j++) {
            if (!recipientAttrsMap.has(attrs[j].name)) {
                recipient.attrs.push(attrs[j]);
            }
        }
    },
    //Tree traversing
    getFirstChild(node) {
        return node.childNodes[0];
    },
    getChildNodes(node) {
        return node.childNodes;
    },
    getParentNode(node) {
        return node.parentNode;
    },
    getAttrList(element) {
        return element.attrs;
    },
    //Node data
    getTagName(element) {
        return element.tagName;
    },
    getNamespaceURI(element) {
        return element.namespaceURI;
    },
    getTextNodeContent(textNode) {
        return textNode.value;
    },
    getCommentNodeContent(commentNode) {
        return commentNode.data;
    },
    getDocumentTypeNodeName(doctypeNode) {
        return doctypeNode.name;
    },
    getDocumentTypeNodePublicId(doctypeNode) {
        return doctypeNode.publicId;
    },
    getDocumentTypeNodeSystemId(doctypeNode) {
        return doctypeNode.systemId;
    },
    //Node types
    isTextNode(node) {
        return node.nodeName === '#text';
    },
    isCommentNode(node) {
        return node.nodeName === '#comment';
    },
    isDocumentTypeNode(node) {
        return node.nodeName === '#documentType';
    },
    isElementNode(node) {
        return Object.prototype.hasOwnProperty.call(node, 'tagName');
    },
    // Source code location
    setNodeSourceCodeLocation(node, location) {
        node.sourceCodeLocation = location;
    },
    getNodeSourceCodeLocation(node) {
        return node.sourceCodeLocation;
    },
    updateNodeSourceCodeLocation(node, endLocation) {
        node.sourceCodeLocation = { ...node.sourceCodeLocation, ...endLocation };
    },
};

//Const
const VALID_DOCTYPE_NAME = 'html';
const VALID_SYSTEM_ID = 'about:legacy-compat';
const QUIRKS_MODE_SYSTEM_ID = 'http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd';
const QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
    '+//silmaril//dtd html pro v0r11 19970101//',
    '-//as//dtd html 3.0 aswedit + extensions//',
    '-//advasoft ltd//dtd html 3.0 aswedit + extensions//',
    '-//ietf//dtd html 2.0 level 1//',
    '-//ietf//dtd html 2.0 level 2//',
    '-//ietf//dtd html 2.0 strict level 1//',
    '-//ietf//dtd html 2.0 strict level 2//',
    '-//ietf//dtd html 2.0 strict//',
    '-//ietf//dtd html 2.0//',
    '-//ietf//dtd html 2.1e//',
    '-//ietf//dtd html 3.0//',
    '-//ietf//dtd html 3.2 final//',
    '-//ietf//dtd html 3.2//',
    '-//ietf//dtd html 3//',
    '-//ietf//dtd html level 0//',
    '-//ietf//dtd html level 1//',
    '-//ietf//dtd html level 2//',
    '-//ietf//dtd html level 3//',
    '-//ietf//dtd html strict level 0//',
    '-//ietf//dtd html strict level 1//',
    '-//ietf//dtd html strict level 2//',
    '-//ietf//dtd html strict level 3//',
    '-//ietf//dtd html strict//',
    '-//ietf//dtd html//',
    '-//metrius//dtd metrius presentational//',
    '-//microsoft//dtd internet explorer 2.0 html strict//',
    '-//microsoft//dtd internet explorer 2.0 html//',
    '-//microsoft//dtd internet explorer 2.0 tables//',
    '-//microsoft//dtd internet explorer 3.0 html strict//',
    '-//microsoft//dtd internet explorer 3.0 html//',
    '-//microsoft//dtd internet explorer 3.0 tables//',
    '-//netscape comm. corp.//dtd html//',
    '-//netscape comm. corp.//dtd strict html//',
    "-//o'reilly and associates//dtd html 2.0//",
    "-//o'reilly and associates//dtd html extended 1.0//",
    "-//o'reilly and associates//dtd html extended relaxed 1.0//",
    '-//sq//dtd html 2.0 hotmetal + extensions//',
    '-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//',
    '-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//',
    '-//spyglass//dtd html 2.0 extended//',
    '-//sun microsystems corp.//dtd hotjava html//',
    '-//sun microsystems corp.//dtd hotjava strict html//',
    '-//w3c//dtd html 3 1995-03-24//',
    '-//w3c//dtd html 3.2 draft//',
    '-//w3c//dtd html 3.2 final//',
    '-//w3c//dtd html 3.2//',
    '-//w3c//dtd html 3.2s draft//',
    '-//w3c//dtd html 4.0 frameset//',
    '-//w3c//dtd html 4.0 transitional//',
    '-//w3c//dtd html experimental 19960712//',
    '-//w3c//dtd html experimental 970421//',
    '-//w3c//dtd w3 html//',
    '-//w3o//dtd w3 html 3.0//',
    '-//webtechs//dtd mozilla html 2.0//',
    '-//webtechs//dtd mozilla html//',
];
const QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
    ...QUIRKS_MODE_PUBLIC_ID_PREFIXES,
    '-//w3c//dtd html 4.01 frameset//',
    '-//w3c//dtd html 4.01 transitional//',
];
const QUIRKS_MODE_PUBLIC_IDS = new Set([
    '-//w3o//dtd w3 html strict 3.0//en//',
    '-/w3c/dtd html 4.0 transitional/en',
    'html',
]);
const LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ['-//w3c//dtd xhtml 1.0 frameset//', '-//w3c//dtd xhtml 1.0 transitional//'];
const LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
    ...LIMITED_QUIRKS_PUBLIC_ID_PREFIXES,
    '-//w3c//dtd html 4.01 frameset//',
    '-//w3c//dtd html 4.01 transitional//',
];
//Utils
function hasPrefix(publicId, prefixes) {
    return prefixes.some((prefix) => publicId.startsWith(prefix));
}
//API
function isConforming(token) {
    return (token.name === VALID_DOCTYPE_NAME &&
        token.publicId === null &&
        (token.systemId === null || token.systemId === VALID_SYSTEM_ID));
}
function getDocumentMode(token) {
    if (token.name !== VALID_DOCTYPE_NAME) {
        return DOCUMENT_MODE.QUIRKS;
    }
    const { systemId } = token;
    if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
        return DOCUMENT_MODE.QUIRKS;
    }
    let { publicId } = token;
    if (publicId !== null) {
        publicId = publicId.toLowerCase();
        if (QUIRKS_MODE_PUBLIC_IDS.has(publicId)) {
            return DOCUMENT_MODE.QUIRKS;
        }
        let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
            return DOCUMENT_MODE.QUIRKS;
        }
        prefixes =
            systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
            return DOCUMENT_MODE.LIMITED_QUIRKS;
        }
    }
    return DOCUMENT_MODE.NO_QUIRKS;
}

//MIME types
const MIME_TYPES = {
    TEXT_HTML: 'text/html',
    APPLICATION_XML: 'application/xhtml+xml',
};
//Attributes
const DEFINITION_URL_ATTR = 'definitionurl';
const ADJUSTED_DEFINITION_URL_ATTR = 'definitionURL';
const SVG_ATTRS_ADJUSTMENT_MAP = new Map([
    'attributeName',
    'attributeType',
    'baseFrequency',
    'baseProfile',
    'calcMode',
    'clipPathUnits',
    'diffuseConstant',
    'edgeMode',
    'filterUnits',
    'glyphRef',
    'gradientTransform',
    'gradientUnits',
    'kernelMatrix',
    'kernelUnitLength',
    'keyPoints',
    'keySplines',
    'keyTimes',
    'lengthAdjust',
    'limitingConeAngle',
    'markerHeight',
    'markerUnits',
    'markerWidth',
    'maskContentUnits',
    'maskUnits',
    'numOctaves',
    'pathLength',
    'patternContentUnits',
    'patternTransform',
    'patternUnits',
    'pointsAtX',
    'pointsAtY',
    'pointsAtZ',
    'preserveAlpha',
    'preserveAspectRatio',
    'primitiveUnits',
    'refX',
    'refY',
    'repeatCount',
    'repeatDur',
    'requiredExtensions',
    'requiredFeatures',
    'specularConstant',
    'specularExponent',
    'spreadMethod',
    'startOffset',
    'stdDeviation',
    'stitchTiles',
    'surfaceScale',
    'systemLanguage',
    'tableValues',
    'targetX',
    'targetY',
    'textLength',
    'viewBox',
    'viewTarget',
    'xChannelSelector',
    'yChannelSelector',
    'zoomAndPan',
].map((attr) => [attr.toLowerCase(), attr]));
const XML_ATTRS_ADJUSTMENT_MAP = new Map([
    ['xlink:actuate', { prefix: 'xlink', name: 'actuate', namespace: NS.XLINK }],
    ['xlink:arcrole', { prefix: 'xlink', name: 'arcrole', namespace: NS.XLINK }],
    ['xlink:href', { prefix: 'xlink', name: 'href', namespace: NS.XLINK }],
    ['xlink:role', { prefix: 'xlink', name: 'role', namespace: NS.XLINK }],
    ['xlink:show', { prefix: 'xlink', name: 'show', namespace: NS.XLINK }],
    ['xlink:title', { prefix: 'xlink', name: 'title', namespace: NS.XLINK }],
    ['xlink:type', { prefix: 'xlink', name: 'type', namespace: NS.XLINK }],
    ['xml:base', { prefix: 'xml', name: 'base', namespace: NS.XML }],
    ['xml:lang', { prefix: 'xml', name: 'lang', namespace: NS.XML }],
    ['xml:space', { prefix: 'xml', name: 'space', namespace: NS.XML }],
    ['xmlns', { prefix: '', name: 'xmlns', namespace: NS.XMLNS }],
    ['xmlns:xlink', { prefix: 'xmlns', name: 'xlink', namespace: NS.XMLNS }],
]);
//SVG tag names adjustment map
const SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map([
    'altGlyph',
    'altGlyphDef',
    'altGlyphItem',
    'animateColor',
    'animateMotion',
    'animateTransform',
    'clipPath',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'foreignObject',
    'glyphRef',
    'linearGradient',
    'radialGradient',
    'textPath',
].map((tn) => [tn.toLowerCase(), tn]));
//Tags that causes exit from foreign content
const EXITS_FOREIGN_CONTENT = new Set([
    TAG_ID.B,
    TAG_ID.BIG,
    TAG_ID.BLOCKQUOTE,
    TAG_ID.BODY,
    TAG_ID.BR,
    TAG_ID.CENTER,
    TAG_ID.CODE,
    TAG_ID.DD,
    TAG_ID.DIV,
    TAG_ID.DL,
    TAG_ID.DT,
    TAG_ID.EM,
    TAG_ID.EMBED,
    TAG_ID.H1,
    TAG_ID.H2,
    TAG_ID.H3,
    TAG_ID.H4,
    TAG_ID.H5,
    TAG_ID.H6,
    TAG_ID.HEAD,
    TAG_ID.HR,
    TAG_ID.I,
    TAG_ID.IMG,
    TAG_ID.LI,
    TAG_ID.LISTING,
    TAG_ID.MENU,
    TAG_ID.META,
    TAG_ID.NOBR,
    TAG_ID.OL,
    TAG_ID.P,
    TAG_ID.PRE,
    TAG_ID.RUBY,
    TAG_ID.S,
    TAG_ID.SMALL,
    TAG_ID.SPAN,
    TAG_ID.STRONG,
    TAG_ID.STRIKE,
    TAG_ID.SUB,
    TAG_ID.SUP,
    TAG_ID.TABLE,
    TAG_ID.TT,
    TAG_ID.U,
    TAG_ID.UL,
    TAG_ID.VAR,
]);
//Check exit from foreign content
function causesExit(startTagToken) {
    const tn = startTagToken.tagID;
    const isFontWithAttrs = tn === TAG_ID.FONT &&
        startTagToken.attrs.some(({ name }) => name === ATTRS.COLOR || name === ATTRS.SIZE || name === ATTRS.FACE);
    return isFontWithAttrs || EXITS_FOREIGN_CONTENT.has(tn);
}
//Token adjustments
function adjustTokenMathMLAttrs(token) {
    for (let i = 0; i < token.attrs.length; i++) {
        if (token.attrs[i].name === DEFINITION_URL_ATTR) {
            token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
            break;
        }
    }
}
function adjustTokenSVGAttrs(token) {
    for (let i = 0; i < token.attrs.length; i++) {
        const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
        if (adjustedAttrName != null) {
            token.attrs[i].name = adjustedAttrName;
        }
    }
}
function adjustTokenXMLAttrs(token) {
    for (let i = 0; i < token.attrs.length; i++) {
        const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
        if (adjustedAttrEntry) {
            token.attrs[i].prefix = adjustedAttrEntry.prefix;
            token.attrs[i].name = adjustedAttrEntry.name;
            token.attrs[i].namespace = adjustedAttrEntry.namespace;
        }
    }
}
function adjustTokenSVGTagName(token) {
    const adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP.get(token.tagName);
    if (adjustedTagName != null) {
        token.tagName = adjustedTagName;
        token.tagID = getTagID(token.tagName);
    }
}
//Integration points
function isMathMLTextIntegrationPoint(tn, ns) {
    return ns === NS.MATHML && (tn === TAG_ID.MI || tn === TAG_ID.MO || tn === TAG_ID.MN || tn === TAG_ID.MS || tn === TAG_ID.MTEXT);
}
function isHtmlIntegrationPoint(tn, ns, attrs) {
    if (ns === NS.MATHML && tn === TAG_ID.ANNOTATION_XML) {
        for (let i = 0; i < attrs.length; i++) {
            if (attrs[i].name === ATTRS.ENCODING) {
                const value = attrs[i].value.toLowerCase();
                return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
            }
        }
    }
    return ns === NS.SVG && (tn === TAG_ID.FOREIGN_OBJECT || tn === TAG_ID.DESC || tn === TAG_ID.TITLE);
}
function isIntegrationPoint(tn, ns, attrs, foreignNS) {
    return (((!foreignNS || foreignNS === NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs)) ||
        ((!foreignNS || foreignNS === NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns)));
}

//Misc constants
const HIDDEN_INPUT_TYPE = 'hidden';
//Adoption agency loops iteration count
const AA_OUTER_LOOP_ITER = 8;
const AA_INNER_LOOP_ITER = 3;
//Insertion modes
var InsertionMode;
(function (InsertionMode) {
    InsertionMode[InsertionMode["INITIAL"] = 0] = "INITIAL";
    InsertionMode[InsertionMode["BEFORE_HTML"] = 1] = "BEFORE_HTML";
    InsertionMode[InsertionMode["BEFORE_HEAD"] = 2] = "BEFORE_HEAD";
    InsertionMode[InsertionMode["IN_HEAD"] = 3] = "IN_HEAD";
    InsertionMode[InsertionMode["IN_HEAD_NO_SCRIPT"] = 4] = "IN_HEAD_NO_SCRIPT";
    InsertionMode[InsertionMode["AFTER_HEAD"] = 5] = "AFTER_HEAD";
    InsertionMode[InsertionMode["IN_BODY"] = 6] = "IN_BODY";
    InsertionMode[InsertionMode["TEXT"] = 7] = "TEXT";
    InsertionMode[InsertionMode["IN_TABLE"] = 8] = "IN_TABLE";
    InsertionMode[InsertionMode["IN_TABLE_TEXT"] = 9] = "IN_TABLE_TEXT";
    InsertionMode[InsertionMode["IN_CAPTION"] = 10] = "IN_CAPTION";
    InsertionMode[InsertionMode["IN_COLUMN_GROUP"] = 11] = "IN_COLUMN_GROUP";
    InsertionMode[InsertionMode["IN_TABLE_BODY"] = 12] = "IN_TABLE_BODY";
    InsertionMode[InsertionMode["IN_ROW"] = 13] = "IN_ROW";
    InsertionMode[InsertionMode["IN_CELL"] = 14] = "IN_CELL";
    InsertionMode[InsertionMode["IN_SELECT"] = 15] = "IN_SELECT";
    InsertionMode[InsertionMode["IN_SELECT_IN_TABLE"] = 16] = "IN_SELECT_IN_TABLE";
    InsertionMode[InsertionMode["IN_TEMPLATE"] = 17] = "IN_TEMPLATE";
    InsertionMode[InsertionMode["AFTER_BODY"] = 18] = "AFTER_BODY";
    InsertionMode[InsertionMode["IN_FRAMESET"] = 19] = "IN_FRAMESET";
    InsertionMode[InsertionMode["AFTER_FRAMESET"] = 20] = "AFTER_FRAMESET";
    InsertionMode[InsertionMode["AFTER_AFTER_BODY"] = 21] = "AFTER_AFTER_BODY";
    InsertionMode[InsertionMode["AFTER_AFTER_FRAMESET"] = 22] = "AFTER_AFTER_FRAMESET";
})(InsertionMode || (InsertionMode = {}));
const BASE_LOC = {
    startLine: -1,
    startCol: -1,
    startOffset: -1,
    endLine: -1,
    endCol: -1,
    endOffset: -1,
};
const TABLE_STRUCTURE_TAGS = new Set([TAG_ID.TABLE, TAG_ID.TBODY, TAG_ID.TFOOT, TAG_ID.THEAD, TAG_ID.TR]);
const defaultParserOptions = {
    scriptingEnabled: true,
    sourceCodeLocationInfo: false,
    treeAdapter: defaultTreeAdapter,
    onParseError: null,
};
//Parser
class Parser {
    constructor(options, document, fragmentContext = null, scriptHandler = null) {
        this.fragmentContext = fragmentContext;
        this.scriptHandler = scriptHandler;
        this.currentToken = null;
        this.stopped = false;
        this.insertionMode = InsertionMode.INITIAL;
        this.originalInsertionMode = InsertionMode.INITIAL;
        this.headElement = null;
        this.formElement = null;
        /** Indicates that the current node is not an element in the HTML namespace */
        this.currentNotInHTML = false;
        /**
         * The template insertion mode stack is maintained from the left.
         * Ie. the topmost element will always have index 0.
         */
        this.tmplInsertionModeStack = [];
        this.pendingCharacterTokens = [];
        this.hasNonWhitespacePendingCharacterToken = false;
        this.framesetOk = true;
        this.skipNextNewLine = false;
        this.fosterParentingEnabled = false;
        this.options = {
            ...defaultParserOptions,
            ...options,
        };
        this.treeAdapter = this.options.treeAdapter;
        this.onParseError = this.options.onParseError;
        // Always enable location info if we report parse errors.
        if (this.onParseError) {
            this.options.sourceCodeLocationInfo = true;
        }
        this.document = document !== null && document !== void 0 ? document : this.treeAdapter.createDocument();
        this.tokenizer = new Tokenizer(this.options, this);
        this.activeFormattingElements = new FormattingElementList(this.treeAdapter);
        this.fragmentContextID = fragmentContext ? getTagID(this.treeAdapter.getTagName(fragmentContext)) : TAG_ID.UNKNOWN;
        this._setContextModes(fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : this.document, this.fragmentContextID);
        this.openElements = new OpenElementStack(this.document, this.treeAdapter, this);
    }
    // API
    static parse(html, options) {
        const parser = new this(options);
        parser.tokenizer.write(html, true);
        return parser.document;
    }
    static getFragmentParser(fragmentContext, options) {
        const opts = {
            ...defaultParserOptions,
            ...options,
        };
        //NOTE: use a <template> element as the fragment context if no context element was provided,
        //so we will parse in a "forgiving" manner
        fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : (fragmentContext = opts.treeAdapter.createElement(TAG_NAMES.TEMPLATE, NS.HTML, []));
        //NOTE: create a fake element which will be used as the `document` for fragment parsing.
        //This is important for jsdom, where a new `document` cannot be created. This led to
        //fragment parsing messing with the main `document`.
        const documentMock = opts.treeAdapter.createElement('documentmock', NS.HTML, []);
        const parser = new this(opts, documentMock, fragmentContext);
        if (parser.fragmentContextID === TAG_ID.TEMPLATE) {
            parser.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
        }
        parser._initTokenizerForFragmentParsing();
        parser._insertFakeRootElement();
        parser._resetInsertionMode();
        parser._findFormInFragmentContext();
        return parser;
    }
    getFragment() {
        const rootElement = this.treeAdapter.getFirstChild(this.document);
        const fragment = this.treeAdapter.createDocumentFragment();
        this._adoptNodes(rootElement, fragment);
        return fragment;
    }
    //Errors
    _err(token, code, beforeToken) {
        var _a;
        if (!this.onParseError)
            return;
        const loc = (_a = token.location) !== null && _a !== void 0 ? _a : BASE_LOC;
        const err = {
            code,
            startLine: loc.startLine,
            startCol: loc.startCol,
            startOffset: loc.startOffset,
            endLine: beforeToken ? loc.startLine : loc.endLine,
            endCol: beforeToken ? loc.startCol : loc.endCol,
            endOffset: beforeToken ? loc.startOffset : loc.endOffset,
        };
        this.onParseError(err);
    }
    //Stack events
    onItemPush(node, tid, isTop) {
        var _a, _b;
        (_b = (_a = this.treeAdapter).onItemPush) === null || _b === void 0 ? void 0 : _b.call(_a, node);
        if (isTop && this.openElements.stackTop > 0)
            this._setContextModes(node, tid);
    }
    onItemPop(node, isTop) {
        var _a, _b;
        if (this.options.sourceCodeLocationInfo) {
            this._setEndLocation(node, this.currentToken);
        }
        (_b = (_a = this.treeAdapter).onItemPop) === null || _b === void 0 ? void 0 : _b.call(_a, node, this.openElements.current);
        if (isTop) {
            let current;
            let currentTagId;
            if (this.openElements.stackTop === 0 && this.fragmentContext) {
                current = this.fragmentContext;
                currentTagId = this.fragmentContextID;
            }
            else {
                ({ current, currentTagId } = this.openElements);
            }
            this._setContextModes(current, currentTagId);
        }
    }
    _setContextModes(current, tid) {
        const isHTML = current === this.document || this.treeAdapter.getNamespaceURI(current) === NS.HTML;
        this.currentNotInHTML = !isHTML;
        this.tokenizer.inForeignNode = !isHTML && !this._isIntegrationPoint(tid, current);
    }
    _switchToTextParsing(currentToken, nextTokenizerState) {
        this._insertElement(currentToken, NS.HTML);
        this.tokenizer.state = nextTokenizerState;
        this.originalInsertionMode = this.insertionMode;
        this.insertionMode = InsertionMode.TEXT;
    }
    switchToPlaintextParsing() {
        this.insertionMode = InsertionMode.TEXT;
        this.originalInsertionMode = InsertionMode.IN_BODY;
        this.tokenizer.state = TokenizerMode.PLAINTEXT;
    }
    //Fragment parsing
    _getAdjustedCurrentElement() {
        return this.openElements.stackTop === 0 && this.fragmentContext
            ? this.fragmentContext
            : this.openElements.current;
    }
    _findFormInFragmentContext() {
        let node = this.fragmentContext;
        while (node) {
            if (this.treeAdapter.getTagName(node) === TAG_NAMES.FORM) {
                this.formElement = node;
                break;
            }
            node = this.treeAdapter.getParentNode(node);
        }
    }
    _initTokenizerForFragmentParsing() {
        if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== NS.HTML) {
            return;
        }
        switch (this.fragmentContextID) {
            case TAG_ID.TITLE:
            case TAG_ID.TEXTAREA: {
                this.tokenizer.state = TokenizerMode.RCDATA;
                break;
            }
            case TAG_ID.STYLE:
            case TAG_ID.XMP:
            case TAG_ID.IFRAME:
            case TAG_ID.NOEMBED:
            case TAG_ID.NOFRAMES:
            case TAG_ID.NOSCRIPT: {
                this.tokenizer.state = TokenizerMode.RAWTEXT;
                break;
            }
            case TAG_ID.SCRIPT: {
                this.tokenizer.state = TokenizerMode.SCRIPT_DATA;
                break;
            }
            case TAG_ID.PLAINTEXT: {
                this.tokenizer.state = TokenizerMode.PLAINTEXT;
                break;
            }
            // Do nothing
        }
    }
    //Tree mutation
    _setDocumentType(token) {
        const name = token.name || '';
        const publicId = token.publicId || '';
        const systemId = token.systemId || '';
        this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
        if (token.location) {
            const documentChildren = this.treeAdapter.getChildNodes(this.document);
            const docTypeNode = documentChildren.find((node) => this.treeAdapter.isDocumentTypeNode(node));
            if (docTypeNode) {
                this.treeAdapter.setNodeSourceCodeLocation(docTypeNode, token.location);
            }
        }
    }
    _attachElementToTree(element, location) {
        if (this.options.sourceCodeLocationInfo) {
            const loc = location && {
                ...location,
                startTag: location,
            };
            this.treeAdapter.setNodeSourceCodeLocation(element, loc);
        }
        if (this._shouldFosterParentOnInsertion()) {
            this._fosterParentElement(element);
        }
        else {
            const parent = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.appendChild(parent, element);
        }
    }
    _appendElement(token, namespaceURI) {
        const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element, token.location);
    }
    _insertElement(token, namespaceURI) {
        const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element, token.location);
        this.openElements.push(element, token.tagID);
    }
    _insertFakeElement(tagName, tagID) {
        const element = this.treeAdapter.createElement(tagName, NS.HTML, []);
        this._attachElementToTree(element, null);
        this.openElements.push(element, tagID);
    }
    _insertTemplate(token) {
        const tmpl = this.treeAdapter.createElement(token.tagName, NS.HTML, token.attrs);
        const content = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(tmpl, content);
        this._attachElementToTree(tmpl, token.location);
        this.openElements.push(tmpl, token.tagID);
        if (this.options.sourceCodeLocationInfo)
            this.treeAdapter.setNodeSourceCodeLocation(content, null);
    }
    _insertFakeRootElement() {
        const element = this.treeAdapter.createElement(TAG_NAMES.HTML, NS.HTML, []);
        if (this.options.sourceCodeLocationInfo)
            this.treeAdapter.setNodeSourceCodeLocation(element, null);
        this.treeAdapter.appendChild(this.openElements.current, element);
        this.openElements.push(element, TAG_ID.HTML);
    }
    _appendCommentNode(token, parent) {
        const commentNode = this.treeAdapter.createCommentNode(token.data);
        this.treeAdapter.appendChild(parent, commentNode);
        if (this.options.sourceCodeLocationInfo) {
            this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
        }
    }
    _insertCharacters(token) {
        let parent;
        let beforeElement;
        if (this._shouldFosterParentOnInsertion()) {
            ({ parent, beforeElement } = this._findFosterParentingLocation());
            if (beforeElement) {
                this.treeAdapter.insertTextBefore(parent, token.chars, beforeElement);
            }
            else {
                this.treeAdapter.insertText(parent, token.chars);
            }
        }
        else {
            parent = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.insertText(parent, token.chars);
        }
        if (!token.location)
            return;
        const siblings = this.treeAdapter.getChildNodes(parent);
        const textNodeIdx = beforeElement ? siblings.lastIndexOf(beforeElement) : siblings.length;
        const textNode = siblings[textNodeIdx - 1];
        //NOTE: if we have a location assigned by another token, then just update the end position
        const tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);
        if (tnLoc) {
            const { endLine, endCol, endOffset } = token.location;
            this.treeAdapter.updateNodeSourceCodeLocation(textNode, { endLine, endCol, endOffset });
        }
        else if (this.options.sourceCodeLocationInfo) {
            this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
        }
    }
    _adoptNodes(donor, recipient) {
        for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
            this.treeAdapter.detachNode(child);
            this.treeAdapter.appendChild(recipient, child);
        }
    }
    _setEndLocation(element, closingToken) {
        if (this.treeAdapter.getNodeSourceCodeLocation(element) && closingToken.location) {
            const ctLoc = closingToken.location;
            const tn = this.treeAdapter.getTagName(element);
            const endLoc = 
            // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
            // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
            closingToken.type === TokenType.END_TAG && tn === closingToken.tagName
                ? {
                    endTag: { ...ctLoc },
                    endLine: ctLoc.endLine,
                    endCol: ctLoc.endCol,
                    endOffset: ctLoc.endOffset,
                }
                : {
                    endLine: ctLoc.startLine,
                    endCol: ctLoc.startCol,
                    endOffset: ctLoc.startOffset,
                };
            this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
        }
    }
    //Token processing
    shouldProcessStartTagTokenInForeignContent(token) {
        // Check that neither current === document, or ns === NS.HTML
        if (!this.currentNotInHTML)
            return false;
        let current;
        let currentTagId;
        if (this.openElements.stackTop === 0 && this.fragmentContext) {
            current = this.fragmentContext;
            currentTagId = this.fragmentContextID;
        }
        else {
            ({ current, currentTagId } = this.openElements);
        }
        if (token.tagID === TAG_ID.SVG &&
            this.treeAdapter.getTagName(current) === TAG_NAMES.ANNOTATION_XML &&
            this.treeAdapter.getNamespaceURI(current) === NS.MATHML) {
            return false;
        }
        return (
        // Check that `current` is not an integration point for HTML or MathML elements.
        this.tokenizer.inForeignNode ||
            // If it _is_ an integration point, then we might have to check that it is not an HTML
            // integration point.
            ((token.tagID === TAG_ID.MGLYPH || token.tagID === TAG_ID.MALIGNMARK) &&
                !this._isIntegrationPoint(currentTagId, current, NS.HTML)));
    }
    _processToken(token) {
        switch (token.type) {
            case TokenType.CHARACTER: {
                this.onCharacter(token);
                break;
            }
            case TokenType.NULL_CHARACTER: {
                this.onNullCharacter(token);
                break;
            }
            case TokenType.COMMENT: {
                this.onComment(token);
                break;
            }
            case TokenType.DOCTYPE: {
                this.onDoctype(token);
                break;
            }
            case TokenType.START_TAG: {
                this._processStartTag(token);
                break;
            }
            case TokenType.END_TAG: {
                this.onEndTag(token);
                break;
            }
            case TokenType.EOF: {
                this.onEof(token);
                break;
            }
            case TokenType.WHITESPACE_CHARACTER: {
                this.onWhitespaceCharacter(token);
                break;
            }
        }
    }
    //Integration points
    _isIntegrationPoint(tid, element, foreignNS) {
        const ns = this.treeAdapter.getNamespaceURI(element);
        const attrs = this.treeAdapter.getAttrList(element);
        return isIntegrationPoint(tid, ns, attrs, foreignNS);
    }
    //Active formatting elements reconstruction
    _reconstructActiveFormattingElements() {
        const listLength = this.activeFormattingElements.entries.length;
        if (listLength) {
            const endIndex = this.activeFormattingElements.entries.findIndex((entry) => entry.type === EntryType.Marker || this.openElements.contains(entry.element));
            const unopenIdx = endIndex < 0 ? listLength - 1 : endIndex - 1;
            for (let i = unopenIdx; i >= 0; i--) {
                const entry = this.activeFormattingElements.entries[i];
                this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
                entry.element = this.openElements.current;
            }
        }
    }
    //Close elements
    _closeTableCell() {
        this.openElements.generateImpliedEndTags();
        this.openElements.popUntilTableCellPopped();
        this.activeFormattingElements.clearToLastMarker();
        this.insertionMode = InsertionMode.IN_ROW;
    }
    _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.P);
        this.openElements.popUntilTagNamePopped(TAG_ID.P);
    }
    //Insertion modes
    _resetInsertionMode() {
        for (let i = this.openElements.stackTop; i >= 0; i--) {
            //Insertion mode reset map
            switch (i === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[i]) {
                case TAG_ID.TR: {
                    this.insertionMode = InsertionMode.IN_ROW;
                    return;
                }
                case TAG_ID.TBODY:
                case TAG_ID.THEAD:
                case TAG_ID.TFOOT: {
                    this.insertionMode = InsertionMode.IN_TABLE_BODY;
                    return;
                }
                case TAG_ID.CAPTION: {
                    this.insertionMode = InsertionMode.IN_CAPTION;
                    return;
                }
                case TAG_ID.COLGROUP: {
                    this.insertionMode = InsertionMode.IN_COLUMN_GROUP;
                    return;
                }
                case TAG_ID.TABLE: {
                    this.insertionMode = InsertionMode.IN_TABLE;
                    return;
                }
                case TAG_ID.BODY: {
                    this.insertionMode = InsertionMode.IN_BODY;
                    return;
                }
                case TAG_ID.FRAMESET: {
                    this.insertionMode = InsertionMode.IN_FRAMESET;
                    return;
                }
                case TAG_ID.SELECT: {
                    this._resetInsertionModeForSelect(i);
                    return;
                }
                case TAG_ID.TEMPLATE: {
                    this.insertionMode = this.tmplInsertionModeStack[0];
                    return;
                }
                case TAG_ID.HTML: {
                    this.insertionMode = this.headElement ? InsertionMode.AFTER_HEAD : InsertionMode.BEFORE_HEAD;
                    return;
                }
                case TAG_ID.TD:
                case TAG_ID.TH: {
                    if (i > 0) {
                        this.insertionMode = InsertionMode.IN_CELL;
                        return;
                    }
                    break;
                }
                case TAG_ID.HEAD: {
                    if (i > 0) {
                        this.insertionMode = InsertionMode.IN_HEAD;
                        return;
                    }
                    break;
                }
            }
        }
        this.insertionMode = InsertionMode.IN_BODY;
    }
    _resetInsertionModeForSelect(selectIdx) {
        if (selectIdx > 0) {
            for (let i = selectIdx - 1; i > 0; i--) {
                const tn = this.openElements.tagIDs[i];
                if (tn === TAG_ID.TEMPLATE) {
                    break;
                }
                else if (tn === TAG_ID.TABLE) {
                    this.insertionMode = InsertionMode.IN_SELECT_IN_TABLE;
                    return;
                }
            }
        }
        this.insertionMode = InsertionMode.IN_SELECT;
    }
    //Foster parenting
    _isElementCausesFosterParenting(tn) {
        return TABLE_STRUCTURE_TAGS.has(tn);
    }
    _shouldFosterParentOnInsertion() {
        return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
    }
    _findFosterParentingLocation() {
        for (let i = this.openElements.stackTop; i >= 0; i--) {
            const openElement = this.openElements.items[i];
            switch (this.openElements.tagIDs[i]) {
                case TAG_ID.TEMPLATE: {
                    if (this.treeAdapter.getNamespaceURI(openElement) === NS.HTML) {
                        return { parent: this.treeAdapter.getTemplateContent(openElement), beforeElement: null };
                    }
                    break;
                }
                case TAG_ID.TABLE: {
                    const parent = this.treeAdapter.getParentNode(openElement);
                    if (parent) {
                        return { parent, beforeElement: openElement };
                    }
                    return { parent: this.openElements.items[i - 1], beforeElement: null };
                }
                // Do nothing
            }
        }
        return { parent: this.openElements.items[0], beforeElement: null };
    }
    _fosterParentElement(element) {
        const location = this._findFosterParentingLocation();
        if (location.beforeElement) {
            this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
        }
        else {
            this.treeAdapter.appendChild(location.parent, element);
        }
    }
    //Special elements
    _isSpecialElement(element, id) {
        const ns = this.treeAdapter.getNamespaceURI(element);
        return SPECIAL_ELEMENTS[ns].has(id);
    }
    onCharacter(token) {
        this.skipNextNewLine = false;
        if (this.tokenizer.inForeignNode) {
            characterInForeignContent(this, token);
            return;
        }
        switch (this.insertionMode) {
            case InsertionMode.INITIAL: {
                tokenInInitialMode(this, token);
                break;
            }
            case InsertionMode.BEFORE_HTML: {
                tokenBeforeHtml(this, token);
                break;
            }
            case InsertionMode.BEFORE_HEAD: {
                tokenBeforeHead(this, token);
                break;
            }
            case InsertionMode.IN_HEAD: {
                tokenInHead(this, token);
                break;
            }
            case InsertionMode.IN_HEAD_NO_SCRIPT: {
                tokenInHeadNoScript(this, token);
                break;
            }
            case InsertionMode.AFTER_HEAD: {
                tokenAfterHead(this, token);
                break;
            }
            case InsertionMode.IN_BODY:
            case InsertionMode.IN_CAPTION:
            case InsertionMode.IN_CELL:
            case InsertionMode.IN_TEMPLATE: {
                characterInBody(this, token);
                break;
            }
            case InsertionMode.TEXT:
            case InsertionMode.IN_SELECT:
            case InsertionMode.IN_SELECT_IN_TABLE: {
                this._insertCharacters(token);
                break;
            }
            case InsertionMode.IN_TABLE:
            case InsertionMode.IN_TABLE_BODY:
            case InsertionMode.IN_ROW: {
                characterInTable(this, token);
                break;
            }
            case InsertionMode.IN_TABLE_TEXT: {
                characterInTableText(this, token);
                break;
            }
            case InsertionMode.IN_COLUMN_GROUP: {
                tokenInColumnGroup(this, token);
                break;
            }
            case InsertionMode.AFTER_BODY: {
                tokenAfterBody(this, token);
                break;
            }
            case InsertionMode.AFTER_AFTER_BODY: {
                tokenAfterAfterBody(this, token);
                break;
            }
            // Do nothing
        }
    }
    onNullCharacter(token) {
        this.skipNextNewLine = false;
        if (this.tokenizer.inForeignNode) {
            nullCharacterInForeignContent(this, token);
            return;
        }
        switch (this.insertionMode) {
            case InsertionMode.INITIAL: {
                tokenInInitialMode(this, token);
                break;
            }
            case InsertionMode.BEFORE_HTML: {
                tokenBeforeHtml(this, token);
                break;
            }
            case InsertionMode.BEFORE_HEAD: {
                tokenBeforeHead(this, token);
                break;
            }
            case InsertionMode.IN_HEAD: {
                tokenInHead(this, token);
                break;
            }
            case InsertionMode.IN_HEAD_NO_SCRIPT: {
                tokenInHeadNoScript(this, token);
                break;
            }
            case InsertionMode.AFTER_HEAD: {
                tokenAfterHead(this, token);
                break;
            }
            case InsertionMode.TEXT: {
                this._insertCharacters(token);
                break;
            }
            case InsertionMode.IN_TABLE:
            case InsertionMode.IN_TABLE_BODY:
            case InsertionMode.IN_ROW: {
                characterInTable(this, token);
                break;
            }
            case InsertionMode.IN_COLUMN_GROUP: {
                tokenInColumnGroup(this, token);
                break;
            }
            case InsertionMode.AFTER_BODY: {
                tokenAfterBody(this, token);
                break;
            }
            case InsertionMode.AFTER_AFTER_BODY: {
                tokenAfterAfterBody(this, token);
                break;
            }
            // Do nothing
        }
    }
    onComment(token) {
        this.skipNextNewLine = false;
        if (this.currentNotInHTML) {
            appendComment(this, token);
            return;
        }
        switch (this.insertionMode) {
            case InsertionMode.INITIAL:
            case InsertionMode.BEFORE_HTML:
            case InsertionMode.BEFORE_HEAD:
            case InsertionMode.IN_HEAD:
            case InsertionMode.IN_HEAD_NO_SCRIPT:
            case InsertionMode.AFTER_HEAD:
            case InsertionMode.IN_BODY:
            case InsertionMode.IN_TABLE:
            case InsertionMode.IN_CAPTION:
            case InsertionMode.IN_COLUMN_GROUP:
            case InsertionMode.IN_TABLE_BODY:
            case InsertionMode.IN_ROW:
            case InsertionMode.IN_CELL:
            case InsertionMode.IN_SELECT:
            case InsertionMode.IN_SELECT_IN_TABLE:
            case InsertionMode.IN_TEMPLATE:
            case InsertionMode.IN_FRAMESET:
            case InsertionMode.AFTER_FRAMESET: {
                appendComment(this, token);
                break;
            }
            case InsertionMode.IN_TABLE_TEXT: {
                tokenInTableText(this, token);
                break;
            }
            case InsertionMode.AFTER_BODY: {
                appendCommentToRootHtmlElement(this, token);
                break;
            }
            case InsertionMode.AFTER_AFTER_BODY:
            case InsertionMode.AFTER_AFTER_FRAMESET: {
                appendCommentToDocument(this, token);
                break;
            }
            // Do nothing
        }
    }
    onDoctype(token) {
        this.skipNextNewLine = false;
        switch (this.insertionMode) {
            case InsertionMode.INITIAL: {
                doctypeInInitialMode(this, token);
                break;
            }
            case InsertionMode.BEFORE_HEAD:
            case InsertionMode.IN_HEAD:
            case InsertionMode.IN_HEAD_NO_SCRIPT:
            case InsertionMode.AFTER_HEAD: {
                this._err(token, ERR.misplacedDoctype);
                break;
            }
            case InsertionMode.IN_TABLE_TEXT: {
                tokenInTableText(this, token);
                break;
            }
            // Do nothing
        }
    }
    onStartTag(token) {
        this.skipNextNewLine = false;
        this.currentToken = token;
        this._processStartTag(token);
        if (token.selfClosing && !token.ackSelfClosing) {
            this._err(token, ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
    }
    /**
     * Processes a given start tag.
     *
     * `onStartTag` checks if a self-closing tag was recognized. When a token
     * is moved inbetween multiple insertion modes, this check for self-closing
     * could lead to false positives. To avoid this, `_processStartTag` is used
     * for nested calls.
     *
     * @param token The token to process.
     */
    _processStartTag(token) {
        if (this.shouldProcessStartTagTokenInForeignContent(token)) {
            startTagInForeignContent(this, token);
        }
        else {
            this._startTagOutsideForeignContent(token);
        }
    }
    _startTagOutsideForeignContent(token) {
        switch (this.insertionMode) {
            case InsertionMode.INITIAL: {
                tokenInInitialMode(this, token);
                break;
            }
            case InsertionMode.BEFORE_HTML: {
                startTagBeforeHtml(this, token);
                break;
            }
            case InsertionMode.BEFORE_HEAD: {
                startTagBeforeHead(this, token);
                break;
            }
            case InsertionMode.IN_HEAD: {
                startTagInHead(this, token);
                break;
            }
            case InsertionMode.IN_HEAD_NO_SCRIPT: {
                startTagInHeadNoScript(this, token);
                break;
            }
            case InsertionMode.AFTER_HEAD: {
                startTagAfterHead(this, token);
                break;
            }
            case InsertionMode.IN_BODY: {
                startTagInBody(this, token);
                break;
            }
            case InsertionMode.IN_TABLE: {
                startTagInTable(this, token);
                break;
            }
            case InsertionMode.IN_TABLE_TEXT: {
                tokenInTableText(this, token);
                break;
            }
            case InsertionMode.IN_CAPTION: {
                startTagInCaption(this, token);
                break;
            }
            case InsertionMode.IN_COLUMN_GROUP: {
                startTagInColumnGroup(this, token);
                break;
            }
            case InsertionMode.IN_TABLE_BODY: {
                startTagInTableBody(this, token);
                break;
            }
            case InsertionMode.IN_ROW: {
                startTagInRow(this, token);
                break;
            }
            case InsertionMode.IN_CELL: {
                startTagInCell(this, token);
                break;
            }
            case InsertionMode.IN_SELECT: {
                startTagInSelect(this, token);
                break;
            }
            case InsertionMode.IN_SELECT_IN_TABLE: {
                startTagInSelectInTable(this, token);
                break;
            }
            case InsertionMode.IN_TEMPLATE: {
                startTagInTemplate(this, token);
                break;
            }
            case InsertionMode.AFTER_BODY: {
                startTagAfterBody(this, token);
                break;
            }
            case InsertionMode.IN_FRAMESET: {
                startTagInFrameset(this, token);
                break;
            }
            case InsertionMode.AFTER_FRAMESET: {
                startTagAfterFrameset(this, token);
                break;
            }
            case InsertionMode.AFTER_AFTER_BODY: {
                startTagAfterAfterBody(this, token);
                break;
            }
            case InsertionMode.AFTER_AFTER_FRAMESET: {
                startTagAfterAfterFrameset(this, token);
                break;
            }
            // Do nothing
        }
    }
    onEndTag(token) {
        this.skipNextNewLine = false;
        this.currentToken = token;
        if (this.currentNotInHTML) {
            endTagInForeignContent(this, token);
        }
        else {
            this._endTagOutsideForeignContent(token);
        }
    }
    _endTagOutsideForeignContent(token) {
        switch (this.insertionMode) {
            case InsertionMode.INITIAL: {
                tokenInInitialMode(this, token);
                break;
            }
            case InsertionMode.BEFORE_HTML: {
                endTagBeforeHtml(this, token);
                break;
            }
            case InsertionMode.BEFORE_HEAD: {
                endTagBeforeHead(this, token);
                break;
            }
            case InsertionMode.IN_HEAD: {
                endTagInHead(this, token);
                break;
            }
            case InsertionMode.IN_HEAD_NO_SCRIPT: {
                endTagInHeadNoScript(this, token);
                break;
            }
            case InsertionMode.AFTER_HEAD: {
                endTagAfterHead(this, token);
                break;
            }
            case InsertionMode.IN_BODY: {
                endTagInBody(this, token);
                break;
            }
            case InsertionMode.TEXT: {
                endTagInText(this, token);
                break;
            }
            case InsertionMode.IN_TABLE: {
                endTagInTable(this, token);
                break;
            }
            case InsertionMode.IN_TABLE_TEXT: {
                tokenInTableText(this, token);
                break;
            }
            case InsertionMode.IN_CAPTION: {
                endTagInCaption(this, token);
                break;
            }
            case InsertionMode.IN_COLUMN_GROUP: {
                endTagInColumnGroup(this, token);
                break;
            }
            case InsertionMode.IN_TABLE_BODY: {
                endTagInTableBody(this, token);
                break;
            }
            case InsertionMode.IN_ROW: {
                endTagInRow(this, token);
                break;
            }
            case InsertionMode.IN_CELL: {
                endTagInCell(this, token);
                break;
            }
            case InsertionMode.IN_SELECT: {
                endTagInSelect(this, token);
                break;
            }
            case InsertionMode.IN_SELECT_IN_TABLE: {
                endTagInSelectInTable(this, token);
                break;
            }
            case InsertionMode.IN_TEMPLATE: {
                endTagInTemplate(this, token);
                break;
            }
            case InsertionMode.AFTER_BODY: {
                endTagAfterBody(this, token);
                break;
            }
            case InsertionMode.IN_FRAMESET: {
                endTagInFrameset(this, token);
                break;
            }
            case InsertionMode.AFTER_FRAMESET: {
                endTagAfterFrameset(this, token);
                break;
            }
            case InsertionMode.AFTER_AFTER_BODY: {
                tokenAfterAfterBody(this, token);
                break;
            }
            // Do nothing
        }
    }
    onEof(token) {
        switch (this.insertionMode) {
            case InsertionMode.INITIAL: {
                tokenInInitialMode(this, token);
                break;
            }
            case InsertionMode.BEFORE_HTML: {
                tokenBeforeHtml(this, token);
                break;
            }
            case InsertionMode.BEFORE_HEAD: {
                tokenBeforeHead(this, token);
                break;
            }
            case InsertionMode.IN_HEAD: {
                tokenInHead(this, token);
                break;
            }
            case InsertionMode.IN_HEAD_NO_SCRIPT: {
                tokenInHeadNoScript(this, token);
                break;
            }
            case InsertionMode.AFTER_HEAD: {
                tokenAfterHead(this, token);
                break;
            }
            case InsertionMode.IN_BODY:
            case InsertionMode.IN_TABLE:
            case InsertionMode.IN_CAPTION:
            case InsertionMode.IN_COLUMN_GROUP:
            case InsertionMode.IN_TABLE_BODY:
            case InsertionMode.IN_ROW:
            case InsertionMode.IN_CELL:
            case InsertionMode.IN_SELECT:
            case InsertionMode.IN_SELECT_IN_TABLE: {
                eofInBody(this, token);
                break;
            }
            case InsertionMode.TEXT: {
                eofInText(this, token);
                break;
            }
            case InsertionMode.IN_TABLE_TEXT: {
                tokenInTableText(this, token);
                break;
            }
            case InsertionMode.IN_TEMPLATE: {
                eofInTemplate(this, token);
                break;
            }
            case InsertionMode.AFTER_BODY:
            case InsertionMode.IN_FRAMESET:
            case InsertionMode.AFTER_FRAMESET:
            case InsertionMode.AFTER_AFTER_BODY:
            case InsertionMode.AFTER_AFTER_FRAMESET: {
                stopParsing(this, token);
                break;
            }
            // Do nothing
        }
    }
    onWhitespaceCharacter(token) {
        if (this.skipNextNewLine) {
            this.skipNextNewLine = false;
            if (token.chars.charCodeAt(0) === CODE_POINTS.LINE_FEED) {
                if (token.chars.length === 1) {
                    return;
                }
                token.chars = token.chars.substr(1);
            }
        }
        if (this.tokenizer.inForeignNode) {
            this._insertCharacters(token);
            return;
        }
        switch (this.insertionMode) {
            case InsertionMode.IN_HEAD:
            case InsertionMode.IN_HEAD_NO_SCRIPT:
            case InsertionMode.AFTER_HEAD:
            case InsertionMode.TEXT:
            case InsertionMode.IN_COLUMN_GROUP:
            case InsertionMode.IN_SELECT:
            case InsertionMode.IN_SELECT_IN_TABLE:
            case InsertionMode.IN_FRAMESET:
            case InsertionMode.AFTER_FRAMESET: {
                this._insertCharacters(token);
                break;
            }
            case InsertionMode.IN_BODY:
            case InsertionMode.IN_CAPTION:
            case InsertionMode.IN_CELL:
            case InsertionMode.IN_TEMPLATE:
            case InsertionMode.AFTER_BODY:
            case InsertionMode.AFTER_AFTER_BODY:
            case InsertionMode.AFTER_AFTER_FRAMESET: {
                whitespaceCharacterInBody(this, token);
                break;
            }
            case InsertionMode.IN_TABLE:
            case InsertionMode.IN_TABLE_BODY:
            case InsertionMode.IN_ROW: {
                characterInTable(this, token);
                break;
            }
            case InsertionMode.IN_TABLE_TEXT: {
                whitespaceCharacterInTableText(this, token);
                break;
            }
            // Do nothing
        }
    }
}
//Adoption agency algorithm
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tree-construction.html#adoptionAgency)
//------------------------------------------------------------------
//Steps 5-8 of the algorithm
function aaObtainFormattingElementEntry(p, token) {
    let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
    if (formattingElementEntry) {
        if (!p.openElements.contains(formattingElementEntry.element)) {
            p.activeFormattingElements.removeEntry(formattingElementEntry);
            formattingElementEntry = null;
        }
        else if (!p.openElements.hasInScope(token.tagID)) {
            formattingElementEntry = null;
        }
    }
    else {
        genericEndTagInBody(p, token);
    }
    return formattingElementEntry;
}
//Steps 9 and 10 of the algorithm
function aaObtainFurthestBlock(p, formattingElementEntry) {
    let furthestBlock = null;
    let idx = p.openElements.stackTop;
    for (; idx >= 0; idx--) {
        const element = p.openElements.items[idx];
        if (element === formattingElementEntry.element) {
            break;
        }
        if (p._isSpecialElement(element, p.openElements.tagIDs[idx])) {
            furthestBlock = element;
        }
    }
    if (!furthestBlock) {
        p.openElements.shortenToLength(idx < 0 ? 0 : idx);
        p.activeFormattingElements.removeEntry(formattingElementEntry);
    }
    return furthestBlock;
}
//Step 13 of the algorithm
function aaInnerLoop(p, furthestBlock, formattingElement) {
    let lastElement = furthestBlock;
    let nextElement = p.openElements.getCommonAncestor(furthestBlock);
    for (let i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
        //NOTE: store the next element for the next loop iteration (it may be deleted from the stack by step 9.5)
        nextElement = p.openElements.getCommonAncestor(element);
        const elementEntry = p.activeFormattingElements.getElementEntry(element);
        const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
        const shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
        if (shouldRemoveFromOpenElements) {
            if (counterOverflow) {
                p.activeFormattingElements.removeEntry(elementEntry);
            }
            p.openElements.remove(element);
        }
        else {
            element = aaRecreateElementFromEntry(p, elementEntry);
            if (lastElement === furthestBlock) {
                p.activeFormattingElements.bookmark = elementEntry;
            }
            p.treeAdapter.detachNode(lastElement);
            p.treeAdapter.appendChild(element, lastElement);
            lastElement = element;
        }
    }
    return lastElement;
}
//Step 13.7 of the algorithm
function aaRecreateElementFromEntry(p, elementEntry) {
    const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
    const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
    p.openElements.replace(elementEntry.element, newElement);
    elementEntry.element = newElement;
    return newElement;
}
//Step 14 of the algorithm
function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
    const tn = p.treeAdapter.getTagName(commonAncestor);
    const tid = getTagID(tn);
    if (p._isElementCausesFosterParenting(tid)) {
        p._fosterParentElement(lastElement);
    }
    else {
        const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
        if (tid === TAG_ID.TEMPLATE && ns === NS.HTML) {
            commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
        }
        p.treeAdapter.appendChild(commonAncestor, lastElement);
    }
}
//Steps 15-19 of the algorithm
function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
    const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
    const { token } = formattingElementEntry;
    const newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
    p._adoptNodes(furthestBlock, newElement);
    p.treeAdapter.appendChild(furthestBlock, newElement);
    p.activeFormattingElements.insertElementAfterBookmark(newElement, token);
    p.activeFormattingElements.removeEntry(formattingElementEntry);
    p.openElements.remove(formattingElementEntry.element);
    p.openElements.insertAfter(furthestBlock, newElement, token.tagID);
}
//Algorithm entry point
function callAdoptionAgency(p, token) {
    for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
        const formattingElementEntry = aaObtainFormattingElementEntry(p, token);
        if (!formattingElementEntry) {
            break;
        }
        const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
        if (!furthestBlock) {
            break;
        }
        p.activeFormattingElements.bookmark = formattingElementEntry;
        const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
        const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
        p.treeAdapter.detachNode(lastElement);
        if (commonAncestor)
            aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
        aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
    }
}
//Generic token handlers
//------------------------------------------------------------------
function appendComment(p, token) {
    p._appendCommentNode(token, p.openElements.currentTmplContentOrNode);
}
function appendCommentToRootHtmlElement(p, token) {
    p._appendCommentNode(token, p.openElements.items[0]);
}
function appendCommentToDocument(p, token) {
    p._appendCommentNode(token, p.document);
}
function stopParsing(p, token) {
    p.stopped = true;
    // NOTE: Set end locations for elements that remain on the open element stack.
    if (token.location) {
        // NOTE: If we are not in a fragment, `html` and `body` will stay on the stack.
        // This is a problem, as we might overwrite their end position here.
        const target = p.fragmentContext ? 0 : 2;
        for (let i = p.openElements.stackTop; i >= target; i--) {
            p._setEndLocation(p.openElements.items[i], token);
        }
        // Handle `html` and `body`
        if (!p.fragmentContext && p.openElements.stackTop >= 0) {
            const htmlElement = p.openElements.items[0];
            const htmlLocation = p.treeAdapter.getNodeSourceCodeLocation(htmlElement);
            if (htmlLocation && !htmlLocation.endTag) {
                p._setEndLocation(htmlElement, token);
                if (p.openElements.stackTop >= 1) {
                    const bodyElement = p.openElements.items[1];
                    const bodyLocation = p.treeAdapter.getNodeSourceCodeLocation(bodyElement);
                    if (bodyLocation && !bodyLocation.endTag) {
                        p._setEndLocation(bodyElement, token);
                    }
                }
            }
        }
    }
}
// The "initial" insertion mode
//------------------------------------------------------------------
function doctypeInInitialMode(p, token) {
    p._setDocumentType(token);
    const mode = token.forceQuirks ? DOCUMENT_MODE.QUIRKS : getDocumentMode(token);
    if (!isConforming(token)) {
        p._err(token, ERR.nonConformingDoctype);
    }
    p.treeAdapter.setDocumentMode(p.document, mode);
    p.insertionMode = InsertionMode.BEFORE_HTML;
}
function tokenInInitialMode(p, token) {
    p._err(token, ERR.missingDoctype, true);
    p.treeAdapter.setDocumentMode(p.document, DOCUMENT_MODE.QUIRKS);
    p.insertionMode = InsertionMode.BEFORE_HTML;
    p._processToken(token);
}
// The "before html" insertion mode
//------------------------------------------------------------------
function startTagBeforeHtml(p, token) {
    if (token.tagID === TAG_ID.HTML) {
        p._insertElement(token, NS.HTML);
        p.insertionMode = InsertionMode.BEFORE_HEAD;
    }
    else {
        tokenBeforeHtml(p, token);
    }
}
function endTagBeforeHtml(p, token) {
    const tn = token.tagID;
    if (tn === TAG_ID.HTML || tn === TAG_ID.HEAD || tn === TAG_ID.BODY || tn === TAG_ID.BR) {
        tokenBeforeHtml(p, token);
    }
}
function tokenBeforeHtml(p, token) {
    p._insertFakeRootElement();
    p.insertionMode = InsertionMode.BEFORE_HEAD;
    p._processToken(token);
}
// The "before head" insertion mode
//------------------------------------------------------------------
function startTagBeforeHead(p, token) {
    switch (token.tagID) {
        case TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case TAG_ID.HEAD: {
            p._insertElement(token, NS.HTML);
            p.headElement = p.openElements.current;
            p.insertionMode = InsertionMode.IN_HEAD;
            break;
        }
        default: {
            tokenBeforeHead(p, token);
        }
    }
}
function endTagBeforeHead(p, token) {
    const tn = token.tagID;
    if (tn === TAG_ID.HEAD || tn === TAG_ID.BODY || tn === TAG_ID.HTML || tn === TAG_ID.BR) {
        tokenBeforeHead(p, token);
    }
    else {
        p._err(token, ERR.endTagWithoutMatchingOpenElement);
    }
}
function tokenBeforeHead(p, token) {
    p._insertFakeElement(TAG_NAMES.HEAD, TAG_ID.HEAD);
    p.headElement = p.openElements.current;
    p.insertionMode = InsertionMode.IN_HEAD;
    p._processToken(token);
}
// The "in head" insertion mode
//------------------------------------------------------------------
function startTagInHead(p, token) {
    switch (token.tagID) {
        case TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case TAG_ID.BASE:
        case TAG_ID.BASEFONT:
        case TAG_ID.BGSOUND:
        case TAG_ID.LINK:
        case TAG_ID.META: {
            p._appendElement(token, NS.HTML);
            token.ackSelfClosing = true;
            break;
        }
        case TAG_ID.TITLE: {
            p._switchToTextParsing(token, TokenizerMode.RCDATA);
            break;
        }
        case TAG_ID.NOSCRIPT: {
            if (p.options.scriptingEnabled) {
                p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
            }
            else {
                p._insertElement(token, NS.HTML);
                p.insertionMode = InsertionMode.IN_HEAD_NO_SCRIPT;
            }
            break;
        }
        case TAG_ID.NOFRAMES:
        case TAG_ID.STYLE: {
            p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
            break;
        }
        case TAG_ID.SCRIPT: {
            p._switchToTextParsing(token, TokenizerMode.SCRIPT_DATA);
            break;
        }
        case TAG_ID.TEMPLATE: {
            p._insertTemplate(token);
            p.activeFormattingElements.insertMarker();
            p.framesetOk = false;
            p.insertionMode = InsertionMode.IN_TEMPLATE;
            p.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
            break;
        }
        case TAG_ID.HEAD: {
            p._err(token, ERR.misplacedStartTagForHeadElement);
            break;
        }
        default: {
            tokenInHead(p, token);
        }
    }
}
function endTagInHead(p, token) {
    switch (token.tagID) {
        case TAG_ID.HEAD: {
            p.openElements.pop();
            p.insertionMode = InsertionMode.AFTER_HEAD;
            break;
        }
        case TAG_ID.BODY:
        case TAG_ID.BR:
        case TAG_ID.HTML: {
            tokenInHead(p, token);
            break;
        }
        case TAG_ID.TEMPLATE: {
            templateEndTagInHead(p, token);
            break;
        }
        default: {
            p._err(token, ERR.endTagWithoutMatchingOpenElement);
        }
    }
}
function templateEndTagInHead(p, token) {
    if (p.openElements.tmplCount > 0) {
        p.openElements.generateImpliedEndTagsThoroughly();
        if (p.openElements.currentTagId !== TAG_ID.TEMPLATE) {
            p._err(token, ERR.closingOfElementWithOpenChildElements);
        }
        p.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE);
        p.activeFormattingElements.clearToLastMarker();
        p.tmplInsertionModeStack.shift();
        p._resetInsertionMode();
    }
    else {
        p._err(token, ERR.endTagWithoutMatchingOpenElement);
    }
}
function tokenInHead(p, token) {
    p.openElements.pop();
    p.insertionMode = InsertionMode.AFTER_HEAD;
    p._processToken(token);
}
// The "in head no script" insertion mode
//------------------------------------------------------------------
function startTagInHeadNoScript(p, token) {
    switch (token.tagID) {
        case TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case TAG_ID.BASEFONT:
        case TAG_ID.BGSOUND:
        case TAG_ID.HEAD:
        case TAG_ID.LINK:
        case TAG_ID.META:
        case TAG_ID.NOFRAMES:
        case TAG_ID.STYLE: {
            startTagInHead(p, token);
            break;
        }
        case TAG_ID.NOSCRIPT: {
            p._err(token, ERR.nestedNoscriptInHead);
            break;
        }
        default: {
            tokenInHeadNoScript(p, token);
        }
    }
}
function endTagInHeadNoScript(p, token) {
    switch (token.tagID) {
        case TAG_ID.NOSCRIPT: {
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_HEAD;
            break;
        }
        case TAG_ID.BR: {
            tokenInHeadNoScript(p, token);
            break;
        }
        default: {
            p._err(token, ERR.endTagWithoutMatchingOpenElement);
        }
    }
}
function tokenInHeadNoScript(p, token) {
    const errCode = token.type === TokenType.EOF ? ERR.openElementsLeftAfterEof : ERR.disallowedContentInNoscriptInHead;
    p._err(token, errCode);
    p.openElements.pop();
    p.insertionMode = InsertionMode.IN_HEAD;
    p._processToken(token);
}
// The "after head" insertion mode
//------------------------------------------------------------------
function startTagAfterHead(p, token) {
    switch (token.tagID) {
        case TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case TAG_ID.BODY: {
            p._insertElement(token, NS.HTML);
            p.framesetOk = false;
            p.insertionMode = InsertionMode.IN_BODY;
            break;
        }
        case TAG_ID.FRAMESET: {
            p._insertElement(token, NS.HTML);
            p.insertionMode = InsertionMode.IN_FRAMESET;
            break;
        }
        case TAG_ID.BASE:
        case TAG_ID.BASEFONT:
        case TAG_ID.BGSOUND:
        case TAG_ID.LINK:
        case TAG_ID.META:
        case TAG_ID.NOFRAMES:
        case TAG_ID.SCRIPT:
        case TAG_ID.STYLE:
        case TAG_ID.TEMPLATE:
        case TAG_ID.TITLE: {
            p._err(token, ERR.abandonedHeadElementChild);
            p.openElements.push(p.headElement, TAG_ID.HEAD);
            startTagInHead(p, token);
            p.openElements.remove(p.headElement);
            break;
        }
        case TAG_ID.HEAD: {
            p._err(token, ERR.misplacedStartTagForHeadElement);
            break;
        }
        default: {
            tokenAfterHead(p, token);
        }
    }
}
function endTagAfterHead(p, token) {
    switch (token.tagID) {
        case TAG_ID.BODY:
        case TAG_ID.HTML:
        case TAG_ID.BR: {
            tokenAfterHead(p, token);
            break;
        }
        case TAG_ID.TEMPLATE: {
            templateEndTagInHead(p, token);
            break;
        }
        default: {
            p._err(token, ERR.endTagWithoutMatchingOpenElement);
        }
    }
}
function tokenAfterHead(p, token) {
    p._insertFakeElement(TAG_NAMES.BODY, TAG_ID.BODY);
    p.insertionMode = InsertionMode.IN_BODY;
    modeInBody(p, token);
}
// The "in body" insertion mode
//------------------------------------------------------------------
function modeInBody(p, token) {
    switch (token.type) {
        case TokenType.CHARACTER: {
            characterInBody(p, token);
            break;
        }
        case TokenType.WHITESPACE_CHARACTER: {
            whitespaceCharacterInBody(p, token);
            break;
        }
        case TokenType.COMMENT: {
            appendComment(p, token);
            break;
        }
        case TokenType.START_TAG: {
            startTagInBody(p, token);
            break;
        }
        case TokenType.END_TAG: {
            endTagInBody(p, token);
            break;
        }
        case TokenType.EOF: {
            eofInBody(p, token);
            break;
        }
        // Do nothing
    }
}
function whitespaceCharacterInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertCharacters(token);
}
function characterInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertCharacters(token);
    p.framesetOk = false;
}
function htmlStartTagInBody(p, token) {
    if (p.openElements.tmplCount === 0) {
        p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
    }
}
function bodyStartTagInBody(p, token) {
    const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
    if (bodyElement && p.openElements.tmplCount === 0) {
        p.framesetOk = false;
        p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
    }
}
function framesetStartTagInBody(p, token) {
    const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
    if (p.framesetOk && bodyElement) {
        p.treeAdapter.detachNode(bodyElement);
        p.openElements.popAllUpToHtmlElement();
        p._insertElement(token, NS.HTML);
        p.insertionMode = InsertionMode.IN_FRAMESET;
    }
}
function addressStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope(TAG_ID.P)) {
        p._closePElement();
    }
    p._insertElement(token, NS.HTML);
}
function numberedHeaderStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope(TAG_ID.P)) {
        p._closePElement();
    }
    if (isNumberedHeader(p.openElements.currentTagId)) {
        p.openElements.pop();
    }
    p._insertElement(token, NS.HTML);
}
function preStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope(TAG_ID.P)) {
        p._closePElement();
    }
    p._insertElement(token, NS.HTML);
    //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
    //on to the next one. (Newlines at the start of pre blocks are ignored as an authoring convenience.)
    p.skipNextNewLine = true;
    p.framesetOk = false;
}
function formStartTagInBody(p, token) {
    const inTemplate = p.openElements.tmplCount > 0;
    if (!p.formElement || inTemplate) {
        if (p.openElements.hasInButtonScope(TAG_ID.P)) {
            p._closePElement();
        }
        p._insertElement(token, NS.HTML);
        if (!inTemplate) {
            p.formElement = p.openElements.current;
        }
    }
}
function listItemStartTagInBody(p, token) {
    p.framesetOk = false;
    const tn = token.tagID;
    for (let i = p.openElements.stackTop; i >= 0; i--) {
        const elementId = p.openElements.tagIDs[i];
        if ((tn === TAG_ID.LI && elementId === TAG_ID.LI) ||
            ((tn === TAG_ID.DD || tn === TAG_ID.DT) && (elementId === TAG_ID.DD || elementId === TAG_ID.DT))) {
            p.openElements.generateImpliedEndTagsWithExclusion(elementId);
            p.openElements.popUntilTagNamePopped(elementId);
            break;
        }
        if (elementId !== TAG_ID.ADDRESS &&
            elementId !== TAG_ID.DIV &&
            elementId !== TAG_ID.P &&
            p._isSpecialElement(p.openElements.items[i], elementId)) {
            break;
        }
    }
    if (p.openElements.hasInButtonScope(TAG_ID.P)) {
        p._closePElement();
    }
    p._insertElement(token, NS.HTML);
}
function plaintextStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope(TAG_ID.P)) {
        p._closePElement();
    }
    p._insertElement(token, NS.HTML);
    p.tokenizer.state = TokenizerMode.PLAINTEXT;
}
function buttonStartTagInBody(p, token) {
    if (p.openElements.hasInScope(TAG_ID.BUTTON)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(TAG_ID.BUTTON);
    }
    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
    p.framesetOk = false;
}
function aStartTagInBody(p, token) {
    const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(TAG_NAMES.A);
    if (activeElementEntry) {
        callAdoptionAgency(p, token);
        p.openElements.remove(activeElementEntry.element);
        p.activeFormattingElements.removeEntry(activeElementEntry);
    }
    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
    p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function bStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
    p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function nobrStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    if (p.openElements.hasInScope(TAG_ID.NOBR)) {
        callAdoptionAgency(p, token);
        p._reconstructActiveFormattingElements();
    }
    p._insertElement(token, NS.HTML);
    p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function appletStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
    p.activeFormattingElements.insertMarker();
    p.framesetOk = false;
}
function tableStartTagInBody(p, token) {
    if (p.treeAdapter.getDocumentMode(p.document) !== DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope(TAG_ID.P)) {
        p._closePElement();
    }
    p._insertElement(token, NS.HTML);
    p.framesetOk = false;
    p.insertionMode = InsertionMode.IN_TABLE;
}
function areaStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._appendElement(token, NS.HTML);
    p.framesetOk = false;
    token.ackSelfClosing = true;
}
function isHiddenInput(token) {
    const inputType = getTokenAttr(token, ATTRS.TYPE);
    return inputType != null && inputType.toLowerCase() === HIDDEN_INPUT_TYPE;
}
function inputStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._appendElement(token, NS.HTML);
    if (!isHiddenInput(token)) {
        p.framesetOk = false;
    }
    token.ackSelfClosing = true;
}
function paramStartTagInBody(p, token) {
    p._appendElement(token, NS.HTML);
    token.ackSelfClosing = true;
}
function hrStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope(TAG_ID.P)) {
        p._closePElement();
    }
    p._appendElement(token, NS.HTML);
    p.framesetOk = false;
    token.ackSelfClosing = true;
}
function imageStartTagInBody(p, token) {
    token.tagName = TAG_NAMES.IMG;
    token.tagID = TAG_ID.IMG;
    areaStartTagInBody(p, token);
}
function textareaStartTagInBody(p, token) {
    p._insertElement(token, NS.HTML);
    //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
    //on to the next one. (Newlines at the start of textarea elements are ignored as an authoring convenience.)
    p.skipNextNewLine = true;
    p.tokenizer.state = TokenizerMode.RCDATA;
    p.originalInsertionMode = p.insertionMode;
    p.framesetOk = false;
    p.insertionMode = InsertionMode.TEXT;
}
function xmpStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope(TAG_ID.P)) {
        p._closePElement();
    }
    p._reconstructActiveFormattingElements();
    p.framesetOk = false;
    p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function iframeStartTagInBody(p, token) {
    p.framesetOk = false;
    p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
//NOTE: here we assume that we always act as an user agent with enabled plugins, so we parse
//<noembed> as rawtext.
function noembedStartTagInBody(p, token) {
    p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function selectStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
    p.framesetOk = false;
    p.insertionMode =
        p.insertionMode === InsertionMode.IN_TABLE ||
            p.insertionMode === InsertionMode.IN_CAPTION ||
            p.insertionMode === InsertionMode.IN_TABLE_BODY ||
            p.insertionMode === InsertionMode.IN_ROW ||
            p.insertionMode === InsertionMode.IN_CELL
            ? InsertionMode.IN_SELECT_IN_TABLE
            : InsertionMode.IN_SELECT;
}
function optgroupStartTagInBody(p, token) {
    if (p.openElements.currentTagId === TAG_ID.OPTION) {
        p.openElements.pop();
    }
    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
}
function rbStartTagInBody(p, token) {
    if (p.openElements.hasInScope(TAG_ID.RUBY)) {
        p.openElements.generateImpliedEndTags();
    }
    p._insertElement(token, NS.HTML);
}
function rtStartTagInBody(p, token) {
    if (p.openElements.hasInScope(TAG_ID.RUBY)) {
        p.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.RTC);
    }
    p._insertElement(token, NS.HTML);
}
function mathStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    adjustTokenMathMLAttrs(token);
    adjustTokenXMLAttrs(token);
    if (token.selfClosing) {
        p._appendElement(token, NS.MATHML);
    }
    else {
        p._insertElement(token, NS.MATHML);
    }
    token.ackSelfClosing = true;
}
function svgStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    adjustTokenSVGAttrs(token);
    adjustTokenXMLAttrs(token);
    if (token.selfClosing) {
        p._appendElement(token, NS.SVG);
    }
    else {
        p._insertElement(token, NS.SVG);
    }
    token.ackSelfClosing = true;
}
function genericStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
}
function startTagInBody(p, token) {
    switch (token.tagID) {
        case TAG_ID.I:
        case TAG_ID.S:
        case TAG_ID.B:
        case TAG_ID.U:
        case TAG_ID.EM:
        case TAG_ID.TT:
        case TAG_ID.BIG:
        case TAG_ID.CODE:
        case TAG_ID.FONT:
        case TAG_ID.SMALL:
        case TAG_ID.STRIKE:
        case TAG_ID.STRONG: {
            bStartTagInBody(p, token);
            break;
        }
        case TAG_ID.A: {
            aStartTagInBody(p, token);
            break;
        }
        case TAG_ID.H1:
        case TAG_ID.H2:
        case TAG_ID.H3:
        case TAG_ID.H4:
        case TAG_ID.H5:
        case TAG_ID.H6: {
            numberedHeaderStartTagInBody(p, token);
            break;
        }
        case TAG_ID.P:
        case TAG_ID.DL:
        case TAG_ID.OL:
        case TAG_ID.UL:
        case TAG_ID.DIV:
        case TAG_ID.DIR:
        case TAG_ID.NAV:
        case TAG_ID.MAIN:
        case TAG_ID.MENU:
        case TAG_ID.ASIDE:
        case TAG_ID.CENTER:
        case TAG_ID.FIGURE:
        case TAG_ID.FOOTER:
        case TAG_ID.HEADER:
        case TAG_ID.HGROUP:
        case TAG_ID.DIALOG:
        case TAG_ID.DETAILS:
        case TAG_ID.ADDRESS:
        case TAG_ID.ARTICLE:
        case TAG_ID.SECTION:
        case TAG_ID.SUMMARY:
        case TAG_ID.FIELDSET:
        case TAG_ID.BLOCKQUOTE:
        case TAG_ID.FIGCAPTION: {
            addressStartTagInBody(p, token);
            break;
        }
        case TAG_ID.LI:
        case TAG_ID.DD:
        case TAG_ID.DT: {
            listItemStartTagInBody(p, token);
            break;
        }
        case TAG_ID.BR:
        case TAG_ID.IMG:
        case TAG_ID.WBR:
        case TAG_ID.AREA:
        case TAG_ID.EMBED:
        case TAG_ID.KEYGEN: {
            areaStartTagInBody(p, token);
            break;
        }
        case TAG_ID.HR: {
            hrStartTagInBody(p, token);
            break;
        }
        case TAG_ID.RB:
        case TAG_ID.RTC: {
            rbStartTagInBody(p, token);
            break;
        }
        case TAG_ID.RT:
        case TAG_ID.RP: {
            rtStartTagInBody(p, token);
            break;
        }
        case TAG_ID.PRE:
        case TAG_ID.LISTING: {
            preStartTagInBody(p, token);
            break;
        }
        case TAG_ID.XMP: {
            xmpStartTagInBody(p, token);
            break;
        }
        case TAG_ID.SVG: {
            svgStartTagInBody(p, token);
            break;
        }
        case TAG_ID.HTML: {
            htmlStartTagInBody(p, token);
            break;
        }
        case TAG_ID.BASE:
        case TAG_ID.LINK:
        case TAG_ID.META:
        case TAG_ID.STYLE:
        case TAG_ID.TITLE:
        case TAG_ID.SCRIPT:
        case TAG_ID.BGSOUND:
        case TAG_ID.BASEFONT:
        case TAG_ID.TEMPLATE: {
            startTagInHead(p, token);
            break;
        }
        case TAG_ID.BODY: {
            bodyStartTagInBody(p, token);
            break;
        }
        case TAG_ID.FORM: {
            formStartTagInBody(p, token);
            break;
        }
        case TAG_ID.NOBR: {
            nobrStartTagInBody(p, token);
            break;
        }
        case TAG_ID.MATH: {
            mathStartTagInBody(p, token);
            break;
        }
        case TAG_ID.TABLE: {
            tableStartTagInBody(p, token);
            break;
        }
        case TAG_ID.INPUT: {
            inputStartTagInBody(p, token);
            break;
        }
        case TAG_ID.PARAM:
        case TAG_ID.TRACK:
        case TAG_ID.SOURCE: {
            paramStartTagInBody(p, token);
            break;
        }
        case TAG_ID.IMAGE: {
            imageStartTagInBody(p, token);
            break;
        }
        case TAG_ID.BUTTON: {
            buttonStartTagInBody(p, token);
            break;
        }
        case TAG_ID.APPLET:
        case TAG_ID.OBJECT:
        case TAG_ID.MARQUEE: {
            appletStartTagInBody(p, token);
            break;
        }
        case TAG_ID.IFRAME: {
            iframeStartTagInBody(p, token);
            break;
        }
        case TAG_ID.SELECT: {
            selectStartTagInBody(p, token);
            break;
        }
        case TAG_ID.OPTION:
        case TAG_ID.OPTGROUP: {
            optgroupStartTagInBody(p, token);
            break;
        }
        case TAG_ID.NOEMBED: {
            noembedStartTagInBody(p, token);
            break;
        }
        case TAG_ID.FRAMESET: {
            framesetStartTagInBody(p, token);
            break;
        }
        case TAG_ID.TEXTAREA: {
            textareaStartTagInBody(p, token);
            break;
        }
        case TAG_ID.NOSCRIPT: {
            if (p.options.scriptingEnabled) {
                noembedStartTagInBody(p, token);
            }
            else {
                genericStartTagInBody(p, token);
            }
            break;
        }
        case TAG_ID.PLAINTEXT: {
            plaintextStartTagInBody(p, token);
            break;
        }
        case TAG_ID.COL:
        case TAG_ID.TH:
        case TAG_ID.TD:
        case TAG_ID.TR:
        case TAG_ID.HEAD:
        case TAG_ID.FRAME:
        case TAG_ID.TBODY:
        case TAG_ID.TFOOT:
        case TAG_ID.THEAD:
        case TAG_ID.CAPTION:
        case TAG_ID.COLGROUP: {
            // Ignore token
            break;
        }
        default: {
            genericStartTagInBody(p, token);
        }
    }
}
function bodyEndTagInBody(p, token) {
    if (p.openElements.hasInScope(TAG_ID.BODY)) {
        p.insertionMode = InsertionMode.AFTER_BODY;
        //NOTE: <body> is never popped from the stack, so we need to updated
        //the end location explicitly.
        if (p.options.sourceCodeLocationInfo) {
            const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
            if (bodyElement) {
                p._setEndLocation(bodyElement, token);
            }
        }
    }
}
function htmlEndTagInBody(p, token) {
    if (p.openElements.hasInScope(TAG_ID.BODY)) {
        p.insertionMode = InsertionMode.AFTER_BODY;
        endTagAfterBody(p, token);
    }
}
function addressEndTagInBody(p, token) {
    const tn = token.tagID;
    if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
    }
}
function formEndTagInBody(p) {
    const inTemplate = p.openElements.tmplCount > 0;
    const { formElement } = p;
    if (!inTemplate) {
        p.formElement = null;
    }
    if ((formElement || inTemplate) && p.openElements.hasInScope(TAG_ID.FORM)) {
        p.openElements.generateImpliedEndTags();
        if (inTemplate) {
            p.openElements.popUntilTagNamePopped(TAG_ID.FORM);
        }
        else if (formElement) {
            p.openElements.remove(formElement);
        }
    }
}
function pEndTagInBody(p) {
    if (!p.openElements.hasInButtonScope(TAG_ID.P)) {
        p._insertFakeElement(TAG_NAMES.P, TAG_ID.P);
    }
    p._closePElement();
}
function liEndTagInBody(p) {
    if (p.openElements.hasInListItemScope(TAG_ID.LI)) {
        p.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.LI);
        p.openElements.popUntilTagNamePopped(TAG_ID.LI);
    }
}
function ddEndTagInBody(p, token) {
    const tn = token.tagID;
    if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTagsWithExclusion(tn);
        p.openElements.popUntilTagNamePopped(tn);
    }
}
function numberedHeaderEndTagInBody(p) {
    if (p.openElements.hasNumberedHeaderInScope()) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilNumberedHeaderPopped();
    }
}
function appletEndTagInBody(p, token) {
    const tn = token.tagID;
    if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
        p.activeFormattingElements.clearToLastMarker();
    }
}
function brEndTagInBody(p) {
    p._reconstructActiveFormattingElements();
    p._insertFakeElement(TAG_NAMES.BR, TAG_ID.BR);
    p.openElements.pop();
    p.framesetOk = false;
}
function genericEndTagInBody(p, token) {
    const tn = token.tagName;
    const tid = token.tagID;
    for (let i = p.openElements.stackTop; i > 0; i--) {
        const element = p.openElements.items[i];
        const elementId = p.openElements.tagIDs[i];
        // Compare the tag name here, as the tag might not be a known tag with an ID.
        if (tid === elementId && (tid !== TAG_ID.UNKNOWN || p.treeAdapter.getTagName(element) === tn)) {
            p.openElements.generateImpliedEndTagsWithExclusion(tid);
            if (p.openElements.stackTop >= i)
                p.openElements.shortenToLength(i);
            break;
        }
        if (p._isSpecialElement(element, elementId)) {
            break;
        }
    }
}
function endTagInBody(p, token) {
    switch (token.tagID) {
        case TAG_ID.A:
        case TAG_ID.B:
        case TAG_ID.I:
        case TAG_ID.S:
        case TAG_ID.U:
        case TAG_ID.EM:
        case TAG_ID.TT:
        case TAG_ID.BIG:
        case TAG_ID.CODE:
        case TAG_ID.FONT:
        case TAG_ID.NOBR:
        case TAG_ID.SMALL:
        case TAG_ID.STRIKE:
        case TAG_ID.STRONG: {
            callAdoptionAgency(p, token);
            break;
        }
        case TAG_ID.P: {
            pEndTagInBody(p);
            break;
        }
        case TAG_ID.DL:
        case TAG_ID.UL:
        case TAG_ID.OL:
        case TAG_ID.DIR:
        case TAG_ID.DIV:
        case TAG_ID.NAV:
        case TAG_ID.PRE:
        case TAG_ID.MAIN:
        case TAG_ID.MENU:
        case TAG_ID.ASIDE:
        case TAG_ID.BUTTON:
        case TAG_ID.CENTER:
        case TAG_ID.FIGURE:
        case TAG_ID.FOOTER:
        case TAG_ID.HEADER:
        case TAG_ID.HGROUP:
        case TAG_ID.DIALOG:
        case TAG_ID.ADDRESS:
        case TAG_ID.ARTICLE:
        case TAG_ID.DETAILS:
        case TAG_ID.SECTION:
        case TAG_ID.SUMMARY:
        case TAG_ID.LISTING:
        case TAG_ID.FIELDSET:
        case TAG_ID.BLOCKQUOTE:
        case TAG_ID.FIGCAPTION: {
            addressEndTagInBody(p, token);
            break;
        }
        case TAG_ID.LI: {
            liEndTagInBody(p);
            break;
        }
        case TAG_ID.DD:
        case TAG_ID.DT: {
            ddEndTagInBody(p, token);
            break;
        }
        case TAG_ID.H1:
        case TAG_ID.H2:
        case TAG_ID.H3:
        case TAG_ID.H4:
        case TAG_ID.H5:
        case TAG_ID.H6: {
            numberedHeaderEndTagInBody(p);
            break;
        }
        case TAG_ID.BR: {
            brEndTagInBody(p);
            break;
        }
        case TAG_ID.BODY: {
            bodyEndTagInBody(p, token);
            break;
        }
        case TAG_ID.HTML: {
            htmlEndTagInBody(p, token);
            break;
        }
        case TAG_ID.FORM: {
            formEndTagInBody(p);
            break;
        }
        case TAG_ID.APPLET:
        case TAG_ID.OBJECT:
        case TAG_ID.MARQUEE: {
            appletEndTagInBody(p, token);
            break;
        }
        case TAG_ID.TEMPLATE: {
            templateEndTagInHead(p, token);
            break;
        }
        default: {
            genericEndTagInBody(p, token);
        }
    }
}
function eofInBody(p, token) {
    if (p.tmplInsertionModeStack.length > 0) {
        eofInTemplate(p, token);
    }
    else {
        stopParsing(p, token);
    }
}
// The "text" insertion mode
//------------------------------------------------------------------
function endTagInText(p, token) {
    var _a;
    if (token.tagID === TAG_ID.SCRIPT) {
        (_a = p.scriptHandler) === null || _a === void 0 ? void 0 : _a.call(p, p.openElements.current);
    }
    p.openElements.pop();
    p.insertionMode = p.originalInsertionMode;
}
function eofInText(p, token) {
    p._err(token, ERR.eofInElementThatCanContainOnlyText);
    p.openElements.pop();
    p.insertionMode = p.originalInsertionMode;
    p.onEof(token);
}
// The "in table" insertion mode
//------------------------------------------------------------------
function characterInTable(p, token) {
    if (TABLE_STRUCTURE_TAGS.has(p.openElements.currentTagId)) {
        p.pendingCharacterTokens.length = 0;
        p.hasNonWhitespacePendingCharacterToken = false;
        p.originalInsertionMode = p.insertionMode;
        p.insertionMode = InsertionMode.IN_TABLE_TEXT;
        switch (token.type) {
            case TokenType.CHARACTER: {
                characterInTableText(p, token);
                break;
            }
            case TokenType.WHITESPACE_CHARACTER: {
                whitespaceCharacterInTableText(p, token);
                break;
            }
            // Ignore null
        }
    }
    else {
        tokenInTable(p, token);
    }
}
function captionStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p.activeFormattingElements.insertMarker();
    p._insertElement(token, NS.HTML);
    p.insertionMode = InsertionMode.IN_CAPTION;
}
function colgroupStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p._insertElement(token, NS.HTML);
    p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
}
function colStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p._insertFakeElement(TAG_NAMES.COLGROUP, TAG_ID.COLGROUP);
    p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
    startTagInColumnGroup(p, token);
}
function tbodyStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p._insertElement(token, NS.HTML);
    p.insertionMode = InsertionMode.IN_TABLE_BODY;
}
function tdStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p._insertFakeElement(TAG_NAMES.TBODY, TAG_ID.TBODY);
    p.insertionMode = InsertionMode.IN_TABLE_BODY;
    startTagInTableBody(p, token);
}
function tableStartTagInTable(p, token) {
    if (p.openElements.hasInTableScope(TAG_ID.TABLE)) {
        p.openElements.popUntilTagNamePopped(TAG_ID.TABLE);
        p._resetInsertionMode();
        p._processStartTag(token);
    }
}
function inputStartTagInTable(p, token) {
    if (isHiddenInput(token)) {
        p._appendElement(token, NS.HTML);
    }
    else {
        tokenInTable(p, token);
    }
    token.ackSelfClosing = true;
}
function formStartTagInTable(p, token) {
    if (!p.formElement && p.openElements.tmplCount === 0) {
        p._insertElement(token, NS.HTML);
        p.formElement = p.openElements.current;
        p.openElements.pop();
    }
}
function startTagInTable(p, token) {
    switch (token.tagID) {
        case TAG_ID.TD:
        case TAG_ID.TH:
        case TAG_ID.TR: {
            tdStartTagInTable(p, token);
            break;
        }
        case TAG_ID.STYLE:
        case TAG_ID.SCRIPT:
        case TAG_ID.TEMPLATE: {
            startTagInHead(p, token);
            break;
        }
        case TAG_ID.COL: {
            colStartTagInTable(p, token);
            break;
        }
        case TAG_ID.FORM: {
            formStartTagInTable(p, token);
            break;
        }
        case TAG_ID.TABLE: {
            tableStartTagInTable(p, token);
            break;
        }
        case TAG_ID.TBODY:
        case TAG_ID.TFOOT:
        case TAG_ID.THEAD: {
            tbodyStartTagInTable(p, token);
            break;
        }
        case TAG_ID.INPUT: {
            inputStartTagInTable(p, token);
            break;
        }
        case TAG_ID.CAPTION: {
            captionStartTagInTable(p, token);
            break;
        }
        case TAG_ID.COLGROUP: {
            colgroupStartTagInTable(p, token);
            break;
        }
        default: {
            tokenInTable(p, token);
        }
    }
}
function endTagInTable(p, token) {
    switch (token.tagID) {
        case TAG_ID.TABLE: {
            if (p.openElements.hasInTableScope(TAG_ID.TABLE)) {
                p.openElements.popUntilTagNamePopped(TAG_ID.TABLE);
                p._resetInsertionMode();
            }
            break;
        }
        case TAG_ID.TEMPLATE: {
            templateEndTagInHead(p, token);
            break;
        }
        case TAG_ID.BODY:
        case TAG_ID.CAPTION:
        case TAG_ID.COL:
        case TAG_ID.COLGROUP:
        case TAG_ID.HTML:
        case TAG_ID.TBODY:
        case TAG_ID.TD:
        case TAG_ID.TFOOT:
        case TAG_ID.TH:
        case TAG_ID.THEAD:
        case TAG_ID.TR: {
            // Ignore token
            break;
        }
        default: {
            tokenInTable(p, token);
        }
    }
}
function tokenInTable(p, token) {
    const savedFosterParentingState = p.fosterParentingEnabled;
    p.fosterParentingEnabled = true;
    // Process token in `In Body` mode
    modeInBody(p, token);
    p.fosterParentingEnabled = savedFosterParentingState;
}
// The "in table text" insertion mode
//------------------------------------------------------------------
function whitespaceCharacterInTableText(p, token) {
    p.pendingCharacterTokens.push(token);
}
function characterInTableText(p, token) {
    p.pendingCharacterTokens.push(token);
    p.hasNonWhitespacePendingCharacterToken = true;
}
function tokenInTableText(p, token) {
    let i = 0;
    if (p.hasNonWhitespacePendingCharacterToken) {
        for (; i < p.pendingCharacterTokens.length; i++) {
            tokenInTable(p, p.pendingCharacterTokens[i]);
        }
    }
    else {
        for (; i < p.pendingCharacterTokens.length; i++) {
            p._insertCharacters(p.pendingCharacterTokens[i]);
        }
    }
    p.insertionMode = p.originalInsertionMode;
    p._processToken(token);
}
// The "in caption" insertion mode
//------------------------------------------------------------------
const TABLE_VOID_ELEMENTS = new Set([TAG_ID.CAPTION, TAG_ID.COL, TAG_ID.COLGROUP, TAG_ID.TBODY, TAG_ID.TD, TAG_ID.TFOOT, TAG_ID.TH, TAG_ID.THEAD, TAG_ID.TR]);
function startTagInCaption(p, token) {
    const tn = token.tagID;
    if (TABLE_VOID_ELEMENTS.has(tn)) {
        if (p.openElements.hasInTableScope(TAG_ID.CAPTION)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped(TAG_ID.CAPTION);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = InsertionMode.IN_TABLE;
            startTagInTable(p, token);
        }
    }
    else {
        startTagInBody(p, token);
    }
}
function endTagInCaption(p, token) {
    const tn = token.tagID;
    switch (tn) {
        case TAG_ID.CAPTION:
        case TAG_ID.TABLE: {
            if (p.openElements.hasInTableScope(TAG_ID.CAPTION)) {
                p.openElements.generateImpliedEndTags();
                p.openElements.popUntilTagNamePopped(TAG_ID.CAPTION);
                p.activeFormattingElements.clearToLastMarker();
                p.insertionMode = InsertionMode.IN_TABLE;
                if (tn === TAG_ID.TABLE) {
                    endTagInTable(p, token);
                }
            }
            break;
        }
        case TAG_ID.BODY:
        case TAG_ID.COL:
        case TAG_ID.COLGROUP:
        case TAG_ID.HTML:
        case TAG_ID.TBODY:
        case TAG_ID.TD:
        case TAG_ID.TFOOT:
        case TAG_ID.TH:
        case TAG_ID.THEAD:
        case TAG_ID.TR: {
            // Ignore token
            break;
        }
        default: {
            endTagInBody(p, token);
        }
    }
}
// The "in column group" insertion mode
//------------------------------------------------------------------
function startTagInColumnGroup(p, token) {
    switch (token.tagID) {
        case TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case TAG_ID.COL: {
            p._appendElement(token, NS.HTML);
            token.ackSelfClosing = true;
            break;
        }
        case TAG_ID.TEMPLATE: {
            startTagInHead(p, token);
            break;
        }
        default: {
            tokenInColumnGroup(p, token);
        }
    }
}
function endTagInColumnGroup(p, token) {
    switch (token.tagID) {
        case TAG_ID.COLGROUP: {
            if (p.openElements.currentTagId === TAG_ID.COLGROUP) {
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE;
            }
            break;
        }
        case TAG_ID.TEMPLATE: {
            templateEndTagInHead(p, token);
            break;
        }
        case TAG_ID.COL: {
            // Ignore token
            break;
        }
        default: {
            tokenInColumnGroup(p, token);
        }
    }
}
function tokenInColumnGroup(p, token) {
    if (p.openElements.currentTagId === TAG_ID.COLGROUP) {
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
        p._processToken(token);
    }
}
// The "in table body" insertion mode
//------------------------------------------------------------------
function startTagInTableBody(p, token) {
    switch (token.tagID) {
        case TAG_ID.TR: {
            p.openElements.clearBackToTableBodyContext();
            p._insertElement(token, NS.HTML);
            p.insertionMode = InsertionMode.IN_ROW;
            break;
        }
        case TAG_ID.TH:
        case TAG_ID.TD: {
            p.openElements.clearBackToTableBodyContext();
            p._insertFakeElement(TAG_NAMES.TR, TAG_ID.TR);
            p.insertionMode = InsertionMode.IN_ROW;
            startTagInRow(p, token);
            break;
        }
        case TAG_ID.CAPTION:
        case TAG_ID.COL:
        case TAG_ID.COLGROUP:
        case TAG_ID.TBODY:
        case TAG_ID.TFOOT:
        case TAG_ID.THEAD: {
            if (p.openElements.hasTableBodyContextInTableScope()) {
                p.openElements.clearBackToTableBodyContext();
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE;
                startTagInTable(p, token);
            }
            break;
        }
        default: {
            startTagInTable(p, token);
        }
    }
}
function endTagInTableBody(p, token) {
    const tn = token.tagID;
    switch (token.tagID) {
        case TAG_ID.TBODY:
        case TAG_ID.TFOOT:
        case TAG_ID.THEAD: {
            if (p.openElements.hasInTableScope(tn)) {
                p.openElements.clearBackToTableBodyContext();
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE;
            }
            break;
        }
        case TAG_ID.TABLE: {
            if (p.openElements.hasTableBodyContextInTableScope()) {
                p.openElements.clearBackToTableBodyContext();
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE;
                endTagInTable(p, token);
            }
            break;
        }
        case TAG_ID.BODY:
        case TAG_ID.CAPTION:
        case TAG_ID.COL:
        case TAG_ID.COLGROUP:
        case TAG_ID.HTML:
        case TAG_ID.TD:
        case TAG_ID.TH:
        case TAG_ID.TR: {
            // Ignore token
            break;
        }
        default: {
            endTagInTable(p, token);
        }
    }
}
// The "in row" insertion mode
//------------------------------------------------------------------
function startTagInRow(p, token) {
    switch (token.tagID) {
        case TAG_ID.TH:
        case TAG_ID.TD: {
            p.openElements.clearBackToTableRowContext();
            p._insertElement(token, NS.HTML);
            p.insertionMode = InsertionMode.IN_CELL;
            p.activeFormattingElements.insertMarker();
            break;
        }
        case TAG_ID.CAPTION:
        case TAG_ID.COL:
        case TAG_ID.COLGROUP:
        case TAG_ID.TBODY:
        case TAG_ID.TFOOT:
        case TAG_ID.THEAD:
        case TAG_ID.TR: {
            if (p.openElements.hasInTableScope(TAG_ID.TR)) {
                p.openElements.clearBackToTableRowContext();
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE_BODY;
                startTagInTableBody(p, token);
            }
            break;
        }
        default: {
            startTagInTable(p, token);
        }
    }
}
function endTagInRow(p, token) {
    switch (token.tagID) {
        case TAG_ID.TR: {
            if (p.openElements.hasInTableScope(TAG_ID.TR)) {
                p.openElements.clearBackToTableRowContext();
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE_BODY;
            }
            break;
        }
        case TAG_ID.TABLE: {
            if (p.openElements.hasInTableScope(TAG_ID.TR)) {
                p.openElements.clearBackToTableRowContext();
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE_BODY;
                endTagInTableBody(p, token);
            }
            break;
        }
        case TAG_ID.TBODY:
        case TAG_ID.TFOOT:
        case TAG_ID.THEAD: {
            if (p.openElements.hasInTableScope(token.tagID) || p.openElements.hasInTableScope(TAG_ID.TR)) {
                p.openElements.clearBackToTableRowContext();
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE_BODY;
                endTagInTableBody(p, token);
            }
            break;
        }
        case TAG_ID.BODY:
        case TAG_ID.CAPTION:
        case TAG_ID.COL:
        case TAG_ID.COLGROUP:
        case TAG_ID.HTML:
        case TAG_ID.TD:
        case TAG_ID.TH: {
            // Ignore end tag
            break;
        }
        default: {
            endTagInTable(p, token);
        }
    }
}
// The "in cell" insertion mode
//------------------------------------------------------------------
function startTagInCell(p, token) {
    const tn = token.tagID;
    if (TABLE_VOID_ELEMENTS.has(tn)) {
        if (p.openElements.hasInTableScope(TAG_ID.TD) || p.openElements.hasInTableScope(TAG_ID.TH)) {
            p._closeTableCell();
            startTagInRow(p, token);
        }
    }
    else {
        startTagInBody(p, token);
    }
}
function endTagInCell(p, token) {
    const tn = token.tagID;
    switch (tn) {
        case TAG_ID.TD:
        case TAG_ID.TH: {
            if (p.openElements.hasInTableScope(tn)) {
                p.openElements.generateImpliedEndTags();
                p.openElements.popUntilTagNamePopped(tn);
                p.activeFormattingElements.clearToLastMarker();
                p.insertionMode = InsertionMode.IN_ROW;
            }
            break;
        }
        case TAG_ID.TABLE:
        case TAG_ID.TBODY:
        case TAG_ID.TFOOT:
        case TAG_ID.THEAD:
        case TAG_ID.TR: {
            if (p.openElements.hasInTableScope(tn)) {
                p._closeTableCell();
                endTagInRow(p, token);
            }
            break;
        }
        case TAG_ID.BODY:
        case TAG_ID.CAPTION:
        case TAG_ID.COL:
        case TAG_ID.COLGROUP:
        case TAG_ID.HTML: {
            // Ignore token
            break;
        }
        default: {
            endTagInBody(p, token);
        }
    }
}
// The "in select" insertion mode
//------------------------------------------------------------------
function startTagInSelect(p, token) {
    switch (token.tagID) {
        case TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case TAG_ID.OPTION: {
            if (p.openElements.currentTagId === TAG_ID.OPTION) {
                p.openElements.pop();
            }
            p._insertElement(token, NS.HTML);
            break;
        }
        case TAG_ID.OPTGROUP: {
            if (p.openElements.currentTagId === TAG_ID.OPTION) {
                p.openElements.pop();
            }
            if (p.openElements.currentTagId === TAG_ID.OPTGROUP) {
                p.openElements.pop();
            }
            p._insertElement(token, NS.HTML);
            break;
        }
        case TAG_ID.INPUT:
        case TAG_ID.KEYGEN:
        case TAG_ID.TEXTAREA:
        case TAG_ID.SELECT: {
            if (p.openElements.hasInSelectScope(TAG_ID.SELECT)) {
                p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
                p._resetInsertionMode();
                if (token.tagID !== TAG_ID.SELECT) {
                    p._processStartTag(token);
                }
            }
            break;
        }
        case TAG_ID.SCRIPT:
        case TAG_ID.TEMPLATE: {
            startTagInHead(p, token);
            break;
        }
        // Do nothing
    }
}
function endTagInSelect(p, token) {
    switch (token.tagID) {
        case TAG_ID.OPTGROUP: {
            if (p.openElements.stackTop > 0 &&
                p.openElements.currentTagId === TAG_ID.OPTION &&
                p.openElements.tagIDs[p.openElements.stackTop - 1] === TAG_ID.OPTGROUP) {
                p.openElements.pop();
            }
            if (p.openElements.currentTagId === TAG_ID.OPTGROUP) {
                p.openElements.pop();
            }
            break;
        }
        case TAG_ID.OPTION: {
            if (p.openElements.currentTagId === TAG_ID.OPTION) {
                p.openElements.pop();
            }
            break;
        }
        case TAG_ID.SELECT: {
            if (p.openElements.hasInSelectScope(TAG_ID.SELECT)) {
                p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
                p._resetInsertionMode();
            }
            break;
        }
        case TAG_ID.TEMPLATE: {
            templateEndTagInHead(p, token);
            break;
        }
        // Do nothing
    }
}
// The "in select in table" insertion mode
//------------------------------------------------------------------
function startTagInSelectInTable(p, token) {
    const tn = token.tagID;
    if (tn === TAG_ID.CAPTION ||
        tn === TAG_ID.TABLE ||
        tn === TAG_ID.TBODY ||
        tn === TAG_ID.TFOOT ||
        tn === TAG_ID.THEAD ||
        tn === TAG_ID.TR ||
        tn === TAG_ID.TD ||
        tn === TAG_ID.TH) {
        p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
        p._resetInsertionMode();
        p._processStartTag(token);
    }
    else {
        startTagInSelect(p, token);
    }
}
function endTagInSelectInTable(p, token) {
    const tn = token.tagID;
    if (tn === TAG_ID.CAPTION ||
        tn === TAG_ID.TABLE ||
        tn === TAG_ID.TBODY ||
        tn === TAG_ID.TFOOT ||
        tn === TAG_ID.THEAD ||
        tn === TAG_ID.TR ||
        tn === TAG_ID.TD ||
        tn === TAG_ID.TH) {
        if (p.openElements.hasInTableScope(tn)) {
            p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
            p._resetInsertionMode();
            p.onEndTag(token);
        }
    }
    else {
        endTagInSelect(p, token);
    }
}
// The "in template" insertion mode
//------------------------------------------------------------------
function startTagInTemplate(p, token) {
    switch (token.tagID) {
        // First, handle tags that can start without a mode change
        case TAG_ID.BASE:
        case TAG_ID.BASEFONT:
        case TAG_ID.BGSOUND:
        case TAG_ID.LINK:
        case TAG_ID.META:
        case TAG_ID.NOFRAMES:
        case TAG_ID.SCRIPT:
        case TAG_ID.STYLE:
        case TAG_ID.TEMPLATE:
        case TAG_ID.TITLE: {
            startTagInHead(p, token);
            break;
        }
        // Re-process the token in the appropriate mode
        case TAG_ID.CAPTION:
        case TAG_ID.COLGROUP:
        case TAG_ID.TBODY:
        case TAG_ID.TFOOT:
        case TAG_ID.THEAD: {
            p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE;
            p.insertionMode = InsertionMode.IN_TABLE;
            startTagInTable(p, token);
            break;
        }
        case TAG_ID.COL: {
            p.tmplInsertionModeStack[0] = InsertionMode.IN_COLUMN_GROUP;
            p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
            startTagInColumnGroup(p, token);
            break;
        }
        case TAG_ID.TR: {
            p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE_BODY;
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
            startTagInTableBody(p, token);
            break;
        }
        case TAG_ID.TD:
        case TAG_ID.TH: {
            p.tmplInsertionModeStack[0] = InsertionMode.IN_ROW;
            p.insertionMode = InsertionMode.IN_ROW;
            startTagInRow(p, token);
            break;
        }
        default: {
            p.tmplInsertionModeStack[0] = InsertionMode.IN_BODY;
            p.insertionMode = InsertionMode.IN_BODY;
            startTagInBody(p, token);
        }
    }
}
function endTagInTemplate(p, token) {
    if (token.tagID === TAG_ID.TEMPLATE) {
        templateEndTagInHead(p, token);
    }
}
function eofInTemplate(p, token) {
    if (p.openElements.tmplCount > 0) {
        p.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE);
        p.activeFormattingElements.clearToLastMarker();
        p.tmplInsertionModeStack.shift();
        p._resetInsertionMode();
        p.onEof(token);
    }
    else {
        stopParsing(p, token);
    }
}
// The "after body" insertion mode
//------------------------------------------------------------------
function startTagAfterBody(p, token) {
    if (token.tagID === TAG_ID.HTML) {
        startTagInBody(p, token);
    }
    else {
        tokenAfterBody(p, token);
    }
}
function endTagAfterBody(p, token) {
    var _a;
    if (token.tagID === TAG_ID.HTML) {
        if (!p.fragmentContext) {
            p.insertionMode = InsertionMode.AFTER_AFTER_BODY;
        }
        //NOTE: <html> is never popped from the stack, so we need to updated
        //the end location explicitly.
        if (p.options.sourceCodeLocationInfo && p.openElements.tagIDs[0] === TAG_ID.HTML) {
            p._setEndLocation(p.openElements.items[0], token);
            // Update the body element, if it doesn't have an end tag
            const bodyElement = p.openElements.items[1];
            if (bodyElement && !((_a = p.treeAdapter.getNodeSourceCodeLocation(bodyElement)) === null || _a === void 0 ? void 0 : _a.endTag)) {
                p._setEndLocation(bodyElement, token);
            }
        }
    }
    else {
        tokenAfterBody(p, token);
    }
}
function tokenAfterBody(p, token) {
    p.insertionMode = InsertionMode.IN_BODY;
    modeInBody(p, token);
}
// The "in frameset" insertion mode
//------------------------------------------------------------------
function startTagInFrameset(p, token) {
    switch (token.tagID) {
        case TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case TAG_ID.FRAMESET: {
            p._insertElement(token, NS.HTML);
            break;
        }
        case TAG_ID.FRAME: {
            p._appendElement(token, NS.HTML);
            token.ackSelfClosing = true;
            break;
        }
        case TAG_ID.NOFRAMES: {
            startTagInHead(p, token);
            break;
        }
        // Do nothing
    }
}
function endTagInFrameset(p, token) {
    if (token.tagID === TAG_ID.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
        p.openElements.pop();
        if (!p.fragmentContext && p.openElements.currentTagId !== TAG_ID.FRAMESET) {
            p.insertionMode = InsertionMode.AFTER_FRAMESET;
        }
    }
}
// The "after frameset" insertion mode
//------------------------------------------------------------------
function startTagAfterFrameset(p, token) {
    switch (token.tagID) {
        case TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case TAG_ID.NOFRAMES: {
            startTagInHead(p, token);
            break;
        }
        // Do nothing
    }
}
function endTagAfterFrameset(p, token) {
    if (token.tagID === TAG_ID.HTML) {
        p.insertionMode = InsertionMode.AFTER_AFTER_FRAMESET;
    }
}
// The "after after body" insertion mode
//------------------------------------------------------------------
function startTagAfterAfterBody(p, token) {
    if (token.tagID === TAG_ID.HTML) {
        startTagInBody(p, token);
    }
    else {
        tokenAfterAfterBody(p, token);
    }
}
function tokenAfterAfterBody(p, token) {
    p.insertionMode = InsertionMode.IN_BODY;
    modeInBody(p, token);
}
// The "after after frameset" insertion mode
//------------------------------------------------------------------
function startTagAfterAfterFrameset(p, token) {
    switch (token.tagID) {
        case TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case TAG_ID.NOFRAMES: {
            startTagInHead(p, token);
            break;
        }
        // Do nothing
    }
}
// The rules for parsing tokens in foreign content
//------------------------------------------------------------------
function nullCharacterInForeignContent(p, token) {
    token.chars = REPLACEMENT_CHARACTER;
    p._insertCharacters(token);
}
function characterInForeignContent(p, token) {
    p._insertCharacters(token);
    p.framesetOk = false;
}
function popUntilHtmlOrIntegrationPoint(p) {
    while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS.HTML &&
        !p._isIntegrationPoint(p.openElements.currentTagId, p.openElements.current)) {
        p.openElements.pop();
    }
}
function startTagInForeignContent(p, token) {
    if (causesExit(token)) {
        popUntilHtmlOrIntegrationPoint(p);
        p._startTagOutsideForeignContent(token);
    }
    else {
        const current = p._getAdjustedCurrentElement();
        const currentNs = p.treeAdapter.getNamespaceURI(current);
        if (currentNs === NS.MATHML) {
            adjustTokenMathMLAttrs(token);
        }
        else if (currentNs === NS.SVG) {
            adjustTokenSVGTagName(token);
            adjustTokenSVGAttrs(token);
        }
        adjustTokenXMLAttrs(token);
        if (token.selfClosing) {
            p._appendElement(token, currentNs);
        }
        else {
            p._insertElement(token, currentNs);
        }
        token.ackSelfClosing = true;
    }
}
function endTagInForeignContent(p, token) {
    if (token.tagID === TAG_ID.P || token.tagID === TAG_ID.BR) {
        popUntilHtmlOrIntegrationPoint(p);
        p._endTagOutsideForeignContent(token);
        return;
    }
    for (let i = p.openElements.stackTop; i > 0; i--) {
        const element = p.openElements.items[i];
        if (p.treeAdapter.getNamespaceURI(element) === NS.HTML) {
            p._endTagOutsideForeignContent(token);
            break;
        }
        const tagName = p.treeAdapter.getTagName(element);
        if (tagName.toLowerCase() === token.tagName) {
            //NOTE: update the token tag name for `_setEndLocation`.
            token.tagName = tagName;
            p.openElements.shortenToLength(i);
            break;
        }
    }
}

// Sets
new Set([
    TAG_NAMES.AREA,
    TAG_NAMES.BASE,
    TAG_NAMES.BASEFONT,
    TAG_NAMES.BGSOUND,
    TAG_NAMES.BR,
    TAG_NAMES.COL,
    TAG_NAMES.EMBED,
    TAG_NAMES.FRAME,
    TAG_NAMES.HR,
    TAG_NAMES.IMG,
    TAG_NAMES.INPUT,
    TAG_NAMES.KEYGEN,
    TAG_NAMES.LINK,
    TAG_NAMES.META,
    TAG_NAMES.PARAM,
    TAG_NAMES.SOURCE,
    TAG_NAMES.TRACK,
    TAG_NAMES.WBR,
]);

// Shorthands
/**
 * Parses an HTML string.
 *
 * @param html Input HTML string.
 * @param options Parsing options.
 * @returns Document
 *
 * @example
 *
 * ```js
 * const parse5 = require('parse5');
 *
 * const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
 *
 * console.log(document.childNodes[1].tagName); //> 'html'
 *```
 */
function parse(html, options) {
    return Parser.parse(html, options);
}
function parseFragment(fragmentContext, html, options) {
    if (typeof fragmentContext === 'string') {
        options = html;
        html = fragmentContext;
        fragmentContext = null;
    }
    const parser = Parser.getFragmentParser(fragmentContext, options);
    parser.tokenizer.write(html, true);
    return parser.getFragment();
}

({
    HTML: NS.HTML,
    XML: NS.XML,
    MATHML: NS.MATHML,
    SVG: NS.SVG,
    XLINK: NS.XLINK,
    XMLNS: NS.XMLNS
});

/**
 * Determines if a given node is a document or not
 * @param {Node} node Node to test
 * @return {boolean}
 */
function isDocument(node) {
    return node.nodeName === '#document';
}
/**
 * Determines if a given node is a document fragment or not
 * @param {Node} node Node to test
 * @return {boolean}
 */
function isDocumentFragment(node) {
    return node.nodeName === '#document-fragment';
}
/**
 * Determines if a given node is a template node or not
 * @param {Node} node Node to test
 * @return {boolean}
 */
function isTemplateNode(node) {
    return node.nodeName === 'template';
}
const isElementNode = defaultTreeAdapter.isElementNode;
const isCommentNode = defaultTreeAdapter.isCommentNode;
const isDocumentTypeNode = defaultTreeAdapter.isDocumentTypeNode;
const isTextNode = defaultTreeAdapter.isTextNode;
/**
 * Determines if a given node is a parent or not
 * @param {Node} node Node to test
 * @return {boolean}
 */
function isParentNode(node) {
    return (isDocument(node) ||
        isDocumentFragment(node) ||
        isElementNode(node) ||
        isTemplateNode(node));
}

defaultTreeAdapter.appendChild;

/**
 * Traverses the tree of a given node
 * @param {Node} node Node to traverse
 * @param {Visitor} visitor Visitor to apply
 * @param {ParentNode=} parent Parent node of the current node
 * @return {void}
 */
function traverse(node, visitor, parent) {
    const shouldVisitChildren = typeof visitor['pre:node'] !== 'function' ||
        visitor['pre:node'](node, parent) !== false;
    if (shouldVisitChildren && isParentNode(node)) {
        for (const child of node.childNodes) {
            traverse(child, visitor, node);
        }
    }
    if (typeof visitor.node === 'function') {
        visitor.node(node, parent);
    }
    if (typeof visitor.document === 'function' && isDocument(node)) {
        visitor.document(node);
    }
    if (typeof visitor.documentFragment === 'function' &&
        isDocumentFragment(node)) {
        visitor.documentFragment(node, parent);
    }
    if (typeof visitor.element === 'function' && isElementNode(node)) {
        visitor.element(node, parent);
    }
    if (typeof visitor.template === 'function' && isTemplateNode(node)) {
        visitor.template(node, parent);
    }
    if (typeof visitor.comment === 'function' && isCommentNode(node)) {
        visitor.comment(node, parent);
    }
    if (typeof visitor.text === 'function' && isTextNode(node)) {
        visitor.text(node, parent);
    }
    if (typeof visitor.documentType === 'function' && isDocumentTypeNode(node)) {
        visitor.documentType(node, parent);
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class i extends Directive{render(){}update(e){const t=e.parentNode;if("function"==typeof t.renderLight)return t.renderLight()}}i.t=!0;directive(i);const s=e=>getDirectiveClass(e)?.t;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Elements and their special properties that should be reflected to attributes
 * when set.
 *
 * Each item in the array takes the following format:
 *
 * Item 0:
 *    Array of [property name, reflected attribute name]
 *    or
 *    property name (if reflected attribute name is identical).
 * Item 1:
 *    Array of tag names which reflect the property
 *
 * List of attributes and which elements they apply is sourced from
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 *
 * Commented elements were empirically found to not reflect from an associated
 * property.
 */
// prettier-ignore
const reflectedAttributesSource = [
    ['accept', [/*'form',*/ 'input']],
    [['accept-charset', 'acceptCharset'], ['form']],
    [['accesskey', 'accessKey'], ['*']],
    ['action', ['form']],
    ['align', [/*'applet',*/ 'caption', 'col', 'colgroup', 'hr', 'iframe', 'img', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr']],
    ['allow', ['iframe']],
    ['alt', [/*'applet',*/ 'area', 'img', 'input']],
    ['async', ['script']],
    ['autocapitalize', ['*']],
    ['autocomplete', ['form', 'input', 'select', 'textarea']],
    ['autofocus', ['button', 'input', 'keygen', 'select', 'textarea']],
    ['autoplay', ['audio', 'video']],
    ['background', ['body', /*'table', 'td', 'th'*/]],
    [['bgcolor', 'bgColor'], ['body', /*'col', 'colgroup',*/ 'marquee', 'table', /*'tbody', 'tfoot',*/ 'td', 'th', 'tr']],
    ['border', ['img', 'object', 'table']],
    ['buffered', [ /*'audio', 'video'*/]],
    ['capture', [ /*'input'*/]],
    ['challenge', [ /*'keygen'*/]],
    ['charset', [/*'meta',*/ 'script']],
    ['checked', [/*'command',*/ 'input']],
    ['cite', ['blockquote', 'del', 'ins', 'q']],
    [['class', 'className'], ['*']],
    ['code', [ /*'applet'*/]],
    ['codebase', [ /*'applet'*/]],
    ['color', [/*'basefont',*/ 'font', 'hr']],
    ['cols', ['textarea']],
    [['colspan', 'colSpan'], ['td', 'th']],
    ['content', ['meta']],
    [['contenteditable', 'contentEditable'], ['*']],
    [['contextmenu'], [ /*'*'*/]],
    ['controls', ['audio', 'video']],
    ['coords', ['area']],
    [['crossorigin', 'crossOrigin'], ['audio', 'img', 'link', 'script', 'video']],
    ['csp', ['iframe']],
    ['data', ['object']],
    [['datetime', 'dateTime'], ['del', 'ins', 'time']],
    ['decoding', ['img']],
    ['default', ['track']],
    ['defer', ['script']],
    ['dir', ['*']],
    [['dirname', 'dirName'], ['input', 'textarea']],
    ['disabled', [/*'command',*/ 'button', 'fieldset', 'input', /*'keygen',*/ 'optgroup', 'option', 'select', 'textarea']],
    ['download', ['a', 'area']],
    ['draggable', ['*']],
    ['enctype', ['form']],
    [['enterkeyhint', 'enterKeyHint'], ['textarea', 'contenteditable']],
    ['for', [ /*'label', 'output'*/]],
    ['form', [ /*'button', 'fieldset', 'input', 'keygen', 'label', 'meter', 'object', 'output', 'progress', 'select', 'textarea'*/]],
    [['formaction', 'formAction'], ['input', 'button']],
    [['formenctype', 'formEnctype'], ['button', 'input']],
    [['formmethod', 'formMethod'], ['button', 'input']],
    [['formnovalidate', 'formNoValidate'], ['button', 'input']],
    [['formtarget', 'formTarget'], ['button', 'input']],
    ['headers', ['td', 'th']],
    ['height', ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video']],
    ['hidden', ['*']],
    ['high', ['meter']],
    ['href', ['a', 'area', 'base', 'link']],
    ['hreflang', ['a', /*'area',*/ 'link']],
    [['http-equiv', 'httpEquiv'], ['meta']],
    ['icon', [ /*'command'*/]],
    ['id', ['*']],
    ['importance', [ /*'iframe', 'img', 'link', 'script'*/]],
    ['integrity', ['link', 'script']],
    ['intrinsicsize', [ /*'img'*/]],
    [['inputmode', 'inputMode'], ['textarea', 'contenteditable']],
    [['ismap', 'isMap'], ['img']],
    ['itemprop', [ /*'*'*/]],
    ['keytype', [ /*'keygen'*/]],
    ['kind', ['track']],
    ['label', ['optgroup', 'option', 'track']],
    ['lang', ['*']],
    ['language', [ /*'script'*/]],
    ['loading', ['img', 'iframe']],
    ['list', [ /*'input'*/]],
    ['loop', ['audio', /*'bgsound',*/ 'marquee', 'video']],
    ['low', ['meter']],
    ['manifest', [ /*'html'*/]],
    ['max', ['input', 'meter', 'progress']],
    [['maxlength', 'maxLength'], ['input', 'textarea']],
    [['minlength', 'minLength'], ['input', 'textarea']],
    ['media', [/*'a', 'area',*/ 'link', 'source', 'style']],
    ['method', ['form']],
    ['min', ['input', 'meter']],
    ['multiple', ['input', 'select']],
    ['muted', ['audio', 'video']],
    ['name', ['button', 'form', 'fieldset', 'iframe', 'input', /*'keygen',*/ 'object', 'output', 'select', 'textarea', 'map', 'meta', 'param']],
    [['novalidate', 'noValidate'], ['form']],
    ['open', ['details']],
    ['optimum', ['meter']],
    ['pattern', ['input']],
    ['ping', ['a', 'area']],
    ['placeholder', ['input', 'textarea']],
    ['poster', ['video']],
    ['preload', ['audio', 'video']],
    ['radiogroup', [ /*'command'*/]],
    [['readonly', 'readOnly'], ['input', 'textarea']],
    [['referrerpolicy', 'referrerPolicy'], ['a', 'area', 'iframe', 'img', 'link', 'script']],
    ['rel', ['a', 'area', 'link']],
    ['required', ['input', 'select', 'textarea']],
    ['reversed', ['ol']],
    ['rows', ['textarea']],
    [['rowspan', 'rowSpan'], ['td', 'th']],
    ['sandbox', ['iframe']],
    ['scope', ['th']],
    ['scoped', [ /*'style'*/]],
    ['selected', ['option']],
    ['shape', ['a', 'area']],
    ['size', ['input', 'select']],
    ['sizes', ['link', 'img', 'source']],
    ['slot', ['*']],
    ['span', ['col', 'colgroup']],
    ['spellcheck', ['*']],
    ['src', ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video']],
    ['srcdoc', ['iframe']],
    ['srclang', ['track']],
    ['srcset', ['img', 'source']],
    ['start', ['ol']],
    ['step', ['input']],
    ['style', ['*']],
    ['summary', ['table']],
    [['tabindex', 'tabIndex'], ['*']],
    ['target', ['a', 'area', 'base', 'form']],
    ['title', ['*']],
    ['translate', [ /*'*'*/]], //TODO(kschaaf): 'translate' boolean property maps to 'yes'/'no'
    ['type', ['button', 'input', /*'command',*/ 'embed', 'object', 'script', 'source', 'style', /*'menu'*/]],
    [['usemap', 'useMap'], ['img', 'input', 'object']],
    ['value', ['button', 'data', 'input', 'li', 'meter', 'option', 'progress', 'param']],
    ['width', ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video']],
    ['wrap', ['textarea']]
];
/**
 * Construct reflectedAttributes as nested maps for efficient lookup.
 */
const reflectedAttributes = new Map();
const addPropertyForElement = (elementName, attributeName, propertyName) => {
    if (reflectedAttributes.has(elementName)) {
        reflectedAttributes.get(elementName).set(propertyName, attributeName);
    }
    else {
        reflectedAttributes.set(elementName, new Map([[propertyName, attributeName]]));
    }
};
for (const [attr, elements] of reflectedAttributesSource) {
    for (let elementName of elements) {
        elementName = elementName.toUpperCase();
        if (attr instanceof Array) {
            // Property has a different attribute name.
            addPropertyForElement(elementName, attr[0], attr[1]);
        }
        else {
            addPropertyForElement(elementName, attr, attr);
        }
    }
}
/**
 * Return the attribute name that reflects from the given property
 * name on the given element.
 *
 * Example: for all elements, the property 'className' reflects to
 * the 'class' attribute, so:
 * reflectedAttributeName('div', 'className') returns 'class'
 */
const reflectedAttributeName = (elementName, propertyName) => {
    const attributes = reflectedAttributes.get(elementName);
    if (attributes !== undefined && attributes.has(propertyName)) {
        return attributes.get(propertyName);
    }
    else {
        return reflectedAttributes.get('*').get(propertyName);
    }
};

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const SERVER_ONLY = 1;
/**
 * A lit-html template that can only be rendered on the server, and cannot be
 * hydrated.
 *
 * These templates can be used for rendering full documents, including the
 * doctype, and rendering into elements that Lit normally cannot, like
 * `<title>`, `<textarea>`, `<template>`, and non-executing `<script>` tags
 * like `<script type="text/json">`. They are also slightly more efficient than
 * normal Lit templates, because the generated HTML doesn't need to include
 * markers for updating.
 *
 * Server-only `html` templates can be composed, and combined, and they support
 * almost all features that normal Lit templates do, with the exception of
 * features that don't have a pure HTML representation, like event handlers or
 * property bindings.
 *
 * Server-only `html` templates can only be rendered on the server, they will
 * throw an Error if created in the browser. However if you render a normal Lit
 * template inside a server-only template, then it can be hydrated and updated.
 * Likewise, if you place a custom element inside a server-only template, it can
 * be hydrated and update like normal.
 *
 * A server-only template can't be rendered inside a normal Lit template.
 */
function html$1(strings, ...values) {
    const value = x(strings, ...values);
    value._$litServerRenderMode = SERVER_ONLY;
    return value;
}
/**
 * If true, the given template result is from a normal lit-html template, and
 * not a server-only template.
 *
 * Server-only templates are only rendered once, they don't create the
 * marker comments needed to identify and update their dynamic parts.
 */
const isHydratable = (template) => {
    return template._$litServerRenderMode !== SERVER_ONLY;
};

/// <reference lib="dom" />
const { getTemplateHtml, marker, markerMatch, boundAttributeSuffix, patchDirectiveResolve, getAttributePartCommittedValue, resolveDirective, AttributePart, PropertyPart, BooleanAttributePart, EventPart, connectedDisconnectable, isIterable, } = i$1;
function ssrResolve(_part, values) {
    // Since the return value may also be a directive result in the case of nested
    // directives, we may need to patch that as well.
    return patchIfDirective(this.render(...values));
}
/**
 * Looks for values of type `DirectiveResult` and patches its Directive class
 * such that it calls `render` rather than `update`.
 */
const patchIfDirective = (value) => {
    const directiveCtor = getDirectiveClass(value);
    if (directiveCtor !== undefined) {
        patchDirectiveResolve(directiveCtor, ssrResolve);
    }
    return value;
};
/**
 * Patches `DirectiveResult` `Directive` classes for AttributePart values, which
 * may be an array
 */
const patchAnyDirectives = (part, value, valueIndex) => {
    if (part.strings !== undefined) {
        for (let i = 0; i < part.strings.length - 1; i++) {
            patchIfDirective(value[valueIndex + i]);
        }
    }
    else {
        patchIfDirective(value);
    }
};
const templateCache = new Map();
/**
 * Any of these top level tags will be removed by parse5's `parseFragment` and
 * will cause part errors if there are any part bindings. For only the `html`,
 * `head`, and `body` tags, we use a page-level template `parse`.
 */
const REGEXP_TEMPLATE_HAS_TOP_LEVEL_PAGE_TAG = /^(\s|<!--[^(-->)]*-->)*(<(!doctype|html|head|body))/i;
/**
 * For a given TemplateResult, generates and/or returns a cached list of opcodes
 * for the associated Template.  Opcodes are designed to allow emitting
 * contiguous static text from the template as much as possible, with specific
 * non-`text` opcodes interleaved to perform dynamic work, such as emitting
 * values for ChildParts or AttributeParts, and handling custom elements.
 *
 * For the following example template, an opcode list may look like this:
 *
 * ```js
 * html`<div><span>Hello</span><span class=${'bold'}>${template()}</span></div>`
 * ```
 *
 * - `text`
 *   - Emit run of static text: `<div><span>Hello</span>`
 * - `possible-node-marker`
 *   - Emit `<!--lit-node n-->` marker since there are attribute parts
 * - `text`
 *   - Emit run of static text: `<span`
 * - `attribute-part`
 *   - Emit an AttributePart's value, e.g. ` class="bold"`
 * - `text`
 *   - Emit run of static text: `>`
 * - `child-part`
 *   - Emit the ChildPart's value, in this case a TemplateResult, thus we
 *     recurse into that template's opcodes
 * - `text`
 *   - Emit run of static text: `/span></div>`
 *
 * When a custom-element is encountered, the flow looks like this:
 *
 * ```js
 * html`<x-foo staticAttr dynamicAttr=${value}><div>child</div>...</x-foo>`
 * ```
 *
 * - `possible-node-marker`
 *   - Emit `<!--lit-node n-->` marker since there are attribute parts and we
 *      may emit the `defer-hydration` attribute on the node that follows
 * - `text`
 *   - Emit open tag `<x-foo`
 * - `custom-element-open`
 *   - Create the CE `instance`+`renderer` and put on
 *     `customElementInstanceStack`
 *   - Call `renderer.setAttribute()` for any `staticAttributes` (e.g.
 *     'staticAttr`)
 * - `attribute-part`(s)
 *   - Call `renderer.setAttribute()` or `renderer.setProperty()` for
 *     `AttributePart`/`PropertyPart`s (e.g. for `dynamicAttr`)
 * - `custom-element-attributes`
 *   - Call `renderer.connectedCallback()`
 *   - Emit `renderer.renderAttributes()`
 * - `text`
 *   - Emit end of of open tag `>`
 * - `custom-element-shadow`
 *   - Emit `renderer.renderShadow()` (emits `<template shadowroot>` +
 *     recurses to emit `render()`)
 * - `text`
 *   - Emit run of static text within tag: `<div>child</div>...`
 * - ...(recurse to render more parts/children)...
 * - `custom-element-close`
 *   - Pop the CE `instance`+`renderer` off the `customElementInstanceStack`
 */
const getTemplateOpcodes = (result) => {
    const template = templateCache.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    const [html, attrNames] = getTemplateHtml(result.strings, 
    // SVG TemplateResultType functionality is only required on the client,
    // which instantiates SVG elements within a svg namespace. Using SVG
    // on the server results in unneccesary svg containers being emitted.
    TemplateResultType.HTML);
    const hydratable = isHydratable(result);
    const htmlString = String(html);
    // Only server templates can use top level document tags such as `<html>`,
    // `<body>`, and `<head>`.
    const isPageLevelTemplate = !hydratable && REGEXP_TEMPLATE_HAS_TOP_LEVEL_PAGE_TAG.test(htmlString);
    /**
     * The html string is parsed into a parse5 AST with source code information
     * on; this lets us skip over certain ast nodes by string character position
     * while walking the AST.
     *
     * Server Templates may need to use `parse` as they may contain document tags such
     * as `<html>`.
     */
    const ast = (isPageLevelTemplate ? parse : parseFragment)(htmlString, {
        sourceCodeLocationInfo: true,
    });
    const ops = [];
    /* The last offset of html written to the stream */
    let lastOffset = 0;
    /* Current attribute part index, for indexing attrNames */
    let attrIndex = 0;
    /**
     * Sets `lastOffset` to `offset`, skipping a range of characters. This is
     * useful for skipping and re-writing lit-html marker nodes, bound attribute
     * suffix, etc.
     */
    const skipTo = (offset) => {
        if (lastOffset === undefined) {
            throw new Error('lastOffset is undefined');
        }
        if (offset < lastOffset) {
            throw new Error(`offset must be greater than lastOffset.
        offset: ${offset}
        lastOffset: ${lastOffset}
      `);
        }
        lastOffset = offset;
    };
    /**
     * Records the given string to the output, either by appending to the current
     * opcode (if already `text`) or by creating a new `text` opcode (if the
     * previous opcode was not `text)
     */
    const flush = (value) => {
        const op = getLast(ops);
        if (op !== undefined && op.type === 'text') {
            op.value += value;
        }
        else {
            ops.push({
                type: 'text',
                value,
            });
        }
    };
    /**
     * Creates or appends to a text opcode with a substring of the html from the
     * `lastOffset` flushed to `offset`.
     */
    const flushTo = (offset) => {
        if (lastOffset === undefined) {
            throw new Error('lastOffset is undefined');
        }
        const previousLastOffset = lastOffset;
        lastOffset = offset;
        const value = String(html).substring(previousLastOffset, offset);
        flush(value);
    };
    // Depth-first node index, counting only comment and element nodes, to match
    // client-side lit-html.
    let nodeIndex = 0;
    traverse(ast, {
        'pre:node'(node, parent) {
            if (isCommentNode(node)) {
                if (node.data === markerMatch) {
                    flushTo(node.sourceCodeLocation.startOffset);
                    skipTo(node.sourceCodeLocation.endOffset);
                    ops.push({
                        type: 'child-part',
                        index: nodeIndex,
                        useCustomElementInstance: parent && isElementNode(parent) && parent.isDefinedCustomElement,
                    });
                }
                nodeIndex++;
            }
            else if (isElementNode(node)) {
                let boundAttributesCount = 0;
                const tagName = node.tagName;
                if (tagName.indexOf('-') !== -1) {
                    // Looking up the constructor here means that custom elements must be
                    // registered before rendering the first template that contains them.
                    const ctor = customElements.get(tagName);
                    if (ctor !== undefined) {
                        // Mark that this is a custom element
                        node.isDefinedCustomElement = true;
                        ops.push({
                            type: 'custom-element-open',
                            tagName,
                            ctor,
                            staticAttributes: new Map(node.attrs
                                .filter((attr) => !attr.name.endsWith(boundAttributeSuffix))
                                .map((attr) => [attr.name, attr.value])),
                        });
                    }
                }
                const attrInfo = node.attrs.map((attr) => {
                    const isAttrBinding = attr.name.endsWith(boundAttributeSuffix);
                    const isElementBinding = attr.name.startsWith(marker);
                    if (isAttrBinding || isElementBinding) {
                        boundAttributesCount += 1;
                    }
                    return [isAttrBinding, isElementBinding, attr];
                });
                if (boundAttributesCount > 0 || node.isDefinedCustomElement) {
                    // We (may) need to emit a `<!-- lit-node -->` comment marker to
                    // indicate the following node needs to be identified during
                    // hydration when it has bindings or if it is a custom element (and
                    // thus may need its `defer-hydration` to be removed, depending on
                    // the `deferHydration` setting). The marker is emitted as a
                    // previous sibling before the node in question, to avoid issues
                    // with void elements (which do not have children) and raw text
                    // elements (whose children are intepreted as text).
                    flushTo(node.sourceCodeLocation.startTag.startOffset);
                    ops.push({
                        type: 'possible-node-marker',
                        boundAttributesCount,
                        nodeIndex,
                    });
                }
                for (const [isAttrBinding, isElementBinding, attr] of attrInfo) {
                    if (isAttrBinding || isElementBinding) {
                        // Note that although we emit a lit-node comment marker for any
                        // nodes with bindings, we don't account for it in the nodeIndex because
                        // that will not be injected into the client template
                        const strings = attr.value.split(marker);
                        const attrSourceLocation = node.sourceCodeLocation.attrs[attr.name];
                        const attrNameStartOffset = attrSourceLocation.startOffset;
                        const attrEndOffset = attrSourceLocation.endOffset;
                        flushTo(attrNameStartOffset);
                        if (isAttrBinding) {
                            // We store the case-sensitive name from `attrNames` (generated
                            // while parsing the template strings); note that this assumes
                            // parse5 attribute ordering matches string ordering
                            const name = attrNames[attrIndex++];
                            const [, prefix, caseSensitiveName] = /([.?@])?(.*)/.exec(name);
                            if (!hydratable) {
                                if (prefix === '.') {
                                    throw new Error(`Server-only templates can't bind to properties. Bind to attributes instead, as they can be serialized when the template is rendered and sent to the browser.`);
                                }
                                else if (prefix === '@') {
                                    throw new Error(`Server-only templates can't bind to events. There's no way to serialize an event listener when generating HTML and sending it to the browser.`);
                                }
                            }
                            ops.push({
                                type: 'attribute-part',
                                index: nodeIndex,
                                name: caseSensitiveName,
                                ctor: prefix === '.'
                                    ? PropertyPart
                                    : prefix === '?'
                                        ? BooleanAttributePart
                                        : prefix === '@'
                                            ? EventPart
                                            : AttributePart,
                                strings,
                                tagName: tagName.toUpperCase(),
                                useCustomElementInstance: node.isDefinedCustomElement,
                            });
                        }
                        else {
                            if (!hydratable) {
                                throw new Error(`Server-only templates don't support element parts, as their API does not currently give them any way to render anything on the server. Found in template:
    ${displayTemplateResult(result)}`);
                            }
                            ops.push({
                                type: 'element-part',
                                index: nodeIndex,
                            });
                        }
                        skipTo(attrEndOffset);
                    }
                    else if (node.isDefinedCustomElement) {
                        // For custom elements, all static attributes are stored along
                        // with the `custom-element-open` opcode so that we can set them
                        // into the custom element instance, and then serialize them back
                        // out along with any manually-reflected attributes. As such, we
                        // skip over static attribute text here.
                        const attrSourceLocation = node.sourceCodeLocation.attrs[attr.name];
                        flushTo(attrSourceLocation.startOffset);
                        skipTo(attrSourceLocation.endOffset);
                    }
                }
                if (node.isDefinedCustomElement) {
                    // For custom elements, add an opcode to write out attributes,
                    // close the tag, and then add an opcode to write the shadow
                    // root
                    flushTo(node.sourceCodeLocation.startTag.endOffset - 1);
                    ops.push({
                        type: 'custom-element-attributes',
                    });
                    flush('>');
                    skipTo(node.sourceCodeLocation.startTag.endOffset);
                    ops.push({
                        type: 'custom-element-shadow',
                    });
                }
                else if (!hydratable &&
                    /^(title|textarea|script|style)$/.test(node.tagName)) {
                    const dangerous = isJavaScriptScriptTag(node);
                    // Marker comments in a rawtext element will be parsed as text,
                    // so we need to look at the text value of childnodes to try to
                    // find them and render child-part opcodes.
                    for (const child of node.childNodes) {
                        if (!isTextNode(child)) {
                            throw new Error(`Internal error: Unexpected child node inside raw text node, a ${node.tagName} should only contain text nodes, but found a ${node.nodeName} (tagname: ${node.tagName})`);
                        }
                        const text = child.value;
                        const textStart = child.sourceCodeLocation.startOffset;
                        flushTo(textStart);
                        const markerRegex = new RegExp(marker.replace(/\$/g, '\\$'), 'g');
                        for (const mark of text.matchAll(markerRegex)) {
                            flushTo(textStart + mark.index);
                            if (dangerous) {
                                throw new Error(`Found binding inside an executable <script> tag in a server-only template. For security reasons, this is not supported, as it could allow an attacker to execute arbitrary JavaScript. If you do need to create a script element with dynamic contents, you can use the unsafeHTML directive to make one, as that way the code is clearly marked as unsafe and needing careful handling. The template with the dangerous binding is:

    ${displayTemplateResult(result)}`);
                            }
                            if (node.tagName === 'style') {
                                throw new Error(`Found binding inside a <style> tag in a server-only template. For security reasons, this is not supported, as it could allow an attacker to exfiltrate information from the page. If you do need to create a style element with dynamic contents, you can use the unsafeHTML directive to make one, as that way the code is clearly marked as unsafe and needing careful handling. The template with the dangerous binding is:

    ${displayTemplateResult(result)}`);
                            }
                            ops.push({
                                type: 'child-part',
                                index: nodeIndex,
                                useCustomElementInstance: false,
                            });
                            skipTo(textStart + mark.index + mark[0].length);
                        }
                        flushTo(textStart + text.length);
                    }
                }
                else if (!hydratable && isTemplateNode(node)) {
                    // Server-only templates look inside of <template> nodes, because
                    // we can afford the complexity and cost, and there's way more
                    // benefit to be gained from it
                    traverse(node.content, this, node);
                }
                nodeIndex++;
            }
        },
        node(node) {
            if (isElementNode(node) && node.isDefinedCustomElement) {
                ops.push({
                    type: 'custom-element-close',
                });
            }
        },
    });
    // Flush remaining static text in the template (e.g. closing tags)
    flushTo();
    templateCache.set(result.strings, ops);
    return ops;
};
function* renderValue(value, renderInfo, hydratable = true) {
    patchIfDirective(value);
    if (s(value)) {
        // If a value was produced with renderLight(), we want to call and render
        // the renderLight() method.
        const instance = getLast(renderInfo.customElementInstanceStack);
        if (instance !== undefined) {
            const renderLightResult = instance.renderLight(renderInfo);
            if (renderLightResult !== undefined) {
                yield* renderLightResult;
            }
        }
        value = null;
    }
    else {
        value = resolveDirective(connectedDisconnectable({ type: PartType.CHILD }), value);
    }
    if (value != null && isTemplateResult(value)) {
        if (hydratable) {
            yield `<!--lit-part ${v(value)}-->`;
        }
        yield* renderTemplateResult(value, renderInfo);
        if (hydratable) {
            yield `<!--/lit-part-->`;
        }
    }
    else {
        if (hydratable) {
            yield `<!--lit-part-->`;
        }
        if (value === undefined ||
            value === null ||
            value === nothing ||
            value === noChange) ;
        else if (!isPrimitive(value) && isIterable(value)) {
            // Check that value is not a primitive, since strings are iterable
            for (const item of value) {
                yield* renderValue(item, renderInfo, hydratable);
            }
        }
        else {
            yield escapeHtml(String(value));
        }
        if (hydratable) {
            yield `<!--/lit-part-->`;
        }
    }
}
function* renderTemplateResult(result, renderInfo) {
    // In order to render a TemplateResult we have to handle and stream out
    // different parts of the result separately:
    //   - Literal sections of the template
    //   - Defined custom element within the literal sections
    //   - Values in the result
    //
    // This means we can't just iterate through the template literals and values,
    // we must parse and traverse the template's HTML. But we don't want to pay
    // the cost of serializing the HTML node-by-node when we already have the
    // template in string form. So we parse with location info turned on and use
    // that to index into the HTML string generated by TemplateResult.getHTML().
    // During the tree walk we will handle expression marker nodes and custom
    // elements. For each we will record the offset of the node, and output the
    // previous span of HTML.
    const hydratable = isHydratable(result);
    const ops = getTemplateOpcodes(result);
    /* The next value in result.values to render */
    let partIndex = 0;
    for (const op of ops) {
        switch (op.type) {
            case 'text':
                yield op.value;
                break;
            case 'child-part': {
                const value = result.values[partIndex++];
                let isValueHydratable = hydratable;
                if (isTemplateResult(value)) {
                    isValueHydratable = isHydratable(value);
                    if (!isValueHydratable && hydratable) {
                        throw new Error(`A server-only template can't be rendered inside an ordinary, hydratable template. A server-only template can only be rendered at the top level, or within other server-only templates. The outer template was:
    ${displayTemplateResult(result)}

And the inner template was:
    ${displayTemplateResult(value)}
              `);
                    }
                }
                yield* renderValue(value, renderInfo, isValueHydratable);
                break;
            }
            case 'attribute-part': {
                const statics = op.strings;
                const part = new op.ctor(
                // Passing only object with tagName for the element is fine since the
                // directive only gets PartInfo without the node available in the
                // constructor
                { tagName: op.tagName }, op.name, statics, connectedDisconnectable(), {});
                const value = part.strings === undefined ? result.values[partIndex] : result.values;
                patchAnyDirectives(part, value, partIndex);
                let committedValue = noChange;
                // Values for EventParts are never emitted
                if (!(part.type === PartType.EVENT)) {
                    committedValue = getAttributePartCommittedValue(part, value, partIndex);
                }
                // We don't emit anything on the server when value is `noChange` or
                // `nothing`
                if (committedValue !== noChange) {
                    const instance = op.useCustomElementInstance
                        ? getLast(renderInfo.customElementInstanceStack)
                        : undefined;
                    if (part.type === PartType.PROPERTY) {
                        yield* renderPropertyPart(instance, op, committedValue);
                    }
                    else if (part.type === PartType.BOOLEAN_ATTRIBUTE) {
                        // Boolean attribute binding
                        yield* renderBooleanAttributePart(instance, op, committedValue);
                    }
                    else {
                        yield* renderAttributePart(instance, op, committedValue);
                    }
                }
                partIndex += statics.length - 1;
                break;
            }
            case 'element-part': {
                // We don't emit anything for element parts (since we only support
                // directives for now; since they can't render, we don't even bother
                // running them), but we still need to advance the part index
                partIndex++;
                break;
            }
            case 'custom-element-open': {
                // Instantiate the element and its renderer
                const instance = getElementRenderer(renderInfo, op.tagName, op.ctor, op.staticAttributes);
                // Set static attributes to the element renderer
                for (const [name, value] of op.staticAttributes) {
                    instance.setAttribute(name, value);
                }
                renderInfo.customElementInstanceStack.push(instance);
                renderInfo.customElementRendered?.(op.tagName);
                break;
            }
            case 'custom-element-attributes': {
                const instance = getLast(renderInfo.customElementInstanceStack);
                if (instance === undefined) {
                    throw new Error(`Internal error: ${op.type} outside of custom element context`);
                }
                // Perform any connect-time work via the renderer (e.g. reflecting any
                // properties to attributes, for example)
                if (instance.connectedCallback) {
                    instance.connectedCallback();
                }
                // Render out any attributes on the instance (both static and those
                // that may have been dynamically set by the renderer)
                yield* instance.renderAttributes();
                // If deferHydration flag is true or if this element is nested in
                // another, add the `defer-hydration` attribute, so that it does not
                // enable before the host element hydrates
                if (renderInfo.deferHydration ||
                    renderInfo.customElementHostStack.length > 0) {
                    yield ' defer-hydration';
                }
                break;
            }
            case 'possible-node-marker': {
                // Add a node marker if this element had attribute bindings or if it
                // was nested in another and we rendered the `defer-hydration` attribute
                // since the hydration node walk will need to stop at this element
                // to hydrate it
                if (op.boundAttributesCount > 0 ||
                    renderInfo.customElementHostStack.length > 0) {
                    if (hydratable) {
                        yield `<!--lit-node ${op.nodeIndex}-->`;
                    }
                }
                break;
            }
            case 'custom-element-shadow': {
                const instance = getLast(renderInfo.customElementInstanceStack);
                if (instance === undefined) {
                    throw new Error(`Internal error: ${op.type} outside of custom element context`);
                }
                renderInfo.customElementHostStack.push(instance);
                const shadowContents = instance.renderShadow(renderInfo);
                // Only emit a DSR if renderShadow() emitted something (returning
                // undefined allows effectively no-op rendering the element)
                if (shadowContents !== undefined) {
                    const { mode = 'open', delegatesFocus } = instance.shadowRootOptions ?? {};
                    // `delegatesFocus` is intentionally allowed to coerce to boolean to
                    // match web platform behavior.
                    const delegatesfocusAttr = delegatesFocus
                        ? ' shadowrootdelegatesfocus'
                        : '';
                    yield `<template shadowroot="${mode}" shadowrootmode="${mode}"${delegatesfocusAttr}>`;
                    yield* shadowContents;
                    yield '</template>';
                }
                renderInfo.customElementHostStack.pop();
                break;
            }
            case 'custom-element-close':
                renderInfo.customElementInstanceStack.pop();
                break;
            default:
                throw new Error('internal error');
        }
    }
    if (partIndex !== result.values.length) {
        throwErrorForPartIndexMismatch(partIndex, result);
    }
}
function throwErrorForPartIndexMismatch(partIndex, result) {
    const errorMsg = `
    Unexpected final partIndex: ${partIndex} !== ${result.values.length} while processing the following template:

    ${displayTemplateResult(result)}

    This could be because you're attempting to render an expression in an invalid location. See
    https://lit.dev/docs/templates/expressions/#invalid-locations for more information about invalid expression
    locations.
  `;
    throw new Error(errorMsg);
}
function* renderPropertyPart(instance, op, value) {
    value = value === nothing ? undefined : value;
    // Property should be reflected to attribute
    const reflectedName = reflectedAttributeName(op.tagName, op.name);
    if (instance !== undefined) {
        instance.setProperty(op.name, value);
    }
    if (reflectedName !== undefined) {
        yield `${reflectedName}="${escapeHtml(String(value))}"`;
    }
}
function* renderBooleanAttributePart(instance, op, value) {
    if (value && value !== nothing) {
        if (instance !== undefined) {
            instance.setAttribute(op.name, '');
        }
        else {
            yield op.name;
        }
    }
}
function* renderAttributePart(instance, op, value) {
    if (value !== nothing) {
        if (instance !== undefined) {
            instance.setAttribute(op.name, String(value ?? ''));
        }
        else {
            yield `${op.name}="${escapeHtml(String(value ?? ''))}"`;
        }
    }
}
/**
 * Returns a debug string suitable for an error message describing a
 * TemplateResult.
 */
function displayTemplateResult(result) {
    if (isCompiledTemplateResult(result)) {
        return result._$litType$.h.join('${...}');
    }
    return result.strings.join('${...}');
}
const getLast = (a) => a[a.length - 1];
/**
 * Returns true if the given node is a <script> node that the browser will
 * automatically execute if it's rendered on server-side, outside of a
 * <template> tag.
 */
function isJavaScriptScriptTag(node) {
    function isScriptTag(node) {
        return /script/i.test(node.tagName);
    }
    if (!isScriptTag(node)) {
        return false;
    }
    let safeTypeSeen = false;
    for (const attr of node.attrs) {
        if (attr.name !== 'type') {
            continue;
        }
        switch (attr.value) {
            // see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript
            case null:
            case undefined:
            case '':
            case 'module':
            case 'text/javascript':
            case 'application/javascript':
            case 'application/ecmascript':
            case 'application/x-ecmascript':
            case 'application/x-javascript':
            case 'text/ecmascript':
            case 'text/javascript1.0':
            case 'text/javascript1.1':
            case 'text/javascript1.2':
            case 'text/javascript1.3':
            case 'text/javascript1.4':
            case 'text/javascript1.5':
            case 'text/jscript':
            case 'text/livescript':
            case 'text/x-ecmascript':
            case 'text/x-javascript':
                // If we see a dangerous type, we can stop looking
                return true;
            default:
                safeTypeSeen = true;
        }
    }
    // So, remember that attributes can be repeated. If we saw a dangerous type,
    // then we would have returned early. However, if there's no type, then
    // that's dangerous.
    // It's only if all types seen were safe, and we saw at least one type, that
    // we can return false.
    const willExecute = !safeTypeSeen;
    return willExecute;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { attributeToProperty, changedProperties } = e$1;
/**
 * ElementRenderer implementation for LitElements
 */
class LitElementRenderer extends ElementRenderer {
    static matchesClass(ctor) {
        // This property needs to remain unminified.
        return ctor['_$litElement$'];
    }
    constructor(tagName) {
        super(tagName);
        this.element = new (customElements.get(this.tagName))();
        // Reflect internals AOM attributes back to the DOM prior to hydration to
        // ensure search bots can accurately parse element semantics prior to
        // hydration. This is called whenever an instance of ElementInternals is
        // created on an element to wire up the getters/setters for the ARIAMixin
        // properties.
        const internals = this.element.__internals;
        if (internals) {
            for (const [ariaProp, ariaAttribute] of Object.entries(ariaMixinAttributes)) {
                const value = internals[ariaProp];
                if (value && !this.element.hasAttribute(ariaAttribute)) {
                    this.element.setAttribute(ariaAttribute, value);
                    this.element.setAttribute(`${HYDRATE_INTERNALS_ATTR_PREFIX}${ariaAttribute}`, value);
                }
            }
        }
    }
    get shadowRootOptions() {
        return (this.element.constructor.shadowRootOptions ??
            super.shadowRootOptions);
    }
    connectedCallback() {
        // Call LitElement's `willUpdate` method.
        // Note, this method is required not to use DOM APIs.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.element?.willUpdate(changedProperties(this.element));
        // Reflect properties to attributes by calling into ReactiveElement's
        // update, which _only_ reflects attributes
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ReactiveElement.prototype.update.call(this.element);
    }
    attributeChangedCallback(name, _old, value) {
        attributeToProperty(this.element, name, value);
    }
    *renderShadow(renderInfo) {
        // Render styles.
        const styles = this.element.constructor
            .elementStyles;
        if (styles !== undefined && styles.length > 0) {
            yield '<style>';
            for (const style of styles) {
                yield style.cssText;
            }
            yield '</style>';
        }
        // Render template
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        yield* renderValue(this.element.render(), renderInfo);
    }
    *renderLight(renderInfo) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const value = this.element?.renderLight();
        if (value) {
            yield* renderValue(value, renderInfo);
        }
        else {
            yield '';
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Renders a lit-html template (or any renderable lit-html value) to a string
 * iterator. Any custom elements encountered will be rendered if a matching
 * ElementRenderer is found.
 *
 * This method is suitable for streaming the contents of the element.
 *
 * @param value Value to render
 * @param renderInfo Optional render context object that should be passed
 *   to any reentrant calls to `render`, e.g. from a `renderShadow` callback
 *   on an ElementRenderer.
 */
function* render(value, renderInfo) {
    const defaultRenderInfo = {
        elementRenderers: [LitElementRenderer],
        customElementInstanceStack: [],
        customElementHostStack: [],
        deferHydration: false,
    };
    renderInfo = { ...defaultRenderInfo, ...renderInfo };
    let hydratable = true;
    if (e(value)) {
        hydratable = isHydratable(value);
    }
    yield* renderValue(value, renderInfo, hydratable);
}

/**
 * Used for user provided modules with unknown/possibly malformed shapes.
 * Avoid this for well typed sources.
 */
function isUnknownObject(input) {
    return typeof input === 'object' && input !== null && !Array.isArray(input);
}
function isLitTemplate(input) {
    return ((typeof input === 'object' &&
        input &&
        '_$litType$' in input &&
        // eslint-disable-next-line no-underscore-dangle
        input._$litType$ === 1 &&
        'strings' in input &&
        Array.isArray(input.strings)) ||
        false);
}
function isLitServerTemplate(input) {
    return (isLitTemplate(input) &&
        '_$litServerRenderMode' in input &&
        // eslint-disable-next-line no-underscore-dangle
        input._$litServerRenderMode === 1);
}

function errorPage(error) {
    return html$1 `
		<!--  -->

		<!doctype html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<title>Error</title>
			</head>
			<body>
				<style>
					html {
						color-scheme: dark;
						font-size: 16px;
						line-height: 1.23rem;
						font-family: system-ui;
					}
					body {
						padding: 1rem;
					}

					pre {
						padding: 1rem;

						overflow-y: auto;
					}
					button {
						font-size: 2rem;
					}

					h1 {
						color: tomato;
					}
				</style>

				<main>
					<h1>😵 An error has occurred!</h1>
					<button id="reload">Reload</button>
					<!--  -->
					<hr />

					<pre>${error.stack}</pre>
					<!-- <pre>$ {e.name}</pre> -->
					<!-- <pre>$ {e.message}</pre> -->
					<!-- <pre>$ {e.cause}</pre> -->
					<hr />
				</main>

				<script>
					reload.addEventListener('click', () => document.location.reload());
				</script>
			</body>
		</html>
	`;
}

/**
 * Useful for tricking various languages IDE extensions.
 *
 * For syntax highlighting, formatting with Prettier, static analysis…
 *
 * This will just do string concatenation, plus auto-joining if a string array
 * is provided inside a template interpolation.
 */
function dummyLiteral(templateStrings, ...args) {
    return templateStrings
        .map((templateString, index) => templateString +
        // TODO: Fix types
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        (Array.isArray(args[index]) ? args[index].join('') : args[index] || ''))
        .join('');
}
/**
 * ```ts
 * const myHtml = html`
 * <span>Hello</span>
 * `;
 * ```
 *
 * VSCode extension: `bierner.lit-html`
 *
 * \> [!TIP]
 * \> You might want also to checkout [Lit server-side only `html` template rendering](https://github.com/lit/lit/tree/350147d608cc34fe926dd2bced0e25748c726c59/packages/labs/ssr#server-only-templates).
 */
const html = dummyLiteral;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Joins a RenderResult into a string
 */
const collectResult = async (result) => {
    let value = '';
    for (const chunk of result) {
        value +=
            typeof chunk === 'string' ? chunk : await collectResult(await chunk);
    }
    return value;
};

async function* concatStreams(...readables) {
    // eslint-disable-next-line no-restricted-syntax
    for (const readable of readables) {
        // eslint-disable-next-line no-restricted-syntax, no-await-in-loop
        for await (const chunk of readable) {
            yield chunk;
        }
    }
}
// export const SSR_OUTLET_MARKER = '________SSR_OUTLET________';
const SSR_OUTLET_MARKER = '<route-template-outlet></route-template-outlet>';
// const SSR_OUTLET = unsafeHTML(SSR_OUTLET_MARKER);
const PAGE_ASSETS_MARKER = '<!--__GRACILE_PAGE_ASSETS__-->';
// FIXME: cannot be used with `unsafeHTML`, so must be duplicated…
const pageAssets = html$1 `<!--__GRACILE_PAGE_ASSETS__-->`;
const REGEX_TAG_SCRIPT = /\s?<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script\s*>\s?/gi;
const REGEX_TAG_LINK = /\s?<link\b[^>]*?>\s?/gi;
async function renderRouteTemplate({ request, vite, mode, routeInfos, handlerInfos, routeAssets, 
// root,
serverMode, }) {
    if (!routeInfos.routeModule.document && !routeInfos.routeModule.template)
        return { output: null };
    // MARK: Context
    const context = {
        url: new URL(request.url),
        params: routeInfos.params,
        props: handlerInfos?.data
            ? {
                [handlerInfos.method]: handlerInfos.data,
            }
            : routeInfos.props,
    };
    // MARK: Fragment
    if (!routeInfos.routeModule.document && routeInfos.routeModule.template) {
        const fragmentOutput = await Promise.resolve(routeInfos.routeModule.template?.(context));
        if (isLitTemplate(fragmentOutput) === false)
            throw Error(`Wrong template result for fragment template ${routeInfos.foundRoute.filePath}.`);
        const fragmentRender = render(fragmentOutput);
        const output = Readable.from(fragmentRender);
        return { output };
    }
    // MARK: Document
    if (!routeInfos.routeModule.document ||
        typeof routeInfos.routeModule.document !== 'function')
        throw new TypeError(`Route document must be a function ${routeInfos.foundRoute.filePath}.`);
    const baseDocTemplateResult = await Promise.resolve(routeInfos.routeModule.document?.(context));
    if (isLitServerTemplate(baseDocTemplateResult) === false)
        throw new TypeError(`Incorrect document template result for ${routeInfos.foundRoute.filePath}.`);
    const baseDocRendered = await collectResult(render(baseDocTemplateResult));
    // MARK: Sibling assets
    let baseDocRenderedWithAssets = baseDocRendered.replace(PAGE_ASSETS_MARKER, html `
			<!-- PAGE ASSETS -->
			${routeInfos.foundRoute.pageAssets.map((path) => {
        //
        if (/\.(js|ts)$/.test(path)) {
            return html `
						<script type="module" src="/${path}"></script>
						<!--  -->
					`;
        }
        if (/\.(scss|css)$/.test(path)) {
            return html `
						<link rel="stylesheet" href="/${path}" />
						<!--  -->
					`;
        }
        throw new Error('Unknown asset.');
    })}
			<!-- /PAGE ASSETS -->
		`);
    const routeAssetsString = routeAssets?.get?.(routeInfos.foundRoute.pattern.pathname);
    if (routeAssetsString)
        baseDocRenderedWithAssets = baseDocRenderedWithAssets
            .replace(REGEX_TAG_SCRIPT, (s) => {
            if (s.includes(`type="module"`))
                return '';
            return s;
        })
            .replace(REGEX_TAG_LINK, (s) => {
            if (s.includes(`rel="stylesheet"`))
                return '';
            return s;
        })
            .replace('</head>', `${routeAssetsString}\n</head>`);
    // MARK: Base document
    const baseDocHtml = vite && mode === 'dev'
        ? await vite.transformIndexHtml(
        // HACK: Sometimes, we need to invalidate for server asset url
        // imports to work. So we keep this hack around just in case.
        // Maybe it's linked to the way hashed assets are invalidating
        // the html proxy module…
        // `${routeInfos.pathname}?r=${Math.random()}`,
        routeInfos.pathname, baseDocRenderedWithAssets)
        : baseDocRenderedWithAssets;
    const index = baseDocHtml.indexOf(SSR_OUTLET_MARKER);
    const baseDocRenderStreamPre = Readable.from(baseDocHtml.substring(0, index));
    const baseDocRenderStreamPost = Readable.from(baseDocHtml.substring(index + SSR_OUTLET_MARKER.length + 1));
    // MARK: Page
    // Skipped with server mode in production build
    if ((serverMode === false && routeInfos.routeModule.template) ||
        //
        (serverMode &&
            routeInfos.routeModule.template &&
            (mode !== 'build' || routeInfos.routeModule.prerender === true))) {
        const routeOutput = await Promise.resolve(routeInfos.routeModule.template?.(context));
        if (isLitTemplate(routeOutput) === false)
            throw Error(`Wrong template result for page template ${routeInfos.foundRoute.filePath}.`);
        const renderStream = Readable.from(render(routeOutput));
        const output = Readable.from(concatStreams(baseDocRenderStreamPre, renderStream, baseDocRenderStreamPost));
        return { output };
    }
    // MARK: Just the document
    const output = Readable.from(baseDocHtml);
    return { output };
}

async function renderSsrTemplate(template) {
    return collectResult(render(template));
}

/* eslint-disable @typescript-eslint/no-explicit-any */
// export type KnownMethod = typeof knownMethods[number];
// TODO: put in engine
class RouteModule {
    #staticPaths;
    get staticPaths() {
        return this.#staticPaths;
    }
    #locals;
    get locals() {
        return this.#locals;
    }
    #handler;
    get handler() {
        return this.#handler;
    }
    #document;
    get document() {
        return this.#document;
    }
    #prerender;
    get prerender() {
        return this.#prerender;
    }
    #template;
    get template() {
        return this.#template;
    }
    constructor(options) {
        if (typeof options.staticPaths === 'function')
            this.#staticPaths = options.staticPaths;
        if ((typeof options.handler === 'object' ||
            typeof options.handler === 'function') &&
            options.handler)
            this.#handler = options.handler;
        this.#locals = options.locals;
        if (typeof options.template === 'function')
            this.#template = options.template;
        if (typeof options.document === 'function')
            this.#document = options.document;
        if (typeof options.prerender === 'boolean')
            this.#prerender = options.prerender;
    }
}

async function loadForeignRouteObject({ vite, route, routeImports, }) {
    // NOTE: Check and assert unknown userland module to correct RouteModule instance (in the engine's realm)
    let unknownRouteModule = null;
    if (vite)
        unknownRouteModule = await vite.ssrLoadModule(route.filePath);
    else if (routeImports) {
        const ri = routeImports.get(route.pattern.pathname);
        if (ri)
            unknownRouteModule = await Promise.resolve(ri());
    }
    if (unknownRouteModule === null)
        throw new Error('Cannot find route module.');
    const routeModuleFactory = unknownRouteModule['default'];
    const errorBase = `Incorrect route module ${route.filePath}!`;
    if (typeof routeModuleFactory !== 'function')
        throw new TypeError(`${errorBase} Not a function.`);
    const routeModule = routeModuleFactory(RouteModule);
    if (routeModule instanceof RouteModule === false)
        throw new TypeError(`${errorBase} Not a RouteModule.`);
    return routeModule;
}

// FIXME: proper DI for routes
function matchRouteFromUrl(url, routes) {
    let match;
    let foundRoute;
    const pathname = new URL(url).pathname;
    // eslint-disable-next-line no-restricted-syntax
    for (const [, route] of routes) {
        if (match)
            break;
        const matchResult = route.pattern.exec(`http://gracile${pathname}`) || undefined;
        if (matchResult) {
            match = matchResult;
            foundRoute = route;
        }
    }
    if (!match || !foundRoute)
        throw new Error(`No route matching for ${url}`, { cause: 404 });
    const params = match.pathname?.groups;
    return { match, foundRoute, params, pathname };
}
function extractStaticPaths(options) {
    if (!options.foundRoute.hasParams)
        return null;
    if (!options.routeModule.staticPaths)
        return null;
    const routeStaticPaths = options.routeModule.staticPaths;
    let props;
    const staticPaths = routeStaticPaths();
    let hasCorrectParams = false;
    staticPaths.forEach((providedRouteOptions) => {
        const routeOptions = providedRouteOptions;
        const matchingKeys = Object.entries(routeOptions.params).filter(([key, val]) => options.params[key] === val);
        if (matchingKeys.length === Object.keys(options.params).length) {
            hasCorrectParams = true;
            if (routeOptions.props)
                props = routeOptions.props;
        }
    });
    if (hasCorrectParams === false)
        throw new Error(`Incorrect route parameters for \`${options.pathname}\`.\n` +
            `Check \`staticPaths\` for \`${options.foundRoute.filePath}\`.`);
    return { staticPaths, props };
}
async function getRoute(options) {
    const { foundRoute, pathname, params } = matchRouteFromUrl(options.url, options.routes);
    // TODO: Simplify all the routes things
    const routeModule = await loadForeignRouteObject({
        vite: options.vite,
        route: foundRoute,
        routeImports: options.routeImports,
    });
    const staticPaths = extractStaticPaths({
        routeModule,
        foundRoute,
        pathname,
        params,
    });
    return {
        params,
        props: staticPaths?.props,
        routeModule,
        foundRoute,
        pathname,
    };
}

// NOTE: Find a more canonical way to ponyfill the Node HTTP request to standard Request
// @ts-expect-error Abusing this feature!
const adapter = createServerAdapter((request) => request);
function createGracileMiddleware({ vite, routes, routeImports, routeAssets, root, serverMode, }) {
    const middleware = async (req, res, next) => {
        // Typing workaround
        if (!req.url)
            throw Error('Incorrect url');
        if (!req.method)
            throw Error('Incorrect method');
        logger.info(`[${c$3.yellow(req.method)}] ${c$3.yellow(req.url)}`, {
            timestamp: true,
        });
        // MARK: Skip unwanted requests
        if (
        //
        req.url.endsWith('favicon.ico') ||
            req.url.endsWith('favicon.svg'))
            return next();
        const requestPonyfilled = (await Promise.resolve(adapter.handleNodeRequest(req)));
        async function renderPageFn(handlerInfos, routeInfos) {
            const { output } = await renderRouteTemplate({
                request: requestPonyfilled,
                vite,
                mode: 'dev',
                routeInfos,
                handlerInfos,
                routeAssets,
                root,
                serverMode,
            });
            return output || undefined;
        }
        try {
            // MARK: Get route infos
            const moduleInfos = await getRoute({
                url: requestPonyfilled.url,
                vite,
                routes,
                routeImports,
            });
            let output;
            // TODO: should move this to `special-file` so we don't recalculate on each request
            // + we would be able to do some route codegen.
            const response = {};
            // NOTE: Only for Express for now.
            let locals = {};
            if ('locals' in res && isUnknownObject(res.locals))
                locals = res.locals;
            // MARK: Server handler
            const handler = moduleInfos.routeModule.handler;
            if ('handler' in moduleInfos.routeModule &&
                typeof handler !== 'undefined') {
                const options = {
                    request: requestPonyfilled,
                    url: new URL(requestPonyfilled.url),
                    response,
                    params: moduleInfos.params,
                    locals,
                };
                // MARK: Top level handler
                if (typeof handler === 'function') {
                    const handlerOutput = (await Promise.resolve(handler(options)));
                    if (handlerOutput instanceof Response)
                        output = handlerOutput;
                    else
                        throw new TypeError('Catch-all handler must return a Response object.');
                    // MARK: Handler with method
                }
                else if (requestPonyfilled.method in handler) {
                    const handlerWithMethod = handler[requestPonyfilled.method];
                    if (typeof handlerWithMethod !== 'function')
                        throw TypeError('Handler must be a function.');
                    const handlerOutput = await Promise.resolve(handlerWithMethod(options));
                    if (handlerOutput instanceof Response)
                        output = handlerOutput;
                    else {
                        output = await renderPageFn({
                            data: handlerOutput,
                            method: requestPonyfilled.method,
                        }, moduleInfos);
                    }
                    // MARK: No GET, render page
                }
                else if (handler &&
                    'GET' in handler === false &&
                    requestPonyfilled.method === 'GET') {
                    output = await renderPageFn({ data: null, method: 'GET' }, moduleInfos);
                }
                // MARK: No handler, render page
            }
            else {
                output = await renderPageFn({ data: null, method: 'GET' }, moduleInfos);
            }
            // MARK: Return response
            // NOTE: try directly with the requestPonyfill. This might not be necessary
            if (output instanceof Response) {
                if (output.status >= 300 && output.status <= 303) {
                    const location = output.headers.get('location');
                    // if (location) return res.redirect(location);
                    if (location) {
                        res.statusCode = output.status;
                        res.setHeader('location', location);
                        return res.end(`Found. Redirecting to ${location}`);
                    }
                }
                output.headers?.forEach((content, header) => res.setHeader(header, content));
                if (output.status)
                    res.statusCode = output.status;
                if (output.statusText)
                    res.statusMessage = output.statusText;
                // TODO: use this with page only?
                // if (output.bodyUsed === false)
                //   throw new Error('Missing body.');
                if (output.body)
                    output.body
                        .pipeTo(Writable.toWeb(res))
                        .catch((e) => logger.error(String(e)));
                // else throw new Error('Missing body.');
                else
                    return res.end(output);
                // MARK: Stream page render
            }
            else {
                new Headers(response.headers)?.forEach((content, header) => res.setHeader(header, content));
                if (response.status)
                    res.statusCode = response.status;
                if (response.statusText)
                    res.statusMessage = response.statusText;
                res.setHeader('Content-Type', 'text/html');
                // MARK: Page stream error
                output
                    ?.on('error', (error) => {
                    const errorMessage = `There was an error while rendering a template chunk on server-side.\n` +
                        `It was omitted from the resulting HTML.`;
                    logger.error(errorMessage);
                    logger.error(error.message);
                    res.statusCode = 500;
                    res.statusMessage = errorMessage;
                    /* NOTE: Safety closing tags, maybe add more */
                    // Maybe just returning nothing is better to not break the page?
                    // Should send a overlay message anyway via WebSocket
                    // vite.ws.send()
                    if (vite)
                        setTimeout(() => {
                            vite.hot.send('gracile:ssr-error', {
                                message: errorMessage,
                            });
                        }, 500);
                    res.end('' /* errorInline(error) */);
                })
                    .pipe(res);
            }
            // MARK: Errors
        }
        catch (e) {
            const error = e;
            if (vite)
                vite.ssrFixStacktrace(error);
            // else
            logger.error(error.message);
            if (error.cause === 404) {
                // TODO: Handle 404 with dedicated page
                if (!vite)
                    return next();
                res.statusCode = 404;
                return res.end('404');
                // TODO: use a nice framework service page
                // .redirect(new URL('/__404/', requestPonyfilled.url).href)
            }
            let errorTemplate = await renderSsrTemplate(errorPage(error));
            if (vite)
                errorTemplate = await vite.transformIndexHtml(req.url, errorTemplate);
            res.statusCode = 500;
            return res.end(errorTemplate);
        }
        return next();
    };
    return middleware;
}

// NOTE: Util. to pretty print for user provided server.
function printNodeHttpServerAddressInfos(instance) {
    const infos = instance.address();
    logger.info(c$3.green(`${'production'} server started`), {
        timestamp: true,
    });
    if (typeof infos === 'object' && infos && infos.port && infos.address) {
        logger.info(`
${c$3.dim('┃')} Local    ${c$3.cyan(`http://localhost:${infos.port}/`)}` +
            `${infos.address === IP_EXPOSED
                ? `${c$3.dim('┃')} Network  ${c$3.cyan(`http://${infos.address}:${infos.port}/`)}`
                : ''}
`);
        return infos;
    }
    throw Error('Invalid address/port.');
}

routes.forEach((route, pattern) => {
    routes.set(pattern, {
        ...route,
        pattern: new URLPattern(pattern, 'http://gracile'),
    });
});
const createHandlers = async ({ root = process.cwd(),
// hmrPort,
// NOTE: We need type parity with the dev. version of this function
// eslint-disable-next-line @typescript-eslint/require-await
 } = {}) => {
    setCurrentWorkingDirectory(root);
    const gracileHandler = createGracileMiddleware({
        root,
        routes,
        routeImports,
        routeAssets,
        serverMode: true,
    });
    return { handlers: [gracileHandler /* as RequestHandler */], vite: null };
};

const authentication = (req, res, next) => {
  const b64 = req.headers.authorization?.split(" ")?.[1];
  if (b64) {
    const [user, pass] = Buffer.from(b64, "base64").toString().split(":");
    if (user === "admin" && pass === "password")
      return next();
  }
  res.setHeader("WWW-Authenticate", "Basic");
  res.statusCode = 401;
  res.statusMessage = "You are not authenticated!";
  return res.end(res.statusMessage);
};

const app = express();
const { handlers } = await createHandlers();
app.use(express.static(PUBLIC_DIR));
app.use(
  "/api",
  (_req, res, _next) => res.json({
    hello: `world - ${Math.random()}`
  })
);
app.use((_req, res, next) => {
  const traceId = crypto.randomUUID();
  res.locals.traceId = traceId;
  next();
});
app.use("/private/", authentication);
app.use(handlers);
const server = app.listen(3030, IP_LOCALHOST, () => {
  printNodeHttpServerAddressInfos(server);
});

export { app, html$1 as h, pageAssets as p };
//# sourceMappingURL=server.js.map
