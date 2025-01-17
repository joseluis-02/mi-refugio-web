
import { useRef, ReactNode } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { CustomButtonSctackHorizontalScrollable } from './CustomButtonSctackHorizontalScrollable';

interface CustomStackHorizontalScrollableProps {
    children: ReactNode
}
export const CustomStackHorizontalScrollable = ({ children }:CustomStackHorizontalScrollableProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Detecta si el tamaño es menor a `sm`

    const scroll = (direction: "left" | "right") => {
      if (!scrollContainerRef.current) return;
    
      try {
        const scrollAmount = 200; // Cantidad de desplazamiento en px
        const currentScrollPosition = scrollContainerRef.current.scrollLeft;
    
        // Realiza el scroll de forma segura
        scrollContainerRef.current.scrollTo({
          left:
            direction === "right"
              ? currentScrollPosition + scrollAmount
              : currentScrollPosition - scrollAmount,
          behavior: "smooth",
        });
      } catch (error) {
        console.error("Error al realizar scroll:", error);
      }
    };
    /*
    // Función para desplazar horizontalmente
    const scroll = (direction: "left" | "right") => {
      if (scrollContainerRef.current) {
        const scrollAmount = 200; // Cantidad de desplazamiento en px
        const currentScrollPosition = scrollContainerRef.current.scrollLeft;
  
        scrollContainerRef.current.scrollTo({
          left:
            direction === "right"
              ? currentScrollPosition + scrollAmount
              : currentScrollPosition - scrollAmount,
          behavior: "smooth",
        });
      }
    };
    */
  
  return (
    <Box 
    sx={{
    }}
    position="relative"
    width="100%"
    height='auto'
    alignContent='center'
    overflow="hidden">
    {/* Botón izquierdo (solo visible en pantallas grandes) */}
    {!isSmallScreen && (
        <CustomButtonSctackHorizontalScrollable
            direction="l"
            onScroll={scroll}
            iconMaterial=<ArrowBackIosNew />
         />
    )}

    {/* Contenedor desplazable */}
    <Box
      ref={scrollContainerRef}
      sx={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        display: "flex",
        scrollbarWidth: "none", // Ocultar scrollbar en navegadores compatibles
        "&::-webkit-scrollbar": {
          display: "none", // Ocultar scrollbar en Chrome y Safari
        },
      }}
    >
      { children }
    </Box>

    {/* Botón derecho (solo visible en pantallas grandes) */}
    {!isSmallScreen && (
        <CustomButtonSctackHorizontalScrollable
            direction="r"
            onScroll={scroll}
            iconMaterial=<ArrowForwardIos />
        />
    )}
  </Box>
  )
}
