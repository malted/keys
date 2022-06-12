<script lang="ts">
	import type { IKeyEvent } from '../utils/KeyUtils';
	import { setEvent } from '../utils/KeyUtils';

	let event: IKeyEvent;
	let filter = '';

	function keyDown(e: KeyboardEvent) {
		console.log(e);
		event = setEvent(e);
	}
</script>

<svelte:window on:keydown={keyDown} />

<div id="container">
	{#if event}
		<input id="filter" type="text" placeholder="Filter results" bind:value={filter} />
		<section id="results">
			{#each Object.entries(event) as [key, value]}
				{#if key.includes(filter)}
					<p>
						<span class="key">{key}</span>
						:
						{#if key === 'key' && value === ' '}
							<span class="value">&nbsp;</span>
						{:else}
							<span class="value {value}">
								{value}
							</span>
						{/if}
					</p>
				{/if}
			{/each}
		</section>
	{:else}
		<p>Press a key to see the <span class="value">KeyboardEvent</span> output!</p>
		<p>P.S. each <span class="value">keydown</span> event is logged to the console ;)</p>
	{/if}
</div>

<style>
	#container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#results {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		margin: 1rem;
	}
	#results > * {
		margin: 0;
	}

	#filter {
		padding: 0.5rem;
		border: 1px solid white;
		border-radius: 0.3125rem;
		background-color: rgba(255, 255, 255, 0.1);
		color: white;
		font-size: 1rem;
		font-weight: 100;
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.key {
		font-weight: 100;
	}

	.value {
		color: white;
		border: 1px solid white;
		padding: 0.3rem;
		border-radius: 0.3125rem;
		background-color: rgb(70, 70, 70);
	}
</style>
