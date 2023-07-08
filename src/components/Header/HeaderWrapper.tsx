import { ReactNode } from "react";
import "./style.css";

interface HeaderWrapperProps {
  children: ReactNode;
}

export function HeaderWrapper({ children }: HeaderWrapperProps) {
  return (
    <div className="header">
      <div className="header-wrapper">{children}</div>
    </div>
  );
}
