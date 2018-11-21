const express = require('express')
const models = require('./models')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(cors());

app.get('/', (req , res) => {
    models.uselog.findAll({})
    .then(mods => res.json(mods))
})

app.post('/api/user', (req , res) => {
    const newUser = new models.uselog({
        login: req.body.login,
        password: req.body.password
    })
    newUser.save()
})

app.put('/api/modif/:id', (req , res) => {
    models.uselog.update({
        login: req.body.login,
        password: req.body.password,
    },{
        where: {
            id: req.params.id
        }
    }).then(rest => {
        res.json(rest)
    })
})

app.delete('/api/delete/:id', (req , res) => {
    models.uselog.destroy({
        where: {
            id: req.params.id
        }
    }).then(rest => {
        res.json(rest)
    })
})

models.sequelize.sync()
.then(() => {
    app.listen(process.env.PORT || 4242)
})