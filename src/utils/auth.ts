import { betterAuth } from "better-auth";

import { drizzle } from 'drizzle-orm/libsql';
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "../../auth-schema";

const db = drizzle({
    connection: {
        url: "file:data.db",
    },
});

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "sqlite",
        schema: {
            ...schema,
        },
    }),
    socialProviders: { 
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    }, 
})