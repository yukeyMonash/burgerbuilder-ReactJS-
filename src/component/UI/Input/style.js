import styled from 'styled-components';

export const Input = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    .inputElement {
        outline: none;
        border: 1px solid #ccc;
        background-color: white;
        font: inherit;
        padding: 6px 10px;
        display: block;
        width: 100%;
        box-sizing: border-box;
        &:focus {
            outline: none;
            background-color: #ccc;
        }
    }
    .Invalid {
        border: 1px solid red;
        background-color: #FDA49A;
    }
`;

export const Label = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
`;



