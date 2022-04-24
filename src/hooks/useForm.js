import {useState} from "react";

export const useFormFields = (initialValues) => {
    const [fields, setFormFields] = useState(initialValues);

    const changeFieldValue = (e) => {
        const {name, value} = e.target;
        setFormFields(prev => {
            if (e.target.getAttribute('type') === 'file') {
                prev.set(name, e.target.files[0]);
            } else {
                prev.set(name, value);
            }

            return prev;
            //     {
            //     ...prev,
            //     [name]:value,
            // }
        });
    };

    return {fields, changeFieldValue, setFormFields};
}
