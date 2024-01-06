import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {Siguiente}
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};

export default HomeScreen;
