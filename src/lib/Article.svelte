
<script>
    import { assets } from "$app/paths";
    import Divider from "./Divider.svelte";
    import YAML from "yaml"

    let props=$props();
    

    let content = $derived.by(()=>{
        if (props.assets!=null){
            for (let i=0; i<props.assets.length; i++) {
                return YAML.parse(props.content.replaceAll(new RegExp("src\\s*=\\s*\\\""+props.assets[i].name.replace(".","\\.")+"\\\"","g"), "src=\""+props.assets[i].url+"\""));
                
            }
        }
        return YAML.parse(props.content);
    });
    
    
</script>

<h2 class="title">{content.title}</h2>
    
    
    <Divider/>
    
    {#if content.overview}
        <div class="overview_box">
            <div class = "overview">
                <h2 style="text-align:center; font-size:medium"><strong>{content.overview.title}</strong> </h2>
                <img src={""+content.overview.image} alt="alt text" class="overview-img">
                <br>
                {#each content.overview.sections as section}
                    <p class="overview-text" style="text-align:center; margin-top:10px; margin-bottom:0px;"><strong>{section.name}</strong></p>
                    <p class="overview-text">
                    {#each Object.entries(section.info) as [k,v]}
                        
                        {k}: <span style="float:right;">
                            {@html v}
                        </span><br>
                        
                    {/each}
                    </p>
                {/each}
                
                    
                    
                
            </div>
        </div>
    {/if}
    {#if content.contents}
        {#each content.contents as section}
            {@html section.content}
        {/each}
    {/if}
    
    

    <style>
        a:link{
            color: #e7a900;
            text-decoration:none;
        }
        a:visited{
            color:#e77000;
            text-decoration: none;
        }
        a:hover{
            color: #e7a900;
        }
        
        .search{
            position: absolute;
            right: 0px;
            top:-35px;
            height: 25px;
            
        }
        .page{
            position: relative;
            width: 90%;
            left:5%;
            top:5%;
            line-height: 1.5;
            
        }
        .title{
            font-size: xx-large;
            text-wrap: balance;
            margin-top: 50px;
        }
        .paragraph{
            height: 500px auto;
            direction: ltr;
            
            text-wrap: wrap;
            text-indent: 50px;
            
        }
        .overview_box{
            background-color: #1f1f1f00;
    
            width: 350px;
            height:  auto;
            min-height: 600px;
            float:right;
    
            top: 500px;
            right:100px;
        }
        .overview{
            height: auto;
            width: 90%;
            min-height: 590px;
            top:5px;
            left:5%;
            background-color: #3c3c3c;
            position: relative;
            border-color: rgb(100, 100, 100);
            border-style: solid;
            border-width: 1px;
        }
        .overview-img{
            width: 70%;
            aspect-ratio: 1;
            position: relative;
            background-color: #2f2f2f;
            border-style: solid;
            border-width: 1px;
            border-color: rgb(100, 100, 100);
            left:15%;
        }
        .overview-text{
            font-size: small;
            margin-left: 30px;
            margin-right: 30px;
            margin-top: 0px;
        }
    </style>