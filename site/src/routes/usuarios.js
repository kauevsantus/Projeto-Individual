var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});


// criando rotas novas
router.post("/inserir", function (req, res) {
    usuarioController.inserir(req, res);
});

// Aqui estou passando parametro do idUsuario que fica salvo na ssesionStorage no body da pagina
router.get("/resultado/:idUsuario", function (req, res) {
    usuarioController.resultado(req, res);
});

router.get("/mostrar", function (req, res) {
    usuarioController.mostrar(req, res);
});

router.get("/validar/:idUsuario", function (req, res) {
    usuarioController.validar(req, res);
});

module.exports = router;