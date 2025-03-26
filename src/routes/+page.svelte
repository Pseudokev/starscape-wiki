

<script>
        import Page from "$lib/Page.svelte";

    let props = $props();
</script>

<Page pages={(props.data.pages)}>
    <p style="text-align:center; width:100%;">Under Construction</p>
    {#each props.data.pages as info}
        <p>{info.page }, {info.title}</p>
    {/each}
</Page>



