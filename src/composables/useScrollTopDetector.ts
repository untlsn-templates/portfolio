import { createSignal, onMount } from 'solid-js';

export default function useScrollTopDetector() {
	const [onTop, setOnTop] = createSignal(!scrollY);

	onMount(() => {
		document.addEventListener('scroll', () => {
			setOnTop(!scrollY);
		});
	});

	return onTop;
}
