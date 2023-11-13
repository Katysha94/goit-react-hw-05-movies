"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[600],{155:function(e,t,n){n.d(t,{O:function(){return l}});var r="MoviesList_movieslist__vOIs9",a="MoviesList_movieLink__QlD4H",c="MoviesList_moviesItem__r+0sq",s="MoviesList_movieImg__bm-8+",u="MoviesList_movieTitle__CxO8p",i=n(689),o=n(87),f=n(184),l=function(e){var t=e.movies,n=(0,i.TH)();return(0,f.jsx)("div",{children:(0,f.jsx)("ul",{className:r,children:t.map((function(e){var r=e.id,i=e.title,l=e.poster_path;return(0,f.jsx)("li",{className:c,children:(0,f.jsxs)(o.rU,{to:"/movies/".concat(r),state:{from:n},className:a,children:[(0,f.jsx)("img",{className:s,src:l?"https://image.tmdb.org/t/p/w500/".concat(l):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:i,width:350}),(0,f.jsx)("h2",{className:u,children:i})]},t.id)},r)}))})})}},346:function(e,t,n){n.d(t,{Cm:function(){return m},Df:function(){return o},HI:function(){return l},TP:function(){return f},TW:function(){return p}});var r=n(861),a=n(757),c=n.n(a),s=n(340),u="https://api.themoviedb.org/3",i="?api_key=fda13f01e3f3a3fa81420b836d301e2c",o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/trending/movie/day").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/movie/").concat(t).concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/search/movie").concat(i,"&query=").concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/movie/").concat(t,"/credits").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/movie/").concat(t,"/reviews").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},600:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(433),a=n(861),c=n(439),s=n(757),u=n.n(s),i="SearchForm_searchForm__NsJpF",o="SearchForm_searchFormInput__3mF-P",f="SearchForm_searchBtn__rp2a7",l=n(791),p=n(87),m=n(346),v=n(155),h=n(686),d=n.n(h),x=n(525),_=n(184),g=function(){var e=(0,p.lr)(),t=(0,c.Z)(e,2),n=t[0],s=t[1],h=n.get("query"),g=(0,l.useState)([]),w=(0,c.Z)(g,2),y=w[0],b=w[1],Z=(0,l.useState)(!1),j=(0,c.Z)(Z,2),k=j[0],S=j[1],N=(0,l.useState)(null),F=(0,c.Z)(N,2),U=F[0],I=F[1];(0,l.useEffect)((function(){if(h){var e=function(){var e=(0,a.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,(0,m.HI)(h);case 4:0===(t=e.sent).length&&d().Notify.failure("Sorry, no matches found..."),b((0,r.Z)(t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),I(e.t0.message);case 12:return e.prev=12,S(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[h]);return(0,_.jsxs)("div",{children:[(0,_.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchKey.value;if(""===t)return d().Notify.failure("Enter movie title!");s({query:t})},children:[(0,_.jsx)("input",{className:o,name:"searchKey",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter movie title..."}),(0,_.jsx)("button",{className:f,type:"submit",children:"Search"})]}),null!==U&&(0,_.jsx)("p",{children:U}),k&&(0,_.jsx)(x.a,{}),(0,_.jsx)(v.O,{movies:y})]})},w=function(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(g,{})})}}}]);
//# sourceMappingURL=600.9b7808e8.chunk.js.map