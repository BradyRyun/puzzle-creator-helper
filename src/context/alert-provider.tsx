import React, { createContext, useState, useEffect } from 'react';

// Define the shape of the alert object
type Alert = {
    message: string;
    type: 'error' | 'success';
};

// Create the alert context
export const AlertContext = createContext<{
    alert: Alert | null;
    setAlert: React.Dispatch<React.SetStateAction<Alert | null>>;
}>({
    alert: null,
    setAlert: () => {},
});


type AlertProviderProps = {
    children: React.ReactNode;
};


// Create the alert provider component
export const AlertProvider = (props: AlertProviderProps) => {
    const { children } = props;
    const [alert, setAlert] = useState<Alert | null>(null);

    useEffect(() => {
        if (alert) {
            const timeout = setTimeout(() => {
                setAlert(null);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [alert]);

    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            {children}
        </AlertContext.Provider>
    );
};
