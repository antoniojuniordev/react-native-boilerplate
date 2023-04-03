import React from 'react';
import { Controller } from 'react-hook-form';

import Input, { InputProps } from '.';

interface InputFormProps extends InputProps {
  control: any
  name: string
}

export default function InputForm({ label, placeholder, name, errorMsg, control }: InputFormProps) {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value }, fieldState }) => (
        <Input
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          label={label}
          placeholder={placeholder}
          errorMsg={errorMsg ? errorMsg : fieldState?.error && fieldState?.error?.message}
        />
      )}
      name={name}
    />
  );
}
