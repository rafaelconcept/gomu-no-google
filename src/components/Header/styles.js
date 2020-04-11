import styled from 'styled-components';



export const Container = styled.div`
  padding-top: 15px;
  margin-right: 25px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  

{
  .text{
    margin-right: 15px;
    font-size: 14px;
    color: #696969;
    text-decoration: none;
  }
  .text:hover{
    color: #9d9d9d;
    text-decoration:underline;
  }
}

  {
    #menu{
      margin-right: 15px;
      font-size: 23px;
      fill:#696969;
    }

    #menu:hover{
      cursor: pointer;
      fill:#1a1a1a;
    }

  }

  {
    #perfil {
      height: 32px;
      border-radius: 50%;
    }
    #perfil:hover{
      cursor: pointer;
    }
  }

`;
