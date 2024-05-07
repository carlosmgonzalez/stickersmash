import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";

interface Props {
  placeholderImage: ImageSourcePropType | undefined;
}

export const ImageViewer = ({ placeholderImage }: Props) => {
  return <Image source={placeholderImage} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
