import { GlobalContext } from '../context/Context';
import { useContext } from "react";

function ComponentTwo() {
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
                userName: "BILAL",
                email: "Bilal542@cedia.com",
                subject: "Digital Marketing"
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
            <h1 className = 'title'>Second Component</h1>
            <p className = 'profile'>
                username: {state?.user?.userName} <br />
                email: {state?.user?.email} <br />
                subject: {state?.user?.subject} <br />
            </p>
            <br />

            <button className = 'btn' onClick={logout}>Logout</button>
            <button className = 'btn' onClick={login}>Login</button>

            <br />

            <h1>{(state.darkTheme) ? <div className = 'theme'>Dark Theme</div> : "Light Theme activated"}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    );
}
export default ComponentTwo;