import { useMemo } from "react";

import { dateFormatter } from "../utils";
import type { Person } from "../types";

export const usePersonSearch = (persons: Person[], searchText: string) => {
    return useMemo(() => {
        if (!searchText.trim()) return persons;

        return persons.filter(
            (person) =>
                person.name.toLowerCase().includes(searchText.toLowerCase()) ||
                dateFormatter(person.date).includes(searchText) ||
                person.age.toString().includes(searchText)
        );
    }, [persons, searchText]);
};
