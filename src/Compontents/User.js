

    import React from "react";


    class fetchRandomUser extends React.Component{
    
        state = {
            loading: true, 
            person: null,
        };
    
    
        async componentDidMount() {
            const url = "https://randomuser.me/";
            const response = await fetch(url);
            const data = await response.json();
            this.setState({person: data.results[0]})
        }
    
         render(){
             return 
         }
     }
    
    
    
     export default fetchRandomUser;
     
     