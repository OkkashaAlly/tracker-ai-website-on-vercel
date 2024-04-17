import Link from "next/link";

type AppButtonProps = {
  link: string;
  text: string;
  variant?: "primary" | "secondary";
};

const AppButton = ({ link, text, variant }: AppButtonProps) => {
  let style = "bg-primary text-white";

  if (variant === "primary") {
    style = "bg-primary text-white";
  }

  if (variant === "secondary") {
    style =
      "border dark:border-white dark:text-white text-primary border-primary";
  }

  return (
    <Link className={`px-7 py-2.5 uppercase w-fit ${style}`} href={link}>
      {text}
    </Link>
  );
};

export default AppButton;
