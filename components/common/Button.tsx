import React from "react";
import { ButtonProps } from "@/interface";

const Button: React.FC<ButtonProps> = ({
  action,
  buttonLabel,
  buttonBackgroundColor = "blue",
}) => {
  return (
    <button
      onClick={action}
      className={`bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600 text-white font-bold py-2 px-4 rounded`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;