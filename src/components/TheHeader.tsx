import useScrollTopDetector from '~/composables/useScrollTopDetector';
import clsx from 'clsx';
import NavPoint from '~/components/NavPoint';

export default function TheHeader() {
	const onTop = useScrollTopDetector();


	return (
		<>
			<div class="h-16" />
			<header
				class={clsx(
					'fixed top-0 left-0 bg-bg-2 w-full h-16 px-12 flex gap-4 items-center justify-between transition-colors duration-500',
					onTop() && 'bg-opacity-0',
				)}
			>
				<p class={clsx(
					'origin-top-left duration-500 text-xl',
					onTop() && 'scale-200',
				)}
				>
					<img
						srcset="/logo.webp, /logo.png"
						src="/logo.webp"
						alt="logo"
						class="size-12 inline-block"
					/>
					<a
						href="/#home"
						class="leading-12"
					>
						Untlsn Portfolio
					</a>
				</p>
				<ul class={clsx(
					'flex gap-2 origin-top-right duration-500 text-sm leading-12 transition-transform',
					onTop() && 'scale-200',
				)}
				>
					<NavPoint to="home" first>Home</NavPoint>
					<NavPoint to="b">B</NavPoint>
					<NavPoint to="c">C</NavPoint>
				</ul>
			</header>
		</>
	);
}