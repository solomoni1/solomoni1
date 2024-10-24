<script>
	import Cardboard from "$components/Cardboard.svelte";

    export let items = [
        {title: 'title1', contents: 'contents2'}, 
        {title: 'title2', contents: 'contents2'},
        {title: 'title3', contents: 'contents3'},
        {title: 'title4', contents: 'contents4'},
        {title: 'title5', contents: 'contents5'},
];
</script>

<div class="main-contents">
    <div class="contents-title">
        Hi
    </div>
    <div class="contents">
        <Cardboard items={items}/>
    </div>
</div>

<style lang="scss">
    .main-contents {
        background-color: lightgrey;
        flex: 5;
        .contents-title {
            display: flex;
            align-content: center;
            justify-content: center;
            font-size: 40px;
            background-color: aliceblue;

        }
    }
</style>