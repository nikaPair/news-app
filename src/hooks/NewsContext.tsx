import React, { createContext, useContext } from "react";
import { NewsItem, NewsFormData } from "../types";
import { useNews } from "./useNews";

type NewsContextType = ReturnType<typeof useNews>;

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => <NewsContext.Provider value={useNews()}>{children}</NewsContext.Provider>;

export const useNewsContext = (): NewsContextType => {
    const context = useContext(NewsContext);
    if (!context) {
        throw new Error(
            "useNewsContext должен использоваться внутри NewsProvider"
        );
    }
    return context;
};
