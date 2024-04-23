import '~/assets/style/hue-rotate-animation.css';
import clsx from 'clsx';

export default function SvgHex(props: { class?: string }) {


	return (
		<svg
			class={clsx(props.class, 'hue-rotate-animation')}
			width="768"
			height="841"
			viewBox="0 0 768 841"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"

		>
			<g filter="url(#filter0_di_501_14)">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M395.308 127.082C388.191 122.973 379.424 122.973 372.308 127.081L135.5 263.802C128.384 267.911 124 275.504 124 283.721V557.163C124 565.38 128.384 572.973 135.5 577.081L372.308 713.802C379.424 717.911 388.191 717.911 395.308 713.802L632.115 577.082C639.231 572.973 643.615 565.38 643.615 557.163V283.721C643.615 275.504 639.231 267.911 632.115 263.802L395.308 127.082ZM395.308 152.082C388.191 147.973 379.424 147.973 372.308 152.081L157.151 276.302C150.034 280.411 145.651 288.004 145.651 296.221V544.663C145.651 552.88 150.034 560.473 157.151 564.581L372.308 688.802C379.424 692.911 388.191 692.911 395.308 688.802L610.465 564.582C617.581 560.473 621.965 552.88 621.965 544.663V296.221C621.965 288.004 617.581 280.411 610.465 276.302L395.308 152.082Z" fill="#D604DA" />
				<path d="M252.808 291.442C252.808 273.217 267.582 258.442 285.808 258.442H290.808C297.435 258.442 302.808 263.814 302.808 270.442V507.281C302.808 517.786 309.64 527.07 319.669 530.195L424.106 562.731C426.154 563.369 425.897 566.346 423.771 566.624L302.808 582.442C275.193 582.442 252.808 560.056 252.808 532.442V291.442Z" fill="#D604DA" />
				<path d="M514.808 297.038C514.808 279.779 501.509 265.435 484.299 264.132L474.88 263.419C467.916 262.892 461.974 268.4 461.974 275.385V482.077C461.974 494.257 452.85 504.506 440.751 505.916L351.077 516.362C348.936 516.612 348.65 519.606 350.705 520.256L461.974 555.442C491.153 555.442 514.808 531.788 514.808 502.609V297.038Z" fill="#D604DA" />
			</g>
			<defs>
				<filter id="filter0_di_501_14" x="0.400002" y="0.400002" width="766.815" height="840.084" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
					<feOffset />
					<feGaussianBlur stdDeviation="61.8" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix type="matrix" values="0 0 0 0 0.839216 0 0 0 0 0.0156863 0 0 0 0 0.854902 0 0 0 0.25 0" />
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_501_14" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_501_14" result="shape" />
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
					<feOffset dx="9" dy="12" />
					<feGaussianBlur stdDeviation="8.7" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend mode="normal" in2="shape" result="effect2_innerShadow_501_14" />
				</filter>
			</defs>
		</svg>
	);
}
