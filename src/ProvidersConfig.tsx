import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from 'core/styles/theme';
import Routes from 'routes/routes';

export default function ProvidersConfig() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
