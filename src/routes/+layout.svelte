

<script>
    import Ribbon from "$lib/Ribbon.svelte";
    let {children } = $props();
</script>
<Ribbon/>
{@render children()}
<style>
  :root {
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242222;


  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}






@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
}

</style>

