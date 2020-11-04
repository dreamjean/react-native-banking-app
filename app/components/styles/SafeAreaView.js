import Constants from 'expo-constants';
import styled from 'styled-components';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;

  ${({ theme: { colors, isIos } }) => ({
    backgroundColor: colors.dark,
    paddingTop: isIos ? 0 : Constants.statusBarHeight,
  })}
`;

export default SafeAreaView;
