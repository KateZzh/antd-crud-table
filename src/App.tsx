import { PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Modal } from "antd";
import type { SearchProps } from "antd/es/input";
import { useState } from "react";
import { PersonForm, PersonTable } from "./components";
import { MESSAGES, MOCK_PERSONS } from "./constants";
import { usePersonSearch } from "./hooks";
import type { Person, PersonFormData } from "./types";
import { generateId } from "./utils";

export const App = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [updatePerson, setUpdatePerson] = useState<Person | null>(null);
    const [searchText, setSearchText] = useState("");
    const [persons, setPersons] = useState<Person[]>(MOCK_PERSONS);

    const [form] = Form.useForm<PersonFormData>();

    const filteredPersons = usePersonSearch(persons, searchText);

    const handleSearch: SearchProps["onSearch"] = (value: string) => {
        setSearchText(value);
    };

    const handleDeletePerson = (id: string) => {
        setPersons((prevPersons) => prevPersons.filter((item) => item.id !== id));
    };

    const handleUpdatePerson = (person: Person) => {
        setUpdatePerson(person);
        form.setFieldsValue({
            name: person.name,
            date: person.date,
            age: person.age,
        });
        setIsOpenModal(true);
    };

    const handleSavePerson = async () => {
        try {
            const values = await form.validateFields();

            if (updatePerson) {
                setPersons((prevPersons) =>
                    prevPersons.map((person) =>
                        person.id === updatePerson.id ? { ...person, ...values } : person
                    )
                );
            } else {
                setPersons((prevPersons) => [{ id: generateId(), ...values }, ...prevPersons]);
            }

            handleCloseModal();
        } catch (error) {
            console.error(MESSAGES.ERRORS.FORM_VALIDATION);
        }
    };

    const handleCloseModal = () => {
        setUpdatePerson(null);
        form.resetFields();
        setIsOpenModal(false);
    };

    return (
        <main>
            <Flex vertical gap={20}>
                <Flex gap={10} justify='space-between'>
                    <Input.Search
                        name='search'
                        placeholder={MESSAGES.PLACEHOLDERS.SEARCH}
                        allowClear
                        onSearch={handleSearch}
                        style={{ maxWidth: "18.75rem" }}
                    />
                    <Button
                        type='primary'
                        icon={<PlusOutlined />}
                        onClick={() => setIsOpenModal(true)}
                    >
                        {MESSAGES.BUTTONS.ADD}
                    </Button>
                </Flex>

                <PersonTable
                    persons={filteredPersons}
                    onUpdate={handleUpdatePerson}
                    onDelete={handleDeletePerson}
                />
            </Flex>

            <Modal
                open={isOpenModal}
                title={updatePerson ? MESSAGES.MODAL.UPDATE_TITLE : MESSAGES.MODAL.ADD_TITLE}
                onOk={handleSavePerson}
                onCancel={handleCloseModal}
                width={500}
                okText={MESSAGES.MODAL.SAVE_BUTTON}
                cancelText={MESSAGES.MODAL.CANCEL_BUTTON}
                maskClosable={false}
            >
                <PersonForm form={form} />
            </Modal>
        </main>
    );
};
