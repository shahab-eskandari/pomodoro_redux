import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Themes {
    mode: "dark-content" | "white-content"
}

const initialState: Themes = {
    mode: "dark-content",
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggle: (state)=>{
            if(state.mode === "dark-content"){
                state.mode = "white-content";
            }else{
                state.mode = "dark-content";
            }
        }
    }
})
export const selectTheme = (state: RootState) => state.theme.mode;
export const {toggle} = themeSlice.actions;
export default themeSlice.reducer;
