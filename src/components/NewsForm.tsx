import React from "react";
import { NewsItem, NewsFormData } from "../types";
import { useNewsForm } from "../hooks/useNewsForm";

type NewsFormProps = {
    initialData?: NewsItem;
    onSubmit: (data: NewsFormData) => void;
    onCancel: () => void;
};

const NewsForm: React.FC<NewsFormProps> = ({
    initialData,
    onSubmit,
    onCancel,
}) => {
    const { formData, handleChange } = useNewsForm(initialData);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="news-form">
            <div className="form-group">
                <label htmlFor="title">Заголовок</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="Введите заголовок новости"
                />
            </div>
            <div className="form-group">
                <label htmlFor="content">Содержание</label>
                <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    placeholder="Введите текст новости"
                    rows={5}
                />
            </div>
            <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                    {initialData ? "Сохранить" : "Добавить"}
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onCancel}>
                    Отмена
                </button>
            </div>
        </form>
    );
};

export default NewsForm;
