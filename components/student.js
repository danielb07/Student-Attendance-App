import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import database from '../config'

export class Student extends React.Component {
  constructor(){
    super();
    let today = new Date();
    let date = today.getDate()+ '-' + (today.getMonth() + 1)+ '-' + today.getFullYear()  
    this.state = {
      date:date
    }
  }

  present=()=>{
    
    database.ref('student/'+this.props.RollNo).update({

      [this.state.date]:'present'
    });
  }

  absent=()=>{
    database.ref('student/'+this.props.RollNo).update({
      [this.state.date]:'absent'
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <table>
          <tr>
            <td>
              <Text style={styles.text}>{this.props.RollNo}</Text>
            </td>
            <td>
              <Text style={styles.text}>{this.props.Text}</Text>
            </td>
            <td>
              <TouchableOpacity style={styles.button} onPress={this.present}>
                <Text style={styles.buttonText}>Present</Text>
              </TouchableOpacity>
            </td>
            <td>
              <TouchableOpacity style={styles.button} onPress={this.absent}>
                <Text style={styles.buttonText}>Absent</Text>
              </TouchableOpacity>
            </td>
          </tr>
        </table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: '10px',
    marginTop: 10,
    width: 100,
    height: 45,
  },

  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },

  container:{
    marginTop:20
  },

  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Student;
