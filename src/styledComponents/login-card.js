import styled, { css } from "styled-components";

export const LoginCard = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 500px;
  font-family: Quicksand, arial, sans-serif;
  background-color: white;
`;

export const LoginHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
  margin-right: 32px;
  margin-left: 32px;
`;

export const LoginHeaderTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-bottom: 30px;
`;

export const LoginHeaderSubTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: lightgray;
  margin-bottom: 30px;
`;

export const LoginCardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const LoginInputContainer = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

`

export const LoginInput = styled.input`
  justify-content: center;
  margin-left: 10px;
  margin-right: 1opx;
  padding-left: 10px;
  padding-right: 1opx;
  width: 70%;
  height: 40px;
  margin-bottom: 5%;
  font-family: inherit;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const LoginEyeIcon = styled.span`
color: grey;
  cursor: pointer;
  opacity: .40;
  transition: opacity .45s ease-in;

  &:hover {
    opacity: .45;
  }

  ${props =>
    props.eye &&
    css`
      position: absolute;
      top: 8px;
      right: 0;
    `}

  ${props =>
    props.small &&
    css`
      font-size: 14px;
    `}
`

export const LoginButton = styled.button`
    font-size: medium;
    font-family: inherit;
    background-color: gray;
    justify-content: center;
    color: white;
    width: 75%;
    height: 40px;
    margin-left: 10px;
    padding-right: 1opx;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`

export const LoginForgottenPaswword = styled.p`
    font-size: small;
    font-family: inherit;
    color: darkgray;
    justify-content: center;
    cursor: pointer;
`

export const LoginError = styled.p`
    color: red;
    background-color: none;
    font-size: smaller;
`