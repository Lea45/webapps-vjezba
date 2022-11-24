import express from 'express'
import bodyParser from 'body-parser'


const app = express()
const port = 3000

app.use(bodyParser.json())
var tempStorage = []

app.get("/korisnici", (req, res) => {
    console.log(tempStorage)
    res.send(tempStorage)
})

app.listen(port, () => console.log('Works on port ${port}'))