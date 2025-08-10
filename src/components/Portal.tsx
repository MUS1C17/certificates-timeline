import { createPortal } from "react-dom";
import {type ReactNode, useEffect, useState } from "react";

export default function Portal({children}: {children: ReactNode}){
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return mounted ? createPortal(children, document.body) : null;
}