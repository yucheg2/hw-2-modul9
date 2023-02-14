export function validator(data, config) {
    const errors = {};
    function validate(validateMetchod, data, config) {
        let statusValidate;
        switch (validateMetchod) {
        case "isRequired":
            statusValidate = data.trim() === "";
            break;
        case "isName":{
            const nameRegExp = /\D+/g;
            statusValidate = !nameRegExp.test(data);
            break;
        }
        case "issecondName":{
            const nameRegExp = /\D+/g;
            statusValidate = !nameRegExp.test(data);
            break;
        }
        case "isdate":{
            statusValidate = !(data > 1950 && data < new Date().getFullYear());
            break;
        }
        case "isportfolioUrl":{
            const urlRegExp = /https:\/\/github\.com/g;
            statusValidate = !urlRegExp.test(data);
            break;
        }
        default:
            break;
        }
        if (statusValidate) return config.message;
    }
    for (const fieldName in data) {
        for (const validateMetchod in config[fieldName]) {
            const error = validate(
                validateMetchod,
                data[fieldName],
                config[fieldName][validateMetchod]
            );
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            };
        }
    }
    return errors;
}
