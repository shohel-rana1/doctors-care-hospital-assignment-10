import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const [name, setName] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIslogin] = useState(false);

    const googleProvider = new GoogleAuthProvider();

    //login with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //user auth state observer
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        });
    }, [auth])

    //logout 
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    const handleRegistration = event => {
        event.preventDefault();
        console.log(email, password);

        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain two uppercase')
            return;
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password);
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const toggleLogin = event => {
        setIslogin(event.target.checked)
    }

    const handleNameChanged = event => {
        setName(event.target.value)
    }

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
                console.log(user);
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }


    return {
        user,
        error,
        signInWithGoogle,
        logout,
        setUserName, handlePassword,
        handleRegistration,
        handleEmail, toggleLogin,
        handleNameChanged,
        createNewUser,
        processLogin



    }
}

export default useFirebase;