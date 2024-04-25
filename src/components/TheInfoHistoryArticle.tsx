import dayjs from 'dayjs';
import clsx from 'clsx';

function InfoHistoryLine(props: { children: JSXElement, date: string, class?: string }) {
	return (
		<li
			class={clsx('before:(c_ i-ph-circle-fill size-3.5 mr-4 text-text-gray) flex', props.class)}
		>
			<span>{props.children}</span>
			<span class="ml-auto w-16 text-text-gray">{props.date}</span>
		</li>
	);
}

export default function TheInfoHistoryArticle() {
	const codingStart = 2019;
	const workStart = dayjs('2021-08');
	const today = dayjs();


	return (
		<article class="bg-bg-2 p-8 rounded-lg">
			<h2>
				<span class="text-2xl font-semibold mr-8">Experience</span>
				<span>{today.diff(workStart, 'years')} up to {today.year() - codingStart} Years</span>
			</h2>
			<ul class="space-y-8 mt-8 relative z-0 before:(c_ block w-2px bg-white/20 absolute h-full-4 left-1.5 top-2 -z-1)">
				<InfoHistoryLine
					class="before:text-wave-pink"
					date={today.format('YYYY-MM')}
				>
					Still working at fmcode
				</InfoHistoryLine>
				<InfoHistoryLine date={workStart.format('YYYY-MM')}>
					Start working and fmcode
				</InfoHistoryLine>
				<InfoHistoryLine date="2021-05">
					Graduated from an IT technical school
				</InfoHistoryLine>
				<InfoHistoryLine date={`~${codingStart}`}>
					Started coding as a self-taught
				</InfoHistoryLine>
			</ul>
		</article>
	);
}
