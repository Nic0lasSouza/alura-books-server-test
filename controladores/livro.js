const { getTodosLivros, getLivrosPorId, insereLivro, modificaLivro, deletarLivroPorId } = require("../services/livros");
function getLivros(req, res){
    try {
        const livros = getTodosLivros() ;
        res.send(livros);
    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function getLivro(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            //Number(2)-> 2 -> true
            //Number("batata")-> NaN-> false
            const livro = getLivrosPorId(id);
            res.send(livro);
        } else{
            res.status(422); //dado não esperado
            res.send("Id invalido")
        }

    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function postLivro(req,res) {
    try{
        const livroNovo = req.body
        if(req.body.nome){
            insereLivro(livroNovo);
            res.status(201)
            res.send("Livro inserido com sucesso")
        } else{
            res.status(422);
            res.send("Campo nome é obrigatório");
        }
    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function patchLivro(req, res) {
    try{
        const id = req.params.id;
        if(id && Number(id)){
            const body = req.body;
            if(req.body.nome){
                modificaLivro(body, id)
                res.send("Item modificado com sucesso")
            } else{
                res.status(422);
                res.send("Campo nome é obrigatório");
            }
        } else{
            res.status(422); //dado não esperado
            res.send("Id invalido")
        }

    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function deleteLivro(req, res) {
    try{
        const id = req.params.id;
        if(id && Number(id)){
            deletarLivroPorId(id)
            res.send("Item deletado com sucesso")
        } else{
            res.status(422); //dado não esperado
            res.send("Id invalido")
        }

    } catch(error){
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}