import * as u from 'unocss';
import { presetAio } from 'untlsn-unocss';

function handleUnits(unit: string) {
	const unitAsNumber = Number(unit);
	if (!isNaN(unitAsNumber))
		return `${unitAsNumber / 4}rem`;
	if (unit.includes('/'))
		return `calc(${unit} * 100%)`;
	if (unit.startsWith('--'))
		return `var(${unit})`;
	if (unit.startsWith('[') && unit.endsWith(']')) {
		const inside = unit.slice(1, -1);
		if (inside.startsWith('--'))
			return `var(${inside})`;
	}
	return unit;
}

export default u.defineConfig({
	theme: {
		colors: {
			bg: {
				1: '#1A1A1E',
				2: '#232323',
			},
			wave: {
				pink:   '#C61E75',
				yellow: '#FFD488',
			},
			text: {
				gray: '#909090',
			},
		},
	},
	shortcuts: [
		[/([hw])-full-(.+)/, ([,type, size]) => `${type}-[calc(100%-${handleUnits(size)})]`],
	],
	presets: [
		u.presetUno(),
		u.presetWind(),
		u.presetTypography(),
		u.presetWebFonts({
			fonts: {
				sans: 'Lato',
			},
		}),
		presetAio(),
	],
	transformers: [
		u.transformerDirectives(),
		u.transformerCompileClass(),
		u.transformerVariantGroup(),
	],
});
