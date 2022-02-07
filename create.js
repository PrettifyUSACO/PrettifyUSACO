
const { spawn } = require('child_process');

const cmds = [
  'zip -r extension.zip src prism manifest.json'
]; 

spawn(
  'sh',
  [
    '-c',
    cmds.join(' && ')
  ]
);