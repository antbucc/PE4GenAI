"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[712],{1612:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(7624),i=t(4552);const o={title:"Installation",slug:"/installation"},r=void 0,l={id:"PlayGround/PlayGround",title:"Installation",description:"- Use your own laptop.",source:"@site/docs/02-PlayGround/1-PlayGround.md",sourceDirName:"02-PlayGround",slug:"/installation",permalink:"/PE4GenAI/installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installation",slug:"/installation"},sidebar:"tutorialSidebar",previous:{title:"Groundedness",permalink:"/PE4GenAI/Let's Start/8d-Groundedness"},next:{title:"Basic Prompting",permalink:"/PE4GenAI/PlayGround/Basic-Cards"}},a={},c=[{value:"Authenticate",id:"authenticate",level:2},{value:"Explore",id:"explore",level:2},{value:"Tips",id:"tips",level:2},{value:"1. Clear Chat Sessions",id:"1-clear-chat-sessions",level:3},{value:"2. Copy-Paste Snippets",id:"2-copy-paste-snippets",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"COURSE PRE-REQUISITES",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use your own laptop"}),"."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://github.com/",children:"Have a GitHub account"})})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Launch a modern browser"}),". (Use edge or chrome for the best experience)"]}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:"For this course you are using a custom playground build on-top of the Azure OpenAI Service. In this playground you will have the opportunity to play with the prompts and learn how to interact with OpenAI Models."}),"\n",(0,s.jsx)(n.h2,{id:"authenticate",children:"Authenticate"}),"\n",(0,s.jsxs)(n.p,{children:["Your course instructor will provide you with an ",(0,s.jsx)(n.strong,{children:"access key"})," that will be valid during the course session. Setup is now a quick 4-step process."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the following ",(0,s.jsx)(n.a,{href:"https://polite-ground-030dc3103.4.azurestaticapps.net/event/631a-5f5a",children:"link"})]}),"\n",(0,s.jsx)(n.li,{children:"Login with GitHub at top-right."}),"\n",(0,s.jsxs)(n.li,{children:["Copy the API Key, then navigate to the ",(0,s.jsx)(n.a,{href:"https://polite-ground-030dc3103.4.azurestaticapps.net/event/631a-5f5a",children:"Playground"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Enter the ",(0,s.jsx)(n.strong,{children:"access-key"})," at top-right and click ",(0,s.jsx)(n.code,{children:"Authorize"})," to login.\n",(0,s.jsx)(n.img,{alt:"PE4GenAI Playground",src:t(3744).c+"",width:"1348",height:"951"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"explore",children:"Explore"}),"\n",(0,s.jsxs)(n.p,{children:["On successful login, the playground application should update to show a ",(0,s.jsx)(n.code,{children:"Logout"})," button at top-right, as shown below. To validate your setup, enter a query in the user prompt input box (region 2) and click ",(0,s.jsx)(n.code,{children:"Send"}),". You should get a conversational response in the chat session are (region 3) as shown below."]}),"\n",(0,s.jsx)(n.p,{children:"Let's take a minute to familiarize ourselves with the different regions of this app."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(5904).c+"",width:"2482",height:"1554"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Region 1\ufe0f\u20e3 | Once authorized, shows the event profile."}),"\n",(0,s.jsxs)(n.li,{children:["Region 2\ufe0f\u20e3 | User prompt - used to enter the ",(0,s.jsx)(n.strong,{children:"INPUT"})," part of your ",(0,s.jsx)(n.strong,{children:"CARD"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Region 3\ufe0f\u20e3 | Conversation - interleaved ",(0,s.jsx)(n.strong,{children:"INPUT"})," & ",(0,s.jsx)(n.strong,{children:"OUTPUT"})]}),"\n",(0,s.jsx)(n.li,{children:"Region 4\ufe0f\u20e3 | Configuration - tunable parameters, execution stats"}),"\n",(0,s.jsxs)(n.li,{children:["Region 5\ufe0f\u20e3 | System message - sets the ",(0,s.jsx)(n.strong,{children:"CONTEXT"})," of your ",(0,s.jsx)(n.strong,{children:"CARD"})]}),"\n",(0,s.jsxs)(n.li,{children:["Region 6\ufe0f\u20e3 | Function calling - save custom functions to set context - ",(0,s.jsx)(n.strong,{children:"we do not use in this course."})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,s.jsx)(n.h3,{id:"1-clear-chat-sessions",children:"1. Clear Chat Sessions"}),"\n",(0,s.jsxs)(n.p,{children:["The output of the ",(0,s.jsx)(n.strong,{children:"CARD"})," is influenced by the contents of the chat session. To ensure that the output of the model is not influenced by previous ",(0,s.jsx)(n.strong,{children:"OUTPUTS"}),', click the "Clear Chat" button ',(0,s.jsx)(n.strong,{children:"before entering each new INPUT"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"2-copy-paste-snippets",children:"2. Copy-Paste Snippets"}),"\n",(0,s.jsxs)(n.p,{children:["In a prompt-based exercise, you will find the prompt input is  provided to you in a ",(0,s.jsx)(n.em,{children:"code-fenced"})," snippet as shown below. When viewing this page in a browser, ",(0,s.jsx)(n.em,{children:"click"})," within the code-fenced region below to see a ",(0,s.jsx)(n.code,{children:"copy"})," icon appear at the right. Click it to copy the prompt into your clipboard - then paste using ",(0,s.jsx)("kbd",{children:"Ctrl-V"})," (or equivalent) command into the text input region in Playground."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"This is the prompt text you need to enter into the chat prompt input field.\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3744:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/aitour-playground-chat-e0fd159f9f9664fd7e560235f56bc698.png"},5904:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/aitour-playground-regions-06fcf4a28f7bb33f5bdca9f8cfae9e8a.png"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>r});var s=t(1504);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);