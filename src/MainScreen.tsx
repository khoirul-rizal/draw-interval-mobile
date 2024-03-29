import React, {useEffect, useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {launchImageLibrary, type Asset} from 'react-native-image-picker';

const MainScreen = () => {
  const [imageList, setImageList] = useState<Asset[]>([]);
  useEffect(() => {
    console.log('imageList', imageList);
  }, [imageList]);
  return (
    <View>
      <Text>Welcome, Draw Interval</Text>
      <Text>Please select your images</Text>
      <Button
        onPress={async () => {
          const result = await launchImageLibrary({
            mediaType: 'photo',
            selectionLimit: 0,
            includeBase64: true,
          });
          if (result.assets?.length) {
            setImageList(result?.assets);
            console.log('hitted');
          }
        }}
        title="Select Images"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <View>
        {imageList.map(img => {
          return (
            <Image
              key={img.id}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: 100,
                height: 50,
                borderWidth: 1,
                borderColor: 'red',
              }}
              source={{uri: `data:image/jpeg;base64,${img.base64}`}}
            />
          );
        })}
      </View>
    </View>
  );
};

export default MainScreen;
