import { useState } from "react";
import Counter from "../Counter/counter";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import { selectTheme } from "../../features/themeSlice/themeSlice";
import { selectConfig, setPomodoroDuration, setBreakDuration } from "../../features/config/configSlice";
type SettingProps = {
    openDrawer: (state: boolean)=>void
}

export default function Setting( props: SettingProps) {

    const config = useAppSelector(selectConfig);
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();
    const [focusDuration, setFocusDuration] = useState(config.pomodoroDuration);
    const [breakTime, setBreakTime] = useState(config.breakDuration);
    
    return (
    <>
        <div className="setting__container">
            
            <div className="setting__row">
                <label htmlFor='pomodoro_duration'>Pomodoro Duration</label>
                <Counter value={focusDuration} setValue={setFocusDuration} />
            </div>
            
            <div className="setting__row">
                <label htmlFor='break_duration'>Break Duration</label>
                <Counter value={breakTime} setValue={setBreakTime}/>
            </div>
        </div>
        <div className="setting__btn-container">
            <button
                className={`btn ${theme}-btn`}
                onClick={()=>props.openDrawer(false)}
            >
                Cancel
            </button>

            <button
                className={`btn ${theme}-btn`}
                onClick={()=>{
                    dispatch(setPomodoroDuration(focusDuration));
                    dispatch(setBreakDuration(breakTime));
                    props.openDrawer(false);
                }
                }
            >
                Save Changes
            </button>
        </div>

    </>
    )
}
