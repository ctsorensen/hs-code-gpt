import OpenAI from 'openai'

const openai = new OpenAI();

export default async function GptCall(descriptionInput) {
  console.log('input: '+descriptionInput.toString());
  var prompt = 'What is the 6 digit harmonized code for: ' + descriptionInput +'? answer with only 6 digits in this format: ####.##';
  const completion = await openai.chat.completions.create({
    messages: [ 
      {role: "system", content: "You are a customs classification and harmonized code expert."},
      {role: "user", content: prompt }],
    model: "gpt-3.5-turbo-0125",
    temperature: 0.1
  });

  console.log(completion.choices[0]);

  var hscode = completion.choices[0].message.content;

  return hscode;

}

/*
// import OpenAI from 'node_modules/openai';
import OpenAI from 'openai'

const openai = new OpenAI();

export default async function GptCall(descriptionInput) {
  console.log('input: '+descriptionInput.toString());
  // var prompt = 'Return only the 6 digit harmonized code for: ' + descriptionInput;
  var prompt = 'What is the 6 digit harmonized code for: ' + descriptionInput +'? answer with only 6 digits in this format: ####.##';
  // Prompt without customs description is 25 tokens. $0.0005 / 1K tokens (GPT 3.5)
  //"Cotton sweatshirt" is 3 tokens
  // Response is 4 tokens. $0.0015 / 1K tokens (GPT 3.5)
  // Total cost for 1000 average suggestions: 28 tokens input ($0.014) + 4 tokens output ($.04) = 18 cents for 1000 average suggestions! Cheap!
  
 
 // var prompt = 'As an expert in customs, what is the 6 digit harmonized code for: ' + descriptionInput +'? answer with only 6 digits in this format: ####.##';

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-4-0613",
    temperature: 0.1
  });

  console.log(completion.choices[0]);

  var hscode = completion.choices[0].message.content;

  return hscode;

}
*/

