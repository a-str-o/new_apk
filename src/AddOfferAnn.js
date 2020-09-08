import React from 'react';
import { Button, TextInput, View, Text, ScrollView } from 'react-native';
import { GlobalStyles } from '../GlobaleStyle/GlobaleStyle1';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchemaa = yup.object({
  title: yup.string()
    .required(),
  discription: yup.string()
  .required(),
  homeSpace: yup.string()
  .required(),
  rooms: yup.string()
  .required(),
  Etage: yup.string()
  .required(),
})

export default function ReviewForm({ addReview }) {

  return (
    <View>
    <ScrollView>
      <Formik
        initialValues={{ title: '', discription: '', homeSpace: '', rooms:'' , Etage: '' }}
        validationSchema={reviewSchemaa}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addReview(values);
        }}
      >
        {props => (
          <View>
          <Text style={GlobalStyles.erroText}>{props.touched.title && props.errors.title}</Text>
            <TextInput
              style={GlobalStyles.input}
              placeholder='title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={GlobalStyles.erroText}>{props.touched.discription && props.errors.discription}</Text>
            <TextInput
              style={GlobalStyles.input}
              multiline
              minHeight={60}
              placeholder='discription'
              onChangeText={props.handleChange('discription')}
              value={props.values.discription}
              onBlur={props.handleBlur('discription')}
            />
            <Text style={GlobalStyles.erroText}>{props.touched.homeSpace && props.errors.homeSpace}</Text>
            <TextInput 
              style={GlobalStyles.input}
              placeholder='homeSpace'
              onChangeText={props.handleChange('homeSpace')}
              value={props.values.homeSpace}
              keyboardType='numeric'
              onBlur={props.handleBlur('homeSpace')}
            />
            <Text style={GlobalStyles.erroText}>{props.touched.rooms && props.errors.rooms}</Text>
            <TextInput 
              style={GlobalStyles.input}
              placeholder='rooms'
              onChangeText={props.handleChange('rooms')}
              value={props.values.rooms}
              keyboardType='numeric'
              onBlur={props.handleBlur('rooms')}
            />
            <Text style={GlobalStyles.erroText}>{props.touched.Etage && props.errors.Etage}</Text>
            <TextInput 
              style={GlobalStyles.input}
              placeholder='Etage'
              onChangeText={props.handleChange('Etage')}
              value={props.values.Etage}
              keyboardType='numeric'
              onBlur={props.handleBlur('Etage')}
            />
            <FlatButton text="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
      </ScrollView>
    </View>
    
  );
}