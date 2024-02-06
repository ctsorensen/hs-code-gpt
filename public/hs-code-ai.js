// import OpenAI from 'node_modules/openai';
import OpenAI from 'openai'

const openai = new OpenAI();

export default async function GptCall(descriptionInput) {
  console.log('input: '+descriptionInput.toString());
  // var prompt = 'Return only the 6 digit harmonized code for: ' + descriptionInput;
  var prompt = 'Return only the 6 digit harmonized code for: ' + descriptionInput;
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-3.5-turbo-0125",
  });

  console.log(completion.choices[0]);

  var hscode = completion.choices[0].message.content;

  return hscode;

}

