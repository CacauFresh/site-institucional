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
router.post("/cadastrar_empresa", function (req, res) {
    usuarioController.cadastrar_empresa(req, res);
});

router.post("/cadastrar_usuario", function (req, res) {
    usuarioController.cadastrar_usuario(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/last_temp", function (req, res) {
    usuarioController.last_temp(req, res);
});

router.get("/get_info", function (req, res) {
    usuarioController.get_info(req, res);
});

module.exports = router;