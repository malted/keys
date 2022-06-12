<slot />

<style>
	@font-face {
		font-family: 'JetBrains Mono';
		src: url('/fonts/JetBrainsMono-Regular.woff2') format('woff2');
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: 'JetBrains Mono';
		src: url('/fonts/JetBrainsMono-Thin.woff2') format('woff2');
		font-weight: 100;
		font-style: normal;
	}

	:root {
		background-color: #292e29;
	}
	:global(*) {
		font-family: 'JetBrains Mono', monospace;
		color: white;
	}
</style>
