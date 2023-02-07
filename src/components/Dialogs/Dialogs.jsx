import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import MessageItem from './Message/Messageitem';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from '../utils/validators/validators';
import { Textarea } from '../FormsControls/FormsControls';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <MessageItem message={m.message} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Navigate to={'/login'} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const maxLength = maxLengthCreator(30);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} name={"newMessageBody"} component={Textarea} validate={[required, maxLength]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form >
    )
}

const AddMessageReduxForm =  reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)


export default Dialogs;
