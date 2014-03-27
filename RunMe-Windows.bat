@echo off
IF EXIST node_modules GOTO SKIPNPM
   npm install
   GOTO SKIPNPM
SKIPNPM:
   node app.js
