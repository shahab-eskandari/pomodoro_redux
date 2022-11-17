import {useAppDispatch, useAppSelector} from "../../../src/app/hooks"
import { selectTheme, toggle } from "./themeSlice";
//import { useState } from "react";

export function Theme(){
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();
    //const [themeValue, setThemeValue]=useState("dark-content")
    return(
        <div>
            <button
                onClick={()=>dispatch(toggle())}
            >
                Change Theme
            </button>
            <span>{theme}</span>
        </div>
    )
}