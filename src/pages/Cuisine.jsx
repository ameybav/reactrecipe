import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getCuisine(params.type);
    },[params.type]);

    const getCuisine = async (name) => {
        const check = localStorage.getItem(name);
        if (check) {
            setCuisine(JSON.parse(check));
        } else {
            const uri = "https://api.spoonacular.com/recipes/complexSearch";
            const api = await fetch(`${uri}?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
            const data = await api.json();
            localStorage.setItem(name, JSON.stringify(data.results));
            setCuisine(data.results); 
        }
    }

    return (
        <Grid>
            {cuisine.map((r) => {
                return(
                    <Card key={r.id}  onClick={() => navigate(`/recipie/${r.title}`, {state: r})}>
                        <img src={r.image} />
                        <h4>{r.title}</h4>
                    </Card>
                )
            })}
        </Grid>
    )
}

const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;

export default Cuisine