(function(t){function e(e){for(var s,c,o=e[0],r=e[1],l=e[2],d=0,v=[];d<o.length;d++)c=o[d],n[c]&&v.push(n[c][0]),n[c]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var r=a[o];0!==n[r]&&(s=!1)}s&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},i=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("64a9")},"10db":function(t,e,a){},"1f17":function(t,e,a){},"24a9":function(t,e,a){"use strict";a("6106")},"306c":function(t,e,a){"use strict";a("10db")},"35f6":function(t,e,a){t.exports=a.p+"img/randomlogo.149040e0.png"},"439a":function(t,e,a){},"54ef":function(t,e,a){t.exports=a.p+"img/rizinglogo.2b3fdc31.png"},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("Home"),a("About"),a("Experience"),a("Skills"),a("Contact"),a("Footer"),a("particles-bg",{attrs:{color:"black",type:"square",num:10,bg:!0}})],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar",attrs:{id:"navbar"}},[a("div",{staticClass:"max-width"},[t._m(0),a("ul",{staticClass:"menu",attrs:{id:"menu"}},[a("li",[a("a",{staticClass:"menu-btn",attrs:{href:"#home"},on:{click:t.menu}},[t._v("Home")])]),a("li",[a("a",{staticClass:"menu-btn",attrs:{href:"#about"},on:{click:t.menu}},[t._v("About")])]),a("li",[a("a",{staticClass:"menu-btn",attrs:{href:"#experience"},on:{click:t.menu}},[t._v("Experience")])]),a("li",[a("a",{staticClass:"menu-btn",attrs:{href:"#skills"},on:{click:t.menu}},[t._v("Skills")])]),a("li",[a("a",{staticClass:"menu-btn",attrs:{href:"#contact"},on:{click:t.menu}},[t._v("Contact")])])]),a("div",{staticClass:"menu-btn",on:{click:t.menu}},[a("i",{staticClass:"fas fa-bars",attrs:{id:"menu-icon"}})])]),a("div",{staticClass:"scroll-up-btn",attrs:{id:"scroll-up-btn"},on:{click:t.scrollTop}},[a("i",{staticClass:"fas fa-angle-up"})])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("a",{attrs:{href:"#"}},[t._v("R"),a("span",[t._v("V.")])])])}],r={name:"Navbar",mounted(){setInterval(()=>{this.sticky()},1)},methods:{menu(){document.getElementById("menu").classList.toggle("active"),document.getElementById("menu-icon").classList.toggle("active")},sticky(){var t=document.getElementById("navbar");0!=window.pageYOffset?t.classList.add("sticky"):t.classList.remove("sticky");var e=document.getElementById("scroll-up-btn");window.pageYOffset>500?e.classList.add("show"):e.classList.remove("show")},scrollTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}},l=r,u=(a("5d52"),a("2877")),d=Object(u["a"])(l,c,o,!1,null,"6460841c",null),v=d.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"home",attrs:{id:"home"}},[a("div",{staticClass:"max-width"},[a("div",{staticClass:"home-content"},[a("div",{staticClass:"text-1"},[t._v("Hello, I'm")]),a("div",{staticClass:"text-2"},[t._v("Raveendra Hewage")]),a("div",{staticClass:"text-3"},[t._v("And I'm a "),a("span",{staticClass:"typing"})])])])])}],p=a("10b3"),b=a.n(p),_={name:"Home",data(){return{options:{strings:["Software Engineer.","Tech Enthusiast.","Problem Solver."],typeSpeed:40,backSpeed:60,loop:!0}}},mounted(){new b.a(".typing",this.options)}},h=_,C=(a("8a9a"),Object(u["a"])(h,f,m,!1,null,"2933a674",null)),g=C.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"about",attrs:{id:"about"}},[a("div",{staticClass:"max-width"},[a("h2",{staticClass:"title"},[t._v("About me")]),a("div",{staticClass:"about-content"},[t._m(0),a("div",{staticClass:"column right"},[t._m(1),a("p",[t._v("\n          I am a very simple person who works hard for reaching to success and\n          has a passion for learning new things. I am a graduate of University\n          of Colombo School of Computing and holds a B.Sc in Computer Science\n          degree. WP/MT Yattapatha K.V was my school up until my O/L and I did\n          my A/L from Ananda Sastralaya, Matugama. I am very interested in web\n          development and work on it by learning new technologies and brushing\n          up my skills. Most of the time, I spend my free time listening to\n          music and writing poems. It gives me a lot of relaxation and\n          refreshments to my day-to-day life. As well, I do video editing as\n          one of my hobbies too.\n        ")]),a("a",{attrs:{href:t.cvLink,download:"RaveendraHewage"}},[t._v("Download CV")])])])])])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column left"},[s("img",{attrs:{src:a("ebcb"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text"},[t._v("\n          I'm Raveendra and I'm a "),a("span",{staticClass:"typing-2"})])}],x={name:"About",data(){return{options:{strings:["graduate in BSc. in Computer Science.","tech enthusiast.","fast learner.","smart worker.","simple person."],typeSpeed:40,backSpeed:60,loop:!0},cvLink:a("8d43")}},mounted(){new b.a(".typing-2",this.options)}},k=x,S=(a("993f"),Object(u["a"])(k,w,y,!1,null,"ff865296",null)),E=S.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"experience",attrs:{id:"experience"}},[s("div",{staticClass:"max-width"},[s("h2",{staticClass:"title"},[t._v("Experience")]),s("div",{staticClass:"experience-content"},[s("div",{staticClass:"column left"},[s("img",{attrs:{src:a("35f6"),alt:""}})]),s("div",{staticClass:"column right"},[s("div",{staticClass:"text"},[s("h3",[t._v("Software Engineer at")]),s("h3",[t._v("Random Software Ltd.")]),s("br"),s("p",[t._v("201, Harbour House,")]),s("p",[t._v("Trefechan, Aberystwyth SY23 1AS,")]),s("p",[t._v("United Kingdom")]),s("p",[t._v("(2023 October - Current)")])])])]),s("div",{staticClass:"experience-content"},[s("div",{staticClass:"column left"},[s("img",{attrs:{src:a("54ef"),alt:""}})]),s("div",{staticClass:"column right"},[s("div",{staticClass:"text"},[s("h3",[t._v("Associate Software Engineer at")]),s("h3",[t._v("Rizing LLC")]),s("br"),s("p",[t._v("No. 19 Browns Capital Building,")]),s("p",[t._v("19 Dudley Senanayake Mawatha,")]),s("p",[t._v("Colombo 08")]),s("p",[t._v("(2022 October - 2023 October)")])])])]),s("div",{staticClass:"experience-content"},[s("div",{staticClass:"column left"},[s("img",{attrs:{src:a("b0d0"),alt:""}})]),s("div",{staticClass:"column right"},[s("div",{staticClass:"text"},[s("h3",[t._v("Software Engineer-Intern at")]),s("h3",[t._v("Pristine Solutions Ptv. Ltd.")]),s("br"),s("p",[t._v("No 166/3/1, Havelock Road,")]),s("p",[t._v("Colombo 05,")]),s("p",[t._v("Sri Lanka")]),s("p",[t._v("(2021 April - 2021 October)")])])])]),s("div",{staticClass:"experience-content"},[s("div",{staticClass:"column left"},[s("img",{attrs:{src:a("6702"),alt:""}})]),s("div",{staticClass:"column right"},[s("div",{staticClass:"text"},[s("h3",[t._v("Developer at")]),s("h3",[t._v("promiseQ GmbH")]),s("br"),s("p",[t._v("Gc/o The Drivery GmbH,")]),s("p",[t._v("Mariendorfer Damm 1,")]),s("p",[t._v("12099 Berlin.")]),s("p",[t._v("(2021 April - 2021 October)")])])])])])])}],I={name:"experience"},A=I,L=(a("306c"),Object(u["a"])(A,O,j,!1,null,"e47d899c",null)),H=L.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"skills",attrs:{id:"skills"}},[a("div",{staticClass:"max-width"},[a("h2",{staticClass:"title"},[t._v("Skills")]),a("div",{staticClass:"skills-content"},[a("div",{staticClass:"column left"},[a("div",{staticClass:"text"},[t._v("Languages Exposed")]),a("div",{staticClass:"btn-group",staticStyle:{width:"100%"}},[a("button",[t._v("PHP")]),a("button",[t._v("HTML")]),a("button",[t._v("JavaScript")]),a("button",[t._v("Python")]),a("button",[t._v("Scala")]),a("button",[t._v("R")]),a("button",[t._v("C")]),a("button",[t._v("C++")])])]),a("div",{staticClass:"column right"},[a("div",{staticClass:"text"},[t._v("Technologies Exposed")]),a("div",{staticClass:"btn-group",staticStyle:{width:"100%"}},[a("button",[t._v("Bootsrap")]),a("button",[t._v("Jquery")]),a("button",[t._v("Node JS")]),a("button",[t._v(".NET")]),a("button",[t._v("MySQL")]),a("button",[t._v("Angular")]),a("button",[t._v("Git")]),a("button",[t._v("Vue")]),a("button",[t._v("React")]),a("button",[t._v("React Native")])])])])])])}],T={name:"Skills"},R=T,B=(a("24a9"),Object(u["a"])(R,P,$,!1,null,"2a3cfd91",null)),M=B.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"contact",attrs:{id:"contact"}},[a("div",{staticClass:"max-width"},[a("h2",{staticClass:"title"},[t._v("Contact me")]),a("div",{staticClass:"contact-content"},[a("div",{staticClass:"column left"},[a("div",{staticClass:"text"},[t._v("Get in Touch")]),a("p",[t._v("\n          I am available on social media and you can contact me over them\n          whenever you want. I will be there for you as quick as possible.\n        ")]),a("div",{staticClass:"icons"},[a("div",{staticClass:"row"},[a("i",{staticClass:"fas fa-user"}),a("div",{staticClass:"info"},[a("div",{staticClass:"head"},[t._v("Name")]),a("div",{staticClass:"sub-title"},[t._v("Raveendra Hewage")])])]),a("div",{staticClass:"row"},[a("i",{staticClass:"fas fa-map-marker-alt"}),a("div",{staticClass:"info"},[a("div",{staticClass:"head"},[t._v("Address")]),a("div",{staticClass:"sub-title"},[t._v("\n                Singehraja Park, 10th Mile Post, Yattapatha\n              ")])])]),a("div",{staticClass:"row"},[a("i",{staticClass:"fas fa-envelope"}),a("div",{staticClass:"info"},[a("div",{staticClass:"head"},[t._v("Email")]),a("div",{staticClass:"sub-title"},[t._v("hewagerv@gmail.com")])])]),a("div",{staticClass:"row"},[a("i",{staticClass:"fas fa-phone"}),a("div",{staticClass:"info"},[a("div",{staticClass:"head"},[t._v("Phone")]),a("div",{staticClass:"sub-title"},[t._v("+94717188823")])])])])]),a("div",{staticClass:"column right"},[a("div",{staticClass:"text"},[t._v("Social media")]),a("div",{staticClass:"contact-form"},[a("div",{staticClass:"field"},[a("a",{staticClass:"fa fa-linkedin",attrs:{href:"https://www.linkedin.com/in/raveendra-hewage-8763921b9/",target:"_blank"}},[a("span",[t._v("linkedin")])])]),a("div",{staticClass:"field"},[a("a",{staticClass:"fa fa-facebook",attrs:{href:"https://www.facebook.com/raveendra.hewage/",target:"_blank"}},[a("span",[t._v("facebook")])])]),a("div",{staticClass:"field"},[a("a",{staticClass:"fa fa-twitter",attrs:{href:"https://twitter.com/HewageRaveendra",target:"_blank"}},[a("span",[t._v("twitter")])])]),a("div",{staticClass:"field"},[a("a",{staticClass:"fa fa-instagram",attrs:{href:"https://www.instagram.com/_rv__h/",target:"_blank"}},[a("span",[t._v("instagram")])])]),a("div",{staticClass:"field"},[a("a",{staticClass:"fa fa-github",attrs:{href:"https://github.com/raveendrahewage",target:"_blank"}},[a("span",[t._v("github")])])])])])])])])}],Y={name:"Contact"},G=Y,J=(a("9be0"),Object(u["a"])(G,N,D,!1,null,"123de508",null)),q=J.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("span",[t._v("Created By "),a("a",{attrs:{href:"#"}},[t._v("Raveendra Hewage")]),t._v(" |\n    "),a("span",{staticClass:"far fa-copyright"}),t._v(" "+t._s((new Date).getFullYear())+" All\n    rights reserved.")])])},V=[],z={name:"Footer"},K=z,Q=(a("a5e7"),Object(u["a"])(K,F,V,!1,null,"100e485e",null)),U=Q.exports,W=a("5c51"),X={name:"App",components:{Navbar:v,Home:g,About:E,Experience:H,Skills:M,Contact:q,Footer:U,ParticlesBg:W["a"]}},Z=X,tt=(a("034f"),Object(u["a"])(Z,n,i,!1,null,null,null)),et=tt.exports;s["a"].config.productionTip=!1,s["a"].use(W["b"]),new s["a"]({render:t=>t(et)}).$mount("#app")},"5d52":function(t,e,a){"use strict";a("d1df")},6106:function(t,e,a){},"64a9":function(t,e,a){},6702:function(t,e,a){t.exports=a.p+"img/promiseq.167bfed6.png"},"8a9a":function(t,e,a){"use strict";a("1f17")},"8d43":function(t,e,a){t.exports=a.p+"img/cv.b9c098ca.png"},"993f":function(t,e,a){"use strict";a("eaa1")},"9be0":function(t,e,a){"use strict";a("ed9c")},a5e7:function(t,e,a){"use strict";a("439a")},b0d0:function(t,e,a){t.exports=a.p+"img/pristine.b41427bf.jpg"},d1df:function(t,e,a){},eaa1:function(t,e,a){},ebcb:function(t,e,a){t.exports=a.p+"img/mypic.69498c5d.jpg"},ed9c:function(t,e,a){}});
//# sourceMappingURL=app.a8908e4a.js.map