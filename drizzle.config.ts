import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./drizzle",
	schema: "./auth-schema.ts",
	dialect: "turso",
	dbCredentials: {
		url: process.env.TURSO_DB_URL ?? "file:data.db",
		authToken: process.env.TURSO_DB_AUTH_TOKEN ?? "",
	},
});
