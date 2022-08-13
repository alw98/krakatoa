import { ColorTuple, hexToHsluv, hsluvToHex, hsluvToRgb, rgbToHsluv } from 'hsluv';

export const createPalleteFromHex = (hex: string, size: number): string[] => {
	const hsluv = hexToHsluv(hex);
	const pallete = createPalleteFromHsluv(hsluv, size);
	const palleteHex = pallete.map((color) => hsluvToHex(color));
	return palleteHex;
};

export const createPalleteFromRgb = (rgb: ColorTuple, size: number): ColorTuple[] => {
	const hsluv = rgbToHsluv(rgb);
	const pallete = createPalleteFromHsluv(hsluv, size);
	const palleteRgb = pallete.map((color) => hsluvToRgb(color));
	return palleteRgb;
};

const createPalleteFromHsluv = (hsluv: ColorTuple, size: number): ColorTuple[] => {
	const inc = 100 / size;
	const base = inc / 2;
	const result = [];
	for (let i = 0; i < size; ++i) {
		const lightness = base + inc * i;
		const color: ColorTuple = [hsluv[0], hsluv[1], lightness];
		result.push(color);
	}
	return result;
};