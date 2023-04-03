import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import * as Styled from './styles'
interface PropsButton extends TouchableOpacityProps {
  text: string
}

export default function Button({
  onPress,
  text,
  ...rest
}: PropsButton) {
  return (
    <Styled.Button
      {...rest}
      onPress={(e: GestureResponderEvent) => {
        if (onPress) {
          onPress(e);
        }
      }}
    >
      <Styled.Text>{text}</Styled.Text>
    </Styled.Button>
  );
}
