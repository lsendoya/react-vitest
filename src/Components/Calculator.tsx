import { rows } from ".";
import { SetCalculate } from "../hook/calculator";
import { VStack, HStack, Input, Button } from "@chakra-ui/react";

export const Calculator = () => {
  const { handleClickEqual, handleClickReset, handleClickSetValue,  handleONOFF,value } =
    SetCalculate();

  function state(value: number | string) {
    if (value === "CE") return handleClickReset();

    if (value === "=") return handleClickEqual();

    if(value === "ON/OFF") return handleONOFF();

    return handleClickSetValue(value);
  }

  return (
    <VStack
      w="sm"
      h="lg"
      bg="blue.300"
      justifyContent={"center"}
      borderRadius={"3xl"}
    >
      <Input w="90%" fontSize={"4xl"} h="4rem" value={value} />
      <VStack w="90%" h="sm" bg="green.200" justifyContent={"center "}>
        {rows.map((row, indx) => (
          <HStack w="90%" key={indx}>
            {row.map((sign, index) => (
              <Button
                fontSize={`${sign === "ON/OFF" ? "1rem" : "xl"}`}
                w="25%"
                h="4rem"
                p="0.5rem"
                onClick={state(sign)} 
                key={index}
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
