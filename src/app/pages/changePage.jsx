import React, { useEffect, useState } from "react";
import TextInput from "../components/textInput";
import { validator } from "../utils/validator";
import Modal from "../components/modal";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const ChangePage = ({ data }) => {
    const [value, setValue] = useState({ name: data.name, secondName: data.secondName, date: data.date, portfolioUrl: data.portfolioUrl });
    const [errors, setErrors] = useState({});
    const { replace } = useHistory();
    const handleChange = ({ target }) => {
        setValue((prev) => ({
            ...prev,
            [target.name]: target.value
        }));
    };
    useEffect(() => {
        validate();
    }, [value]);

    const validate = () => {
        const errors = validator(value, validatorConfig);
        setErrors(errors);
    };
    const validatorConfig = {
        name: {
            isRequired: { message: "Поле 'Имя' должго быть заполненым" },
            isName: { message: "Поле 'Имя' введено не коректно" }
        },
        secondName: {
            isRequired: { message: "Поле 'Фамилия' должго быть заполненым" },
            issecondName: { message: "Поле 'Фамилия' введено не коректно" }
        },
        date: {
            isRequired: { message: "Поле 'Год рождения' должго быть заполненым" },
            isdate: { message: "Поле 'Год рождения' введено не коректно" }
        },
        portfolioUrl: {
            isRequired: { message: "Поле 'Портфолио' должго быть заполненым" },
            isportfolioUrl: { message: "Поле 'Портфолио' введено не коректно" }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(value));
    };
    const handleBack = () => {
        replace("/");
    };
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Создать</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <TextInput
                            name='name'
                            label='Имя'
                            value={value.name}
                            onChange={handleChange}
                            error = {errors.name}
                            hasValidate= {false}
                        />
                        <TextInput
                            name='secondName'
                            label='Фамилия'
                            value={value.secondName}
                            onChange={handleChange}
                            error = {errors.secondName}
                            hasValidate= {false}
                        />
                        <TextInput
                            name='date'
                            type='number'
                            label='Год рождения'
                            value={value.date}
                            onChange={handleChange}
                            error = {errors.date}
                            hasValidate= {false}
                        />
                        <TextInput
                            name='portfolioUrl'
                            label='Портфолио'
                            value={value.portfolioUrl}
                            onChange={handleChange}
                            error = {errors.portfolioUrl}
                            hasValidate= {false}
                        />
                        <button
                            className='btn btn-secondary me-3'
                            type="button"
                            onClick={handleBack}
                        >
                            Назад
                        </button>
                        <button
                            className='btn btn-primary'
                            disabled={Object.keys(errors).length > 0}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                        Обновить
                        </button>
                    </form>
                </div>
            </div>
            <Modal/>
        </div>
    );
};

ChangePage.propTypes = {
    data: PropTypes.object
};

export default ChangePage;
