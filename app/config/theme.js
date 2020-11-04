import { Platform } from 'react-native';

import colors from './colors';

export const isIos = Platform === 'ios';

const getFont = (n) => (isIos ? fonts.ios[n] : fonts.android[n]);

const fonts = {
  ios: ['Proxima-Nova-Bold', 'Proxima-Nova-Sbold', 'Proxima-Nova-Reg'],
  android: ['Montserrat-Bold', 'Montserrat-SemiBold', 'Montserrat-Regular'],
};
// export const caledar = {};

export default {
  colors,
  size: {
    s1: 10,
    s2: 11,
    m1: 13,
    m2: 15,
    l: 17,
    xl: 30,
  },
  space: {
    n: 0,
    s1: 5,
    s2: 8,
    m1: 16,
    m2: 20,
    l1: 30,
    l2: 32,
    xl: 64,
  },
  radii: {
    n: 0,
    s1: 4,
    s2: 8,
    m1: 12,
    m2: 20,
    l1: 32,
  },
  getFont,
};
