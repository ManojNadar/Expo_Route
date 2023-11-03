import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const one = () => {
  return (
    <View>
      <Link href={"/(tabs)/one/details"} asChild>
        <Button title="Open Details" />
      </Link>
      <Link href={"/(aux)/disclaimer"} asChild>
        <Button title="Open disclaimer" />
      </Link>
      <Link href={"/modal"} asChild>
        <Button title="Open Modal" />
      </Link>
    </View>
  );
};

export default one;
