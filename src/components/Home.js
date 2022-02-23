import React, {Component} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import '../css/Home.css';
import appstore from '../images/appstore.svg';
import google from '../images/google.svg';

class Home extends Component{

  constructor() {
    super();
    this.state = {
      name: '',
      roomCode: '',
      isFetchingRooms: false,
      rooms: []
    };
    this.nameRef = React.createRef('name')
    this.roomRef = React.createRef('roomCode')
    this.timer = null;
  };
//value={this.state.name} onChange={this.setName}

  startGame = () =>{
    this.setState({
      name: this.nameRef.current.value,
      roomCode: this.roomRef.current.value
    })
    console.log(this.state.rooms);
  };

  componentDidMount(){
    this.fetchRooms();
    this.timer = setInterval(()=> this.fetchRooms(), 600000);
  };

  componentWillUnmount(){
    clearInterval(this.timer);
    this.timer = null;
  };

  fetchRooms = () => {
    this.setState({isFetchingRooms: true});

    fetch('/rooms')
      .then(response =>{
        console.log(response);
        return response.json();

      })
      .then((result)=>{
        console.log(result);
        this.setState({rooms: result, isFetchingRooms: false});

      })
      .catch(e => {
        console.log(e);
        this.setState({isFetchingRooms:false});
      });
  };

  render()
  {
    return (
      <section className ="section">
        <div className ="Left">
          <div className ="containerLeft">
            <div className="textField">
              <TextField id="outlined-basic" label="Name" variant="outlined" inputProps={{maxLength:10}} inputRef={this.nameRef}/>
            </div>
            <TextField id="outlined-basic" label="Room Code" variant="outlined" helperText= "Enter the 4 digit code" inputProps={{style: {textTransform: 'uppercase'}, maxLength:4}} inputRef={this.roomRef}/>
          </div>
        </div>

        <div className = "Middle">
          <Button className = "StartGame" style={{color:'white',backgroundColor:'#00c500'}} onClick={this.startGame}> START GAME </Button>
        </div>

        <div className ="Right">
          <div className ="containerRight">
            <h2 className="h2"> Play in 3D </h2>
            <img src={appstore} alt="Appstore" className="image" />

            <img src={google} alt="Google Store" className="image2" />
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
