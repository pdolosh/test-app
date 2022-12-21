import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import Swiper from "react-native-swiper";

interface DataItem {
  title: string;
}

const data: DataItem[] = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'Third Item',
  },
];

const { width } = Dimensions.get('window');


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        horizontal={true}
        showsPagination={false}
        bounces={false}
        loop={true}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text>
              {item.title}
            </Text>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height: '100%',
    backgroundColor: 'white'
  }
});
