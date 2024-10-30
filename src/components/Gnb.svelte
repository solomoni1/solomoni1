<script>
    let items = ['test', 'list'];
</script>

<div class='gnb'>
    <ul>
        {#each items as item}
            <li>
                {item}
            </li>
        {/each}
    </ul>
    <!-- <List items={items} /> -->
</div>

<style lang="scss">
    .gnb {
        width: 200px;
        ul{
            padding: 0;
            margin: 0;
            background-color: aqua;
        }
        li {
            display: block;
            font-size: 25px;
            padding: 1px 25px;
            border: 1px solid;
            text-align: center;

        }
    }
</style>
