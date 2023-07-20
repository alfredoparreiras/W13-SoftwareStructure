var express = require('express');
var app = express();
var morgan = require('morgan')

const settings = require('./Routes/settings')
const dashborad = require('./Routes/dashboard')
const blogs = require('./Routes/blogs')


app.use(morgan('combined'))
app.use('/',dashborad)
app.use('/blogs',blogs)
app.use('/settings',settings)

app.listen(8000, function () {
    console.log('Listening to Port 8000');
});