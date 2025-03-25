import fs from "fs"
import YAML from "yaml"

function getAllFiles(dirPath) {
    let all = [];
    const files = fs.readdirSync(dirPath);
    let file;
    for (file of files){
        const stat = fs.statSync(dirPath+"/"+file)
        if (stat.isDirectory()) {
            all = all.concat(getAllFiles(dirPath+"/"+file))
        }
        else{
            all.push(dirPath+"/"+file)
        }
    }
    return all;
}

function makeSearch(filepath){
    return {
        page : file.replace("src/content/pages/",""),
        title : YAML.parse(fs.readFileSync(file,"utf-8")).title
    }
}




export function load({params}){

    let content = fs.readFileSync("src/content/pages/"+params.page+".yml","utf-8");
    const allFiles = getAllFiles('src/content/pages');
    const pages = allFiles.map(makeSearch)

    return {
        content:content,
        pages:pages
    }
}


export function entries() {
    const directoryPath = 'src/content/pages'; // Replace with the actual path
    let allFiles = getAllFiles(directoryPath);
	return allFiles.map(function (file) {return {page:file.replace("src/content/pages/","").replace(".yml","")}});
}