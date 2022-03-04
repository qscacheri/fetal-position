<script lang="ts">
	import type { Position } from '../positions';

	export let position: Position;

	$: randomOffset = {
		x: Math.random() * 25 + '%',
		y: Math.random() * 25 + '%'
	};
</script>

<div class="container w-full sm:w-1/3 mx-auto aspect-square shadow-md rounded bg-neutral-200 p-4">
	<img
		class="head"
		src="/head.svg"
		alt=""
		style="--angle: {position.angle}deg; --x-offset: {randomOffset.x}; --y-offset: {randomOffset.y}"
	/>
	<img class="pelvis" src="/pelvis.svg" alt="" />
</div>

<style>
	.container {
		position: relative;
	}
	img {
		display: block;
		max-width: 100%;
		position: absolute;
	}
	.pelvis {
		height: 65%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.head {
		height: 40%;
		top: 50%;
		left: 50%;
		transition: all 0.2s linear;
		transform: translate(-50%, calc(-50% - 15px)) rotate(var(--angle))
			translate(var(--x-offset), var(--y-offset));
	}
</style>
