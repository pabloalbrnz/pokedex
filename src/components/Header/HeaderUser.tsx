import "./style.css";

import * as Avatar from "@radix-ui/react-avatar";

interface HeaderUserProps {
  avatar?: string;
  username: string;
}

export function HeaderUser({ avatar, username }: HeaderUserProps) {
  return (
    <>
      <Avatar.Root>
        <Avatar.Image
          src={
            avatar
              ? avatar
              : "https://i.pinimg.com/474x/00/02/7e/00027e5ad59b25c77b8c58824d514a27.jpg"
          }
        />
        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
          CT
        </Avatar.Fallback>
      </Avatar.Root>
      <span className="header-profile-username">{username}</span>
    </>
  );
}
