import React from "react";
import { Container , Typography, AppBar, Grow, Grid} from "@material-ui/core";
// We use Route in order to define the different routes of our application
// import { Route } from "react-router-dom";

// // We import all the components we need in our app
// import Navbar from "./components/navbar";
// import Edit from "./components/edit";
// import Create from "./components/create";
// import RecordList from "./components/recordList";
import Form from "./components/form";
import Posts from './components/Posts'
const App = () => {
  return (
       
         
      <Container maxWidth = "lg">
           <AppBar  position="static" color="inherit">
                <Typography variant="h2" >CommunityBuilder</Typography>
            </AppBar>

            <Grow in>
                <Container>
                    <Grid justifyContent="space-between" alignItems="stretch" spacing={3}>
                        
                        <Grid item xs ={12} sm ={4}></Grid>
                            <Form/>
                        <Grid item xs ={12} sm ={7}></Grid>
                            <Posts/>
                    </Grid>
                </Container>

            </Grow>
      </Container>
   
  );
};

export default App;