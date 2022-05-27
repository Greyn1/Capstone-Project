import { useState, useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    signInWithGooglePopUp,
    signInAuthUserWithEmailAndPassword
} from "../Utils/Firebase";
import FormInput from "./FormInput";
import Button from './Button';
import '../Styles/SignInForm.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
}

export default function SignInForm() {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const {setCurUser} = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopUp();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            setCurUser(user);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;

                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;

                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit} >
                <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email} />
                <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password} />
                <div className="buttons-container">
                    <Button type="submit" >Sign In</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType='google' >Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}
