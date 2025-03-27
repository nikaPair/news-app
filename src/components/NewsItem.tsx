import React from "react";
import { NewsItem as NewsItemType } from "../types";
import { useFormatDate } from "../hooks/useNewsItem";

type NewsItemProps = {
    item: NewsItemType;
    onEdit: (item: NewsItemType) => void;
    onDelete: (id: string) => void;
};

const NewsItem = ({ item, onEdit, onDelete }: NewsItemProps) => {
    const formattedDate = useFormatDate(item.date);

    return (
        <div className="news-item">
            <h3 className="news-title">{item.title}</h3>
            <div className="news-meta">
                <span className="news-date">{formattedDate}</span>
            </div>
            <p className="news-content">{item.content}</p>
            <div className="news-actions">
                <button
                    className="btn btn-edit"
                    onClick={() => onEdit(item)}
                    aria-label="Редактировать">
                    Редактировать
                </button>
                <button
                    className="btn btn-delete"
                    onClick={() => onDelete(item.id)}
                    aria-label="Удалить">
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default NewsItem;
