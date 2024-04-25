import TheTitleSection from '~/components/TheTitleSection';
import TheInfoHistoryArticle from '~/components/TheInfoHistoryArticle';
import TheInfoStack from '~/components/TheInfoStack';

export default function Index() {
	return (
		<main class="font-sans">
			<TheTitleSection />
			<div id="b" class="px-5vw grid-(~ cols-fit-100) gap-12">
				<TheInfoHistoryArticle />
				<TheInfoStack />
				<div class="bg-bg-2">Hello World!</div>
			</div>
			<article id="c" class="pt-16 h-screen">c</article>
		</main>
	);
}
