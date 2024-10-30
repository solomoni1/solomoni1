<script>
    import { page } from '$app/stores';
</script>

<div class="main-contents">
    {$page.status} {$page.error.message}
</div>

<style lang="scss">
    .main-contents {
        background-color: lightgrey;
        flex: 5;
    }
</style>