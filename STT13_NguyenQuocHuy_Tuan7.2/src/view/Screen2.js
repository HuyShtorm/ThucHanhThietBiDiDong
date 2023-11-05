import { View, Text ,Image, FlatList, Pressable,TouchableOpacity,TextInput,SectionList} from 'react-native'
import React, {useState} from 'react'
import { Icon } from 'react-native-elements';


// Array of bike data
const list = [
  {
    id: 1,
    name: 'To Check Mail',
    content:'huy@gmail.com'
  },{
    id: 2,
    name: 'UI Task Web page',
    content:''
  },{
    id: 3,
    name: 'Learn JavaScript basic',
    content:''
  },
  {
    id: 4,
    name: 'Learn HTML Avanced',
    content:''
  },
  {
    id: 5,
    name: 'Median App UI',
    content:''
  },
  {
    id: 6,
    name: 'Learn Java',
    content:''
  },
  
];
const Screen2 = ({navigation}) => {
  const[filterBike,setFilter] = useState(list);
  const [searchText, setSearchText] = useState('');
  const handleSearch = (text) => {
    setSearchText(text);
 
    const filtered = list.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilter(filtered);
  };
  

  return (
    
        
<View style={{flex:1}}>
           
<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: 'gray',
      borderWidth: 1,
      margin: 16,
      padding: 8,
      flex: 1,
      borderRadius: 10,
    }}
  >
    <Icon
      name="search" 
      type="material" 
      color="black" 
      size={30} 
    />
    <TextInput
      style={{ flex: 1, marginLeft: 10 }}
      placeholder="Search..."
      value={searchText}
      onChangeText={handleSearch}
    />
  </View>
 
</View>


      
      <FlatList
        style={{ flex: 1 }}
        numColumns={1}
        data={list}
        renderItem={({ item }) => (
         
 
         
            <View style={{backgroundColor:'darkgray', width: '100%', height: '5000', justifyContent: 'center', marginVertical: 10, alignItems: 'center' ,
            borderRadius :20, flexDirection: 'row',paddingHorizontal: 20 }}>
                 <Icon
          name="done" 
          type="material" 
          color="green" 
          size={30} 
        />
              <Text style={{fontSize: 25, color: 'black', fontWeight: '700',marginLeft: 10 }}>{item.name}</Text>
              <Icon
          name="edit" 
          type="material" 
          color="red" 
          size={30} 
        />
            </View>
            
  
        )}
      />
      <View style={{ alignItems: 'center' }}>
      <TouchableOpacity
  onPress={() => navigation.navigate('Screen3')}
  style={{
    width: 100,
    height: 100,
    backgroundColor: '#00BDD6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom:50,
  }}
>
  <Text style={{ color: 'white', fontSize: 50 }}>+</Text>
</TouchableOpacity>
</View>
    </View>
    
  )
}

export default Screen2;

