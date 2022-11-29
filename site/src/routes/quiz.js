var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");

router.post("/inserirTentativa/:idUsuario", function (req, res) {
    quizController.inserirTentativa(req, res);
})

router.get("/listarTentativa/:idUsuario", function (req, res) {
    quizController.listarTentativa(req, res);
})

module.exports = router;