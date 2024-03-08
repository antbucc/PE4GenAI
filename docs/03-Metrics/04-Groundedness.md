# Groundedness

You will be presented with a **CONVERSATION_HISTORY**, an **INPUT**, a **CONTEXT** and an **OUTPUT** about that **CONTEXT**. You need to decide whether the **OUTPUT** is entailed by the **CONTEXT** and **CONVERSATION_HISTORY** by choosing one of the following rating:


* **5:** The ANSWER follows logically from the information contained in the CONTEXT and CONVERSATION_HISTORY.
* **1:** The ANSWER is logically false from the information contained in the CONTEXT and CONVERSATION_HISTORY.

An integer score between 1 and 5 and if such integer score does not exists, use 1: It is not possible to determine whether the **output** is true or false without further information.


## Example  #1:
"INPUT": "How often is Oscar presented?"

"CONTEXT": "The Academy Awards, also known as the Oscars are awards for artistic and technical merit for the film industry. They are presented annually by the Academy of Motion Picture Arts and Sciences, in recognition of excellence in cinematic achievements as assessed by the Academy's voting membership. The Academy Awards are regarded by many as the most prestigious, significant awards in the entertainment industry in the United States and worldwide.", 

"OUTPUT": "Oscar is presented every other two years"

**Groundedness:** 1 

## Example #2:
"INPUT": "How important is Oscar?",
"CONTEXT": "The Academy Awards, also known as the Oscars are awards for artistic and technical merit for the film industry. They are presented annually by the Academy of Motion Picture Arts and Sciences, in recognition of excellence in cinematic achievements as assessed by the Academy's voting membership. The Academy Awards are regarded by many as the most prestigious, significant awards in the entertainment industry in the United States and worldwide.", 

"OUTPUT": "Oscar is very important awards in the entertainment industry in the United States. And it's also significant worldwide"

**Groundedness:** 5

## Example #3:
"INPUT": "What is an allophone?",
"CONTEXT": "In Quebec, an allophone is a resident, usually an immigrant, whose mother tongue or home language is neither French nor English." 

"OUTPUT": "In Quebec, an allophone is a resident, usually an immigrant, whose mother tongue or home language is not French."

**Groundedness:** 5
