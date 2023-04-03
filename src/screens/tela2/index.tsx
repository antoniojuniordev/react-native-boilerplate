import Button from 'core/components/button';
import InputForm from 'core/components/form/input/form';
import z, { validateZod } from 'core/components/form/zod';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from 'react-native';
import * as Styled from './styles';

function Tela2() {

  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    ...validateZod({
      email: z.string().email('Digite um email valido.'),
      password: z.string()
    })
  });


  async function onSubmit(payload: any) {
    console.log(payload)
  }


  return (
    <Styled.First>
      <Styled.Text>
        tela 2
      </Styled.Text>

      <InputForm
        control={control}
        label="Email"
        name="email"
      />

      <InputForm
        control={control}
        label="Senha"
        name="password"
        placeholder="Digite sua senha"
      />

      <Button text='Submit' onPress={handleSubmit(onSubmit)} />
    </Styled.First>
  );
}

export default Tela2;
