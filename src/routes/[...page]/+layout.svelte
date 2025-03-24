
<div class="layout">
	<main>
		
	</main>
</div>

<script>
	import Page from '../../lib/Page.svelte';
	import Ribbon from '../../lib/Ribbon.svelte';
	let { data, children } = $props();
  
  </script>
  
  <main>
	
	<Ribbon/>
	
	<div class="main">
		{@render children()}
	  
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