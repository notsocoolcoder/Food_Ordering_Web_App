class Userclass extends React.Component{
    constructor(props){
        super(props)
        this.state={
           userInfo:{
            name:"dummy",
            location:"dummy"
           }
        }
        console.log(this.props.name + "constructor")
    }

   async componentDidMount(){
    const data = await fetch("https://api.github.com/users/akshaymarch7")
    const json = await data.json()
    this.setState({userInfo:json})
    console.log(json)
}


render(){
    const {name,location} = this.state.userInfo
    console.log(name+"render")
    return<>
    
         <h1> name:-{name}</h1>
         <h2>location:- {location}</h2>
       
    </>
}
}

export default Userclass