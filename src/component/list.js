import { useLocation, useNavigate, Link  } from 'react-router-dom';
import react, { useEffect } from "react";

export default function List() {
    const loc = useLocation();
    const navigate = useNavigate();
  
    useEffect(()=>{
        if(!loc || !loc.state || loc.state.is != 't')  navigate('/');
    },[])

    return (
        <div className="bg-gray-100">
             <header className="p-5 bg-white shadow-md flex justify-between items-center">
            <span className="font-semibold">Logged in as: <span id="username" style={{color: "#0029a4"}} className="cursor-pointer">Admin</span></span>
            <span className="font-semibold">Reading Coins: <span id="coins" style={{color: "red"}} className="cursor-pointer">100</span>🪙</span>
        </header>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Category: Fantasy</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                    <img src="book-cover.jpg" alt="Book Title" className="w-32 h-48 mb-4"/>
                    <h2 className="text-lg font-semibold">제목</h2>
                    <p className="text-gray-600">작가</p>
                    <Link to="/reading" state={{is :"t"}} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Read </Link>
                </div>
            </div>
        </div>
        </div>
    );
  }