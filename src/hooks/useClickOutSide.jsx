import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom="button"){
    const [show, setShow] = useState(false);
    const nodeRef = useRef(null);
    useEffect(() =>{
        function dropdownClickOutSide(e){
            if (nodeRef.current && !nodeRef.current.contains(e.target)&&!e.target.matches(dom)){
                setShow(false);
            }
        }
        document.addEventListener("click",dropdownClickOutSide);
        return ()=>{
            document.removeEventListener("click",dropdownClickOutSide);
        }
    },[]);
    return {
        show,
        setShow,
        nodeRef
    }
}