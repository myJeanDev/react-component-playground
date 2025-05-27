# React App set up on Github
`npx create-react-app <app-name>`  
set homepage in `package.json` : `"homepage": "https://myJeanDev.github.io/<repository-name>/",`  
add deploy in `package.json` inside of `"scripts":{` `"deploy": "gh-pages -d build",`  
`npm install gh-pages --save-dev`  
Add the YAML to the `.github/workflows/node.js.yml`  
Set git pages to build from actions  
Give git actions permissions in settings  
