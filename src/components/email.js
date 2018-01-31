import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';

export default function Email() {
    return (
        <div className="email">
            <Sidebar />
            <main>
                <EmailList folderId="inbox" />
                {/* <Route path='/folderId' component={ Email } exact/> */}
                {/* <SingleEmail folderId="inbox" emailId="1" /> */}
            </main>
        </div>
    );
}

// import { Route } from 'react-router';

// export default function APP(props) {
//     return (
//         <div>
//             <NavBar />
//             <Route path='/' component={HomePage} exact />
//             <Route path='/projects' component={ProjectsNav} />
//             <Route path='/projects' components={ProjectsPage} exact />
//             <Route path='/projects/:projectName' component={Project} exact />
//         </div>
