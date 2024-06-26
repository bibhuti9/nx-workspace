import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const transparent = 'transparent';

const LightThemeColor = {
  text: '#000',
  background: '#fff',
  appBackground: '#F8F8F8',
  tint: tintColorLight,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColorLight,
  transparent: transparent,
  buttonPrimary: '#6C63FF',
  buttonPrimaryOpacity: '#6C63FF50',
  buttonSecondary: '#E6E6E6',
  ActivitiesItemBorder: '#E7E7E7',
  chatReceiveBox: '#EEEEEE',
  chatSendBox: '#6C63FF',
  tabBackgroundColor: '#EEEEEE',
  chatText: '#515A63',
  iconInactive: '#A7A7A7',
  textPrimary: '#000',
  textSecondary: '#B3B3B3',
  lightGrey: 'rgba(248, 248, 248, 1)',
  orange: '#FF8A00',
  placeHolderColor: '#939393',
  green: '#1E9600',
  lightRed: '#FF637F',
  skyBlue: '#00BBF5',
  red: '#FF003D',
  purpleTransparent: 'rgba(108, 99, 255, 0.25)',
  orangeTransparent: 'rgba(255, 138, 0, 0.25)',
  skyTransparent: 'rgba(0, 187, 245, 0.25)',
  redTransparent: 'rgba(255, 0, 61, 0.25)',
  greyDark: 'rgba(44, 44, 46, 1)',
  darkGrey: 'rgba(104, 104, 104, 1)',
  greyLightTransparent: 'rgba(77, 77, 77, 1)',
  greyLightText: 'rgba(179, 179, 179, 1)',
  greyTransparent: 'rgba(189, 195, 199, 0.9)',
  blackTransparent: 'rgba(0, 0, 0, 0.3)',
  modalTextColor: 'rgba(88, 130, 224, 1)',
  paginatorDot: 'rgba(208, 208, 208, 1)',
  notificationColor: 'rgba(78, 181, 82, 1)',
  textWalkMe: '#2F2E41',
  textLets: '#666',
  fbColor: 'rgba(74, 89, 143, 1)',
  textTerms: '#A5A5A5',
  fbButtonColor: '#3875EA',
  textGrey: '#848484',
  textTransPrimary: 'rgba(47, 46, 65, 1)',
  borderColor: '#D3D3D3',
  inputBorder: '#EAEAEA',
  aluminum: '#D6D6D6',
  errorText: '#D73A3A',
  buttonBackground: '#AAA5FF',
  headerGradientLeft: '#6C63FF',
  headerGradientRight: '#B592FF',
  successGreen: '#2FDA21',
  purpleLight: '#B6B2FF',
  orangeLight: '#FFBD6F',
  purpleLightOverlay: '#F3F2FF',
  orangeLightOverlay: '#FFF6EC',
  strokeColor: '#E8E8E8',
  themeOrange: '#FF910F',
  lightGreen: '#C7E28D',
  gray: '#808080',
};
const DarkThemeColor = {
  text: '#fff',
  background: '#000',
  appBackground: '#F8F8F8',
  tint: tintColorDark,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColorDark,
  transparent: transparent,
  buttonPrimary: '#6C63FF',
  buttonPrimaryOpacity: '#6C63FF50',
  buttonSecondary: '#E6E6E6',
  ActivitiesItemBorder: '#E7E7E7',
  chatReceiveBox: '#EEEEEE',
  chatSendBox: '#6C63FF',
  tabBackgroundColor: '#EEEEEE',
  chatText: '#515A63',
  iconInactive: '#A7A7A7',
  textPrimary: '#000',
  textSecondary: '#B3B3B3',
  textTerms: '#A5A5A5',
  lightGrey: 'rgba(248, 248, 248, 1)',
  orange: '#FF8A00',
  placeHolderColor: '#939393',
  green: '#1E9600',
  lightRed: '#FF637F',
  skyBlue: '#00BBF5',
  red: '#FF003D',
  purpleTransparent: 'rgba(108, 99, 255, 0.25)',
  orangeTransparent: 'rgba(255, 138, 0, 0.25)',
  skyTransparent: 'rgba(0, 187, 245, 0.25)',
  redTransparent: 'rgba(255, 0, 61, 0.25)',
  greyDark: 'rgba(44, 44, 46, 1)',
  darkGrey: 'rgba(104, 104, 104, 1)',
  greyLightTransparent: 'rgba(77, 77, 77, 1)',
  greyTransparent: 'rgba(189, 195, 199, 0.9)',
  greyLightText: 'rgba(179, 179, 179, 1)',
  blackTransparent: 'rgba(0, 0, 0, 0.3)',
  modalTextColor: 'rgba(88, 130, 224, 1)',
  paginatorDot: 'rgba(208, 208, 208, 1)',
  notificationColor: 'rgba(78, 181, 82, 1)',
  textWalkMe: '#2F2E41',
  textLets: '#666',
  fbColor: 'rgba(74, 89, 143, 1)',
  fbButtonColor: '#3875EA',
  textGrey: '#848484',
  textTransPrimary: 'rgba(47, 46, 65, 1)',
  borderColor: '#D3D3D3',
  inputBorder: '#EAEAEA',
  errorText: '#D73A3A',
  buttonBackground: '#AAA5FF',
  headerGradientLeft: '#6C63FF',
  headerGradientRight: '#B592FF',
  successGreen: '#2FDA21',
  purpleLight: '#B6B2FF',
  orangeLight: '#FFBD6F',
  purpleLightOverlay: '#F3F2FF',
  orangeLightOverlay: '#FFF6EC',
  strokeColor: '#E8E8E8',
  themeOrange: '#FF910F',
  lightGreen: '#C7E28D',
  gray: '#808080',
};

export const getShadow = (elevation: number) => {
  Platform.select({
    ios: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    android: {
      elevation: elevation,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
  });
};
