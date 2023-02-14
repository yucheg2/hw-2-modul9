import React from "react";
import { Link } from "react-router-dom";

const CardPage = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const ageWord = () => {
        const age = new Date().getFullYear() - userData.date;
        const ageWord = age.toString();
        if (age > 4 && age < 21) {
            return `(${age} лет)`;
        } else if (ageWord[ageWord.length - 1] === 1) {
            return `(${age} год)`;
        } else {
            return `(${age} года)`;
        }
    };
    return (
        <div className="container mt-5" >
            <h1 className="fw-bold mb-3">Карточка студента</h1>
            {!userData
                ? <>
                    <p className="fw-semibold">Нет данных</p>
                    <Link to="/create" className="btn btn-primary">Добавить</Link>
                </>
                : <>
                    <p><b>Имя:</b> {userData.name}</p>
                    <p><b>Фамилия:</b> {userData.secondName}</p>
                    <p><b>Год рождения:</b> {userData.date} {ageWord()}</p>
                    <p><b>Портфолио:</b> <a href={userData.portfolioUrl}>{userData.portfolioUrl}</a></p>
                    <Link to="/create" className="btn btn-primary">Редактировать</Link>
                </>}
        </div>
    );
};

export default CardPage;
