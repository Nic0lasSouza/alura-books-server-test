const express = require("express");
const rotaLivro = require("./rotas/livro");
const rotaFavorito = require("./rotas/favorito")
const rotaCategoria = require("./rotas/categoria")

const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors({ origin:"*" })); //Permite que todos os domínios acessem nossa API

app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavorito)
app.use('/categoria', rotaCategoria)

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})

