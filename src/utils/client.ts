import { createAuthClient } from "better-auth/client"
export const { signIn, signOut, signUp, getSession } = createAuthClient()