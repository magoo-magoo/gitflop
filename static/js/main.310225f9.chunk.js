(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(e,t,a){e.exports=a(416)},240:function(e,t,a){},242:function(e,t,a){},416:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),o=a.n(i),s=(a(240),a(22)),c=a(23),l=a(25),u=a(24),h=a(26),m=(a(242),a(109)),p=Object(m.a)({githubToken:"INSERT_YOUR_GITHUB_TOKEN",githubApiGraphQl:"https://api.github.com/graphql",githubApiUrl:"https://api.github.com",organizations:["eflon"]},function(){var e=localStorage.getItem("relator-app-config");return e?JSON.parse(e):{}}()),f=function(){return p},d=function(e){p=Object(m.a)({},p,e),localStorage.setItem("relator-app-config",JSON.stringify(p))},g=a(9),b=a.n(g),v=a(172),E=a(17),y=a(110),k=a(79);function w(){var e=Object(y.a)(['\n{\n    organization(login: "','") {\n      repositories(first: 100) {\n        nodes {\n          name\n          url\n        }\n      }\n    }\n  }  \n']);return w=function(){return e},e}function O(){var e=Object(y.a)(['\n{\norganization(login: "','") {\n  name\n  login\n  url\n  avatarUrl\n  repositories(first: 100) {\n    nodes {\n      name\n      url\n      refs(first: 100, refPrefix: "refs/heads/") {\n        nodes {\n          name\n          id\n          prefix\n          target {\n            commitUrl\n            abbreviatedOid\n            oid\n            id\n            __typename\n            ... on Commit {\n              message\n              pushedDate\n              treeUrl\n            }\n          }\n        }\n      }\n    }\n  }\n}\n}  \n']);return O=function(){return e},e}var x=null,j=function(e){return null!==x?x:function(e,t){return(x=new k.a({uri:t,headers:{Authorization:"token ".concat(e)}})).defaultOptions.query={fetchPolicy:"no-cache"},x}(e,f().githubApiGraphQl)},C=function(e,t){var a=e.match(t);return!(!a||1!==a.length)},B=function(){var e=Object(E.a)(b.a.mark(function e(t){var a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Array,e.next=3,t;case 3:return(n=e.sent).data.organization.repositories.nodes.forEach(function(e){e.refs.nodes.forEach(function(t){a.push({name:t.name,lastCommitHash:t.target.oid,lastMessage:t.target.message,lastCommitShortHash:t.target.abbreviatedOid,commitUrl:t.target.commitUrl,pushedDate:t.target.pushedDate,version:null,feature:null,gitflow:{isFeature:C(t.name,/feature\//),isMaster:C(t.name,/master/),isHotfix:C(t.name,/hotfix\//),isRealease:C(t.name,/release\//),isDevelop:C(t.name,/develop/)},repository:{name:e.name,url:e.url,org:{name:n.data.organization.name,url:n.data.organization.url,avatarUrl:n.data.organization.avatarUrl,login:n.data.organization.login}}})})}),e.abrupt("return",a);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(E.a)(b.a.mark(function e(t){var a,n,r,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&0!==t.length){e.next=2;break}return e.abrupt("return",[]);case 2:a=new Array,n=0;case 4:if(!(n<t.length)){e.next=13;break}return r=t[n],e.next=8,z(r);case 8:i=e.sent,a=a.concat(i);case 10:n++,e.next=4;break;case 13:return e.abrupt("return",a);case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),z=function(e){return B(function(e){return j(f().githubToken).query({query:Object(k.b)(O(),e)})}(e))},N=function(){var e=Object(E.a)(b.a.mark(function e(t,a){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("".concat(f().githubApiUrl,"/repos/").concat(a.repository.org.login,"/").concat(a.repository.name,"/git/refs"),{method:"POST",body:JSON.stringify({ref:"refs/heads/".concat(t),sha:a.lastCommitHash}),headers:{Authorization:"token ".concat(f().githubToken)}});case 4:n=e.sent,console.log("createBranch",n);case 6:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),R=function(){var e=Object(E.a)(b.a.mark(function e(t){var a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Array,e.next=3,t;case 3:return(n=e.sent).data.organization.repositories.nodes.forEach(function(e){a.push({name:e.name,url:e.url,org:{name:n.data.organization.name,url:n.data.organization.url,avatarUrl:n.data.organization.avatarUrl,login:n.data.organization.login}})}),e.abrupt("return",a);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),A=function(e){return R(j(f().githubToken).query({query:Object(k.b)(w(),e)}))},D=a(57),I=a.n(D),U=a(21),W=a.n(U),M=a(8),H=a(166),T=a.n(H),F={root:{width:"100%",overflow:"auto",whiteSpace:"pre"},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center"},column:{flexBasis:"33.33%"},link:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},J=function(e){var t=e.branch;return r.a.createElement("div",{style:F.root},r.a.createElement(M.c,{defaultExpanded:!1},r.a.createElement(M.e,{expandIcon:r.a.createElement(T.a,null)},r.a.createElement("div",{style:F.column},r.a.createElement(M.n,null,t.repository.name)),r.a.createElement("div",{style:F.column},r.a.createElement(M.n,null,t.name))),r.a.createElement(M.d,{style:F.details},r.a.createElement("div",null,r.a.createElement(M.n,{variant:"h6"},"commit hash: ",t.lastCommitShortHash),r.a.createElement(M.n,{align:"justify",noWrap:!0},t.lastMessage),r.a.createElement(M.n,{variant:"caption"},"More info",r.a.createElement("br",null),r.a.createElement("a",{href:t.repository.url,style:F.link},"Go to Github")))),r.a.createElement(M.b,null)))},P=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.branches,a=e.title;return r.a.createElement("div",null,r.a.createElement(I.a,{container:!0,spacing:16},r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(W.a,{variant:"h6"},a),0===t.length?r.a.createElement(W.a,null,"No branch"):t.map(function(e,t){return r.a.createElement(J,{branch:e,key:t})}))))}}]),t}(r.a.Component),G=a(48),q=a.n(G),_=a(36),V=a.n(_),L=a(71),Q=a.n(L),K=a(75),Y=a.n(K),$=a(73),X=a.n($),Z=a(74),ee=a.n(Z),te=a(72),ae=a.n(te),ne=a(167),re=a.n(ne),ie=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleOrganizationChange=function(){var e=Object(E.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({selectedOrganization:t.target.value}),e.next=3,a.updateAvailableRepositories(t.target.value);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleRepositoryChange=function(){var e=Object(E.a)(b.a.mark(function e(t){var n,r,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,a.setState({selectedRepositoryName:n}),e.next=4,S([a.state.selectedOrganization]);case 4:r=e.sent,i=r.filter(function(e){return e.repository.name===n}),a.setState({availableBranches:i,selectedBaseBranch:""});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleBaseBranchChange=function(){var e=Object(E.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({selectedBaseBranch:t.target.value});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.updateAvailableRepositories=function(){var e=Object(E.a)(b.a.mark(function e(t){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:n=e.sent,a.setState({availableRepositories:n,selectedBaseBranch:"",selectedRepositoryName:""});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={open:!1,newBranchName:"release/NEW_VERSION",availableRepositories:[],availableBranches:[],selectedOrganization:"",selectedRepositoryName:"",selectedBaseBranch:""},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({selectedOrganization:f().organizations[0]}),e.next=3,this.updateAvailableRepositories(f().organizations[0]);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.onCreated;return r.a.createElement("div",null,r.a.createElement(M.f,{color:"primary",variant:"extended","aria-label":"Create release",onClick:this.handleClickOpen},r.a.createElement(re.a,null),"Create release"),r.a.createElement(Q.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},r.a.createElement(ae.a,{id:"form-dialog-title"},"Create next release"),r.a.createElement(X.a,null,r.a.createElement(ee.a,null,"Create next release. May be a release or hotfix branch. Choose your organization, repository and branch name."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(M.g,{fullWidth:!0},r.a.createElement(V.a,{label:"organization",select:!0,value:this.state.selectedOrganization,onChange:this.handleOrganizationChange,inputProps:{name:"organization",id:"organization"},fullWidth:!0},f().organizations.map(function(e,t){return r.a.createElement(M.k,{key:t,value:e},e)}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(M.g,{fullWidth:!0},r.a.createElement(V.a,{label:"repository",fullWidth:!0,select:!0,value:this.state.selectedRepositoryName,onChange:this.handleRepositoryChange,inputProps:{name:"repository",id:"repository"}},this.state.availableRepositories.map(function(e,t){return r.a.createElement(M.k,{key:t,value:e.name},e.name)}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(M.g,{fullWidth:!0},r.a.createElement(V.a,{label:"baseBranch",fullWidth:!0,select:!0,value:this.state.selectedBaseBranch,onChange:this.handleBaseBranchChange,inputProps:{name:"baseBranch",id:"baseBranch"}},this.state.availableBranches.map(function(e,t){return r.a.createElement(M.k,{key:t,value:e.name},e.name)}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(V.a,{autoFocus:!0,margin:"dense",id:"branchName",label:"Branch name",type:"text",fullWidth:!0,value:this.state.newBranchName,onChange:function(t){return e.setState({newBranchName:t.target.value})}})),r.a.createElement(Y.a,null,r.a.createElement(q.a,{onClick:this.handleClose,color:"primary"},"Cancel"),r.a.createElement(q.a,{onClick:Object(E.a)(b.a.mark(function a(){return b.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.state.newBranchName||!e.state.selectedBaseBranch){a.next=7;break}return a.next=4,N(e.state.newBranchName,e.state.availableBranches.find(function(t){return t.name===e.state.selectedBaseBranch}));case 4:return a.next=6,t();case 6:e.handleClose();case 7:case"end":return a.stop()}},a,this)})),color:"primary"},"Create"))))}}]),t}(r.a.Component),oe={container:{padding:16}},se=function(e,t){return Math.round(72/(e%2===0?e+1:e-1)/t)},ce=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).reload=Object(E.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(f().organizations);case 2:t=e.sent,a.setState({branches:Object(v.a)(t)});case 4:case"end":return e.stop()}},e,this)})),a.state={branches:[],releases:!0,features:!0,productions:!0,developments:!0,others:!0,hotfix:!0},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.reload();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,a=[];this.state.features&&a.push({key:"Features",branches:this.state.branches.filter(function(e){return e.gitflow.isFeature})}),this.state.releases&&a.push({key:"Releases",branches:this.state.branches.filter(function(e){return e.gitflow.isRealease})}),this.state.hotfix&&a.push({key:"Hotfixes",branches:this.state.branches.filter(function(e){return e.gitflow.isHotfix})}),this.state.developments&&a.push({key:"Development",branches:this.state.branches.filter(function(e){return e.gitflow.isDevelop})}),this.state.productions&&a.push({key:"Production",branches:this.state.branches.filter(function(e){return e.gitflow.isMaster})}),this.state.others&&a.push({key:"Other",branches:this.state.branches.filter(function(e){return!e.gitflow.isMaster&&!e.gitflow.isDevelop&&!e.gitflow.isFeature&&!e.gitflow.isHotfix&&!e.gitflow.isRealease})});var n=a.length;return e=a.map(function(e){return r.a.createElement(M.j,{key:e.key,item:!0,xs:se(n,1),sm:se(n,2),md:se(n,3),lg:se(n,4),xl:se(n,6)},r.a.createElement(P,{title:e.key,branches:e.branches}))}),r.a.createElement("div",{style:oe.container},r.a.createElement(ie,{onCreated:this.reload}),r.a.createElement(M.i,{row:!0},r.a.createElement(M.h,{control:r.a.createElement(M.l,{checked:this.state.features,onChange:function(){t.setState({features:!t.state.features})},value:"checkedA"}),label:"Features"}),r.a.createElement(M.h,{control:r.a.createElement(M.l,{checked:this.state.releases,onChange:function(){t.setState({releases:!t.state.releases})},value:"checkedA"}),label:"Releases"}),r.a.createElement(M.h,{control:r.a.createElement(M.l,{checked:this.state.hotfix,onChange:function(){t.setState({hotfix:!t.state.hotfix})},value:"checkedA"}),label:"Hotfixes"}),r.a.createElement(M.h,{control:r.a.createElement(M.l,{checked:this.state.developments,onChange:function(){t.setState({developments:!t.state.developments})},value:"checkedA"}),label:"Developments"}),r.a.createElement(M.h,{control:r.a.createElement(M.l,{checked:this.state.productions,onChange:function(){t.setState({productions:!t.state.productions})},value:"checkedA"}),label:"Production"}),r.a.createElement(M.h,{control:r.a.createElement(M.l,{checked:this.state.others,onChange:function(){t.setState({others:!t.state.others})},value:"checkedA"}),label:"Others"})),r.a.createElement(M.j,{container:!0,direction:"row",spacing:32},e))}}]),t}(r.a.Component),le=a(45),ue=a(76),he=a.n(ue),me=a(77),pe=a.n(me),fe=a(35),de=a.n(fe),ge=a(33),be=a.n(ge),ve=a(34),Ee=a(20),ye=a(170),ke=a.n(ye),we=a(171),Oe=a.n(we),xe=a(169),je=a.n(xe),Ce=a(58),Be=Object(Ee.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(le.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(le.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ve.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ve.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(le.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(function(e){var t=e.classes;return t?r.a.createElement("div",{className:t.root},r.a.createElement(he.a,{position:"static"},r.a.createElement(pe.a,null,r.a.createElement(W.a,{className:t.title,variant:"h6",color:"inherit",noWrap:!0,onClick:function(){return Object(Ce.b)("/gitflop/")}},"Git Flop"),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(je.a,null)),r.a.createElement(be.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput}})),r.a.createElement(de.a,{color:"inherit","aria-label":"settings",onClick:function(){return Object(Ce.b)("/gitflop/configuration")}},r.a.createElement(ke.a,null)),r.a.createElement(de.a,{color:"inherit","aria-label":"settings",onClick:function(){d({githubToken:null}),location.reload()}},r.a.createElement(Oe.a,null))))):r.a.createElement(r.a.Fragment,null)}),Se={settings:{width:"100%"}},ze=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={settingsValue:JSON.stringify(e.settings)},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.settings;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.n,{variant:"h4"},"Settings"),r.a.createElement(M.m,{id:"outlined-multiline-static",label:"Settings",multiline:!0,rowsMax:"20",defaultValue:JSON.stringify(t,null,4),margin:"normal",variant:"standard",style:Se.settings,onChange:function(t){return e.setState({settingsValue:t.target.value})}}),r.a.createElement(M.a,{variant:"contained",color:"secondary",onClick:function(){d(JSON.parse(e.state.settingsValue)),location.href="/"}},"Save"))}}]),t}(r.a.Component),Ne=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidCatch",value:function(e){console.log(e)}},{key:"render",value:function(){return n.createElement("div",{className:"App"},n.createElement(Be,null),n.createElement(Ce.a,null,n.createElement(ze,{path:"/gitflop/configuration",settings:f()}),n.createElement(ce,{path:"/gitflop/"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[235,2,1]]]);
//# sourceMappingURL=main.310225f9.chunk.js.map