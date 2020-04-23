import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f5',
    flexDirection: "row",
    justifyContent: "center"
  },
  header: {
    marginTop: 85,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 25,
    color: "#000000",
    fontWeight: 'bold',
    marginBottom: 15,
    justifyContent: 'space-between'
  },
  icon: {
    height: 39,
    width: 45,
    alignItems: "center",
    
  },
  boxes: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    position: "absolute",
    marginTop: '50%'
  },
  boxesText: {
    color: "#FFF",
    fontWeight: 'bold',
    fontSize: 20,
    flexDirection: "row",
  },
  box1: {
    width: '45%',
    height: 120,
    backgroundColor: '#00bfff',
    marginBottom: 30,
    borderRadius: 10,
    justifyContent:"center",
    alignItems: "center"
  },
  box2: {
    
    width: '45%',
    height: 120,
    backgroundColor: '#32cd32',
    borderRadius: 10,
    justifyContent:"center",
    alignItems: "center"
  },
  box3: {
    width: '45%',
    height: 120,
    backgroundColor: '#ff8c00',
    borderRadius: 10,
    justifyContent:"center",
    alignItems: "center"
  },
  box4: {
    width: '45%',
    height: 120,
    backgroundColor: '#ff0000',
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center'
  }
})