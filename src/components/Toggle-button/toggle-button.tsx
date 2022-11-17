import './toggle-button.css'
import { useAppDispatch } from '../../app/hooks';
import { toggle } from '../../features/themeSlice/themeSlice';

const ToggleButton = ()=> {
 
    const dispatch = useAppDispatch();

    return(
        <> 
            <input 
                type="checkbox" 
                id="toggle_checkbox"
                onClick={()=>dispatch(toggle())}
            />
            
            <label htmlFor="toggle_checkbox" className='toggle-label'>
                <div id="star">
                    <div className="star" id="star-1">★</div>
                    <div className="star" id="star-2">★</div>
                </div>
                <div id="moon"></div>
            </label>
        </>
    )    
}

export default ToggleButton

