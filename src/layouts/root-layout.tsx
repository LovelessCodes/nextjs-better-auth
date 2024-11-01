"use client";

import { AppSidebar } from "@/components/sidebar";

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="flex items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<AppSidebar />
			{children}
		</div>
	);
}
