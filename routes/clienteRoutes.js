const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.listaCliente);
router.get('/:id', clienteController.clientePorId);
router.post('/', clienteController.criarCliente);
router.put('/:id', clienteController.atualizarCliente);
router.delete('/:id', clienteController.deletarCliente);

module.exports = router;
