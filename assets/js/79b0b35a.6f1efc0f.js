"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[132],{8024:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var t=s(7624),r=s(4552);const a={},i="Relevance",o={id:"Metrics/Relevance",title:"Relevance",description:"Relevance measures how well the answer addresses the main aspects of the Input, based on the context. Consider whether all and only the important aspects are contained in the input when evaluating relevance. Given the context and input, score the relevance of the answer between one to five stars using the following rating scale:",source:"@site/docs/03-Metrics/01-Relevance.md",sourceDirName:"03-Metrics",slug:"/Metrics/Relevance",permalink:"/PE4GenAI/Metrics/Relevance",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Prompts",permalink:"/PE4GenAI/PlayGround/Basic-Prompts"},next:{title:"Coherence",permalink:"/PE4GenAI/Metrics/Coherence"}},l={},h=[];function c(e){const n={h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"relevance",children:"Relevance"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Relevance"})," measures how well the answer addresses the main aspects of the ",(0,t.jsx)(n.strong,{children:"Input"}),", based on the ",(0,t.jsx)(n.strong,{children:"context"}),". Consider whether all and only the important aspects are contained in the ",(0,t.jsx)(n.strong,{children:"input"})," when evaluating relevance. Given the ",(0,t.jsx)(n.strong,{children:"context"})," and ",(0,t.jsx)(n.strong,{children:"input"}),", score the relevance of the answer between one to five stars using the following rating scale:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"One star:"})," the answer completely lacks relevance"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Two stars:"})," the answer mostly lacks relevance\n3.",(0,t.jsx)(n.strong,{children:"Three stars:"})," the answer is partially relevant\n4.",(0,t.jsx)(n.strong,{children:"Four stars:"})," the answer is mostly relevant\n5.",(0,t.jsx)(n.strong,{children:"Five stars:"})," the answer has perfect relevance"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This rating value should always be an integer between 1 and 5. So the rating produced should be 1 or 2 or 3 or 4 or 5."}),"\n",(0,t.jsx)(n.h1,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"context"}),": Marie Curie was a Polish-born physicist and chemist who pioneered research on radioactivity and was the first woman to win a Nobel Prize."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"input"}),": What field did Marie Curie excel in?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"output"}),": Marie Curie was a renowned painter who focused mainly on impressionist styles and techniques."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"stars: 1"})}),"\n",(0,t.jsx)(n.h1,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"context:"})," The Beatles were an English rock band formed in Liverpool in 1960, and they are widely regarded as the most influential music band in history."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"input:"})," Where were The Beatles formed?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"answer:"})," The band The Beatles began their journey in London, England, and they changed the history of music."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"stars: 2"})}),"\n",(0,t.jsx)(n.h1,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"context:"})," The recent Mars rover, Perseverance, was launched in 2020 with the main goal of searching for signs of ancient life on Mars. The rover also carries an experiment called MOXIE, which aims to generate oxygen from the Martian atmosphere."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"input"}),":** What are the main goals of Perseverance Mars rover mission?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"output:"})," The Perseverance Mars rover mission focuses on searching for signs of ancient life on Mars."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"stars: 3"})}),"\n",(0,t.jsx)(n.h1,{id:"example-4",children:"Example 4"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"context:"})," The Mediterranean diet is a commonly recommended dietary plan that emphasizes fruits, vegetables, whole grains, legumes, lean proteins, and healthy fats. Studies have shown that it offers numerous health benefits, including a reduced risk of heart disease and improved cognitive health."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"input:"})," What are the main components of the Mediterranean diet?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"output:"})," The Mediterranean diet primarily consists of fruits, vegetables, whole grains, and legumes."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"stars: 4"})}),"\n",(0,t.jsx)(n.h1,{id:"example-5",children:"Example 5"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"context:"})," The Queen's Royal Castle is a well-known tourist attraction in the United Kingdom. It spans over 500 acres and contains extensive gardens and parks. The castle was built in the 15th century and has been home to generations of royalty."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"input:"})," What are the main attractions of the Queen's Royal Castle?"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"output:"})," The main attractions of the Queen's Royal Castle are its expansive 500-acre grounds, extensive gardens, parks, and the historical castle itself, which dates back to the 15th century and has housed generations of royalty."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"stars: 5"})})]})}function d(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>i});var t=s(1504);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);