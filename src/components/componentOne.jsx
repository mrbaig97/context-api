import { GlobalContext } from '../context/Context';
import { useContext } from "react";

function ComponentOne() {
    let { state, dispatch } = useContext(GlobalContext);

    function logout() {
        dispatch({
            type: "USER_LOGOUT",
            payload: null
        })
    }

    function login() {
        dispatch({
            type: "USER_LOGIN",
            payload: {
                userName: "FARAZ BAIG",
                email: "farazbaig521@gmail.com.com",
                subject: "Data Science"
            }
        })
    }

    function toggleTheme() {
        dispatch({
            type: "TOGGLE_THEME"
        })
    }

    return (
        <>
            <h1 className = 'title'>First component </h1>
            <p className = 'profile'>
                username: {state?.user?.userName} <br />
                email: {state?.user?.email} <br />
                subject: {state?.user?.subject} <br />
            </p>
            <br />

            <button className = 'btn' onClick={logout}>Logout</button>
            <button className = 'btn' onClick={login}>Login </button>

            <br />

            <h1>{(state.darkTheme) ? <div className = 'theme'>Dark Theme</div> : "Light Theme activated"}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    );
}
export default ComponentOne;