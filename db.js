const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./casa-criativa.db')

db.serialize(function() {

    // Criar uma tabela
    db.run(
        `CREATE TABLE IF NOT EXISTS ideias(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );    
    `)
    //Inserir dados na tabela
    //const query = `INSERT INTO ideias(
    //    image,
    //    title,
    //    category,
    //    description,
    //    link
    //) VALUES(?,?,?,?,?);`

    //const values = [
    //    "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    //    "Cursos de Programação",
    //    "Estudo",
    //    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ducimus magnam error reprehenderit neque...",
    //    "http://rocketseat.com.br"
    //]
    //db.run(query, values, function(err){
    //    if (err) return console.log(err)
    //
    //    console.log(this)
    //})
    
    // Deletar um dado na tabela
    /* db.run(`DELETE FROM ideias WHERE id = ?`, [6], function(err) {
        if (err) return console.log(err)

        console.log("Deletado", this)
    }) */

    // Consultar dados na tabela
    /* db.all(`SELECT * FROM ideias`, function(err, rows) {
        if (err) return console.log(err)

        console.log(rows)
    }) */
})

module.exports = db