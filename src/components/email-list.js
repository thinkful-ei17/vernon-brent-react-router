import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './email-list.css';

export function EmailList(props) {
    const emails = props.emailList.map(email =>
        <li key={email.id} className="email-list-email">
            <div className="email-list-email-from">
                {email.from}
            </div>
            <div className="email-list-email-title">
                <Link to={`/${props.folderName.toLowerCase()}/${email.id}`}>{email.title}</Link>
            </div>
        </li>
    );

    return (
        <div className="folder">
            <h2>{props.folderName}</h2>
            <ul className="email-list">
                {emails}
            </ul>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    console.log(props);
    console.log(state);
    const folder = state[props.match.params.folderId];
    //console.log(state[folderId]);
    return {
        folderName: folder.name,
        emailList: Object.keys(folder.emails).map(emailId =>
            folder.emails[emailId]
        )
    }
};

export default connect(mapStateToProps)(EmailList);
