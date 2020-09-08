import {StyleSheet , Dimensions} from 'react-native';
var deviceWidth = Dimensions.get('window').width;

export const GlobalStyles = StyleSheet.create({

  //title/text____________________________________________
  titleText: {
    color:'#FFFFFF',
    textAlign: 'center',
  },
  titleText2: {
    color:'#D50000',
    textAlign: 'center',
  },
  title: {
    borderWidth: 1,
    borderColor: "#777",
    margin: 10,
    padding: 10,
    width: 200,
},
title1: {
  height: 40,
  marginHorizontal: 10,
  borderRadius: 35,
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 5,
  shadowOffset:{width: 2, height: 2},
  shadowColor: 'black',
  shadowOpacity: 0.2,
},
title2: {
  height: 40,
  marginTop:40,
  marginBottom:40,
  marginHorizontal: 20,
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 5,
},

title4: {
  borderWidth: 1,
  width: deviceWidth -30,
  borderColor: "#777",
  margin: 10,
  padding: 10,
  },
erroText:{
  color:'#D50000',
  fontWeight:'bold',
  textAlign: 'center',
  justifyContent: 'flex-start',
  alignItems: 'center',
},

textBarre:{
  alignItems: 'flex-start',
  color:"#D50000",
  flex:1,
},
//button_____________________________________
button1: {
  backgroundColor: '#D50000',
  height: 40,
  color: 'white',
  marginHorizontal: 10,
  borderRadius: 35,
  alignItems: 'center',
  justifyContent: 'space-between',
  marginVertical: 10,
  shadowOffset:{width: 2, height: 2},
  shadowColor: 'black',
  shadowOpacity: 0.2,
},
button2: {
  backgroundColor: 'white',
  height: 50,
  marginHorizontal: 20,
  borderRadius: 35,
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 5,
  shadowOffset:{width: 2, height: 2},
  shadowColor: 'black',
  shadowOpacity: 0.2,
},
//textInput_________________________________________
textInput:{
  backgroundColor: 'white',
  height:50,
  borderRadius: 25,
  borderWidth: 3,
  marginHorizontal: 20,
  paddingLeft: 10,
  marginVertical: 5,
  borderColor: 'rgba(0,0,0,0.2)',
},
input: {
  borderWidth: 1,
  marginLeft:20,
  width: deviceWidth -40,
  borderColor: '#ddd',
  padding: 10,
  fontSize: 12,
  borderRadius: 6,
},

//container_______________________________________

MainContainer: {
  width: deviceWidth,
  backgroundColor: '#fff',
  justifyContent: 'space-around',
  flexDirection: 'row',
  alignItems: 'flex-end',
  paddingBottom: 10,
},
container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},

containerProfile: {
  flex: 1,
},
containerChat: {
  flex: 1,
},
//paragraph_________________________________________________

paragraph: {
  marginVertical: 8,
  lineHeight: 20,
},

inputParagraph: {
  marginHorizontal: 20,
  borderBottomColor:'red',
  borderBottomWidth:1,
  
},
//iconStyle________________________________________________
  imgProfile:{
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  IconStyle:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
ImageIconStyle: {
  bottom: 0
},
imgs:{
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
},
chatIcon:{
  alignItems: 'flex-end',
},
//group______________________________________________

group:{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end',
  marginTop:15,
  borderRadius: 10,
},
groupchat: {
  color: '#fff',
  width: deviceWidth,
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',

},
//view___________________________________________
screenView: {
  width: deviceWidth,
  backgroundColor: '#ffffff',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row'
},
Cadre: {
  width: deviceWidth,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row'
},

//barres_________________________________________________

barre:{
  width: deviceWidth -30,
  marginTop:140,
  justifyContent: 'space-around',
  flexDirection: 'row',
  alignItems: 'center',
},
//model________________________________________________

modalClose: {
  marginTop: 20,
  marginBottom: 0,
},
modalContent: {
  flex: 1,
},
//aling___________________________________________________
Aling:{
  marginTop:40,
  height: 40,
  marginHorizontal: 20,
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 5,
},
//imagBackground____________________________________________________

imageProfile: {
  flex: 1,
  width: deviceWidth,
  resizeMode: "cover",
  justifyContent: "flex-start"
},
//profile_______________________________________________
profile:{
  flex: 1,
  color:'#fff',
},
profileTop:{
  marginTop:10,
  marginBottom:80,
  alignItems: 'center',
  justifyContent: 'center',
},
row: {
  flex: 1,
  color:'#fff',
  justifyContent: 'space-between',
  flexDirection: 'row',
  justifyContent: "space-around"
},
anpnce:{
  width: deviceWidth,
}
  });