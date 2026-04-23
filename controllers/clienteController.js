const Cliente = require('../models/Clientes');

exports.listaCliente = async (req, res) => {
  try {
    const cliente = await Cliente.find();
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar clientes.' });
  }
};

exports.clientePorId = async (req, res) => {
  try {
    const clienteId = await Cliente.findById(req.params.id);

    if (!clienteId) {
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }

    res.json(clienteId);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar clientes.' });
  }
};

exports.criarCliente = async (req, res) => {
  try {
    const criarCliente = await Cliente.create(req.body);
    res.status(201).json(criarCliente);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Este e-mail já está cadastrado.' });
    }

    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: 'Erro ao criar cliente.' });
  }
};

exports.atualizarCliente = async (req, res) => {
  try {
    const atualizarCliente = await Cliente.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!atualizarCliente) {
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }

    res.json(atualizarCliente);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Este e-mail já está cadastrado.' });
    }

    if (error.name === 'ValidationError') {
      const mensagens = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ message: mensagens[0] });
    }

    res.status(500).json({ message: 'Erro ao atualizar cliente.' });
  }
};

exports.deletarCliente = async (req, res) => {
  try {
    const deletarCliente = await Cliente.findByIdAndDelete(req.params.id);

    if (!deletarCliente) {
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }

    res.json({ message: 'Cliente removido com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao deletar cliente.' });
  }
};