import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export function Myavatar(image, name) {
  return(
    <Avatar className="h-8 w-8">
      <AvatarImage
        src={image}
        alt={name}
      />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
  ) 
}
