import React, { useEffect, useState } from 'react';

const User = () => {
    //use state to store whatever data we will get for profile
    //the state will be called profile and use a function called useProfile to call it
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Define an async function to fetch the data and set the profile
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await res.json();
            setProfile(data);
        };

        // Call the fetchData function after a 5-second delay
        const timer = setTimeout(fetchData, 5000);

        // Clean up the timer to prevent potential memory leaks
        return () => clearTimeout(timer);
    }, []);

    return(
        <div className="user">
            <h2>User Details</h2>

            {profile && (
                <div className='profile'>
                    <h3>{ profile.username }</h3>
                    <p>{profile.email}</p>
                    <a href={profile.website}>{profile.website}</a>
                </div>
            )}

            {!profile && <div><p>loading...</p></div>}
        </div>
    );
};

export default User;