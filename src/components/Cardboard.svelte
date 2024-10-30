<script>
    import Card from './Card.svelte';
    export let items;
    export let isPost = false;
</script>

<div class="default-board">
    {#each items as item}
        <Card {...item} isPost={isPost} />
    {/each}
</div>

<style lang='scss'>
    .default-board {
        background-color: rgb(52, 142, 97);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>