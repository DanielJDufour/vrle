const count = require("fast-counter");
const fast_rle_encode = require("fast-rle/encode.js");
const serialize_advanced_csv = require("rle-serializers/serialize_advanced_csv.js");

const chunk = (arr, chunk_size) => {
  const results = [];
  for (let i = 0; i < arr.length; i += chunk_size) {
    const chunk = [];
    for (let c = 0; c < chunk_size; c++) {
      if (i + c >= arr.length) break;
      chunk.push(arr[i + c]);
    }
    results.push(chunk);
  }
  return results;
};

const sort_by_count = values => {
  return Object.entries(count(values))
    .sort((a, b) => Math.sign(b[1] - a[1]))
    .map(([value, ct]) => value);
};

function encode(values) {
  const tokens = sort_by_count(values);
  const rle_encoded = fast_rle_encode(values);
  const chunked = chunk(rle_encoded, 2);
  const vectorized = chunked.map(([ct, value]) => [ct, tokens.indexOf(value)]);
  const serialized = serialize_advanced_csv(vectorized.flat());

  let serialized_tokens;
  let token_separator;
  const tokstring = tokens.join("");
  const seps = [",", ";", "|"];
  for (let i = 0; i < seps.length; i++) {
    const sep = seps[i];
    if (!tokstring.includes(sep)) {
      serialized_tokens = tokens.join(sep);
      token_separator = sep;
      break;
    }
  }

  return {
    tokens: serialized_tokens,
    token_separator,
    runs: serialized
  };
}

if (typeof define === "function" && define.amd) {
  define(function () {
    return encode;
  });
}

if (typeof module === "object") {
  module.exports = encode;
  module.exports.default = encode;
}
