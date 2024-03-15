"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[928],{588:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(7624),a=t(4552);const s={},o="Introduction to Generative AI and Large Language Models",r={id:"Concepts/Introduction",title:"Introduction to Generative AI and Large Language Models",description:"A statistical approach to AI: Machine Learning",source:"@site/docs/05-Concepts/00-Introduction.md",sourceDirName:"05-Concepts",slug:"/Concepts/Introduction",permalink:"/PE4GenAI/Concepts/Introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add knowledge",permalink:"/PE4GenAI/Card Creation/Context"},next:{title:"AI Models & Deployments",permalink:"/PE4GenAI/ai-models"}},l={},c=[{value:"A statistical approach to AI: Machine Learning",id:"a-statistical-approach-to-ai-machine-learning",level:3},{value:"Neural networks and modern virtual assistants",id:"neural-networks-and-modern-virtual-assistants",level:3},{value:"Present day, Generative AI",id:"present-day-generative-ai",level:3},{value:"How do large language models work?",id:"how-do-large-language-models-work",level:2},{value:"Practical Examples",id:"practical-examples",level:2}];function d(e){const n={em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction-to-generative-ai-and-large-language-models",children:"Introduction to Generative AI and Large Language Models"}),"\n",(0,i.jsx)(n.h3,{id:"a-statistical-approach-to-ai-machine-learning",children:"A statistical approach to AI: Machine Learning"}),"\n",(0,i.jsxs)(n.p,{children:["A turning point arrived during the 90s, with the application of a ",(0,i.jsx)(n.strong,{children:"statistical approach to text analysis"}),". This led to the development of new algorithms \u2013 known with the name of ",(0,i.jsx)(n.strong,{children:"machine learnin"}),"g** - able to learn ",(0,i.jsx)(n.strong,{children:"patterns from data"}),", without being explicitly programmed. This approach allows a machine to simulate ",(0,i.jsx)(n.strong,{children:"human language understanding"}),": a statistical model is trained on text-label pairings, enabling the model to classify unknown input text with a pre-defined label representing the intention of the message."]}),"\n",(0,i.jsx)(n.h3,{id:"neural-networks-and-modern-virtual-assistants",children:"Neural networks and modern virtual assistants"}),"\n",(0,i.jsxs)(n.p,{children:["In more recent times, the technological evolution of the hardware, capable of handling larger amounts of data and more complex computations, encouraged research in the AI fields, leading to the development of advanced machine learning algorithms \u2013 called ",(0,i.jsx)(n.strong,{children:"neural networks"})," or ",(0,i.jsx)(n.strong,{children:"deep learning"})," algorithms."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Neural networks"})," (and in particular Recurrent Neural Networks \u2013 RNNs) significantly enhanced ",(0,i.jsx)(n.strong,{children:"natural language processing"}),", enabling the representation of the ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"meaning of text"})})," in a more meaningful way, valuing the context of a word in a sentence."]}),"\n",(0,i.jsxs)(n.p,{children:["This is the technology that powered the ",(0,i.jsx)(n.strong,{children:"virtual assistants"})," born in the first decade of the new century, very proficient in interpreting the human language, identifying a need, and performing an action to satisfy it \u2013 like answering with a pre-defined script or consuming a 3rd party service."]}),"\n",(0,i.jsx)(n.h3,{id:"present-day-generative-ai",children:"Present day, Generative AI"}),"\n",(0,i.jsx)(n.p,{children:"So that\u2019s how we came to Generative AI today, which can be seen as a subset of deep learning."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"AI, ML, DL and Generative AI",src:t(5468).c+"",width:"975",height:"530"})}),"\n",(0,i.jsxs)(n.p,{children:["After decades of research in the AI field, a new model architecture \u2013 called ",(0,i.jsx)(n.em,{children:"Transformer"})," \u2013 overcame the limits of RNNs, being able to get much longer sequences of text as input. Transformers are based on the attention mechanism, enabling the model to give ",(0,i.jsx)(n.strong,{children:"different weights to the inputs it receives"}),", \u2018paying more attention\u2019 where the most relevant information is concentrated, regardless of their order in the text sequence."]}),"\n",(0,i.jsxs)(n.p,{children:["Most of the recent generative AI models \u2013 also known as ",(0,i.jsx)(n.strong,{children:"Large Language Models (LLMs)"}),", since they work with textual inputs and outputs \u2013 are indeed based on this architecture. What\u2019s interesting about these models \u2013 trained on a huge amount of unlabeled data from diverse sources like books, articles and websites \u2013 is that they can be adapted to a wide variety of tasks and generate grammatically correct text with a semblance of creativity. So, not only did they incredibly enhance the capacity of a machine to \u2018understand\u2019 an input text, but they enabled their capacity to generate an original response in human language."]}),"\n",(0,i.jsx)(n.h2,{id:"how-do-large-language-models-work",children:"How do large language models work?"}),"\n",(0,i.jsx)(n.p,{children:"Let\u2019s have a look at how large language models work, with a focus on OpenAI GPT (Generative Pre-trained Transformer) models."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Tokenizer, text to numbers"}),": Large Language Models receive a text as input and generate a text as output. However, being statistical models, they work much better with ",(0,i.jsx)(n.strong,{children:"numbers"})," than text sequences. That\u2019s why every input to the model is processed by a ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"tokenizer"})}),", before being used by the core model. A token is a chunk of text \u2013 consisting of a variable number of characters, so the tokenizer's main task is splitting the input into an array of tokens. Then, each token is mapped with a token index, which is the integer encoding of the original text chunk."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Example of tokenization",src:t(5860).c+"",width:"824",height:"249"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Predicting output tokens"}),": Given n tokens as input (with max n varying from one model to another), the model is able to predict one token as output. This token is then incorporated into the input of the next iteration, in an expanding window pattern, enabling a better user experience of getting one (or multiple) sentence as an answer. This explains why, if you ever played with ChatGPT, you might have noticed that sometimes it looks like it stops in the middle of a sentence."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Selection process, probability distribution"}),": The output token is chosen by the model according to its probability of occurring after the current text sequence. This is because the model predicts a probability distribution over all possible \u2018next tokens\u2019, calculated based on its training. However, not always the token with the highest probability is chosen from the resulting distribution. A ",(0,i.jsx)(n.strong,{children:"degree of randomness"})," is added to this choice, in a way that the model acts in a non-deterministic fashion - we do not get the exact same output for the same input. This degree of randomness is added to simulate the process of creative thinking and it can be tuned using a model parameter called temperature."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'In prompt engineering, "temperature" and "top P" are terminologies that are commonly associated with fine-tuning language models like GPT (Generative Pre-trained Transformer).'}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Temperature:"})," Temperature is a hyperparameter used during the sampling process in language generation. In the context of language models, temperature controls the randomness of the generated text. A higher temperature leads to more randomness and diversity in the generated responses, while a lower temperature produces more conservative and predictable outputs."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Top P (Nucleus Sampling):"})," Top P, also known as nucleus sampling or probabilistic sampling, is another technique used in text generation. Instead of considering all possible tokens at each step, top P sampling involves considering only the most probable tokens whose cumulative probability exceeds a certain threshold (typically referred to as P). This approach ensures diversity while still maintaining some level of control over the generated text."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In the context of prompt engineering, these concepts would be relevant when fine-tuning a language model for specific tasks or applications. Adjusting temperature and top P values can help in controlling the diversity and coherence of the generated responses according to the requirements of the task at hand."}),"\n",(0,i.jsx)(n.h2,{id:"practical-examples",children:"Practical Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Now that we have a better understanding of the inner working of a large language model, let\u2019s see some practical examples of the most ",(0,i.jsx)(n.strong,{children:"common tasks"})," they can perform pretty well, with an eye to our business scenario.\nWe said that the main capability of a Large Language Model is ",(0,i.jsx)(n.em,{children:"generating a text from scratch, starting from a textual input, written in natural language"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["But what kind of textual input and output?\nThe input of a large language model is known as ",(0,i.jsx)(n.strong,{children:"prompt"}),", while the output is known as ",(0,i.jsx)(n.strong,{children:"completion"}),", term that refers to the model mechanism of generating the next token to complete the current input. We are going to dive deep into what is a prompt and how to design it in a way to get the most out of our model. But for now, let\u2019s just say that a prompt may include:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.strong,{children:"instruction"})," specifying the type of output we expect from the model. This instruction sometimes might embed some examples or some additional data."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Summarization of an article, book, product reviews and more, along with extraction of insights from unstructured data."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Example of summarization",src:t(7096).c+"",width:"678",height:"720"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Creative ideation and design of an article, an essay, an assignment or more."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Example of creative writing",src:t(4556).c+"",width:"619",height:"720"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"question"}),", asked in the form of a conversation with an agent."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Example of conversation",src:t(8428).c+"",width:"701",height:"720"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A chunk of ",(0,i.jsx)(n.strong,{children:"text to complete"}),", which implicitly is an ask for writing assistance."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Example of text completion",src:t(2504).c+"",width:"632",height:"720"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A chunk of ",(0,i.jsx)(n.strong,{children:"code"})," together with the ask of explaining and documenting it, or a comment asking to generate a piece of code performing a specific task."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Coding example",src:t(4592).c+"",width:"714",height:"720"})}),"\n",(0,i.jsx)(n.p,{children:"The examples above are quite simple and don\u2019t want to be an exhaustive demonstration of Large Language Models capabilities. They just want to show the potential of using generative AI, in particular but not limited to educational context."}),"\n",(0,i.jsx)(n.p,{children:"Also, the output of a generative AI model is not perfect and sometimes the creativity of the model can work against it, resulting in an output which is a combination of words that the human user can interpret as a mystification of reality, or it can be offensive. Generative AI is not intelligent - at least in the more comprehensive definition of intelligence, including critical and creative reasoning or emotional intelligence; it is not deterministic, and it is not trustworthy, since fabrications, such as erroneous references, content, and statements, may be combined with correct information, and presented in a persuasive and confident manner. In the following lessons, we\u2019ll be dealing with all these limitations and we\u2019ll see what we can do to mitigate them."})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5468:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/AI-diagram-d15b6216e5fb3739d67dfa87c94afc92.png"},4592:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/coding-example-233637c73da57594e7a7fb97ec5c1e0b.png"},8428:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/conversation-example-11cd2614006f9c0fdf3c5297a3320c08.png"},4556:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/creative-writing-example-e381b6a59ea6c9b3559b97c65c0aed39.png"},7096:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/summarization-example-f176da1133532368558d2de2831978e9.png"},2504:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/text-completion-example-660f4ae21ea319fbb8a67daa69199c65.png"},5860:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/tokenizer-example-66485c67d9c21fc0742a68a70e1164ed.png"},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>o});var i=t(1504);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);