---
title: Installation
slug: /installation
---

:::info COURSE PRE-REQUISITES
 - **Use your own laptop**. 
 - **[Have a GitHub account](https://github.com/)**
 - **Launch a modern browser**. (Use edge or chrome for the best experience)
:::

For this course you are using a custom playground build on-top of the Azure OpenAI Service. In this playground you will have the opportunity to play with the prompts and learn how to interact with OpenAI Models.


## Authenticate

Your course instructor will provide you with an **access key** that will be valid during the course session. Setup is now a quick 4-step process. 

1. Open the following [link](https://polite-ground-030dc3103.4.azurestaticapps.net/event/052b-3235)
 2. Login with GitHub at top-right.
 3. Copy the API Key, then navigate to the [Playground](https://polite-ground-030dc3103.4.azurestaticapps.net/event/631a-5f5a).
 4. Enter the **access-key** at top-right and click `Authorize` to login.
    ![PE4GenAI Playground](../images/aitour-playground-chat.png) 


## Explore
On successful login, the playground application should update to show a `Logout` button at top-right, as shown below. To validate your setup, enter a query in the user prompt input box (region 2) and click `Send`. You should get a conversational response in the chat session are (region 3) as shown below.

Let's take a minute to familiarize ourselves with the different regions of this app.

![](../images/aitour-playground-regions.png)

- Region 1️⃣ | Once authorized, shows the event profile.
- Region 2️⃣ | User prompt - used to enter the **INPUT** part of your **CARD**.
- Region 3️⃣ | Conversation - interleaved **INPUT** & **OUTPUT**
- Region 4️⃣ | Configuration - tunable parameters, execution stats
- Region 5️⃣ | System message - sets the **CONTEXT** of your **CARD**
- Region 6️⃣ | Function calling - save custom functions to set context - **we do not use in this course.**


## Tips

### 1. Clear Chat Sessions

The output of the **CARD** is influenced by the contents of the chat session. To ensure that the output of the model is not influenced by previous **OUTPUTS**, click the "Clear Chat" button **before entering each new INPUT**.

### 2. Copy-Paste Snippets

In a prompt-based exercise, you will find the prompt input is  provided to you in a _code-fenced_ snippet as shown below. When viewing this page in a browser, _click_ within the code-fenced region below to see a `copy` icon appear at the right. Click it to copy the prompt into your clipboard - then paste using <kbd>Ctrl-V</kbd> (or equivalent) command into the text input region in Playground.

```text
This is the prompt text you need to enter into the chat prompt input field.
```