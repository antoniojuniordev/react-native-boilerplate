import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Colors, ColorsProps } from 'theme';

export interface LayoutProps {
  children: React.ReactNode;
  statusbarDark?: boolean;
  topColor?: ColorsProps;
  bottomColor?: ColorsProps;
}

export default function Layout({
  children,
  statusbarDark = false,
  topColor = 'neutral100',
  bottomColor = 'neutral100',
}: LayoutProps) {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: Colors[topColor] }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors[bottomColor] }}>
        <StatusBar
          barStyle={!statusbarDark ? 'light-content' : 'dark-content'}
        />
        {children}
      </SafeAreaView>
    </>
  );
}
