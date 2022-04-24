import "../styles/Main.scss";
import {useContext, useEffect, useState} from "react";
import {Button} from "./Button";
import {UserContext} from "../context";

const LINK = "https://frontend-test-assignment-api.abz.agency/api/v1/users?count=6"

export const Main = () => {

    const {users, setUsers} = useContext(UserContext);
    const [page, setPage] = useState(1);
    const [showMoreBtn, setShowMoreBtn] = useState(true);


    function getUsers() {
        fetch(LINK + `&page=${page}`).then((response) => response.json())
            .then((data) => {
                setShowMoreBtn(()=>{
                    return page !== data.total_pages
                })
                setUsers((prevUsers) => {
                    const sortedUsers = data.users.sort((user1, user2) => {
                        return user2.registration_timestamp - user1.registration_timestamp
                    })
                    if (page === 1) {
                        return sortedUsers;
                    }
                    return [...prevUsers].concat(...sortedUsers);
                });
            })

        setPage((prevPage) => {
            return prevPage + 1
        })
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <section className="section-users">
            <h2>Working with GET request</h2>
            <ul className="users">
                {users.map(user => {
                    return (
                        <li key={user.id} className="user">
                            <img src={user.photo} className="avatar" alt={user.name}/>
                            <div className="name">{user.name}</div>
                            <div className="position">{user.position}</div>
                            <div className="email">{user.email}</div>
                            <div className="phone">{user.phone}</div>
                        </li>
                    )
                })
                }
            </ul>
            {showMoreBtn ?  (<Button onClick={() => {
                getUsers()
            }} className="showMore">Show more</Button>) : ""}
        </section>
    )
}
