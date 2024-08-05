import React, { createContext, useState } from 'react';

// Data
import { IJsonData } from '../interfaces/jsonData';

export interface IUserLoamInfoContext {
    userLoamInfo: IJsonData | undefined;
    setUserLoamInfo: React.Dispatch<React.SetStateAction<IJsonData | undefined>>;
}

interface IProps {
    children: React.ReactNode
}

export const UserLoamInfoContext = createContext<IUserLoamInfoContext | undefined>(undefined);

export const UserLoamInfoContextProvider = ({ children }: IProps) => {

    const [userLoamInfo, setUserLoamInfo] = useState<IJsonData>()

    return (
        <UserLoamInfoContext.Provider value={{ userLoamInfo, setUserLoamInfo }}>
            {children}
        </UserLoamInfoContext.Provider>
    )
};