"use client";

import { useUser } from "@/hooks/use-user";
import { useUsers } from "@/hooks/use-users";
import { signOut } from "@/utils/client";
import {
	CheckCircle2,
	ChevronDown,
	ChevronsLeftRight,
	DoorOpen,
	X,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "./ui/sidebar";

const ThemeToggle = dynamic(() => import("./theme-toggle"), { ssr: false });

export function AppSidebar() {
	const { user } = useUser();
	const { users } = useUsers();
	const router = useRouter();

	return (
		<Sidebar side="left" variant="sidebar" collapsible="icon">
			<SidebarHeader className="flex flex-col">
				<div className="flex flex-row items-center gap-4 py-4 justify-center relative">
					<div className="absolute m-auto top-0 bottom-0 right-2 cursor-pointer h-fit">
						<ThemeToggle />
					</div>
					<svg
						width="60"
						height="45"
						viewBox="0 0 60 45"
						fill="none"
						className="w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Better Auth</title>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M0 0H15V15H30V30H15V45H0V30V15V0ZM45 30V15H30V0H45H60V15V30V45H45H30V30H45Z"
							className="fill-black dark:fill-white"
						/>
					</svg>
					<span>x</span>
					<svg
						className="w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
						width="1.2em"
						height="1.2em"
						viewBox="0 0 24 24"
					>
						<title>Next.js</title>
						<path
							fill="currentColor"
							d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4-14h-1.35v4H16zM9.346 9.71l6.059 7.828l1.054-.809L9.683 8H8v7.997h1.346z"
						/>
					</svg>
				</div>
				{users && users.length > 0 && (
					<SidebarMenu>
						<SidebarMenuItem>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<SidebarMenuButton>
										Switch Account
										<ChevronDown className="ml-auto" />
									</SidebarMenuButton>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-[--radix-popper-anchor-width]">
									{users.map((user) => (
										<DropdownMenuItem key={user.id}>
											<span>{user.name}</span>
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						</SidebarMenuItem>
					</SidebarMenu>
				)}
			</SidebarHeader>
			<SidebarContent />
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<Popover>
							<PopoverTrigger asChild>
								<SidebarMenuButton className="h-fit">
									<div className="flex items-center gap-2">
										<Avatar className="w-8 h-8">
											<AvatarImage src={user?.image} alt={user?.name} />
											<AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
										</Avatar>
										<div className="flex flex-col items-start">
											<p>{user?.name}</p>
											<p className="opacity-50">{user?.email}</p>
										</div>
									</div>
									<ChevronsLeftRight className="ml-auto" />
								</SidebarMenuButton>
							</PopoverTrigger>
							<PopoverContent
								side="right"
								sideOffset={8}
								className="p-0 rounded-l-none"
							>
								<div className="flex items-center gap-2 p-1">
									<Avatar className="w-8 h-8">
										<AvatarImage src={user?.image} alt={user?.name} />
										<AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
									</Avatar>
									<div className="flex flex-col items-start">
										<p>{user?.name}</p>
										<div className="flex items-center gap-2">
											<p className="opacity-50">{user?.email}</p>
											{user?.emailVerified ? (
												<CheckCircle2 className="w-4 h-4 text-green-500" />
											) : (
												<X className="w-4 h-4 text-red-500" />
											)}
										</div>
									</div>
								</div>
								<Separator />
								<div className="flex flex-col gap-2 p-1">
									<Button
										variant="ghost"
										size="icon"
										className="w-full flex items-center"
										onClick={() => signOut()}
									>
										<DoorOpen className="w-4 h-4" />
										<p>Sign Out</p>
									</Button>
								</div>
							</PopoverContent>
						</Popover>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
