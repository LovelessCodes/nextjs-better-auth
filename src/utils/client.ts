import { createAuthClient } from "better-auth/client";
export const { signIn, signOut, signUp, getSession } = createAuthClient({
	baseURL: process.env.NEXT_PUBLIC_URL as string,
});
