import clsx from 'clsx';

type NavPointProps = {
	first?:   boolean
	to:       string,
	children: JSXElement
}

export default function NavPoint(props: NavPointProps) {
	return (
		<li
			class={clsx(
				'duration-500 transition-color',
				'hover:text-wave-yellow',
			)}
		>
			<a
				href={`/#${props.to}`}
				onClick={(ev) => {
					ev.preventDefault();
					if (props.first) scrollTo({
						behavior: 'smooth',
						top:      0,
					});
					else document.getElementById(props.to)?.scrollIntoView({
						behavior: 'smooth',
					});
				}}
			>
				{props.children}
			</a>
		</li>
	);
}
