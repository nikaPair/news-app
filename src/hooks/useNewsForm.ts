import { useState, useEffect } from "react";
import { NewsItem, NewsFormData } from "../types";

export const useNewsForm = (initialData?: NewsItem) => {
    const [formData, setFormData] = useState<NewsFormData>({
        title: "",
        content: "",
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                title: initialData.title,
                content: initialData.content,
            });
        } else {
            setFormData({ title: "", content: "" });
        }
    }, [initialData]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return {
        formData,
        handleChange,
    };
};
