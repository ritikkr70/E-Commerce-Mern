<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;
=======
import React from 'react'
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container=styled.div`
  display:flex;
  padding: 20px;
  justify-content: space-between;
`
>>>>>>> d2253d2df49bd478ab0c47ff53289f9b5f9cf7af

const Categories = () => {
  return (
    <Container>
<<<<<<< HEAD
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
=======
      {categories.map(item=>(
        <CategoryItem item={item}/>
      ))}
    </Container>
  );
}

export default Categories
>>>>>>> d2253d2df49bd478ab0c47ff53289f9b5f9cf7af
