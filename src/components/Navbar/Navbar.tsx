
import { useAppSelector } from "../../app/hooks" 
import { selectTheme } from "../../features/themeSlice/themeSlice";
import ToggleButton from "../Toggle-button/toggle-button";

type NavbarProps = {
    openDrawer: (state: boolean)=>void
}

const Navbar = (props: NavbarProps)=>{
    
    const theme = useAppSelector(selectTheme)

    return(   
        <nav>
            <div>
                <ul className="nav-link">
                    <li>
                        <a 
                            className={`${theme}-a`}
                            href="/">
                            Project
                        </a>
                    </li>
                    <li>
                        <a
                            className={`${theme}-a`} 
                            href="/">
                            Task Manager
                        </a>
                    </li>
                    <li>
                        <button
                            className={`nav__btn ${theme}-a`} 
                            onClick={()=>props.openDrawer(true)}>
                            Setting
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <ToggleButton/>
            </div>
        </nav>
    )
}

export default Navbar