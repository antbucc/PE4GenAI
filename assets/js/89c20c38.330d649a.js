"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[512],{9840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(7624),s=t(4552);const o={},a="Function Calling",r={id:"Part-2-labs/Function-Calling",title:"Function Calling",description:"GPT-3.5 and GPT-4 models can take user-defined functions as input and generate structured output.",source:"@site/docs/05-Part-2-labs/6-Function-Calling.md",sourceDirName:"05-Part-2-labs",slug:"/Part-2-labs/Function-Calling",permalink:"/PE4GenAI/Part-2-labs/Function-Calling",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add knowledge",permalink:"/PE4GenAI/Part-2-labs/Add-Knowledge"},next:{title:"Create Images",permalink:"/PE4GenAI/Part-2-labs/Create-Images"}},l={},c=[{value:"System Message",id:"system-message",level:3},{value:"OpenAI Function",id:"openai-function",level:3},{value:"Conversation",id:"conversation",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"function-calling",children:"Function Calling"}),"\n",(0,i.jsx)(n.admonition,{title:"What is function calling?",type:"tip",children:(0,i.jsx)(n.p,{children:"GPT-3.5 and GPT-4 models can take user-defined functions as input and generate structured output."})}),"\n",(0,i.jsx)(n.p,{children:"The latest versions of gpt-35-turbo and gpt-4 are fine-tuned to work with functions and are able to both determine when and how a function should be called. If one or more functions are included in your request, the model determines if any of the functions should be called based on the context of the prompt. When the model determines that a function should be called, it responds with a JSON object including the arguments for the function."}),"\n",(0,i.jsx)(n.p,{children:"The models formulate API calls and structure data outputs, all based on the functions you specify. It's important to note that while the models can generate these calls, it's up to you to execute them, ensuring you remain in control."}),"\n",(0,i.jsx)(n.p,{children:"At a high level you can break down working with functions into three steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Call the chat completions API with your functions and the user\u2019s input"}),"\n",(0,i.jsx)(n.li,{children:"Use the model\u2019s response to call your API or function"}),"\n",(0,i.jsx)(n.li,{children:"Call the chat completions API again, including the response from your function to get a final response"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"system-message",children:"System Message"}),"\n",(0,i.jsx)(n.p,{children:"First update the system message."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In this system message explain the goal of the assistant"}),"\n",(0,i.jsx)(n.li,{children:"Explain the information that needs to be gathered"}),"\n",(0,i.jsx)(n.li,{children:"Which function to all if all information is gathered"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",metastring:'title="System Message"',children:"You are an AI assistant that helps people find hotels. \nIn the conversation with the user, your goal is to retrieve the required fields for the function search_hotels.\n"})}),"\n",(0,i.jsx)(n.h3,{id:"openai-function",children:"OpenAI Function"}),"\n",(0,i.jsx)(n.p,{children:"Second paste the json below in the OpenAI Functions functions field."}),"\n",(0,i.jsx)(n.p,{children:"A function has three main parameters: name, description, and parameters."}),"\n",(0,i.jsx)(n.p,{children:"Description: The model is to determine when and how to call the function so it's important to give a meaningful description of what the function does."}),"\n",(0,i.jsx)(n.p,{children:"Parameters: is a JSON schema object that describes the parameters that the function accepts."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="Functions"',children:'[{\n    "name": "search_hotels",\n    "description": "Retrieves hotels from the search index based",\n    "parameters": {\n           "type": "object",             \n           "properties": {\n                "location": {\n                    "type": "string",\n                    "description": "The location of the hotel (i.e. Seattle, WA)"\n                },\n                "price": {\n                    "type": "number",\n                    "description": "The maximum price for the hotel"\n                },\n                "features": {\n                    "type": "string",\n                    "description": "A comma separated list of features (i.e. beachfront, free wifi, etc.)"\n                }\n            },\n           "required": ["location","price","features"]\n      }\n}]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"conversation",children:"Conversation"}),"\n",(0,i.jsx)(n.p,{children:"Now let's start a conversation with the agent."}),"\n",(0,i.jsx)(n.p,{children:"Ask:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",metastring:'title="User Message"',children:"I'm looking for a hotel in the Netherlands\n"})}),"\n",(0,i.jsx)(n.p,{children:"The agent should start asking you about location, price and hotel features and finally call the function and return the properties in json format."}),"\n",(0,i.jsx)(n.admonition,{title:"Assignment",type:"info",children:(0,i.jsx)(n.p,{children:"Extend the function to ask for how many people the room is."})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>a});var i=t(1504);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);