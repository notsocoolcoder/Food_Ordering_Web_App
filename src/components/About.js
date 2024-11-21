import User from "./User"
import Userclass from "./Userclass"

class About extends React.Component{
    constructor(props) {
        super(props)
        console.log("parent constructor")
    }

    componentDidMount(){
        console.log("parentcomponentdidmount")
    }
    render(){
        return<>
<User name={"Vanshika Chhikara"}></User>
<Userclass name={"first child"}></Userclass>
<Userclass name = {"secondchild"}></Userclass>
 </>
    }
}

export default About