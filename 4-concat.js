#!/usr/bin/node

// Retrieve command-line arguments
const args = process.argv.slice(2);

// Print output in the required format
console.log(`${args[0] || 'undefined'} is ${args[1] || 'undefined'}`);
 