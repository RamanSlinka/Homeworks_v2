(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={affair:"Affairs_affair__2angM",page:"Affairs_page__3EB7p",button:"Affairs_button__28tm2",active:"Affairs_active__44zQ9",item:"Affairs_item__zPhkG",low:"Affairs_low__1rgV-",middle:"Affairs_middle__2gEvZ",high:"Affairs_high__3sThF"}},,,,function(e,a,t){e.exports={page:"Message_page__1YTp_",message:"Message_message__pHh0d",inputArea:"Message_inputArea__16MWK",avatar:"Message_avatar__uivM0",name:"Message_name__2MY9p",time:"Message_time__1migT"}},function(e,a,t){e.exports={page:"Greeting_page__38iL3",other:"Greeting_other__TE4Mb",error:"Greeting_error__3qwMx",input:"Greeting_input__4Km9E",errorInput:"Greeting_errorInput__3MZx1",button:"Greeting_button__1Ncum"}},,,function(e,a,t){},function(e,a,t){e.exports={message:"AlternativeMessage_message__ae6tu",inputArea:"AlternativeMessage_inputArea__3xLUy",name:"AlternativeMessage_name__3PJFJ",time:"AlternativeMessage_time__3vauc",avatar:"AlternativeMessage_avatar__20Ldb"}},,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__snUy-",superInputError:"SuperInputText_superInputError__2Znht",error:"SuperInputText_error__2CHQj"}},,function(e,a,t){e.exports={default:"SuperButton_default__1jOwl",red:"SuperButton_red__14mej",button:"SuperButton_button__1ewM2",blink:"SuperButton_blink__3YJUd"}},,,,function(e,a,t){e.exports={blue:"HW4_blue__2uAHN",column:"HW4_column__DzBcS",testSpanError:"HW4_testSpanError__2b9J8"}},function(e,a,t){e.exports={label:"SuperCheckbox_label__39gYy",checkbox:"SuperCheckbox_checkbox__2Nlg3",spanClassName:"SuperCheckbox_spanClassName__ucSLF"}},,,,,,,function(e,a,t){e.exports={App:"App_App__2p70A"}},function(e,a,t){e.exports=t.p+"static/media/image.665f7e84.png"},,,,function(e,a,t){e.exports=t(46)},,,,,function(e,a,t){},,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),c=t.n(l),i=(t(38),t(28)),o=t.n(i),s=t(10),u=t.n(s),m=t(8),p=t(29),d=t.n(p);var _=function(){return r.a.createElement("div",{className:u.a.nav},r.a.createElement("img",{src:d.a,alt:"main"}),r.a.createElement("div",{className:u.a.navContainer},r.a.createElement("div",{className:u.a.item},r.a.createElement(m.b,{to:"pre-junior"},"PreJunior ")),r.a.createElement("div",{className:u.a.item},r.a.createElement(m.b,{to:"junior"},"PreJunior ")),r.a.createElement("div",{className:u.a.item},r.a.createElement(m.b,{to:"junior+"},"PreJunior "))))},E=t(1),f=t(11),h=t.n(f);var v=function(e){return r.a.createElement("div",{className:h.a.message},r.a.createElement("img",{src:e.avatar,alt:"avatar",className:h.a.avatar}),r.a.createElement("div",{className:h.a.inputArea},r.a.createElement("h3",{className:h.a.name},e.name),r.a.createElement("p",null,e.message),r.a.createElement("span",{className:h.a.time},e.time)))},g=t(6),b=t.n(g);var N=function(e){return r.a.createElement("div",{className:b.a.message},r.a.createElement("img",{src:e.avatar,alt:"avatar",className:b.a.avatar}),r.a.createElement("div",{className:b.a.inputArea},r.a.createElement("h3",{className:b.a.name},e.name),r.a.createElement("p",null,e.message),r.a.createElement("span",{className:b.a.time},e.time)))},k="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",C="Some Name",w="some text ",y="22:00",A="https://cdn.roundicons.com/wp-content/uploads/2017/08/Artboard-18-copy-17-hand-drawn-avatar-Icon.png",j="Some SuperName",x="some text, but more then before",S="22:11";var O=function(){return r.a.createElement("div",{className:b.a.page},r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(N,{avatar:k,name:C,message:w,time:y}),r.a.createElement("hr",null),r.a.createElement(v,{avatar:A,name:j,message:x,time:S}),r.a.createElement("hr",null))},M=t(5),I=t(2),T=t.n(I);var B=function(e){var a=T.a.item+" "+T.a[e.affair.priority];return r.a.createElement("div",{className:T.a.affair},r.a.createElement("div",{className:T.a.item},e.affair.name),r.a.createElement("div",{className:a},e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:T.a.item+" "+T.a.button},"X"))};var F=function(e){var a=e.data.map((function(a){return r.a.createElement(B,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t=T.a.button+" "+("all"===e.filter?T.a.active:""),n=T.a.button+" "+("high"===e.filter?T.a.active:""),l=T.a.button+" "+("middle"===e.filter?T.a.active:""),c=T.a.button+" "+("low"===e.filter?T.a.active:"");return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")},className:t},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")},className:n},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")},className:l},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")},className:c},"Low"))},J=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"},{_id:6,name:"porn",priority:"low"}];var P=function(){var e=Object(n.useState)(J),a=Object(M.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),i=Object(M.a)(c,2),o=i[0],s=i[1],u=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e.filter((function(e){return"middle"===e.priority}))}(t,o);return r.a.createElement("div",{className:T.a.page},r.a.createElement("hr",null),"homeworks 2",r.a.createElement("hr",null),r.a.createElement(F,{data:u,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:o}),r.a.createElement("hr",null))},H=t(32),U=t(7),G=t.n(U),W=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.onEnter,i=e.totalUsers,o=l?G.a.errorInput:G.a.input;return r.a.createElement("div",{className:G.a.other},r.a.createElement("div",null,r.a.createElement("input",{value:a,placeholder:"Enter your name please",onChange:t,className:o,onKeyDown:c,onBlur:t}),r.a.createElement("div",{className:G.a.error},l)),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n,className:G.a.button,disabled:!a},"add"),r.a.createElement("span",null,i))},K=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(M.a)(l,2),i=c[0],o=c[1],s=Object(n.useState)(""),u=Object(M.a)(s,2),m=u[0],p=u[1],d=function(){t(i),alert("Hello "+i+" !"),o("")},_=a.length;return r.a.createElement(W,{name:i,setNameCallback:function(e){var a=e.currentTarget.value.trim();a?(o(a),m&&p("")):(o(""),p("name is require"))},addUser:d,onEnter:function(e){"Enter"===e.key&&i&&d()},error:m,totalUsers:_})},L=t(31);var Y=function(){var e=Object(n.useState)([]),a=Object(M.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:G.a.page},r.a.createElement("hr",null),"homeworks 3",r.a.createElement(K,{users:t,addUserCallback:function(e){var a={_id:Object(L.v1)(),name:e};l([a].concat(Object(H.a)(t)))}}),r.a.createElement("hr",null))},Z=t(9),q=t(14),z=t.n(q),D=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,i=(e.className,e.spanClassName),o=Object(Z.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(z.a.error," ").concat(i||""),u="".concat(z.a.superInput,"  ").concat(c?z.a.superInputError:z.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:u},o)),c&&r.a.createElement("span",{className:s},c))},Q=t(20),X=t.n(Q),R=t(16),V=t.n(R),$=function(e){var a=e.red,t=e.className,n=Object(Z.a)(e,["red","className"]),l="".concat(V.a.button," ").concat(a?V.a.red:V.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},ee=t(21),ae=t.n(ee),te=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(Z.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),i="".concat(ae.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:i},c)),l&&r.a.createElement("span",{className:ae.a.spanClassName},l))};var ne=function(){var e=Object(n.useState)(""),a=Object(M.a)(e,2),t=a[0],l=a[1],c=t?"":"error",i=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),s=Object(M.a)(o,2),u=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:X.a.column},r.a.createElement(D,{value:t,onChangeText:l,onEnter:i,error:c,placeholder:"enter your email"}),r.a.createElement(D,{className:X.a.blue,placeholder:"enter your password"}),r.a.createElement($,null,"default"),r.a.createElement($,{red:!0,onClick:i},"delete "),r.a.createElement($,{disabled:!0},"disabled"),r.a.createElement(te,{checked:u,onChangeChecked:m},"some text "),r.a.createElement(te,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var re=function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(P,null),r.a.createElement(Y,null),r.a.createElement(ne,null))};var le=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var ce=function(){return r.a.createElement("div",null,"content will be here soon")};var ie=function(){return r.a.createElement("div",null,"content will be here soon")},oe="/pre-junior",se="/junior",ue="/junior+";var me=function(){return r.a.createElement("div",null,r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/",exact:!0,render:function(){return r.a.createElement(E.a,{to:oe})}}),r.a.createElement(E.b,{path:oe,render:function(){return r.a.createElement(re,null)}}),r.a.createElement(E.b,{path:se,render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(E.b,{path:ue,render:function(){return r.a.createElement(ie,null)}}),r.a.createElement(E.b,{render:function(){return r.a.createElement(le,null)}})))};var pe=function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(_,null),r.a.createElement(me,null)))};var de=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.2f0f07ff.chunk.js.map