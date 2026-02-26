export const locales = ["it", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";

export const localeLabels: Record<Locale, string> = {
	it: "IT",
	en: "EN",
};

export const localeNames: Record<Locale, string> = {
	it: "Italiano",
	en: "English",
};

export function isLocale(value: string): value is Locale {
	return locales.includes(value as Locale);
}

export function normalizePagePath(pagePath: string): string {
	const withLeadingSlash = pagePath.startsWith("/")
		? pagePath
		: `/${pagePath}`;
	const normalized = withLeadingSlash.replace(/\/+$/, "");
	return normalized === "" ? "/" : normalized;
}

export function getLocalizedPath(locale: Locale, pagePath = "/"): string {
	const normalizedPath = normalizePagePath(pagePath);
	if (normalizedPath === "/") {
		return `/${locale}`;
	}
	return `/${locale}${normalizedPath}`;
}

export function getPagePathFromPathname(pathname: string): string {
	const normalizedPathname = normalizePagePath(pathname);
	const segments = normalizedPathname.split("/").filter(Boolean);
	if (segments.length === 0) {
		return "/";
	}
	if (isLocale(segments[0])) {
		if (segments.length === 1) {
			return "/";
		}
		return `/${segments.slice(1).join("/")}`;
	}
	return normalizedPathname;
}

export function getOppositeLocale(locale: Locale): Locale {
	return locale === "it" ? "en" : "it";
}
