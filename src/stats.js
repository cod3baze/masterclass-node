const os = require("os");
const log = require("./logger");

const { freemem, totalmem } = os;
const convert = (x) => parseInt(x / 1024 / 1024);

setInterval(() => {
  const mem = convert(freemem());
  const total = convert(totalmem());
  const persents = parseInt((mem / total) * 100);

  const stats = {
    free: `${mem} MB`,
    totoal: `${total} MB`,
    persents: `${persents}%`,
  };

  console.clear();
  console.log("=== PC STATS ===");
  console.table(stats);

  log(`${JSON.stringify(stats)} \n`);
}, 1000);
