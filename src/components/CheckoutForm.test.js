import React from "react";
import { render, screen, component } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";
// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.queryByText("Checkout Form");
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  const firstInput = screen.queryByLabelText("First Name:");
  const lastInput = screen.queryByLabelText("Last Name:");
  const adressInput = screen.queryByLabelText("Address:");
  const cityInput = screen.queryByLabelText("City:");
  const stateInput = screen.queryByLabelText("State:");
  const zipInput = screen.queryByLabelText("Zip:");
  const submitButton = screen.queryByRole("button");
  userEvent.type(firstInput, "Jonathan");
  userEvent.type(lastInput, "Calderon");
  userEvent.type(adressInput, "1000 N Street");
  userEvent.type(cityInput, "San City");
  userEvent.type(stateInput, "Arizona");
  userEvent.type(zipInput, "10101");
  userEvent.click(submitButton);
  const successMessage = await screen.queryByTestId("successMessage");
  expect(successMessage).toBeInTheDocument();
});
