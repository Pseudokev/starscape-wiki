<script>
    import Page from "$lib/Page.svelte";

</script>


<div class = "editorcontrols"></div>

<Page>
    <input type="text" class="textinput" style="font-size:xx-large; margin-top:50px", placeholder="Title">
    <hr>
    <div style="background-color:rgba(0,0,0,0.5); height:200px; width:200px; float:right"></div>
    
    <div contenteditable="true" style="height:100px; width:100%" ></div>
    <div contenteditable="true" style="height:100px; width:100%" ></div>
</Page>

<style>
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