(this.webpackJsonpfinal_react=this.webpackJsonpfinal_react||[]).push([[0],{15:function(e,t,a){e.exports={wrap:"App_wrap__252Gz",school_link:"App_school_link__158ZA",school_logo:"App_school_logo__3Cguz",section:"App_section__2f_Zr",link:"App_link__2aolp",active:"App_active__1Q47y"}},17:function(e,t,a){e.exports={wrap:"TodoFilter_wrap__1GFld",button_group:"TodoFilter_button_group__ocEHo",button:"TodoFilter_button__2fcJG",items_count:"TodoFilter_items_count__28GUA",selected:"TodoFilter_selected__rS4aE"}},19:function(e,t,a){e.exports={repo_name_wrap:"Repository_repo_name_wrap__1Le70",repo_name_link:"Repository_repo_name_link__37EiD",info_about_repo:"Repository_info_about_repo__3PgQc",language:"Repository_language__3Ao2o",star:"Repository_star__2J25G",forks:"Repository_forks__k3dKI",date:"Repository_date__EqnP3",html_circle:"Repository_html_circle__1SoVm",css_circle:"Repository_css_circle__TuYO8",js_circle:"Repository_js_circle__1RckQ"}},20:function(e,t,a){e.exports={wrap:"RepoList_wrap__21Ech",repo_list:"RepoList_repo_list__29D1x",repo_name_wrap:"RepoList_repo_name_wrap__3VHQC",buttons_wrap:"RepoList_buttons_wrap__1vDyb",button:"RepoList_button__m2gvP",disabled:"RepoList_disabled__3tRHZ"}},26:function(e,t,a){e.exports={item_wrap:"Item_item_wrap__1Fc3W",checkbox:"Item_checkbox__ZjBhf",checkbox_label:"Item_checkbox_label__1_qIH",item_text:"Item_item_text__2qHJw",delete_icon:"Item_delete_icon__1V8rY",item_done:"Item_item_done__1k9Hp",pencil_icon:"Item_pencil_icon__33i-S",pencil_icon_done:"Item_pencil_icon_done__32imf"}},27:function(e,t,a){e.exports={wrap:"Contacts_wrap__2NgAR",email_link:"Contacts_email_link__2fp8r",phone_link:"Contacts_phone_link__2ktwr",social_networks:"Contacts_social_networks__2lYis",github:"Contacts_github__1zjhD",vk:"Contacts_vk__2DJua",instagram:"Contacts_instagram__3vexk",facebook:"Contacts_facebook__2beVA"}},29:function(e,t,a){e.exports={input:"InputItem_input__97VON",input_wrap:"InputItem_input_wrap__1O2JY",empty_field:"InputItem_empty_field__2esau",exist_field:"InputItem_exist_field__3XNiO",input_field:"InputItem_input_field__1mNRM",button:"InputItem_button__3MZs3"}},34:function(e,t,a){e.exports={item_list:"ItemList_item_list__Lj-Zk",empty_list:"ItemList_empty_list__AXjjr",no_deals_picture:"ItemList_no_deals_picture__21byc",no_deals_message:"ItemList_no_deals_message__K3OE1",do_it_message:"ItemList_do_it_message__3gIto"}},37:function(e,t,a){e.exports={wrap:"Todo_wrap__1q9ar",header:"Todo_header__2NQzI",title:"Todo_title__1Cyq9",items_section:"Todo_items_section__Dkeza"}},4:function(e,t,a){e.exports={wrap:"About_wrap__2PCv4",preloader:"About_preloader__3IZOm",title:"About_title__O4a-W",user_card:"About_user_card__1e8H9",user:"About_user__fVpoI",info_about_user:"About_info_about_user__2MI5Y",bio:"About_bio__2-Sym",email:"About_email__3YjYI",phone:"About_phone__1Yc0Z",name:"About_name__18muE",repo_card:"About_repo_card__15JRF",repositories:"About_repositories__1Bvr8",repo:"About_repo__1Yg3k",user_avatar:"About_user_avatar__wPG5S",error_wrap:"About_error_wrap__2D0SV",error:"About_error__3lkTx",error_image:"About_error_image__3BshS",error_message:"About_error_message__Vd049",message_try_again:"About_message_try_again__1IA6F"}},70:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(38),c=a.n(i),o=a(42),r=a(6),l=a(86),_=a(85),u=a(52),d=a(25),m=a(7),j=a(22),p=a(8),b=a(9),h=a(3),O=a(12),f=a.n(O),x=a(29),g=a.n(x),k=a(0),v=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={inputValue:""},e.onButtonClick=function(){e.setState({inputValue:""}),e.props.onClickAdd(e.state.inputValue)},e}return Object(j.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props,s=a.isEmpty,n=a.isExist;return Object(k.jsxs)("div",{className:g.a.input,children:[Object(k.jsx)("div",{className:f()((e={},Object(h.a)(e,g.a.input_wrap,!0),Object(h.a)(e,g.a.empty_field,s),Object(h.a)(e,g.a.exist_field,n),e)),children:Object(k.jsx)("input",{type:"text",placeholder:"\u041f\u0440\u043e\u0441\u0442\u043e \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u044e\u0434\u0430 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430...",className:g.a.input_field,value:this.state.inputValue,onChange:function(e){return t.setState({inputValue:e.target.value})}})}),Object(k.jsx)("div",{className:g.a.button,onClick:this.onButtonClick})]})}}]),a}(n.a.Component),N=v,C=a(26),w=a.n(C),y=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).onClickDefocus=function(){e.props.onChangeItem(document.getElementById(e.props.id).textContent,e.props.id)},e}return Object(j.a)(a,[{key:"render",value:function(){var e,t,a=this.props,s=a.value,n=a.isDone,i=a.id,c=a.onClickDone,o=a.onClickDelete,r=a.onClickRedact;return Object(k.jsxs)("div",{className:w.a.item_wrap,children:[Object(k.jsx)("input",{type:"checkbox",className:w.a.checkbox,checked:n,onChange:function(){}}),Object(k.jsx)("label",{htmlFor:"checkbox",className:w.a.checkbox_label,onClick:function(){return c(i)},children:Object(k.jsx)("div",{id:i,className:f()((e={},Object(h.a)(e,w.a.item_text,!0),Object(h.a)(e,w.a.item_done,n),e)),contentEditable:!1,onBlur:this.onClickDefocus,children:s})}),Object(k.jsx)("div",{className:f()((t={},Object(h.a)(t,w.a.pencil_icon,!0),Object(h.a)(t,w.a.pencil_icon_done,n),t)),onClick:function(){return r(i,n)}}),Object(k.jsx)("div",{className:w.a.delete_icon,onClick:function(){return o(i)}})]})}}]),a}(n.a.Component);y.defaultProps={value:"\u0417\u0430\u0434\u0430\u0447\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"};var I=y,A=a(34),R=a.n(A),S=function(e){var t=e.sorting,a=e.sortingValue,s=e.onClickDone,n=e.onClickDelete,i=e.onClickRedact,c=e.onChangeItem;return Object(k.jsx)("div",{children:0===t.length&"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"!==a?Object(k.jsxs)("div",{className:R.a.empty_list,children:[Object(k.jsx)("div",{className:R.a.no_deals_picture}),Object(k.jsx)("p",{className:R.a.no_deals_message,children:"\u0412\u044b \u0435\u0449\u0451 \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u043d\u0438 \u043e\u0434\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(k.jsx)("p",{className:R.a.do_it_message,children:"\u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u044d\u0442\u043e \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441!"})]}):Object(k.jsx)("ul",{className:R.a.item_list,children:t.map((function(e){return Object(k.jsx)(I,{value:e.value,isDone:e.isDone,id:e.id,onClickDone:s,onClickDelete:n,onClickRedact:i,onChangeItem:c},e.id)}))})})},D=a(17),E=a.n(D),L=function(e){var t,a,s,n=e.items,i=e.onClickSort,c=e.sorting,o=n.filter((function(e){return e.isDone})).length,r=n.filter((function(e){return!e.isDone})).length,l=n.length;return Object(k.jsx)("div",{className:E.a.wrap,children:Object(k.jsxs)("div",{className:E.a.button_group,children:[Object(k.jsxs)("button",{className:f()((t={},Object(h.a)(t,E.a.button,!0),Object(h.a)(t,E.a.selected,"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"===c),t)),onClick:function(){return i("\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435")},children:["\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435",Object(k.jsx)("span",{className:E.a.items_count,children:o})]}),Object(k.jsxs)("button",{className:f()((a={},Object(h.a)(a,E.a.button,!0),Object(h.a)(a,E.a.selected,"\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"===c),a)),onClick:function(){return i("\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435")},children:["\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435",Object(k.jsx)("span",{className:E.a.items_count,children:r})]}),Object(k.jsxs)("button",{className:f()((s={},Object(h.a)(s,E.a.button,!0),Object(h.a)(s,E.a.selected,"\u0412\u0441\u0435"===c),s)),onClick:function(){return i("\u0412\u0441\u0435")},children:["\u0412\u0441\u0435",Object(k.jsx)("span",{className:E.a.items_count,children:l})]})]})})},B=a(37),V=a.n(B),J="\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435",T="\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435",F="\u0412\u0441\u0435",z=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={items:JSON.parse(localStorage.getItem("editedDealList"))||[],count:JSON.parse(localStorage.getItem("count"))||0,isEmpty:!1,isExist:!1,isEditing:!1,sorting:F},e.onClickDone=function(t){if(!e.state.isEditing){var a=e.state.items.map((function(e){var a=Object(d.a)({},e);return e.id===t&&(a.isDone=!e.isDone),a}));e.setState({items:a})}},e.onClickDelete=function(t){var a=e.state.items.filter((function(e){return e.id!==t}));e.setState({items:a})},e.onClickAdd=function(t){""!==t&!e.state.items.some((function(e){return e.value.toLowerCase()===t.toLowerCase()}))?e.setState((function(e){return{items:[].concat(Object(u.a)(e.items),[{value:t,isDone:!1,id:e.count+1}]),count:e.count+1,isEmpty:!1,isExist:!1}})):e.setState((function(e){return{isEmpty:""===t,isExist:""!==t}}))},e.onClickRedact=function(t,a){a||(document.getElementById(t).contentEditable=!0,document.getElementById(t).focus(),e.setState({isEditing:!0}))},e.onChangeItem=function(t,a){var s=e.state.items.map((function(e){var s=Object(d.a)({},e);return e.id===a&&(s.value=t),s}));setTimeout((function(){e.setState((function(e){return{items:s,isEditing:!1}}))}),200),document.getElementById(a).contentEditable=!1},e.onClickSort=function(t){return e.setState({sorting:t})},e}return Object(j.a)(a,[{key:"render",value:function(){var e=JSON.stringify(this.state.items);localStorage.setItem("editedDealList",e);var t,a=JSON.stringify(this.state.count);switch(localStorage.setItem("count",a),this.state.sorting){case J:t=this.state.items.filter((function(e){return e.isDone}));break;case T:t=this.state.items.filter((function(e){return!e.isDone}));break;case F:t=this.state.items}return Object(k.jsxs)(l.a,{className:V.a.wrap,children:[Object(k.jsxs)("div",{className:V.a.header,children:[Object(k.jsx)("h1",{className:V.a.title,children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043c\u043e\u0438\u0445 \u0434\u0435\u043b"}),Object(k.jsx)(L,{items:this.state.items,onClickSort:this.onClickSort,sorting:this.state.sorting})]}),Object(k.jsxs)("div",{className:V.a.items_section,children:[Object(k.jsx)(S,{sorting:t,sortingValue:this.state.sorting,onClickDone:this.onClickDone,onClickDelete:this.onClickDelete,onClickRedact:this.onClickRedact,onChangeItem:this.onChangeItem}),Object(k.jsx)(N,{onClickAdd:this.onClickAdd,isEmpty:this.state.isEmpty,isExist:this.state.isExist})]})]})}}]),a}(n.a.Component),Y=z,H=a(51),U=a(27),Z=a.n(U),G=function(){return Object(k.jsxs)("div",{className:Z.a.wrap,children:[Object(k.jsx)("a",{href:"mailto:ivanova.ov_87@mail.ru",className:Z.a.email_link,children:"ivanova.ov_87@mail.ru"}),Object(k.jsx)("a",{href:"tg://resolve?domain=ivanova_2807",className:Z.a.phone_link,children:"+7(925)781-76-97"}),Object(k.jsxs)("div",{className:Z.a.social_networks,children:[Object(k.jsx)("a",{href:"https://github.com/Lesenok2807",target:"_blank",rel:"noopener noreferrer",children:Object(k.jsx)("div",{className:Z.a.github,name:"github",content:""})}),Object(k.jsx)("a",{href:"https://vk.com/id40188189",target:"_blank",rel:"noopener noreferrer",children:Object(k.jsx)("div",{className:Z.a.vk,alt:"vk"})}),Object(k.jsx)("a",{href:"https://www.instagram.com/damon_musk/",target:"_blank",rel:"noopener noreferrer",children:Object(k.jsx)("div",{className:Z.a.instagram,alt:"instagram"})}),Object(k.jsx)("a",{href:"https://www.facebook.com/damon.musk",target:"_blank",rel:"noopener noreferrer",children:Object(k.jsx)("div",{className:Z.a.facebook,alt:"facebook"})})]})]})},P=a(19),q=a.n(P),M=function(e){var t,a=e.url,s=e.name,n=e.language,i=e.stargazers_count,c=e.forks_count,o=e.updated_at;return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:q.a.repo_name_wrap,children:Object(k.jsx)("a",{href:a,className:q.a.repo_name_link,target:"_blank",rel:"noopener noreferrer",children:s})}),Object(k.jsxs)("div",{className:q.a.info_about_repo,children:[Object(k.jsx)("span",{className:f()((t={},Object(h.a)(t,q.a.language,!0),Object(h.a)(t,q.a.html_circle,"HTML"===n),Object(h.a)(t,q.a.css_circle,"CSS"===n),Object(h.a)(t,q.a.js_circle,"JavaScript"===n),t)),children:n}),Object(k.jsx)("span",{className:q.a.star,children:i}),Object(k.jsx)("span",{className:q.a.forks,children:c}),Object(k.jsx)("span",{className:q.a.date,children:"Updated on "+new Date(o).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})})]})]})},Q=a(20),K=a.n(Q),W=function(e){var t,a,s=e.repoList,n=e.onClickNext,i=e.onClickBack,c=e.firstRepo,o=e.lastRepo;return Object(k.jsx)("div",{className:K.a.wrap,children:s.length<4?Object(k.jsx)("ol",{className:K.a.repo_list,children:s.map((function(e){return Object(k.jsx)("ul",{className:K.a.repo_name_wrap,children:Object(k.jsx)(M,{url:e.svn_url,name:e.name,language:e.language,stargazers_count:e.stargazers_count,forks_count:e.forks_count,updated_at:e.updated_at})},e.id)}))}):Object(k.jsxs)("div",{children:[Object(k.jsx)("ol",{className:K.a.repo_list,children:s.slice(c,o).map((function(e){return Object(k.jsx)("ul",{className:K.a.repo_name_wrap,children:Object(k.jsx)(M,{url:e.svn_url,name:e.name,language:e.language,stargazers_count:e.stargazers_count,forks_count:e.forks_count,updated_at:e.updated_at})},e.id)}))}),Object(k.jsxs)("div",{className:K.a.buttons_wrap,children:[Object(k.jsx)("button",{className:f()((t={},Object(h.a)(t,K.a.button,!0),Object(h.a)(t,K.a.disabled,0===c),t)),onClick:function(){return i()},disabled:0===c,children:"\u041d\u0430\u0437\u0430\u0434"}),Object(k.jsx)("button",{className:f()((a={},Object(h.a)(a,K.a.button,!0),Object(h.a)(a,K.a.disabled,s.length-o<=0),a)),onClick:function(){return n()},disabled:s.length-o<=0,children:"\u0414\u0430\u043b\u0435\u0435"})]})]})})},X=a(4),$=a.n(X),ee=new H.a,te="Lesenok2807",ae=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,repoList:[],infoAboutUser:[],isError:!1,firstRepo:0,lastRepo:5},e.onClickNext=function(){e.setState({firstRepo:e.state.firstRepo+4,lastRepo:e.state.lastRepo+4})},e.onClickBack=function(){e.setState({firstRepo:e.state.firstRepo-4,lastRepo:e.state.lastRepo-4})},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;ee.repos.listForUser({username:te}).then((function(t){var a=t.data;e.setState({repoList:a,isLoading:!1})})).catch((function(){e.setState({isLoading:!1,isError:!0})})),ee.users.getByUsername({username:te}).then((function(t){var a=t.data;e.setState({infoAboutUser:a,isLoading:!1})})).catch((function(){e.setState({isLoading:!1,isError:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.repoList,s=e.isError,n=e.infoAboutUser;return Object(k.jsxs)("div",{className:$.a.wrap,children:[Object(k.jsx)(l.a,{className:$.a.user_card,children:t?Object(k.jsx)("div",{className:$.a.preloader}):Object(k.jsx)("div",{children:s?Object(k.jsxs)("div",{className:$.a.info_about_user,children:[Object(k.jsx)("h1",{className:$.a.name,children:"\u041e\u043b\u0435\u0441\u044f \u0418\u0432\u0430\u043d\u043e\u0432\u0430"}),Object(k.jsx)(G,{})]}):Object(k.jsxs)("div",{className:$.a.user,children:[Object(k.jsx)("img",{src:n.avatar_url,alt:"\u0424\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:$.a.user_avatar}),Object(k.jsxs)("div",{className:$.a.info_about_user,children:[Object(k.jsx)("h1",{className:$.a.name,children:"\u041e\u043b\u0435\u0441\u044f \u0418\u0432\u0430\u043d\u043e\u0432\u0430"}),Object(k.jsx)("div",{className:$.a.bio,children:n.bio}),Object(k.jsx)(G,{})]})]})})}),Object(k.jsx)(l.a,{className:$.a.repo_card,children:t?Object(k.jsxs)("div",{children:[Object(k.jsx)("h3",{className:$.a.title,children:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 github.com"}),Object(k.jsx)("div",{className:$.a.preloader})]}):Object(k.jsx)("div",{children:s?Object(k.jsxs)("div",{className:$.a.error_wrap,children:[Object(k.jsx)("h3",{className:$.a.title,children:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 github.com"}),Object(k.jsxs)("div",{className:$.a.error,children:[Object(k.jsx)("div",{className:$.a.error_image}),Object(k.jsx)("p",{className:$.a.error_message,children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."}),Object(k.jsxs)("p",{className:$.a.message_try_again,children:["\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 ",Object(k.jsx)("a",{href:".",children:"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"})," \u0435\u0449\u0451 \u0440\u0430\u0437"]})]})]}):Object(k.jsx)("div",{children:0===a.length?Object(k.jsxs)("div",{className:$.a.error_wrap,children:[Object(k.jsx)("h3",{className:$.a.title,children:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 github.com"}),Object(k.jsxs)("div",{className:$.a.error,children:[Object(k.jsx)("div",{className:$.a.error_image}),Object(k.jsx)("p",{className:$.a.error_message,children:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"}),Object(k.jsxs)("p",{className:$.a.message_try_again,children:["\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u0438\u043d \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u043d\u0430 ",Object(k.jsx)("a",{href:"github.com",children:"github.com"})]})]})]}):Object(k.jsx)(W,{repoList:a,infoAboutUser:n,onClickNext:this.onClickNext,onClickBack:this.onClickBack,firstRepo:this.state.firstRepo,lastRepo:this.state.lastRepo})})})})]})}}]),a}(n.a.Component),se=ae,ne=a(15),ie=a.n(ne),ce=function(){return Object(k.jsx)(o.a,{children:Object(k.jsxs)("div",{className:ie.a.wrap,children:[Object(k.jsx)("a",{href:"https://webheroschool.ru/",target:"_blank",rel:"noopener noreferrer",className:ie.a.school_link,children:Object(k.jsx)("img",{className:ie.a.school_logo})}),Object(k.jsxs)(_.a,{className:ie.a.section,children:[Object(k.jsx)(o.b,{to:"/",exact:!0,className:ie.a.link,activeClassName:ie.a.active,children:"\u041e\u0431\u043e \u043c\u043d\u0435"}),Object(k.jsx)(o.b,{to:"/todo",className:ie.a.link,activeClassName:ie.a.active,children:"\u0414\u0435\u043b\u0430"})]}),Object(k.jsxs)(l.a,{className:ie.a.context,children:[Object(k.jsx)(r.a,{path:"/",className:ie.a.component,exact:!0,component:se}),Object(k.jsx)(r.a,{path:"/todo",className:ie.a.component,activeClassName:ie.a.active,component:Y})]})]})})};c.a.render(Object(k.jsx)(ce,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.cb95339b.chunk.js.map