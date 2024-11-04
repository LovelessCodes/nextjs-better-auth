import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";

import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { multiSession } from "better-auth/plugins";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "../../auth-schema";

const db = drizzle({
	connection: {
		url: process.env.TURSO_DB_URL ?? "file:data.db",
		authToken: process.env.TURSO_DB_AUTH_TOKEN ?? "",
	},
});

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "sqlite",
		schema: {
			...schema,
		},
	}),
	trustedOrigins: [
		process.env.NEXT_PUBLIC_URL as string,
		...(process.env.ALLOWED_ORIGINS?.split(",") ?? []),
	],
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
	},
	plugins: [multiSession(), expo()],
});
