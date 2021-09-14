import React from 'react';
import {Box, Button, Container, Grid, Typography} from "@material-ui/core";

const Login = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justify={"center"}
            >
                <Grid style={{borderRadius: 15, width: 400, paddingTop: 20,background: "lightgray"}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >


                    <Typography variant="h5">
                        Приветствую тебя, самурай!
                    </Typography>

                    <Box p={5}>

                        <Button variant={"outlined"}>
                            Войти с помощью Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;