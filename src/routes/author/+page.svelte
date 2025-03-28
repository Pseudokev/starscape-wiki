<script>
    import Page from "$lib/Page.svelte";
    import {getAllPages} from "$lib/repository"
    import { onMount } from "svelte";

    let editorEnabled = $state(false);
    let articledirectory = $state(null);

    function bold(){
        document.execCommand("bold",false,null);
    }
    function italic(){
        document.execCommand("italic",false,null);
    }
    function underline(){
        document.execCommand("underline",false,null);
    }
    function strikethrough(){
        document.execCommand("strikethrough",false,null);
    }
    function g(){
        getAllPages()
    }

    onMount(function(){
        getAllPages()
    })

</script>



{#if (editorEnabled)}
    <Page>
        <input type="text" class="textinput" style="font-size:xx-large; margin-top:50px", placeholder="Title">
        <hr>
        
        <div style="background-color:rgba(0,0,0,0.5); height:200px; width:200px; float:right" contenteditable="false"></div>
        


        <div contenteditable="true" style="height:100px; width:100%" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium dicta ducimus dolorem consequuntur quisquam quibusdam blanditiis iste nihil nulla, modi a est qui molestias numquam ex. Inventore, saepe distinctio.
        </div>
        <div contenteditable="true" style="height:100px; width:100%" >
            <div style="background-color:rgba(0,0,0,0.5); height:200px; width:200px; float:right; margin:10px" contenteditable="false"></div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, aspernatur! Recusandae unde explicabo quas architecto, veritatis maxime rem a excepturi magni deleniti ullam reiciendis distinctio placeat quo. Doloribus, quis expedita.
        </div>
    </Page>
    <div class = "editorcontrols">
        <button type="button" class = "editorbutton" onclick={bold} ><b>B</b></button>
        <button type="button" class = "editorbutton" onclick={italic}><i>I</i></button>
        <button type="button" class = "editorbutton" onclick={underline}><u>U</u></button>
        <button type="button" class = "editorbutton" onclick={strikethrough}><s>A</s></button>
    </div>
{:else}

{/if}

<style>
    .editorcontrols{
        background-color: #3e3e3e;
        border-color: rgb(137, 137, 137);
        border-width: 1px;
        border-style: solid;
        width: 60%;
        height: 30px;
        position:fixed;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.59);
        bottom:5%;
        left:20%;
        padding-left: 10px;
        box-sizing: border-box;
        
    }
    .editorbutton{
        
    }
    .textinput{
        background-color: rgba(240, 248, 255, 0);
        border-style:groove;
    }
    .title{
            font-size: xx-large;
            text-wrap: balance;
            margin-top: 50px;
        }
</style>