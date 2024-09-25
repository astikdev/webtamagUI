import { Dimensions, Platform } from "react-native";

export const DeviceWidth = Dimensions.get("window").width;

export const DeviceHeight = Dimensions.get("window").height;

export const isWeb = Platform.OS === "web";

export const isNative = Platform.OS === "ios" || Platform.OS === "android";

export const isIOS = Platform.OS === "ios";

export const isAndroid = Platform.OS === "android";

export const isMobileWeb = isWeb && DeviceWidth <= 768;

export const isDesktopWeb = isWeb && !isMobileWeb;

export const AdjustedDeviceWidth = 420;

export const FinalDeviceWidth = isDesktopWeb
  ? AdjustedDeviceWidth
  : DeviceWidth;
