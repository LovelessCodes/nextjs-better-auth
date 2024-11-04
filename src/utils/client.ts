import { createAuthClient } from "better-auth/client";
import { multiSessionClient } from "better-auth/client/plugins";

export const { signIn, signOut, signUp, getSession, multiSession } =
	createAuthClient({
		baseURL: process.env.NEXT_PUBLIC_URL as string,
		plugins: [multiSessionClient()],
	});
