import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Config {
    pomodoroDuration: number
    breakDuration: number
}

const initialState: Config = {
    pomodoroDuration: 25,
    breakDuration: 5,
}

export const configSlice = createSlice({
    name: "config",
    initialState,
    reducers:{
        setPomodoroDuration:(state, action:PayloadAction<number>)=>{
            state.pomodoroDuration = action.payload;
        },
        setBreakDuration:(state, action:PayloadAction<number>)=>{
            state.breakDuration = action.payload;
        }
    }
});

export const {setPomodoroDuration, setBreakDuration}=configSlice.actions;

export default configSlice.reducer;

export const selectConfig = (state: RootState) => state.config;