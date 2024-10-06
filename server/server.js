const express = require('express')

const app = express();
const PORT = 5001;

app.use((req, res)=>{
    res.send("data here")
})

app.listen(PORT, ()=>{
    console.log(`Server started and is listening at port ${PORT}`)
})
