(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"5/jd":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var s=n("fXoL"),r=n("ofXK"),i=n("sep5"),o=n("jhN1");let a=(()=>{class e{static forRoot(t){return{ngModule:e}}}return e.\u0275mod=s.Bb({type:e}),e.\u0275inj=s.Ab({factory:function(t){return new(t||e)},providers:[{provide:s.E,useClass:i.a,deps:[o.b,o.d,s.c,s.z]}],imports:[[r.b]]}),e})()},"CCc+":function(e,t,n){"use strict";function s(e){e.isCanvasComponent=!0}n.d(t,"a",(function(){return s}))},"M8p+":function(e,t,n){"use strict";function s(e){return Array.from(e.values()).filter(e=>e&&!!e.draw)}n.d(t,"a",(function(){return r}));let r=(()=>{class e{constructor(e,t){this.ngZone=e,this.config=t,this.componentSet=new Set,this.componentsDrawings=[],this.element=document.createElement("canvas"),this.element.style.position="absolute",this.context=this.element.getContext("2d"),this._height=this.element.height,this._width=this.element.width,this.ngZone.runOutsideAngular(()=>{window.requestAnimationFrame(e=>this.draw(e))})}get width(){return this._width}get height(){return this._height}set parent(e){this._parentElement=e,this.subResizeEvent()}subResizeEvent(){this._parentElement&&this.resizeObserver&&this.resizeObserver.unobserve(this._parentElement),this.resizeObserver=new ResizeObserver(([e])=>{const t=window.devicePixelRatio||1;let n=e.contentRect.width,s=e.contentRect.height;n&&s&&(n=parseInt(n,10),s=parseInt(s,10));let r=!1;this._width!==n&&(this._width=n,this.element.width=n*t,this.element.style.width=n+"px",r=!0),this._height!==s&&(this._height=s,this.element.height=s*t,this.element.style.height=s+"px",r=!0),r&&(1!==t&&this.context.scale(t,t),this.drawWithoutRequestAnimation())}),this.resizeObserver.observe(this._parentElement)}resetCanvasSize(){const e=window.devicePixelRatio||1;this.element.width=this._width*e,this.element.style.width=this._width+"px",this.element.height=this._height*e,this.element.style.height=this._height+"px"}get parent(){return this._parent}destroy(){this.resizeObserver&&this._parentElement&&this.resizeObserver.unobserve(this._parentElement),this.componentSet.clear(),this.componentsDrawings=null,this.element&&this.element.remove()}addClass(e){this.element.setAttribute("class",e)}appendChild(e){e.onInit&&e.onInit(this.context),this.componentSet.add(e),this.componentsDrawings=s(this.componentSet),this.drawAll()}removeChild(e){e.onDestroy&&e.onDestroy(this.context),this.componentSet.delete(e),this.componentsDrawings=s(this.componentSet),this.drawAll()}insertBefore(e,t){this.componentSet.add(e),this.componentsDrawings=s(this.componentSet),this.drawAll()}recalculateElementsDraw(){this.componentsDrawings=s(this.componentSet)}removeAttribute(e,t){this.element.removeAttribute(e)}removeClass(e){this.element.classList.remove(e)}removeStyle(e,t){}setAttribute(e,t){this.element.setAttribute(e,t)}setNgAttribute(e,t,n){this.element.setAttribute(e,t)}setNgProperty(e,t){}setStyle(e,t,n){}setValue(e){}drawAll(e){this.ngZone.runOutsideAngular(()=>{this.requestId&&window.cancelAnimationFrame(this.requestId),this.requestId=window.requestAnimationFrame(t=>{this.draw(t,e),this.requestId=null})})}drawWithoutRequestAnimation(){this.ngZone.runOutsideAngular(()=>{this.draw(0,!1),this.requestId=null})}draw(e,t=!0){const n=this.context;t&&n.clearRect(0,0,this.width,this.height);let s=!1;const r=this.componentsDrawings&&this.componentsDrawings.length;if(r){for(let t=0;t<r;t++)this.componentsDrawings[t].draw(n,e),s=s||this.componentsDrawings[t].needDraw;s&&(this.requestId&&window.cancelAnimationFrame(this.requestId),this.requestId=window.requestAnimationFrame(e=>this.draw(e)))}}}return e.nodeName="canvas",e})()},WIm8:function(e,t,n){"use strict";function s(){return window.canvasRendererMetadataArgsStorage||(window.canvasRendererMetadataArgsStorage=new r),window.canvasRendererMetadataArgsStorage}n.d(t,"a",(function(){return s}));class r{constructor(){this.elements=new Map}}},"luQ/":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var s=n("WIm8");function r(e){return function(t){Object(s.a)().elements.set(e.selector,t)}}},mrSG:function(e,t,n){"use strict";function s(e,t,n,s){var r,i=arguments.length,o=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(i<3?r(o):i>3?r(t,n,o):r(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}n.d(t,"a",(function(){return s}))},"npB/":function(e,t,n){"use strict";var s=n("5/jd");n.d(t,"CanvasDomModule",(function(){return s.a}));var r=n("CCc+");n.d(t,"CanvasComponent",(function(){return r.a}));var i=n("luQ/");n.d(t,"CanvasElement",(function(){return i.a})),n("sep5"),n("WIm8"),n("wMPD"),n("M8p+")},sep5:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var s=n("fXoL"),r=n("M8p+");const i={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},o=/%COMP%/g;function a(e){return"_ngcontent-%COMP%".replace(o,e)}function h(e){return"_nghost-%COMP%".replace(o,e)}function d(e,t,n){for(let s=0;s<t.length;s++){let r=t[s];Array.isArray(r)?d(e,r,n):(r=r.replace(o,e),n.push(r))}return n}const l=window.ngDevMode,c=void 0===l||!!l;function u(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}class m{constructor(e){this.eventManager=e,this.data=Object.create(null)}destroy(){}createElement(e,t){return t?document.createElementNS(i[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){e.appendChild(t)}insertBefore(e,t,n){e&&e.insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){const n="string"==typeof e?document.querySelector(e):e;if(!n)throw new Error(`The selector "${e}" did not match any elements`);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,s){if(s){t=s+":"+t;const r=i[s];r?e.setAttributeNS(r,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){const s=i[n];s?e.removeAttributeNS(s,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&(s.F.DashCase|s.F.Important)?e.style.setProperty(t,n,r&s.F.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&s.F.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){c&&w(t,"property"),e[t]=n}setValue(e,t){e.nodeValue=t}listen(e,t,n){return c&&w(t,"listener"),"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,u(n)):this.eventManager.addEventListener(e,t,u(n))}}const p="@".charCodeAt(0);function w(e,t){if(e.charCodeAt(0)===p)throw new Error(`Found the synthetic ${t} ${e}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`)}class f extends m{constructor(e,t,n,s){super(e),this.component=n;const r=d(s+"-"+n.id,n.styles,[]);t.addStyles(r),this.contentAttr=a(s+"-"+n.id),this.hostAttr=h(s+"-"+n.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}}class v extends m{constructor(e,t,n,r){super(e),this.sharedStylesHost=t,this.hostEl=n,this.component=r,this.shadowRoot=r.encapsulation===s.P.ShadowDom?n.attachShadow({mode:"open"}):n.createShadowRoot(),this.sharedStylesHost.addHost(this.shadowRoot);const i=d(r.id,r.styles,[]);for(let s=0;s<i.length;s++){const e=document.createElement("style");e.textContent=i[s],this.shadowRoot.appendChild(e)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}var g=n("WIm8");let y=(()=>{class e{constructor(e,t,n,s,r){this.eventManager=e,this.sharedStylesHost=t,this.appId=n,this.ngZone=s,this.canvasConfig=r,this.rendererByCompId=new Map,this.defaultRenderer=new m(e)}end(){}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;if(t.type&&t.type.isCanvasComponent){let n=this.rendererByCompId.get(t.id);return n||(n=new C(this.eventManager,this.sharedStylesHost,t,this.appId,this.ngZone,this.canvasConfig),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n}switch(t.encapsulation){case s.P.Emulated:{let n=this.rendererByCompId.get(t.id);return n||(n=new f(this.eventManager,this.sharedStylesHost,t,this.appId),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n}case s.P.ShadowDom:return new v(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){const e=d(t.id,t.styles,[]);this.sharedStylesHost.addStyles(e),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}}}return e.\u0275fac=function(e){s.Mb()},e.\u0275prov=s.zb({token:e,factory:e.\u0275fac}),e})();class C{constructor(e,t,n,s,r,i){this.component=n,this.ngZone=r,this.config=i,this.canvasElements=Object(g.a)().elements;const o=d(s+"-"+n.id,n.styles,[]);t.addStyles(o),this.contentAttr=a(s+"-"+n.id),this.hostAttr=h(s+"-"+n.id)}applyToHost(e){this.setAttribute(e,this.hostAttr,"")}createElement(e,t){const n=this.canvasElements.get(e);if(n)return new n;if("canvas"===e){const e=new r.a(this.ngZone,this.config);return e.element.setAttribute(this.contentAttr,""),e}{let n;return n=t?document.createElementNS(i[t]||t,e):document.createElement(e),this.setAttribute(n,this.contentAttr,""),n}}createText(e){return document.createTextNode(e)}selectRootElement(e,t){const n="string"==typeof e?document.querySelector(e):e;if(!n)throw new Error(`The selector "${e}" did not match any elements`);return t||(n.textContent=""),n}addClass(e,t){e.classList?e.classList.add(t):e.addClass(t)}removeClass(e,t){e.classList?e.classList.add(t):e.removeClass(t)}appendChild(e,t){t&&(t.parent=e,e.appendChild(t instanceof r.a?t.element:t))}removeChild(e,t){t.destroy&&t.destroy(),e&&e.removeChild(t),t&&t.parent instanceof r.a&&t.parent.removeChild(t)}createComment(e){return document.createComment(e)}destroy(){}insertBefore(e,t,n){e&&e.insertBefore&&(t.parent=e,e.insertBefore(t instanceof r.a?t.element:t,n))}listen(e,t,n){const s=t=>n.call(e,t);return e instanceof r.a&&(e=e.element),e.addEventListener(t,s),()=>e.removeEventListener(t,s)}nextSibling(e){return{previous:e,next:e.nextSibling}}parentNode(e){return e.parent?e.parent:e}removeAttribute(e,t,n){if(n){const s=i[n];s?e.removeAttributeNS(s,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}removeStyle(e,t,n){e.removeStyle(t,n)}setAttribute(e,t,n,s){if(s){t=s+":"+t;const r=i[s];r?e.setAttributeNS(r,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}setProperty(e,t,n){e.setNgProperty(t,n)}setStyle(e,t,n,r){e.style?r&s.F.DashCase?e.style.setProperty(t,n,r&s.F.Important?"important":""):e.style[t]=n:e.setStyle(t,n,r)}setValue(e,t){e.setValue?e.setValue(t):e.nodeValue=t}}},wMPD:function(e,t){}}]);