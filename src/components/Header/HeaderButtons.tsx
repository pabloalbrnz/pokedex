import { ReactNode } from "react";

import "./style.css";

interface HeaderButtonsProps {
  children: ReactNode;
}

export function HeaderButtons({ children }: HeaderButtonsProps) {
  return <div className="header-buttons">{children}</div>;
}
