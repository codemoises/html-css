(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[57],{"0G5S":function(e,t,n){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r}));const o=(e,t=null)=>{try{return"undefined"!=typeof window&&window.localStorage.getItem(e)||t}catch(n){return console.error("Cannot access localStorage."),t}},a=e=>{try{if("undefined"==typeof window)return;window.localStorage.removeItem(e)}catch(t){console.error("Cannot access localStorage.")}},r=(e,t)=>{try{if("undefined"==typeof window)return;window.localStorage.setItem(e,t)}catch(n){console.error("Cannot access localStorage.")}}},AXUD:function(e,t,n){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));const o=412,a=429},Ncr9:function(e,t,n){var o=n("TPPM"),a=n("XdLN"),r=n("28DW");t.a=e=>{Object(a.a)(e)||(e="/",Object(r.a)("url_reset")),Object(o.a)(e,!1)}},VL22:function(e,t,n){n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return i}));var o=n("kmwA");const a={FACEBOOK:"facebook",GOOGLE_ONE_TAP:"google_one_tap",GOOGLE:"google",LINE:"line",EMAIL:"email",OTHER:"other"},r=e=>e.facebook_id?a.FACEBOOK:e.google_open_id_token?a.GOOGLE_ONE_TAP:e.gplus_code||e.gplus_id_token?a.GOOGLE:e.line_id_token?a.LINE:e.email?a.EMAIL:a.OTHER,s=(e="")=>e in o.a.settings.MINIMUM_AGE_BY_EU_COUNTRY,i=e=>o.a.settings.EN_COUNTRIES_WITH_MANDATORY_AGE.includes(e)||o.a.settings.LATAM_AGE_COLLECTION.has(e)},dish:function(e,t,n){n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var o=n("QLqj");const a=()=>o.b.localStorage.getItem("uoiou")||!1,r=e=>{o.b.localStorage.setItem("uoiou",!!e)}},kJuv:function(e,t,n){var o=n("gxu6"),a=n("eOdZ"),r=n("QLqj"),s=n("kmwA"),i=n("ARZW"),c=n("J8m7"),_=n("sv3x"),u=n("AXUD"),l=n("dish"),d=n("OX7c"),g=n("28DW"),f=n("AYc3"),b=n("2y2F"),h=n("yM2L");const p=function(e,t,n="",o=!1){let a="referrer_unknown";try{const e=document.referrer;a=e?e.indexOf("/t.co/")>-1?"twitter":e.indexOf("google.")>-1?"google":e.indexOf("bing.")>-1?"bing":e.indexOf("facebook.")>-1?"facebook":"other":"direct"}catch(h){}const r=Object(_.c)(e),s=t===Object(t)?t.hybridTier:"tier_unknown",c=t===Object(t)?t.container:"container_unknown";Object(g.a)("login.referrer."+a+"."+r),Object(g.a)("login.container."+c+"."+r),Object(g.a)("login.type."+r);const u=Object(_.c)(e)||"method_unknown",l=t.page||"page_unknown";e.gplus_autologin?o?(Object(g.a)("mweb_autologin.google_success"),Object(g.l)("new_mweb_autologin_google",{page:l,referrer:a,container:c,hybridTier:s})):(Object(g.a)("web_autologin_google"),Object(g.l)("new_web_autologin_google",{page:l,referrer:a,container:c,hybridTier:s})):e.facebook_autologin?(Object(g.a)("web_autologin_facebook"),Object(g.l)("new_web_autologin_facebook",{page:l,referrer:a,container:c,hybridTier:s})):(Object(g.a)(`web_login.${u}.success.${l}.${c}.${a}.${s}`),Object(g.l)(`new_web_login.${u}.success`,{page:l,referrer:a,container:c,hybridTier:s})),Object(b.a)(n)&&Object(f.g)({id:i.b,eventCategory:"Logins",eventName:"Desktop"}),Object(b.f)(n)&&Object(f.k)({id:"flashtalking-d-login",eventCategory:"Logins",eventName:"Desktop"}),Object(b.c)(n)&&Object(f.h)({pixelId:"dpm_pixel_login_event",eventCategory:"Logins",eventName:"Desktop"}),Object(b.d)(n)&&Object(f.i)({pixelId:"dentsu_pixel_login_event",eventCategory:"Logins",eventName:"Desktop"});const d=e.facebook_autologin||e.gplus_autologin||e.autologin?"autologin":"login";Object(g.g)({action:d,event:"success",type:r})},O=(e,t)=>{Object(g.a)(`web_cross_domain_login.${e}.${Object(_.c)(t)}`)},m=(e,t,n="other",o=!1)=>{if(e){const a=e.http_status===u.b?u.b:e.api_error_code;let r=a;c.b.has(a)&&(r=c.b.get(a));const{container:s}=t;o?Object(g.a)(`unauth_web_client_cctld_login_api_error.${String(r)}.${s||"unknow_container"}.${n}`):Object(g.a)(`unauth_web_client_login_api_error.${String(r)}.${s||"unknow_container"}.${n}`),Object(g.g)({action:"login",event:"fail",type:n})}};t.a=function(e,t,n={},i=!1,c,u,g=!1){if(function(e){return!e.mfa_resend&&!!e.username_or_email}(e)){if(-1!==s.a.settings.CORS_HANDSHAKE_DOMAINS.indexOf(t.origin))return function(e,t,n,o){O("attempt",e);const{referrer:a,facebookToken:r,unauthId:s}=o;return Object(h.loginUser)(e,{recaptchaV3Token:t,referrer:a,facebookToken:r,unauthId:s}).then(t=>{if(t&&t.data){O("success_with_token",e);const o=t.data;return Object(h.exchangeTokenAndSetSession)(o).then(t=>(O("success_token_exchanged",e),p(e,n),Promise.resolve()),t=>{throw O("success_token_not_exchanged",e),t})}throw O("success_without_token",e),new Error},t=>{throw O("failure",e),m(t,n,Object(_.c)(e),!0),t})}(e,u,n,t)}const f=i?null:r.b.localStorage.getItem("visitedPagesBeforeLogin"),b={...e,get_user:e.get_user||e.switch_account&&i,app_type_from_client:7===t.appType?7:5,visited_pages_before_login:f?JSON.stringify(f):null,recaptchaV2Token:c,recaptchaV3Token:u};return a.d.create("UserSessionResource",b).callCreate({showError:!1,async:!0}).then(t=>{const{client_context:a}=t||{},{country:r,active_experiments:s}=a||{};p(e,n,r,g),Object(l.b)(!1);return s&&s.web_cctld_cookies_cleanup&&"enabled"===s.web_cctld_cookies_cleanup&&(o.c("fba"),o.c("logged_out")),Object(d.a)("login").then(()=>t)},t=>(m(t,n,Object(_.c)(e)),Promise.reject(t)))}},sv3x:function(e,t,n){n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return k}));var o=n("gxu6"),a=n("GI6b"),r=n("Jr++"),s=n("Ncr9"),i=n("eOdZ"),c=n("QLqj"),_=n("kmwA"),u=n("28DW"),l=n("AXUD"),d=n("VL22"),g=n("J8m7"),f=n("nKUr");const b=Object.freeze({SOFT_BANNED:0,RATE_LIMITED:1,LOGIN_ASSISTANCE:2,PASSWORD_RESET_SENT:3,PREVENT_FACEBOOK_REGISTER:4,PREVENT_GOOGLE_REGISTER:5,SUSPENDED:6}),h=[g.f,g.e,g.G,g.A,g.t,g.v,l.b],p=(g.p,g.q,g.z,g.o,g.A,[...h.filter(e=>e!==g.t&&e!==g.A),g.o,g.r]);class O{static defaultLoginRedirectUrl(){return window.location.pathname===_.a.settings.PASSWORD_RESET_URL||window.location.pathname===_.a.settings.LOGIN_URL||window.location.pathname.startsWith(_.a.settings.ADD_SECONDARY_ACCOUNT_PAGE)?"/":window.location.pathname+window.location.search}static defaultSocialLoginRedirectUrl(){return window.location.pathname.startsWith(_.a.settings.ADD_SECONDARY_ACCOUNT_PAGE)?"/":window.location.pathname}static isExceedRecaptchaLocalLimit(){const e=c.b.localStorage.getItem("urh");if(e&&e.indexOf("|")>-1){const t=e.split("|");return 3===t.length&&(new Date).getTime()/1e3-parseInt(t[0],10)<=3600}return!1}static updateRecaptchaTimeStamp(){const e=c.b.localStorage.getItem("urh");let t=[];e&&(t=e.split("|"),3===t.length&&t.shift());const n=((new Date).getTime()/1e3).toString();t.push(n);const o=t.join("|");c.b.localStorage.setItem("urh",o)}static isFullyLoggedIn(e,t){return e&&1===t}static handleRedirect(e){if(!e){e="/";const t=Object(r.a)();if(t){const n=t.next;n&&(e=n,delete t.next),e=Object(a.a)(e,t)}}Object(s.a)(e)}static handleRedirectWithFallbackWindowLocation(){this.handleRedirect(this.defaultLoginRedirectUrl())}static handleSignupRedirect(e,t){c.b.localStorage.setItem("signupTime",Date.now()),!t&&e&&"/"!==e?O.handleRedirect(e):O.handleRedirect("/")}static storeLoginCredentialsToBrowser(e){if(navigator.credentials&&e.username_or_email)try{const t=new window.PasswordCredential({id:e.username_or_email,password:e.password});navigator.credentials.store(t).then(()=>{Object(u.a)("navigatorCredentials.store.success")})}catch(t){Object(u.a)("navigatorCredentials.store.error")}}static retrieveLoginCredentialsFromBrowser(){const e=window.navigator.credentials;if(!e)return new Promise((e,t)=>{t()});return e.get({password:!0,mediation:"silent"})}static attemptLoginWithBrowserCredentials(e,t,n){if(!e)return new Promise((e,t)=>{t("No credentials")});let o,a;e.password?(a="include",o=new FormData,o.append("username",e.id),o.append("password",e.password)):a=e;return fetch("/resource/UserSessionResource/create/",{method:"POST",body:o,credentials:a,headers:{Accept:"application/json, text/javascript, */*","X-CSRFToken":t||"","X-Pinterest-AppState":n,"X-Requested-With":"XMLHttpRequest"}}).then(e=>{if(200!==e.status){const t=new Error(e.statusText);throw t.response=e,t}return Object(u.a)("navigatorCredentials.login.success"),e.json()}).catch(e=>(Object(u.a)("navigatorCredentials.login.failure"),Promise.reject(e)))}static fetchRecentlyLoggedOutUser(e){if(e)return Promise.reject();const t=i.d.create("UnauthUserDataResource");return new Promise((e,n)=>{t.callGet().then(t=>{const a=t.resource_response.data,r=!!o.a("logged_out");return a?(a.connected_to_facebook||a.connected_to_google||a.has_password||Object(u.a)("unauth.personalized_login.no_login_methods_found"),Object(u.a)("unauth.personalized_login.fetch_user_info.info.user_info_found.logged_out_cookie_"+(r?"true":"false")),e(a)):(Object(u.a)("unauth.personalized_login.fetch_user_info.info.no_user_info.logged_out_cookie_"+(r?"true":"false")),n({}))}).catch(e=>{if(e.message){const t=e.message.replace(/\s/g,"_").toLowerCase();Object(u.a)("unauth.personalized_login.fetch_user_info.error."+t)}else Object(u.a)("unauth.personalized_login.fetch_user_info.error.unknown");return n(e)})})}static handleLoginMfa(e,t,n){Object(u.a)("multi_step_login"),O.storeLoginCredentialsToBrowser(e),n?n(e,t):Object(u.a)("unauth.login.error.CLIENT_ERROR.null_mfa_handler")}static getLoginErrorState(e,t,n,o,a){let r=null;const s=e.http_status||e.httpStatus;let i,c=e.api_error_code||e.apiErrorCode;if(s===l.b&&(c=l.b),i=p.includes(c)?Object(f.jsx)(o,{api_error_code:c,errorMessage:e.message,handleTouch:()=>a(b.PASSWORD_RESET_SENT),source:t,userSearch:n}):e.message,i)switch(c){case g.o:case g.t:r={passwordValidationError:i};break;case g.p:r={facebookValidationError:i};break;case g.q:r={googleValidationError:i};break;case g.n:r={emailValidationError:i};break;case g.j:r={passwordValidationError:i};break;default:r={emailValidationError:i}}else Object(u.a)(`unauth.login.error.SERVER_ERROR.unknown.${c}.${t}`);return r}}function m(e){return e.facebook_id?d.a.FACEBOOK:e.google_open_id_token?d.a.GOOGLE_ONE_TAP:e.gplus_id_token?d.a.GOOGLE:e.line_id_token?d.a.LINE:e.username_or_email?d.a.EMAIL:d.a.OTHER}function k(e){return e.mfa_token?"mfa_token":e.mfa_resend?"mfa_resend":m(e)}t.b=O},yM2L:function(e,t,n){n.r(t),n.d(t,"exchangeTokenAndSetSession",(function(){return u})),n.d(t,"verifyLoggedInStatus",(function(){return l})),n.d(t,"registerUser",(function(){return d})),n.d(t,"loginUser",(function(){return g}));var o=n("T0g9"),a=n("eOdZ"),r=n("kmwA"),s=n("28DW"),i=n("J8m7");const c=r.a.settings.ACCOUNTS_PINTEREST_URL,_=(e,t,n,o)=>{const a=e=>{const t=new Error(e.statusText);throw t.response=e,!t.api_error_code&&t.response&&(t.api_error_code=t.response.code,t.message=t.response.message),t},r={credentials:"include",mode:"cors"};return"POST"===n&&(r.method="POST",r.body=t,r.headers={"Content-type":"application/x-www-form-urlencoded; charset=UTF-8","X-Pinterest-InstallId":o},o||Object(s.a)("unauth.auth_handshake.cross_domain.no_unauth_id."+n)),fetch(e,r).then(e=>200===e.status||401===e.status||409===e.status?e:(a(e),{})).then(e=>e.json()).then(e=>"success"===e.status?Promise.resolve(e):e.code===i.w?(e.api_error_code=e.code,Promise.reject(e)):(a(e),{})).catch(e=>{throw e})},u=(e,t=!1)=>a.d.create("HandshakeSessionResource",{token:e,isRegistration:t}).callCreate(),l=e=>{_(c+"/v3/handshake/verify/","","GET",e).then(e=>{if(e&&e.data){const t=e.data;u(t).then(e=>{window.location.reload()},e=>{})}},e=>{})},d=(e,{facebookToken:t,inviteCode:n,locale:a,referrer:s,unauthId:i})=>{const c=(e.business_name?"partner/handshake":(e.gplus_code||e.gplus_id_token)&&"gplus/handshake")||e.facebook_id&&"facebook/handshake"||"email/handshake",u={};if(u.email=e.email||"",u.username=e.username||"",u.password=e.password||"",u.first_name=e.first_name||"",u.last_name=e.last_name||"",u.country=e.country||"",u.locale=a,u.referrer=s,e.age){const t=new Date;t.setFullYear(t.getFullYear()-e.age);const n=parseInt(t/1e3,10);u.birthday=n.toString()}if(e.custom_gender&&(u.custom_gender=e.custom_gender),e.gender&&(u.gender=e.gender),e.business_name&&(u.account_type=e.account_type,u.business_name=e.business_name,u.first_name=e.business_name),n&&(u.invite_code=n),e.facebook_id){const n=t||e.facebook_token||"";u.facebook_id=e.facebook_id,u.facebook_token=n,u.social_username=e.social_username||""}else(e.gplus_code||e.gplus_id_token)&&(u.password=e.password||"",u.one_time_code=e.gplus_code,u.id_token=e.gplus_id_token,u.redirect_uri=e.gplus_redirect_uri);return e.recaptchaV3Token&&(u.recaptcha_v3_token=e.recaptchaV3Token),_(`${r.a.settings.ACCOUNTS_PINTEREST_URL}/v3/register/${c}/`,Object(o.a)(u),"POST",i)},g=(e,{facebookToken:t,recaptchaV3Token:n,referrer:a,unauthId:s})=>{const i=(e.mfa_token?"mfa/handshake":e.gplus_id_token&&"gplus/handshake")||e.facebook_id&&"facebook/handshake"||"handshake",c={};if(e.username_or_email&&(c.username_or_email=e.username_or_email.trim(),c.password=e.password,c.referrer=a),e.facebook_id){const n=t||e.facebook_token||"";c.facebook_id=e.facebook_id,c.facebook_token=n,c.facebook_autologin=e.facebook_autologin||!1}return e.gplus_id_token&&(c.gplus_id_token=e.gplus_id_token,c.gplus_access_token=e.gplus_access_token,c.gplus_expires_at=e.gplus_expires_at,c.gplus_autologin=e.gplus_autologin||!1),e.mfa_token&&(c.mfa_token=e.mfa_token),n&&(c.token=n),_(`${r.a.settings.ACCOUNTS_PINTEREST_URL}/v3/login/${i}/`,Object(o.a)(c),"POST",s)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/57-847517cdc3ff7c4d28f9.mjs.map