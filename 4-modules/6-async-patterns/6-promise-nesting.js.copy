const fs = require('fs').promises;

async function main() {
  const data = await fs.readFile(__filename);
  console.log("Read completed");
  await fs.writeFile(__filename + '.copy', data);
  // More awaits here...
  console.log("Write completed");
}

main();
console.log('TEST');
