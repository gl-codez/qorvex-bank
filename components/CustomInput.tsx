import { Control, FieldPath } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import z from "zod";
import { authFormSchema } from "@/lib/utils";

const formShema = authFormSchema("sign-up");

interface CustomInputProps {
  control: Control<z.infer<typeof formShema>>;
  name: FieldPath<z.infer<typeof formShema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="form-item">
            <FormLabel className="form-label">{label}</FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  placeholder={placeholder}
                  className="input-class placeholder:text-gray-500 placeholder:text-[16px]"
                  type={name === "password" ? "password" : "text"}
                  {...field}
                />
              </FormControl>
              <FormMessage className="form-message mt-2" />
            </div>
          </div>
        </FormItem>
      )}
    />
  );
};

export { CustomInput };
