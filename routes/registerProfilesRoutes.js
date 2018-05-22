/*
 *
 */
const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Register = mongoose.model('registers');

module.exports = app => {

    app.get('/api/registers', requireLogin, async (req, res) => {
        const registers = await Register.find({ _user: req.user.id }).select({
            prog_languages: false
        });

        res.send(registers);
    });

    app.post('/api/register', requireLogin, async (req, res) => {
        const { title, name, age, qualification, prog_languages } = req.body;

        const register = new Register({
            title,
            name,
            age,
            qualification,
            prog_languages,
            // prog_languages : prog_languages .split(',').map(prog_languages  => ({ prog_languages : prog_languages .trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        try {

            await register.save();
            const user = await req.user.save();

            res.send(user);

        } catch (err) {
            res.status(422).send(err);
        }
    });
};