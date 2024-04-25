import { useParams } from '@solidjs/router';

export default function Page() {
	const params = useParams();

	return (
		<main>
			<h1 class="text-2xl">Hello World!</h1>
			<div>{params.name}</div>
		</main>
	);
}
