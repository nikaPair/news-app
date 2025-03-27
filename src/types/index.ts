export interface NewsItem {
    id: string;
    title: string;
    content: string;
    date: string;
}

export type NewsFormData = {
    title: string;
    content: string;
};
