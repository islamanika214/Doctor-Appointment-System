import { createContext } from "react";
import { doctorsList } from "../assets/assets";


export const DoctorAppContext = createContext()


const DoctorAppContextProvider = (props) => {

    const doctorData ={
        doctorsList

    }
    return(
        <DoctorAppContext.Provider value={doctorData}>
            {props.children}
        </DoctorAppContext.Provider>
    )
} 

export default DoctorAppContextProvider