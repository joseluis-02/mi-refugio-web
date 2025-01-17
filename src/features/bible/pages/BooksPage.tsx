import { useState } from "react";
import { Box, Stack, Radio, Typography, FormControlLabel, CircularProgress, Card, CardContent, CardActions, Container } from "@mui/material";
import { CustomStackHorizontalScrollable } from '../components/CustomStackHorizontalScrollable';
import { useGetBookByNameAndChapterQuery, useGetBooksQuery, useGetVerseQuery } from "../../../services";


const BooksPage = () => {
  
  const {data: books, isError:isErrorBooks, isLoading:isLoadingBooks, isSuccess:isSuccessBooks, isFetching:isFetchingBooks } = useGetBooksQuery();
  const [selectedBook, setSelectedBook] = useState<string>();
  const [chapters, setChapters] = useState<number[]>([]);
  const [selectedVerseNumber, setselectedVerseNumber] = useState<number>()
  const [selectedChapter, setselectedChapter] = useState<number>();
  const { data: verses, isLoading: isLoadingVerses, isSuccess:isSuccessVerses, isFetching:isFetchingVerses } = useGetBookByNameAndChapterQuery({
    name:selectedBook || '',
    chapter:selectedChapter || 0}, {skip:(selectedBook === undefined || selectedChapter===undefined)?true:false});
  const {data:verse, isLoading:isLoadingVerse, isSuccess:isSuccessVerse, isFetching:isFetchingVerse } = useGetVerseQuery({
    name:selectedBook || '',
    chapter:selectedChapter || 0,
    verse:selectedVerseNumber || 0
  }, {skip:(selectedBook === undefined || selectedChapter===undefined || selectedVerseNumber === undefined)?true:false});
  //console.log(verse);
  /*
  const handleChange = ( event:ChangeEvent<HTMLInputElement> ) => {
    console.log(event.target.value);
    //setPage(value);
  };
  */
  return isErrorBooks
  ?  <Typography variant="overline" sx={{ mt:2 }} >No se pudo conectarse al servidor (revise su conexión a internet)</Typography>
  :  <Container maxWidth='md'>
        <Typography variant="h4" component='h1' gutterBottom sx={{ display: 'block', textAlign:'center', mt:2 }}>
          Biblia Reina Valera 1960
        </Typography>
        {
          isLoadingBooks || isFetchingBooks
          ? <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%", // Se asegura de ocupar todo el ancho disponible
              }}
            >
              <CircularProgress sx={{ my:1, color:'#84A9BC'}} />
            </Box>
          : isSuccessBooks && <CustomStackHorizontalScrollable>
                                      <Stack
                                        sx={{
                                          paddingTop:2,
                                          paddingBottom:2,
                                        }}
                                        direction="row" 
                                        spacing={2}
                                        px={2}>
                                        {
                                          books.map((book) => (
                                                      <Box
                                                        key={book.abrev}
                                                        sx={{
                                                          width: 200,
                                                          height: 120,
                                                          bgcolor: "#2F3E46",
                                                          color: "#fff",
                                                          display: "flex",
                                                          flexDirection: "column",
                                                          justifyContent: "space-between",
                                                          alignItems: "center",
                                                          borderRadius: 2,
                                                          p: 2,
                                                          boxShadow: selectedBook === book.abrev ? "0 0 10px 2px #354F52" : "none",
                                                          transition: "box-shadow 0.2s ease",
                                                        }}
                                                      >
                                                        {/* Nombre del libro */}
                                                        <Typography variant="h6" textAlign="center">
                                                          {book.name}
                                                        </Typography>
                                          
                                                        {/* Descripción */}
                                                        <Typography
                                                          variant="body2"
                                                          textAlign="center"
                                                          sx={{ fontSize: "0.8rem", color: "text.secondary" }}
                                                        >
                                                          {book.testament}
                                                        </Typography>
                                          
                                                        {/* Radio Button */}
                                                            <Radio
                                                              sx={{
                                                                '& .MuiSvgIcon-root': {
                                                                  fontSize: 30,
                                                                  color:'#84A98C'
                                                                },
                                                              }}
                                                              checked={selectedBook === book.abrev}
                                                              onChange={() => {
                                                                const newNumbers = Array.from({ length: book.chapters }, (_, index) => index + 1);
                                                                setChapters(newNumbers)
                                                                setSelectedBook(book.abrev)
                                                                setselectedChapter(1);
                                                                setselectedVerseNumber(1);
                                                              }}
                                                              value={book.abrev}
                                                              color="primary"
                                                            />
                                                      </Box>
                                          ))
                                        }
                                      </Stack>
                              </CustomStackHorizontalScrollable>
          
        }
        {
          selectedBook && <CustomStackHorizontalScrollable>
              <Stack
                sx={{
                  paddingTop:2,
                  paddingBottom:2,
                  
                }}
                direction="row" 
                spacing={2}
                px={2}>
                
                  {
                    chapters.map(
                      (num) =>  <FormControlLabel
                                  sx={{
                                    p:1,
                                  }}
                                  key={num}
                                  value={num}
                                  control={<Radio
                                            sx={{
                                              bgcolor:'#2F3E46',
                                              p:1.5,
                                              '& .MuiSvgIcon-root': {
                                                fontSize: 25,
                                                color:'#CAD2C5',
                                              },
                                            }}
                                            checked={selectedChapter === num}
                                            onChange={() => {
                                              setselectedChapter(num);
                                              setselectedVerseNumber(1);
                                            }}
                                            value={num}
                                          />}
                                  label={'capítulo '+num}
                                  labelPlacement="top"
                                />
                    )
                  }
                  
                </Stack>
              </CustomStackHorizontalScrollable>
        }
        {
          isLoadingVerses || isFetchingVerses
            ? <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%", // Se asegura de ocupar todo el ancho disponible
                }}
              >
                <CircularProgress sx={{ my:1, color:'#84A9BC'}} />
              </Box>
            : isSuccessVerses &&  <CustomStackHorizontalScrollable>
                                                  <Stack
                                                  sx={{
                                                    paddingTop:2,
                                                    paddingBottom:2,
                                                    
                                                  }}
                                                  direction="row" 
                                                  spacing={2}
                                                  px={2}>
                                                    
                                                    {
                                                      verses.map(
                                                        (verse) =>  <FormControlLabel
                                                                    sx={{
                                                                      p:1,
                                                                    }}
                                                                    key={verse.id}
                                                                    value={verse.number}
                                                                    control={<Radio
                                                                              sx={{
                                                                                bgcolor:'#2F3E46',
                                                                                p:1.5,
                                                                                '& .MuiSvgIcon-root': {
                                                                                  fontSize: 25,
                                                                                  color:'#CAD2C5',
                                                                                },
                                                                              }}
                                                                              checked={selectedVerseNumber === verse.number}
                                                                              onChange={() => {
                                                                                //console.log(verse)
                                                                                setselectedVerseNumber(verse.number);
                                                                              }}
                                                                              value={verse.number}
                                                                            />}
                                                                    label={'versículo '+verse.number}
                                                                    labelPlacement="top"
                                                                  />
                                                      )
                                                    }
                                                    
                                                  </Stack>
                                  </CustomStackHorizontalScrollable>
            
        }
        
        {
          isLoadingVerse || isFetchingVerse
            ? <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <CircularProgress sx={{ my:1, color:'#84A9BC'}} />
              </Box>
            : isSuccessVerse && <Card sx={{ minWidth: 175, m:1 }}>
                                  <CardContent>
                                    { verse.study && <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 15 }}>Estudio: {verse.study}</Typography>}
                                    <Typography variant="h5" component="div">
                                      {verse.verse}
                                    </Typography>
                                  </CardContent>
                                  <CardActions>
                                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 15 }}>
                                      {selectedBook+'.'} { selectedChapter+','}{selectedVerseNumber}
                                    </Typography>
                                  </CardActions>
                                </Card>
        }
        {
          /*
          <pre>
            {'Libro seleccionado: '+JSON.stringify( selectedBook )} <br/>
            {'Capítulo seleccionado: '+ JSON.stringify(selectedChapter)} <br />
            {'Versículo seleccionado: '+JSON.stringify(selectedVerseNumber)} <br/>
            {'Fetch Verse: '+JSON.stringify(isFetchingVerse)}<br/>
            {'Success Verse: '+JSON.stringify(isSuccessVerse)}<br/>
            {'Success Verses: '+JSON.stringify(isSuccessVerses)}<br/>
            {'Loading Verses: '+JSON.stringify(isLoadingVerses)}<br/>
            {'Fetch Verses: '+JSON.stringify(isFetchingVerses)}<br/>
          </pre>
          */
        }
      </Container>

};

export default BooksPage;
