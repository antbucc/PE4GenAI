"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[600],{5588:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(7624),i=t(4552);const o={title:"AI Models & Deployments",slug:"/ai-models"},r=void 0,a={id:"Concepts/Models",title:"AI Models & Deployments",description:"What is an AI Model?",source:"@site/docs/05-Concepts/01-Models.md",sourceDirName:"05-Concepts",slug:"/ai-models",permalink:"/PE4GenAI/ai-models",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"AI Models & Deployments",slug:"/ai-models"},sidebar:"tutorialSidebar",previous:{title:"Add knowledge",permalink:"/PE4GenAI/Card Creation/Context"},next:{title:"Large Language Model (LLM)",permalink:"/PE4GenAI/llms"}},l={},d=[{value:"What is an AI Model?",id:"what-is-an-ai-model",level:2},{value:"What is a Large Language Model?",id:"what-is-a-large-language-model",level:2},{value:"What are Embeddings?",id:"what-are-embeddings",level:2},{value:"What Model should I use?",id:"what-model-should-i-use",level:2},{value:"What is Azure OpenAI (AOAI)",id:"what-is-azure-openai-aoai",level:2},{value:"Workshop Model Deployments",id:"workshop-model-deployments",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"what-is-an-ai-model",children:"What is an AI Model?"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://learn.microsoft.com/windows/ai/images/winml-model-flow.png",alt:"AI Model"})}),"\n",(0,s.jsxs)(n.p,{children:["An AI model (or machine learning model) is a program that has been trained on a set of data, to ",(0,s.jsx)(n.em,{children:"recognize certain types of patterns"}),". Training the model defines an ",(0,s.jsx)(n.em,{children:"algorithm"})," that the AI can use to reason over new data and make predictions."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/windows/ai/windows-ml/what-is-a-machine-learning-model",children:"\ud83d\udd16 | Learn more"})}),"\n",(0,s.jsx)(n.h2,{id:"what-is-a-large-language-model",children:"What is a Large Language Model?"}),"\n",(0,s.jsx)(n.p,{children:'A large language model (LLM) is a type of AI that can process and produce natural language text, having been trained on massive amounts of data from diverse sources. A "foundation model" refers to a specific instance or version of an LLM. We\'ll cover these topics in more detail in the next lesson.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/training/modules/introduction-large-language-models/",children:"\ud83d\udd16 | Learn more"})}),"\n",(0,s.jsx)(n.h2,{id:"what-are-embeddings",children:"What are Embeddings?"}),"\n",(0,s.jsxs)(n.p,{children:["An embedding is a ",(0,s.jsx)(n.strong,{children:"special data representation format"})," that machine learning models and algorithms can use more easily. It provides an information-dense representation of the semantic meaning of text data ",(0,s.jsx)(n.em,{children:"as a vector of floating point numbers"}),". The distance between embeddings in vector space correlates directly to the semantic similarity between their (original) text inputs."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/concepts/understand-embeddings#embedding-models",children:"\ud83d\udd16 | Learn more"})}),"\n",(0,s.jsxs)(n.p,{children:["Embeddings help us use vector search methods for more efficient querying of text data. For example: it powers vector similarity search in databases like Azure Cosmos DB for MongoDB vCore. The recommended embedding model is currently ",(0,s.jsx)(n.code,{children:"text-embedding-ada-002"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/how-to/embeddings?tabs=console",children:"\ud83d\udd16 | Learn more"})}),"\n",(0,s.jsx)(n.h2,{id:"what-model-should-i-use",children:"What Model should I use?"}),"\n",(0,s.jsx)(n.p,{children:"There are many considerations when choosing a model."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Model pricing (by tokens, by artifacts)"}),"\n",(0,s.jsx)(n.li,{children:"Model availability (by version, by region)"}),"\n",(0,s.jsx)(n.li,{children:"Model performance (evaluation metrics)"}),"\n",(0,s.jsx)(n.li,{children:"Model capability (features & parameters)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"As a general guide, we recommend the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Start with gpt-35-turbo."})," This model is very economical and has good performance. It's commonly used for chat applications (such as OpenAI's ChatGPT) but can be used for a wide range of tasks beyond chat and conversation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Move to gpt-35-turbo-16k, gpt-4 or gpt-4-32k"})," if you need to generate more than 4,096 tokens, or need to support larger prompts. These models are more expensive and can be slower, and have limited availability, but they are the most powerful models available today. ",(0,s.jsx)(n.em,{children:"We'll cover tokenization in more detail in a later lesson."})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Consider embeddings"})," for tasks like search, clustering, recommendations and anomaly detection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use DALL-E (Preview) for generating images"})," from text prompts that the user provides, unlike previous models where the output is text (chat)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Use Whisper (Preview) for speech-to-text"})," conversion or audio transcription. It's trained and optimized for transcribing audio files with English speech, though it can transcribe speech in other languages. The model output is in English text. Use it to rapidly transcribe individual audio files or for translating audio from other languages into English - given prompt-based guidance."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/how-to/working-with-models?tabs=powershell",children:"\ud83d\udd16 | Learn more"})}),"\n",(0,s.jsx)(n.h2,{id:"what-is-azure-openai-aoai",children:"What is Azure OpenAI (AOAI)"}),"\n",(0,s.jsxs)(n.p,{children:["OpenAI has a ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/models/overview",children:"diverse set of language models"}),' that can "generate" different types of content (text, images, audio, code) from a user-provided natural language text input or ',(0,s.jsx)(n.strong,{children:'"prompt"'}),". The Azure OpenAI Service provides access to these OpenAI models over a REST API."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models",children:"Currently available models"})," include GPT-4, GPT-4 Turbo Preview, GPT-3.5, Embeddings, DALL-E (Preview) and Whisper (Preview). Azure OpenAI ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/concepts/model-versions",children:"releases new versions regularly"})," to keep pace with OpenAI updates on foundational models. Developers can access them programmatically (using a Python SDK) or via the browser (using Azure AI Studio)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/overview",children:"\ud83d\udd16 | Learn more"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"workshop-model-deployments",children:"Workshop Model Deployments"}),"\n",(0,s.jsxs)(n.admonition,{title:"OUR AZURE PLAYGROUND",type:"info",children:[(0,s.jsx)(n.p,{children:"In this workshop we will:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"use"})," the ",(0,s.jsx)(n.code,{children:"gpt-35-turbo"})," model - for chat completions"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"discuss"})," the ",(0,s.jsx)(n.code,{children:"gpt-4"})," model - for comparison"]}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:"The two main considerations to keep in mind are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/concepts/models",children:"Model Versions"})," - what do models provide? what are the training cutoff & retirement dates?"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/quotas-limits",children:"Quotas and Limits"})," - which regions are models available in? what are the model usage limits?"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here's an example of what that data looks like for the 2 models we will focus on. Refer to the links above for more details on other models."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Model (version)"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Availability"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Request Limit"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Training Data (up to)"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/concepts/models#gpt-35-models",children:"gpt-3.5-turbo (0613)"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"10 regions"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"4096 tokens"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Sep 2021"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/concepts/models#gpt-4-and-gpt-4-turbo-preview-models",children:"gpt-4 (0613)"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"9 regions"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"8192 tokens"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Sep 2021"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var s=t(1504);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);