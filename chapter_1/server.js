const express = require('express')
const app = express()
const PORT = 8383
//ENDPOINT - HTTP Verbs + Routes(or paths)
/*The method informs us the nature of the request and the route is the further subdirectory
(basically we direct the request to the body of the code to respond appropriately, and these locations
or routes are called endpoints)*/

app.get('/',(req,res) => {
    console.log("this is home page",req.method)
    res.statusCode(200)
})
app.listen(PORT,()=>{
    console.log(`Server is started on ${PORT}`)
})