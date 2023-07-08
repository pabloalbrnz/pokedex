import { InputHTMLAttributes, ReactNode } from "react";

import "./style.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element | ReactNode;
  pHolder: string;
}

export function Input({ icon, pHolder, ...rest }: InputProps) {
  return (
    <>
      {icon ? icon : ""}
      <input
        className="browse-input"
        type="text"
        placeholder={pHolder}
        {...rest}
      />
    </>
  );
}
