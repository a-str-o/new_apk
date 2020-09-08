import React from 'react';
import { Button, TextInput, View, Text,ScrollView , ImageBackground } from 'react-native';
import { GlobalStyles } from '../GlobaleStyle/GlobaleStyle1';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
  firstName: yup.string()
    .required(),
  lastName: yup.string()
  .required(),
  email: yup.string()
  .required()
  .email(),
  phoneNumber: yup.string()
  .required(),
})

export default function ReviewForm({ addReview }) {

  return (
    <View>
    <ScrollView>
      <Formik
        initialValues={{ firstName: '', lastName: '',email: '', phoneNumber:''  }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addReview(values);
        }}
      >
        {props => (
          <View>
          <Text style={GlobalStyles.erroText}>{props.touched.firstName && props.errors.firstName}</Text>
            <TextInput
              style={GlobalStyles.input}
              placeholder='firstName'
              onChangeText={props.handleChange('firstName')}
              value={props.values.firstName}
              onBlur={props.handleBlur('firstName')}
            />
            <Text style={GlobalStyles.erroText}>{props.touched.lastName && props.errors.lastName}</Text>
            <TextInput
              style={GlobalStyles.input}
              placeholder='lastName'
              onChangeText={props.handleChange('lastName')}
              value={props.values.lastName}
              onBlur={props.handleBlur('lastName')}
            />
              <Text style={GlobalStyles.erroText}>{props.touched.email && props.errors.email}</Text>
            <TextInput
              style={GlobalStyles.input}
              placeholder='email'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
             onBlur={props.handleBlur('email')}
            />
            <Text style={GlobalStyles.erroText}>{props.touched.phoneNumber && props.errors.phoneNumber}</Text>
            <TextInput 
              style={GlobalStyles.input}
              placeholder='phoneNumber'
              onChangeText={props.handleChange('phoneNumber')}
              value={props.values.phoneNumber}
              keyboardType='numeric'
              onBlur={props.handleBlur('phoneNumber')}
              />
      
              <FlatButton text="Submit" onPress={props.handleSubmit} />  
          </View>
        )}
      </Formik>
      </ScrollView>
    </View>
    
  );
}