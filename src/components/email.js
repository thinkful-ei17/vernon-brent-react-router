import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import { BrowserRouter as Router } from 'react-router-dom'
import './email.css';

export default function Email() {
    return (
      <Router>
        <div className="email">
            <Sidebar />
            <main>
                <Route path="/:folderId" component={EmailList} />
                  <Route path='/:folderId/:id' component={SingleEmail}/>
            </main>
        </div>
        </Router>
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
