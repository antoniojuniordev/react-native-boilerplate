import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface PropsButton extends TouchableOpacityProps {
  text: string
}

export default function Button({
  onPress,
  text,
  ...rest
}: PropsButton) {
  return (
    <TouchableOpacity
      {...rest}
      onPress={(e: GestureResponderEvent) => {
        if (onPress) {
          onPress(e);
        }
      }}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
