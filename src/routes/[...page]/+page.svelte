<script>
    import { page } from '$app/state';
    import Page from '../../lib/Page.svelte';
    let props = $props();

</script>

<Page title={props.data.title}/>