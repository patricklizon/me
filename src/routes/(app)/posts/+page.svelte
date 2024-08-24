<script lang="ts">
	import * as config from '$lib/config';
	import type { PageData } from './$types';
	import { resolveRoute } from '$app/paths';

	export let data: PageData;
</script>

<svelte:head>{config.title}</svelte:head>

<main>
	{#each data.posts as p}
		<li>
			<a href={resolveRoute('/posts/[slug]', { slug: p.slug })}>
				{p.title}
				{p.date}
			</a>
		</li>
	{/each}
</main>
