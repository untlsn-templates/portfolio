import SvgHex from '~/components/SvgHex';

export default function TheTitleSection() {
	return (
		<section id="home" class="pt-16 xl:pt-32 flex items-center px-5vw relative isolate max-xl:flex-col-reverse xl:gap-25">
			<div class="max-xl:text-center">
				<p class="ml-1 xl:text-5">Hello there!</p>
				<h1 class="text-8 xl:text-12 font-semibold">
					I'm Filip, a frontend developer with great passion to new technologies and approaches
				</h1>
			</div>
			<div class="relative hue-rotate-animation">
				<SvgHex class="size-100 xl:size-150 absolute left-0 top-0" />
				<SvgHex class="size-100 xl:size-150 blur-125" />
			</div>
		</section>
	);
}
