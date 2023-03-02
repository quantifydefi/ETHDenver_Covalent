const express = require('express')
const app = express()
const port = 3000



app.get('/', (req,rest) => 
{
    rest.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



