"use client";

import { getSession } from "@/utils/client";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
	const { data: userData, isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: () => getSession(),
	});

	const user = userData?.data?.user;

	return {
		user,
		isLoading,
	};
}
