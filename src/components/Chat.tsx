import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField, Typography} from '@material-ui/core';
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat";

const Chat = () => {
    const {auth, firestore} = useContext<any>(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData<any>(
        firestore().collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        if (value) {
        firestore().collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })}
        setValue('')
    }

    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13) {
            sendMessage();
        }
    }

    if (loading) {
        return <Loader />
    }

    return (
        <Container>
            <Typography variant="h5" align={'center'}>
                Чат самураев:
            </Typography>
            <Grid container
                  justify={"center"}
                  style={{height: window.innerHeight - 150, marginTop: 20}}>

                <div style={{width: '80%', height: '70vh', border: '1px solid grey', borderRadius: '10px', overflowY: 'auto'}}>
                    {messages && messages.map(message =>
                        <div style={{
                            margin: 10,
                            border: user.uid === message.uid ? '2px solid #B8FFBE' : '2px solid rgba(225,237,255,0.93)',
                            marginLeft: user.uid === message.uid ? 'auto' : '10px',
                            width: 'fit-content',
                            padding: 5,
                            borderRadius: 10
                        }}>
                            <Grid container alignItems={"center"} style={{marginBottom: 5}}>
                                <Avatar src={message.photoURL}/>
                                <div style={{marginLeft: 5, borderRadius: 10}}>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )}


                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{width: '80%'}}
                >
                    <TextField
                        onKeyPress={onKeyPressHandler}
                        fullWidth
                        rowsMax={2}
                        variant={'outlined'}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        style={{borderRadius: '20px', marginBottom: 5}}
                    />
                    <Button onClick={sendMessage} color={'secondary'} variant={"outlined"}>Отправить</Button>
                </Grid>
            </Grid>
        </Container>

    );
};

export default Chat;