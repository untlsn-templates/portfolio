// @refresh reload
import 'untcss-reset';
import 'uno.css';
import TheHeader from '~/components/TheHeader';
import '~/assets/style/hue-rotate-animation.css';
import { FileRoutes } from '@solidjs/start/router';
import { Router } from '@solidjs/router';

export default function App() {
	return (
		<Router root={(props) => (
			<>
				<TheHeader />
				{props.children}
			</>
		)}
		>
			<FileRoutes />
		</Router>
	);
}
