import React, {useContext} from 'react';
import {Box, Button, Container, Grid, Typography} from "@material-ui/core";
import {Context} from "../index";
import firebase from "firebase/compat";


const Login = () => {

    const {auth} = useContext<any>(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} =  await auth.signInWithPopup(provider)
    }

    const loginAn = () => {
        const {user} =   auth.signInAnonymously()
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid style={{borderRadius: 15, width: 400, paddingTop: 20,background: "rgba(225,237,255,0.93)"}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <Typography variant="h5">
                        Приветствую тебя, самурай!
                    </Typography>
                    <Box p={2}>
                        <Button onClick={login} variant={"outlined"}>
                            Войти с помощью Google
                        </Button>

                    </Box>
                    <Box style={{marginBottom: 20}}>
                        <Button onClick={loginAn} variant={"outlined"}>
                            Войти анонимно
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;