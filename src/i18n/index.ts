import { defaultLocale, type Locale } from "./config";
import en from "./en";
import it from "./it";
import type { Dictionary } from "./schema";

const dictionaries: Record<Locale, Dictionary> = {
	it,
	en,
};

export function getDictionary(locale: Locale): Dictionary {
	return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export type { Dictionary, LocalizedPost, LocalizedProject } from "./schema";
