import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ProvidersLayout from "./providers-layout";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Better Auth x Next.js",
	description: "Created by Loveless",
	authors: [
		{
			name: "Loveless",
			url: "https://github.com/LovelessCodes",
		},
	],
	icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ProvidersLayout>{children}</ProvidersLayout>
			</body>
		</html>
	);
}
