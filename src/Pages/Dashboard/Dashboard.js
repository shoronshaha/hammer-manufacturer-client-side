import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import PageTitle from '../Shared/PageTitle';




const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <PageTitle title='Dashboard-MyProfile'></PageTitle>
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-orange-500 text-center'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-secondary text-white items-center">
                    {/* <!-- Sidebar content here --> */}
                    {user &&
                        <>
                            <li><Link to="/dashboard">My Profile </Link></li>
                            <li><Link to="/dashboard/myOrder">My Order </Link></li>
                            <li><Link to='/dashboard/addReview'>Add Review</Link></li></>
                    }

                    {admin &&
                        <>
                            <li><Link to="/dashboard/users">Make Admin</Link></li>
                            <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                            <li><Link to="/dashboard/manageOrders">Manage Orders</Link></li>
                            <li><Link to="/dashboard/manageProduct">Manage Product</Link></li>
                        </>}
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;
