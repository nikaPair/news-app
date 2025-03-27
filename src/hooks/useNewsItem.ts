import { useMemo } from "react";

export const useFormatDate = (dateStr: string): string =>
    useMemo(
        () =>
            new Date(dateStr).toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }),
        [dateStr]
    );
