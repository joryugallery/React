import React from "react";
import UserInfo from "./UserInfo";
import "./UserInfo.css";

const users = [
    {
        name:"모드리치",
        avatarUrl:"https://i.pinimg.com/736x/8d/b4/28/8db428e14ae8c8695436fee63998ce95.jpg",
        comment:"fuck you"
    },
    {
        name:"덕배",
        avatarUrl:"https://i.pinimg.com/736x/fa/94/1c/fa941c1a524e594bccaffcd10577f86b.jpg",
        comment:"your mom bro"

    },
    {
        name:"우리형",
        avatarUrl:"https://i.pinimg.com/736x/35/5a/e9/355ae9a883caf014ae8adb6558c7dcf6.jpg",
        comment:"siuuuuuuuuuuu"
    }

]

function UserInfoList() {
    const currentDate = new Date();
    return(
        <div>
            {
                users.map((user) => {
                    return(
                        <div className={"comment"}>
                            <UserInfo user={user}/>
                            <div>
                                {user.comment}
                            </div>
                            <div className={"comment-date"}>
                                {currentDate.toDateString()}
                            </div>
                        </div>
                    )


                })
            }

        </div>
    )
}

export default UserInfoList;