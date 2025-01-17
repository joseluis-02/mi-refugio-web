import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../../../store'; // Asegúrate de importar el tipo RootState

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
