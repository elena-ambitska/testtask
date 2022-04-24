import React from "react";

export const UserContext = React.createContext({
    users: [],
    setUsers: (newUsers) => {
        this.users = newUsers;
    }
});