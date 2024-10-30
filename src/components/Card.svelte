<script>
    import { goto } from '$app/navigation';
    export let title;
    export let content;
    export let slug;
    export let isPost;
    function handleClick(params) {
        console.log(params)
        const baseUrl = isPost ? '/post' : '/portfolio';
        goto(baseUrl + '/' + slug);
    }
</script>

<button class="card-container" on:click={(params) => handleClick(params)}>
    <div class="card-title">
        {title}
    </div>
    <div class="card-contents">
        {content}
    </div>
</button>

<style lang="scss">
    .card-container {
        all: unset;
        background-color: antiquewhite;
        margin: 20px;
        padding: 10px;
        .card-title {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        .card-contents {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }
    }
</style>