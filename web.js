const express = require('express')
const path = require('path')
const port = 8003

const navidata = require("./server/routers/navi");

const app = express();

app.use(express.static(path.join(__dirname, './jejuthema/build')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, './jejuthema/build/index.html'))
})

app.use("/data", navidata);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, './www/nopage.html'))
})

app.listen(port, () => {
    console.log(`localhost:${port} 서버정상구동`)
})