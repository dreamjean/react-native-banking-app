import { DefaultTheme } from '@react-navigation/native';

import { colors } from '../config';

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.blue,
    secondary: colors.grey,
  },
};

export default navigationTheme;
