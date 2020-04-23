import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

import styles from './styles';

//   import logo from '../../../assets/logo.png'
// import ElfaServices from '../ElfaServices';
// import styles from './styles';


export default function Charts(){
    return(
        <View style={styles.container}>
  <Text>Elfa Engenharia</Text>
  <BarChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={200}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={2} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#774585",
      backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#fff",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(20,0,255, ${opacity})`,
      labelColor: (opacity = 2) => `rgba(20,0,255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#774585"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 18,
      marginBottom: 20,
      
    }}
  />
</View>
    )
}

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 2,
    backgroundGradientTo: "#774585",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days", "Sunny Days", "Snowy Days"] // optional
  };