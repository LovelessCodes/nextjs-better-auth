"use client";

import { multiSession } from "@/utils/client";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {
	const { data: allSessions, isLoading } = useQuery({
		queryKey: ["users"],
		queryFn: () => multiSession.listDeviceSessions(),
	});

	const users = allSessions?.data?.map((session) => session.user);

	return {
		users,
		isLoading,
	};
}
