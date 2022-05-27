import SignInForm from "../Components/SignInForm";
import SignUpForm from "../Components/SignUpForm";
import '../Styles/Authentication.styles.scss';

export default function Authentication() {

  return (
    <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
    </div>
  );
}
