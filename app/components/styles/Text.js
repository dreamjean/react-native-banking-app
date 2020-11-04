import styled, { css } from 'styled-components';

const headingStyle = css`
  ${({ white, theme: { colors, size, getFont } }) => ({
    color: white ? colors.white : colors.violet,
    fontSize: size.xl,
    fontFamily: getFont(0),
  })}
`;

const title1Style = css`
  ${({ theme: { size, getFont } }) => ({
    fontSize: size.l,
    fontFamily: getFont(1),
  })}
`;

const title2Style = css`
  ${({ theme: { size, getFont } }) => ({
    fontSize: size.m2,
    fontFamily: getFont(1),
  })}
`;

const bodyStyle = css`
  ${({ white, theme: { colors, size, space } }) => ({
    color: white ? colors.title : colors.text2,
    fontSize: size.s2,
    marginVertical: space.s1,
  })}
`;
const captionStyle = css`
  ${({ theme: { colors, size } }) => ({
    color: colors.text2,
    fontSize: size.s1,
  })}
`;

const centerStyle = css`
  text-align: center;
`;

const mtp1Style = css`
  ${({ theme: { space } }) => ({
    marginTop: space.m1,
  })}
`;

const mtp2Style = css`
  ${({ theme: { space } }) => ({
    marginTop: space.l2,
  })}
`;

const mbt1Style = css`
  ${({ theme: { space } }) => ({
    marginBottom: space.m1,
  })}
`;

const mbt2Style = css`
  ${({ theme: { space } }) => ({
    marginBottom: space.l2,
  })}
`;

const Text = styled.Text`
  ${({ white, theme: { colors, size, getFont } }) => ({
    color: white ? colors.title : colors.text,
    fontSize: size.m1,
    fontFamily: getFont(2),
  })}

  ${({ heading }) => heading && headingStyle}
  ${({ title1 }) => title1 && title1Style}
  ${({ title2 }) => title2 && title2Style}
  ${({ body }) => body && bodyStyle}
  ${({ caption }) => caption && captionStyle}

  // position
  ${({ center }) => center && centerStyle}
  ${({ mtp1 }) => mtp1 && mtp1Style}
  ${({ mtp2 }) => mtp2 && mtp2Style}
  ${({ mbt1 }) => mbt1 && mbt1Style}
  ${({ mbt2 }) => mbt2 && mbt2Style}
`;

export default Text;
