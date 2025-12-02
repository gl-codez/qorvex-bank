import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}
export const parseStringify = <T>(value: T): T =>
  JSON.parse(JSON.stringify(value));

export const authFormSchema = (type: string) =>
  z.object({
    firstName:
      type === "sign-in"
        ? z.string().optional()
        : z.string().nonempty("Required").min(3),
    lastName:
      type === "sign-in"
        ? z.string().optional()
        : z.string().nonempty("Required").min(3),
    address1:
      type === "sign-in"
        ? z.string().optional()
        : z.string().nonempty("Required").max(50),
    city:
      type === "sign-in"
        ? z.string().optional()
        : z.string().nonempty("Required").max(50),
    state:
      type === "sign-in"
        ? z.string().optional()
        : z.string().nonempty("Required").min(2).max(10),
    postalCode:
      type === "sign-in"
        ? z.string().optional()
        : z.string().nonempty("Required").min(3).max(6),
    dateOfBirth:
      type === "sign-in"
        ? z.string().optional()
        : z.string().nonempty("Required").min(3),
    ssn:
      type === "sign-in"
        ? z.string().optional()
        : z.string().nonempty("Required").min(3),
    email: z.email(),
    password: z.string().nonempty("Required").min(8),
  });
