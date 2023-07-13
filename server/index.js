import express from "express"
import cors from "cors"
import generateSql from './generateSql.js'

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.post("/generate", async (req, res) => {
    const {queryDesc} = req.body
    try {
        const sqlQuery = await generateSql(queryDesc)
        res.status(200).json(sqlQuery)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
