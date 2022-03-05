<script lang="ts">
	import type { Position } from '../positions';

	export let position: Position;
	let randomSize = getRandomSize();
	let randomOffset = getRandomOffset();
	function getRandomOffset() {
		return {
			x: Math.random() * 25 + '%',
			y: Math.random() * 25 + '%'
		};
	}

	function getRandomSize() {
		return 25 + Math.random() * 10;
	}
	$: {
		if (position) {
			randomOffset = getRandomOffset();
			randomSize = getRandomSize();
		}
	}
	$: console.log(randomOffset, randomSize);
</script>

<div class="container w-full sm:w-1/3 row-start-2 row-span-4 mx-auto aspect-square rounded p-4">
	<img
		class="head"
		src="/head.svg"
		alt=""
		style="--angle: {position.angle}deg; --x-offset: {randomOffset.x}; --y-offset: {randomOffset.y}; --head-size: {randomSize}%"
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
		height: var(--head-size);
		top: 50%;
		left: 50%;
		transition: all 0.2s linear;
		transform: translate(-50%, calc(-50% - 15px)) rotate(var(--angle))
			translate(var(--x-offset), var(--y-offset));
	}
</style>
