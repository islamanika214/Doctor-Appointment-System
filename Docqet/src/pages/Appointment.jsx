import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { assets } from "../assets/assets"
import { DoctorAppContext } from "../context/DoctorAppContexts"


const Appointment = () => {

  const {docId} = useParams()
  const {doctorsList, currencySymbol} =  useContext(DoctorAppContext)

  const [doctorInfo , setDoctorInfo] = useState(null)

  const fetchDoctorInfo = async () => {
    const doctorInfo = doctorsList.find(doctor => doctor._id === docId)
    setDoctorInfo(doctorInfo)
    console.log(doctorInfo)
  }

  useEffect(() => {
    fetchDoctorInfo()
  }, [doctorsList, docId])


  return doctorInfo &&(
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        {/* ----doctor's image---- */}
        <div>
          <img className="bg-sageGlow w-full sm:max-w-72 rounded-lg" src={doctorInfo.photo} alt="" />

        </div>

        {/* ----doctor's info---- */}
        <div className="flex-1 border border-oliveWhisper rounded-lg p-8 py-7 bg-mossyFog mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-white">
            {doctorInfo.fullName}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>

          <div className="flex items-center gap-2 text-sm mt-1 text-oliveWhisper">
            <p>{doctorInfo.qualification} - {doctorInfo.speciality}</p>
            <p className="py-0.5 px-2 border border-mintMist text-xs rounded-full cursor-pointer">{doctorInfo.yearsOfService}</p>
          </div>
{/* mintMist, oliveWhisper, sageGlow, mossyFog */} 
          {/* ----doctor's info---- */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-mintMist">About <img src={assets.info_icon} alt="" /></p>
            <p className="text-sm text-slate-100 max-w-[700px] mt-1">{doctorInfo.bio}</p>
          </div>
          <div>
            <p className="text-slate-200 font-medium mt-4">
              Appointment fee: <span text-slate-50>{currencySymbol}{doctorInfo.consultationFee}</span>
            </p>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Appointment
