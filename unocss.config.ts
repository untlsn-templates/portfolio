import * as u from 'unocss';
import { presetAio } from 'untlsn-unocss';


export default u.defineConfig({
	theme: {
		colors: {
			bg: {
				1: '#1A1A1E',
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
