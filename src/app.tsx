// @refresh reload
import 'untcss-reset';
import 'uno.css';
import TheHeader from '~/components/TheHeader';


export default function App() {
	return (
		<>
			<TheHeader />
			<div id="home" class="pt-16 h-screen">home</div>
			<div id="b" class="pt-16 h-screen">b</div>
			<div id="c" class="pt-16 h-screen">c</div>
		</>
	);
}
