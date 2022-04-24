import {useFormFields} from "../hooks/useForm"
import "../styles/Form.scss";
import {Button} from "./Button";
import {getPosition} from "../utils/getPosition";
import {useEffect, useState, useContext} from "react";
import {getUser, sendRequest} from "../utils/serviceForm";
import {UserContext} from "../context";
import {InputError} from "./InputError";


export const Form = () => {
    const [value, setValue] = useState()
    const [positions, setPositions] = useState([]);
    const [errors, setErrors] = useState({})
    const {users, setUsers} = useContext(UserContext);
    const {fields, changeFieldValue} = useFormFields(new FormData())
    useEffect(() => {
        getPosition().then(result => setPositions(() => {
            return result.positions;
        }))
    }, []);

    const createUser = (e)=>{
        e.preventDefault();
        sendRequest(fields).then(async (response) => {
            const newUser = await getUser(response.user_id);
            setUsers((prevUsers) => {
                return [newUser.user, ...prevUsers];
            })
            setErrors({})
        }).catch((errors)=>{
            setErrors(errors)
        })};

    return (<section className="section-form">
            <h2>Working with POST request</h2>
            <form onSubmit={createUser}>
                <div className="wrap-input">
                    <input type="text" name="name" placeholder="Your name"
                           onChange={changeFieldValue}
                           value={fields.name}
                    />
                    <InputError errors={errors} name="name"/>
                    <input type="email" name="email" placeholder="Email" required
                           onChange={changeFieldValue}
                           value={fields.email}/>
                    <InputError errors={errors} name="email"/>
                    <input type="tel" id="phone" name="phone"
                           pattern="^[\+]{0,1}380([0-9]{9})$"
                           placeholder="Phone" required
                           onChange={changeFieldValue}
                           value={fields.phone}
                    />
                    <legend>+38 (XXX) XXX - XX - XX</legend>
                    <InputError errors={errors} name="phone"/>
                </div>
                <p>Select your position</p>
                <div className="positions">
                    {positions.map(position => {
                        return (<label key={position.id}>
                                <input type="radio" name="position_id" value={position.id}
                                onChange={changeFieldValue}
                                /> {position.name}
                            </label>)
                    })}
                </div>
                <InputError errors={errors} name="position_id"/>
                <input type="file" id="fileUpload" name="photo" className="custom-file-input" title="Upload your photo"
                       onChange={changeFieldValue}
                />
                <InputError errors={errors} name="photo"/>
                <Button>Sign up</Button>
                {errors.message ? errors.message : ''}
            </form>
        </section>)
}