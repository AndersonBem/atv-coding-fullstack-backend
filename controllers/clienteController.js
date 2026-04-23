const Cliente = require('../models/Clientes');

exports.listaCliente = async (req, res) => {
  const cliente = await Cliente.find();
  res.json(cliente);
};

exports.clientePorId = async (req, res) => {
  const clienteId = await Cliente.findById(req.params.id);
  if (!clienteId) return res.status(404).json({ message: 'Cliente não encontrado.' });
  res.json(clienteId);
};

exports.criarCliente = async (req, res) => {
  const criarCliente = await Cliente.create(req.body);
  res.status(201).json(criarCliente);
};

exports.atualizarCliente = async (req, res) => {
  const atualizarCliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!atualizarCliente) return res.status(404).json({ message: 'Cliente não encontrado.' });

  res.json(atualizarCliente);
};

exports.deletarCliente = async (req, res) => {
  const deletarCliente = await Cliente.findByIdAndDelete(req.params.id);
  if (!deletarCliente) return res.status(404).json({ message: 'Cliente não encontrado.' });
  res.json({ message: 'Cliente removido com sucesso.' });
};