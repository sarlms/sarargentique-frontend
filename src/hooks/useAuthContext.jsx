import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        console.error('useAuthContext must be inside an AuthContextProvider');
        return;
    }

    console.log('Context in useAuthContext:', context);

    return context;
}
