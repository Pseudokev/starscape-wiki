import fs from "fs"

export function load({params}){
    let content = fs.readFileSync("src/content/pages/"+params.page+".yml","utf-8");

    return {
        content:content,
    }
}

function getAllFiles(dirPath) {
    let all = [];
    const files = fs.readdirSync(dirPath)
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

  

export function entries() {
    const directoryPath = 'src/content/pages'; // Replace with the actual path
    const allFiles = getAllFiles(directoryPath);
    
	return all.map(file => {path:file.replace("src/content/pages/","")})
}