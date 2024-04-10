import { Avatar, AvatarImage } from "@/components/ui/avatar";
export function Logo() {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src="../app/mylogo.svg" alt="logo" />
    </Avatar>
  );
}
