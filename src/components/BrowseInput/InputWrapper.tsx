import { ReactNode } from "react";

import "./style.css";

interface InputWrapperProps {
  children: ReactNode;
}

export function InputWrapper({ children }: InputWrapperProps) {
  return <div className="browse-wrapper">{children}</div>;
}
