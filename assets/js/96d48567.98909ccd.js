"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[600],{5588:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=s(7624),o=s(4552);const a={title:"AI Models & Deployments",slug:"/ai-models"},t=void 0,r={id:"Concepts/Models",title:"AI Models & Deployments",description:"What is an AI Model?",source:"@site/docs/05-Concepts/01-Models.md",sourceDirName:"05-Concepts",slug:"/ai-models",permalink:"/PE4GenAI/ai-models",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"AI Models & Deployments",slug:"/ai-models"},sidebar:"tutorialSidebar",previous:{title:"Introduction to Generative AI and Large Language Models",permalink:"/PE4GenAI/Concepts/Introduction"},next:{title:"Large Language Model (LLM)",permalink:"/PE4GenAI/llms"}},l={},d=[{value:"What is an AI Model?",id:"what-is-an-ai-model",level:2},{value:"What is a Large Language Model?",id:"what-is-a-large-language-model",level:2},{value:"What are Embeddings?",id:"what-are-embeddings",level:2},{value:"What Model should I use?",id:"what-model-should-i-use",level:2},{value:"What is Azure OpenAI (AOAI)",id:"what-is-azure-openai-aoai",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"what-is-an-ai-model",children:"What is an AI Model?"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://learn.microsoft.com/windows/ai/images/winml-model-flow.png",alt:"AI Model"})}),"\n",(0,i.jsxs)(n.p,{children:["An AI model (or machine learning model) is a program that has been trained on a set of data, to ",(0,i.jsx)(n.em,{children:"recognize certain types of patterns"}),". Training the model defines an ",(0,i.jsx)(n.em,{children:"algorithm"})," that the AI can use to reason over new data and make predictions."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/windows/ai/windows-ml/what-is-a-machine-learning-model",children:"\ud83d\udd16 | Learn more"})}),"\n",(0,i.jsx)(n.h2,{id:"what-is-a-large-language-model",children:"What is a Large Language Model?"}),"\n",(0,i.jsx)(n.p,{children:'A large language model (LLM) is a type of AI that can process and produce natural language text, having been trained on massive amounts of data from diverse sources. A "foundation model" refers to a specific instance or version of an LLM. We\'ll cover these topics in more detail in the next lesson.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/training/modules/introduction-large-language-models/",children:"\ud83d\udd16 | Learn more"})}),"\n",(0,i.jsx)(n.h2,{id:"what-are-embeddings",children:"What are Embeddings?"}),"\n",(0,i.jsxs)(n.p,{children:["An embedding is a ",(0,i.jsx)(n.strong,{children:"special data representation format"})," that machine learning models and algorithms can use more easily. It provides an information-dense representation of the semantic meaning of text data ",(0,i.jsx)(n.em,{children:"as a vector of floating point numbers"}),". The distance between embeddings in vector space correlates directly to the semantic similarity between their (original) text inputs."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/concepts/understand-embeddings#embedding-models",children:"\ud83d\udd16 | Learn more"})}),"\n",(0,i.jsxs)(n.p,{children:["Embeddings help us use vector search methods for more efficient querying of text data. For example: it powers vector similarity search in databases like Azure Cosmos DB for MongoDB vCore. The recommended embedding model is currently ",(0,i.jsx)(n.code,{children:"text-embedding-ada-002"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/how-to/embeddings?tabs=console",children:"\ud83d\udd16 | Learn more"})}),"\n",(0,i.jsx)(n.h2,{id:"what-model-should-i-use",children:"What Model should I use?"}),"\n",(0,i.jsx)(n.p,{children:"There are many considerations when choosing a model."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Model pricing (by tokens, by artifacts)"}),"\n",(0,i.jsx)(n.li,{children:"Model availability (by version, by region)"}),"\n",(0,i.jsx)(n.li,{children:"Model performance (evaluation metrics)"}),"\n",(0,i.jsx)(n.li,{children:"Model capability (features & parameters)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"As a general guide, we recommend the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Start with gpt-35-turbo."})," This model is very economical and has good performance. It's commonly used for chat applications (such as OpenAI's ChatGPT) but can be used for a wide range of tasks beyond chat and conversation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Move to gpt-35-turbo-16k, gpt-4 or gpt-4-32k"})," if you need to generate more than 4,096 tokens, or need to support larger prompts. These models are more expensive and can be slower, and have limited availability, but they are the most powerful models available today. ",(0,i.jsx)(n.em,{children:"We'll cover tokenization in more detail in a later lesson."})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Consider embeddings"})," for tasks like search, clustering, recommendations and anomaly detection."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Use DALL-E (Preview) for generating images"})," from text prompts that the user provides, unlike previous models where the output is text (chat)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Use Whisper (Preview) for speech-to-text"})," conversion or audio transcription. It's trained and optimized for transcribing audio files with English speech, though it can transcribe speech in other languages. The model output is in English text. Use it to rapidly transcribe individual audio files or for translating audio from other languages into English - given prompt-based guidance."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/how-to/working-with-models?tabs=powershell",children:"\ud83d\udd16 | Learn more"})}),"\n",(0,i.jsx)(n.h2,{id:"what-is-azure-openai-aoai",children:"What is Azure OpenAI (AOAI)"}),"\n",(0,i.jsxs)(n.p,{children:["OpenAI has a ",(0,i.jsx)(n.a,{href:"https://platform.openai.com/docs/models/overview",children:"diverse set of language models"}),' that can "generate" different types of content (text, images, audio, code) from a user-provided natural language text input or ',(0,i.jsx)(n.strong,{children:'"prompt"'}),". The Azure OpenAI Service provides access to these OpenAI models over a REST API."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models",children:"Currently available models"})," include GPT-4, GPT-4 Turbo Preview, GPT-3.5, Embeddings, DALL-E (Preview) and Whisper (Preview). Azure OpenAI ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/concepts/model-versions",children:"releases new versions regularly"})," to keep pace with OpenAI updates on foundational models. Developers can access them programmatically (using a Python SDK) or via the browser (using Azure AI Studio)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/azure/ai-services/openai/overview",children:"\ud83d\udd16 | Learn more"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>t});var i=s(1504);const o={},a=i.createContext(o);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);