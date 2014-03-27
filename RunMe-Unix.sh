#!/bin/bash
if [ ! -d ./node_modules ]; then
  npm install
fi
node ./app.js
