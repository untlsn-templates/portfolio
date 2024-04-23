// @refresh reload
import 'untcss-reset';
import 'uno.css';
import TheHeader from '~/components/TheHeader';
import SvgHex from '~/components/SvgHex';

export default function App() {
	return (
		<>
			<TheHeader />
			<main class="font-sans">
				<section id="home" class="pt-32 flex items-center gap-25 px-45 relative isolate">
					<div>
						<p class="ml-1 text-5">Hello there!</p>
						<h1 class="text-12 font-semibold">
							I'm Filip, a frontend developer with great passion to new technologies and approaches
						</h1>
					</div>
					<div class="relative">
						<SvgHex class="size-150 absolute left-0 top-0" />
						<SvgHex class="size-150 blur-125" />
					</div>
				</section>
				<article id="b" class="pt-16 h-screen">b</article>
				<article id="c" class="pt-16 h-screen">c</article>
			</main>
		</>
	);
}
