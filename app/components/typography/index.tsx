export const SubHeading = ({ text }: { text: string }) => (
  <small className="uppercase text-[14px] md:text-[20px]">{text}</small>
);
export const H2 = ({ text }: { text: string }) => (
  <h2 className="text-[30px] md:text-[50px] font-black leading-tight">
    {text}
  </h2>
);
