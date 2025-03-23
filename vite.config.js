import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from "path"
import fs from "fs"

const fuckoffcb = ()=>{}
const outdir = "generated";
const pagesrc = "src/content/pages"
fs.rmSync("generated",{recursive:true});
fs.mkdirSync("generated",fuckoffcb);

let input = {
  main:"index.html"
}

function genfiles(directory){
  const files = fs.readdirSync(directory);
  files.forEach(file=>{
    const stat = fs.statSync(directory+"/"+file)
    if (stat.isDirectory()) {
      fs.mkdirSync("generated/"+file,fuckoffcb);
      genfiles(pagesrc+"/"+file);
    }
    else{
      const dir = directory.replace(pagesrc,"generated") +"/"+file.replace("json","html");
      const pagejson = JSON.parse(fs.readFileSync(directory+"/"+file));
      fs.writeFileSync(dir,
      `<!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Starscape Wiki</title>
            <meta content="Embed Title" property="og:title" />
            <meta content="description" property="og:description" />
            <meta content="http://localhost:5173/" property="og:url" />
            <meta content="https://imgur.com/gallery/this-is-lucinda-regtL55" property="og:image" />
            <meta content="#43B581" data-react-helmet="true" name="theme-color" />
          </head>
          <body>
            <div id="app"></div>
            <script type="module" src="/src/main.js" id="page" title="${pagejson.title}"></script>
          </body>
        </html>`
      );
      input[file.replace(".json","")] = dir;
      console.log(input)
    }
  })
}
genfiles(pagesrc);

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build:{
    rollupOptions:{
      input:input,
      output:{
        dir:"docs"
      }
    }
  }
})
