import { Form, Input, InputNumber } from "antd";
import type { FormInstance } from "antd";
import { MESSAGES } from "../../constants/messages";
import type { PersonFormData } from "../../types";

export type PersonFormInstance = FormInstance<PersonFormData>;

type Props = {
    form: PersonFormInstance;
};

export const PersonForm = ({ form }: Props) => {
    return (
        <Form
            name='person-form'
            form={form}
            layout='vertical'
            style={{ marginTop: "1.5rem" }}
            preserve={false}
        >
            <Form.Item
                label={MESSAGES.TABLE.NAME_COLUMN}
                name='name'
                rules={[
                    { required: true, message: MESSAGES.FORM_VALIDATION.NAME_REQUIRED },
                    { min: 2, message: MESSAGES.FORM_VALIDATION.NAME_MIN_LENGTH },
                    { max: 50, message: MESSAGES.FORM_VALIDATION.NAME_MAX_LENGTH },
                ]}
            >
                <Input placeholder={MESSAGES.PLACEHOLDERS.NAME} />
            </Form.Item>

            <Form.Item
                label={MESSAGES.TABLE.DATE_COLUMN}
                name='date'
                rules={[{ required: true, message: MESSAGES.FORM_VALIDATION.DATE_REQUIRED }]}
            >
                <Input
                    type='date'
                    style={{ width: "100%" }}
                    placeholder={MESSAGES.PLACEHOLDERS.DATE}
                />
            </Form.Item>

            <Form.Item
                label={MESSAGES.TABLE.AGE_COLUMN}
                name='age'
                rules={[
                    { required: true, message: MESSAGES.FORM_VALIDATION.AGE_REQUIRED },
                    {
                        type: "number",
                        min: 0,
                        max: 100,
                        message: MESSAGES.FORM_VALIDATION.AGE_RANGE,
                    },
                ]}
            >
                <InputNumber
                    style={{ width: "100%" }}
                    placeholder={MESSAGES.PLACEHOLDERS.AGE}
                    min={0}
                    max={100}
                />
            </Form.Item>
        </Form>
    );
};
