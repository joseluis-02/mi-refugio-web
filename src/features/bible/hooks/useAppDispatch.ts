import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../store'; // Importa AppDispatch desde el store

export const useAppDispatch: () => AppDispatch = useDispatch;
