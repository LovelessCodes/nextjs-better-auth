"use client";

import { useUser } from "@/hooks/use-user";
import { signOut } from "@/utils/client";
import { ChevronUp, User2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "./ui/sidebar";

export function AppSidebar() {
	const { user } = useUser();
	const router = useRouter();

	return (
		<Sidebar side="left" variant="sidebar" collapsible="icon">
			<SidebarHeader />
			<SidebarContent />
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton>
									<User2 /> {user?.name}
									<ChevronUp className="ml-auto" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								side="top"
								className="w-[--radix-popper-anchor-width]"
							>
								<DropdownMenuItem asChild>
									<Link href="/account">
										<span>Account</span>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() =>
										signOut({
											fetchOptions: {
												onSuccess: () => {
													router.push("/login");
												},
											},
										})
									}
								>
									<span>Sign out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
