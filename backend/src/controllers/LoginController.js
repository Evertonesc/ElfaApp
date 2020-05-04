const connection = require('../database/connection');
const bcrypt = require('bcrypt-nodejs');
// const jwt = require('jwt-simple');

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.USU_LOGIN || !req.body.USU_SENHA) {
            return res.status(400).send('Dados incompletos')
        }

        const user = await connection('USU_USUARIO')
            .whereRaw(req.body.login)
            .first()

        if (user) {
            bcrypt.compare(req.body.USU_SENHA, user.USU_SENHA, (err, isMatch) => {
                if (err || !isMatch) {
                    return res.status(401).send('A senha informada é inválida!')
                }

                // const payload = {
                //     id: user.id,
                //     name: user.name,
                //     email: user.email
                // }

                res.json({
                    name: user.name,
                    email: user.email,
                    // token: jwt.encode(payload, authSecret),
                })
            })
        } else {
            res.status(400).send('Usuário não cadastrado!')
        }
    }

    return { signin }
}