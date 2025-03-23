<script>
  import Page from './lib/Page.svelte';
  import Ribbon from './lib/Ribbon.svelte';
  let page = new URLSearchParams(window.location.search).get("page")

  let props = $props();

</script>

<main>
  
  <Ribbon/>
  
  <div class="main">
    <Page {...props.page}/>
  </div>
  
  

  
    

  
</main>

<style>
  #p{
    background-color: rgb(217, 217, 217);
  }
  .main{
    background-color: #2c2c2c;
    border-color: rgb(100, 100, 100);
    border-width: 1px;
    border-style: solid;
    width: 70%;
    min-height: 100%;
    height: auto;
    position: absolute;
    left:15%;
    top:15%;
    padding: 10px;
  }
  
</style>
