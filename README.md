# Casa Criativa

## Projeto de para COVID-19

- O projeto é uma ideia de ajuda da comunidade para deixar o tempo de quarentena, por causa do vírus da COVID-19, mais leves e fáceis de lidar. Ideia adaptada da [Rocketseat](https://rocketseat.com.br/).

### Funcionalidades

- O usuário poderá navagar nas ideias já apresentadas e também poderá colocar a sua ideia no site.

### Requisitos para rodar o sistema na máquina

- Ter instalado [Node.js](http://nodejs.org/), opcionalmente, se for windows o [Chocolatey](https://chocolatey.org/), ou macOS o [Homebrew](https://brew.sh/).

### Ferramentas

- Site criado usando o [Node.js](http://nodejs.org/) e [express](https://www.npmjs.com/package/express) no Back-end, HTML, CSS e JavaScript puro no Front-end. Banco de dados [Sqlite](https://www.sqlite.org/). Para a vizualização de conteúdo vindo do Back-end foi usado o [nunjunks](https://www.npmjs.com/package/nunjucks), pacote do Node.js.

- Para rodar o servidor da aplicação:
  - Em ambiente de desenvolvimento (utilizando o Nodemon para debug e atualização em tempo real dos arquivos que estão sendo modificados) é só rodar:
    ```sh
    npm run dev
    ```
  - Em ambiente de produção:
    ```sh
    npm start
    ```

### Licença

- [MIT](https://github.com/luisdef/node-casa-criativa/blob/master/LICENSE).
