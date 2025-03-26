<script>
    import Article from "$lib/Article.svelte";
    import Page from "$lib/Page.svelte";

    let contentfile = $state();
    let datafile = $state();
    let assetfiles = $state();
    let pageContent = $state({
        content:null,
        data:null,
        assets:null
    })




    function previewContentFile() {
        const reader = new FileReader();
        reader.addEventListener(
            "load",
            () => {
            // this will then display a text file
            pageContent.content = reader.result;
            },
            false,
        );
        if (contentfile[0]) {
            reader.readAsText(contentfile[0]);
        }
    }
    function previewDataFile() {
        const reader = new FileReader();
        reader.addEventListener(
            "load",
            () => {
            // this will then display a text file
            pageContent.data = reader.result;
            },
            false,
        );
        if (datafile[0]) {
            reader.readAsText(datafile[0]);
        }
    }
    function previewAssetFiles(){
        pageContent.assets = [];
        for (let i = 0; i<assetfiles.length; i++){
            const reader = new FileReader();
            reader.addEventListener("load",function(event){
                pageContent.assets.push({name:assetfiles[i].name, url:event.target.result})
            })
            reader.readAsDataURL(assetfiles[i])
        }

    }
</script>


<div class="previewcontrols">
    Article: <input type="file" onchange={previewContentFile} bind:files={contentfile}><br>
    Data: <input type="file" onchange={previewDataFile} bind:files={datafile}><br>
    Assets: <input type="file" onchange={previewAssetFiles} bind:files={assetfiles} multiple="true">

</div>

<Page>{#if (!pageContent.content)} preview {:else}<Article {...pageContent}></Article> {/if}   </Page>