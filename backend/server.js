import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Servidor listo');
});

app.listen(5000, () => {
    console.log('Servidor en http://localhost:5000')
})