import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import database from '../config'
import Student from '../components/student'

export class Attends extends React.Component {
  constructor(){
    super();
    this.state = {
      present:0,
      absent:0
    }
  }
  componentDidMount(){
    let attendanceRef = database.ref('student');
    attendanceRef.once('value',(data)=>{
        let today = new Date();
        let date = today.getDate()+ '-' + (today.getMonth() + 1)+ '-' + today.getFullYear()  
        let present = 0;
        let absent = 0;
        let paVal = data.val();
        paVal.map((i)=>{
          
          if(i[date]==='present'){
            present += 1;
            
          } else{
            absent++;
          }
        })
        this.setState({
          present:present,
          absent:absent
        })
    })
  }
  render(){
    return(
      <View>
        <Text style={styles.textContainer}>Attendence</Text>
        <View style={styles.text}>
          <table>
            <tr>
              <td>Present</td>
              <td>{this.state.present}</td>
              
            </tr>
            <tr>
              <td>Absent</td>
              <td>{this.state.absent}</td>
            </tr>
          </table>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'blue',
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text:{
    
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
  
});

export default Attends;




