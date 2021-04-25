import React,{Component} from 'react'
import { electron } from 'webpack'

const date=new Date

class Register extends Component{

    constructor(props: {} | Readonly<{}>){
        super(props)
        //setting the default values as states early in advance
        this.state={'Nationality':'India','Gender':'Not Selected',"Marital_Status":'Not Selected',
        'Blood_Group':'Not Selected','Doctor_Name':'Dr Arun Babu','Purpose':'Consultation'}

        //handle change when each form spaces are edited
        this.handleChange=this.handleChange.bind(this)

        //handle click if submit or loggout is pressed
        this.handleClick=this.handleClick.bind(this)
    }

    componentDidMount(){

      // setting time and date at the time of load
      let time_field=document.getElementById('Time')
      time_field.value=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`


      //setting date
      let date_field=document.getElementById('Date')
      date_field.value=`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`


      //get the default values inside state since it wont get updated on handleChange

      this.setState(prevState =>
        {
          return {'Date':date_field.value,'Time':time_field.value}
        })

        
      
    }

    //handlechange gets the values of the form and changes state
    handleChange(event: { target: { value: any; id: any } }){
      

      //getting the id,name,value from the change event
      let {value,id} =event.target
      //adding these values to state so we send it to database
      
      this.setState((prevstate) =>
      {
        
        return  {[id]:value}
      })

      console.log(this.state)
      
      
      

      
    }

    //handleclick for recieving submit and log out events
    handleClick(event: { preventDefault: () => void; target: { id: any } })
    {
      event.preventDefault()
      let {id}=event.target
      
      if(id=='Submit')
      {
        //if the button that was pressed is submit
        console.log('send')
      }
    }
    
    
    
    
    render(){
      
        return(


            <div id="Register">
        <nav className="navbar">
          <div className="navbar__container">
            <a href="#home" id="navbar__logo">
              Patient Database
            </a>
            <div className="navbar__toggle" id="mobile-menu">
              <span className="bar"></span> <span class="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className="navbar__menu">
              <li className="navbar__item">
                <a href="#home" className="navbar__links" id="home-page">
                  Home
                </a>
              </li>
              <li className="navbar__item">
                <a href="#about" className="navbar__links" id="about-page">
                  Register
                </a>
              </li>
              <li className="navbar__item">
                <a
                  href="#services"
                  className="navbar__links"
                  id="services-page"
                >
                  Chart
                </a>
              </li>
              <li className="navbar__btn">
                <a href="#sign-up" className="button" id="signup">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div id="contents">
            <form class="signup-form" action="/register" method="post">
                {/* <!-- form header --> */}
                <div class="form-header">
                    <h1>Register New patient</h1>
                </div>

                <div id='Date_Picture'>
                    <div id='Date_Time'>
                    <div className='data_field'>
                        <label for='Date'>Date:</label>
                        <input id ='Date' type='text' onChange={this.handleChange} ></input>
                    </div>


                    <div className='data_field'>
                        <label for='Time'>Time:</label>
                        <input id ='Time' type='text' onChange={this.handleChange}></input>
                    </div>
                    </div>
                    <div id='Image_and_Button' className='data_field'>
                      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt='avatar' id='avatar'></img>
                      <button>Capture</button>

                    </div>
                </div>
                
               
                    
                
                
                
                
                
                {/* <!-- form body --> */}
                <div class="form-container">
                    <div class='form-body'>
                    <div className='data_field'>
                        <label for='Patient_id'>Patient ID:</label>
                        <input id ='Patient_id' type='text' onChange={this.handleChange}></input>
                    </div>

                    <div className='data_field'>
                        <label for='Patient_Name'>Patient Name:</label>
                        <input id ='Patient_Name' type='text' onChange={this.handleChange} ></input>
                        <p id='check'>asda</p>
                    </div>

                    <div className='data_field'>
                        <label for='Nationality'>Nationality:</label>
                        <input id ='Nationality' type='text' defaultValue='India' onChange={this.handleChange}></input>
                    </div>

                    <div className='data_field'>
                        <label for='Age'>Age:</label>
                        <input id ='Age' type='text' onChange={this.handleChange}></input>
                    </div>

                    <div className='data_field'>
                        <label for='DOB'>Date of Birth:</label>
                        <input id ='DOB' type='date' onChange={this.handleChange}></input>
                    </div>

                    <div className='data_field'>
                    <label for='Gender'>Gender :</label>
                    <select id="Gender" name="Gender" onChange={this.handleChange}>
                    <option value="Not Selected">Not Selected</option>  
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    
                    </select>
  
                    </div>

                    <div className='data_field'>
                        <label for='Address'>Address:</label>
                        <textarea id='Address' placeholder='Enter address Here' onChange={this.handleChange}></textarea>
                    </div>


                    <div className='data_field'>
                    <label for='Blood_Group'>Blood Group:</label>
                    <select id="Blood_Group" name="Blood_Group" onChange={this.handleChange}>
                    <option value="Not Selected">Not Selected</option>
                    <option value="A+">A+</option>
                    <option value="O+">O+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="A-">A-</option>
                    <option value="O-">O-</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                    </select>
                    </div>


                    <div className='data_field'>
                        <label for='Phone_Number'>Phone Number:</label>
                        <input id ='Phone_Number' type='text' onChange={this.handleChange}></input>
                    </div>



                    <div className='data_field'>
                        <label for='Mobile_Number'>Mobile Number:</label>
                        <input id ='Mobile_Number' type='text' onChange={this.handleChange}></input>
                    </div>


                    <div className='data_field'>
                        <label for='Email'>Email:</label>
                        <input id ='Email' type='text' onChange={this.handleChange}></input>
                    </div>


                    <div className='data_field'>
                    <label for='Marital_Status'>Marital Status:</label>
                    <select id="Marital_Status" name="Marital_Status" onChange={this.handleChange}>
                    <option value="Not Selected">Not Selected</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    </select>
  
                    </div>

                    <div className='data_field'>
                        <label for='Occupation'>Occupation:</label>
                        <input id ='Occupation' type='text' onChange={this.handleChange}></input>
                    </div>


                    <div className='data_field'>
                        <label for='Doctor_Name'>Doctor Name:</label>
                        <input id ='Doctor_Name' type='text' defaultValue='Dr Arun Babu' onChange={this.handleChange}></input>
                    </div>

                    <div className='data_field'>
                        <label for='Purpose'>Purpose:</label>
                        <input id ='Purpose' type='text' defaultValue='Consultation' onChange={this.handleChange}></input>
                    </div>

                    <div className='data_field'>
                        <label for='Reffered_By'>Reffered By:</label>
                        <input id ='Reffered_By' type='text' onChange={this.handleChange}></input>
                    </div>
                    </div>

                
                
                
                
                
                
                
                
                
                
                
                
                </div>
                
                
                
                
                
                {/* <!-- form footer --> */}
                <div class="form-footer">

                
                  <button id='Submit' onClick={this.handleClick}>Register</button>
                
                </div>
            
            
            
            
            
            </form>
          
        </div>
      </div>
    
        )
    }
}

export default Register