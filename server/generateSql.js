import openaiClient from './api.js'

const generateSql = async (queryDesc) => {
    const response = await openaiClient.createCompletion({
        model: "text-davinci-003",
        prompt: `Convert the following natural language description into SQL query:\n\n${queryDesc}.`,
        max_tokens: 100,
        temperature: 0
    })
    return response.data.choices[0].text
}

export default generateSql;