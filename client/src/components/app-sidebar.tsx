import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Archive,
  ArrowUpRight,
  ChevronDown,
  ChevronsUpDown,
  Copy,
  Eye,
  LibraryBig,
  LifeBuoy,
  LogOut,
  LucideTextCursorInput,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Settings,
  SparklesIcon,
  Trash,
  User,
} from "lucide-react";
import { Button } from "./ui/button";
import { BRAND } from "@/lib/constants";

// todo - change this to dynamic user details
const USER = {
  name: "Mahesh",
  email: "Mahesh@example.com",
};

// todo change these dummy forms to user created forms
const FORMS = [
  { name: "Form 1" },
  { name: "Form 2" },
  { name: "Form 3" },
  { name: "Form 4" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex gap-3">
          <Button size={"icon"} className="size-10 rounded-b-sm">
            <LucideTextCursorInput className="size-6" />
          </Button>
          <div className="flex flex-col justify-between">
            <span className="text-lg leading-4 font-medium text-foreground">
              {BRAND.name}
            </span>
            <span className="text-sm">Free</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="w-full flex justify-between">
        <SidebarGroup>
          <SidebarMenu>
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    <LibraryBig />
                    Forms
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton className="my-1 justify-between">
                        Create Form
                        <Plus />
                      </SidebarMenuSubButton>
                      {FORMS.map((form) => (
                        <SidebarMenuSubButton
                          key={form.name}
                          className="my-1 group/formItemMenu"
                        >
                          {form.name}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <SidebarMenuAction className="text-muted-foreground group-hover/formItemMenu:text-foreground">
                                <MoreHorizontal />
                              </SidebarMenuAction>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side="right" align="start">
                              <DropdownMenuItem>
                                <span className="flex gap-2 place-items-center">
                                  <Copy /> Copy Link
                                </span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <span className="flex gap-2 place-items-center">
                                  <Eye />
                                  Preview
                                </span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <span className="flex gap-2 place-items-center">
                                  <Settings />
                                  Settings
                                </span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <span className="flex gap-2 place-items-center">
                                  <Archive />
                                  Archive
                                </span>
                              </DropdownMenuItem>
                              <DropdownMenuItem variant="destructive">
                                <span className="flex gap-2 place-items-center">
                                  <Trash className="text-destructive" />
                                  Delete
                                </span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </SidebarMenuSubButton>
                      ))}
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <Button
            variant="ghost"
            className="flex justify-between place-items-center text-muted-foreground group/helpCenter"
          >
            <div className="flex gap-2 place-items-center">
              <LifeBuoy />
              Help Center
            </div>
            <ArrowUpRight className="invisible group-hover/helpCenter:visible" />
          </Button>
          <Button
            variant="ghost"
            className="flex gap-2 place-items-start justify-start text-muted-foreground"
          >
            <MessageSquare />
            Share Feedback
          </Button>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex gap-3">
              <Button size={"icon"} className="size-10 rounded-b-sm">
                <User />
              </Button>
              <div className="w-full flex flex-col justify-between place-items-start">
                <span className="text-md leading-4 font-medium text-foreground">
                  {USER.name}
                </span>
                <span className="text-sm font-normal">{USER.email}</span>
              </div>
              <Button variant={"ghost"}>
                <ChevronsUpDown />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            side="top"
            sideOffset={10}
            alignOffset={10}
          >
            <DropdownMenuLabel>
              <div className="flex gap-3">
                <Button size={"icon"} className="size-8 rounded-b-sm">
                  <User />
                </Button>
                <div className="w-full flex flex-col justify-between place-items-start">
                  <span className="text-md leading-4 font-medium text-foreground">
                    {USER.name}
                  </span>
                  <span className="text-sm font-normal">{USER.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SparklesIcon />
              Upgrade to pro
            </DropdownMenuItem>

            <DropdownMenuItem variant="destructive">
              <LogOut />
              Log out
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem inert className="text-muted-foreground">
              You are using free plan
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
