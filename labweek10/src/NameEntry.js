import React, {Component} from 'react'

export default class NameEntry extends Component {

    constructor(props) {
        super(props)

        //declare state object
        this.state = {
            Email: 'Default email',
            Name: 'Default Name',
            Address: 'Default Address',
            Address2: 'Default Address2',
            City: 'Default Address',
            Province: 'Default Province',
            PostalCode: 'Default Postal Code'
        }
    }

    showMessage() {
        console.log("You Click Me...")
    }

    readValue = e => {
        console.log(e.target.name)
        //update the state object
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        })
    }

    readFormValues = e => {
        e.preventDefault()
        console.log(JSON.stringify(this.state))
    }

    showResults = e => {
        e.preventDefault()
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Data Entry Form</h1>
                <form onSubmit={this.showResults} class="surround">
                        <label for="Email" class="top" >Email</label> <label for="FullName" class="top" >Full Name</label><br/>
                        <input name="Email" id="Email" placeholder="Email" type="text" onChange={this.showResults}/>
                        <input name="FullName" placeholder="Full Name" type="text" onChange={this.showResults}/>
                    <br/>
                        <label for="Address">Address</label> <br/>
                        <input name="Address" placeholder="1234 Main St" type="text" onChange={this.showResults}/>
                    <br/>
                        <label for="Address2">Address 2</label> <br/>
                        <input name="Address2" placeholder="apartment, studio, or floor" type="text" onChange={this.showResults}/>
                    <br/>
                        <label for="City" class="bottom">City</label> <label for="Province" class="bottom">Province</label> <label for="PostalCode" class="bottom">Postal Code</label> <br/>
                        <input name="City" placeholder="" type="text" onChange={this.showResults}/>
                        <select name="Province" placeholder="Choose..." onChange={this.showResults}>
                            <option value="Alberta">Alberta</option>
                            <option value="British Colombia">British Colomobia</option>
                            <option value="Manitoba">Manitoba</option>
                            <option value="New Brunswick">New Brunswick</option>
                            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                            <option value="Nova Scotia">Nova Scotia</option>
                            <option value="Ontario">Ontario</option>
                            <option value="Prince Edward Island">Prince Edward Island</option>
                            <option value="Quebec">Quebev</option>
                            <option value="Saskatchewan">Saskatchewan</option>
                        </select>
                        <input name="PostalCode" placeholder="" type="text" onChange={this.showResults}/>
                    <br/> 
                        <input name="Agree" id="agree" type="checkbox" />
                        <label for="Agree"> Agree Terms &amp; Condition</label>
                    <br/>
                    <input type="submit" value="Submit"></input>    
                </form>
                <div class="result">
                    <br/> <br/>
                        <label class="result-text">Email:</label>
                        <text> {this.state.Email}</text> 
                    <br/>
                        <label class="result-text">Full Name:</label>
                        <text> {this.state.Name}</text> 
                    <br/>
                        <label class="result-text">Address:</label> 
                        <text> {this.state.Address}</text> 
                    <br/>
                        <label class="result-text">Address 2:</label> 
                        <text> {this.state.Address2}</text> 
                    <br/>
                        <label class="result-text">Province:</label>
                        <text> {this.state.Province}</text> 
                    <br/>
                        <label class="result-text">Postal Code:</label> 
                        <text> {this.state.PostalCode}</text> 
                    <br/>
                </div>
            </div>
        )
    }
        //Component lifecycle methods
        componentWillMount()
        {  
            console.log('Component Will MOUNT!')  
        }
    
        componentDidMount()
        {  
            console.log('Component Did MOUNT!')  
        }
    
        componentWillReceiveProps(newProps)
        {      
            console.log('Component Will Recieve Props!')  
        }
    
        shouldComponentUpdate(newProps, newState)
        {  
            console.log('Component shouldComponentUpdate!') 
            return true;  
        }
    
        componentWillUpdate(nextProps, nextState)
        {  
            console.log('Component Will UPDATE!');  
        }
    
        componentDidUpdate(prevProps, prevState)
        {  
            console.log('Component Did UPDATE!')  
        }
    
        componentWillUnmount()
        {  
            console.log('Component Will UNMOUNT!')  
        }
}
