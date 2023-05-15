import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

function Searched() {

    const [search, setSearch] = useState([]);
    let params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getSearched(params.search);
    },[params.search]);

    const getSearched = async (name) => {
        const check = localStorage.getItem(name);
        if (check) {
            setSearch(JSON.parse(check));
        } else {
            const uri = "https://api.spoonacular.com/recipes/complexSearch";
            const api = await fetch(`${uri}?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`);
            const data = await api.json();
            localStorage.setItem(name, JSON.stringify(data.results));
            setSearch(data.results); 
        }
    }

  return (
    <div>
        <Grid>
            {search.map((item) => {
                return(
                    <Card key={item.id}  onClick={() => navigate(`/recipie/${item.title}`, {state: item})}>
                        <img src={item.image} alt=''/>
                        <h4>{item.title}</h4>
                    </Card>
                )
            })};
        </Grid>
    </div>
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

export default Searched