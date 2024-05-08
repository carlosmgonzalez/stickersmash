import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";

interface Props {
  placeholderImage: ImageSourcePropType | undefined;
  selectedImage?: string;
}

export const ImageViewer = ({ placeholderImage, selectedImage }: Props) => {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImage;

  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
