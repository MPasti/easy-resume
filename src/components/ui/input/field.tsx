import { Controller, useFormContext } from "react-hook-form";
import { Input } from ".";
import { ComponentProps } from "react";
import { FieldWrapper } from "../field-wrapper";

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
  containerClass?: string;
};

export const InputField = ({
  label,
  name,
  required,
  containerClass,
  ...props
}: InputFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      rules={{ required: required && "Campo obrigatório" }}
      name={name}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} className={containerClass}>
          <Input {...props} {...field} />
          {fieldState.error && (
            <p className="text-sm text-red-500">{fieldState.error.message}</p>
          )}
        </FieldWrapper>
      )}
    />
  );
};
