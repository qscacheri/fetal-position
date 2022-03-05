export type Position = { name: string; angle: number };
export const positions: Position[] = [
	{ name: 'OP', angle: 0 },
	{ name: 'ROP', angle: 45 },
	{ name: 'ROT', angle: 90 },
	{ name: 'ROA', angle: 135 },
	{ name: 'OA', angle: 180 },
	{ name: 'LOA', angle: 225 },
	{ name: 'LOT', angle: 270 },
	{ name: 'LOP', angle: 315 }
];

export const getRandomPositions = (count = 1, previous: Position) => {
	const p = [...positions];
	const r: Position[] = [];
	for (let i = 0; i < count; i++) {
		const index = Math.floor(Math.random() * p.length);
		r.push(p.splice(index, 1)[0]);
	}
	let correctAnswer = r[Math.floor(Math.random() * count)];
	// eslint-disable-next-line no-constant-condition
	while (true) {
		if (correctAnswer.name !== previous.name) {
			break;
		}
		correctAnswer = r[Math.floor(Math.random() * count)];
	}
	return { options: r, correctAnswer };
};
