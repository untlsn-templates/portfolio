import '~/assets/style/double-rotation.scss';
import times from '~/utils/times';
import { For } from 'solid-js';
import clsx from 'clsx';

function TheInfoStackCard(props: { index: number } & ImageLink) {
	const style = () => ({
		'--animation-delay': `-${props.index * 36 / images.length}s`,
	});

	return (
		<li
			class="h-1/2 absolute left-[calc(50%-40px)] double-rotation"
			style={style()}
		>
			<TheInfoStackCardCore {...props} class="double-rotation-core" />
		</li>
	);
}

function TheInfoStackCardCore(props: ImageLink & { class?: string }) {
	console.log(props);
	return (
		<a href={props.link}>
			<img
				{...props}
				class={clsx(
					'bg-bg-1/30 size-20 rounded-full flex justify-center items-center hover:brightness-60',
					props.class,
				)}
			/>
		</a>
	);
}

type ImageLink = { src: string, alt: string, link: string }

function createImageLink(alt: string): ImageLink {
	return { src: `/icons/${alt}.png`, alt, link: `/stack/${alt}` };
}

const images = [
	createImageLink('solidjs'),
	createImageLink('unocss'),
	createImageLink('drizzle'),
];

export default function TheInfoStack() {


	return (
		<article class="bg-bg-2 grid double-rotation-group">
			<ul class="size-full relative">
				<For
					each={images}
					children={(image, i) => (
						<TheInfoStackCard {...image} index={i()} />
					)}
				/>
				<ul class="absolute left-[calc(50%-40px)] top-[calc(50%-40px)]">
					<TheInfoStackCardCore {.../*@once*/createImageLink('typescript')} />
				</ul>
			</ul>
		</article>
	);
}
