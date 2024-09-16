import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a {
        color: #ffffff;
        margin-top:20px;
        text-decoration:underline;
        text-decoration-color: #03b6fc; 
    }

    button.remover {
        background: none;
        border: none;
        color: #ffffff;
        margin-top: 20px;
        cursor: pointer;
        font-size: 16px;
        text-decoration:underline;
        text-decoration-color: #03b6fc; 
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`;
