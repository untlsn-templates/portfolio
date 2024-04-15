import * as u from 'unocss';
import { presetAio } from 'untlsn-unocss';


export default u.defineConfig({
	theme: {
		colors: {
			bg: {
				1: '#000000',
				2: '#121212',
			},
			wave: {
				pink:   '#C61E75',
				yellow: '#FFD488',
			},
		},
	},
	presets: [
		u.presetUno(),
		u.presetWind(),
		u.presetIcons(),
		u.presetTypography(),
		u.presetWebFonts(),
		presetAio(),
	],
	transformers: [
		u.transformerDirectives(),
		u.transformerCompileClass(),
		u.transformerVariantGroup(),
	],
});
