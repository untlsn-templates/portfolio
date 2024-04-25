// @refresh reload
import 'untcss-reset';
import 'uno.css';
import TheHeader from '~/components/TheHeader';
import '~/assets/style/hue-rotate-animation.css';
import TheTitleSection from '~/components/TheTitleSection';
import TheInfoHistoryArticle from '~/components/TheInfoHistoryArticle';

export default function App() {
	return (
		<>
			<TheHeader />
			<main class="font-sans">
				<TheTitleSection />
				<div id="b" class="px-5vw grid-(~ cols-fit-100) gap-12">
					<TheInfoHistoryArticle />
					<div class="bg-bg-2">Hello World!</div>
					<div class="bg-bg-2">Hello World!</div>
				</div>
				<article id="c" class="pt-16 h-screen">c</article>
			</main>
		</>
	);
}
