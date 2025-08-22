export const MESSAGES = {
    FORM_VALIDATION: {
        NAME_REQUIRED: "Пожалуйста, введите имя!",
        NAME_MIN_LENGTH: "Имя должно содержать минимум 2 символа!",
        NAME_MAX_LENGTH: "Имя не должно превышать 50 символов!",
        DATE_REQUIRED: "Пожалуйста, выберите дату!",
        AGE_REQUIRED: "Пожалуйста, введите возраст!",
        AGE_RANGE: "Возраст должен быть между 0 и 100!",
    },
    MODAL: {
        ADD_TITLE: "Добавить запись",
        UPDATE_TITLE: "Редактировать запись",
        SAVE_BUTTON: "Сохранить",
        CANCEL_BUTTON: "Отменить",
    },
    TABLE: {
        NAME_COLUMN: "Имя",
        DATE_COLUMN: "Дата",
        AGE_COLUMN: "Возраст",
        ACTIONS_COLUMN: "Действия",
    },
    DELETE_CONFIRMATION: {
        TITLE: "Удалить запись",
        DESCRIPTION: "Вы уверены, что хотите удалить эту запись?",
    },
    PLACEHOLDERS: {
        SEARCH: "Поиск...",
        NAME: "Введите имя",
        DATE: "Выберите дату",
        AGE: "Введите возраст",
    },
    BUTTONS: {
        ADD: "Добавить",
        EDIT: "Редактировать",
        DELETE: "Удалить",
        YES: "Да",
        NO: "Нет",
    },
    ERRORS: {
        FORM_VALIDATION: "Пожалуйста, исправьте ошибки в форме",
    },
} as const;
