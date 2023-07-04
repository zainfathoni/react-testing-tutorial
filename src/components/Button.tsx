export function Button({
  onClick,
  type = "button",
  children,
}: {
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
}) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}
