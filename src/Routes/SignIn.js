import { createUserDocumentFromAuth, signInWithGooglePopUp } from "../Utils/Firebase";

export default function SignIn() {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

  return (
    <div>
        <h1>Sign In</h1>
        <button onClick={logGoogleUser} >Sign-In with Google PopUp</button>
    </div>
  );
}
