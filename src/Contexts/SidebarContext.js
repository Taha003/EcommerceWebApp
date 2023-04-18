import React,{useContext,useState} from 'react'

let SidebarContext=React.createContext();

const SidebarProvider=({children})=>{
    let [isSidebarOpen,setSidebarOpen]=useState(false)
    const closeSidebar=()=>{
        setSidebarOpen(false)
    }
    const OpenSidebar=()=>{
        setSidebarOpen(true)
    }
    return <SidebarContext.Provider value={{isSidebarOpen,closeSidebar,OpenSidebar,setSidebarOpen}}>
        {children}
    </SidebarContext.Provider>
}

export {SidebarProvider}
const useGlobalSidebarContext=()=>{
    return useContext(SidebarContext)
}
export {useGlobalSidebarContext}