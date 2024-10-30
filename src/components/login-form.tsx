"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { signIn } from "@/utils/client";

export function LoginForm() {
	return (
		<Card className="mx-auto max-w-sm">
			<CardHeader>
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>
					Currently, you can only login with Google.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4">
					<Button
						variant="outline"
						onClick={() =>
							signIn.social({
								provider: "google",
							})
						}
						className="w-full"
					>
						Login with Google
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
