import { useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useGetVerseQuery } from '../../../services';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const BookPage = () => {
  // Usamos useParams con el tipo BookParams
  const { name } = useParams();

  console.log( name )
  const [page, setPage] = useState(1);
  const {data: verse, isLoading  } = useGetVerseQuery({ name: name!, chapter: 10, verse:page});
  console.log(verse);
  const handleChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <>
    { isLoading && <p>Cargando</p>}
      <pre>{JSON.stringify(verse)}</pre>
      <Stack spacing={3}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </>
  )
}
