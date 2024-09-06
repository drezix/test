const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

// Create another admin (only admin)
exports.createAdmin = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verificar se o usuário já existe
        const existingUser = await userModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Criar um novo admin
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new userModel({
            username,
            password: hashedPassword,
            isAdmin: true // Definindo como admin
        });

        // Salvar no banco de dados
        const savedAdmin = await newAdmin.save();
        res.status(201).json({ msg: 'Admin added successfully', admin: savedAdmin });
    } catch (error) {
        res.status(500).json({ msg: 'Error adding admin', error: error.message });
    }
};