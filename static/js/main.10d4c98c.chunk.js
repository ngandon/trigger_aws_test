(this["webpackJsonpdemo-auth0"]=this["webpackJsonpdemo-auth0"]||[]).push([[0],{45:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(29),s=c.n(a),o=c(7),i=c(19),l=c(33),j=c(32),u=c(2),b=c(6),h=c.n(b),d=c(8),p=c(14),O=(c(45),c(13)),x=c.n(O),f=c(1),v=function(){var e="https://4e319ih020.execute-api.eu-west-3.amazonaws.com",t=Object(o.b)(),c=t.user,r=t.logout,a=t.getAccessTokenSilently,s=Object(n.useState)(""),i=Object(p.a)(s,2),l=i[0],j=i[1],u=Object(n.useState)(!1),b=Object(p.a)(u,2),O=b[0],v=b[1],m=Object(n.useState)([]),g=Object(p.a)(m,2),k=g[0],w=g[1],A=function(){Object(d.a)(h.a.mark((function t(){var c,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c="/default/status",console.log(e+c,l),t.next=5,x.a.get(e+c,{headers:{Authorization:"Bearer "+l,"Access-Control-Allow-Origin":"*"}});case 5:n=t.sent,console.log(n.data),v(!0),w(n.data),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))(),console.log("bonjour")};return Object(n.useEffect)((function(){Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a({audience:"https://minecraft-server-jwt.fr"});case 3:t=e.sent,j(t),console.log(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[a]),O?Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("header",{className:"App-header",children:Object(f.jsxs)("h1",{className:"App-title",children:["Hi ",c.email,"! Welcome to the minecraft server manager page"]})}),Object(f.jsx)("div",{children:Object(f.jsxs)("p",{children:["the status of the server ",Object(f.jsx)("b",{children:k.name})," is ",k.state," on a ",k.machine," machine"]})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:A,children:"Check server status"}),Object(f.jsx)("button",{onClick:function(){Object(d.a)(h.a.mark((function t(){var c,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c="/default/start",console.log(e+c),t.next=5,x.a.post(e+c);case 5:n=t.sent,console.log(n.data),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))(),console.log("bonjour")},children:"Start the server"}),Object(f.jsx)("button",{onClick:function(){Object(d.a)(h.a.mark((function t(){var c,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c="/default/stop",console.log(e+c),t.next=5,x.a.post(e+c);case 5:n=t.sent,console.log(n.data),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))(),console.log("bonjour")},children:"Stop the server"})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:r,children:"Sign Out"})})]}):Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("header",{className:"App-header",children:Object(f.jsxs)("h1",{className:"App-title",children:["Hi ",c.email,"! Welcome to the minecraft server manager page"]})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:A,children:"Check server status"})})]})},m=function(){var e=Object(o.b)().loginWithPopup,t=Object(u.g)();return Object(f.jsx)("button",{onClick:Object(d.a)(h.a.mark((function c(){return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e();case 2:t.push("/secret");case 3:case"end":return c.stop()}}),c)}))),children:"Sign In"})},g=["children"],k=function(){return Object(f.jsx)(j.a,{children:Object(f.jsxs)(u.d,{children:[Object(f.jsx)(u.b,{path:"/sign-in",children:Object(f.jsx)(m,{})}),Object(f.jsx)(w,{path:"/secret",children:Object(f.jsx)(v,{})}),Object(f.jsx)(u.a,{to:"/sign-in"})]})})},w=function(e){var t=e.children,c=Object(l.a)(e,g),n=Object(o.b)(),r=n.isAuthenticated;return n.isLoading?Object(f.jsx)(f.Fragment,{children:"...loading"}):Object(f.jsx)(u.b,Object(i.a)(Object(i.a)({},c),{},{children:r?t:Object(f.jsx)(u.a,{to:"sign-in"})}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(o.a,{domain:"minecraft-server.eu.auth0.com",clientId:"nJL367sqaqGJzXppK9xJV0qgquka1bom",redirectUri:window.location.origin,children:Object(f.jsx)(k,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.10d4c98c.chunk.js.map