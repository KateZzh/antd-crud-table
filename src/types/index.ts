export type Person = {
    id: string;
    name: string;
    date: string;
    age: number;
};

export type PersonFormData = Omit<Person, "id">;
