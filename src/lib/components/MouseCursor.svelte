<script>
	import { writable } from 'svelte/store';

	let coords1 = writable({ x: 0, y: 0 });
	let coords2 = writable({ x: 0, y: 0 });
	let size = writable(280);
</script>

<svelte:window
	on:mousemove={(e) => {
		coords1.set({ x: e.clientX, y: e.clientY })
		coords2.set({ x: e.clientX, y: e.clientY })
	}}
/>

<svg class="w-full h-full">
	<defs>
		<radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
			<stop offset="0%" style="stop-color:#AD1FAF;stop-opacity:.1" />
			<stop offset="100%" style="stop-color:#AD1FAF;stop-opacity:0" />
		</radialGradient>
	</defs>
	<circle cx={$coords1.x} cy={$coords1.y} r={$size} fill="url(#grad1)"/>
</svg>

<style>
	.w-full {
		width: 100vw;
	}
	
	.h-full {
		height: 100vh;
	}
	
	svg {
		position: absolute;
		top: 0;
		left: 0;
		pointer-events: none;
	}
</style>