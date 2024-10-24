<script>
    import Card from './Card.svelte';
    export let items;
</script>

<div class="default-board">
    {#each items as item}
        <Card {...item} />
    {/each}
</div>

<style lang='scss'>
    .default-board {
        background-color: rgb(52, 142, 97);
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

    }
</style>