import styled, { css } from 'styled-components';

const avatarStyle = css`
  width: 40px;
  height: 40px;

  ${({ theme: { radii } }) => ({
    borderRadius: radii.m2,
  })}
`;

const profileStyle = css`
  width: 48px;
  height: 48px;

  ${({ theme: { radii } }) => ({
    borderRadius: radii.m1,
  })}
`;

const logoStyle = css`
  width: 70px;
  height: 40px;
`;

const Image = styled.Image`
  ${({ avatar }) => avatar && avatarStyle}
  ${({ logo }) => logo && logoStyle}
  ${({ profile }) => profile && profileStyle}
`;

export default Image;
