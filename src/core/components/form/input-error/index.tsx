import React from 'react';
import * as Styled from './styles'

export interface InputErrosProps {
  error?: string
}

function InputErros({ error }: InputErrosProps) {
  return (
    <>
      {error && <Styled.Error>{error}</Styled.Error>}
    </>
  )
}

export default InputErros
