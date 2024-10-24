<script>
    export let title;
    export let contents;
</script>

<div class="card-container">
    <div class="card-image">
        <img src="dog.jpg" alt="card"/>
    </div>
    <div class="card-title">
        {title}
    </div>
    <div class="card-contents">
        {contents}
    </div>
</div>

<style lang="scss">
    img {
        width: 50px;
        
    }
    .card-container {
        background-color: antiquewhite;
        margin: 10px;
        min-width: 200px;
    }
</style>