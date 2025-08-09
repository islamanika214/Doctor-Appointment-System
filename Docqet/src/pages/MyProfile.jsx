import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
    const [userInfo, setUserInfo] = useState({
        name: "Anika Islam",
        photo: assets.profile_pic,
        email: "wewew@gmail.com",
        phone: "+111111111",
        address: {
            street: "45/1, Lakeview Road",
            area: "Dhanmondi, Dhaka",
        },
        gender: "female",
        dob: "2002-01-05",
    });

    const [isEdit, setIsEdit] = useState(false);

    return (
        <div className="max-w-lg flex flex-col gap-2 text-sm">
            <img className="w-52 rounded" src={userInfo.photo} alt="" />

            {isEdit ? (
                <input
                    className="bg-oliveWhisper/40 text-deepForest text-3xl font-medium max-w-52 mt-4"
                    type="text"
                    value={userInfo.name}
                    onChange={(e) =>
                        setUserInfo((prev) => ({
                            ...prev,
                            name: e.target.value,
                        }))
                    }
                />
            ) : (
                <p className="font-medium text-3xl text-darkMossyFog mt-4">
                    {userInfo.name}
                </p>
            )}

            <hr className="bg-oliveWhisper h-[1px] border-none" />
            <div>
                <p className="text-darkSageGlow underline mt-3">
                    CONTACT INFORMATION
                </p>
                <div>
                    <p>Email id:</p>
                    <p>{userInfo.email}</p>
                    <p>Phone:</p>
                    {isEdit ? (
                        <input
                            type="text"
                            value={userInfo.phone}
                            onChange={(e) =>
                                setUserInfo((prev) => ({
                                    ...prev,
                                    phone: e.target.value,
                                }))
                            }
                        />
                    ) : (
                        <p>{userInfo.phone}</p>
                    )}
                    <p>Address: </p>
                    {isEdit ? (
                        <p>
                            <input
                                onChange={(e) =>
                                    setUserInfo((prev) => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            street: e.target.value,
                                        },
                                    }))
                                }
                                value={userInfo.address.street}
                                type="text"
                            />
                            <br />
                            <input
                                onChange={(e) =>
                                    setUserInfo((prev) => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            area: e.target.value,
                                        },
                                    }))
                                }
                                value={userInfo.address.area}
                                type="text"
                            />
                        </p>
                    ) : (
                        <p>
                            {userInfo.address.street}
                            <br />
                            {userInfo.address.area}
                        </p>
                    )}
                </div>
            </div>
            <div>
                <p>ESSENTIAL INFORMATION</p>
                <div>
                    <p>Gender:</p>
                    {isEdit ? (
                        <select
                            onChange={(e) =>
                                setUserInfo((prev) => ({
                                    ...prev,
                                    gender: e.target.value,
                                }))
                            }
                            value={userInfo.gender}
                        >
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </select>
                    ) : (
                        <p>{userInfo.gender}</p>
                    )}
                    <p>Birth Date:</p>

                    {isEdit ? (
                        <input
                            type="date"
                            onChange={(e) =>
                                setUserInfo((prev) => ({
                                    ...prev,
                                    dob: e.target.value,
                                }))
                            }
                            value={userInfo.dob}
                        />
                    ) : (
                        <p>{userInfo.dob}</p>
                    )}
                </div>
            </div>

            <div>
                {isEdit ? (
                    <button onClick={() => setIsEdit(false)}>
                        Save Changes
                    </button>
                ) : (
                    <button onClick={() => setIsEdit(true)}>Edit Info</button>
                )}
            </div>
        </div>
    );
};

export default MyProfile;
