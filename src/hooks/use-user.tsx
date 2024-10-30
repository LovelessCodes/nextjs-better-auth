"use client";

import { getSession } from "@/utils/client";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function useUser() {
	const { data: userData, isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: () => getSession(),
	});

	const user = userData?.data?.user;
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		if (!isLoading && !user && !pathname.startsWith("/login")) {
			router.replace("/login");
		}
	}, [user, isLoading, pathname, router]);

	return {
		user,
		isLoading,
	};
}
