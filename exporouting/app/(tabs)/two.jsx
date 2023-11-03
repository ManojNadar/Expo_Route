import { View, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const two = () => {
  return (
    <View>
      <Link href={"/"} asChild>
        <Button title="Logout" />
      </Link>
    </View>
  );
};

export default two;
