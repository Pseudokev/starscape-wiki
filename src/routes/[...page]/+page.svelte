<script>
    import { page } from '$app/state';
    import Article from '$lib/Article.svelte';
    import Page from '../../lib/Page.svelte';
    let props = $props();
</script>

<Article content = {props.data.content}></Article>