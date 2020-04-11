import styled from 'styled-components';


export const Container = styled.div`
    min-height:420px;
    width:100%;
    
    display:flex;
    justify-content: center;
    text-align: center;

    #conteudo{
        display:flex;
        flex-direction: column;
        align-items: center;
       
    }
    #logo{
        margin-top: 0px;
        height:200px;
    }
    #input{
        margin-top: 10px;
        margin-bottom: 10px;
        background: white;
        display: flex;
        width: 550px;
        padding: 5px;
        border: 1px solid #aeaeae;
        box-sizing: border-box;
        border-radius: 25px;
        flex-direction: row;
        height: 45px;
        align-items: center;
        color: #7e7e7e;
      
    }





    #input:hover{
        border: 1px solid white;
        box-sizing: border-box;
        box-shadow: 00px 0px 10px #9f9f9f;
    }

    #lupa{
        margin-left: 10px;
        margin-right: 10px;        
        font-size:20px;
    }

    #pesquisa{
        border:none;
        height: 20px;
        width: 400px;
        margin-right: 20px;
        outline: none;
    }
  
    
    #teclado{
        margin-right: 10px;        
        font-size:20px;
        cursor:pointer;
    }
    #mic{
        margin-left: 10px;        
        font-size:20px;
        cursor:pointer
    }


    #botoes{
        margin-top: 20px;
        margin-bottom: 20px;
        display:flex;
        justify-content:space-between;
        
        width: 250px;
        

    }
    button{
        
        border-radius:5px;
        padding:10px;
        cursor: pointer;
        border:1px solid white;
        font-family:Arial, sans-serif;
    }
    button:hover{
        border:1px solid #aaaaaa;
        box-sizing: border-box;
        background-image: linear-gradient(#f9f9f9, #f3f3f3);
    }

    #casa{
        margin-bottom:30px;
        font-family:Arial, sans-serif;
        font-size: 14px;
        text-decoration:none;
        color: #5707b8;
    }
    #casa:hover{
        text-decoration: underline;

    }

    #disponivel{
        display: flex;
    }

    p{
        font-family: Arial, sans-serif;
        font-size:14px;
    }

    #idioma{
        text-decoration: none;
        margin-left:5px;
        color: #5707b8;
    }
    a {
        text-decoration: none;
    }

    #idioma:hover{
        text-decoration: underline;

    }
`;
