import { useRef, useEffect } from 'react';
import cn from 'classnames';
import { createPortal } from 'react-dom';
import '../../styles/global.css'
import useMountTransition from '../../app/hooks/useMountTransition';
import {useAppSelector} from '../../../src/app/hooks';
import { selectTheme } from '../../features/themeSlice/themeSlice';

type DrawerProps = {
    isOpen: boolean
    children: React.ReactNode
    className: string
    onClose: ()=>void
    position: string
    removeContentWhileClosed: boolean 
}
const Drawer = ({
    isOpen,
    children,
    className,
    onClose,
    position = 'left',
    removeContentWhileClosed = true
}: DrawerProps) => {

    const bodyRef = useRef(document.querySelector("body")!);
    const portalRootRef = useRef(document.getElementById('drawer-root') || createPortalRoot());
    const isTransitioning = useMountTransition(isOpen, 1000);

    const theme = useAppSelector(selectTheme);

    useEffect(()=>{
        const pageScroll = ()=>{ 
            if(isOpen){
                bodyRef.current.style.overflow ="hidden";
            }else{
                bodyRef.current.style.overflow="";
            }
        }
        pageScroll();
    },[isOpen])

    useEffect(() => {
        bodyRef.current.appendChild(portalRootRef.current);    
        const portal = portalRootRef.current;    
        const bodyEl = bodyRef.current;    
        return () => {      
            // Clean up the portal when drawer component unmounts      
            portal.remove();      
            // Ensure scroll overflow is removed      
            bodyEl.style.overflow = '';    
        }
    })

    // Handling scape key for closing the sidebar 
    useEffect(() => {
        const onKeyPress = (e:any) => {
          if (e.key === 'Escape') {
            onClose();
          }
        }
      
        if (isOpen) {
          window.addEventListener('keyup', onKeyPress);
        }
      
        return () => {
          window.removeEventListener('keyup', onKeyPress);
        }
      }, [isOpen, onClose]);

    function createPortalRoot() {  
        const drawerRoot = document.createElement('div');  
        drawerRoot.setAttribute('id', 'drawer-root');  
        return drawerRoot;
    }

    if (!isTransitioning && removeContentWhileClosed && !isOpen) return null; 

    return createPortal(
        <>
            <div
                aria-hidden={isOpen ? "false" : "true"}
                className={
                    cn("drawer__container", {
                    open: isOpen,
                    in: isTransitioning,
                    className
                    })
                }
            >

                <div
                className={cn("drawer", position, theme)}
                role="dialog"
                >
                {children}
                </div>
                <div className="backdrop" onClick={onClose} />
            </div>
        </>, portalRootRef.current
    );
    
}

export default Drawer;