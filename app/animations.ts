export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ease: "easeIn", duration: 0.7 },
  },
};

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { ease: "easeIn", duration: 0.7, delay: index * 0.1 },
  }),
};
