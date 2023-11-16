const express = require('express');
const path = require('path');
const app = express();
const port = 3030

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(port,() => {
    console.log(`El servidor está levantado en el puerto ${port} en el http://localhost:${port}`)
});

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'))
});

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'))
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'))
});