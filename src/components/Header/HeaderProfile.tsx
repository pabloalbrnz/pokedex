import { ReactNode } from "react";
import "./style.css";

interface HeaderProfileProps {
  children: ReactNode;
}

export function HeaderProfile({ children }: HeaderProfileProps) {
  return <div className="header-profile">{children}</div>;
}
