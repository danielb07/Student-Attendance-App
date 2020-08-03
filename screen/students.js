import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import database from '../config'
import Student from '../components/student'
import AppHeader from '../components/AppHeader'

export class Students extends React.Component {
  constructor(){
    super();
    this.state = {
      namelist:''
    };
  }

  componentDidMount(){
    var studentRef = database.ref('student');
    studentRef.once('value',(data)=>{
      let student_data = data.val();
      this.setState({
        namelist:student_data.map((i) =>
              <Student Text={i.name} RollNo={i.rollno}/>
        )
      })
    })
  }
  render(){
    return (
      <View style={styles.container}>
      
        {this.state.namelist}
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Attendances')}>
          <AppHeader Text='SUBMIT'/>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
});

export default Students;




