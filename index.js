const encode = require("./encode.js");
const decode = require("./decode.js");

const vrle = { encode, decode };

if (typeof define === "function" && define.amd) {
  define(function () {
    return vrle;
  });
}

if (typeof module === "object") {
  module.exports = vrle;
  module.exports.default = vrle;
}
