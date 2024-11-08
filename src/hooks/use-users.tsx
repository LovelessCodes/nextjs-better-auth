"use client";

import { multiSession } from "@/utils/client";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "./use-user";

export function useUsers() {
	const { user } = useUser();

	const { data: allSessions, isLoading } = useQuery({
		queryKey: ["users"],
		queryFn: () => multiSession.listDeviceSessions(),
		enabled: !!user,
	});

	const users = allSessions?.data
		?.filter((session) => session.user.id !== user?.id)
		.map((session) => session.user);

	return {
		users,
		isLoading,
	};
}
