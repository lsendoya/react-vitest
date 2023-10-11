import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { describe, it, beforeEach, afterEach, expect } from "vitest";
import { Calculator, rows, equal } from "../Components";

describe("Calculator", () => {
  beforeEach(() => {
    render(<Calculator />);
  });
  afterEach(() => {
    cleanup();
  });

  it("should render numbers", () => {
    rows.flat().forEach((num) => {
      screen.getByText(num);
    });
  });

  it("should render equal", () => {
    screen.getByText(equal);
  });

  it("should render an input", () => {
    screen.getByRole("textbox");
  });

  it("should user input after clicking a number", () => {
    const one = screen.getByText("1") as HTMLButtonElement;
    fireEvent.click(one);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("1");
  });

  it("should user cliking a several number", () => {
    const one = screen.getByText("1") as HTMLButtonElement;
    fireEvent.click(one);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    const two = screen.getByText("2") as HTMLButtonElement;
    fireEvent.click(two);

    const three = screen.getByText("3") as HTMLButtonElement;
    fireEvent.click(three);

    expect(input.value).toBe("123");
  });

  it("should show the number and sign  concatented after clicking", () => {
    const one = screen.getByText("1") as HTMLButtonElement;
    fireEvent.click(one);
    const plus = screen.getByText("+") as HTMLButtonElement;
    fireEvent.click(plus);
    const two = screen.getByText("2") as HTMLButtonElement;
    fireEvent.click(two);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("1+2");
  });

  it("should show the user result about operation", () => {
    const one = screen.getByText("1") as HTMLButtonElement;
    fireEvent.click(one);
    const plus = screen.getByText("+") as HTMLButtonElement;
    fireEvent.click(plus);
    const two = screen.getByText("2") as HTMLButtonElement;
    fireEvent.click(two);
    const equal = screen.getByText("=") as HTMLButtonElement;
    fireEvent.click(equal);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("3");
  });

  it("should reset the last operation when it´s clicking a new number", () => {
    const one = screen.getByText("1") as HTMLButtonElement;
    fireEvent.click(one);
    const plus = screen.getByText("+") as HTMLButtonElement;
    fireEvent.click(plus);
    const two = screen.getByText("2") as HTMLButtonElement;
    fireEvent.click(two);
    const equal = screen.getByText("=") as HTMLButtonElement;
    fireEvent.click(equal);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("3");

    fireEvent.click(two);
    fireEvent.click(plus);
    const three = screen.getByText("3") as HTMLButtonElement;
    fireEvent.click(three);
    expect(input.value).toBe("2+3");
  });

  it("when click on CE, should reset the value", () => {
    const one = screen.getByText("1") as HTMLButtonElement;
    fireEvent.click(one);
    const plus = screen.getByText("+") as HTMLButtonElement;
    fireEvent.click(plus);
    const two = screen.getByText("2") as HTMLButtonElement;
    fireEvent.click(two);
    const equal = screen.getByText("=") as HTMLButtonElement;
    fireEvent.click(equal);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("3");
    const reset = screen.getByText("CE") as HTMLButtonElement;
    fireEvent.click(reset);
    expect(input.value).toBe("0");
  });

  it("should show the total operation more the other noumber", () => {
    const one = screen.getByText("1") as HTMLButtonElement;
    fireEvent.click(one);
    const plus = screen.getByText("+") as HTMLButtonElement;
    fireEvent.click(plus);
    const two = screen.getByText("2") as HTMLButtonElement;
    fireEvent.click(two);
    const equal = screen.getByText("=") as HTMLButtonElement;
    fireEvent.click(equal);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("3");

    fireEvent.click(plus);
    fireEvent.click(two);
    expect(input.value).toBe("3+2");
  });

  it("should show 0 when click CE and then clicking other operator", () => {
    const one = screen.getByText("1") as HTMLButtonElement;
    fireEvent.click(one);
    const plus = screen.getByText("+") as HTMLButtonElement;
    fireEvent.click(plus);
    const two = screen.getByText("2") as HTMLButtonElement;
    fireEvent.click(two);
    const equal = screen.getByText("=") as HTMLButtonElement;
    fireEvent.click(equal);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("3");

    const reset = screen.getByText("CE") as HTMLButtonElement;
    fireEvent.click(reset);
    fireEvent.click(plus);
    expect(input.value).toBe("0");
  });

  it("should show the number  when clicking it after to click equal", () => {
    const one = screen.getByText("1") as HTMLButtonElement;
    fireEvent.click(one);
    const plus = screen.getByText("+") as HTMLButtonElement;
    fireEvent.click(plus);
    const two = screen.getByText("2") as HTMLButtonElement;
    fireEvent.click(two);
    const equal = screen.getByText("=") as HTMLButtonElement;
    fireEvent.click(equal);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("3");

    const reset = screen.getByText("CE") as HTMLButtonElement;
    fireEvent.click(reset);
    fireEvent.click(equal);
    fireEvent.click(two);
    expect(input.value).toBe("2");
  });

  it('should return 0 when ON/OFF is clicked', () => {
    const one = screen.getByText("1") as HTMLButtonElement;
    fireEvent.click(one);
    const plus = screen.getByText("+") as HTMLButtonElement;
    fireEvent.click(plus);
    const two = screen.getByText("2") as HTMLButtonElement;
    fireEvent.click(two);
    const equal = screen.getByText("=") as HTMLButtonElement;
    fireEvent.click(equal);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("3");

    const toogle = screen.getByText("ON/OFF") as HTMLButtonElement;
    fireEvent.click(toogle);
    expect(input.value).toBe("");
  })

  it("should turn of when clicking on ON/OFF button", () => {
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe("");
    const toogle = screen.getByText("ON/OFF") as HTMLButtonElement;
    fireEvent.click(toogle);
    expect(input.value).toBe("0");

  })


});
