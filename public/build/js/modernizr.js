/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
!function(e,A,n){function o(e,A){return typeof e===A}function a(e){var A=u.className,n=f._config.classPrefix||"";if(c&&(A=A.baseVal),f._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");A=A.replace(o,"$1"+n+"js$2")}f._config.enableClasses&&(A+=" "+n+e.join(" "+n),c?u.className.baseVal=A:u.className=A)}function t(e,A){if("object"==typeof e)for(var n in e)i(e,n)&&t(n,e[n]);else{var o=(e=e.toLowerCase()).split("."),s=f[o[0]];if(2==o.length&&(s=s[o[1]]),void 0!==s)return f;A="function"==typeof A?A():A,1==o.length?f[o[0]]=A:(!f[o[0]]||f[o[0]]instanceof Boolean||(f[o[0]]=new Boolean(f[o[0]])),f[o[0]][o[1]]=A),a([(A&&0!=A?"":"no-")+o.join("-")]),f._trigger(e,A)}return f}var i,s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,A){var n=this;setTimeout((function(){A(n[e])}),0)},addTest:function(e,A,n){r.push({name:e,fn:A,options:n})},addAsyncTest:function(e){r.push({name:null,fn:e})}},f=function(){};f.prototype=l,f=new f,function(){var e={}.hasOwnProperty;i=o(e,"undefined")||o(e.call,"undefined")?function(e,A){return A in e&&o(e.constructor.prototype[A],"undefined")}:function(A,n){return e.call(A,n)}}();var u=A.documentElement,c="svg"===u.nodeName.toLowerCase();l._l={},l.on=function(e,A){this._l[e]||(this._l[e]=[]),this._l[e].push(A),f.hasOwnProperty(e)&&setTimeout((function(){f._trigger(e,f[e])}),0)},l._trigger=function(e,A){if(this._l[e]){var n=this._l[e];setTimeout((function(){var e;for(e=0;e<n.length;e++)(0,n[e])(A)}),0),delete this._l[e]}},f._q.push((function(){l.addTest=t})),f.addAsyncTest((function(){function e(e,A,n){function o(A){var o=!(!A||"load"!==A.type)&&1==a.width;t(e,"webp"===e&&o?new Boolean(o):o),n&&n(A)}var a=new Image;a.onerror=o,a.onload=o,a.src=A}var A=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=A.shift();e(n.name,n.uri,(function(n){if(n&&"load"===n.type)for(var o=0;o<A.length;o++)e(A[o].name,A[o].uri)}))})),function(){var e,A,n,a,t,i;for(var l in r)if(r.hasOwnProperty(l)){if(e=[],(A=r[l]).name&&(e.push(A.name.toLowerCase()),A.options&&A.options.aliases&&A.options.aliases.length))for(n=0;n<A.options.aliases.length;n++)e.push(A.options.aliases[n].toLowerCase());for(a=o(A.fn,"function")?A.fn():A.fn,t=0;t<e.length;t++)1===(i=e[t].split(".")).length?f[i[0]]=a:(!f[i[0]]||f[i[0]]instanceof Boolean||(f[i[0]]=new Boolean(f[i[0]])),f[i[0]][i[1]]=a),s.push((a?"":"no-")+i.join("-"))}}(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<f._q.length;p++)f._q[p]();e.Modernizr=f}(window,document);
//# sourceMappingURL=modernizr.js.map
