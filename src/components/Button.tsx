const styles = {
  button:
    "bg-[var(--inputBackground)] px-[16px] py-[8px] m-[4px] rounded-md hover:opacity-80 transition-opacity cursor-pointer",
  buttonText: "text-[var(--text)] font-medium",
  buttonPrimary: "bg-[var(--primary)]",
  buttonSecondary: "bg-[var(--secondary)]",
};

interface ButtonProps {
  variant?: "primary" | "secondary";
  currency: { code: string };
  onClick?: () => void;
  isSelected?: boolean;
}

const Button = ({
  variant = "primary",
  currency,
  onClick,
  isSelected,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles.buttonText} ${
        isSelected &&
        (variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary)
      }`}
    >
      {currency.code}
    </button>
  );
};

export default Button;
