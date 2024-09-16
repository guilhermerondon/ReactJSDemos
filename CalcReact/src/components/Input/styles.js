import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #000000; 

    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: 10px; 
    box-sizing: border-box;

    font-size: 24px;
    font-family: 'Roboto', sans-serif; 
    
    input {
        width: calc(100% - 20px); 
        height: 55px; 
        background-color: #000000; 
        border: 1px solid #FFFFFF; 
        color: #FFFFFF; 
        padding: 0 10px; 
        font-size: 24px;
        font-family: 'Roboto', sans-serif; 
        box-sizing: border-box;
        text-align: right; 
        border-radius: 5px;
    }
`;
