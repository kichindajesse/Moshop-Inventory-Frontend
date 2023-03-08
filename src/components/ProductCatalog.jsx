import { useState, useEffect } from 'react';
import { getCategories, updateCategory } from '../services/api';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';

const StyledHeading = styled(Typography)`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

function ProductCatalog() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCategories();
      setCategories(data);
    }
    fetchData();
  }, []);

  async function handleUpdateCategory(updatedCategory) {
    const updatedData = await updateCategory(updatedCategory);
    setCategories(categories.map((category) => category.id === updatedData.id ? updatedData : category));
  }

  return (
    <div>
      <StyledHeading variant="h1">Categories</StyledHeading>
      <StyledList>
        {categories.map((category) => (
          <StyledListItem key={category.id}>
            <Typography variant="body1">{category.name}</Typography>
            <Button variant="contained" onClick={() => handleUpdateCategory({ id: category.id, name: 'New Category Name' })}>Update</Button>
          </StyledListItem>
        ))}
      </StyledList>
    </div>
  );
}

export default ProductCatalog;

