import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: '#fff',
  border: '1px solid',
  borderColor: '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
    borderColor: '#444d58',
  }),
}));

export default function OffsetGrid() {
  return (
    <Grid container spacing={3} sx={{ flexGrow: 1 }}>
      <Grid xs={6} xsOffset={3} md={2} mdOffset={0}>
        <Item>1</Item>
      </Grid>
      <Grid xs={4} md={2} mdOffset="auto">
        <Item>2</Item>
      </Grid>
      <Grid xs={4} xsOffset={4} md={2} mdOffset={0}>
        <Item>3</Item>
      </Grid>
      <Grid xs md={6} mdOffset={2}>
        <Item>4</Item>
      </Grid>
    </Grid>
  );
}
