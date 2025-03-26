<script>
    import Article from '$lib/Article.svelte';
    import Page from '../../lib/Page.svelte';
    let props = $props();
</script>

<Page pages={props.data.pages}><Article content = {props.data.content}></Article></Page>