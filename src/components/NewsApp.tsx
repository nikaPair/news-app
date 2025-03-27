import React from "react";
import { useNewsContext } from "../hooks/NewsContext";
import NewsList from "./NewsList";
import NewsForm from "./NewsForm";

const NewsApp = () => {
    const {
        isFormVisible,
        editingItem,
        handleAddClick,
        handleFormSubmit,
        handleFormCancel,
    } = useNewsContext();

    return (
        <div className="news-app">
            <header className="app-header">
                <h1>Новости</h1>
                <button className="btn btn-add" onClick={handleAddClick}>
                    Добавить новость
                </button>
            </header>

            {isFormVisible ? (
                <div className="form-container">
                    <h2>
                        {editingItem ? "Редактировать" : "Добавить"} новость
                    </h2>
                    <NewsForm
                        initialData={editingItem}
                        onSubmit={handleFormSubmit}
                        onCancel={handleFormCancel}
                    />
                </div>
            ) : (
                <NewsList />
            )}
        </div>
    );
};

export default NewsApp;
