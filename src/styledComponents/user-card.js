import styled from "styled-components";

export const UserCard = styled.section`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px 50px 0;
  width: 300px;
  height: auto;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
  font-family: Quicksand, arial, sans-serif;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  :hover {
  transform: scale(.9, 1);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
    }
`;

export const UserCardImage = styled.img`
  border-radius: 50%;
  margin-top: 20px;
  width: 200px;
  height: auto;
`;


export const UserCardBody = styled.section`
  padding-right: 32px;
  padding-left: 32px;
`;


export const UserCardBodyTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const UserCardContainer = styled.section`
  padding-right: 32px;
  padding-left: 32px;
`;

export const UserCardDescription = styled.p`
align-items: center;
justify-content: center;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-bottom: 30px;
`;
