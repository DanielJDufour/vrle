# vrle
> Vectorized Run-Length Encoding

## install
```bash
npm install vrle
```

## usage
```js
// or import encode from "vrle/encode.js";
import { encode } from "vrle";

const values =  [
  'WGS84', 'WGS84', 'WGS84', 'NONE',  'NONE',  'NONE',  'NONE',
  'NONE',  'NONE',  'NONE',  'NONE',  'NONE',  'NONE',  'NONE',
  'NONE',  'NONE',  'NONE',  'NONE',  'NONE',  'NONE',  'NONE',
  'NONE',  'NONE',  'NONE',  'NONE',  'NONE',  'NONE',  'NONE',
  'NONE',  'NONE',  'NONE',  'NONE',  'NONE',  'NONE',  'NONE',
  'NONE',  'NONE',  'NAD27', 'NAD27', 'NAD27', 'NAD27', 'NAD27'
  // many more items
];

encode(values)
{
  tokens: 'NONE,NAD83,WGS84,NAD27',
  token_separator: ',',
  runs: '2x3,0x34,3x15,0x3,3x2,1x14,0x2,1x2,3x2,1,2,0x330,2,0x71,2,0x17,2x2,0,3,1,0x52,2,0x52,1,0x46,3,0x17,1,0x9,2,0x45,3,0x5,3x3,0x15,1,0x45,2,0x28,2x20,0x58,2x19,0x21,2x10,0x40,3x3,0x324,1,0x61,2,0x5,2,0,2,0x106,2,0x3,1x2,0x3,2x3,0x5,3,0x207,3x2,0x150,2x33,0x73,3,0x21,2x2,0x192,1x4,0x54,1x116,0x2,1,0x5,2x3,0x115,2,0x43,3,0x2,2,0x80,2,0x30,1,0,2,0x7,2x2,0x2,1,0x812,3x85,0x6,1x8,0x16,1x8,0x25,1x92,0x334,3x74,1x78,0x241,2x67,0,2x62'
}
```