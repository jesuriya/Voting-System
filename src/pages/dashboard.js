import React from 'react';

function Dashboard() {
    var name = window.rname;
    var email = window.remail;
    var phone = window.rphone;
    var id = window.rid;
    return (
        <div>
            <div className='dashboard'>

            <h1>Name : {name}</h1>
            <h1>Mail : {email}</h1>
            <h1>Phone : {phone}</h1>
            <h1>id number : {id}</h1>
            </div>
        </div>
    );
};

export default Dashboard;