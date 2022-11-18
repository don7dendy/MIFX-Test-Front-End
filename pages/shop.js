// eslint-disable-next-line prettier/prettier
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //
import React, {Component} from 'react';
import { Card } from 'react-native-paper';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome';
  import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

 
class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        product : '',
        category : ''
      };
    }

    async componentDidMount(){
      var token = ('Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTViNTVjZDk2NjhiM2FkZjZiYTg2OWMzM2Q4NWU0NDM1NDIxMzczZGZiMmZlODlkNjcwNGExNzdkNTJkMjY0YTI0YTM1MzMyZjJmN2Y5MDIiLCJpYXQiOjE2Njg3NTc4MTUsIm5iZiI6MTY2ODc1NzgxNSwiZXhwIjoxNzAwMjkzODE1LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.QSFWtnuP8Z8qhrzaAn3lu7kF2TXGLPK3WuKVALwi9YYCPsEqsf0cLco19MAbnh4LrBy-WQawgDVdeKxiLa7IYFcgj81W41TlD_xhpNpBGboNx6qbFlL-ZyPYycUcALJDRqjLbKmv3M_71-0TrqNOQiLYq-JNk021uBefh7HJqfcjhsx_C59U1E_WF61w_qqLqFkyaRUMVydKkdoVWWQUomMPrZ6vUsPzfehc49soW_mGBzq5iEgceZQjCyi1SFgHkTqL1L4PbxgEv47sP0z2_A4h328hxiZjhFWTbOAARRDsb7TL_4CxBjjlVJSBv7PaIDlOmz7IF5rqyyAtrLWjqE2l0CkQLvTK6c2NlcUWCiqLAolIyqTNkDCa_nWAfFX4H_7dKBpe2VzjSZwSoN23RfR63Qz9bNZ7ZHoc8ai2TpPzu_CNiUA2aQ6FuTjoNr2Qn0kbPKnBNTO1HFPL_wtpRW5e2QVivbHdGqodlAvsAUXQCvyoFAzoUP8SVcL-TiDrsHSUCPDLXug01VeeTuN5ulqQw-P35w_McsNr-aGSTE3GdIWPwfFe-z8yXT6WkgBJFUFfIPkeaOtaiff_yu2RtuxKrrIv8HOnNQZaqtE6sQLf6n39kIVtKJpJ3NRcZT8Vsuvj_5lYh-IMMl9Ex-b7r3I7XyqwZKwYBd9T-8fCgOk');
      try {
        const response = await fetch('https://fe.dev.dxtr.asia/api/category', {
          method: 'GET',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          },
        });
        const responsejson = await response.json();
        this.setState({ category: responsejson });
        console.log('category', this.state.category);
      } catch (error) { }
      try {
        const response1 = await fetch('https://fe.dev.dxtr.asia/api/products', {
          method: 'GET',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          },
        });
        const responsejson1 = await response1.json();
        this.setState({ product: responsejson1 });
        console.log('produk', this.state.product);
      } catch (error) { }
    }

    produk = ()=>{
      if (this.state.product) {
        let uiItems = [];
        for (const obj of this.state.product) {
            if(obj.new == true) {
          uiItems.push(
            <Card style={{width: responsiveWidth(46), backgroundColor:'white',marginBottom: responsiveHeight(1)}}>
              <TouchableOpacity>
                <View style={{justifyContent:'space-between', flexDirection:'row', padding:responsiveWidth(2)}}>
              <Text style={{color:'black'}}>New</Text>
              <Icon name="heart-o" size={20} color="#000" />
              </View>
            <Card.Cover source={{ uri: obj.image }} style={{height: responsiveHeight(20)}} />
            </TouchableOpacity>
            <View style={{padding: responsiveWidth(1.7)}}>
            <Text style={{fontSize: responsiveFontSize(1.4), fontWeight: 'bold',color:"black"}}>{obj.name}</Text>
            <View style={{padding: responsiveWidth(1.7)}}>
            <Rating
  type='star'
  ratingCount={5}
  startingValue={obj.rating}
  imageSize={30}
  readonly={true}
  showRating={false}
/>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: responsiveHeight(2)}}>
              <Text style={{fontSize: responsiveFontSize(1.5), fontWeight: 'bold',color:'black'}}>{obj.price}</Text>
              <Text style={{color:'black' }}>{obj.off}</Text>
              </View>
            </View>
          </View>
          </Card>
          );
        } else if (obj.out_of_stock == true){
            uiItems.push(
                <Card style={{width: responsiveWidth(46), backgroundColor:'white',marginBottom: responsiveHeight(1)}}>
                  <TouchableOpacity>
                    <View style={{justifyContent:'space-between', flexDirection:'row', padding:responsiveWidth(2)}}>
                  <Text style={{color:'white', backgroundColor:'red'}}>Out Of Stock</Text>
                  <Icon name="heart-o" size={20} color="#000" />
                  </View>
                <Card.Cover source={{ uri: obj.image }} style={{height: responsiveHeight(20)}} />
                </TouchableOpacity>
                <View style={{padding: responsiveWidth(1.7)}}>
                <Text style={{fontSize: responsiveFontSize(1.4), fontWeight: 'bold',color:"black"}}>{obj.name}</Text>
                <View style={{padding: responsiveWidth(1.7)}}>
                <Rating
      type='star'
      ratingCount={5}
      startingValue={obj.rating}
      imageSize={30}
      readonly={true}
      showRating={false}
    />
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: responsiveHeight(2)}}>
                  <Text style={{fontSize: responsiveFontSize(1.5), fontWeight: 'bold',color:'black'}}>{obj.price}</Text>
                  <Text style={{color:'black' }}>{obj.off}</Text>
                      </View>
                </View>
              </View>
              </Card>
              );
        } else {
            uiItems.push(
                <Card style={{width: responsiveWidth(46), backgroundColor:'white',marginBottom: responsiveHeight(1)}}>
                  <TouchableOpacity>
                    <View style={{justifyContent:'space-between', flexDirection:'row', padding:responsiveWidth(2)}}>
                  <Text style={{color:'black'}}></Text>
                  <Icon name="heart-o" size={20} color="#000" />
                  </View>
                <Card.Cover source={{ uri: obj.image }} style={{height: responsiveHeight(20)}} />
                </TouchableOpacity>
                <View style={{padding: responsiveWidth(1.7)}}>
                <Text style={{fontSize: responsiveFontSize(1.4), fontWeight: 'bold',color:"black"}}>{obj.name}</Text>
                <View style={{padding: responsiveWidth(1.7)}}>
                <Rating
      type='star'
      ratingCount={5}
      startingValue={obj.rating}
      imageSize={30}
      readonly={true}
      showRating={false}
    />
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: responsiveHeight(2)}}>
                  <Text style={{fontSize: responsiveFontSize(1.5), fontWeight: 'bold',color:'black'}}>{obj.price}</Text>
                  <Text style={{color:'black' }}>{obj.off}</Text>
                      </View>
                </View>
              </View>
              </Card>
              );
        }
    }
        return uiItems;
      } else {
        return null;
      }
    }

      kategori = () => {
        if (this.state.category) {
          let uiItems = [];
          for (const obj of this.state.category) {
            uiItems.push(
            <TouchableOpacity>
              <View style={{flexDirection:'row', justifyContent:'space-around', marginRight:20, padding:5, backgroundColor:'white', borderRadius:10}}>
              <Text style={{color:'black'}}>{obj.name}</Text>
              </View>
              </TouchableOpacity>
            );
            // }
          }
          return uiItems;
        } else {
          return null;
        }
      };

    render() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#c0c5ce', padding:10}}>
        <ScrollView>
      <View style={{ flex: 1}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        {this.kategori()}
          </ScrollView>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', flexWrap: 'wrap', padding: responsiveWidth(1), marginTop:responsiveHeight(3)}}>
      {this.produk()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
        }
};

export default Home;
