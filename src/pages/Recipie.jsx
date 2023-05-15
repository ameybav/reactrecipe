import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components';

function Recipie() {
    // const navigate = useNavigate();
    const location = useLocation();
    const value = location.state;
    return (
            <DetailWrapper>
                <div>
                    <h2>{value.title}</h2>
                    <img src={value.image} alt=''/>
                </div>
                <Info>
                    <Button>
                        Instructions
                    </Button>
                    <Button>
                        Ingredients
                    </Button>
                    <div>
                        <h3 dangerouslySetInnerHTML={{__html: value.summary}}></h3>
                        <h3 dangerouslySetInnerHTML={{__html: value.instructions}}></h3>
                    </div>
                </Info>
            </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;

export default Recipie