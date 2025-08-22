export const dateFormatter = (date: string): string => {
    return new Date(date).toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
};
