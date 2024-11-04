"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<>
			{theme === "dark" ? (
				<Sun className="w-5 h-5" onClick={() => setTheme("light")} />
			) : (
				<Moon className="w-5 h-5" onClick={() => setTheme("dark")} />
			)}
		</>
	);
}
