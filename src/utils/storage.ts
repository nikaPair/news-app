import { NewsItem, NewsFormData } from "../types";

const STORAGE_KEY = "news_items";

export const getNewsItems = (): NewsItem[] => {
    const items = localStorage.getItem(STORAGE_KEY);
    return items ? JSON.parse(items) : [];
};

const saveNewsItems = (items: NewsItem[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

export const addNewsItem = (data: NewsFormData): void => {
    const newItem: NewsItem = {
        ...data,
        id: Date.now().toString(),
        date: new Date().toISOString(),
    };

    saveNewsItems([newItem, ...getNewsItems()]);
};

export const updateNewsItem = (item: NewsItem): void => {
    saveNewsItems(
        getNewsItems().map((existing) =>
            existing.id === item.id ? item : existing
        )
    );
};

export const deleteNewsItem = (id: string): void => {
    saveNewsItems(getNewsItems().filter((item) => item.id !== id));
};
