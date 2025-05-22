import fs from 'fs';

// Check if the bundle files exist
const esmExists = fs.existsSync('./dist/index.esm.js');
const cjsExists = fs.existsSync('./dist/index.cjs.js');
const dtsExists = fs.existsSync('./dist/index.d.ts');
const configExists = fs.existsSync('./dist/wttp.config.ts');

console.log('ESM bundle exists:', esmExists);
console.log('CJS bundle exists:', cjsExists);
console.log('TypeScript declarations exist:', dtsExists);
console.log('WTTP config exists in dist:', configExists);

// Check the content of the bundles to verify they include formatEthereumAddress
const esmContent = fs.readFileSync('./dist/index.esm.js', 'utf8');
const cjsContent = fs.readFileSync('./dist/index.cjs.js', 'utf8');
const dtsContent = fs.readFileSync('./dist/index.d.ts', 'utf8');

console.log('\nESM bundle includes formatEthereumAddress:', 
  esmContent.includes('formatEthereumAddress'));
console.log('CJS bundle includes formatEthereumAddress:', 
  cjsContent.includes('formatEthereumAddress'));
console.log('TypeScript declarations include formatEthereumAddress:', 
  dtsContent.includes('formatEthereumAddress'));

console.log('\nBundle verification complete!');