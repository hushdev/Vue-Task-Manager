(function(t){function e(e){for(var a,r,i=e[0],o=e[1],u=e[2],l=0,b=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(b.length)b.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==c[o]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},c={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-task-manager/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1e09":function(t,e,n){},"26df":function(t,e,n){},2873:function(t,e,n){t.exports=n.p+"img/complete.994a3ecb.svg"},"33bf":function(t,e,n){t.exports=n.p+"img/pencil.b0753817.svg"},"346f":function(t,e,n){},"387e":function(t,e,n){t.exports=n.p+"img/github.af0091ca.svg"},"3cc7":function(t,e,n){"use strict";n("d3b8")},"4c23":function(t,e,n){},5384:function(t,e,n){"use strict";n("fc81")},"54e6":function(t,e,n){t.exports=n.p+"img/instagram.622e2947.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={class:"todo-app"},s={class:"todo-wrapper"},r={class:"tasks container"};function i(t,e,n,i,o,u){var d=Object(a["m"])("app-modal-form"),l=Object(a["m"])("app-edit-task-form"),b=Object(a["m"])("app-menu"),O=Object(a["m"])("app-nav"),p=Object(a["m"])("app-task"),k=Object(a["m"])("app-add-task-btn");return Object(a["i"])(),Object(a["e"])("div",c,[Object(a["h"])("div",s,[Object(a["h"])(a["b"],{name:"slide"},{default:Object(a["p"])((function(){return[o.isFormActive?(Object(a["i"])(),Object(a["e"])(d,{key:0,onOnCloseForm:u.closeForm,onOnAddTask:u.addTask},null,8,["onOnCloseForm","onOnAddTask"])):Object(a["f"])("",!0)]})),_:1}),Object(a["h"])(a["b"],{name:"slide"},{default:Object(a["p"])((function(){return[o.isEditTaskFormActive?(Object(a["i"])(),Object(a["e"])(l,{key:0,"task-to-edit":o.taskToEdit,onOnTaskEditFormClosed:u.closeTaskEditForm,onOnTaskEdit:u.editTask},null,8,["task-to-edit","onOnTaskEditFormClosed","onOnTaskEdit"])):Object(a["f"])("",!0)]})),_:1}),Object(a["h"])(a["b"],{name:"slide"},{default:Object(a["p"])((function(){return[o.isMenuActive?(Object(a["i"])(),Object(a["e"])(b,{key:0,onOnCloseMenu:u.closeMenu},null,8,["onOnCloseMenu"])):Object(a["f"])("",!0)]})),_:1}),Object(a["h"])(O,{onOnMenuOpen:u.openMenu},null,8,["onOnMenuOpen"]),Object(a["h"])("ul",r,[Object(a["h"])(a["c"],{name:"task"},{default:Object(a["p"])((function(){return[(Object(a["i"])(!0),Object(a["e"])(a["a"],null,Object(a["l"])(o.tasks,(function(t,e){return Object(a["i"])(),Object(a["e"])(p,{key:e,task:t,number:e,onOnTaskDeleted:u.deleteTask,onOnTaskMarked:u.markTask,onOnTaskUnMarked:u.unMarkTask,onOnTaskEdited:u.editTaskSelected},null,8,["task","number","onOnTaskDeleted","onOnTaskMarked","onOnTaskUnMarked","onOnTaskEdited"])})),128))]})),_:1})]),Object(a["h"])(k,{onClick:u.showModal},null,8,["onClick"])])])}n("4de4"),n("7db0");var o=Object(a["t"])("data-v-89e474e6");Object(a["k"])("data-v-89e474e6");var u={class:"container"},d=Object(a["h"])("h1",null,[Object(a["g"])("Vue-todo "),Object(a["h"])("span",null,"v1.0")],-1),l=Object(a["h"])("span",null,null,-1),b=Object(a["h"])("span",null,null,-1),O=Object(a["h"])("span",null,null,-1);Object(a["j"])();var p=o((function(t,e,n,c,s,r){return Object(a["i"])(),Object(a["e"])("nav",null,[Object(a["h"])("div",u,[d,Object(a["h"])("div",{onClick:e[1]||(e[1]=function(e){return t.$emit("onMenuOpen")}),class:"menu-burger"},[l,b,O])])])})),k={name:"AppNav"};n("e618");k.render=p,k.__scopeId="data-v-89e474e6";var f=k,j=Object(a["t"])("data-v-20f7d546");Object(a["k"])("data-v-20f7d546");var h={class:"btn"};Object(a["j"])();var m=j((function(t,e,n,c,s,r){return Object(a["i"])(),Object(a["e"])("button",h," + ")})),v={name:"AppAddTaskBtn"};n("e9ea");v.render=m,v.__scopeId="data-v-20f7d546";var T=v,g=n("33bf"),y=n.n(g),A=n("2873"),M=n.n(A),_=n("c637"),E=n.n(_),x=Object(a["t"])("data-v-92f362d4");Object(a["k"])("data-v-92f362d4");var F={class:"actions"},w=Object(a["h"])("img",{src:y.a,alt:""},null,-1),C=Object(a["h"])("img",{src:M.a,alt:""},null,-1),$=Object(a["h"])("img",{src:E.a,alt:""},null,-1);Object(a["j"])();var I=x((function(t,e,n,c,s,r){return Object(a["i"])(),Object(a["e"])("li",{class:["task",{lineThrought:0==n.task.isActive}]},[Object(a["g"])(Object(a["n"])(n.number+1)+". "+Object(a["n"])(n.task.text)+" ",1),Object(a["h"])("span",F,[Object(a["h"])("button",{onClick:e[1]||(e[1]=function(){return r.editTask&&r.editTask.apply(r,arguments)})},[w]),Object(a["h"])("button",{onClick:e[2]||(e[2]=function(){return r.markTask&&r.markTask.apply(r,arguments)})},[C]),Object(a["h"])("button",{onClick:e[3]||(e[3]=function(){return r.deleteTask&&r.deleteTask.apply(r,arguments)})},[$])])],2)})),P=(n("a9e3"),{name:"AppTask",props:{number:{required:!0,type:Number},task:{required:!0,type:Object}},methods:{deleteTask:function(){this.$emit("onTaskDeleted",this.task)},markTask:function(){1==this.task.isActive?this.$emit("onTaskMarked",this.task):0==this.task.isActive&&this.$emit("onTaskUnMarked",this.task)},editTask:function(){this.$emit("onTaskEdited",this.task)}}});n("3cc7");P.render=I,P.__scopeId="data-v-92f362d4";var S=P,D=Object(a["t"])("data-v-32aa75aa");Object(a["k"])("data-v-32aa75aa");var U={class:"container"},q={key:0,for:"task"};Object(a["j"])();var N=D((function(t,e,n,c,s,r){return Object(a["i"])(),Object(a["e"])("form",null,[Object(a["h"])("div",U,[Object(a["h"])("button",{onClick:e[1]||(e[1]=Object(a["s"])((function(e){return t.$emit("onCloseForm")}),["prevent"])),class:"close"}," X "),Object(a["h"])("div",null,[Object(a["q"])(Object(a["h"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return s.task=t}),onKeydown:e[3]||(e[3]=Object(a["r"])(Object(a["s"])((function(){return r.onAddTask&&r.onAddTask.apply(r,arguments)}),["prevent"]),["enter"])),onInput:e[4]||(e[4]=function(t){return s.error=null}),type:"text",placeholder:"Enter your task"},null,544),[[a["o"],s.task]]),Object(a["h"])("button",{onClick:e[5]||(e[5]=Object(a["s"])((function(){return r.onAddTask&&r.onAddTask.apply(r,arguments)}),["prevent"])),class:"add"}," Add ")]),Object(a["h"])(a["b"],{name:"slide"},{default:D((function(){return[s.error?(Object(a["i"])(),Object(a["e"])("label",q,Object(a["n"])(s.error),1)):Object(a["f"])("",!0)]})),_:1})])])})),V={name:"AppModalForm",data:function(){return{task:"",error:null}},methods:{onAddTask:function(){this.task||(this.error="Task field can not be empty"),this.task&&(this.$emit("onAddTask",this.task),this.task="",this.$emit("onCloseForm"))}}};n("5b97");V.render=N,V.__scopeId="data-v-32aa75aa";var B=V,J=n("387e"),K=n.n(J),X=n("73dd"),Z=n.n(X),z=n("7dd3"),L=n.n(z),R=n("54e6"),Y=n.n(R),G=Object(a["t"])("data-v-5d958bb3");Object(a["k"])("data-v-5d958bb3");var H={class:"menu"},Q={class:"container"},W=Object(a["h"])("h2",null,"Developed by Ildar Anikin",-1),tt=Object(a["h"])("span",null,"Links",-1),et=Object(a["h"])("ul",null,[Object(a["h"])("li",null,[Object(a["h"])("a",{href:"https://github.com/hushdev",target:"_blank"},[Object(a["h"])("img",{src:K.a,alt:""})])]),Object(a["h"])("li",null,[Object(a["h"])("a",{href:"https://www.youtube.com/channel/UCNgK_fITER_vZVsBDzoJZcw",target:"_blank"},[Object(a["h"])("img",{src:Z.a,alt:""})])]),Object(a["h"])("li",null,[Object(a["h"])("a",{href:"https://t.me/hush_dev",target:"_blank"},[Object(a["h"])("img",{src:L.a,alt:""})])]),Object(a["h"])("li",null,[Object(a["h"])("a",{href:"https://www.instagram.com/an.ildar/",target:"_blank"},[Object(a["h"])("img",{src:Y.a,alt:""})])])],-1),nt={class:"date"};Object(a["j"])();var at=G((function(t,e,n,c,s,r){return Object(a["i"])(),Object(a["e"])("div",H,[Object(a["h"])("div",Q,[Object(a["h"])("button",{onClick:e[1]||(e[1]=Object(a["s"])((function(e){return t.$emit("onCloseMenu")}),["prevent"])),class:"close"}," X "),W,tt,et,Object(a["h"])("p",nt,Object(a["n"])(s.date),1)])])})),ct={name:"AppMenu",data:function(){return{date:(new Date).getFullYear()}}};n("9280");ct.render=at,ct.__scopeId="data-v-5d958bb3";var st=ct,rt=Object(a["t"])("data-v-b9e78146");Object(a["k"])("data-v-b9e78146");var it={class:"container"},ot={key:0,for:"task"};Object(a["j"])();var ut=rt((function(t,e,n,c,s,r){return Object(a["i"])(),Object(a["e"])("form",null,[Object(a["h"])("div",it,[Object(a["h"])("button",{onClick:e[1]||(e[1]=Object(a["s"])((function(){return r.closeEditTaskForm&&r.closeEditTaskForm.apply(r,arguments)}),["prevent"])),class:"close"}," X "),Object(a["h"])("div",null,[Object(a["q"])(Object(a["h"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return s.text=t}),onKeydown:e[3]||(e[3]=Object(a["r"])(Object(a["s"])((function(){return r.editTask&&r.editTask.apply(r,arguments)}),["prevent"]),["enter"])),onInput:e[4]||(e[4]=function(t){return s.error=null}),type:"text",placeholder:"Change your task"},null,544),[[a["o"],s.text]]),Object(a["h"])("button",{onClick:e[5]||(e[5]=Object(a["s"])((function(){return r.editTask&&r.editTask.apply(r,arguments)}),["prevent"])),class:"add"}," Edit ")]),Object(a["h"])(a["b"],{name:"slide"},{default:rt((function(){return[s.error?(Object(a["i"])(),Object(a["e"])("label",ot,Object(a["n"])(s.error),1)):Object(a["f"])("",!0)]})),_:1})])])})),dt={name:"AppEditTaskForm",data:function(){return{text:this.taskToEdit.text,error:null}},props:{taskToEdit:{required:!0,type:Object}},methods:{editTask:function(){this.text||(this.error="Field can not be empty"),this.text&&(this.$emit("onTaskEdit",{text:this.text,task:this.taskToEdit}),this.text="",this.$emit("onTaskEditFormClosed"))},closeEditTaskForm:function(){this.$emit("onTaskEditFormClosed")}}};n("5384");dt.render=ut,dt.__scopeId="data-v-b9e78146";var lt=dt,bt={name:"App",components:{AppNav:f,AppAddTaskBtn:T,AppTask:S,AppModalForm:B,AppMenu:st,AppEditTaskForm:lt},data:function(){return{isFormActive:!1,isMenuActive:!1,isEditTaskFormActive:!1,taskToEdit:null,tasks:[{text:"Add todos by the button below",isActive:!0,deleted:!1}]}},methods:{showModal:function(){this.isFormActive=!0},closeForm:function(){this.isFormActive=!1},addTask:function(t){var e={text:t,isActive:!0,deleted:!1};this.tasks.push(e)},deleteTask:function(t){this.tasks=this.tasks.filter((function(e){return e!==t}))},markTask:function(t){var e=this.tasks.find((function(e){return e===t}));e.isActive=!1},unMarkTask:function(t){var e=this.tasks.find((function(e){return e===t}));e.isActive=!0},editTaskSelected:function(t){this.isEditTaskFormActive=!0,this.taskToEdit=t},editTask:function(t){var e=t.text,n=t.task,a=this.tasks.find((function(t){return t===n}));a.text=e},closeTaskEditForm:function(){this.isEditTaskFormActive=!1},openMenu:function(){this.isMenuActive=!0},closeMenu:function(){this.isMenuActive=!1}}};n("8e97");bt.render=i;var Ot=bt;n("1e09");Object(a["d"])(Ot).mount("#app")},"5a90":function(t,e,n){},"5b97":function(t,e,n){"use strict";n("26df")},"73dd":function(t,e,n){t.exports=n.p+"img/youtube.6ce079da.svg"},"7dd3":function(t,e,n){t.exports=n.p+"img/telegram.a888fec0.svg"},"8a3f":function(t,e,n){},"8e97":function(t,e,n){"use strict";n("4c23")},9280:function(t,e,n){"use strict";n("5a90")},c637:function(t,e,n){t.exports=n.p+"img/trash.221a1a91.svg"},d3b8:function(t,e,n){},e618:function(t,e,n){"use strict";n("346f")},e9ea:function(t,e,n){"use strict";n("8a3f")},fc81:function(t,e,n){}});
//# sourceMappingURL=app.fa16f52c.js.map