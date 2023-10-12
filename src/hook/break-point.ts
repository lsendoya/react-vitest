import { useMediaQuery } from "@chakra-ui/react";

export function useBreakPoint() {
  const [isSmallThan480] = useMediaQuery("(max-width: 480px)", {
    ssr: true,
    fallback: false,
  });

  const [isSmallThan640] = useMediaQuery("(max-width: 640px)", {
    ssr: true,
    fallback: false,
  });
  const [isSmallThan768] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: false,
  });
  const [isSmallThan1024] = useMediaQuery("(max-width: 1024px)", {
    ssr: true,
    fallback: false,
  });
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)", {
    ssr: true,
    fallback: false,
  });

  const setWith = () => {
    if (isSmallThan480) return "20rem";
    if (isSmallThan640) return "24rem";
    if (isSmallThan768) return "25rem";
    if (isSmallThan1024) return "26rem";
    if (isLargerThan1280) return "27rem";
  };

  return {
    setWith,
  };
}
