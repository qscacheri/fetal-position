<script lang="ts">
	import HeadPosition from '../components/HeadPosition.svelte';
	import { getRandomPositions, positions } from '../positions';

	let options = getRandomPositions(positions.length);
	let selectedOption = options.options[0].name;
	let showAnswers = false;
	let shouldJiggle = false;
	let showNext = false;
	function handleSubmit() {
		showAnswers = true;
		if (options.correctAnswer.name !== selectedOption) {
			shouldJiggle = true;
			setTimeout(() => {
				shouldJiggle = false;
				showNext = true;
			}, 1000);
		} else {
			showNext = true;
		}
	}

	function getNewPosition() {
		showAnswers = false;
		options = getRandomPositions(4);
		selectedOption = options.options[0].name;
	}
</script>

<div class="page w-screen h-screen bg-red-500">
	<div class="h-full flex flex-col justify-center">
		<header class="fixed top-5 left-5 flex h-8">
			<div class="flex flex-col justify-end h-full translate-y-1.5">
				<h1 class="text-white text-2xl  mr-2">Fetal Position</h1>
			</div>
			<img src="/fetal.png" alt="" class="h-8 my-auto" />
		</header>
		<HeadPosition position={options.correctAnswer} />
		<form on:submit|preventDefault={handleSubmit} class="grid place-items-center mt-4">
			<div class="flex bg-neutral-200 p-4 rounded-md shadow z-50">
				{#each options.options as option}
					<label
						class:wrong={showAnswers &&
							options.correctAnswer.name !== selectedOption &&
							option.name === selectedOption}
						class:correct={showAnswers && options.correctAnswer.name === option.name}
						class="my-auto mr-4 shadow-sm rounded p-2"
						for={option.name}
					>
						<input
							disabled={showAnswers}
							bind:group={selectedOption}
							type="radio"
							value={option.name}
							id={option.name}
							class="mr-1 my-auto"
							name="position"
						/>
						{option.name}
					</label>
				{/each}
			</div>
			{#if !showNext}
				<button
					class:jiggle={shouldJiggle}
					type="submit"
					class=" mx-auto z-50 bg-[#99dee5] text-white px-4 py-2 rounded m-4 hover:bg-[#74d1da] cursor-pointer"
					>Guess</button
				>
			{:else}
				<button
					type="button"
					on:click={() => {
						getNewPosition();
						showNext = false;
					}}
					class=" mx-auto z-50 bg-[#99dee5] text-white px-4 py-2 rounded m-4 hover:bg-[#74d1da] cursor-pointer"
					>New Position</button
				>
			{/if}
		</form>
	</div>
</div>

<style>
	@keyframes jiggle {
		0% {
			transform: translateX(0%);
		}

		25% {
			transform: translateX(-25%);
		}

		50% {
			transform: translateX(25%);
		}

		75% {
			transform: translateX(-25%);
		}

		100% {
			transform: translateX(0%);
		}
	}

	.page {
		background-size: cover;
		background-image: linear-gradient(to right top, #ffdef9, #e0c2ee, #b7aae5, #8196dc, #2684d0);
	}
	.wrong {
		@apply bg-red-400;
	}
	.correct {
		@apply bg-green-400;
	}
	.jiggle {
		animation: jiggle 0.3s;
	}
</style>
