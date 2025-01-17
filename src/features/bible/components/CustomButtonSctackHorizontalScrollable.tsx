import { ReactNode } from "react";
import { IconButton } from "@mui/material"


interface CustomButtonSctackHorizontalScrollableProps {
    onScroll: (direction: "left" | "right") => void;
    direction: string;
    iconMaterial: ReactNode;
}
export const CustomButtonSctackHorizontalScrollable = ({ onScroll, direction, iconMaterial}:CustomButtonSctackHorizontalScrollableProps) => {
  
  return (
    <IconButton
        onClick={() => onScroll( direction==='l' ? 'left':'right')}
        sx={{
          marginLeft: direction==='l' ? 2 : 0,
          marginRight: direction==='l' ? 0 : 2,
          position: "absolute",
          left: direction === 'l' ? 0 : null,
          right: direction === 'r' ? 0 : null,
          top: '25%',
          transform: "translateY(-50%)",
          zIndex: 1,
          bgcolor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          minWidth: "35px",
          height: "35px",
          borderRadius: "50%",
        }}>
        {iconMaterial}
      </IconButton>
  )
}
