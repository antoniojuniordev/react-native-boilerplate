import React from 'react';
import { TextInputProps } from 'react-native';

import InputErros from '../input-error';
import { Container, Label, StyledTextInput } from './styles';

export interface InputProps extends TextInputProps {
  placeholder?: string
  label: string
  errorMsg?: string
}

export default function Input({ label, placeholder, errorMsg, ...rest }: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledTextInput
        placeholder={placeholder}
        {...rest}
      />
      <InputErros error={errorMsg} />
    </Container>
  );
}
