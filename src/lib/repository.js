

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
    let tree = await fetch(
        "https://api.github.com/repos/pseudokev/starscape-wiki/git/commits/"+latestcommit,
        {
            method:"GET",
            headers:{
                Accept : "application/vnd.github+json",
                "X-GitHub-Api-Version" : "2022-11-28"
            }
        }
    )
    tree.json().then(function(json){console.log(json)})
}