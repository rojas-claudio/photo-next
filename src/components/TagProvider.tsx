'use client'
import { createContext, useContext, useState } from 'react';

type TagContextType = {
    tag: string;
    setTag: (newTag: string) => void;
}

const defaultTag = "DefaultTag"
const TagContext = createContext<TagContextType | undefined>(undefined);

export const TagProvider = ({children}: {children: React.ReactNode}) => {
    const [tag, setTag] = useState("DefaultTag");

    return (
        <TagContext.Provider value={{ tag, setTag }}>
            { children }
        </TagContext.Provider>
    )
}

export const useTag = () => {
    const context = useContext(TagContext)
    if (!context) {
        throw new Error("useTag must be used within a TagProvider");
    }
    return context;
}