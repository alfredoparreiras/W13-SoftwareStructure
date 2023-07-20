// Importing Modules. 
const express = require('express'); 
const axios = require('axios')
const app = express(); 

//Setting View to EJS
app.set("view engine", "ejs");

//Getting public folder 
// TODO : Create a CSS file later. 
app.use(express.static("public"));

// Default Route ( Initial Page )
app.get("/", (req,res) => {
    res.render("index", {weather: null, error: null})
})

// Endpoint to get Data from API. 
app.get("/weather", async(req,res) =>{

    // Retrieving Information from Form (index.ejs)
    const city = req.query.city;
    
    // Parameters to request data from API. 
    const apiKey = 'c3a941e306179dffbce21fc7d6c19142'
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    
    // Variables to send information to Template. 
    let weather = null; 
    let error = null;

    //Logic to handle Weather
    try 
    {
        const response = await axios.get(apiUrl); 
        weather = response.data; 
        console.log(response);    
        res.render("index", {weather,error})

    } 
    catch (error)
    {
        weather = null; 
        error = "Please, try again."
        console.log(error)
        res.render("index", {error})

    }
})


//PORT
const port = process.env.port || 3000; 

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})