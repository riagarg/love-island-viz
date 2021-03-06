import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 60vw;
    text-align: center;
    background-color: #ed6b83ff;
    color: rgba(255,250,236,1);
    font-size: 1rem;
    padding: 4vh 20vw;
    a{
        font-weight: 700;
        color: inherit;
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }
`
const Disclaimer = styled.div`
    font-size: 0.5rem;
    margin-top: 2vh;
    opacity: 0.5;
`

export default function Footer() {
    return(
        <Wrapper>
            Visit our <a href="https://github.com/rounakbera/gbbo-riskiness/">Github repo</a> for our write up on how this was made. Created with <a href="https://formidable.com/open-source/victory/">Victory</a> and <a href="https://github.com/jsonkao/react-scrollama">React-Scrollama</a>.

            <Disclaimer>
                In all seriousness, this site may contain copyrighted material, the use of which has not been specifically authorized by the copyright holders. The use of copyright materials is presented for non-profit education purposes only. Copyright Disclaimer under section 107 of the Copyright Act of 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. The views and opinions expressed in the media and comments on this site are those of the authors and do not reflect the views and opinions held by the copyright holders.
            </Disclaimer>
        </Wrapper>
    )
}