const express = require('express')
const app = express()
const PORT = 8383

const data = ['Adtiya']

//Middleware
app.use(express.json())


//ENDPOINT - HTTP Verbs + Routes(or paths)
/*The method informs us the nature of the request and the route is the further subdirectory
(basically we direct the request to the body of the code to respond appropriately, and these locations
or routes are called endpoints)*/

//Type 1- Website API's(these endpoints are for sending back html nd they typically come when a user enters a url in browser)

app.get('/',(req,res) => {
    res.send(`
        <body style="background-color:pink;color:white">
            <h1>DATA</h1>
            <p>${JSON.stringify(data)}</p> 
            <a href="/dashboard">Dashboard</a>       
        </body>
    `)
})

app.get('/dashboard',(req,res) => {
    res.send(`
        <body>
        <h3>Welcome to Dashboard</h3>
        <a href="/">Home-Page</a>    
        </body> 
    `)
})

//Type 2- API Endpoints(non visual )
app.get('/api/data', (req, res) => {
    console.log(req.body);
    res.status(200).send(data)
})

app.post('/api/data', (req,res) => {
    const newEntry = req.body;
    data.push(newEntry.name)
    console.log(data)
    res.sendStatus(201)
})

app.delete('/api/data', (req,res) => {
    data.pop();
    console.log("data dleted from the end of the array")
    res.sendStatus(203);
})


app.listen(PORT,()=>{
    console.log(`Server is started on ${PORT}`)
})