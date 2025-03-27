import React from "react";
import { useNewsContext } from "../hooks/NewsContext";
import NewsItem from "./NewsItem";

const NewsList = () => {
    const { newsItems, handleEditItem, handleDeleteItem } = useNewsContext();

    if (!newsItems.length) {
        return (
            <div className="news-list-empty">
                <p>Нет новостей для отображения</p>
            </div>
        );
    }

    return (
        <div className="news-list">
            {newsItems.map((item) => (
                <NewsItem
                    key={item.id}
                    item={item}
                    onEdit={handleEditItem}
                    onDelete={handleDeleteItem}
                />
            ))}
        </div>
    );
};

export default NewsList;
