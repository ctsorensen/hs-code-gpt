import OpenAI from 'openai'

const openai = new OpenAI();

export default async function GptCall(descriptionInput) {
  //console.log('input: '+descriptionInput.toString());
  var prompt = 'What is the 6 digit harmonized code for: ' + descriptionInput +'? answer with only 6 digits in this format: ####.##';

  const completion = await openai.chat.completions.create({
    messages: [ 
      {role: "system", content: "You are a customs classification and harmonized code expert."},
      {role: "user", content: prompt }],
    model: "gpt-3.5-turbo-0125",
    temperature: 0.1
  });

  //console.log(completion.choices[0]);

  var hscode = completion.choices[0].message.content;

  return hscode;

}



