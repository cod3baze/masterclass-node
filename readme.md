# NodeJS

> JS Runtime Enviroment

- Gerenciar Pedidos
  Single Thread: 1 pegando os pedidos
  Event Loop: mecanismo para tratar os pedidos
  `Thread Pool` > `event queue` > `event Loop...`

| Recurso  | descrição                                    |
| -------- | -------------------------------------------- |
| `Dotenv` | orquestra as variáveis ambientede um projeto |
| `OS`     | dá informações do sistema operacional        |
| `fs`     | Vai trabalhar com os arquivos do sistema     |
| `path`   | Vai trabalhar com diretórios do sistema      |

---

## Dotenv

.env: é composto de chaves e valores.

EX:

```env
  APP_NAME="Genesis system"
  SECRET_API=938Y59T#$33

  # BATA BASE

```

PADRÕES

- [x] As chaves são em caixa alta;
- [x] As chaves não podem ter espaço;
- [x] Os valores podem ser quaisquer tipo, que será retornando sempre uma `string`;
- [x] Pode haver espaçamentos, porém é feito um `trim` na _string_;
- [x] Pode existir chaves sem valor, que retorna uma `string` vazia;

Com o arquivo `.env` configurado é necessário executar o `dotenv` que irá chama-lo para ler as variáeis e adiciona-las ao processo que o executou, sabendo que para acessar as informações use `process.env.[NOMDE_DA_CHAVE]`

---

## path

orquestra os direitórios da aplicação

- Métodos

  - [x] `path.join(STRING[])` junta todos os diretórios passados e retorna eles formatados.
        ex: `.join('src', 'index,js') >>> src\index.js`

  - [x] `path.dirname(path)` retorna o diretório root da aplicação

---

## OS

- Métodos

  - [x] `freemem() | totalmem()` > memórias do sistema em _bits_
        ex:

    ```js
    const os = require("os");

        const { freemem, totalmem } = os;

    const convert = (x) => parseInt(x / 1024 / 1024);

    setInterval(() => {
    const mem = convert(freemem());
    const total = convert(totalmem());
    const persents = parseInt((mem / total) \ * 100);

    const stats = {
    free: `${mem} MB`,
    totoal: `${total} MB`,
    persents: `${persents}%`,
    };

    console.clear();
    console.log("=== PC STATS ===");
    console.table(stats);
    }, 1000);
    ```

---

## fs

- Métodos

  - [x] `fs.appendFile(file, data, callback(err))`: abri o arquivo e add os **dados**, chama a **callback** passando o estatus: erro | ok
