// Originally by: Rogier Schouten <https://github.com/rogierschouten>
// Adapted by: Madhav Varshney <https://github.com/madhavarshney>
declare namespace kleur {
	interface Color {
		(x: string | number): string;
		(): Kleur;
	}

	interface Kleur {
		// Colors
		black: Color;
		red: Color;
		green: Color;
		yellow: Color;
		blue: Color;
		magenta: Color;
		cyan: Color;
		white: Color;
		gray: Color;
		grey: Color;

		// Backgrounds
		bgBlack: Color;
		bgRed: Color;
		bgGreen: Color;
		bgYellow: Color;
		bgBlue: Color;
		bgMagenta: Color;
		bgCyan: Color;
		bgWhite: Color;

		// Modifiers
		reset: Color;
		bold: Color;
		dim: Color;
		italic: Color;
		underline: Color;
		inverse: Color;
		hidden: Color;
		strikethrough: Color;
	}
}

declare let kleur: kleur.Kleur & { enabled: boolean };
export = kleur;
