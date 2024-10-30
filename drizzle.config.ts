import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./drizzle",
	schema: "./auth-schema.ts",
	dialect: "turso",
	dbCredentials: {
		url: "file:data.db",
	},
});
