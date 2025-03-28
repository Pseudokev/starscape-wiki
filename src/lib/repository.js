
async function directoryFromTreeSha(treesha){
    let dir = {}
    let tree = (await (await fetch(
        "https://api.github.com/repos/pseudokev/starscape-wiki/git/trees/"+treesha,
        {
            method:"GET",
            headers:{
                Accept : "application/vnd.github+json",
                "X-GitHub-Api-Version" : "2022-11-28"
            }
        }
    )).json())

    for (let i =0; i<tree.tree.length; i++){
        const entry = tree.tree[i];
        if (entry.type == "blob"){
            dir[entry.path] = {
                type:"file",
                content: entry,
                size:entry.size
            }
        }
        else if (entry.type == "tree"){
            dir[entry.path] = {
                type: "directory",
                content : await directoryFromTreeSha(entry.sha)
                
                
            }
        }
    }
    return dir
}

export async function getAllPages(){
    let latestcommit = await (await fetch(
        "https://api.github.com/repos/pseudokev/starscape-wiki/commits/master",
        {
            method:"GET",
            headers:{
                Accept : "application/vnd.github.VERSION.sha",
            }
        }
    )).text()
    let treesha = (await (await fetch(
        "https://api.github.com/repos/pseudokev/starscape-wiki/git/commits/"+latestcommit,
        {
            method:"GET",
            headers:{
                Accept : "application/vnd.github+json",
                "X-GitHub-Api-Version" : "2022-11-28"
            }
        }
    )).json()).sha

    
    
    let dir = await directoryFromTreeSha(treesha);
    function index(path){
        let indicies = path.split("/");
        let v = dir
        for (const i of indicies){
            if (v[i]==undefined){return undefined}
            v=v[i].content
            
        }
        return v
    }
    console.log(dir);
    function parseDirectory(path){
        let d = {}
        const articlepath = index("src/content/pages"+path);
        const datapath = index("src/content/data"+path);
        const pagesdraftpath = index("src/content/drafts/pages"+path);
        const datadraftpath = index("src/content/drafts/data"+path);

        function parse(base,type){
            Object.entries(index(base+path)).forEach(([key, value]) => {
                let index = key.replace(".yml","");
                if (value.type == "directory"){
                    d[index] = parseDirectory(path+"/"+key)
                }
                else{
                    d[index] = d[key]==undefined? {} :d[key];
                    d[index][type] = value.content.sha
                }
            });
        }

        if (articlepath!=undefined){
            parse("src/content/pages","article");
        }
        if (datapath!= undefined){
            parse("src/content/data","data");
        }
        
        if (pagesdraftpath != undefined){
            parse("src/content/drafts/pages","pagedraft");
        }
        if (datadraftpath != undefined){
            parse("src/content/drafts/data","datadraft");
        }
        return d
    }
    let pages = parseDirectory("")
    console.log(pages);
    return pages;
}