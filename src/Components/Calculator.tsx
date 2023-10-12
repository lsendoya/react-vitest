import { VStack, HStack, Input, Button } from "@chakra-ui/react";
import { SetCalculate } from "../hook/calculator";
import { rows } from ".";
import { useBreakPoint } from "../hook/break-point";

export const Calculator = () => {
  const { state, value } = SetCalculate();
  const { setWith } = useBreakPoint();

  return (
    <VStack
      w={setWith()}
      h="lg"
      bg="#EAD7BB"
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"3xl"}
    >
      <Input w="81%" fontSize={"4xl"} h="4rem" value={value} bg="#FFF2D8" />
      <VStack w="90%" h="sm" justifyContent={"center "}>
        {rows.map((row, indx) => (
          <HStack w="90%" key={indx}>
            {row.map((sign, index) => (
              <Button
                fontSize={`${sign === "ON/OFF" ? "0.8rem" : "xl"}`}
                w="25%"
                h="4rem"
                p="0.5rem"
                onClick={state(sign)}
                key={index}
                bg="#BCA37F"
              >
                {sign}
              </Button>
            ))}
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};
