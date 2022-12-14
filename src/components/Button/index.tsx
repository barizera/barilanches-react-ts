import { StyledButton } from "./style";

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "disable" | "cancel" | false;
  size?: "small" | "large" | false;
}

const Button = ({
  text,
  onClick,
  variant = false,
  size = false,
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} variant={variant} size={size}>
      {text}
    </StyledButton>
  );
};
export default Button;
