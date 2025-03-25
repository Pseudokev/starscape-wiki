<script>

    import Divider from "./Divider.svelte";
    import svlogo from "../assets/placeholder.png";
    import Article from "./Article.svelte";

    let props = $props();
    
</script>


    <div class="main">
        <input type="search" class="search" name = "search" placeholder = "Search">

		{@render props.children()}
	  
	</div>
	
    


<style>
    
	.main{
	  background-color: #2c2c2c;
	  border-color: rgb(100, 100, 100);
	  border-width: 1px;
	  border-style: solid;
      width: 64%;
	  min-height: 100%;
	  height: auto;
	  position: absolute;
	  left:15%;
	  top:15%;
	  padding-right: 2%;
      padding-left: 2%;
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
        height: 100%;
        padding:30px;
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