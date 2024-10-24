<script>
	import "normalize.css";
	import Header from "$components/Header.svelte";
	import Gnb from "$components/Gnb.svelte";
	import Footer from "$components/Footer.svelte"

</script>
<Header />
<div class="main-container">
	<Gnb />
	<slot />
</div>
<Footer />

<style lang="scss">
	.main-container {
		display: flex;
		height: 500px;
		
	}
</style>