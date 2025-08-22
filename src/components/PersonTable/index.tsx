import { Button, Popconfirm, Space, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import type { Person } from "../../types";
import { MESSAGES } from "../../constants";
import { dateFormatter } from "../../utils";

type Props = {
    persons: Person[];
    onUpdate: (person: Person) => void;
    onDelete: (id: string) => void;
};

export const PersonTable = ({ persons, onUpdate, onDelete }: Props) => {
    const columns: TableColumnsType<Person> = [
        {
            title: MESSAGES.TABLE.NAME_COLUMN,
            dataIndex: "name",
            sorter: (a, b) => a.name.localeCompare(b.name, "ru"),
        },
        {
            title: MESSAGES.TABLE.DATE_COLUMN,
            dataIndex: "date",
            render: (date: string) => dateFormatter(date),
            sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        },
        {
            title: MESSAGES.TABLE.AGE_COLUMN,
            dataIndex: "age",
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: MESSAGES.TABLE.ACTIONS_COLUMN,
            render: (_, person: Person) => (
                <Space>
                    <Button
                        title={MESSAGES.BUTTONS.EDIT}
                        icon={<EditOutlined />}
                        onClick={() => onUpdate(person)}
                    />
                    <Popconfirm
                        title={MESSAGES.DELETE_CONFIRMATION.TITLE}
                        description={MESSAGES.DELETE_CONFIRMATION.DESCRIPTION}
                        onConfirm={() => onDelete(person.id)}
                        okText={MESSAGES.BUTTONS.YES}
                        cancelText={MESSAGES.BUTTONS.NO}
                    >
                        <Button title={MESSAGES.BUTTONS.DELETE} icon={<DeleteOutlined />} />
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <Table<Person>
            columns={columns}
            dataSource={persons}
            showSorterTooltip={{ target: "sorter-icon" }}
            rowKey='id'
        />
    );
};
