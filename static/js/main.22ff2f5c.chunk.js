(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={affair:"Affairs_affair__2angM",page:"Affairs_page__3EB7p",button:"Affairs_button__28tm2",active:"Affairs_active__44zQ9",item:"Affairs_item__zPhkG",low:"Affairs_low__1rgV-",middle:"Affairs_middle__2gEvZ",high:"Affairs_high__3sThF"}},function(e,a,t){e.exports={bg:"HW5_bg__3EmdS",error:"HW5_error__Srs81",link:"HW5_link__19FcI",active:"HW5_active__3HL5S",header:"HW5_header__gTbiF",block:"HW5_block__1uAWD",bgJunior:"HW5_bgJunior__3hXYS"}},,,,,function(e,a,t){e.exports={page:"Message_page__1YTp_",message:"Message_message__pHh0d",inputArea:"Message_inputArea__16MWK",avatar:"Message_avatar__uivM0",name:"Message_name__2MY9p",time:"Message_time__1migT"}},function(e,a,t){e.exports={page:"Greeting_page__38iL3",other:"Greeting_other__TE4Mb",error:"Greeting_error__3qwMx",input:"Greeting_input__4Km9E",errorInput:"Greeting_errorInput__3MZx1",button:"Greeting_button__1Ncum"}},function(e,a,t){e.exports={label:"HW7_label__2Rg1r",radio:"HW7_radio__2PdVn",select:"HW7_select__3vwtV",option:"HW7_option__1WT1S"}},function(e,a,t){e.exports={message:"AlternativeMessage_message__ae6tu",inputArea:"AlternativeMessage_inputArea__3xLUy",name:"AlternativeMessage_name__3PJFJ",time:"AlternativeMessage_time__3vauc",avatar:"AlternativeMessage_avatar__20Ldb"}},,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__snUy-",superInputError:"SuperInputText_superInputError__2Znht",error:"SuperInputText_error__2CHQj"}},function(e,a,t){e.exports={item:"HW8_item__28pSa",button:"HW8_button__3o586"}},,,function(e,a,t){e.exports={default:"SuperButton_default__1jOwl",red:"SuperButton_red__14mej",button:"SuperButton_button__1ewM2",blink:"SuperButton_blink__3YJUd"}},,,,function(e,a,t){e.exports={blue:"HW4_blue__2uAHN",column:"HW4_column__DzBcS",testSpanError:"HW4_testSpanError__2b9J8"}},function(e,a,t){e.exports={label:"SuperCheckbox_label__39gYy",checkbox:"SuperCheckbox_checkbox__2Nlg3",spanClassName:"SuperCheckbox_spanClassName__ucSLF"}},,,,,,,function(e,a,t){},,,function(e,a,t){e.exports={span:"SuperEditableSpan_span__2BH9c"}},function(e,a,t){e.exports=t.p+"static/media/404-error-page.875dbc14.jpg"},function(e,a,t){e.exports=t(49)},,,,,function(e,a,t){},,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(30),c=t.n(l),o=(t(41),t(31)),i=t.n(o),s=t(4),u=t.n(s),m=t(8);var p=function(){return r.a.createElement("div",{className:u.a.header},r.a.createElement(m.b,{to:"/start-page",className:u.a.link,activeClassName:u.a.active},"startPage "),r.a.createElement(m.b,{to:"pre-junior",className:u.a.link,activeClassName:u.a.active},"PreJunior "),r.a.createElement(m.b,{to:"junior",className:u.a.link,activeClassName:u.a.active},"Junior "),r.a.createElement(m.b,{to:"junior+",className:u.a.link,activeClassName:u.a.active},"Junior+"),r.a.createElement("div",{className:u.a.block}))},_=t(1),d=t(12),E=t.n(d);var f=function(e){return r.a.createElement("div",{className:E.a.message},r.a.createElement("img",{src:e.avatar,alt:"avatar",className:E.a.avatar}),r.a.createElement("div",{className:E.a.inputArea},r.a.createElement("h3",{className:E.a.name},e.name),r.a.createElement("p",null,e.message),r.a.createElement("span",{className:E.a.time},e.time)))},v=t(9),g=t.n(v);var b=function(e){return r.a.createElement("div",{className:g.a.message},r.a.createElement("img",{src:e.avatar,alt:"avatar",className:g.a.avatar}),r.a.createElement("div",{className:g.a.inputArea},r.a.createElement("h3",{className:g.a.name},e.name),r.a.createElement("p",null,e.message),r.a.createElement("span",{className:g.a.time},e.time)))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",N="Some Name",k="some text ",C="22:00",y="https://cdn.roundicons.com/wp-content/uploads/2017/08/Artboard-18-copy-17-hand-drawn-avatar-Icon.png",j="Some SuperName",O="some text, but more then before",S="22:11";var w=function(){return r.a.createElement("div",{className:g.a.page},"homeworks 1",r.a.createElement(b,{avatar:h,name:N,message:k,time:C}),r.a.createElement(f,{avatar:y,name:j,message:O,time:S}))},x=t(2),A=t(3),H=t.n(A);var W=function(e){var a=H.a.item+" "+H.a[e.affair.priority];return r.a.createElement("div",{className:H.a.affair},r.a.createElement("div",{className:H.a.item},e.affair.name),r.a.createElement("div",{className:a},e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:H.a.item+" "+H.a.button},"X"))};var M=function(e){var a=e.data.map((function(a){return r.a.createElement(W,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t=H.a.button+" "+("all"===e.filter?H.a.active:""),n=H.a.button+" "+("high"===e.filter?H.a.active:""),l=H.a.button+" "+("middle"===e.filter?H.a.active:""),c=H.a.button+" "+("low"===e.filter?H.a.active:"");return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")},className:t},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")},className:n},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")},className:l},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")},className:c},"Low"))},T=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"},{_id:6,name:"porn",priority:"low"}];var I=function(){var e=Object(n.useState)(T),a=Object(x.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(x.a)(c,2),i=o[0],s=o[1],u=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e.filter((function(e){return"middle"===e.priority}))}(t,i);return r.a.createElement("div",{className:H.a.page},r.a.createElement("hr",null),"homeworks 2",r.a.createElement("hr",null),r.a.createElement(M,{data:u,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:i}),r.a.createElement("hr",null))},F=t(18),J=t(10),B=t.n(J),P=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.onEnter,o=e.totalUsers,i=l?B.a.errorInput:B.a.input;return r.a.createElement("div",{className:B.a.other},r.a.createElement("div",null,r.a.createElement("input",{value:a,placeholder:"Enter your name please",onChange:t,className:i,onKeyDown:c,onBlur:t}),r.a.createElement("div",{className:B.a.error},l)),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n,className:B.a.button,disabled:!a},"add"),r.a.createElement("span",null,o))},U=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(x.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(""),u=Object(x.a)(s,2),m=u[0],p=u[1],_=function(){t(o),alert("Hello "+o+" !"),i("")},d=a.length;return r.a.createElement(P,{name:o,setNameCallback:function(e){var a=e.currentTarget.value.trim();a?(i(a),m&&p("")):(i(""),p("name is require"))},addUser:_,onEnter:function(e){"Enter"===e.key&&o&&_()},error:m,totalUsers:d})},G=t(33);var D=function(){var e=Object(n.useState)([]),a=Object(x.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:B.a.page},r.a.createElement("hr",null),"homeworks 3",r.a.createElement(U,{users:t,addUserCallback:function(e){var a={_id:Object(G.v1)(),name:e};l([a].concat(Object(F.a)(t)))}}),r.a.createElement("hr",null))},K=t(5),L=t(15),Y=t.n(L),z=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),i=Object(K.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(Y.a.error," ").concat(o||""),u="".concat(Y.a.superInput,"  ").concat(c?Y.a.superInputError:Y.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:u},i)),c&&r.a.createElement("span",{className:s},c))},Z=t(23),q=t.n(Z),V=t(19),X=t.n(V),Q=function(e){var a=e.red,t=e.className,n=Object(K.a)(e,["red","className"]),l="".concat(X.a.button," ").concat(a?X.a.red:X.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},R=t(24),$=t.n(R),ee=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(K.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat($.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:$.a.spanClassName},l))};var ae=function(){var e=Object(n.useState)(""),a=Object(x.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(n.useState)(!1),s=Object(x.a)(i,2),u=s[0],m=s[1];return r.a.createElement("div",null,"homeworks 4",r.a.createElement("div",{className:q.a.column},r.a.createElement(z,{value:t,onChangeText:l,onEnter:o,error:c,placeholder:"enter your email"}),r.a.createElement(z,{className:q.a.blue,placeholder:"enter your password"}),r.a.createElement(Q,null,"default"),r.a.createElement(Q,{red:!0,onClick:o},"delete "),r.a.createElement(Q,{disabled:!0},"disabled"),r.a.createElement(ee,{checked:u,onChangeChecked:m},"some text "),r.a.createElement(ee,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})))},te=t(34),ne=t.n(te),re=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(K.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),i=Object(x.a)(o,2),s=i[0],u=i[1],m=l||{},p=m.children,_=m.onDoubleClick,d=m.className,E=Object(K.a)(m,["children","onDoubleClick","className"]),f="".concat(ne.a.span," ").concat(d||"");return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(z,Object.assign({autoFocus:!0,onBlur:function(e){u(!1),a&&a(e)},onEnter:function(){u(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){u(!0),_&&_(e)},className:f},E),"\u270e ",p||c.value))};function le(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ce(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}le("test",{x:"A",y:1});ce("test",{x:"",y:0});var oe=function(){var e=Object(n.useState)(""),a=Object(x.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(re,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(Q,{onClick:function(){le("editable-span-value",t)}},"save"),r.a.createElement(Q,{onClick:function(){var e=ce("editable-span-value","");l(e)}},"restore"),r.a.createElement("hr",null))};var ie=function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(I,null),r.a.createElement(D,null),r.a.createElement(ae,null),r.a.createElement(oe,null))},se=t(35),ue=t.n(se);var me=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:ue.a,className:u.a.error,alt:"Error-page "}))},pe=t(11),_e=t.n(pe),de=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(K.a)(e,["options","onChange","onChangeOption"]),c=a?a.map((function(e,a){return r.a.createElement("option",{className:_e.a.option,key:e+"-"+a,value:e},e)})):[];return r.a.createElement("select",Object.assign({className:_e.a.select,onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},l),c)},Ee=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=Object(K.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){l&&l(e),c&&c(e.currentTarget.value)},s=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t,className:_e.a.label},r.a.createElement("input",Object.assign({type:"radio",name:a,checked:e===n,value:e,onChange:i},o,{className:_e.a.radio})),e)})):[];return r.a.createElement(r.a.Fragment,null,s)},fe=["x","y","z"];var ve=function(){var e=Object(n.useState)(fe[1]),a=Object(x.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(de,{options:fe,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(Ee,{name:"radio",options:fe,value:t,onChangeOption:l})))},ge=function(e,a){switch(a.type){case"sort":var t=Object(F.a)(e).sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0}));return"up"===a.payload?t:t.reverse();case"check":return e.filter((function(e){return e.age>=a.payload}));default:return e}},be=t(16),he=t.n(be),Ne=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ke=function(){var e=Object(n.useState)(Ne),a=Object(x.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id,className:he.a.item},r.a.createElement("span",null,e.name),e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("hr",null),"homeworks 8",r.a.createElement("hr",null),c,r.a.createElement("div",null,r.a.createElement(Q,{onClick:function(){return l(ge(Ne,{type:"sort",payload:"up"}))},className:he.a.button},"sort up"),r.a.createElement(Q,{onClick:function(){return l(ge(Ne,{type:"sort",payload:"down"}))},className:he.a.button},"sort down"),r.a.createElement(Q,{onClick:function(){return l(ge(Ne,{type:"check",payload:18}))},className:he.a.button},"check 18")),r.a.createElement("hr",null))};var Ce=function(){return r.a.createElement("div",{className:u.a.bgJunior},r.a.createElement(ve,null),r.a.createElement(ke,null))};var ye=function(){return r.a.createElement("div",null,"content will be here soon")};var je=function(){return r.a.createElement("div",{className:u.a.bg})},Oe="/start-page",Se="/pre-junior",we="/junior",xe="/junior+";var Ae=function(){return r.a.createElement("div",null,r.a.createElement(_.d,null,r.a.createElement(_.b,{path:"/",exact:!0,render:function(){return r.a.createElement(_.a,{to:Oe})}}),r.a.createElement(_.b,{path:Oe,render:function(){return r.a.createElement(je,null)}}),r.a.createElement(_.b,{path:Se,render:function(){return r.a.createElement(ie,null)}}),r.a.createElement(_.b,{path:we,render:function(){return r.a.createElement(Ce,null)}}),r.a.createElement(_.b,{path:xe,render:function(){return r.a.createElement(ye,null)}}),r.a.createElement(_.b,{render:function(){return r.a.createElement(me,null)}})))};var He=function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(p,null),r.a.createElement(Ae,null)))};var We=function(){return r.a.createElement("div",{className:i.a.AppWrapper},r.a.createElement(He,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(We,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[36,1,2]]]);
//# sourceMappingURL=main.22ff2f5c.chunk.js.map