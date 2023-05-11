import styled from "styled-components";

export const FilterModalStyle = styled.div`
  //position: inherit;
  .main {
    background-color: ${({ theme }) => theme.colors.white};
  }
  .main h3 {
    font-weight: bold;
  }
  .main p {
    font-weight: lighter;
    margin-top: 1rem;
  }
  .price-div {
    display: flex;
    margin-top: 1rem;
  }
  .InputField {
    background-color: rgb(188 179 179 / 25%);
  }
  .main-1 {
    margin-top: 2rem;
  }
  .main-2 {
    margin-top: 1rem;
  }
  .rooms-div {
    display: flex;
    //background-color: red;
    position: relative;
    overflow-x: scroll;
  }
  .main-3 {
    margin-top: 1rem;
    //background-color: aqua;
    display: flex;
    justify-content: end;
    //float: right;
  }
  .main-3-end {
    justify-self: flex-end;
  }
`;
