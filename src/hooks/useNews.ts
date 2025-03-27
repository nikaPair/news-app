import { useState, useEffect } from "react";
import { NewsItem, NewsFormData } from "../types";
import {
    getNewsItems,
    addNewsItem,
    updateNewsItem,
    deleteNewsItem,
} from "../utils/storage";

export const useNews = () => {
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editingItem, setEditingItem] = useState<NewsItem | undefined>(
        undefined
    );

    const loadNewsItems = () => setNewsItems(getNewsItems());

    useEffect(() => {
        loadNewsItems();
    }, []);

    const resetForm = () => {
        setIsFormVisible(false);
        setEditingItem(undefined);
    };

    const handleAddClick = () => {
        setEditingItem(undefined);
        setIsFormVisible(true);
    };

    const handleEditItem = (item: NewsItem) => {
        setEditingItem(item);
        setIsFormVisible(true);
    };

    const handleDeleteItem = (id: string) => {
        if (window.confirm("Вы уверены, что хотите удалить эту новость?")) {
            deleteNewsItem(id);
            loadNewsItems();
        }
    };

    const handleFormSubmit = (data: NewsFormData) => {
        if (editingItem) {
            updateNewsItem({
                ...editingItem,
                ...data,
            });
        } else {
            addNewsItem(data);
        }

        loadNewsItems();
        resetForm();
    };

    return {
        newsItems,
        isFormVisible,
        editingItem,
        handleAddClick,
        handleEditItem,
        handleDeleteItem,
        handleFormSubmit,
        handleFormCancel: resetForm,
    };
};
