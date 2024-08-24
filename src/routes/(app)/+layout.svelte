<script lang="ts">
	import Footer from './_ui/footer.svelte';
	import Header from './_ui/header.svelte';
	import '$lib/styles/global.css';
</script>

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
</style>
