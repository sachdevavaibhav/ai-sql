import openaiClient from './api.js'

const generateSql = async (queryDesc, model) => {

    const davinciApi = async (queryDesc) => {
        const response = await openaiClient.createCompletion({
            model: "text-davinci-003",
            prompt: `Convert the following natural language description into SQL query:\n\n${queryDesc}.`,
            max_tokens: 100,
            temperature: 0
        })
        return response.data.choices[0].text
    }

    const chatGptApi = async (queryDesc) => {
        const message = [
          { role: "system", content: `You are a translator from plain English to SQL.` },
          { role: "user", content: `Convert the following natural language description into a SQL query:\n\nShow all all the elements in the table users` },
          { role: "assistant", content: "SELECT * FROM users;" },
          { role: "user", content: `Convert the following natural language description into a SQL query:\n\n${queryDesc}` },
        ];
        const response = await openaiClient.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: message,
        });
    
        return response.data.choices[0].message.content;
      }

    return await model=="davinci"?davinciApi(queryDesc):chatGptApi(queryDesc)
}

export default generateSql;