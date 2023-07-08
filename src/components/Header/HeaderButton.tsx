import { ButtonHTMLAttributes, ReactNode } from "react";
import "./style.css";

interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element | ReactNode;
  label: string;
  active: boolean;
}

export function HeaderButton({
  active,
  icon,
  label,
  ...rest
}: HeaderButtonProps) {
  return (
    <button className={`header-button ${active ? "active" : ""}`} {...rest}>
      {icon}
      {label}
    </button>
  );
}
