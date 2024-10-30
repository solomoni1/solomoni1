<script>
    import MarkdownViewer from '$components/MarkdownViewer.svelte';
    import test_markdown from '$lib/data/SuperFrame.md?raw';
    export let data;
    data.portfolios.forEach(portfolio => {
        import `${portfolio}` from `$lib/data/${portfolio.file_name}`;
    });
</script>
<div class="contents-title">
    {data.portfolio.title}
</div>
<MarkdownViewer content={test_markdown} />

<style lang="scss">
    .contents-title {
            display: flex;
            align-content: center;
            justify-content: center;
            font-size: 40px;
            background-color: aliceblue;

        }
</style>