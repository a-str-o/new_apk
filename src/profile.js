import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard ,ImageBackground} from 'react-native';
import ADD from './AddOfferAnn';
import PRO from './EditProfile';
import Card from '../shared/card';
import { GlobalStyles } from '../GlobaleStyle/GlobaleStyle1';

export default function Home({ navigation }) {
  const [aDDoffer, setaDDoffer] = useState(false);
  const [edit, setEdit] = useState(false);

  const [reviews, setReviews] = useState([
    { title: 'TITLE', discription: 'DISCRIPTION',homeSpace: 'HOME SPACE', rooms:'ROOMS' , Etage: 'ETAGE', key: '1' },]);
  const [ProfileTab, setProfileTab] = useState([
    { firstName: 'FIRST NAME', lastName: 'LAST NAME',
    email: 'EMAIL', phoneNumber:'PHONE NUMBER' , key: '1'},]);
    
    

  const add = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setaDDoffer(false);
  };
  const EditPro = (review) => {
    review.key = '1';
    setProfileTab(() => {
      return [review];
    });
    setEdit(false);
  };

return (
    <View>
    <ImageBackground
    source={require('../img/img25.png')}
    style={GlobalStyles.imageProfile} 
    >
   
      <Modal visible={edit} animationType='slide'>
      <ImageBackground
      source={require('../img/img26.png')}
      style={GlobalStyles.imageProfile} 
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={GlobalStyles.modalContent}>
          <TouchableOpacity style={GlobalStyles.imgs}
           onPress={() => setEdit(false)}   activeOpacity={0.5}>
          <Image 
          style={{
            height:50,
            width:50,
            marginBottom:60,
          }}
          source={require('../img/img14.png')}
          />
          </TouchableOpacity>
          
   
            <PRO addReview={EditPro} />
          </View>
        </TouchableWithoutFeedback>
        </ImageBackground>
      </Modal>

      <Modal visible={aDDoffer} animationType='slide'>
      <ImageBackground
      source={require('../img/img26.png')}
      style={GlobalStyles.imageProfile} 
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={GlobalStyles.modalContent}>
            <TouchableOpacity style={GlobalStyles.imgs}
             onPress={() => setaDDoffer(false)}   activeOpacity={0.5}>
            <Image 
            style={{
              height:50,
              width:50,
              marginBottom:60,
            }}
            source={require('../img/img14.png')}
            />
            </TouchableOpacity>
            <ADD addReview={add} />
          </View>
        </TouchableWithoutFeedback>
        </ImageBackground>
      </Modal>

    
    <View style={GlobalStyles.group}>
           <TouchableOpacity onPress={() => setaDDoffer(true)}   activeOpacity={0.5}>
            <Image 
            style={{
              height:50,
              width:50,
            }}
            source={require('../img/img29.png')}
            />
            </TouchableOpacity>
            <Image
              style={{
               height: 100,
               width: 100,
                    }}
              source={require('../img/img27.png')}
           />
          <TouchableOpacity onPress={() => setEdit(true)}  activeOpacity={0.5}>
            <Image 
            style={{
              height:50,
              width:50,
            }}
            source={require('../img/img28.png')}
            />
            </TouchableOpacity>
    </View>
    <View>
    </View>

    <View style={GlobalStyles.profileTop}>
    <FlatList data={ProfileTab} 
    renderItem={({ item }) => (
      <View style={GlobalStyles.profile}>
          <Text style={GlobalStyles.titleText}>{ item.firstName } . { item.lastName }</Text>
          <Text style={GlobalStyles.titleText}>{ item.email }</Text>
          <Text style={GlobalStyles.titleText}>{ item.phoneNumber }</Text>
      </View>
    )} />
    </View>

<View style={GlobalStyles.anonce}>
    <FlatList data={reviews} 
    renderItem={({ item }) => (
        <Card>
          <Text style={GlobalStyles.titleText2}>title</Text>
          <Text style={GlobalStyles.titleText2}>{ item.title }</Text>
          <Text style={GlobalStyles.titleText2}>discription</Text>
          <Text style={GlobalStyles.titleText2}>{ item.discription }</Text>
          <Text style={GlobalStyles.titleText2}> home space : { item.homeSpace } .    rooms : { item.rooms }</Text>
          <Text style={GlobalStyles.titleText2}>Etage : { item.Etage }</Text>
        </Card>
    )} />
    </View>
    </ImageBackground>
    </View>
  );
}
