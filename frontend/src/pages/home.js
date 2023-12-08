import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Card from '../components/card';

const Home = () => {
    const [dishes, setDishes] = useState(null)

    const fetchRecords = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();

            if (response.ok) {
                setDishes(json);
            }
        } catch (error) {
            console.error('Error fetching records:', error);
        }
    };

    const fetchByCanteen = (canteenName) => {
        const url = `/api/records/${canteenName}`;
        fetchRecords(url);
    };

    useEffect(() => {
        fetchRecords('/api/records');
    }, []);


    return ( 
        <div className="relative mt-20">
            <div className="absolute inset-0 min-h-screen" 
                style={{backgroundImage:'url("https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=800")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                }}>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))' }}></div>
            </div>

            <Navbar fetchFun={fetchByCanteen}/>
            
            <div className="p-7 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {dishes && dishes.map((dish) => (
                    <Card key={dish._id} cardData={dish}/>
                ))}
            </div>
        </div>
  );
}

export default Home;