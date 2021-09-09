#!/usr/bin/env node

let indexer = require("commander");

indexer
  .version("1.0.1")
  .option("-i, --input [value]", "Input files", function (arg) { return arg; }, "content/**")
  .option("-o, --output [value]", "Output files", "public/algolia.json")
  .option("-t, --toml", "Parse with TOML", false)
  .option("-A, --all", `Turn off "other" category`, false)
  .option("-s, --send", "Send to Algolia", false)
  .option("-m, --multiple-indices [value]", "Multiple categories")
  .option("-p, --custom-index", "Custom index")
  .option("--config [value]", "Config file", "./config.yaml")
  .option("--extname [value]", "File extnames", ".md,.html")
  .option(
    "-c, --content-size [value]",
    "Content size to send to Algolia",
    "5Kb"
  )
  .parse(process.argv);

var HugoAlgolia = require("../");
new HugoAlgolia(indexer).index();
