import React from "react";
import CreatePage from "../pages/createPage";
import ChangePage from "../pages/changePage";

const Create = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    return (
        userData
            ? <ChangePage data={userData}/>
            : <CreatePage/>
    );
};

export default Create;
