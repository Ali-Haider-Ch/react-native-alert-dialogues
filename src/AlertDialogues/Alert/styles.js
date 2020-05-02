import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    minHeight: 250,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 20,
  },
  buttonView: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignSelf: 'center',
  },
  buttonSuccess: {
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: 'green',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonError: {
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: 'red',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWarning: {
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: 'blue',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonConfirm: {
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: 'purple',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 18,
  },
  iconStyle: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  okButton: {
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: 'green',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
  cancelButton: {
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: 'red',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
});