(this["webpackJsonpmemo-ex4"]=this["webpackJsonpmemo-ex4"]||[]).push([[0],{60:function(A,e,t){},61:function(A,e,t){},62:function(A,e,t){},71:function(A,e,t){},72:function(A,e,t){},84:function(A,e,t){},85:function(A,e,t){},86:function(A,e,t){"use strict";t.r(e);var n=t(1),r=t.n(n),c=t(22),i=t.n(c),a=(t(60),t(25)),o=(t(61),t(62),t(103)),s=t(106),u=t(104),g=t(37),d=t.n(g),B=t(4);function l(A){A.etatTaches,A.utilisateur;return Object(B.jsxs)("footer",{className:"Controle",children:[Object(B.jsxs)(s.a,{size:"small",exclusive:!0,children:[Object(B.jsx)(o.a,{value:"toutes",children:"Toutes"}),Object(B.jsx)(o.a,{value:!0,children:"Compl\xe9t\xe9es"}),Object(B.jsx)(o.a,{value:!1,children:"Actives"})]}),Object(B.jsx)("span",{className:"compte",children:"?? t\xe2ches restantes"}),Object(B.jsx)(u.a,{"aria-label":"delete",size:"small",variant:"contained",color:"secondary",onClick:function(){return alert("Rien pour le moment")},title:"Supprimer les t\xe2ches compl\xe9t\xe9es",children:Object(B.jsx)(d.a,{fontSize:"small"})})]})}var p=t(26),Y=t(19);t(71);function j(A){var e=A?new Date(1e3*A.seconds):new Date,t=function(A){return(A<10?"0":"")+A};return"".concat(e.getDate()," ").concat(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"][e.getMonth()]," ").concat(e.getFullYear(),"\n            \xe0 ").concat(t(e.getHours()),":").concat(t(e.getMinutes()),":").concat(t(e.getSeconds()))}var m=t(49),b=t.n(m);function f(A){var e=A.id,t=A.texte,n=A.completee,r=A.date,c=A.supprimerTache,i=A.etatCompleter;return Object(B.jsxs)("div",{className:"Tache "+(n&&" completee"),children:[Object(B.jsx)(u.a,{onClick:function(){return i(e,n)},size:"small",color:"primary",title:"Cliquez pour marquer cette t\xe2che compl\xe9t\xe9e",children:Object(B.jsx)(b.a,{})}),Object(B.jsx)("span",{className:"texte",children:t}),Object(B.jsxs)("span",{className:"date",children:["(",j(r),")"]}),Object(B.jsx)(u.a,{size:"small",color:"primary",title:"Supprimer cette t\xe2che",children:Object(B.jsx)(d.a,{onClick:function(){return c(e)}})})]})}t(72);var v=t(18),I=t.n(v),E=t(32),G=t(3),D={apiKey:"AIzaSyAgNqnVCfNYt4HMyCUNBgeqWERRHYS6v5c",authDomain:"react---prog-reactive.firebaseapp.com",projectId:"react---prog-reactive",storageBucket:"react---prog-reactive.appspot.com",messagingSenderId:"709186676471",appId:"1:709186676471:web:55a5ba4fe20acc98b5d5f2"},Q="memo-utilisateurs",C="taches",N=t(50);t(87);G.a.apps.length||G.a.initializeApp(D);var x=G.a.auth(),S=new N.a.AuthUI(x),q=G.a.firestore();function h(){return(h=Object(E.a)(I.a.mark((function A(e,t){return I.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t.date=G.a.firestore.FieldValue.serverTimestamp(),A.abrupt("return",q.collection(Q).doc(e).collection(C).add(t).then((function(A){return A.get()})));case 2:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function O(){return(O=Object(E.a)(I.a.mark((function A(e){var t;return I.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t=[],A.abrupt("return",q.collection(Q).doc(e).collection(C).orderBy("date","desc").get().then((function(A){return A.forEach((function(A){t.push(Object(p.a)({id:A.id},A.data()))}))})).then((function(){return t})));case 2:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function T(){return(T=Object(E.a)(I.a.mark((function A(e,t){return I.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",q.collection(Q).doc(e).collection(C).doc(t).delete());case 1:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function k(){return(k=Object(E.a)(I.a.mark((function A(e,t,n){return I.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",q.collection(Q).doc(e).collection(C).doc(t).update({completee:!n}));case 1:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function w(A){var e=A.etatTaches,t=A.utilisateur.uid,r=Object(a.a)(e,2),c=r[0],i=r[1];function o(A,e){e.preventDefault();var t=e.target.texteTache.value;""!==t.trim()&&(e.target.reset(),function(A,e){return h.apply(this,arguments)}(A,{texte:t,completee:!1}).then((function(A){return i([].concat(Object(Y.a)(c),[Object(p.a)({id:A.id},A.data())]))})))}function s(A){(function(A,e){return T.apply(this,arguments)})(t,A).then((function(){i(c.filter((function(e){return e.id!==A})))}))}function u(A,e){(function(A,e,t){return k.apply(this,arguments)})(t,A,e).then((function(){i(c.map((function(t){return t.id===A&&(t.completee=!e),t})))}))}return Object(n.useEffect)((function(){return function(A){return O.apply(this,arguments)}(t).then((function(A){return i(A)}))}),[i,t]),Object(B.jsxs)("section",{className:"Taches",children:[Object(B.jsx)("form",{onSubmit:function(A){return o(t,A)},children:Object(B.jsx)("input",{type:"text",placeholder:"Ajoutez une t\xe2che ...",name:"texteTache",autoComplete:"off",autoFocus:!0})}),Object(B.jsx)("div",{className:"listeTaches",children:c.map((function(A){return Object(B.jsx)(f,Object(p.a)(Object(p.a)({},A),{},{etatCompleter:u,supprimerTache:s}),A.id)}))})]})}t(83);function X(A){x.onAuthStateChanged((function(e){var t,n,r;A(e),e&&(t=e.uid,n=e.displayName,r=e.email,q.collection(Q).doc(t).set({nom:n,courriel:r},{merge:!0}))}))}t(84);function P(){return Object(n.useEffect)((function(){return A="#firebaseui-widget",void S.start(A,{signInOptions:[{provider:G.a.auth.GoogleAuthProvider.PROVIDER_ID,fullLabel:"Connexion avec Google"}],signInFlow:"popup"});var A}),[]),Object(B.jsxs)("div",{className:"Accueil",children:[Object(B.jsx)("h3",{className:"logo",children:"Memo"}),Object(B.jsx)("div",{id:"firebaseui-widget"})]})}t(85);var V=t(107),Z=t(105);function J(A){var e=A.utilisateur;return Object(B.jsxs)("div",{className:"Utilisateur",children:[Object(B.jsx)("span",{className:"nom",children:e.displayName}),Object(B.jsx)(V.a,{className:"avatar",alt:"Alibaba",src:e.photoURL}),Object(B.jsx)(Z.a,{variant:"outlined",size:"small",className:"btnDeconnexion",onClick:function(){x.signOut()},children:"D\xe9connexion"})]})}function U(){var A=Object(n.useState)(null),e=Object(a.a)(A,2),t=e[0],r=e[1];Object(n.useEffect)((function(){return X(r)}),[]);var c=Object(n.useState)([]);return t?Object(B.jsxs)("div",{className:"Appli",children:[Object(B.jsxs)("header",{className:"appliEntete",children:[Object(B.jsx)("img",{src:"data:image/png;base64,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",className:"appliLogo",alt:"Memo"}),Object(B.jsx)(J,{utilisateur:t})]}),Object(B.jsx)(w,{etatTaches:c,utilisateur:t}),Object(B.jsx)(l,{etatTaches:c,utilisateur:t})]}):Object(B.jsx)(P,{})}i.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(U,{})}),document.getElementById("racine"))}},[[86,1,2]]]);