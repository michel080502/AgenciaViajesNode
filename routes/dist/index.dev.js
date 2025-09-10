"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); //Req -> es el request, es la peticion
//Res -> es la respuesta


router.get("/", function (req, res) {
  res.render("inicio", {
    pagina: "Inicio"
  });
});
router.get("/nosotros", function (req, res) {
  res.render("nosotros", {
    pagina: "Nosotros"
  });
});
router.get("/viajes", function (req, res) {
  res.render("viajes", {
    pagina: "Viajes"
  });
});
router.get("/testimoniales", function (req, res) {
  res.render("testimoniales", {
    pagina: "Testimoniales"
  });
});
var _default = router;
exports["default"] = _default;