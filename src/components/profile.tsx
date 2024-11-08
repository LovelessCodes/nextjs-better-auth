"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSession } from "@/utils/client";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle2, X } from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

export default function UserProfile() {
	const { data, isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: () => getSession(),
	});

	const user = data?.data?.user;

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				Loading...
			</div>
		);
	}

	if (!user) {
		return (
			<div className="flex justify-center items-center h-screen">
				Please log in to view your profile.
			</div>
		);
	}

	return (
		<div className="flex justify-center items-center">
			<Card className="w-full max-w-md border-none">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center">
						User Profile
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col items-center space-y-4">
						<Avatar className="w-24 h-24">
							<AvatarImage src={user.image} alt={user.name} />
							<AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
						</Avatar>
						<h2 className="text-xl font-semibold">{user.name}</h2>
						<div className="flex items-center space-x-2">
							<span className="text-sm text-gray-600">{user.email}</span>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										{user.emailVerified ? (
											<CheckCircle2
												className="w-4 h-4 text-green-500"
												aria-label="Verified"
											/>
										) : (
											<X
												className="w-4 h-4 text-red-500"
												aria-label="Not verified"
											/>
										)}
									</TooltipTrigger>
									<TooltipContent>
										{user.emailVerified
											? "Verified"
											: "Please verify your account"}
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</div>
						<p className="text-sm text-gray-500">
							Member since: {new Date(user.createdAt).toLocaleDateString()}
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
