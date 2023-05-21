function decode({ tokens, token_separator = ",", runs }) {
  if (typeof tokens === "string") tokens = tokens.split(token_separator);
  const results = [];
  runs.split(",").forEach(function (it) {
    it = it.split("x");
    const value = tokens[Number(it[0])];
    const run_length = it.length === 1 ? 1 : Number(it[1]);
    for (let i = 0; i < run_length; i++) results.push(value);
  });
  return results;
}

if (typeof window === "object") {
  window.vecrun;
}

if (typeof define === "function" && define.amd) {
  define(function () {
    return decode;
  });
}

if (typeof module === "object") {
  module.exports = decode;
  module.exports.default = decode;
}
