import { createPalleteFromHex, createPalleteFromRgb } from 'index';

describe('createPalleteFromHex', () => {
	test('generates the correct palette for white', () => {
		const pallete = createPalleteFromHex('#ffffff', 10);
		expect(pallete).toEqual(whitePalleteTenColorsHex);
	});
});

describe('createPalleteFromRgb', () => {
	test('generates the correct palette for white', () => {
		const pallete = createPalleteFromRgb([1, 1, 1], 10);
		expect(pallete).toEqual(whitePalleteTenColorsRgb);
	});
});

const whitePalleteTenColorsHex = [
	'#111111',
	'#262626',
	'#3b3b3b',
	'#525252',
	'#6a6a6a',
	'#848484',
	'#9e9e9e',
	'#b9b9b9',
	'#d4d4d4',
	'#f1f1f1',
];

const whitePalleteTenColorsRgb = [
	[0.06603027845851314, 0.06603027845852055, 0.06603027845852003],
	[0.14771322846653778, 0.14771322846655024, 0.14771322846654933],
	[0.23251452779095955, 0.23251452779097725, 0.23251452779097603],
	[0.32269626766792997, 0.3226962676679532, 0.32269626766795173],
	[0.4174352201125552, 0.4174352201125841, 0.41743522011258216],
	[0.5161535874894347, 0.5161535874894696, 0.5161535874894672],
	[0.6184203663756496, 0.6184203663756908, 0.618420366375688],
	[0.7239000173284421, 0.7239000173284897, 0.7239000173284865],
	[0.832322900831913, 0.8323229008319675, 0.8323229008319637],
	[0.9434669559997811, 0.9434669559998424, 0.9434669559998384],
];
