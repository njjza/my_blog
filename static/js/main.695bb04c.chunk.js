(this.webpackJsonpmy_blog=this.webpackJsonpmy_blog||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),i=n.n(a),s=n(2),o=n(3),u=n(6),j=n(5),b=n(4),l=n(0),d=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:" Home Page "})})}}]),n}(r.a.Component),h=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:" Reports Page "})})}}]),n}(r.a.Component),O=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"Under Construction, Be Tuned"})})}}]),n}(r.a.Component),m=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:" Blog Page "})})}}]),n}(r.a.Component),p=(n(15),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={renderPage:"HomePage",buttonArray:e.buttons},c.handleClick=c.handleClick.bind(Object(u.a)(c)),c}return Object(o.a)(n,[{key:"handleClick",value:function(e){switch(e.srcElement.innerText){case"Home Page":this.setState((function(e){return{renderPage:"HomePage"}}));break;case"Project Reports":this.setState((function(e){return{renderPage:"Reports"}}));break;case"Blogs":this.setState((function(e){return{renderPage:"Blogs"}}));break;case"Games":this.setState((function(e){return{renderPage:"Games"}}))}}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClick,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClick,!1)}},{key:"render",value:function(){var e;switch(this.state.renderPage){case"HomePage":e=Object(l.jsx)(d,{});break;case"Reports":e=Object(l.jsx)(h,{});break;case"Blogs":e=Object(l.jsx)(m,{});break;case"Games":e=Object(l.jsx)(O,{})}return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"mainViewer",children:e})})}}]),n}(r.a.Component)),g=(n(16),n(17),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.buttons.map((function(e){return Object(l.jsxs)("li",{children:[" ",e.buttonRender()," "]},e.getName())}));return Object(l.jsxs)("header",{children:[Object(l.jsxs)("nav",{children:[Object(l.jsx)("img",{src:"/my_blog/img/home.png",alt:"personal_logo"}),Object(l.jsx)("ul",{children:e})]}),Object(l.jsx)("div",{className:"Separator"})]})}}]),n}(r.a.Component)),f=(n(18),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("footer",{children:[Object(l.jsx)("p",{children:" Built With React "}),Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{href:"http://github.com/njjza",target:"_blanck",children:Object(l.jsx)("img",{src:"/my_blog/img/github.png",alt:"github_link"})}),Object(l.jsx)("a",{href:"http://www.linkedin.com/in/henry-jiang-656554141",target:"_blanck",children:Object(l.jsx)("img",{src:"/my_blog/img/linkedin.png",alt:"linkedin_link"})})]})]})}}]),n}(r.a.Component)),v=n(9),k=Object(v.a)("pageRender");function x(){return Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"this is a test message of button"})})}var y=function(){function e(t){Object(s.a)(this,e),Object.defineProperty(this,k,{value:x}),this.state={buttonName:t,clicked:!1}}return Object(o.a)(e,[{key:"getState",value:function(){return this.state.clicked}},{key:"getName",value:function(){return this.state.buttonName}},{key:"buttonRender",value:function(){return Object(l.jsx)("button",{children:this.state.buttonName},this.state.buttonName)}}]),e}(),P=[new y("Home Page"),new y("Project Reports"),new y("Blogs"),new y("Games")];i.a.render(Object(l.jsx)(g,{buttons:P}),document.getElementById("header")),i.a.render(Object(l.jsx)(p,{buttons:P}),document.getElementById("root")),i.a.render(Object(l.jsx)(f,{}),document.getElementById("footer"))}},[[19,1,2]]]);
//# sourceMappingURL=main.695bb04c.chunk.js.map