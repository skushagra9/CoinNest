"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Myavatar } from "./Avatar";

interface DropdownMenuDemouserProps {
  email: string | null;
  name: string | null;
}

export const DropdownMenuDemouser: React.FC<DropdownMenuDemouserProps> = ({
  email,
  name,
}) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative ml-3 h-8 w-8 rounded-full"
          >
            <Myavatar></Myavatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <a href="/billing">
              <DropdownMenuItem>Manage Plans</DropdownMenuItem>
            </a>
            <DropdownMenuSeparator />
          </DropdownMenuGroup>

          <Button className="w-full" variant="ghost">
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
