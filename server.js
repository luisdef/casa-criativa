// usei o express para criar e configurar o meu servidor
const express = require("express")
const server = express()


const db = require('./db')




// configurar arquivos státicos(css, scripts, images, etc)
server.use(express.static("public"))

// habilitar uso do req.body
server.use(express.urlencoded({ extended: true }))

// configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

// criei uma rota /
// e capturo o pedido do client for resp
server.get("/", function(req, res) {

    db.all(`SELECT * FROM ideias`, function(err, rows) {
        if (err) {
            console.log(err)
            return res.send("Erro no Banco de Dados")
        }

        const reversedIdeas = [...rows]

        let lastIdeias = []
        for (let ideia of reversedIdeas) {
            if (lastIdeias.length < 2) {
                lastIdeias.push(ideia)
            }
        }
        return res.render("index.html", { ideias: lastIdeias })
    })

})

server.get("/ideias", function(req, res) {
    db.all(`SELECT * FROM ideias`, function(err, rows) {
        if (err) {
            console.log(err)
            return res.send("Erro no Banco de Dados!") // Responde se tiver algum erro no db;
        }

        const reversedIdeas = [...rows].reverse()
        
        return res.render("ideias.html", { ideias: reversedIdeas})
    })
})

server.post("/", function(req, res) {
    // Inserir dados na tabela;;;
    const query = `INSERT INTO ideias(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?)`

    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link
    ]

    db.run(query, values, function(err) {
        if (err) {
            console.log(err)
            res.send("Erro no Banco de Dados!")
        }

        return res.redirect("/ideias")

    })
})

// liguei o servidor na porta 3000
server.listen(3000)
