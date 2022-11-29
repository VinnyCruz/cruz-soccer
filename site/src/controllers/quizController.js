var quizModel = require("../models/quizModel");

function inserirTentativa(req, res) {
    var idUsuario = req.params.idUsuario;
    var qtdCertas = req.body.qtdCertas;
    var qtdErradas = req.body.qtdCertas;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    quizModel.inserirTentativa(idUsuario, qtdCertas, qtdErradas)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarTentativa(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.listarTentativa(idUsuario)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    inserirTentativa,
    listarTentativa
}