import { Configuration, OpenAIApi } from "openai"
import dotenv from "dotenv"

dotenv.config()

const openAiApiKey = process.env.OPENAI_API_KEY

const configuration = new Configuration({
    apiKey: openAiApiKey
})

const openai = new OpenAIApi(configuration)

export default openai