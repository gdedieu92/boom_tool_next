import Link from "next/link";
import {
  DollarSign,
  Home,
  Icon,
  LogOutIcon,
  Search,
  Settings,
  Settings2,
  UserRound,
  Users2Icon,
} from "lucide-react";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

function year() {
  const date = new Date();
  const year = date.getFullYear();
  return year;
}

export default year;

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/backoffice/dashboard",
    icon: Home,
  },
  {
    title: "Invoices",
    url: "/invoices",
    icon: DollarSign,
  },
  {
    title: "Clients",
    url: "/backoffice/client",
    icon: UserRound,
  },
  {
    title: "Team Members",
    url: "/team-members",
    icon: Users2Icon,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const firm = {
  title: "Firm Name",
  img: "/images/Logo-Digifianz-Positivo.svg", 
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="basis-full">
          <SidebarGroupLabel className="mb-10 mt-8 flex justify-center">
            <Image src={firm.img} alt={firm.title} width={200} height={50} />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} passHref>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Link href="#" passHref className="flex items-center gap-1 font-size-sm">
              <span className="font-bold">Log out</span>
              <LogOutIcon height={15}/>
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupLabel>
            <span>Digifianz { year() } - All rights reserved.</span>
          </SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
